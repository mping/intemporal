(ns intemporal.internal.codec
  "EDN codec shared by the JDBC and FoundationDB stores.

   Both stores previously serialized with cheshire, whose `(parse-string s true)`
   keywordizes map *keys* but never *values* — so `[:processed 5]` came back as
   `[\"processed\" 5]` (bug #22). Because replayed activity results are handed
   straight back to workflow code and workflow args are re-read from the
   persisted `:workflow-started` event on every resume, that silently broke
   replay determinism on JDBC/FDB while InMemory (which holds live Clojure
   values) behaved correctly.

   EDN round-trips everything JSON destroyed: keywords (bare, namespaced, and as
   map values), sets, symbols, ratios, instants, BigInt/BigDecimal, and non-string
   map keys.

   It is also *faithful* in the other direction, which matters as much: a string
   stays a string. The FDB store puts non-event values through this same codec —
   the cached `\"completed\"` status, the owner-id, the `{:wake-at ..}` index
   entries — and compares them against string sets. A codec that keywordized
   indiscriminately on read would quietly make terminal workflows claimable again.

   Known limitation: `defrecord` instances do not round-trip. `pr-str` emits
   `#my.ns.Rec{:a 1}` and `edn/read-string` rejects the unknown tag. Records in
   activity results / workflow args / signal payloads are therefore unsupported;
   use plain maps."
  (:require [clojure.edn :as edn]))

(defn encode
  "Serialize `x` to an EDN string.

   The `binding` is load-bearing, not defensive style: if the host application
   has bound `*print-length*` or `*print-level*` (common in dev REPLs and some
   logging setups), `pr-str` would emit `...` in place of the elided data and
   the persisted row could never be read back — silent history corruption that
   only surfaces on resume. `*print-namespace-maps*` is pinned off so output
   does not depend on the caller's REPL settings."
  ^String [x]
  (binding [*print-length*         nil
            *print-level*          nil
            *print-namespace-maps* false]
    (pr-str x)))

(defn decode
  "Read an EDN string produced by `encode`. Returns nil for nil input.

   Uses `clojure.edn/read-string`, NOT `clojure.core/read-string`: core's reader
   evaluates `#=(...)` forms, so using it here would turn anyone with write
   access to the history table into remote code execution on every replay."
  [^String s]
  (when s
    (edn/read-string s)))
