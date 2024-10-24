(ns ^:private intemporal.workflow.internal
  "Private namespace for workflow support."
  (:require [intemporal.store :as store]
            [malli.core :as m]
            [promesa.core :as p]
            [taoensso.telemere :as t]))

#?(:clj (set! *warn-on-reflection* true))
#_:clj-kondo/ignore
(when #?(:clj  (= "true" (System/getenv "DEV"))
         :cljs false)
  ((requiring-resolve 'malli.dev/start!)))

;;;;
;; validation
(def registry
  (merge
    (m/class-schemas)
    (m/comparator-schemas)
    (m/base-schemas)
    (m/type-schemas)
    {:var (m/-simple-schema {:type :var, :pred #(or (fn? %) (var? %))})}))

(def ^:private RuntimeConfig
  [:map {:closed false}
   [:task-per-activity? {:optional true} :boolean]
   [:timeout-ms {:optional true} :int]])

(def ^:private Task
  [:map {:closed true}
   [:id [:or :string :uuid]]
   [:sym :symbol]
   [:ref [:maybe :string]]
   [:root [:maybe :string]]
   [:proto {:optional true} :symbol]
   [:fvar :var]
   [:args {:optional true} [:maybe [:sequential :any]]]
   [:result :any]
   [:state [:enum :new :pending :failure :success]]
   [:type [:enum :workflow :activity :proto-activity]]
   [:runtime {:optional true} RuntimeConfig]])

(def validate-task (m/coercer Task nil {:registry registry}))
(comment
  (validate-task {:proto  'clojure.core/ICollection
                  :type   :workflow
                  :id     "123"
                  :ref    "some-ref"
                  :root   "some-root"
                  :sym    'identity
                  :fvar   #'identity
                  :args   []
                  :result nil
                  :state  :new
                  :runtime {:timeout-ms         123123
                            :task-per-activity? false}})
  "")

;;;;
;; runtime

(def ^:dynamic *env* nil)
(def default-env {:compensations      (atom '())
                  :task-per-activity? false
                  :lock               #?(:clj  (java.util.concurrent.Semaphore. 1)
                                         :cljs nil)
                  :timeout-ms         #?(:clj  Long/MAX_VALUE
                                         :cljs 2147483647)})

(defn random-id []
  ;; debugging purposes only
  ;; https://github.com/moby/moby/blob/master/pkg/namesgenerator/names-generator.go
  ;; TODO use https://github.com/adzerk-oss/env ?
  (if #?(:clj  (= "true" (System/getenv "DEV"))
         :cljs false)
    (let [left  ["admiring" "adoring" "affectionate" "agitated" "amazing" "angry" "awesome" "beautiful" "blissful" "bold" "boring" "brave" "busy" "charming" "clever" "compassionate" "competent" "condescending" "confident" "cool" "cranky" "crazy" "dazzling" "determined" "distracted" "dreamy" "eager" "ecstatic" "elastic" "elated" "elegant" "eloquent" "epic" "exciting" "fervent" "festive" "flamboyant" "focused" "friendly" "frosty" "funny" "gallant" "gifted" "goofy" "gracious" "great" "happy" "hardcore" "heuristic" "hopeful" "hungry" "infallible" "inspiring" "intelligent" "interesting" "jolly" "jovial" "keen" "kind" "laughing" "loving" "lucid" "magical" "modest" "musing" "mystifying" "naughty" "nervous" "nice" "nifty" "nostalgic" "objective" "optimistic" "peaceful" "pedantic" "pensive" "practical" "priceless" "quirky" "quizzical" "recursing" "relaxed" "reverent" "romantic" "sad" "serene" "sharp" "silly" "sleepy" "stoic" "strange" "stupefied" "suspicious" "sweet" "tender" "thirsty" "trusting" "unruffled" "upbeat" "vibrant" "vigilant" "vigorous" "wizardly" "wonderful" "xenodochial" "youthful" "zealous" "zen"]
          right ["agnesi" "albattani" "allen" "almeida" "antonelli" "archimedes" "ardinghelli" "aryabhata" "austin" "babbage" "banach" "banzai" "bardeen" "bartik" "bassi" "beaver" "bell" "benz" "bhabha" "bhaskara" "black" "blackburn" "blackwell" "bohr" "booth" "borg" "bose" "bouman" "boyd" "brahmagupta" "brattain" "brown" "buck" "burnell" "cannon" "carson" "cartwright" "carver" "cerf" "chandrasekhar" "chaplygin" "chatelet" "chatterjee" "chaum" "chebyshev" "clarke" "cohen" "colden" "cori" "cray" "curie" "curran" "darwin" "davinci" "dewdney" "dhawan" "diffie" "dijkstra" "dirac" "driscoll" "dubinsky" "easley" "edison" "einstein" "elbakyan" "elgamal" "elion" "ellis" "engelbart" "euclid" "euler" "faraday" "feistel" "fermat" "fermi" "feynman" "franklin" "gagarin" "galileo" "galois" "ganguly" "gates" "gauss" "germain" "goldberg" "goldstine" "goldwasser" "golick" "goodall" "gould" "greider" "grothendieck" "haibt" "hamilton" "haslett" "hawking" "heisenberg" "hellman" "hermann" "herschel" "hertz" "heyrovsky" "hodgkin" "hofstadter" "hoover" "hopper" "hugle" "hypatia" "ishizaka" "jackson" "jang" "jemison" "jennings" "jepsen" "johnson" "joliot" "jones" "kalam" "kapitsa" "kare" "keldysh" "keller" "kepler" "khayyam" "khorana" "kilby" "kirch" "knuth" "kowalevski" "lalande" "lamarr" "lamport" "leakey" "leavitt" "lederberg" "lehmann" "lewin" "lichterman" "liskov" "lovelace" "lumiere" "mahavira" "margulis" "matsumoto" "maxwell" "mayer" "mccarthy" "mcclintock" "mclaren" "mclean" "mcnulty" "meitner" "mendel" "mendeleev" "meninsky" "merkle" "mestorf" "mirzakhani" "montalcini" "moore" "morse" "moser" "murdock" "napier" "nash" "neumann" "newton" "nightingale" "nobel" "noether" "northcutt" "noyce" "panini" "pare" "pascal" "pasteur" "payne" "perlman" "pike" "poincare" "poitras" "proskuriakova" "ptolemy" "raman" "ramanujan" "rhodes" "ride" "ritchie" "robinson" "roentgen" "rosalind" "rubin" "saha" "sammet" "sanderson" "satoshi" "shamir" "shannon" "shaw" "shirley" "shockley" "shtern" "sinoussi" "snyder" "solomon" "spence" "stonebraker" "sutherland" "swanson" "swartz" "swirles" "taussig" "tesla" "tharp" "thompson" "torvalds" "tu" "turing" "varahamihira" "vaughan" "villani" "visvesvaraya" "volhard" "wescoff" "wilbur" "wiles" "williams" "williamson" "wilson" "wing" "wozniak" "wright" "wu" "yalow" "yonath" "zhukovsky"]]
      (str (rand-nth left) "-" (rand-nth right)))
    (str (random-uuid))))

(defn try-lock!
  "CLJ: uses a lock to ensure serial access to a given section, typically to serialize activity
  event history, so it becomes deterministic (in case of eg: multithreads)."
  []
  (when-let [lock (:lock *env*)]
    #?(:clj (let [id (:root *env*)]
              (t/log! {:level :trace :data {:env *env*}} ["Acquiring lock id" id])
              (.acquire ^java.util.concurrent.Semaphore lock)
              id))))

(defn try-release!
  "Releases the lock only if `lockid` matches current env lock id.
  Mostly for threaded situations."
  [lockid]
  (when lockid
    (when-let [lock (:lock *env*)]
      #?(:clj (if (zero? (.availablePermits ^java.util.concurrent.Semaphore lock))
                (do
                  (t/log! {:level :trace}
                          ["Releasing lock for lock id" lockid ", permits" (.availablePermits ^java.util.concurrent.Semaphore lock)])
                  (.release ^java.util.concurrent.Semaphore lock))
                (t/log! {:level :trace}
                        ["Tried to release lock id" lockid " , but still have permits" (.availablePermits ^java.util.concurrent.Semaphore lock)]))))))

(defmacro with-env-internal [m & body]
  `(binding [*env* (merge default-env ~m)]
     (do ~@body)))

(defn internal-error? [ex]
  ;; TODO this should be a store predicate, or every store exception should be wrapped in this
  (= :internal (-> ex ex-data ::type)))

(defn internal-exception [msg data]
  (ex-info msg (merge data {::type :internal})))

;;;;
;; task definitions

;;;;
;; Tasks

;;   type: workflow|activity|proto-activity
;;     id: unique identifier
;;    ref: what task triggered execution
;;   root: parent trigger
;;    sym: the fn being executed
;;   fvar: the function var, to call (apply fvar
;; result: either a value, or error
;;  state: state of task new|pending|failure|success
(defn create-workflow-task
  ([ref root sym fvar args id]
   (create-workflow-task ref root sym fvar args id nil :new nil))
  ([ref root sym fvar args id result state runtime]
   (let [env (or runtime (select-keys *env* [:timeout-ms :task-per-activity?]))]
     (validate-task {:type :workflow :id id :ref ref :root root :sym sym :fvar fvar :args args :result result :state state
                     :runtime env}))))

(defn create-activity-task
  ([ref root sym fvar args id]
   (create-activity-task ref root sym fvar args id nil :new nil))
  ([ref root sym fvar args id result state runtime]
   (let [env (or runtime (select-keys *env* [:timeout-ms :task-per-activity?]))]
     (validate-task {:type :activity :id id :ref ref :root root :sym sym :fvar fvar :args args :result result :state state
                     :runtime env}))))

(defn create-proto-activity-task
  ([proto ref root sym fvar args id]
   (create-proto-activity-task proto ref root sym fvar args id nil :new nil))
  ([proto ref root sym fvar args id result state runtime]
   (let [env (or runtime (select-keys *env* [:timeout-ms :task-per-activity?]))]
     (validate-task {:type :proto-activity :proto proto :id id :ref ref :root root :sym sym :fvar fvar :args args :result result :state state
                     :runtime env}))))

(defn event-matches? [{t :type s :sym} {t2 :type s2 :sym}]
  (and (= t t2) (= s s2)))

;;;;
;; task execution/replay

(defn resume-fn-task
  "Resumes a generic fn call task"
  [{:keys [lock lockid] :as env} store protos {:keys [type proto id root sym fvar args] :as task} [invoke success failure]]
  ;; TODO check if proto exists in protos
  ;; do we have invocation and result events for this task?
  (t/log! :debug ["Resuming task with id" id])
  (let [[inv? res?] (store/all-events store id)]

    ;; mark invoke/replay
    (let [next-event {:ref id :root (or root id) :type invoke :sym sym :args args}]
      (when inv?
        (t/log! {:level :debug :_data {:task task}} ["Found replay event for task with id" (:id task)]))
      (when res?
        (t/log! {:level :debug :_data {:task task}} ["Found result event for task with id" (:id task)]))
      (try
        (cond
          ;; do we have an invocation event? if not, save this one
          (not inv?)
          (store/task<-event store id next-event)

          ;; we do have an invocation event, is it a match of the above?
          (not (event-matches? inv? next-event))
          (throw (internal-exception "Transition unexpected" {:type     (:type inv?)
                                                              :expected invoke})))
        (finally
          ;; release the lock
          (t/log! {:level :trace} ["Requesting resume-task release for lock id" root])
          (try-release! root))))

    ;; mark success/failure or replay
    (let [next-event   {:ref id :root (or root id) :type success :sym sym}
          next-failure (assoc next-event :type failure)

          retval       (cond
                         (some? res?)
                         (let [success? (some? (:result res?))
                               retval   (if success? (:result res?) (:error? res?))
                               etype    (if success? :result :error)]
                           (store/task<-event store id res?)
                           (if success?
                             (p/resolved retval)
                             (p/rejected retval)))

                         (not res?)
                         ;; the p/let is mostly to deal with the (apply...) call for js runtimes
                         (-> (p/let [impl? (if (= :proto-activity type)
                                             (get protos proto)
                                             nil)
                                     args' (if (= :proto-activity type)
                                             (cons impl? args)
                                             args)
                                     r     (binding [*env* (merge default-env env)]
                                             (t/log! {:level :debug :data {:fvar fvar :args args'}} ["Calling actual function for task" id])
                                             (apply fvar args'))]
                               r)
                             (p/then
                               (fn [r]
                                 (t/log! {:level :debug :data {:fvar fvar :result r}} ["Got actual function result for task" id])
                                 (store/task<-event store id (assoc next-event :result r))
                                 r))
                             (p/catch
                               (fn [e]
                                 (t/log! {:level :debug :data {:fvar fvar :exception e}} ["Exception caught during actual function invocation for task" id])
                                 (when-not (internal-error? e)
                                   (store/task<-event store id (assoc next-failure :error e)))
                                 (p/rejected e))))

                         (not (or (event-matches? res? next-event) ;; replay success
                                  (event-matches? res? next-failure))) ;; replay failure
                         (throw (internal-exception "Transition unexpected" {:type     (:type res?)
                                                                             :expected #{success failure}})))]
      (t/log! {:level :debug :data {:retval retval}} ["Finished internal execution for task" id])
      retval)))

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
  [{:keys [store] :as opts} task]
  ;; because execution engine is supposed to be deterministic,
  ;; we can safely assume that if an identic task exists at this point
  ;; we are replaying some events
  (assert (some? store) "store should exist")
  (assert (some? task) "task should exist")

  (let [t    (or (store/find-task store (:id task))
                 (store/enqueue-task store task))

        prom (store/await-task store (:id t) opts)]

    ;; await for task to be completed
    ;; in cljs there are no blocking ops, so we return the result promise
    #?(:clj  (deref prom)
       :cljs prom)))
