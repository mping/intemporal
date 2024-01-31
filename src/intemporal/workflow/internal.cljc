(ns ^:private intemporal.workflow.internal
  "Private namespace for workflow support."
  (:require [intemporal.store :as store]))

#?(:clj (set! *warn-on-reflection* true))

(defn internal-error? [ex]
  (= :internal (-> ex ex-data ::type)))

(defn internal-exception [msg data]
  (ex-info msg (merge data {::type :internal})))

;;;;
;; task definitions

(defn random-id []
  ;; debugging purposes only
  ;; https://github.com/moby/moby/blob/master/pkg/namesgenerator/names-generator.go
  (if #?(:clj  (= "true" (System/getenv "DEV"))
         :cljs false)
    (let [left  ["admiring" "adoring" "affectionate" "agitated" "amazing" "angry" "awesome" "beautiful" "blissful" "bold" "boring" "brave" "busy" "charming" "clever" "compassionate" "competent" "condescending" "confident" "cool" "cranky" "crazy" "dazzling" "determined" "distracted" "dreamy" "eager" "ecstatic" "elastic" "elated" "elegant" "eloquent" "epic" "exciting" "fervent" "festive" "flamboyant" "focused" "friendly" "frosty" "funny" "gallant" "gifted" "goofy" "gracious" "great" "happy" "hardcore" "heuristic" "hopeful" "hungry" "infallible" "inspiring" "intelligent" "interesting" "jolly" "jovial" "keen" "kind" "laughing" "loving" "lucid" "magical" "modest" "musing" "mystifying" "naughty" "nervous" "nice" "nifty" "nostalgic" "objective" "optimistic" "peaceful" "pedantic" "pensive" "practical" "priceless" "quirky" "quizzical" "recursing" "relaxed" "reverent" "romantic" "sad" "serene" "sharp" "silly" "sleepy" "stoic" "strange" "stupefied" "suspicious" "sweet" "tender" "thirsty" "trusting" "unruffled" "upbeat" "vibrant" "vigilant" "vigorous" "wizardly" "wonderful" "xenodochial" "youthful" "zealous" "zen"]
          right ["agnesi" "albattani" "allen" "almeida" "antonelli" "archimedes" "ardinghelli" "aryabhata" "austin" "babbage" "banach" "banzai" "bardeen" "bartik" "bassi" "beaver" "bell" "benz" "bhabha" "bhaskara" "black" "blackburn" "blackwell" "bohr" "booth" "borg" "bose" "bouman" "boyd" "brahmagupta" "brattain" "brown" "buck" "burnell" "cannon" "carson" "cartwright" "carver" "cerf" "chandrasekhar" "chaplygin" "chatelet" "chatterjee" "chaum" "chebyshev" "clarke" "cohen" "colden" "cori" "cray" "curie" "curran" "darwin" "davinci" "dewdney" "dhawan" "diffie" "dijkstra" "dirac" "driscoll" "dubinsky" "easley" "edison" "einstein" "elbakyan" "elgamal" "elion" "ellis" "engelbart" "euclid" "euler" "faraday" "feistel" "fermat" "fermi" "feynman" "franklin" "gagarin" "galileo" "galois" "ganguly" "gates" "gauss" "germain" "goldberg" "goldstine" "goldwasser" "golick" "goodall" "gould" "greider" "grothendieck" "haibt" "hamilton" "haslett" "hawking" "heisenberg" "hellman" "hermann" "herschel" "hertz" "heyrovsky" "hodgkin" "hofstadter" "hoover" "hopper" "hugle" "hypatia" "ishizaka" "jackson" "jang" "jemison" "jennings" "jepsen" "johnson" "joliot" "jones" "kalam" "kapitsa" "kare" "keldysh" "keller" "kepler" "khayyam" "khorana" "kilby" "kirch" "knuth" "kowalevski" "lalande" "lamarr" "lamport" "leakey" "leavitt" "lederberg" "lehmann" "lewin" "lichterman" "liskov" "lovelace" "lumiere" "mahavira" "margulis" "matsumoto" "maxwell" "mayer" "mccarthy" "mcclintock" "mclaren" "mclean" "mcnulty" "meitner" "mendel" "mendeleev" "meninsky" "merkle" "mestorf" "mirzakhani" "montalcini" "moore" "morse" "moser" "murdock" "napier" "nash" "neumann" "newton" "nightingale" "nobel" "noether" "northcutt" "noyce" "panini" "pare" "pascal" "pasteur" "payne" "perlman" "pike" "poincare" "poitras" "proskuriakova" "ptolemy" "raman" "ramanujan" "rhodes" "ride" "ritchie" "robinson" "roentgen" "rosalind" "rubin" "saha" "sammet" "sanderson" "satoshi" "shamir" "shannon" "shaw" "shirley" "shockley" "shtern" "sinoussi" "snyder" "solomon" "spence" "stonebraker" "sutherland" "swanson" "swartz" "swirles" "taussig" "tesla" "tharp" "thompson" "torvalds" "tu" "turing" "varahamihira" "vaughan" "villani" "visvesvaraya" "volhard" "wescoff" "wilbur" "wiles" "williams" "williamson" "wilson" "wing" "wozniak" "wright" "wu" "yalow" "yonath" "zhukovsky"]]
      (str (rand-nth left) "-" (rand-nth right)))
    (str (random-uuid))))

(defrecord WorkflowExecutionTask [type id ref root sym fvar args result state]
  Object
  (toString [this] (str "#WorkflowExecutionTask" (into {} this))))

(defrecord ActivityExecutionTask [type id ref root sym fvar args result state]
  Object
  (toString [this] (str "#ActivityExecutionTask" (into {} this))))

(defrecord ProtoActivityExecutionTask [proto type id ref root sym fvar args result state]
  Object
  (toString [this] (str "#ProtoActivityExecutionTask" (into {} this))))

(defn create-workflow-task
  [ref root sym fvar args]
  (->WorkflowExecutionTask :workflow (random-id) ref root sym fvar args nil :new))

(defn create-activity-task
  [ref root sym fvar args]
  (->ActivityExecutionTask :activity (random-id) ref root sym fvar args nil :new))

(defn create-proto-activity-task
  [proto ref root sym fvar args]
  (->ProtoActivityExecutionTask proto :proto-activity (random-id) ref root sym fvar args nil :new))


(defn event-matches? [{t :type s :sym} {t2 :type s2 :sym}]
  (and (= t t2) (= s s2)))

;;;;
;; task execution/replay


(defn resume-fn-task
  "Resumes a generic fn call task"
  [store protos {:keys [type proto id root sym fvar args] :as task} [invoke success failure]]
  ;; TODO check if proto exists in protos
  (let [[inv? res?] (store/all-events store id)]

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
          (let [impl? (if (= :proto-activity type)
                        (get protos proto)
                        nil)
                args' (if (= :proto-activity type)
                        (cons impl? args)
                        args)
                r (apply fvar args')]
            (store/apply-fn-event store id (assoc next-event :result r))
            r)
          (catch #?(:clj Exception :cljs js/Error) e
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

#?(:clj (ns-unmap *ns* 'resume-task))
(defmulti resume-task
          "Continues a task that has been queued for execution. Replays events if they exist."
          (fn [store protos task]
            (:type task)))

(defmethod resume-task :workflow
  [store protos {:keys [id root sym fvar args] :as task}]
  (resume-fn-task store protos task [:intemporal.workflow/invoke :intemporal.workflow/success :intemporal.workflow/failure]))

(defmethod resume-task :activity
  [store protos {:keys [id root sym fvar args] :as task}]
  (resume-fn-task store protos task [:intemporal.activity/invoke :intemporal.activity/success :intemporal.activity/failure]))

(defmethod resume-task :proto-activity
  [store protos {:keys [id root sym fvar  args] :as task}]
  (resume-fn-task store protos task [:intemporal.protocol/invoke :intemporal.protocol/success :intemporal.protocol/failure]))

(defn enqueue-and-wait
  [{:keys [store] :as opts} task]
  ;; because execution engine is supposed to be deterministic,
  ;; we can safely assume that if an identic task exists at this point
  ;; we are replaying some events
  (let [t (or (store/matching-task store task)
              (store/enqueue-task store task))
        prom (store/await-task store (:id t) opts)]
    ;; await for task to be completed
    ;; in cljs there are no blocking ops, so we return the result promise
    #?(:clj (deref prom)
       :cljs prom)))