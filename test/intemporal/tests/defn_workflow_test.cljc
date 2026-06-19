(ns intemporal.tests.defn-workflow-test
  "defn-workflow registers the workflow in the registry at load time, so it is
   resolvable by id with no manual register-workflow! call (clj + cljs)."
  (:require [intemporal.core :as intemporal]
            [intemporal.internal.workflow-registry :as wreg]
            [clojure.test :refer [deftest is testing]])
  #?(:cljs (:require-macros [intemporal.core :as intemporal])))

(intemporal/defn-workflow sample-wf [x] (* x 2))

(deftest defn-workflow-registers-at-load
  (testing "the workflow is resolvable by its qualified name with no manual registration"
    (let [nm "intemporal.tests.defn-workflow-test/sample-wf"]
      (is (some? (wreg/resolve-workflow nm))
          "registered at load time by the macro")
      (is (= 10 ((wreg/resolve-workflow nm) 5))
          "resolves to the actual fn"))))
