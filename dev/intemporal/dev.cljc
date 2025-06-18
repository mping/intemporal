(ns intemporal.dev)

(defn run-in-current-thread [f]
  (f))

(defn run-in-new-thread [f]
  (reify clojure.lang.IDeref
    (deref [this] (f))))

@(run-in-new-thread #(println 1111))

(defn example-coop []
  (let [res  (run-in-current-thread #(+ 1 1))
        res2 (run-in-new-thread #(+ 1 1))]
    (+ res @res2)))


