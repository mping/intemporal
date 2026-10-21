(ns intemporal.tests.store.fdb-test
  {:integration true}
  (:require
   [clojure.test :refer [deftest is testing]]
   [intemporal.store.fdb :as fdb-store]
   [intemporal.protocol :as p]
   [intemporal.tests.store.test-suite :as suite]
   [me.vedang.clj-fdb.FDB :as cfdb]))

(deftest fdb-store-test
  (testing "FoundationDB Store Implementation"
    (let [db (cfdb/select-api-version 710)
          db (cfdb/open db "docker/fdb.cluster")]

      ;; Run shared suite
      ;; Keep this conformance run isolated.  The FSM store is deliberately
      ;; non-destructive, so reusing one FDB subspace makes each run scan and
      ;; contend with every workflow created by previous test runs.
      (with-open [store (fdb-store/create-store db (str "intemporal-tests-" (random-uuid)))]
        (suite/run-store-tests store)))))

(deftest claims-read-only-scheduled-work
  (let [db (cfdb/open (cfdb/select-api-version 710) "docker/fdb.cluster")
        owner "indexed-claims"
        create (fn [id] {:workflow-id id :owner-id owner
                         :started-event {:event-type :workflow-started :seq -1
                                         :workflow-id id :workflow-fn-name "index/workflow" :args []}})
        read-var (ns-resolve 'intemporal.store.fdb 'fsm-read-workflow)
        read-workflow @read-var
        reads (atom [])]
    (with-open [st (fdb-store/create-store db (str "claim-index-" (random-uuid)))]
      (doseq [id (concat (map #(str "wait-" %) (range 20)) ["due" "future"])]
        (p/create-workflow! st (create id)))
      (doseq [{:keys [workflow-id wake-version]}
              (p/claim-runnable! st owner 22 0)]
        (p/commit-transition! st
          {:workflow-id workflow-id :owner-id owner :kind :park :events []
           :expected-wake-version wake-version
           :next-run-at (case workflow-id "due" 20 "future" 21 nil)}))
      (p/create-workflow! st (create "ready"))
      (with-redefs-fn {read-var (fn [tx root id]
                                (swap! reads conj id)
                                (read-workflow tx root id))}
        #(do
           (is (= #{"due" "ready"}
                              (set (map :workflow-id
                                     (p/claim-runnable! st owner 2 20)))))
           (is (<= (count @reads) 2)
                            "Indefinite and future waits must not be loaded by claims"))))))
