(ns intemporal.tests.store.cache-test
  (:require
   [clojure.spec.alpha :as s]
   [clojure.test :refer [deftest is]]
   [intemporal.protocol :as p]
   [intemporal.store :as store]
   [intemporal.store.cache :as cache]
   [intemporal.store.checked :as checked]))

(defn- creation [workflow-id]
  {:workflow-id workflow-id
   :owner-id "engine-a"
   :started-event {:event-type :workflow-started
                   :seq -1
                   :workflow-id workflow-id
                   :workflow-fn-name "intemporal.tests.store.cache-test/workflow"
                   :args []}})

(deftest cache-uses-history-revisions-and-cleans-up-terminal-workflows
  (s/check-asserts true)
  (let [st (store/create-store :checked? true :cache {:max-workflows 1})
        cached (checked/unwrap st)
        entries #(get @(:cache cached) :entries)]
    (is (cache/cached-store? cached))
    (p/create-workflow! st (creation "cached"))
    (is (= 1 (get-in (entries) ["cached" :history-revision])))
    ;; Ownership changes are deliberately not history writes, so a live-state
    ;; snapshot can reuse the cached history unchanged.
    (p/claim-runnable! st "engine-a" 1 0)
    (is (= 1 (count (:history (p/load-snapshot st "cached")))))
    (p/add-signal! st "cached" "go" {:signal-id "s1" :payload :go})
    (is (= 1 (get-in (entries) ["cached" :history-revision])))
    (let [transition {:workflow-id "cached"
                      :owner-id "engine-a"
                      :kind :continue
                      :events [{:event-type :timer-scheduled :seq 0 :fire-at 10}]}]
      (is (= :committed (:commit-status (p/commit-transition! st transition))))
      (is (= 2 (get-in (entries) ["cached" :history-revision])))
      (is (= 2 (count (get-in (entries) ["cached" :history])))))
    (let [state (p/load-workflow-state st "cached")]
      (is (= :committed
             (:commit-status
               (p/commit-transition!
                 st {:workflow-id "cached"
                     :owner-id "engine-a"
                     :kind :terminal
                     :events [{:event-type :workflow-completed :seq 1 :result :done}]
                     :terminal-status :completed
                     :expected-related-revisions {"cached" (:revision state)}
                     :close-actions []}))))
      (is (nil? (get (entries) "cached"))))))
