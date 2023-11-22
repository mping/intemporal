(ns intemporal2.workflow
  (:require [intemporal2.store :as store])
  (:import [java.util.concurrent ThreadFactory]))

(set! *warn-on-reflection* true)

;;;;
;; task definitions

(defn random-id []
  ;; https://github.com/moby/moby/blob/master/pkg/namesgenerator/names-generator.go
  (let [left  ["admiring" "adoring" "affectionate" "agitated" "amazing" "angry" "awesome" "beautiful" "blissful" "bold" "boring" "brave" "busy" "charming" "clever" "compassionate" "competent" "condescending" "confident" "cool" "cranky" "crazy" "dazzling" "determined" "distracted" "dreamy" "eager" "ecstatic" "elastic" "elated" "elegant" "eloquent" "epic" "exciting" "fervent" "festive" "flamboyant" "focused" "friendly" "frosty" "funny" "gallant" "gifted" "goofy" "gracious" "great" "happy" "hardcore" "heuristic" "hopeful" "hungry" "infallible" "inspiring" "intelligent" "interesting" "jolly" "jovial" "keen" "kind" "laughing" "loving" "lucid" "magical" "modest" "musing" "mystifying" "naughty" "nervous" "nice" "nifty" "nostalgic" "objective" "optimistic" "peaceful" "pedantic" "pensive" "practical" "priceless" "quirky" "quizzical" "recursing" "relaxed" "reverent" "romantic" "sad" "serene" "sharp" "silly" "sleepy" "stoic" "strange" "stupefied" "suspicious" "sweet" "tender" "thirsty" "trusting" "unruffled" "upbeat" "vibrant" "vigilant" "vigorous" "wizardly" "wonderful" "xenodochial" "youthful" "zealous" "zen"]
        right ["agnesi" "albattani" "allen" "almeida" "antonelli" "archimedes" "ardinghelli" "aryabhata" "austin" "babbage" "banach" "banzai" "bardeen" "bartik" "bassi" "beaver" "bell" "benz" "bhabha" "bhaskara" "black" "blackburn" "blackwell" "bohr" "booth" "borg" "bose" "bouman" "boyd" "brahmagupta" "brattain" "brown" "buck" "burnell" "cannon" "carson" "cartwright" "carver" "cerf" "chandrasekhar" "chaplygin" "chatelet" "chatterjee" "chaum" "chebyshev" "clarke" "cohen" "colden" "cori" "cray" "curie" "curran" "darwin" "davinci" "dewdney" "dhawan" "diffie" "dijkstra" "dirac" "driscoll" "dubinsky" "easley" "edison" "einstein" "elbakyan" "elgamal" "elion" "ellis" "engelbart" "euclid" "euler" "faraday" "feistel" "fermat" "fermi" "feynman" "franklin" "gagarin" "galileo" "galois" "ganguly" "gates" "gauss" "germain" "goldberg" "goldstine" "goldwasser" "golick" "goodall" "gould" "greider" "grothendieck" "haibt" "hamilton" "haslett" "hawking" "heisenberg" "hellman" "hermann" "herschel" "hertz" "heyrovsky" "hodgkin" "hofstadter" "hoover" "hopper" "hugle" "hypatia" "ishizaka" "jackson" "jang" "jemison" "jennings" "jepsen" "johnson" "joliot" "jones" "kalam" "kapitsa" "kare" "keldysh" "keller" "kepler" "khayyam" "khorana" "kilby" "kirch" "knuth" "kowalevski" "lalande" "lamarr" "lamport" "leakey" "leavitt" "lederberg" "lehmann" "lewin" "lichterman" "liskov" "lovelace" "lumiere" "mahavira" "margulis" "matsumoto" "maxwell" "mayer" "mccarthy" "mcclintock" "mclaren" "mclean" "mcnulty" "meitner" "mendel" "mendeleev" "meninsky" "merkle" "mestorf" "mirzakhani" "montalcini" "moore" "morse" "moser" "murdock" "napier" "nash" "neumann" "newton" "nightingale" "nobel" "noether" "northcutt" "noyce" "panini" "pare" "pascal" "pasteur" "payne" "perlman" "pike" "poincare" "poitras" "proskuriakova" "ptolemy" "raman" "ramanujan" "rhodes" "ride" "ritchie" "robinson" "roentgen" "rosalind" "rubin" "saha" "sammet" "sanderson" "satoshi" "shamir" "shannon" "shaw" "shirley" "shockley" "shtern" "sinoussi" "snyder" "solomon" "spence" "stonebraker" "sutherland" "swanson" "swartz" "swirles" "taussig" "tesla" "tharp" "thompson" "torvalds" "tu" "turing" "varahamihira" "vaughan" "villani" "visvesvaraya" "volhard" "wescoff" "wilbur" "wiles" "williams" "williamson" "wilson" "wing" "wozniak" "wright" "wu" "yalow" "yonath" "zhukovsky"]]
    (str (rand-nth left) "-" (rand-nth right))))

(defrecord WorkflowExecutionTask [type id ref root sym args state result])
(defrecord ActivityExecutionTask [type id ref root sym args state result])

(defn create-workflow-task [ref root sym args]
  (let [id (random-id)]
    (->WorkflowExecutionTask :workflow (random-id) ref root sym args :new nil)))

(defn create-activity-task [ref root sym args]
  (->ActivityExecutionTask :activity (random-id) ref root sym args :new nil))

;;;;
;; runtime

(def ^:dynamic *env* nil)
(def default-env {:timeout-ms Long/MAX_VALUE})

(def ^ThreadFactory threadfactory (-> (Thread/ofVirtual)
                                      (.name "intemporal-vthread-", 0)
                                      (.factory)))

(defmacro virtual-thread [& body]
  `(-> threadfactory
       (.newThread (fn [] (do ~@body)))
       (.start)))

(defmacro with-env [m & body]
  `(with-bindings {#'*env* (merge default-env ~m)}
     (do ~@body)))

;;;;
;; task execution/replay

(ns-unmap *ns* 'resume-task)
(defmulti resume-task
          "Continues a task that has been queued for execution. Replays events if they exist."
          (fn [store task]
            (:type task)))

(defmethod resume-task :workflow
  [store {:keys [id root sym args] :as task}]
  ;; todo: ensure history is saved/replayed
  (let [fn (requiring-resolve sym)]
    (try
      (store/transition-task store id {:ref id :root (or root id) :type :intemporal.workflow/invoke :sym sym :args args})

      (let [r (apply fn args)]
        (store/transition-task store id {:ref id :root (or root id) :type :intemporal.workflow/success :sym sym :result r})
        r)

      (catch Exception e
        (store/transition-task store id {:ref id :root (or root id) :type :intemporal.workflow/failure :sym sym :error e})
        (throw e)))))

(defmethod resume-task :activity
  [store {:keys [id root sym args] :as task}]
  ;; todo: ensure history is saved/replayed
  (let [fn (requiring-resolve sym)]
    (try
      (store/transition-task store id {:ref id :root root :type :intemporal.activity/invoke :sym sym :args args})

      (let [r (apply fn args)]
        (store/transition-task store id {:ref id :root root :type :intemporal.activity/success :sym sym :result r})
        r)

      (catch Exception e
        (store/transition-task store id {:ref id :root root :type :intemporal.activity/failure :sym sym :error e})
        (throw e)))))

;;;;
;; worker

(defn start-worker!
  "Starts a worker thread."
  ([store]
   (start-worker! store (constantly false)))
  ([store done?]
   (virtual-thread
     (let [task-ready? #(= :new (:state %))]
       ;; TODO check done?
       (store/watch-tasks store
                          task-ready?
                          (fn [_]
                            ;; should be the store to handle dequeing
                            (when-let [{:keys [type id] :as task} (store/dequeue-task store)]
                              (let [{last-root :root} *env*]
                                ;; run in a new thread to avoid deadlocks
                                (virtual-thread
                                  (with-env {:store store
                                             :type  type
                                             :ref   id
                                             :root  (or last-root id)}
                                    (resume-task store task)))))))))))

(defn enqueue-and-wait
  [{:keys [store] :as opts} task]
  ;(println ">>> enqueuing" task)
  (store/enqueue-task store task)
  ;; await for task to be completed
  (deref (store/await-task store (:id task) opts)))

;;;;
;; userland

(defmacro defn-workflow
  [sym argv & body]
  (let [wname (symbol (str sym "-"))]
    ;; capture bindings to propagate it correctly for activities
    `(do
       (defn- ~wname ~argv (do ~@body))
       (defn ~sym ~argv
         ;; workflow should be called within a with-env block:
         ;; (with-env {:store ..}
         ;;   (my-workflow ...
         (enqueue-and-wait *env* (create-workflow-task (get *env* :ref) (get *env* :root) (symbol #'~wname) ~argv))))))

(defmacro stub-function [f]
  (let [fvar (resolve f)]
    `(fn [& argv#]
       (enqueue-and-wait *env* (create-activity-task (get *env* :ref) (get *env* :root) (symbol ~fvar) argv#)))))
