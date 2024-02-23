goog.provide('intemporal.store');

/**
 * @interface
 */
intemporal.store.TaskStore = function(){};

var intemporal$store$TaskStore$list_tasks$dyn_32101 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.list_tasks[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (intemporal.store.list_tasks["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
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
return intemporal$store$TaskStore$list_tasks$dyn_32101(this$);
}
});

var intemporal$store$TaskStore$apply_fn_event$dyn_32102 = (function (this$,id,details){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.apply_fn_event[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,details) : m__5394__auto__.call(null,this$,id,details));
} else {
var m__5392__auto__ = (intemporal.store.apply_fn_event["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,details) : m__5392__auto__.call(null,this$,id,details));
} else {
throw cljs.core.missing_protocol("TaskStore.apply-fn-event",this$);
}
}
});
/**
 * Transitions the task. The task should be dequeued beforehand. Returns the event.
 *  `details` is one of:
 *  `{:sym 'ns/f :args [1]}`
 *  `{:sym 'ns/f :result :ok}`
 *  `{:sym 'ns/f :error <some error>}`
 *  
 */
intemporal.store.apply_fn_event = (function intemporal$store$apply_fn_event(this$,id,details){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$TaskStore$apply_fn_event$arity$3 == null)))))){
return this$.intemporal$store$TaskStore$apply_fn_event$arity$3(this$,id,details);
} else {
return intemporal$store$TaskStore$apply_fn_event$dyn_32102(this$,id,details);
}
});

var intemporal$store$TaskStore$watch_tasks$dyn_32103 = (function (this$,predicate,callback){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.watch_tasks[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,predicate,callback) : m__5394__auto__.call(null,this$,predicate,callback));
} else {
var m__5392__auto__ = (intemporal.store.watch_tasks["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,predicate,callback) : m__5392__auto__.call(null,this$,predicate,callback));
} else {
throw cljs.core.missing_protocol("TaskStore.watch-tasks",this$);
}
}
});
/**
 * Observes state changes, calling `callback` for any task that matches `predicate`. Returns a function to cancel the observation.
 */
intemporal.store.watch_tasks = (function intemporal$store$watch_tasks(this$,predicate,callback){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$TaskStore$watch_tasks$arity$3 == null)))))){
return this$.intemporal$store$TaskStore$watch_tasks$arity$3(this$,predicate,callback);
} else {
return intemporal$store$TaskStore$watch_tasks$dyn_32103(this$,predicate,callback);
}
});

var intemporal$store$TaskStore$await_task$dyn_32104 = (function() {
var G__32105 = null;
var G__32105__2 = (function (this$,id){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.await_task[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5394__auto__.call(null,this$,id));
} else {
var m__5392__auto__ = (intemporal.store.await_task["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5392__auto__.call(null,this$,id));
} else {
throw cljs.core.missing_protocol("TaskStore.await-task",this$);
}
}
});
var G__32105__3 = (function (this$,id,opts){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.await_task[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,opts) : m__5394__auto__.call(null,this$,id,opts));
} else {
var m__5392__auto__ = (intemporal.store.await_task["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,opts) : m__5392__auto__.call(null,this$,id,opts));
} else {
throw cljs.core.missing_protocol("TaskStore.await-task",this$);
}
}
});
G__32105 = function(this$,id,opts){
switch(arguments.length){
case 2:
return G__32105__2.call(this,this$,id);
case 3:
return G__32105__3.call(this,this$,id,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32105.cljs$core$IFn$_invoke$arity$2 = G__32105__2;
G__32105.cljs$core$IFn$_invoke$arity$3 = G__32105__3;
return G__32105;
})()
;
/**
 * Waits for workflow to finish. Returns a deref'able value. Can throw.
 *  Opts include
 *  - `timeout-ms`: timeout for task await
 */
intemporal.store.await_task = (function intemporal$store$await_task(var_args){
var G__32073 = arguments.length;
switch (G__32073) {
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
return intemporal$store$TaskStore$await_task$dyn_32104(this$,id);
}
}));

(intemporal.store.await_task.cljs$core$IFn$_invoke$arity$3 = (function (this$,id,opts){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$TaskStore$await_task$arity$3 == null)))))){
return this$.intemporal$store$TaskStore$await_task$arity$3(this$,id,opts);
} else {
return intemporal$store$TaskStore$await_task$dyn_32104(this$,id,opts);
}
}));

(intemporal.store.await_task.cljs$lang$maxFixedArity = 3);


var intemporal$store$TaskStore$matching_task$dyn_32107 = (function (this$,task){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.matching_task[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,task) : m__5394__auto__.call(null,this$,task));
} else {
var m__5392__auto__ = (intemporal.store.matching_task["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,task) : m__5392__auto__.call(null,this$,task));
} else {
throw cljs.core.missing_protocol("TaskStore.matching-task",this$);
}
}
});
/**
 * Finds the task on the db that matches `task`, comparing the following attributes: `:ref :root :type :sym :args`
 */
intemporal.store.matching_task = (function intemporal$store$matching_task(this$,task){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$TaskStore$matching_task$arity$2 == null)))))){
return this$.intemporal$store$TaskStore$matching_task$arity$2(this$,task);
} else {
return intemporal$store$TaskStore$matching_task$dyn_32107(this$,task);
}
});

var intemporal$store$TaskStore$reenqueue_pending_tasks$dyn_32108 = (function (this$,callback){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.reenqueue_pending_tasks[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,callback) : m__5394__auto__.call(null,this$,callback));
} else {
var m__5392__auto__ = (intemporal.store.reenqueue_pending_tasks["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,callback) : m__5392__auto__.call(null,this$,callback));
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
return intemporal$store$TaskStore$reenqueue_pending_tasks$dyn_32108(this$,callback);
}
});

var intemporal$store$TaskStore$enqueue_task$dyn_32109 = (function (this$,task){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.enqueue_task[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,task) : m__5394__auto__.call(null,this$,task));
} else {
var m__5392__auto__ = (intemporal.store.enqueue_task["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,task) : m__5392__auto__.call(null,this$,task));
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
return intemporal$store$TaskStore$enqueue_task$dyn_32109(this$,task);
}
});

var intemporal$store$TaskStore$dequeue_task$dyn_32110 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.dequeue_task[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (intemporal.store.dequeue_task["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("TaskStore.dequeue-task",this$);
}
}
});
/**
 * Atomically dequeues some workflow, protocol or activity task execution. If the task was deserialized, its `fvar` attribute must be a `fn`
 */
intemporal.store.dequeue_task = (function intemporal$store$dequeue_task(this$){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$TaskStore$dequeue_task$arity$1 == null)))))){
return this$.intemporal$store$TaskStore$dequeue_task$arity$1(this$);
} else {
return intemporal$store$TaskStore$dequeue_task$dyn_32110(this$);
}
});


/**
 * @interface
 */
intemporal.store.HistoryStore = function(){};

var intemporal$store$HistoryStore$list_events$dyn_32111 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.list_events[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (intemporal.store.list_events["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
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
return intemporal$store$HistoryStore$list_events$dyn_32111(this$);
}
});

var intemporal$store$HistoryStore$save_event$dyn_32112 = (function (this$,id,event){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.save_event[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,event) : m__5394__auto__.call(null,this$,id,event));
} else {
var m__5392__auto__ = (intemporal.store.save_event["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,event) : m__5392__auto__.call(null,this$,id,event));
} else {
throw cljs.core.missing_protocol("HistoryStore.save-event",this$);
}
}
});
/**
 * Saves the event for the given workflow id. Returns the saved event
 */
intemporal.store.save_event = (function intemporal$store$save_event(this$,id,event){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$HistoryStore$save_event$arity$3 == null)))))){
return this$.intemporal$store$HistoryStore$save_event$arity$3(this$,id,event);
} else {
return intemporal$store$HistoryStore$save_event$dyn_32112(this$,id,event);
}
});

var intemporal$store$HistoryStore$all_events$dyn_32113 = (function() {
var G__32114 = null;
var G__32114__2 = (function (this$,id){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.all_events[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5394__auto__.call(null,this$,id));
} else {
var m__5392__auto__ = (intemporal.store.all_events["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5392__auto__.call(null,this$,id));
} else {
throw cljs.core.missing_protocol("HistoryStore.all-events",this$);
}
}
});
var G__32114__3 = (function (this$,id,last_event_id){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.all_events[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,last_event_id) : m__5394__auto__.call(null,this$,id,last_event_id));
} else {
var m__5392__auto__ = (intemporal.store.all_events["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,last_event_id) : m__5392__auto__.call(null,this$,id,last_event_id));
} else {
throw cljs.core.missing_protocol("HistoryStore.all-events",this$);
}
}
});
G__32114 = function(this$,id,last_event_id){
switch(arguments.length){
case 2:
return G__32114__2.call(this,this$,id);
case 3:
return G__32114__3.call(this,this$,id,last_event_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32114.cljs$core$IFn$_invoke$arity$2 = G__32114__2;
G__32114.cljs$core$IFn$_invoke$arity$3 = G__32114__3;
return G__32114;
})()
;
/**
 * Returns all the eventsf for a given workflow id, optionall after `last-event-id`
 */
intemporal.store.all_events = (function intemporal$store$all_events(var_args){
var G__32075 = arguments.length;
switch (G__32075) {
case 2:
return intemporal.store.all_events.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return intemporal.store.all_events.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(intemporal.store.all_events.cljs$core$IFn$_invoke$arity$2 = (function (this$,id){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$HistoryStore$all_events$arity$2 == null)))))){
return this$.intemporal$store$HistoryStore$all_events$arity$2(this$,id);
} else {
return intemporal$store$HistoryStore$all_events$dyn_32113(this$,id);
}
}));

(intemporal.store.all_events.cljs$core$IFn$_invoke$arity$3 = (function (this$,id,last_event_id){
if((((!((this$ == null)))) && ((!((this$.intemporal$store$HistoryStore$all_events$arity$3 == null)))))){
return this$.intemporal$store$HistoryStore$all_events$arity$3(this$,id,last_event_id);
} else {
return intemporal$store$HistoryStore$all_events$dyn_32113(this$,id,last_event_id);
}
}));

(intemporal.store.all_events.cljs$lang$maxFixedArity = 3);



/**
 * @interface
 */
intemporal.store.InternalVarStore = function(){};

var intemporal$store$InternalVarStore$register$dyn_32116 = (function (this$,sym,var$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.register[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,sym,var$) : m__5394__auto__.call(null,this$,sym,var$));
} else {
var m__5392__auto__ = (intemporal.store.register["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,sym,var$) : m__5392__auto__.call(null,this$,sym,var$));
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
return intemporal$store$InternalVarStore$register$dyn_32116(this$,sym,var$);
}
});

var intemporal$store$InternalVarStore$lookup$dyn_32117 = (function (this$,sym){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (intemporal.store.lookup[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,sym) : m__5394__auto__.call(null,this$,sym));
} else {
var m__5392__auto__ = (intemporal.store.lookup["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,sym) : m__5392__auto__.call(null,this$,sym));
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
return intemporal$store$InternalVarStore$lookup$dyn_32117(this$,sym);
}
});

intemporal.store.now = (function intemporal$store$now(){
return (new Date()).getTime();
});
intemporal.store.sym__GT_var = (function intemporal$store$sym__GT_var(store,p__32076){
var map__32077 = p__32076;
var map__32077__$1 = cljs.core.__destructure_map(map__32077);
var task = map__32077__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32077__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var fvar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32077__$1,new cljs.core.Keyword(null,"fvar","fvar",1802913046));
var or__5045__auto__ = fvar;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return intemporal.store.lookup(store,sym);
}
});
intemporal.store.read_edn = (function intemporal$store$read_edn(file,readers){
var f = window.localStorage.getItem(file);
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),readers], null),f);
});
intemporal.store.write_edn = (function intemporal$store$write_edn(file,val){
return window.localStorage.setItem(file,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0)));
});
intemporal.store.edn_exists_QMARK_ = (function intemporal$store$edn_exists_QMARK_(file){
return cljs.core.seq(window.localStorage.getItem(file));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
intemporal.store.ResultOK = (function (ok){
this.ok = ok;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(intemporal.store.ResultOK.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.ok;
}));

(intemporal.store.ResultOK.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ok","ok",-1686650533,null)], null);
}));

(intemporal.store.ResultOK.cljs$lang$type = true);

(intemporal.store.ResultOK.cljs$lang$ctorStr = "intemporal.store/ResultOK");

(intemporal.store.ResultOK.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"intemporal.store/ResultOK");
}));

/**
 * Positional factory function for intemporal.store/ResultOK.
 */
intemporal.store.__GT_ResultOK = (function intemporal$store$__GT_ResultOK(ok){
return (new intemporal.store.ResultOK(ok));
});


/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
intemporal.store.ResultError = (function (err){
this.err = err;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(intemporal.store.ResultError.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
throw self__.err;
}));

(intemporal.store.ResultError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"err","err",-448925678,null)], null);
}));

(intemporal.store.ResultError.cljs$lang$type = true);

(intemporal.store.ResultError.cljs$lang$ctorStr = "intemporal.store/ResultError");

(intemporal.store.ResultError.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"intemporal.store/ResultError");
}));

/**
 * Positional factory function for intemporal.store/ResultError.
 */
intemporal.store.__GT_ResultError = (function intemporal$store$__GT_ResultError(err){
return (new intemporal.store.ResultError(err));
});

intemporal.store.make_memstore = (function intemporal$store$make_memstore(var_args){
var G__32085 = arguments.length;
switch (G__32085) {
case 0:
return intemporal.store.make_memstore.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return intemporal.store.make_memstore.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(intemporal.store.make_memstore.cljs$core$IFn$_invoke$arity$0 = (function (){
return intemporal.store.make_memstore.cljs$core$IFn$_invoke$arity$2(null,null);
}));

(intemporal.store.make_memstore.cljs$core$IFn$_invoke$arity$2 = (function (file,readers){
var tasks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var history__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var pcounter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var ecounter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var persist_BANG_ = (function (_,___$1,___$2,___$3){
if(cljs.core.truth_(file)){
try{return intemporal.store.write_edn(file,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.deref(tasks),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.deref(history__$1),new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.deref(counter),new cljs.core.Keyword(null,"pcounter","pcounter",1600092382),cljs.core.deref(pcounter),new cljs.core.Keyword(null,"ecounter","ecounter",1186375139),cljs.core.deref(ecounter)], null));
}catch (e32086){if((e32086 instanceof Error)){
var e = e32086;
return console.error(e);
} else {
throw e32086;

}
}} else {
return null;
}
});
var find_task = (function (this$,id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tasks),id);
});
var update_task = (function() { 
var G__32124__delegate = function (this$,id,kvs){
var temp__5804__auto__ = find_task(this$,id);
if(cljs.core.truth_(temp__5804__auto__)){
var w = temp__5804__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tasks,cljs.core.assoc,id,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,w,kvs));
} else {
return null;
}
};
var G__32124 = function (this$,id,var_args){
var kvs = null;
if (arguments.length > 2) {
var G__32125__i = 0, G__32125__a = new Array(arguments.length -  2);
while (G__32125__i < G__32125__a.length) {G__32125__a[G__32125__i] = arguments[G__32125__i + 2]; ++G__32125__i;}
  kvs = new cljs.core.IndexedSeq(G__32125__a,0,null);
} 
return G__32124__delegate.call(this,this$,id,kvs);};
G__32124.cljs$lang$maxFixedArity = 2;
G__32124.cljs$lang$applyTo = (function (arglist__32126){
var this$ = cljs.core.first(arglist__32126);
arglist__32126 = cljs.core.next(arglist__32126);
var id = cljs.core.first(arglist__32126);
var kvs = cljs.core.rest(arglist__32126);
return G__32124__delegate(this$,id,kvs);
});
G__32124.cljs$core$IFn$_invoke$arity$variadic = G__32124__delegate;
return G__32124;
})()
;
if(cljs.core.truth_(file)){
cljs.core.add_watch(tasks,new cljs.core.Keyword(null,"persist","persist",815289548),persist_BANG_);

cljs.core.add_watch(history__$1,new cljs.core.Keyword(null,"persist","persist",815289548),persist_BANG_);

cljs.core.add_watch(counter,new cljs.core.Keyword(null,"persist","persist",815289548),persist_BANG_);

cljs.core.add_watch(pcounter,new cljs.core.Keyword(null,"persist","persist",815289548),persist_BANG_);

cljs.core.add_watch(ecounter,new cljs.core.Keyword(null,"persist","persist",815289548),persist_BANG_);

if(intemporal.store.edn_exists_QMARK_(file)){
var data_32127 = intemporal.store.read_edn(file,readers);
cljs.core.reset_BANG_(tasks,new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(data_32127));

cljs.core.reset_BANG_(history__$1,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(data_32127));

cljs.core.reset_BANG_(counter,new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(data_32127));

cljs.core.reset_BANG_(pcounter,new cljs.core.Keyword(null,"pcounter","pcounter",1600092382).cljs$core$IFn$_invoke$arity$1(data_32127));

cljs.core.reset_BANG_(ecounter,new cljs.core.Keyword(null,"ecounter","ecounter",1186375139).cljs$core$IFn$_invoke$arity$1(data_32127));
} else {
}
} else {
}

if((typeof intemporal !== 'undefined') && (typeof intemporal.store !== 'undefined') && (typeof intemporal.store.t_intemporal$store32087 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {intemporal.store.InternalVarStore}
 * @implements {intemporal.store.TaskStore}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {intemporal.store.HistoryStore}
 * @implements {cljs.core.IWithMeta}
*/
intemporal.store.t_intemporal$store32087 = (function (pcounter,vars,ecounter,update_task,file,readers,history,tasks,counter,find_task,persist_BANG_,meta32088){
this.pcounter = pcounter;
this.vars = vars;
this.ecounter = ecounter;
this.update_task = update_task;
this.file = file;
this.readers = readers;
this.history = history;
this.tasks = tasks;
this.counter = counter;
this.find_task = find_task;
this.persist_BANG_ = persist_BANG_;
this.meta32088 = meta32088;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(intemporal.store.t_intemporal$store32087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32089,meta32088__$1){
var self__ = this;
var _32089__$1 = this;
return (new intemporal.store.t_intemporal$store32087(self__.pcounter,self__.vars,self__.ecounter,self__.update_task,self__.file,self__.readers,self__.history,self__.tasks,self__.counter,self__.find_task,self__.persist_BANG_,meta32088__$1));
}));

(intemporal.store.t_intemporal$store32087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32089){
var self__ = this;
var _32089__$1 = this;
return self__.meta32088;
}));

(intemporal.store.t_intemporal$store32087.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("intemporal.store","task-store","intemporal.store/task-store",1271552970),self__.tasks,new cljs.core.Keyword("intemporal.store","history-store","intemporal.store/history-store",-916561061),self__.history], null);
}));

(intemporal.store.t_intemporal$store32087.prototype.intemporal$store$InternalVarStore$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.store.t_intemporal$store32087.prototype.intemporal$store$InternalVarStore$register$arity$3 = (function (this$,sym,var$){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.vars,cljs.core.assoc,sym,var$);
}));

(intemporal.store.t_intemporal$store32087.prototype.intemporal$store$InternalVarStore$lookup$arity$2 = (function (this$,sym){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.vars),sym);
}));

(intemporal.store.t_intemporal$store32087.prototype.intemporal$store$HistoryStore$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.store.t_intemporal$store32087.prototype.intemporal$store$HistoryStore$list_events$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(cljs.core.deref(self__.history)));
}));

(intemporal.store.t_intemporal$store32087.prototype.intemporal$store$HistoryStore$save_event$arity$3 = (function (this$,id,event){
var self__ = this;
var this$__$1 = this;
var evt_PLUS_id = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(event,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.counter,cljs.core.inc));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.history,(function (v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,id);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),evt_PLUS_id));
}));

return evt_PLUS_id;
}));

(intemporal.store.t_intemporal$store32087.prototype.intemporal$store$HistoryStore$all_events$arity$2 = (function (this$,id){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.history),id);
}));

(intemporal.store.t_intemporal$store32087.prototype.intemporal$store$HistoryStore$all_events$arity$3 = (function (this$,id,last_event_id){
var self__ = this;
var this$__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.history),id);
if(cljs.core.truth_(temp__5804__auto__)){
var evts = temp__5804__auto__;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32078_SHARP_){
return (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__32078_SHARP_) > last_event_id);
}),evts);
} else {
return null;
}
}));

(intemporal.store.t_intemporal$store32087.prototype.intemporal$store$TaskStore$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.store.t_intemporal$store32087.prototype.intemporal$store$TaskStore$list_tasks$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.vals(cljs.core.deref(self__.tasks));
}));

(intemporal.store.t_intemporal$store32087.prototype.intemporal$store$TaskStore$apply_fn_event$arity$3 = (function (this$,id,p__32090){
var self__ = this;
var map__32091 = p__32090;
var map__32091__$1 = cljs.core.__destructure_map(map__32091);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32091__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32091__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32091__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32091__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32091__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32091__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32091__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var this$__$1 = this;
if((!((args == null)))){
var evt = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
(self__.update_task.cljs$core$IFn$_invoke$arity$4 ? self__.update_task.cljs$core$IFn$_invoke$arity$4(this$__$1,id,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"pending","pending",-220036727)) : self__.update_task.call(null,this$__$1,id,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"pending","pending",-220036727)));

return this$__$1.intemporal$store$HistoryStore$save_event$arity$3(null,id,evt);
} else {
if((!((error == null)))){
var evt = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
(self__.update_task.cljs$core$IFn$_invoke$arity$6 ? self__.update_task.cljs$core$IFn$_invoke$arity$6(this$__$1,id,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"result","result",1415092211),error) : self__.update_task.call(null,this$__$1,id,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"result","result",1415092211),error));

return this$__$1.intemporal$store$HistoryStore$save_event$arity$3(null,id,evt);
} else {
var evt = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"result","result",1415092211),result], null);
(self__.update_task.cljs$core$IFn$_invoke$arity$6 ? self__.update_task.cljs$core$IFn$_invoke$arity$6(this$__$1,id,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"result","result",1415092211),result) : self__.update_task.call(null,this$__$1,id,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"result","result",1415092211),result));

return this$__$1.intemporal$store$HistoryStore$save_event$arity$3(null,id,evt);

}
}
}));

(intemporal.store.t_intemporal$store32087.prototype.intemporal$store$TaskStore$matching_task$arity$2 = (function (this$,task){
var self__ = this;
var this$__$1 = this;
var ks = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"args","args",1315556576)], null);
var match_QMARK_ = cljs.core.select_keys(task,ks);
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32079_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.select_keys(p1__32079_SHARP_,ks),match_QMARK_);
}),cljs.core.vals(cljs.core.deref(self__.tasks))));
}));

(intemporal.store.t_intemporal$store32087.prototype.intemporal$store$TaskStore$watch_tasks$arity$3 = (function (this$,predicate,f){
var self__ = this;
var this$__$1 = this;
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["watcher-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.pcounter,cljs.core.inc))].join(''));
var watchfn = (function (k__$1,atm,old,new$){
var matches = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(predicate,cljs.core.vals(new$));
var changeset = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32080_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__32080_SHARP_)),p1__32080_SHARP_);
}),matches);
if(cljs.core.seq(changeset)){
return cljs.core.run_BANG_((function (p1__32081_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__32081_SHARP_) : f.call(null,p1__32081_SHARP_));
}),changeset);
} else {
return null;
}
});
cljs.core.add_watch(self__.tasks,k,watchfn);

cljs.core.run_BANG_(f,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(predicate,cljs.core.vals(cljs.core.deref(self__.tasks))));

return (function (){
return cljs.core.remove_watch(self__.tasks,k);
});
}));

(intemporal.store.t_intemporal$store32087.prototype.intemporal$store$TaskStore$await_task$arity$2 = (function (this$,id){
var self__ = this;
var this$__$1 = this;
return this$__$1.intemporal$store$TaskStore$await_task$arity$3(null,id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(999999999)], null));
}));

(intemporal.store.t_intemporal$store32087.prototype.intemporal$store$TaskStore$await_task$arity$3 = (function (this$,id,p__32092){
var self__ = this;
var map__32093 = p__32092;
var map__32093__$1 = cljs.core.__destructure_map(map__32093);
var opts = map__32093__$1;
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32093__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var this$__$1 = this;
var task = (self__.find_task.cljs$core$IFn$_invoke$arity$2 ? self__.find_task.cljs$core$IFn$_invoke$arity$2(this$__$1,id) : self__.find_task.call(null,this$__$1,id));
var deferred = promesa.core.deferred();
var completed_QMARK_ = (function (p__32094){
var map__32095 = p__32094;
var map__32095__$1 = cljs.core.__destructure_map(map__32095);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32095__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success","success",1890645906),state)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure","failure",720415879),state)));
});
var wrap_result = (function (p__32096){
var map__32097 = p__32096;
var map__32097__$1 = cljs.core.__destructure_map(map__32097);
var task__$1 = map__32097__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32097__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32097__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success","success",1890645906),state)){
return intemporal.store.__GT_ResultOK(result);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure","failure",720415879),state)){
return intemporal.store.__GT_ResultError(result);
} else {
return intemporal.store.__GT_ResultError(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown state",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),task__$1], null)));

}
}
});
if(completed_QMARK_(task)){
return wrap_result(task);
} else {
var pred = (function (p1__32082_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__32082_SHARP_),id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(p1__32082_SHARP_))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(p1__32082_SHARP_))))));
});
this$__$1.intemporal$store$TaskStore$watch_tasks$arity$3(null,pred,(function (task__$1){
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(deferred,task__$1);
}));

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.timeout.cljs$core$IFn$_invoke$arity$3(deferred,timeout_ms,new cljs.core.Keyword("intemporal.store","timeout","intemporal.store/timeout",-112290028)),(function (resolved){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("intemporal.store","timeout","intemporal.store/timeout",-112290028),resolved)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Timeout waiting for task to be completed",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),task], null));
} else {
return wrap_result(resolved);
}
})),(function (wrapped){
return cljs.core.deref(wrapped);
}));
}
}));

(intemporal.store.t_intemporal$store32087.prototype.intemporal$store$TaskStore$reenqueue_pending_tasks$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.tasks,cljs.core.update_vals,(function (p__32098){
var map__32099 = p__32098;
var map__32099__$1 = cljs.core.__destructure_map(map__32099);
var task = map__32099__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32099__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var G__32100 = task;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending","pending",-220036727),state)){

(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(task) : f.call(null,task));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(task,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"new","new",-2085437848));
} else {
return G__32100;
}
}));
}));

(intemporal.store.t_intemporal$store32087.prototype.intemporal$store$TaskStore$enqueue_task$arity$2 = (function (this$,task){
var self__ = this;
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.tasks,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(task),task);

this$__$1.intemporal$store$InternalVarStore$register$arity$3(null,new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword(null,"fvar","fvar",1802913046).cljs$core$IFn$_invoke$arity$1(task));

return task;
}));

(intemporal.store.t_intemporal$store32087.prototype.intemporal$store$TaskStore$dequeue_task$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var first_new = (function (v){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32083_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(p1__32083_SHARP_));
}),cljs.core.vals(v)));
});
var found_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$2(self__.tasks,(function (v){
var found = first_new(v);
if(cljs.core.truth_(found)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(found),cljs.core.reset_BANG_(found_QMARK_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(found,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fvar","fvar",1802913046),intemporal.store.sym__GT_var(this$__$1,found)], 0))));
} else {
return v;
}
}));

return cljs.core.deref(found_QMARK_);
}));

(intemporal.store.t_intemporal$store32087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pcounter","pcounter",-1054343387,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"ecounter","ecounter",-1468060630,null),new cljs.core.Symbol(null,"update-task","update-task",1145318256,null),new cljs.core.Symbol(null,"file","file",370885649,null),new cljs.core.Symbol(null,"readers","readers",-477731503,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"tasks","tasks",-113837353,null),new cljs.core.Symbol(null,"counter","counter",-1850427592,null),new cljs.core.Symbol(null,"find-task","find-task",835161369,null),new cljs.core.Symbol(null,"persist!","persist!",-1958402018,null),new cljs.core.Symbol(null,"meta32088","meta32088",-60379999,null)], null);
}));

(intemporal.store.t_intemporal$store32087.cljs$lang$type = true);

(intemporal.store.t_intemporal$store32087.cljs$lang$ctorStr = "intemporal.store/t_intemporal$store32087");

(intemporal.store.t_intemporal$store32087.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"intemporal.store/t_intemporal$store32087");
}));

/**
 * Positional factory function for intemporal.store/t_intemporal$store32087.
 */
intemporal.store.__GT_t_intemporal$store32087 = (function intemporal$store$__GT_t_intemporal$store32087(pcounter__$1,vars__$1,ecounter__$1,update_task__$1,file__$1,readers__$1,history__$2,tasks__$1,counter__$1,find_task__$1,persist_BANG___$1,meta32088){
return (new intemporal.store.t_intemporal$store32087(pcounter__$1,vars__$1,ecounter__$1,update_task__$1,file__$1,readers__$1,history__$2,tasks__$1,counter__$1,find_task__$1,persist_BANG___$1,meta32088));
});

}

return (new intemporal.store.t_intemporal$store32087(pcounter,vars,ecounter,update_task,file,readers,history__$1,tasks,counter,find_task,persist_BANG_,cljs.core.PersistentArrayMap.EMPTY));
}));

(intemporal.store.make_memstore.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=intemporal.store.js.map
