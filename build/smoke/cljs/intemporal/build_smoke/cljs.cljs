(ns intemporal.build-smoke.cljs
  (:require-macros [intemporal.core :as intemporal])
  (:require [intemporal.core :as intemporal]))

(intemporal/defn-workflow packaged-workflow [x]
  x)

(defn -main []
  (assert (fn? packaged-workflow)))
