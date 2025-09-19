(ns ^:private intemporal.workflow.internal
  "Private namespace for workflow support."
  (:require [intemporal.store :as store]
            [intemporal.error :as error]
            [promesa.core :as p]
            [taoensso.telemere :as t]))

#?(:clj (set! *warn-on-reflection* true))

;;;;
;; utils

(defmacro libthread
  "Creates a thread for internal usage. Client code should not rely on this.
   Returns a promise."
  [label & body]
  `(p/vthread ~@body))

(defmacro uthread
  "Creates a thread for running client code.
   Returns a promise."
  [& body]
  `(p/vthread ~@body))

;;;;
;; runtime

(def ^:dynamic *env* nil)
(def default-env {:compensations (atom '())
                  :timeout-ms    (* 15 60 1000)})

(defn- env->runtime
  "Derives the `runtime` attrs from the current env."
  []
  (select-keys *env* [:timeout-ms]))

(defn random-id
  "Generates a random id. if env var `DEV` is defined, generates a two-word human-readable id."
  []
  ;; debugging purposes only
  ;; https://github.com/moby/moby/blob/master/pkg/namesgenerator/names-generator.go
  ;; TODO use https://github.com/adzerk-oss/env ?
  (if #?(:clj  (= "true" (System/getenv "DEV"))
         :cljs false)
    (let [left  ["admiring" "adoring" "affectionate" "agitated" "amazing" "angry" "awesome" "beautiful" "blissful" "bold" "boring" "brave" "busy" "charming" "clever" "compassionate" "competent" "condescending" "confident" "cool" "cranky" "crazy" "dazzling" "determined" "distracted" "dreamy" "eager" "ecstatic" "elastic" "elated" "elegant" "eloquent" "epic" "exciting" "fervent" "festive" "flamboyant" "focused" "friendly" "frosty" "funny" "gallant" "gifted" "goofy" "gracious" "great" "happy" "hardcore" "heuristic" "hopeful" "hungry" "infallible" "inspiring" "intelligent" "interesting" "jolly" "jovial" "keen" "kind" "laughing" "loving" "lucid" "magical" "modest" "musing" "mystifying" "naughty" "nervous" "nice" "nifty" "nostalgic" "objective" "optimistic" "peaceful" "pedantic" "pensive" "practical" "priceless" "quirky" "quizzical" "recursing" "relaxed" "reverent" "romantic" "sad" "serene" "sharp" "silly" "sleepy" "stoic" "strange" "stupefied" "suspicious" "sweet" "tender" "thirsty" "trusting" "unruffled" "upbeat" "vibrant" "vigilant" "vigorous" "wizardly" "wonderful" "xenodochial" "youthful" "zealous" "zen"]
          right ["agnesi" "albattani" "allen" "almeida" "antonelli" "archimedes" "ardinghelli" "aryabhata" "austin" "babbage" "banach" "banzai" "bardeen" "bartik" "bassi" "beaver" "bell" "benz" "bhabha" "bhaskara" "black" "blackburn" "blackwell" "bohr" "booth" "borg" "bose" "bouman" "boyd" "brahmagupta" "brattain" "brown" "buck" "burnell" "cannon" "carson" "cartwright" "carver" "cerf" "chandrasekhar" "chaplygin" "chatelet" "chatterjee" "chaum" "chebyshev" "clarke" "cohen" "colden" "cori" "cray" "curie" "curran" "darwin" "davinci" "dewdney" "dhawan" "diffie" "dijkstra" "dirac" "driscoll" "dubinsky" "easley" "edison" "einstein" "elbakyan" "elgamal" "elion" "ellis" "engelbart" "euclid" "euler" "faraday" "feistel" "fermat" "fermi" "feynman" "franklin" "gagarin" "galileo" "galois" "ganguly" "gates" "gauss" "germain" "goldberg" "goldstine" "goldwasser" "golick" "goodall" "gould" "greider" "grothendieck" "haibt" "hamilton" "haslett" "hawking" "heisenberg" "hellman" "hermann" "herschel" "hertz" "heyrovsky" "hodgkin" "hofstadter" "hoover" "hopper" "hugle" "hypatia" "ishizaka" "jackson" "jang" "jemison" "jennings" "jepsen" "johnson" "joliot" "jones" "kalam" "kapitsa" "kare" "keldysh" "keller" "kepler" "khayyam" "khorana" "kilby" "kirch" "knuth" "kowalevski" "lalande" "lamarr" "lamport" "leakey" "leavitt" "lederberg" "lehmann" "lewin" "lichterman" "liskov" "lovelace" "lumiere" "mahavira" "margulis" "matsumoto" "maxwell" "mayer" "mccarthy" "mcclintock" "mclaren" "mclean" "mcnulty" "meitner" "mendel" "mendeleev" "meninsky" "merkle" "mestorf" "mirzakhani" "montalcini" "moore" "morse" "moser" "murdock" "napier" "nash" "neumann" "newton" "nightingale" "nobel" "noether" "northcutt" "noyce" "panini" "pare" "pascal" "pasteur" "payne" "perlman" "pike" "poincare" "poitras" "proskuriakova" "ptolemy" "raman" "ramanujan" "rhodes" "ride" "ritchie" "robinson" "roentgen" "rosalind" "rubin" "saha" "sammet" "sanderson" "satoshi" "shamir" "shannon" "shaw" "shirley" "shockley" "shtern" "sinoussi" "snyder" "solomon" "spence" "stonebraker" "sutherland" "swanson" "swartz" "swirles" "taussig" "tesla" "tharp" "thompson" "torvalds" "tu" "turing" "varahamihira" "vaughan" "villani" "visvesvaraya" "volhard" "wescoff" "wilbur" "wiles" "williams" "williamson" "wilson" "wing" "wozniak" "wright" "wu" "yalow" "yonath" "zhukovsky"]]
      (str (rand-nth left) "-" (rand-nth right)))
    (str (random-uuid))))

(defmacro with-env-internal
  "Merges `m` on top of the current internal environment, then runs `body` with the new environment."
  [m & body]
  `(binding [*env* (merge default-env ~m)]
     (do ~@body)))

;;;;
;; task definitions

;;;;
;; Tasks

(defn create-workflow-task
  ([ref root sym fvar args id]
   (create-workflow-task ref root sym fvar args id nil :new nil))
  ([ref root sym fvar args id result state runtime]
   (let [runtime (or runtime (env->runtime))]
     {:type    :workflow :id id :ref ref :root root :sym sym :fvar fvar :args args :result result :state state
      :runtime runtime})))

(defn create-activity-task
  ([ref root sym fvar args id]
   (create-activity-task ref root sym fvar args id nil :new nil))
  ([ref root sym fvar args id result state runtime]
   (let [runtime (or runtime (env->runtime))]
     {:type    :activity :id id :ref ref :root root :sym sym :fvar fvar :args args :result result :state state
      :runtime runtime})))

(defn create-proto-activity-task
  ([proto ref root sym fvar args id]
   (create-proto-activity-task proto ref root sym fvar args id nil :new nil))
  ([proto ref root sym fvar args id result state runtime]
   (let [runtime (or runtime (env->runtime))]
     {:type    :proto-activity :proto proto :id id :ref ref :root root :sym sym :fvar fvar :args args :result result :state state
      :runtime runtime})))

(defn event-matches? [{t :type s :sym} {t2 :type s2 :sym}]
  (and (= t t2) (= s s2)))

;;;;
;; task execution/replay

(defn resume-fn-task
  "Resumes a generic fn call task"
  [{:keys [vthread? shutdown?] :as env} store protos {:keys [type proto id root sym fvar args] :as task} [invoke success failure]]
  (when (and (= :proto-activity type)
             (nil? (get protos proto)))
    (throw (ex-info (str "Protocol implementation for "
                         (pr-str proto)
                         " not found; available protocols:"
                         (pr-str protos)
                         ". Make sure to pass `:protocols` key when starting poller or worker ")
                    {::type :internal
                     :protocols protos
                     :required proto})))
  ;; do we have invocation and result events for this task?
  (t/log! {:level :debug :sym sym} ["Resuming task with id" id])

  (try
    (let [shutting-down? (fn [] (and (ifn? shutdown?) (shutdown?))) ;; TODO fix this hack
          [inv? res?] (store/all-events store id)]

      ;; mark invoke/replay
      (let [next-event {:ref id :root (or root id) :type invoke :sym sym :args args}]
        (when inv?
          (t/log! {:level :debug :data {:task task}} ["Found replay event for task with id" (:id task)]))
        (when res?
          (t/log! {:level :debug :data {:task task}} ["Found result event for task with id" (:id task)]))

        (cond
          ;; do we have an invocation event? if not, save this one
          (not inv?)
          (store/task<-event store id next-event)

          ;; we do have an invocation event, is it a match of the above?
          (not (event-matches? inv? next-event))
          (throw (error/internal-error "Transition unexpected" {:got      (:type inv?)
                                                                :expected invoke}))))

      ;; mark success/failure or replay
      (let [next-event   {:ref id :root (or root id) :type success :sym sym}
            next-failure (assoc next-event :type failure)
            handle-ok    (fn [r]
                           ;; TODO assert r is serializable!
                           ;; we check for shutdown because in js runtime, there is no thread interruption
                           (if (shutting-down?)
                             (do
                               (t/log! {:level :debug :data {:sym sym :result r}} ["Shutting down, interrupting result" id])
                               (store/task<-panic store id (error/panic "Worker shutting down during invocation result handling")))
                             (do
                               (t/log! {:level :debug :data {:sym sym :result r}} ["Got actual function result for task" id])
                               (store/task<-event store id (assoc next-event :result r))
                               r)))
            handle-fail  (fn [e]
                           (if (shutting-down?)
                             (do
                               (t/log! {:level :warn :data {:exception e}} ["Exception caught during shutdown, panicking task"])
                               (store/task<-panic store id (error/panic "Worker shutting down during invocation failure handling")))
                             (do
                               (t/log! {:level :debug :data {:sym sym :exception e}} ["Exception caught during actual function invocation for task" id])
                               (store/task<-event store id (cond-> (assoc next-failure :error e)
                                                                   (error/internal-error? e) (assoc :type ::failure)))))
                           (p/rejected e))
            retval       (cond
                           ;; are we replaying a result?
                           (some? res?)
                           (let [success? (some? (:result res?))
                                 retval   (if success? (:result res?) (:error? res?))]
                             ;etype    (if success? :result :error)]
                             (store/task<-event store id res?)
                             (if success?
                               (p/resolved retval)
                               (p/rejected retval)))

                           ;; no replay, lets do the actual call
                           (not res?)
                           (-> (let [;; if we're calling a prototype, we need to prepend the
                                     ;; prot impl and then its args
                                     args' (if (= :proto-activity type)
                                             (cons (get protos proto) args)
                                             args)
                                     ;; this is the result
                                     r     (binding [*env* (merge default-env env)]
                                             (t/log! {:level :debug :data {:sym sym :args args'}} ["Calling actual function for task" id])
                                             ;; vthread calls are special because we only want to process its
                                             ;; result when deref is called, to ensure determinism:
                                             ;; - first we must save all events
                                             ;; - then we can process the underlying impl call
                                             (if vthread?
                                               (let [inner (p/create (fn [res rej]
                                                                       (-> (uthread
                                                                             (binding [*env* (dissoc env :vthread?)]
                                                                               (apply fvar args')))
                                                                           (p/then res)
                                                                           (p/catch rej))))]
                                                 ;; in cljs we dont need delay bc its single threaded
                                                 ;; in clj, the delayed value will be deref'd
                                                 ;; but at this point we ensure that any other eg vthread calls have been saved in history
                                                 (#?(:cljs do :clj delay)
                                                   (-> inner
                                                       (p/then handle-ok)
                                                       (p/catch handle-fail))))
                                               ;; ensure handle-fail always has a chance to catch any fvar
                                               ;; exceptions
                                               (-> nil
                                                   (p/then (fn [_] (binding [*env* env]
                                                                     (apply fvar args'))))
                                                   (p/then' handle-ok)
                                                   (p/catch handle-fail))))]
                                 ;; r can be a value or a promise
                                 r))

                           (not (or (event-matches? res? next-event) ;; replay success
                                    (event-matches? res? next-failure))) ;; replay failure
                           (throw (error/internal-error "Transition unexpected" {:got      (:type res?)
                                                                                 :expected [success failure]})))]
        (t/log! {:level :debug :data {:sym sym :retval retval}} ["Finished internal execution for task" id])
        retval))
    ;; ensure we terminate the fn call, even if the next event wouldnt be the expected type
    (catch #?(:clj Exception :cljs js/Error) e
      (let [wrapped (ex-info "Internal error while resuming execution" {::type :internal} e)]
        (store/task<-event store id {:ref id :root (or root id) :type ::failure :sym sym :error wrapped}))
      (p/rejected e))))

#?(:clj (ns-unmap *ns* 'resume-task))
(defmulti resume-task
          "Continues a task that has been queued for execution. Replays events if they exist."
          (fn [env store protos task]
            (:type task)))

(defmethod resume-task :workflow
  [env store protos {:keys [id root sym fvar args] :as task}]
  (resume-fn-task env store protos task [:intemporal.workflow/invoke :intemporal.workflow/success :intemporal.workflow/failure]))

(defmethod resume-task :activity
  [env store protos {:keys [id root sym fvar args] :as task}]
  (resume-fn-task env store protos task [:intemporal.activity/invoke :intemporal.activity/success :intemporal.activity/failure]))

(defmethod resume-task :proto-activity
  [env store protos {:keys [id root sym fvar args] :as task}]
  (resume-fn-task env store protos task [:intemporal.protocol/invoke :intemporal.protocol/success :intemporal.protocol/failure]))

(defn enqueue-and-wait
  "Enqueues `task` onto the store and awaits its execution.
  If the exact task is alread present (eg we are resuming a crashed workflow),
  the existing task will be awaited instead."
  [{:keys [store] :as opts} {:keys [id] :as task}]
  ;; because execution engine is supposed to be deterministic,
  ;; we can safely assume that if an identic task exists at this point
  ;; we are replaying some events
  (assert (some? store) "Store should exist")
  (assert (some? task) "Task should exist")

  (let [db-task (or (store/find-task store id)
                    (store/enqueue-task store task))

        prom    (store/await-task store (:id db-task) opts)]

    #?(:clj  (deref prom)
       :cljs prom)))
