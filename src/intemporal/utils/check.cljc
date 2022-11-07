(ns intemporal.utils.check
  (:require [intemporal.error :as error]
            [intemporal.utils.string :refer [fmt]])
  #?(:cljs (:require-macros [intemporal.utils.check :refer [check]])))


#?(:clj
   (defmacro check [cond message & args]
     `(when-not ~cond
        (throw (error/workflow-error (fmt ~message ~@args))))))