(ns intemporal.tests.store.codec-test
  "Pins `intemporal.internal.codec` — the EDN codec shared by the JDBC and FDB
  stores — independently of any store, database or engine.

  The first test is the direct answer to bug #22: every value type the previous
  cheshire codec destroyed must survive a round-trip. The rest guard the two
  non-obvious properties the stores depend on: that strings stay strings (FDB
  compares cached status/owner values against string sets), and that a bound
  *print-length* cannot truncate persisted history."
  (:require
   [clojure.string :as str]
   [clojure.test :refer [deftest is testing]]
   [intemporal.internal.codec :as codec]))

(defn- round-trip [x] (codec/decode (codec/encode x)))

(deftest types-json-destroyed-now-survive
  (testing "the canonical failing case from bug #22"
    ;; cheshire returned ["processed" 5 :done -> "done"]
    (is (= [:processed 5 :done] (round-trip [:processed 5 :done])))
    (is (= {:status :active :value 5 :kind :result}
           (round-trip {:status :active :value 5 :kind :result}))))

  (testing "every type the JSON codec silently degraded"
    (doseq [v [:bare-keyword
               :namespaced/keyword
               #{1 2 3}
               'a-symbol
               1/3
               42N
               1.5M
               {1 :non-string-key, [1 2] :vector-key}
               [:a {:b #{:c}} [:d]]
               nil
               ""
               {}
               []]]
      (is (= v (round-trip v)) (str "round-trip failed for " (pr-str v)))))

  (testing "instants"
    (let [d (java.util.Date. 0)]
      (is (= d (round-trip d)))))

  (testing "JSON-native values are unaffected"
    (doseq [v [1 1.5 true false "a string" [1 2 3] {:a 1}]]
      (is (= v (round-trip v))))))

(deftest strings-stay-strings
  ;; The FDB store puts its cached status, owner-id and index entries through
  ;; this same codec and compares them against string sets
  ;; (#{"completed" "failed" ...}). A codec that keywordized on read would make
  ;; terminal workflows claimable again — silently.
  (testing "status strings survive as strings, not keywords"
    (doseq [s ["completed" "failed" "cancelled" "terminated"]]
      (is (= s (round-trip s)))
      (is (string? (round-trip s)))))

  (testing "owner ids and index entries"
    (is (= "owner-1" (round-trip "owner-1")))
    (is (= {:next-run-at nil} (round-trip {:next-run-at nil})))
    (is (= {:next-run-at 1700000000000}
           (round-trip {:next-run-at 1700000000000})))
    (is (= {:parent-seq 4 :policy "terminate"} (round-trip {:parent-seq 4 :policy "terminate"}))))

  (testing "booleans"
    (is (true? (round-trip true)))
    (is (false? (round-trip false)))))

(deftest encode-is-immune-to-caller-print-settings
  ;; If a host app has bound *print-length* / *print-level*, an unguarded pr-str
  ;; writes "..." into the row and it can never be read back. This is the test
  ;; that keeps the binding in codec/encode from being "cleaned up".
  (let [long-vec (vec (range 100))
        deep-map {:a {:b {:c {:d {:e :found}}}}}]
    (testing "*print-length* cannot truncate a persisted collection"
      (binding [*print-length* 3]
        (is (= long-vec (round-trip long-vec)))
        (is (not (str/includes? (codec/encode long-vec) "...")))))

    (testing "*print-level* cannot truncate a nested structure"
      (binding [*print-level* 2]
        (is (= deep-map (round-trip deep-map)))
        (is (not (str/includes? (codec/encode deep-map) "#")))))

    (testing "*print-namespace-maps* does not change the wire format"
      (let [m {:a/x 1 :a/y 2}]
        (binding [*print-namespace-maps* true]
          (is (= m (round-trip m))))
        (binding [*print-namespace-maps* false]
          (is (= m (round-trip m))))))))

(deftest decode-edge-cases
  (testing "nil in, nil out"
    (is (nil? (codec/decode nil))))

  (testing "encoded nil decodes to nil"
    (is (nil? (round-trip nil))))

  (testing "decode does not evaluate code"
    ;; clojure.core/read-string would evaluate #=(...) here; clojure.edn refuses.
    ;; History is database-sourced, so this is the difference between a data
    ;; read and remote code execution.
    (is (thrown? RuntimeException
                 (codec/decode "#=(clojure.core/println \"evaluated\")")))))
