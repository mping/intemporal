goog.provide('intemporal.store');

/**
 * @interface
 */
intemporal.store.TaskStore = function(){};

var intemporal$store$TaskStore$list_tasks$dyn_42258 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.store.list_tasks[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (intemporal.store.list_tasks["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("TaskStore.list-tasks",this$);
}
}
});
/**
 * Lists all tasks
 */
intemporal.store.list_tasks = (function intemporal$store$list_tasks(this$){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$TaskStore$list_tasks$arity$1 == null)))))){
return this$.intemporal$store$TaskStore$list_tasks$arity$1(this$);
} else {
return intemporal$store$TaskStore$list_tasks$dyn_42258(this$);
}
});

var intemporal$store$TaskStore$task_LT__panic$dyn_42259 = (function (this$,task_id,error){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.store.task_LT__panic[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,task_id,error) : m__5351__auto__.call(null, this$,task_id,error));
} else {
var m__5349__auto__ = (intemporal.store.task_LT__panic["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,task_id,error) : m__5349__auto__.call(null, this$,task_id,error));
} else {
throw cljs.core.missing_protocol("TaskStore.task<-panic",this$);
}
}
});
/**
 * Terminates the task via panic; events should not be stored
 */
intemporal.store.task_LT__panic = (function intemporal$store$task_LT__panic(this$,task_id,error){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$TaskStore$task_LT__panic$arity$3 == null)))))){
return this$.intemporal$store$TaskStore$task_LT__panic$arity$3(this$,task_id,error);
} else {
return intemporal$store$TaskStore$task_LT__panic$dyn_42259(this$,task_id,error);
}
});

var intemporal$store$TaskStore$task_LT__event$dyn_42260 = (function (this$,task_id,event_descr){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.store.task_LT__event[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,task_id,event_descr) : m__5351__auto__.call(null, this$,task_id,event_descr));
} else {
var m__5349__auto__ = (intemporal.store.task_LT__event["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,task_id,event_descr) : m__5349__auto__.call(null, this$,task_id,event_descr));
} else {
throw cljs.core.missing_protocol("TaskStore.task<-event",this$);
}
}
});
/**
 * Transitions the task. The task should be dequeued beforehand. Returns the event.
 *  `event-descr` is one of:
 *  `{:sym 'ns/f :args [1]}`
 *  `{:sym 'ns/f :result :ok}`
 *  `{:sym 'ns/f :error <some error>}`
 *  
 */
intemporal.store.task_LT__event = (function intemporal$store$task_LT__event(this$,task_id,event_descr){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$TaskStore$task_LT__event$arity$3 == null)))))){
return this$.intemporal$store$TaskStore$task_LT__event$arity$3(this$,task_id,event_descr);
} else {
return intemporal$store$TaskStore$task_LT__event$dyn_42260(this$,task_id,event_descr);
}
});

var intemporal$store$TaskStore$watch_task$dyn_42261 = (function (this$,id,callback){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.store.watch_task[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callback) : m__5351__auto__.call(null, this$,id,callback));
} else {
var m__5349__auto__ = (intemporal.store.watch_task["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callback) : m__5349__auto__.call(null, this$,id,callback));
} else {
throw cljs.core.missing_protocol("TaskStore.watch-task",this$);
}
}
});
/**
 * Observes state changes, calling `callback` for any task that matches `predicate`.
 */
intemporal.store.watch_task = (function intemporal$store$watch_task(this$,id,callback){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$TaskStore$watch_task$arity$3 == null)))))){
return this$.intemporal$store$TaskStore$watch_task$arity$3(this$,id,callback);
} else {
return intemporal$store$TaskStore$watch_task$dyn_42261(this$,id,callback);
}
});

var intemporal$store$TaskStore$await_task$dyn_42262 = (function() {
var G__42263 = null;
var G__42263__2 = (function (this$,id){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.store.await_task[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5351__auto__.call(null, this$,id));
} else {
var m__5349__auto__ = (intemporal.store.await_task["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5349__auto__.call(null, this$,id));
} else {
throw cljs.core.missing_protocol("TaskStore.await-task",this$);
}
}
});
var G__42263__3 = (function (this$,id,opts){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.store.await_task[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,opts) : m__5351__auto__.call(null, this$,id,opts));
} else {
var m__5349__auto__ = (intemporal.store.await_task["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,opts) : m__5349__auto__.call(null, this$,id,opts));
} else {
throw cljs.core.missing_protocol("TaskStore.await-task",this$);
}
}
});
G__42263 = function(this$,id,opts){
switch(arguments.length){
case 2:
return G__42263__2.call(this,this$,id);
case 3:
return G__42263__3.call(this,this$,id,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42263.cljs$core$IFn$_invoke$arity$2 = G__42263__2;
G__42263.cljs$core$IFn$_invoke$arity$3 = G__42263__3;
return G__42263;
})()
;
/**
 * Waits for workflow to finish. Returns a deref'able value. Can throw.
 *  Opts include
 *  - `timeout-ms`: timeout for task await
 */
intemporal.store.await_task = (function intemporal$store$await_task(var_args){
var G__42228 = arguments.length;
switch (G__42228) {
case 2:
return intemporal.store.await_task.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return intemporal.store.await_task.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(intemporal.store.await_task.cljs$core$IFn$_invoke$arity$2 = (function (this$,id){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$TaskStore$await_task$arity$2 == null)))))){
return this$.intemporal$store$TaskStore$await_task$arity$2(this$,id);
} else {
return intemporal$store$TaskStore$await_task$dyn_42262(this$,id);
}
}));

(intemporal.store.await_task.cljs$core$IFn$_invoke$arity$3 = (function (this$,id,opts){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$TaskStore$await_task$arity$3 == null)))))){
return this$.intemporal$store$TaskStore$await_task$arity$3(this$,id,opts);
} else {
return intemporal$store$TaskStore$await_task$dyn_42262(this$,id,opts);
}
}));

(intemporal.store.await_task.cljs$lang$maxFixedArity = 3);


var intemporal$store$TaskStore$find_task$dyn_42265 = (function (this$,id){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.store.find_task[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5351__auto__.call(null, this$,id));
} else {
var m__5349__auto__ = (intemporal.store.find_task["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5349__auto__.call(null, this$,id));
} else {
throw cljs.core.missing_protocol("TaskStore.find-task",this$);
}
}
});
/**
 * Finds the task on the db by id
 */
intemporal.store.find_task = (function intemporal$store$find_task(this$,id){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$TaskStore$find_task$arity$2 == null)))))){
return this$.intemporal$store$TaskStore$find_task$arity$2(this$,id);
} else {
return intemporal$store$TaskStore$find_task$dyn_42265(this$,id);
}
});

var intemporal$store$TaskStore$reenqueue_pending_tasks$dyn_42266 = (function (this$,callback){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.store.reenqueue_pending_tasks[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,callback) : m__5351__auto__.call(null, this$,callback));
} else {
var m__5349__auto__ = (intemporal.store.reenqueue_pending_tasks["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,callback) : m__5349__auto__.call(null, this$,callback));
} else {
throw cljs.core.missing_protocol("TaskStore.reenqueue-pending-tasks",this$);
}
}
});
/**
 * Marks all pending tasks as `new`
 */
intemporal.store.reenqueue_pending_tasks = (function intemporal$store$reenqueue_pending_tasks(this$,callback){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$TaskStore$reenqueue_pending_tasks$arity$2 == null)))))){
return this$.intemporal$store$TaskStore$reenqueue_pending_tasks$arity$2(this$,callback);
} else {
return intemporal$store$TaskStore$reenqueue_pending_tasks$dyn_42266(this$,callback);
}
});

var intemporal$store$TaskStore$enqueue_task$dyn_42267 = (function (this$,task){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.store.enqueue_task[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,task) : m__5351__auto__.call(null, this$,task));
} else {
var m__5349__auto__ = (intemporal.store.enqueue_task["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,task) : m__5349__auto__.call(null, this$,task));
} else {
throw cljs.core.missing_protocol("TaskStore.enqueue-task",this$);
}
}
});
/**
 * Atomically enqueues a protocol, workflow or activity task execution
 */
intemporal.store.enqueue_task = (function intemporal$store$enqueue_task(this$,task){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$TaskStore$enqueue_task$arity$2 == null)))))){
return this$.intemporal$store$TaskStore$enqueue_task$arity$2(this$,task);
} else {
return intemporal$store$TaskStore$enqueue_task$dyn_42267(this$,task);
}
});

var intemporal$store$TaskStore$dequeue_task$dyn_42268 = (function() {
var G__42269 = null;
var G__42269__1 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.store.dequeue_task[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (intemporal.store.dequeue_task["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("TaskStore.dequeue-task",this$);
}
}
});
var G__42269__2 = (function (this$,opts){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.store.dequeue_task[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__5351__auto__.call(null, this$,opts));
} else {
var m__5349__auto__ = (intemporal.store.dequeue_task["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__5349__auto__.call(null, this$,opts));
} else {
throw cljs.core.missing_protocol("TaskStore.dequeue-task",this$);
}
}
});
G__42269 = function(this$,opts){
switch(arguments.length){
case 1:
return G__42269__1.call(this,this$);
case 2:
return G__42269__2.call(this,this$,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42269.cljs$core$IFn$_invoke$arity$1 = G__42269__1;
G__42269.cljs$core$IFn$_invoke$arity$2 = G__42269__2;
return G__42269;
})()
;
/**
 * Atomically dequeues some workflow, protocol or activity task execution.
 *  For deterministic purposes, should dequeue the oldest task first.
 *  If the task was deserialized, its `fvar` attribute must be a `fn`
 *  Opts:
 *  * `lease-ms`- duration of lease for dequeue. After lease expires, the task is eligible for dequeueing again
 */
intemporal.store.dequeue_task = (function intemporal$store$dequeue_task(var_args){
var G__42230 = arguments.length;
switch (G__42230) {
case 1:
return intemporal.store.dequeue_task.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return intemporal.store.dequeue_task.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(intemporal.store.dequeue_task.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$TaskStore$dequeue_task$arity$1 == null)))))){
return this$.intemporal$store$TaskStore$dequeue_task$arity$1(this$);
} else {
return intemporal$store$TaskStore$dequeue_task$dyn_42268(this$);
}
}));

(intemporal.store.dequeue_task.cljs$core$IFn$_invoke$arity$2 = (function (this$,opts){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$TaskStore$dequeue_task$arity$2 == null)))))){
return this$.intemporal$store$TaskStore$dequeue_task$arity$2(this$,opts);
} else {
return intemporal$store$TaskStore$dequeue_task$dyn_42268(this$,opts);
}
}));

(intemporal.store.dequeue_task.cljs$lang$maxFixedArity = 2);


var intemporal$store$TaskStore$clear_tasks$dyn_42271 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.store.clear_tasks[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (intemporal.store.clear_tasks["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("TaskStore.clear-tasks",this$);
}
}
});
/**
 * Clears all tasks
 */
intemporal.store.clear_tasks = (function intemporal$store$clear_tasks(this$){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$TaskStore$clear_tasks$arity$1 == null)))))){
return this$.intemporal$store$TaskStore$clear_tasks$arity$1(this$);
} else {
return intemporal$store$TaskStore$clear_tasks$dyn_42271(this$);
}
});


/**
 * @interface
 */
intemporal.store.HistoryStore = function(){};

var intemporal$store$HistoryStore$list_events$dyn_42272 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.store.list_events[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (intemporal.store.list_events["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("HistoryStore.list-events",this$);
}
}
});
/**
 * Lists all events
 */
intemporal.store.list_events = (function intemporal$store$list_events(this$){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$HistoryStore$list_events$arity$1 == null)))))){
return this$.intemporal$store$HistoryStore$list_events$arity$1(this$);
} else {
return intemporal$store$HistoryStore$list_events$dyn_42272(this$);
}
});

var intemporal$store$HistoryStore$save_event$dyn_42273 = (function (this$,task_id,event){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.store.save_event[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,task_id,event) : m__5351__auto__.call(null, this$,task_id,event));
} else {
var m__5349__auto__ = (intemporal.store.save_event["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,task_id,event) : m__5349__auto__.call(null, this$,task_id,event));
} else {
throw cljs.core.missing_protocol("HistoryStore.save-event",this$);
}
}
});
/**
 * Saves the event for the given task id. Returns the saved event
 */
intemporal.store.save_event = (function intemporal$store$save_event(this$,task_id,event){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$HistoryStore$save_event$arity$3 == null)))))){
return this$.intemporal$store$HistoryStore$save_event$arity$3(this$,task_id,event);
} else {
return intemporal$store$HistoryStore$save_event$dyn_42273(this$,task_id,event);
}
});

var intemporal$store$HistoryStore$all_events$dyn_42274 = (function (this$,task_id){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.store.all_events[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,task_id) : m__5351__auto__.call(null, this$,task_id));
} else {
var m__5349__auto__ = (intemporal.store.all_events["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,task_id) : m__5349__auto__.call(null, this$,task_id));
} else {
throw cljs.core.missing_protocol("HistoryStore.all-events",this$);
}
}
});
/**
 * Returns all the events for a given task id
 */
intemporal.store.all_events = (function intemporal$store$all_events(this$,task_id){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$HistoryStore$all_events$arity$2 == null)))))){
return this$.intemporal$store$HistoryStore$all_events$arity$2(this$,task_id);
} else {
return intemporal$store$HistoryStore$all_events$dyn_42274(this$,task_id);
}
});

var intemporal$store$HistoryStore$clear_events$dyn_42275 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.store.clear_events[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (intemporal.store.clear_events["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("HistoryStore.clear-events",this$);
}
}
});
/**
 * Deletes all events
 */
intemporal.store.clear_events = (function intemporal$store$clear_events(this$){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$HistoryStore$clear_events$arity$1 == null)))))){
return this$.intemporal$store$HistoryStore$clear_events$arity$1(this$);
} else {
return intemporal$store$HistoryStore$clear_events$dyn_42275(this$);
}
});


/**
 * @interface
 */
intemporal.store.InternalVarStore = function(){};

var intemporal$store$InternalVarStore$register$dyn_42276 = (function (this$,sym,var$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.store.register[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,sym,var$) : m__5351__auto__.call(null, this$,sym,var$));
} else {
var m__5349__auto__ = (intemporal.store.register["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,sym,var$) : m__5349__auto__.call(null, this$,sym,var$));
} else {
throw cljs.core.missing_protocol("InternalVarStore.register",this$);
}
}
});
/**
 * Register the symbol with the var
 */
intemporal.store.register = (function intemporal$store$register(this$,sym,var$){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$InternalVarStore$register$arity$3 == null)))))){
return this$.intemporal$store$InternalVarStore$register$arity$3(this$,sym,var$);
} else {
return intemporal$store$InternalVarStore$register$dyn_42276(this$,sym,var$);
}
});

var intemporal$store$InternalVarStore$lookup$dyn_42277 = (function (this$,sym){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (intemporal.store.lookup[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,sym) : m__5351__auto__.call(null, this$,sym));
} else {
var m__5349__auto__ = (intemporal.store.lookup["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,sym) : m__5349__auto__.call(null, this$,sym));
} else {
throw cljs.core.missing_protocol("InternalVarStore.lookup",this$);
}
}
});
/**
 * Finds the var for the given symbol
 */
intemporal.store.lookup = (function intemporal$store$lookup(this$,sym){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$InternalVarStore$lookup$arity$2 == null)))))){
return this$.intemporal$store$InternalVarStore$lookup$arity$2(this$,sym);
} else {
return intemporal$store$InternalVarStore$lookup$dyn_42277(this$,sym);
}
});

intemporal.store.now = (function intemporal$store$now(){
return (new Date()).getTime();
});
/**
 * Default lease time in millis - 15mins
 */
intemporal.store.default_lease = (((15) * (60)) * (1000));
intemporal.store.sym__GT_var = (function intemporal$store$sym__GT_var(store,p__42231){
var map__42232 = p__42231;
var map__42232__$1 = cljs.core.__destructure_map(map__42232);
var task = map__42232__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42232__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var fvar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42232__$1,new cljs.core.Keyword(null,"fvar","fvar",1802913046));
var or__5002__auto__ = fvar;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return intemporal.store.lookup(store,sym);
}
});
intemporal.store.edn_exists_QMARK_ = (function intemporal$store$edn_exists_QMARK_(file){
return cljs.core.seq(window.localStorage.getItem(file));
});
intemporal.store.read_edn = (function intemporal$store$read_edn(file,readers){
var f = window.localStorage.getItem(file);
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),readers], null),f);
});
intemporal.store.write_edn = (function intemporal$store$write_edn(file,val){
return window.localStorage.setItem(file,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0)));
});

/**
* @constructor
 * @implements {intemporal.store.InternalVarStore}
 * @implements {intemporal.store.TaskStore}
 * @implements {cljs.core.IMeta}
 * @implements {intemporal.store.HistoryStore}
 * @implements {cljs.core.IWithMeta}
*/
intemporal.store.t_intemporal$store42242 = (function (maybe_fail_BANG_,owner,pcounter,validation_fail_rate,vars,ecounter,update_task,file,readers,history,p__42239,map__42240,tasks,tcounter,counter,find_task,persist_BANG_,meta42243){
this.maybe_fail_BANG_ = maybe_fail_BANG_;
this.owner = owner;
this.pcounter = pcounter;
this.validation_fail_rate = validation_fail_rate;
this.vars = vars;
this.ecounter = ecounter;
this.update_task = update_task;
this.file = file;
this.readers = readers;
this.history = history;
this.p__42239 = p__42239;
this.map__42240 = map__42240;
this.tasks = tasks;
this.tcounter = tcounter;
this.counter = counter;
this.find_task = find_task;
this.persist_BANG_ = persist_BANG_;
this.meta42243 = meta42243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(intemporal.store.t_intemporal$store42242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42244,meta42243__$1){
var self__ = this;
var _42244__$1 = this;
return (new intemporal.store.t_intemporal$store42242(self__.maybe_fail_BANG_,self__.owner,self__.pcounter,self__.validation_fail_rate,self__.vars,self__.ecounter,self__.update_task,self__.file,self__.readers,self__.history,self__.p__42239,self__.map__42240,self__.tasks,self__.tcounter,self__.counter,self__.find_task,self__.persist_BANG_,meta42243__$1));
}));

(intemporal.store.t_intemporal$store42242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42244){
var self__ = this;
var _42244__$1 = this;
return self__.meta42243;
}));

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$InternalVarStore$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$InternalVarStore$register$arity$3 = (function (this$,sym,var$){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.vars,cljs.core.assoc,sym,var$);
}));

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$InternalVarStore$lookup$arity$2 = (function (this$,sym){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.vars),sym);
}));

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$HistoryStore$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$HistoryStore$list_events$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(cljs.core.deref(self__.history)));
}));

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$HistoryStore$save_event$arity$3 = (function (this$,task_id,event){
var self__ = this;
var this$__$1 = this;
var evt_PLUS_id = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(event,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.counter,cljs.core.inc));
(intemporal.store.internal.validate_event.cljs$core$IFn$_invoke$arity$1 ? intemporal.store.internal.validate_event.cljs$core$IFn$_invoke$arity$1(evt_PLUS_id) : intemporal.store.internal.validate_event.call(null, evt_PLUS_id));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.history,(function (v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,task_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,task_id);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),evt_PLUS_id));
}));

return evt_PLUS_id;
}));

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$HistoryStore$all_events$arity$2 = (function (this$,task_id){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.history),task_id);
}));

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$HistoryStore$clear_events$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(self__.history,cljs.core.PersistentArrayMap.EMPTY);
}));

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$TaskStore$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$TaskStore$await_task$arity$2 = (function (this$,id){
var self__ = this;
var this$__$1 = this;
return this$__$1.intemporal$store$TaskStore$await_task$arity$3(null, id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),intemporal.store.default_lease], null));
}));

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$TaskStore$await_task$arity$3 = (function (this$,id,p__42245){
var self__ = this;
var map__42246 = p__42245;
var map__42246__$1 = cljs.core.__destructure_map(map__42246);
var opts = map__42246__$1;
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42246__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var this$__$1 = this;
(self__.maybe_fail_BANG_.cljs$core$IFn$_invoke$arity$0 ? self__.maybe_fail_BANG_.cljs$core$IFn$_invoke$arity$0() : self__.maybe_fail_BANG_.call(null, ));

var task = (self__.find_task.cljs$core$IFn$_invoke$arity$2 ? self__.find_task.cljs$core$IFn$_invoke$arity$2(this$__$1,id) : self__.find_task.call(null, this$__$1,id));
var deferred = promesa.core.deferred();
var wrap_result = (function (p__42247){
var map__42248 = p__42247;
var map__42248__$1 = cljs.core.__destructure_map(map__42248);
var task__$1 = map__42248__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42248__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(intemporal.store.internal.success_QMARK_(task__$1)){
return promesa.core.resolved(result);
} else {
if(intemporal.store.internal.failure_QMARK_(task__$1)){
return promesa.core.rejected(result);
} else {
return promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown state",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),task__$1], null)));

}
}
});
if(intemporal.store.internal.terminal_QMARK_(task)){
return wrap_result(task);
} else {
this$__$1.intemporal$store$TaskStore$watch_task$arity$3(null, id,(function (task__$1){
if(intemporal.store.internal.terminal_QMARK_(task__$1)){
promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(deferred,task__$1);

return true;
} else {
return null;
}
}));

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.timeout.cljs$core$IFn$_invoke$arity$3(deferred,timeout_ms,new cljs.core.Keyword("intemporal.store","timeout","intemporal.store/timeout",-112290028)),(function (resolved){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("intemporal.store","timeout","intemporal.store/timeout",-112290028),resolved)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Timeout waiting for task to be completed",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),task], null));
} else {
return wrap_result(resolved);
}
}));
}
}));

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$TaskStore$watch_task$arity$3 = (function (this$,id,f){
var self__ = this;
var this$__$1 = this;
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["watcher-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.pcounter,cljs.core.inc))].join(''));
var watchfn = (function (k__$1,atm,old,new$){
var xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__42234_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__42234_SHARP_));
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__42235_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__42235_SHARP_)),p1__42235_SHARP_);
})),cljs.core.take.cljs$core$IFn$_invoke$arity$1((1)));
var changeset = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xf,cljs.core.conj,cljs.core.vals(new$));
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.first(changeset);
if(cljs.core.truth_(and__5000__auto__)){
var G__42249 = cljs.core.first(changeset);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42249) : f.call(null, G__42249));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.remove_watch(self__.tasks,k__$1);
} else {
return null;
}
});
return cljs.core.add_watch(self__.tasks,k,watchfn);
}));

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$TaskStore$task_LT__event$arity$3 = (function (this$,task_id,p__42250){
var self__ = this;
var map__42251 = p__42250;
var map__42251__$1 = cljs.core.__destructure_map(map__42251);
var event_descr = map__42251__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42251__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42251__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42251__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42251__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42251__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42251__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42251__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42251__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var this$__$1 = this;
if((!((args == null)))){
var evt = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"result","result",1415092211),null], null);
if(cljs.core.truth_(id)){
} else {
this$__$1.intemporal$store$HistoryStore$save_event$arity$3(null, task_id,evt);
}

(self__.update_task.cljs$core$IFn$_invoke$arity$4 ? self__.update_task.cljs$core$IFn$_invoke$arity$4(this$__$1,task_id,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"pending","pending",-220036727)) : self__.update_task.call(null, this$__$1,task_id,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"pending","pending",-220036727)));

return evt;
} else {
if((!((error == null)))){
var evt = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"result","result",1415092211),null], null);
if(cljs.core.truth_(id)){
} else {
this$__$1.intemporal$store$HistoryStore$save_event$arity$3(null, task_id,evt);
}

(self__.update_task.cljs$core$IFn$_invoke$arity$6 ? self__.update_task.cljs$core$IFn$_invoke$arity$6(this$__$1,task_id,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"result","result",1415092211),error) : self__.update_task.call(null, this$__$1,task_id,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"result","result",1415092211),error));

return evt;
} else {
var evt = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"result","result",1415092211),result], null);
if(cljs.core.truth_(id)){
} else {
this$__$1.intemporal$store$HistoryStore$save_event$arity$3(null, task_id,evt);
}

(self__.update_task.cljs$core$IFn$_invoke$arity$6 ? self__.update_task.cljs$core$IFn$_invoke$arity$6(this$__$1,task_id,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"result","result",1415092211),result) : self__.update_task.call(null, this$__$1,task_id,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"result","result",1415092211),result));

return evt;

}
}
}));

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$TaskStore$enqueue_task$arity$2 = (function (this$,task){
var self__ = this;
var this$__$1 = this;
(self__.maybe_fail_BANG_.cljs$core$IFn$_invoke$arity$0 ? self__.maybe_fail_BANG_.cljs$core$IFn$_invoke$arity$0() : self__.maybe_fail_BANG_.call(null, ));

(intemporal.store.internal.validate_task.cljs$core$IFn$_invoke$arity$1 ? intemporal.store.internal.validate_task.cljs$core$IFn$_invoke$arity$1(task) : intemporal.store.internal.validate_task.call(null, task));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.tasks,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(task,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.tcounter,cljs.core.inc)));

this$__$1.intemporal$store$InternalVarStore$register$arity$3(null, new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"fvar","fvar",1802913046).cljs$core$IFn$_invoke$arity$1(task));

return task;
}));

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$TaskStore$reenqueue_pending_tasks$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var task__GT_run_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.tasks,cljs.core.update_vals,(function (p__42252){
var map__42253 = p__42252;
var map__42253__$1 = cljs.core.__destructure_map(map__42253);
var task = map__42253__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42253__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__42254 = task;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending","pending",-220036727),state)){

if(cljs.core.contains_QMARK_(cljs.core.deref(task__GT_run_QMARK_),task)){
} else {
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(task) : f.call(null, task));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(task__GT_run_QMARK_,cljs.core.conj,task);
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(task,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"new","new",-2085437848));
} else {
return G__42254;
}
}));
}));

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$TaskStore$clear_tasks$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(self__.tasks,cljs.core.PersistentArrayMap.EMPTY);
}));

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$TaskStore$find_task$arity$2 = (function (this$,id){
var self__ = this;
var this$__$1 = this;
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42233_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__42233_SHARP_),id);
}),cljs.core.vals(cljs.core.deref(self__.tasks))));
}));

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$TaskStore$list_tasks$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.vals(cljs.core.deref(self__.tasks));
}));

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$TaskStore$task_LT__panic$arity$3 = (function (this$,task_id,error){
var self__ = this;
var this$__$1 = this;
return (self__.update_task.cljs$core$IFn$_invoke$arity$4 ? self__.update_task.cljs$core$IFn$_invoke$arity$4(this$__$1,task_id,new cljs.core.Keyword(null,"result","result",1415092211),error) : self__.update_task.call(null, this$__$1,task_id,new cljs.core.Keyword(null,"result","result",1415092211),error));
}));

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$TaskStore$dequeue_task$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.intemporal$store$TaskStore$dequeue_task$arity$2(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lease-ms","lease-ms",191549996),null], null));
}));

(intemporal.store.t_intemporal$store42242.prototype.intemporal$store$TaskStore$dequeue_task$arity$2 = (function (this$,p__42255){
var self__ = this;
var map__42256 = p__42255;
var map__42256__$1 = cljs.core.__destructure_map(map__42256);
var lease_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42256__$1,new cljs.core.Keyword(null,"lease-ms","lease-ms",191549996));
var this$__$1 = this;
var first_new = (function (v){
return cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42236_SHARP_){
var or__5002__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(p1__42236_SHARP_));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var G__42257 = new cljs.core.Keyword(null,"lease-end","lease-end",2142146879).cljs$core$IFn$_invoke$arity$1(p1__42236_SHARP_);
if((G__42257 == null)){
return null;
} else {
return (G__42257 < intemporal.store.now());
}
}
}),cljs.core.vals(v))));
});
var found_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$2(self__.tasks,(function (v){
var found = first_new(v);
if(cljs.core.truth_(found)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(found),cljs.core.reset_BANG_(found_QMARK_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(found,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fvar","fvar",1802913046),intemporal.store.sym__GT_var(this$__$1,found),new cljs.core.Keyword(null,"lease-end","lease-end",2142146879),(cljs.core.truth_(lease_ms)?(intemporal.store.now() + lease_ms):null)], 0))));
} else {
return v;
}
}));

return cljs.core.deref(found_QMARK_);
}));

(intemporal.store.t_intemporal$store42242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"maybe-fail!","maybe-fail!",-88256508,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"pcounter","pcounter",-1054343387,null),new cljs.core.Symbol(null,"validation-fail-rate","validation-fail-rate",1506797413,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"ecounter","ecounter",-1468060630,null),new cljs.core.Symbol(null,"update-task","update-task",1145318256,null),new cljs.core.Symbol(null,"file","file",370885649,null),new cljs.core.Symbol(null,"readers","readers",-477731503,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"p__42239","p__42239",740191253,null),new cljs.core.Symbol(null,"map__42240","map__42240",-1866213514,null),new cljs.core.Symbol(null,"tasks","tasks",-113837353,null),new cljs.core.Symbol(null,"tcounter","tcounter",1419138136,null),new cljs.core.Symbol(null,"counter","counter",-1850427592,null),new cljs.core.Symbol(null,"find-task","find-task",835161369,null),new cljs.core.Symbol(null,"persist!","persist!",-1958402018,null),new cljs.core.Symbol(null,"meta42243","meta42243",-1541710853,null)], null);
}));

(intemporal.store.t_intemporal$store42242.cljs$lang$type = true);

(intemporal.store.t_intemporal$store42242.cljs$lang$ctorStr = "intemporal.store/t_intemporal$store42242");

(intemporal.store.t_intemporal$store42242.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"intemporal.store/t_intemporal$store42242");
}));

/**
 * Positional factory function for intemporal.store/t_intemporal$store42242.
 */
intemporal.store.__GT_t_intemporal$store42242 = (function intemporal$store$__GT_t_intemporal$store42242(maybe_fail_BANG_,owner,pcounter,validation_fail_rate,vars,ecounter,update_task,file,readers,history,p__42239,map__42240,tasks,tcounter,counter,find_task,persist_BANG_,meta42243){
return (new intemporal.store.t_intemporal$store42242(maybe_fail_BANG_,owner,pcounter,validation_fail_rate,vars,ecounter,update_task,file,readers,history,p__42239,map__42240,tasks,tcounter,counter,find_task,persist_BANG_,meta42243));
});


/**
 * Creates a new memory-based store
 */
intemporal.store.make_store = (function intemporal$store$make_store(var_args){
var G__42238 = arguments.length;
switch (G__42238) {
case 0:
return intemporal.store.make_store.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return intemporal.store.make_store.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(intemporal.store.make_store.cljs$core$IFn$_invoke$arity$0 = (function (){
return intemporal.store.make_store.cljs$core$IFn$_invoke$arity$1(null);
}));

(intemporal.store.make_store.cljs$core$IFn$_invoke$arity$1 = (function (p__42239){
var map__42240 = p__42239;
var map__42240__$1 = cljs.core.__destructure_map(map__42240);
var owner = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42240__$1,new cljs.core.Keyword(null,"owner","owner",-392611939),"intemporal");
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42240__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var readers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42240__$1,new cljs.core.Keyword(null,"readers","readers",-2118263030));
var validation_fail_rate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42240__$1,new cljs.core.Keyword(null,"validation-fail-rate","validation-fail-rate",-133734114),(0));
var tasks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var history__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var pcounter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var ecounter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var tcounter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var maybe_fail_BANG_ = (function (){
if((cljs.core.rand_int((100)) < ((100) * validation_fail_rate))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Forced error via failure rate",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("intemporal.workflow.internal","type","intemporal.workflow.internal/type",-1847162431),new cljs.core.Keyword(null,"internal","internal",-854870097)], null));
} else {
return null;
}
});
var persist_BANG_ = (function (k,ref,old,new$){
if(cljs.core.truth_((function (){var and__5000__auto__ = file;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$);
} else {
return and__5000__auto__;
}
})())){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.store";
var __id = null;
var __level = new cljs.core.Keyword(null,"debug","debug",-1608172596);
if(cljs.core.truth_((function (){var sf = taoensso.telemere.impl._STAR_rt_sig_filter_STAR_;
if(cljs.core.truth_(sf)){
return (sf.cljs$core$IFn$_invoke$arity$4 ? sf.cljs$core$IFn$_invoke$arity$4(__kind,__ns,__id,__level) : sf.call(null, __kind,__ns,__id,__level));
} else {
return true;
}
})())){
var __inst = (new Date());
var __thread = null;
var __root0 = taoensso.telemere.impl._STAR_trace_root_STAR_;
var __otel_context1 = null;
var __uid = null;
var __root1 = __root0;
var __run_result = null;
var signal__40530__auto__ = (new cljs.core.Delay((function (){

var signal__40521__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"intemporal.store",new cljs.core.Keyword(null,"line","line",212345235),113,new cljs.core.Keyword(null,"column","column",2078222095),26,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/mping/Devel/workspace/exoscale/intemporal/src/intemporal/store.cljc"], null),__ns,113,26,"file:/home/mping/Devel/workspace/exoscale/intemporal/src/intemporal/store.cljc",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,(new cljs.core.Delay((function (){
return taoensso.telemere.impl.signal_msg(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Persisting store to file",file], null));
}),null)),null,null,null,null,null,null,null,null));
var temp__5802__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5802__auto__)){
var sig_middleware__40522__auto__ = temp__5802__auto__;
return (sig_middleware__40522__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__40522__auto__.cljs$core$IFn$_invoke$arity$1(signal__40521__auto__) : sig_middleware__40522__auto__.call(null, signal__40521__auto__));
} else {
return signal__40521__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__ns,__kind,__id,__level,signal__40530__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__40530__auto__) : __run_result.call(null, signal__40530__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return intemporal.store.write_edn(file,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.deref(tasks),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.deref(history__$1),new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.deref(counter),new cljs.core.Keyword(null,"pcounter","pcounter",1600092382),cljs.core.deref(pcounter),new cljs.core.Keyword(null,"ecounter","ecounter",1186375139),cljs.core.deref(ecounter)], null));
} else {
return null;
}
});
var find_task = (function (this$,id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tasks),id);
});
var update_task = (function() { 
var G__42289__delegate = function (this$,id,kvs){
var temp__5804__auto__ = find_task(this$,id);
if(cljs.core.truth_(temp__5804__auto__)){
var w = temp__5804__auto__;
maybe_fail_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tasks,cljs.core.assoc,id,(function (){var G__42241 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,w,kvs);
return (intemporal.store.internal.validate_task.cljs$core$IFn$_invoke$arity$1 ? intemporal.store.internal.validate_task.cljs$core$IFn$_invoke$arity$1(G__42241) : intemporal.store.internal.validate_task.call(null, G__42241));
})());
} else {
return null;
}
};
var G__42289 = function (this$,id,var_args){
var kvs = null;
if (arguments.length > 2) {
var G__42290__i = 0, G__42290__a = new Array(arguments.length -  2);
while (G__42290__i < G__42290__a.length) {G__42290__a[G__42290__i] = arguments[G__42290__i + 2]; ++G__42290__i;}
  kvs = new cljs.core.IndexedSeq(G__42290__a,0,null);
} 
return G__42289__delegate.call(this,this$,id,kvs);};
G__42289.cljs$lang$maxFixedArity = 2;
G__42289.cljs$lang$applyTo = (function (arglist__42291){
var this$ = cljs.core.first(arglist__42291);
arglist__42291 = cljs.core.next(arglist__42291);
var id = cljs.core.first(arglist__42291);
var kvs = cljs.core.rest(arglist__42291);
return G__42289__delegate(this$,id,kvs);
});
G__42289.cljs$core$IFn$_invoke$arity$variadic = G__42289__delegate;
return G__42289;
})()
;
if(cljs.core.truth_(file)){
cljs.core.add_watch(tasks,new cljs.core.Keyword(null,"persist","persist",815289548),persist_BANG_);

cljs.core.add_watch(history__$1,new cljs.core.Keyword(null,"persist","persist",815289548),persist_BANG_);

cljs.core.add_watch(counter,new cljs.core.Keyword(null,"persist","persist",815289548),persist_BANG_);

cljs.core.add_watch(pcounter,new cljs.core.Keyword(null,"persist","persist",815289548),persist_BANG_);

cljs.core.add_watch(ecounter,new cljs.core.Keyword(null,"persist","persist",815289548),persist_BANG_);

if(intemporal.store.edn_exists_QMARK_(file)){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "intemporal.store";
var __id = null;
var __level = new cljs.core.Keyword(null,"info","info",-317069002);
if(cljs.core.truth_((function (){var sf = taoensso.telemere.impl._STAR_rt_sig_filter_STAR_;
if(cljs.core.truth_(sf)){
return (sf.cljs$core$IFn$_invoke$arity$4 ? sf.cljs$core$IFn$_invoke$arity$4(__kind,__ns,__id,__level) : sf.call(null, __kind,__ns,__id,__level));
} else {
return true;
}
})())){
var __inst = (new Date());
var __thread = null;
var __root0 = taoensso.telemere.impl._STAR_trace_root_STAR_;
var __otel_context1 = null;
var __uid = null;
var __root1 = __root0;
var __run_result = null;
var signal__40530__auto__ = (new cljs.core.Delay((function (){

var signal__40521__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"intemporal.store",new cljs.core.Keyword(null,"line","line",212345235),140,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/mping/Devel/workspace/exoscale/intemporal/src/intemporal/store.cljc"], null),__ns,140,10,"file:/home/mping/Devel/workspace/exoscale/intemporal/src/intemporal/store.cljc",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,(new cljs.core.Delay((function (){
return taoensso.telemere.impl.signal_msg(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reading store file",file], null));
}),null)),null,null,null,null,null,null,null,null));
var temp__5802__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5802__auto__)){
var sig_middleware__40522__auto__ = temp__5802__auto__;
return (sig_middleware__40522__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__40522__auto__.cljs$core$IFn$_invoke$arity$1(signal__40521__auto__) : sig_middleware__40522__auto__.call(null, signal__40521__auto__));
} else {
return signal__40521__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__ns,__kind,__id,__level,signal__40530__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__40530__auto__) : __run_result.call(null, signal__40530__auto__));
} else {
return true;
}
} else {
return null;
}
})();

var data_42292 = intemporal.store.read_edn(file,readers);
cljs.core.reset_BANG_(tasks,(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(data_42292);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

cljs.core.reset_BANG_(history__$1,(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(data_42292);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

cljs.core.reset_BANG_(counter,(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(data_42292);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})());

cljs.core.reset_BANG_(pcounter,(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"pcounter","pcounter",1600092382).cljs$core$IFn$_invoke$arity$1(data_42292);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})());

cljs.core.reset_BANG_(ecounter,(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"ecounter","ecounter",1186375139).cljs$core$IFn$_invoke$arity$1(data_42292);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})());
} else {
}
} else {
}

return (new intemporal.store.t_intemporal$store42242(maybe_fail_BANG_,owner,pcounter,validation_fail_rate,vars,ecounter,update_task,file,readers,history__$1,p__42239,map__42240__$1,tasks,tcounter,counter,find_task,persist_BANG_,cljs.core.PersistentArrayMap.EMPTY));
}));

(intemporal.store.make_store.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=intemporal.store.js.map
