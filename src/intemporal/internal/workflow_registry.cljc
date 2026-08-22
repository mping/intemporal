(ns intemporal.internal.workflow-registry
  "Maps a stable workflow name -> workflow function so a workflow can be resumed
   knowing only its id (the name + args are recorded in the :workflow-started
   event). This is what lets a restarted process — or, in a multi-pod
   deployment, a different pod — resume a workflow it did not itself start
   (improvements.md §B3, load-bearing for the Phase C worker loop).

   The registry is a process-global atom: each process registers the workflow
   functions it can resolve (Temporal's model). start-workflow auto-registers
   the function it is given, which covers same-process resume; for cross-process
   resume the application must register its workflow vars at startup."
  #?(:cljs
     (:require
      [clojure.string :as str])))

(defonce ^{:doc "Process-global name -> workflow-fn registry."}
  registry
  (atom {}))

(defn workflow-name
  "Stable string name for a workflow function. Returns the SAME canonical
   \"ns/name\" whether given a var (#'my-wf) or the function value, so the name a
   workflow is registered under always matches the one recorded in its
   :workflow-started event and looked up on resume — regardless of which form the
   caller passed."
  [f]
  #?(:clj
     (if (var? f)
       (subs (str f) 2)                      ; #'ns/name -> "ns/name"
       (clojure.lang.Compiler/demunge        ; ns$fn_name -> "ns/fn-name"
         (.getName (class f))))
     :cljs
     (cond
       ;; A CLJS var: derive "ns/name" from its metadata. (str of a var does not
       ;; reliably give this, so the old fall-through produced an inconsistent
       ;; name vs the fn-value path below.)
       (var? f)
       (let [m (meta f)] (str (:ns m) "/" (:name m)))

       ;; A fn value: demangle its JS name (ns$fn_name -> ns/fn-name).
       (and (fn? f) (.-name f) (not (str/blank? (.-name f))))
       (let [raw   (.-name f)
             parts (str/split raw #"\$")]
         (if (> (count parts) 1)
           (str (str/join "." (map #(str/replace % "_" "-") (butlast parts)))
                "/"
                (str/replace (last parts) "_" "-"))
           (str/replace raw "_" "-")))

       :else (str f))))

(defn register-workflow!
  "Register a workflow function under its derived name (or an explicit name).
   Accepts a var or a fn. Returns the name used."
  ([f] (register-workflow! (workflow-name f) f))
  ([name f]
   (let [resolved (if (var? f) #?(:clj @f :cljs f) f)]
     (swap! registry assoc name resolved)
     name)))

(defn resolve-workflow
  "Return the registered workflow fn for `name`. Throws a descriptive ex-info if
   the name is not registered in this process, rather than returning nil and
   surfacing an obscure NPE deeper in execution. A fresh process must register its
   workflow vars at startup for cross-process resume to work.

   The thrown ex-info carries {:error/type ::not-registered}; callers (e.g. the
   recovery worker via `not-registered?`) use that to terminate an unresolvable
   workflow instead of retrying it forever."
  [name]
  (or (get @registry name)
      (throw (ex-info (str "No workflow function registered for name: " name
                           ". Register the workflow var at startup so it can be resumed by id.")
                      {:error/type    ::not-registered
                       :workflow-name name
                       :registered    (vec (keys @registry))}))))

(defn not-registered?
  "True if `e` is the exception `resolve-workflow` throws when a workflow name is
   not registered in this process."
  [e]
  (= ::not-registered (:error/type (ex-data e))))

(defn registered?
  "True if a workflow fn is registered under `name` in this process."
  [name]
  (contains? @registry name))

(defn clear-registry!
  "Test helper: empties the global registry."
  []
  (reset! registry {}))
