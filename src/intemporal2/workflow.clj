(ns intemporal2.workflow
  (:require [intemporal2.store :as store]
            [intemporal.workflow :as-alias w]
            [intemporal.activity :as-alias a]
            [intemporal.protocol :as-alias p])
  (:import [java.util.concurrent ThreadFactory]))

(set! *warn-on-reflection* true)

;;;;
;; task definitions

(defn random-id []
  ;; https://github.com/moby/moby/blob/master/pkg/namesgenerator/names-generator.go
  (let [left  ["admiring" "adoring" "affectionate" "agitated" "amazing" "angry" "awesome" "beautiful" "blissful" "bold" "boring" "brave" "busy" "charming" "clever" "compassionate" "competent" "condescending" "confident" "cool" "cranky" "crazy" "dazzling" "determined" "distracted" "dreamy" "eager" "ecstatic" "elastic" "elated" "elegant" "eloquent" "epic" "exciting" "fervent" "festive" "flamboyant" "focused" "friendly" "frosty" "funny" "gallant" "gifted" "goofy" "gracious" "great" "happy" "hardcore" "heuristic" "hopeful" "hungry" "infallible" "inspiring" "intelligent" "interesting" "jolly" "jovial" "keen" "kind" "laughing" "loving" "lucid" "magical" "modest" "musing" "mystifying" "naughty" "nervous" "nice" "nifty" "nostalgic" "objective" "optimistic" "peaceful" "pedantic" "pensive" "practical" "priceless" "quirky" "quizzical" "recursing" "relaxed" "reverent" "romantic" "sad" "serene" "sharp" "silly" "sleepy" "stoic" "strange" "stupefied" "suspicious" "sweet" "tender" "thirsty" "trusting" "unruffled" "upbeat" "vibrant" "vigilant" "vigorous" "wizardly" "wonderful" "xenodochial" "youthful" "zealous" "zen"]
        right ["agnesi" "albattani" "allen" "almeida" "antonelli" "archimedes" "ardinghelli" "aryabhata" "austin" "babbage" "banach" "banzai" "bardeen" "bartik" "bassi" "beaver" "bell" "benz" "bhabha" "bhaskara" "black" "blackburn" "blackwell" "bohr" "booth" "borg" "bose" "bouman" "boyd" "brahmagupta" "brattain" "brown" "buck" "burnell" "cannon" "carson" "cartwright" "carver" "cerf" "chandrasekhar" "chaplygin" "chatelet" "chatterjee" "chaum" "chebyshev" "clarke" "cohen" "colden" "cori" "cray" "curie" "curran" "darwin" "davinci" "dewdney" "dhawan" "diffie" "dijkstra" "dirac" "driscoll" "dubinsky" "easley" "edison" "einstein" "elbakyan" "elgamal" "elion" "ellis" "engelbart" "euclid" "euler" "faraday" "feistel" "fermat" "fermi" "feynman" "franklin" "gagarin" "galileo" "galois" "ganguly" "gates" "gauss" "germain" "goldberg" "goldstine" "goldwasser" "golick" "goodall" "gould" "greider" "grothendieck" "haibt" "hamilton" "haslett" "hawking" "heisenberg" "hellman" "hermann" "herschel" "hertz" "heyrovsky" "hodgkin" "hofstadter" "hoover" "hopper" "hugle" "hypatia" "ishizaka" "jackson" "jang" "jemison" "jennings" "jepsen" "johnson" "joliot" "jones" "kalam" "kapitsa" "kare" "keldysh" "keller" "kepler" "khayyam" "khorana" "kilby" "kirch" "knuth" "kowalevski" "lalande" "lamarr" "lamport" "leakey" "leavitt" "lederberg" "lehmann" "lewin" "lichterman" "liskov" "lovelace" "lumiere" "mahavira" "margulis" "matsumoto" "maxwell" "mayer" "mccarthy" "mcclintock" "mclaren" "mclean" "mcnulty" "meitner" "mendel" "mendeleev" "meninsky" "merkle" "mestorf" "mirzakhani" "montalcini" "moore" "morse" "moser" "murdock" "napier" "nash" "neumann" "newton" "nightingale" "nobel" "noether" "northcutt" "noyce" "panini" "pare" "pascal" "pasteur" "payne" "perlman" "pike" "poincare" "poitras" "proskuriakova" "ptolemy" "raman" "ramanujan" "rhodes" "ride" "ritchie" "robinson" "roentgen" "rosalind" "rubin" "saha" "sammet" "sanderson" "satoshi" "shamir" "shannon" "shaw" "shirley" "shockley" "shtern" "sinoussi" "snyder" "solomon" "spence" "stonebraker" "sutherland" "swanson" "swartz" "swirles" "taussig" "tesla" "tharp" "thompson" "torvalds" "tu" "turing" "varahamihira" "vaughan" "villani" "visvesvaraya" "volhard" "wescoff" "wilbur" "wiles" "williams" "williamson" "wilson" "wing" "wozniak" "wright" "wu" "yalow" "yonath" "zhukovsky"]]
    (str (rand-nth left) "-" (rand-nth right))))

(defrecord WorkflowExecutionTask [type id ref root sym args state result]
  Object
  (toString [this] (str "#WorkflowExecutionTask" (into {} this))))

(defrecord ActivityExecutionTask [type id ref root sym args state result]
  Object
  (toString [this] (str "#ActivityExecutionTask" (into {} this))))

(defrecord ProtoActivityExecutionTask [proto type id ref root sym args state result]
  Object
  (toString [this] (str "#ProtoActivityExecutionTask" (into {} this))))

(defn create-workflow-task [ref root sym args]
  (->WorkflowExecutionTask :workflow (random-id) ref root sym args :new nil))

(defn create-activity-task [ref root sym args]
  (->ActivityExecutionTask :activity (random-id) ref root sym args :new nil))

(defn create-proto-activity-task [proto ref root sym args]
  (->ProtoActivityExecutionTask proto :proto-activity (random-id) ref root sym args :new nil))

;;;;
;; runtime

(def ^:dynamic *env* nil)
(def default-env {:timeout-ms Long/MAX_VALUE})

(def ^ThreadFactory threadfactory (-> (Thread/ofVirtual)
                                      (.name "intemporal-vthread-", 0)
                                      (.factory)))
(defn internal-error? [ex]
  (= :internal (-> ex ex-data ::type)))

(defn internal-exception [msg data]
  (ex-info msg (merge data {::type :internal})))

(defmacro virtual-thread [& body]
  `(let [thread# (-> threadfactory (.newThread (fn ^:once [] (do ~@body))))]
     (.start thread#)
     thread#))

(defmacro with-env [m & body]
  `(with-bindings {#'*env* (merge default-env ~m)}
     (do ~@body)))

;;;;
;; task execution/replay

(defn- event-matches? [{t :type s :sym} {t2 :type s2 :sym}]
  (and (= t t2) (= s s2)))

(defn- resume-fn-task
  "Resumes a generic fn call task"
  [store protos {:keys [type proto id root sym args] :as task} [invoke success failure]]
  ;; TODO check if proto exists in protos
  (let [fn (requiring-resolve sym)
        [inv? res?] (store/all-events store id)]

    ;; mark invoke/replay
    (let [next-event {:ref id :root (or root id) :type invoke :sym sym :args args}]
      (cond
        (not inv?)
        (store/apply-fn-event store id next-event)

        (not (event-matches? inv? next-event))
        (throw (internal-exception "Transition unexpected" {:type     (:type inv?)
                                                            :expected invoke}))))

    ;; mark success/failure or replay
    (let [next-event   {:ref id :root (or root id) :type success :sym sym}
          next-failure (assoc next-event :type failure)]

      (cond
        (not res?)
        (try
          ;; TODO: fix replay
          ;; - check if there is a pending/new task for this ref
          ;;   if there is, wait for it
          (let [impl? (if (= :proto-activity type)
                        (get protos proto)
                        nil)
                args' (if (= :proto-activity type)
                        (cons impl? args)
                        args)
                r (apply fn args')]
            (store/apply-fn-event store id (assoc next-event :result r))
            r)
          (catch Exception e
            (when-not (internal-error? e)
              (store/apply-fn-event store id (assoc next-failure :error e)))
            (throw e)))

        ;; replay ok
        (event-matches? res? next-event)
        (:result next-event)

        ;; replay failure
        (event-matches? res? next-failure)
        (throw (:error next-failure))

        :else
        (throw (internal-exception "Transition unexpected" {:type     (:type res?)
                                                            :expected #{success failure}}))))))

(ns-unmap *ns* 'resume-task)
(defmulti resume-task
          "Continues a task that has been queued for execution. Replays events if they exist."
          (fn [store protos task]
            (:type task)))

(defmethod resume-task :workflow
  [store protos {:keys [id root sym args] :as task}]
  (resume-fn-task store protos task [::w/invoke ::w/success ::w/failure]))

(defmethod resume-task :activity
  [store protos {:keys [id root sym args] :as task}]
  (resume-fn-task store protos task [::a/invoke ::a/success ::a/failure]))

(defmethod resume-task :proto-activity
  [store protos {:keys [id root sym args] :as task}]
  (resume-fn-task store protos task [::p/invoke ::p/success ::p/failure]))

;;;;
;; worker

(defn start-worker!
  "Starts a worker thread."
  ([store]
   (start-worker! store (constantly false)))
  ([store worker-protos]
   (virtual-thread
     (let [task-ready? #(= :new (:state %))
           env *env*]
       (store/watch-tasks store
                          task-ready?
                          (fn [_]
                            ;; should be the store to handle dequeing
                            (when-let [{:keys [type id] :as task} (store/dequeue-task store)]
                              (let [{last-root :root protos :protos} env]
                                ;; run in a new thread to avoid deadlocks
                                (virtual-thread
                                  (with-env {:store store
                                             :type  type
                                             :ref   id
                                             :root  (or last-root id)
                                             :protos (or protos worker-protos)}
                                    (resume-task store worker-protos task)))))))))))

(defn enqueue-and-wait
  [{:keys [store] :as opts} task]
  ;; because execution engine is supposed to be deterministic,
  ;; we can safely assume that if an identic task exists at this point
  ;; we are replaying some events
  (let [t (or (store/matching-task store task)
              (store/enqueue-task store task))]
    ;; await for task to be completed
    (deref (store/await-task store (:id t) opts))))