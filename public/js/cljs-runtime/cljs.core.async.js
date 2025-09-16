goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31475 = (function (f,blockable,meta31476){
this.f = f;
this.blockable = blockable;
this.meta31476 = meta31476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31477,meta31476__$1){
var self__ = this;
var _31477__$1 = this;
return (new cljs.core.async.t_cljs$core$async31475(self__.f,self__.blockable,meta31476__$1));
}));

(cljs.core.async.t_cljs$core$async31475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31477){
var self__ = this;
var _31477__$1 = this;
return self__.meta31476;
}));

(cljs.core.async.t_cljs$core$async31475.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31475.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31475.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31475.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31476","meta31476",483724779,null)], null);
}));

(cljs.core.async.t_cljs$core$async31475.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31475");

(cljs.core.async.t_cljs$core$async31475.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31475");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31475.
 */
cljs.core.async.__GT_t_cljs$core$async31475 = (function cljs$core$async$__GT_t_cljs$core$async31475(f,blockable,meta31476){
return (new cljs.core.async.t_cljs$core$async31475(f,blockable,meta31476));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31470 = arguments.length;
switch (G__31470) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async31475(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31513 = arguments.length;
switch (G__31513) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31525 = arguments.length;
switch (G__31525) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31540 = arguments.length;
switch (G__31540) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35342 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35342) : fn1.call(null,val_35342));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35342) : fn1.call(null,val_35342));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31556 = arguments.length;
switch (G__31556) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5616__auto___35351 = n;
var x_35358 = (0);
while(true){
if((x_35358 < n__5616__auto___35351)){
(a[x_35358] = x_35358);

var G__35359 = (x_35358 + (1));
x_35358 = G__35359;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31578 = (function (flag,meta31579){
this.flag = flag;
this.meta31579 = meta31579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31580,meta31579__$1){
var self__ = this;
var _31580__$1 = this;
return (new cljs.core.async.t_cljs$core$async31578(self__.flag,meta31579__$1));
}));

(cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31580){
var self__ = this;
var _31580__$1 = this;
return self__.meta31579;
}));

(cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31579","meta31579",1370404953,null)], null);
}));

(cljs.core.async.t_cljs$core$async31578.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31578");

(cljs.core.async.t_cljs$core$async31578.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31578");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31578.
 */
cljs.core.async.__GT_t_cljs$core$async31578 = (function cljs$core$async$__GT_t_cljs$core$async31578(flag,meta31579){
return (new cljs.core.async.t_cljs$core$async31578(flag,meta31579));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31578(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31604 = (function (flag,cb,meta31605){
this.flag = flag;
this.cb = cb;
this.meta31605 = meta31605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31606,meta31605__$1){
var self__ = this;
var _31606__$1 = this;
return (new cljs.core.async.t_cljs$core$async31604(self__.flag,self__.cb,meta31605__$1));
}));

(cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31606){
var self__ = this;
var _31606__$1 = this;
return self__.meta31605;
}));

(cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31605","meta31605",-1331199561,null)], null);
}));

(cljs.core.async.t_cljs$core$async31604.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31604");

(cljs.core.async.t_cljs$core$async31604.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31604");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31604.
 */
cljs.core.async.__GT_t_cljs$core$async31604 = (function cljs$core$async$__GT_t_cljs$core$async31604(flag,cb,meta31605){
return (new cljs.core.async.t_cljs$core$async31604(flag,cb,meta31605));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31604(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_35363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_35363)){
if((!(((port_35363.cljs$core$IFn$_invoke$arity$1 ? port_35363.cljs$core$IFn$_invoke$arity$1((1)) : port_35363.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__35364 = (i + (1));
i = G__35364;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__31612_SHARP_){
var G__31625 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31612_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31625) : fret.call(null,G__31625));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__31613_SHARP_){
var G__31627 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31613_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31627) : fret.call(null,G__31627));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35365 = (i + (1));
i = G__35365;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5023__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5023__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35367 = arguments.length;
var i__5750__auto___35368 = (0);
while(true){
if((i__5750__auto___35368 < len__5749__auto___35367)){
args__5755__auto__.push((arguments[i__5750__auto___35368]));

var G__35369 = (i__5750__auto___35368 + (1));
i__5750__auto___35368 = G__35369;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31655){
var map__31656 = p__31655;
var map__31656__$1 = cljs.core.__destructure_map(map__31656);
var opts = map__31656__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31643){
var G__31645 = cljs.core.first(seq31643);
var seq31643__$1 = cljs.core.next(seq31643);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31645,seq31643__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31676 = arguments.length;
switch (G__31676) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31339__auto___35371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = (function (state_31750){
var state_val_31751 = (state_31750[(1)]);
if((state_val_31751 === (7))){
var inst_31741 = (state_31750[(2)]);
var state_31750__$1 = state_31750;
var statearr_31760_35372 = state_31750__$1;
(statearr_31760_35372[(2)] = inst_31741);

(statearr_31760_35372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (1))){
var state_31750__$1 = state_31750;
var statearr_31766_35373 = state_31750__$1;
(statearr_31766_35373[(2)] = null);

(statearr_31766_35373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (4))){
var inst_31711 = (state_31750[(7)]);
var inst_31711__$1 = (state_31750[(2)]);
var inst_31720 = (inst_31711__$1 == null);
var state_31750__$1 = (function (){var statearr_31768 = state_31750;
(statearr_31768[(7)] = inst_31711__$1);

return statearr_31768;
})();
if(cljs.core.truth_(inst_31720)){
var statearr_31769_35374 = state_31750__$1;
(statearr_31769_35374[(1)] = (5));

} else {
var statearr_31770_35375 = state_31750__$1;
(statearr_31770_35375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (13))){
var state_31750__$1 = state_31750;
var statearr_31772_35376 = state_31750__$1;
(statearr_31772_35376[(2)] = null);

(statearr_31772_35376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (6))){
var inst_31711 = (state_31750[(7)]);
var state_31750__$1 = state_31750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31750__$1,(11),to,inst_31711);
} else {
if((state_val_31751 === (3))){
var inst_31744 = (state_31750[(2)]);
var state_31750__$1 = state_31750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31750__$1,inst_31744);
} else {
if((state_val_31751 === (12))){
var state_31750__$1 = state_31750;
var statearr_31782_35382 = state_31750__$1;
(statearr_31782_35382[(2)] = null);

(statearr_31782_35382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (2))){
var state_31750__$1 = state_31750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31750__$1,(4),from);
} else {
if((state_val_31751 === (11))){
var inst_31731 = (state_31750[(2)]);
var state_31750__$1 = state_31750;
if(cljs.core.truth_(inst_31731)){
var statearr_31783_35383 = state_31750__$1;
(statearr_31783_35383[(1)] = (12));

} else {
var statearr_31784_35384 = state_31750__$1;
(statearr_31784_35384[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (9))){
var state_31750__$1 = state_31750;
var statearr_31789_35385 = state_31750__$1;
(statearr_31789_35385[(2)] = null);

(statearr_31789_35385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (5))){
var state_31750__$1 = state_31750;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31790_35386 = state_31750__$1;
(statearr_31790_35386[(1)] = (8));

} else {
var statearr_31792_35387 = state_31750__$1;
(statearr_31792_35387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (14))){
var inst_31739 = (state_31750[(2)]);
var state_31750__$1 = state_31750;
var statearr_31794_35388 = state_31750__$1;
(statearr_31794_35388[(2)] = inst_31739);

(statearr_31794_35388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (10))){
var inst_31728 = (state_31750[(2)]);
var state_31750__$1 = state_31750;
var statearr_31795_35389 = state_31750__$1;
(statearr_31795_35389[(2)] = inst_31728);

(statearr_31795_35389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31751 === (8))){
var inst_31724 = cljs.core.async.close_BANG_(to);
var state_31750__$1 = state_31750;
var statearr_31796_35391 = state_31750__$1;
(statearr_31796_35391[(2)] = inst_31724);

(statearr_31796_35391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30107__auto__ = null;
var cljs$core$async$state_machine__30107__auto____0 = (function (){
var statearr_31798 = [null,null,null,null,null,null,null,null];
(statearr_31798[(0)] = cljs$core$async$state_machine__30107__auto__);

(statearr_31798[(1)] = (1));

return statearr_31798;
});
var cljs$core$async$state_machine__30107__auto____1 = (function (state_31750){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_31750);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e31800){var ex__30110__auto__ = e31800;
var statearr_31801_35393 = state_31750;
(statearr_31801_35393[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_31750[(4)]))){
var statearr_31802_35394 = state_31750;
(statearr_31802_35394[(1)] = cljs.core.first((state_31750[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35398 = state_31750;
state_31750 = G__35398;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$state_machine__30107__auto__ = function(state_31750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30107__auto____1.call(this,state_31750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30107__auto____0;
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30107__auto____1;
return cljs$core$async$state_machine__30107__auto__;
})()
})();
var state__31341__auto__ = (function (){var statearr_31804 = f__31340__auto__();
(statearr_31804[(6)] = c__31339__auto___35371);

return statearr_31804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__31813){
var vec__31814 = p__31813;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31814,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31814,(1),null);
var job = vec__31814;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31339__auto___35399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = (function (state_31822){
var state_val_31823 = (state_31822[(1)]);
if((state_val_31823 === (1))){
var state_31822__$1 = state_31822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31822__$1,(2),res,v);
} else {
if((state_val_31823 === (2))){
var inst_31819 = (state_31822[(2)]);
var inst_31820 = cljs.core.async.close_BANG_(res);
var state_31822__$1 = (function (){var statearr_31826 = state_31822;
(statearr_31826[(7)] = inst_31819);

return statearr_31826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31822__$1,inst_31820);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____0 = (function (){
var statearr_31827 = [null,null,null,null,null,null,null,null];
(statearr_31827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__);

(statearr_31827[(1)] = (1));

return statearr_31827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____1 = (function (state_31822){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_31822);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e31828){var ex__30110__auto__ = e31828;
var statearr_31829_35400 = state_31822;
(statearr_31829_35400[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_31822[(4)]))){
var statearr_31831_35401 = state_31822;
(statearr_31831_35401[(1)] = cljs.core.first((state_31822[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35402 = state_31822;
state_31822 = G__35402;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__ = function(state_31822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____1.call(this,state_31822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__;
})()
})();
var state__31341__auto__ = (function (){var statearr_31832 = f__31340__auto__();
(statearr_31832[(6)] = c__31339__auto___35399);

return statearr_31832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31835){
var vec__31836 = p__31835;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31836,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31836,(1),null);
var job = vec__31836;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5616__auto___35403 = n;
var __35404 = (0);
while(true){
if((__35404 < n__5616__auto___35403)){
var G__31846_35405 = type;
var G__31846_35406__$1 = (((G__31846_35405 instanceof cljs.core.Keyword))?G__31846_35405.fqn:null);
switch (G__31846_35406__$1) {
case "compute":
var c__31339__auto___35408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35404,c__31339__auto___35408,G__31846_35405,G__31846_35406__$1,n__5616__auto___35403,jobs,results,process__$1,async){
return (function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = ((function (__35404,c__31339__auto___35408,G__31846_35405,G__31846_35406__$1,n__5616__auto___35403,jobs,results,process__$1,async){
return (function (state_31865){
var state_val_31866 = (state_31865[(1)]);
if((state_val_31866 === (1))){
var state_31865__$1 = state_31865;
var statearr_31868_35409 = state_31865__$1;
(statearr_31868_35409[(2)] = null);

(statearr_31868_35409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31866 === (2))){
var state_31865__$1 = state_31865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31865__$1,(4),jobs);
} else {
if((state_val_31866 === (3))){
var inst_31863 = (state_31865[(2)]);
var state_31865__$1 = state_31865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31865__$1,inst_31863);
} else {
if((state_val_31866 === (4))){
var inst_31852 = (state_31865[(2)]);
var inst_31853 = process__$1(inst_31852);
var state_31865__$1 = state_31865;
if(cljs.core.truth_(inst_31853)){
var statearr_31873_35410 = state_31865__$1;
(statearr_31873_35410[(1)] = (5));

} else {
var statearr_31874_35411 = state_31865__$1;
(statearr_31874_35411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31866 === (5))){
var state_31865__$1 = state_31865;
var statearr_31876_35412 = state_31865__$1;
(statearr_31876_35412[(2)] = null);

(statearr_31876_35412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31866 === (6))){
var state_31865__$1 = state_31865;
var statearr_31877_35413 = state_31865__$1;
(statearr_31877_35413[(2)] = null);

(statearr_31877_35413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31866 === (7))){
var inst_31861 = (state_31865[(2)]);
var state_31865__$1 = state_31865;
var statearr_31878_35415 = state_31865__$1;
(statearr_31878_35415[(2)] = inst_31861);

(statearr_31878_35415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35404,c__31339__auto___35408,G__31846_35405,G__31846_35406__$1,n__5616__auto___35403,jobs,results,process__$1,async))
;
return ((function (__35404,switch__30106__auto__,c__31339__auto___35408,G__31846_35405,G__31846_35406__$1,n__5616__auto___35403,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____0 = (function (){
var statearr_31880 = [null,null,null,null,null,null,null];
(statearr_31880[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__);

(statearr_31880[(1)] = (1));

return statearr_31880;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____1 = (function (state_31865){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_31865);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e31882){var ex__30110__auto__ = e31882;
var statearr_31884_35423 = state_31865;
(statearr_31884_35423[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_31865[(4)]))){
var statearr_31885_35425 = state_31865;
(statearr_31885_35425[(1)] = cljs.core.first((state_31865[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35427 = state_31865;
state_31865 = G__35427;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__ = function(state_31865){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____1.call(this,state_31865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__;
})()
;})(__35404,switch__30106__auto__,c__31339__auto___35408,G__31846_35405,G__31846_35406__$1,n__5616__auto___35403,jobs,results,process__$1,async))
})();
var state__31341__auto__ = (function (){var statearr_31890 = f__31340__auto__();
(statearr_31890[(6)] = c__31339__auto___35408);

return statearr_31890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
});})(__35404,c__31339__auto___35408,G__31846_35405,G__31846_35406__$1,n__5616__auto___35403,jobs,results,process__$1,async))
);


break;
case "async":
var c__31339__auto___35428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35404,c__31339__auto___35428,G__31846_35405,G__31846_35406__$1,n__5616__auto___35403,jobs,results,process__$1,async){
return (function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = ((function (__35404,c__31339__auto___35428,G__31846_35405,G__31846_35406__$1,n__5616__auto___35403,jobs,results,process__$1,async){
return (function (state_31916){
var state_val_31917 = (state_31916[(1)]);
if((state_val_31917 === (1))){
var state_31916__$1 = state_31916;
var statearr_31928_35429 = state_31916__$1;
(statearr_31928_35429[(2)] = null);

(statearr_31928_35429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (2))){
var state_31916__$1 = state_31916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31916__$1,(4),jobs);
} else {
if((state_val_31917 === (3))){
var inst_31910 = (state_31916[(2)]);
var state_31916__$1 = state_31916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31916__$1,inst_31910);
} else {
if((state_val_31917 === (4))){
var inst_31896 = (state_31916[(2)]);
var inst_31898 = async(inst_31896);
var state_31916__$1 = state_31916;
if(cljs.core.truth_(inst_31898)){
var statearr_31937_35430 = state_31916__$1;
(statearr_31937_35430[(1)] = (5));

} else {
var statearr_31942_35431 = state_31916__$1;
(statearr_31942_35431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (5))){
var state_31916__$1 = state_31916;
var statearr_31948_35432 = state_31916__$1;
(statearr_31948_35432[(2)] = null);

(statearr_31948_35432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (6))){
var state_31916__$1 = state_31916;
var statearr_31953_35433 = state_31916__$1;
(statearr_31953_35433[(2)] = null);

(statearr_31953_35433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (7))){
var inst_31908 = (state_31916[(2)]);
var state_31916__$1 = state_31916;
var statearr_31959_35434 = state_31916__$1;
(statearr_31959_35434[(2)] = inst_31908);

(statearr_31959_35434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35404,c__31339__auto___35428,G__31846_35405,G__31846_35406__$1,n__5616__auto___35403,jobs,results,process__$1,async))
;
return ((function (__35404,switch__30106__auto__,c__31339__auto___35428,G__31846_35405,G__31846_35406__$1,n__5616__auto___35403,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____0 = (function (){
var statearr_31967 = [null,null,null,null,null,null,null];
(statearr_31967[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__);

(statearr_31967[(1)] = (1));

return statearr_31967;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____1 = (function (state_31916){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_31916);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e31970){var ex__30110__auto__ = e31970;
var statearr_31971_35435 = state_31916;
(statearr_31971_35435[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_31916[(4)]))){
var statearr_31974_35436 = state_31916;
(statearr_31974_35436[(1)] = cljs.core.first((state_31916[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35437 = state_31916;
state_31916 = G__35437;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__ = function(state_31916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____1.call(this,state_31916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__;
})()
;})(__35404,switch__30106__auto__,c__31339__auto___35428,G__31846_35405,G__31846_35406__$1,n__5616__auto___35403,jobs,results,process__$1,async))
})();
var state__31341__auto__ = (function (){var statearr_31976 = f__31340__auto__();
(statearr_31976[(6)] = c__31339__auto___35428);

return statearr_31976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
});})(__35404,c__31339__auto___35428,G__31846_35405,G__31846_35406__$1,n__5616__auto___35403,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31846_35406__$1)].join('')));

}

var G__35438 = (__35404 + (1));
__35404 = G__35438;
continue;
} else {
}
break;
}

var c__31339__auto___35439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = (function (state_32008){
var state_val_32013 = (state_32008[(1)]);
if((state_val_32013 === (7))){
var inst_32000 = (state_32008[(2)]);
var state_32008__$1 = state_32008;
var statearr_32037_35440 = state_32008__$1;
(statearr_32037_35440[(2)] = inst_32000);

(statearr_32037_35440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (1))){
var state_32008__$1 = state_32008;
var statearr_32049_35441 = state_32008__$1;
(statearr_32049_35441[(2)] = null);

(statearr_32049_35441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (4))){
var inst_31983 = (state_32008[(7)]);
var inst_31983__$1 = (state_32008[(2)]);
var inst_31985 = (inst_31983__$1 == null);
var state_32008__$1 = (function (){var statearr_32070 = state_32008;
(statearr_32070[(7)] = inst_31983__$1);

return statearr_32070;
})();
if(cljs.core.truth_(inst_31985)){
var statearr_32077_35442 = state_32008__$1;
(statearr_32077_35442[(1)] = (5));

} else {
var statearr_32082_35443 = state_32008__$1;
(statearr_32082_35443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (6))){
var inst_31983 = (state_32008[(7)]);
var inst_31989 = (state_32008[(8)]);
var inst_31989__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31991 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31992 = [inst_31983,inst_31989__$1];
var inst_31993 = (new cljs.core.PersistentVector(null,2,(5),inst_31991,inst_31992,null));
var state_32008__$1 = (function (){var statearr_32104 = state_32008;
(statearr_32104[(8)] = inst_31989__$1);

return statearr_32104;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32008__$1,(8),jobs,inst_31993);
} else {
if((state_val_32013 === (3))){
var inst_32002 = (state_32008[(2)]);
var state_32008__$1 = state_32008;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32008__$1,inst_32002);
} else {
if((state_val_32013 === (2))){
var state_32008__$1 = state_32008;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32008__$1,(4),from);
} else {
if((state_val_32013 === (9))){
var inst_31997 = (state_32008[(2)]);
var state_32008__$1 = (function (){var statearr_32122 = state_32008;
(statearr_32122[(9)] = inst_31997);

return statearr_32122;
})();
var statearr_32124_35452 = state_32008__$1;
(statearr_32124_35452[(2)] = null);

(statearr_32124_35452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (5))){
var inst_31987 = cljs.core.async.close_BANG_(jobs);
var state_32008__$1 = state_32008;
var statearr_32131_35453 = state_32008__$1;
(statearr_32131_35453[(2)] = inst_31987);

(statearr_32131_35453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (8))){
var inst_31989 = (state_32008[(8)]);
var inst_31995 = (state_32008[(2)]);
var state_32008__$1 = (function (){var statearr_32141 = state_32008;
(statearr_32141[(10)] = inst_31995);

return statearr_32141;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32008__$1,(9),results,inst_31989);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____0 = (function (){
var statearr_32153 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32153[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__);

(statearr_32153[(1)] = (1));

return statearr_32153;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____1 = (function (state_32008){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_32008);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e32156){var ex__30110__auto__ = e32156;
var statearr_32157_35454 = state_32008;
(statearr_32157_35454[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_32008[(4)]))){
var statearr_32165_35458 = state_32008;
(statearr_32165_35458[(1)] = cljs.core.first((state_32008[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35460 = state_32008;
state_32008 = G__35460;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__ = function(state_32008){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____1.call(this,state_32008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__;
})()
})();
var state__31341__auto__ = (function (){var statearr_32175 = f__31340__auto__();
(statearr_32175[(6)] = c__31339__auto___35439);

return statearr_32175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
}));


var c__31339__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = (function (state_32255){
var state_val_32257 = (state_32255[(1)]);
if((state_val_32257 === (7))){
var inst_32246 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
var statearr_32271_35461 = state_32255__$1;
(statearr_32271_35461[(2)] = inst_32246);

(statearr_32271_35461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32257 === (20))){
var state_32255__$1 = state_32255;
var statearr_32275_35468 = state_32255__$1;
(statearr_32275_35468[(2)] = null);

(statearr_32275_35468[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32257 === (1))){
var state_32255__$1 = state_32255;
var statearr_32276_35469 = state_32255__$1;
(statearr_32276_35469[(2)] = null);

(statearr_32276_35469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32257 === (4))){
var inst_32180 = (state_32255[(7)]);
var inst_32180__$1 = (state_32255[(2)]);
var inst_32183 = (inst_32180__$1 == null);
var state_32255__$1 = (function (){var statearr_32277 = state_32255;
(statearr_32277[(7)] = inst_32180__$1);

return statearr_32277;
})();
if(cljs.core.truth_(inst_32183)){
var statearr_32280_35470 = state_32255__$1;
(statearr_32280_35470[(1)] = (5));

} else {
var statearr_32282_35471 = state_32255__$1;
(statearr_32282_35471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32257 === (15))){
var inst_32214 = (state_32255[(8)]);
var state_32255__$1 = state_32255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32255__$1,(18),to,inst_32214);
} else {
if((state_val_32257 === (21))){
var inst_32236 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
var statearr_32292_35472 = state_32255__$1;
(statearr_32292_35472[(2)] = inst_32236);

(statearr_32292_35472[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32257 === (13))){
var inst_32238 = (state_32255[(2)]);
var state_32255__$1 = (function (){var statearr_32297 = state_32255;
(statearr_32297[(9)] = inst_32238);

return statearr_32297;
})();
var statearr_32298_35473 = state_32255__$1;
(statearr_32298_35473[(2)] = null);

(statearr_32298_35473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32257 === (6))){
var inst_32180 = (state_32255[(7)]);
var state_32255__$1 = state_32255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32255__$1,(11),inst_32180);
} else {
if((state_val_32257 === (17))){
var inst_32227 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
if(cljs.core.truth_(inst_32227)){
var statearr_32304_35475 = state_32255__$1;
(statearr_32304_35475[(1)] = (19));

} else {
var statearr_32306_35476 = state_32255__$1;
(statearr_32306_35476[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32257 === (3))){
var inst_32248 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32255__$1,inst_32248);
} else {
if((state_val_32257 === (12))){
var inst_32197 = (state_32255[(10)]);
var state_32255__$1 = state_32255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32255__$1,(14),inst_32197);
} else {
if((state_val_32257 === (2))){
var state_32255__$1 = state_32255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32255__$1,(4),results);
} else {
if((state_val_32257 === (19))){
var state_32255__$1 = state_32255;
var statearr_32307_35478 = state_32255__$1;
(statearr_32307_35478[(2)] = null);

(statearr_32307_35478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32257 === (11))){
var inst_32197 = (state_32255[(2)]);
var state_32255__$1 = (function (){var statearr_32308 = state_32255;
(statearr_32308[(10)] = inst_32197);

return statearr_32308;
})();
var statearr_32309_35479 = state_32255__$1;
(statearr_32309_35479[(2)] = null);

(statearr_32309_35479[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32257 === (9))){
var state_32255__$1 = state_32255;
var statearr_32314_35480 = state_32255__$1;
(statearr_32314_35480[(2)] = null);

(statearr_32314_35480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32257 === (5))){
var state_32255__$1 = state_32255;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32321_35482 = state_32255__$1;
(statearr_32321_35482[(1)] = (8));

} else {
var statearr_32322_35483 = state_32255__$1;
(statearr_32322_35483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32257 === (14))){
var inst_32214 = (state_32255[(8)]);
var inst_32221 = (state_32255[(11)]);
var inst_32214__$1 = (state_32255[(2)]);
var inst_32220 = (inst_32214__$1 == null);
var inst_32221__$1 = cljs.core.not(inst_32220);
var state_32255__$1 = (function (){var statearr_32324 = state_32255;
(statearr_32324[(8)] = inst_32214__$1);

(statearr_32324[(11)] = inst_32221__$1);

return statearr_32324;
})();
if(inst_32221__$1){
var statearr_32328_35484 = state_32255__$1;
(statearr_32328_35484[(1)] = (15));

} else {
var statearr_32329_35485 = state_32255__$1;
(statearr_32329_35485[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32257 === (16))){
var inst_32221 = (state_32255[(11)]);
var state_32255__$1 = state_32255;
var statearr_32336_35486 = state_32255__$1;
(statearr_32336_35486[(2)] = inst_32221);

(statearr_32336_35486[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32257 === (10))){
var inst_32190 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
var statearr_32344_35487 = state_32255__$1;
(statearr_32344_35487[(2)] = inst_32190);

(statearr_32344_35487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32257 === (18))){
var inst_32224 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
var statearr_32345_35488 = state_32255__$1;
(statearr_32345_35488[(2)] = inst_32224);

(statearr_32345_35488[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32257 === (8))){
var inst_32187 = cljs.core.async.close_BANG_(to);
var state_32255__$1 = state_32255;
var statearr_32346_35489 = state_32255__$1;
(statearr_32346_35489[(2)] = inst_32187);

(statearr_32346_35489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____0 = (function (){
var statearr_32351 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32351[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__);

(statearr_32351[(1)] = (1));

return statearr_32351;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____1 = (function (state_32255){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_32255);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e32354){var ex__30110__auto__ = e32354;
var statearr_32355_35490 = state_32255;
(statearr_32355_35490[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_32255[(4)]))){
var statearr_32358_35491 = state_32255;
(statearr_32358_35491[(1)] = cljs.core.first((state_32255[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35493 = state_32255;
state_32255 = G__35493;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__ = function(state_32255){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____1.call(this,state_32255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30107__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30107__auto__;
})()
})();
var state__31341__auto__ = (function (){var statearr_32361 = f__31340__auto__();
(statearr_32361[(6)] = c__31339__auto__);

return statearr_32361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
}));

return c__31339__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32375 = arguments.length;
switch (G__32375) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32396 = arguments.length;
switch (G__32396) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32424 = arguments.length;
switch (G__32424) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31339__auto___35502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = (function (state_32480){
var state_val_32484 = (state_32480[(1)]);
if((state_val_32484 === (7))){
var inst_32469 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32494_35504 = state_32480__$1;
(statearr_32494_35504[(2)] = inst_32469);

(statearr_32494_35504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32484 === (1))){
var state_32480__$1 = state_32480;
var statearr_32501_35505 = state_32480__$1;
(statearr_32501_35505[(2)] = null);

(statearr_32501_35505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32484 === (4))){
var inst_32443 = (state_32480[(7)]);
var inst_32443__$1 = (state_32480[(2)]);
var inst_32444 = (inst_32443__$1 == null);
var state_32480__$1 = (function (){var statearr_32509 = state_32480;
(statearr_32509[(7)] = inst_32443__$1);

return statearr_32509;
})();
if(cljs.core.truth_(inst_32444)){
var statearr_32511_35506 = state_32480__$1;
(statearr_32511_35506[(1)] = (5));

} else {
var statearr_32520_35507 = state_32480__$1;
(statearr_32520_35507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32484 === (13))){
var state_32480__$1 = state_32480;
var statearr_32526_35508 = state_32480__$1;
(statearr_32526_35508[(2)] = null);

(statearr_32526_35508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32484 === (6))){
var inst_32443 = (state_32480[(7)]);
var inst_32453 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32443) : p.call(null,inst_32443));
var state_32480__$1 = state_32480;
if(cljs.core.truth_(inst_32453)){
var statearr_32538_35510 = state_32480__$1;
(statearr_32538_35510[(1)] = (9));

} else {
var statearr_32544_35511 = state_32480__$1;
(statearr_32544_35511[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32484 === (3))){
var inst_32472 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32480__$1,inst_32472);
} else {
if((state_val_32484 === (12))){
var state_32480__$1 = state_32480;
var statearr_32564_35512 = state_32480__$1;
(statearr_32564_35512[(2)] = null);

(statearr_32564_35512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32484 === (2))){
var state_32480__$1 = state_32480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32480__$1,(4),ch);
} else {
if((state_val_32484 === (11))){
var inst_32443 = (state_32480[(7)]);
var inst_32458 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32480__$1,(8),inst_32458,inst_32443);
} else {
if((state_val_32484 === (9))){
var state_32480__$1 = state_32480;
var statearr_32577_35514 = state_32480__$1;
(statearr_32577_35514[(2)] = tc);

(statearr_32577_35514[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32484 === (5))){
var inst_32446 = cljs.core.async.close_BANG_(tc);
var inst_32447 = cljs.core.async.close_BANG_(fc);
var state_32480__$1 = (function (){var statearr_32588 = state_32480;
(statearr_32588[(8)] = inst_32446);

return statearr_32588;
})();
var statearr_32593_35516 = state_32480__$1;
(statearr_32593_35516[(2)] = inst_32447);

(statearr_32593_35516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32484 === (14))){
var inst_32467 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32618_35517 = state_32480__$1;
(statearr_32618_35517[(2)] = inst_32467);

(statearr_32618_35517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32484 === (10))){
var state_32480__$1 = state_32480;
var statearr_32623_35518 = state_32480__$1;
(statearr_32623_35518[(2)] = fc);

(statearr_32623_35518[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32484 === (8))){
var inst_32460 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
if(cljs.core.truth_(inst_32460)){
var statearr_32625_35519 = state_32480__$1;
(statearr_32625_35519[(1)] = (12));

} else {
var statearr_32626_35520 = state_32480__$1;
(statearr_32626_35520[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30107__auto__ = null;
var cljs$core$async$state_machine__30107__auto____0 = (function (){
var statearr_32628 = [null,null,null,null,null,null,null,null,null];
(statearr_32628[(0)] = cljs$core$async$state_machine__30107__auto__);

(statearr_32628[(1)] = (1));

return statearr_32628;
});
var cljs$core$async$state_machine__30107__auto____1 = (function (state_32480){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_32480);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e32633){var ex__30110__auto__ = e32633;
var statearr_32635_35521 = state_32480;
(statearr_32635_35521[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_32480[(4)]))){
var statearr_32637_35522 = state_32480;
(statearr_32637_35522[(1)] = cljs.core.first((state_32480[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35523 = state_32480;
state_32480 = G__35523;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$state_machine__30107__auto__ = function(state_32480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30107__auto____1.call(this,state_32480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30107__auto____0;
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30107__auto____1;
return cljs$core$async$state_machine__30107__auto__;
})()
})();
var state__31341__auto__ = (function (){var statearr_32646 = f__31340__auto__();
(statearr_32646[(6)] = c__31339__auto___35502);

return statearr_32646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31339__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = (function (state_32688){
var state_val_32689 = (state_32688[(1)]);
if((state_val_32689 === (7))){
var inst_32683 = (state_32688[(2)]);
var state_32688__$1 = state_32688;
var statearr_32696_35530 = state_32688__$1;
(statearr_32696_35530[(2)] = inst_32683);

(statearr_32696_35530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32689 === (1))){
var inst_32657 = init;
var inst_32661 = inst_32657;
var state_32688__$1 = (function (){var statearr_32697 = state_32688;
(statearr_32697[(7)] = inst_32661);

return statearr_32697;
})();
var statearr_32700_35534 = state_32688__$1;
(statearr_32700_35534[(2)] = null);

(statearr_32700_35534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32689 === (4))){
var inst_32664 = (state_32688[(8)]);
var inst_32664__$1 = (state_32688[(2)]);
var inst_32668 = (inst_32664__$1 == null);
var state_32688__$1 = (function (){var statearr_32705 = state_32688;
(statearr_32705[(8)] = inst_32664__$1);

return statearr_32705;
})();
if(cljs.core.truth_(inst_32668)){
var statearr_32706_35536 = state_32688__$1;
(statearr_32706_35536[(1)] = (5));

} else {
var statearr_32707_35537 = state_32688__$1;
(statearr_32707_35537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32689 === (6))){
var inst_32661 = (state_32688[(7)]);
var inst_32664 = (state_32688[(8)]);
var inst_32672 = (state_32688[(9)]);
var inst_32672__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32661,inst_32664) : f.call(null,inst_32661,inst_32664));
var inst_32673 = cljs.core.reduced_QMARK_(inst_32672__$1);
var state_32688__$1 = (function (){var statearr_32714 = state_32688;
(statearr_32714[(9)] = inst_32672__$1);

return statearr_32714;
})();
if(inst_32673){
var statearr_32717_35539 = state_32688__$1;
(statearr_32717_35539[(1)] = (8));

} else {
var statearr_32719_35540 = state_32688__$1;
(statearr_32719_35540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32689 === (3))){
var inst_32686 = (state_32688[(2)]);
var state_32688__$1 = state_32688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32688__$1,inst_32686);
} else {
if((state_val_32689 === (2))){
var state_32688__$1 = state_32688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32688__$1,(4),ch);
} else {
if((state_val_32689 === (9))){
var inst_32672 = (state_32688[(9)]);
var inst_32661 = inst_32672;
var state_32688__$1 = (function (){var statearr_32728 = state_32688;
(statearr_32728[(7)] = inst_32661);

return statearr_32728;
})();
var statearr_32730_35541 = state_32688__$1;
(statearr_32730_35541[(2)] = null);

(statearr_32730_35541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32689 === (5))){
var inst_32661 = (state_32688[(7)]);
var state_32688__$1 = state_32688;
var statearr_32732_35542 = state_32688__$1;
(statearr_32732_35542[(2)] = inst_32661);

(statearr_32732_35542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32689 === (10))){
var inst_32681 = (state_32688[(2)]);
var state_32688__$1 = state_32688;
var statearr_32735_35543 = state_32688__$1;
(statearr_32735_35543[(2)] = inst_32681);

(statearr_32735_35543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32689 === (8))){
var inst_32672 = (state_32688[(9)]);
var inst_32675 = cljs.core.deref(inst_32672);
var state_32688__$1 = state_32688;
var statearr_32737_35545 = state_32688__$1;
(statearr_32737_35545[(2)] = inst_32675);

(statearr_32737_35545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30107__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30107__auto____0 = (function (){
var statearr_32742 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32742[(0)] = cljs$core$async$reduce_$_state_machine__30107__auto__);

(statearr_32742[(1)] = (1));

return statearr_32742;
});
var cljs$core$async$reduce_$_state_machine__30107__auto____1 = (function (state_32688){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_32688);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e32752){var ex__30110__auto__ = e32752;
var statearr_32755_35549 = state_32688;
(statearr_32755_35549[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_32688[(4)]))){
var statearr_32761_35551 = state_32688;
(statearr_32761_35551[(1)] = cljs.core.first((state_32688[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35552 = state_32688;
state_32688 = G__35552;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30107__auto__ = function(state_32688){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30107__auto____1.call(this,state_32688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30107__auto____0;
cljs$core$async$reduce_$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30107__auto____1;
return cljs$core$async$reduce_$_state_machine__30107__auto__;
})()
})();
var state__31341__auto__ = (function (){var statearr_32769 = f__31340__auto__();
(statearr_32769[(6)] = c__31339__auto__);

return statearr_32769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
}));

return c__31339__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31339__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = (function (state_32784){
var state_val_32785 = (state_32784[(1)]);
if((state_val_32785 === (1))){
var inst_32778 = cljs.core.async.reduce(f__$1,init,ch);
var state_32784__$1 = state_32784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32784__$1,(2),inst_32778);
} else {
if((state_val_32785 === (2))){
var inst_32780 = (state_32784[(2)]);
var inst_32782 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32780) : f__$1.call(null,inst_32780));
var state_32784__$1 = state_32784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32784__$1,inst_32782);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30107__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30107__auto____0 = (function (){
var statearr_32797 = [null,null,null,null,null,null,null];
(statearr_32797[(0)] = cljs$core$async$transduce_$_state_machine__30107__auto__);

(statearr_32797[(1)] = (1));

return statearr_32797;
});
var cljs$core$async$transduce_$_state_machine__30107__auto____1 = (function (state_32784){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_32784);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e32800){var ex__30110__auto__ = e32800;
var statearr_32801_35559 = state_32784;
(statearr_32801_35559[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_32784[(4)]))){
var statearr_32803_35560 = state_32784;
(statearr_32803_35560[(1)] = cljs.core.first((state_32784[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35561 = state_32784;
state_32784 = G__35561;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30107__auto__ = function(state_32784){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30107__auto____1.call(this,state_32784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30107__auto____0;
cljs$core$async$transduce_$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30107__auto____1;
return cljs$core$async$transduce_$_state_machine__30107__auto__;
})()
})();
var state__31341__auto__ = (function (){var statearr_32809 = f__31340__auto__();
(statearr_32809[(6)] = c__31339__auto__);

return statearr_32809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
}));

return c__31339__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32815 = arguments.length;
switch (G__32815) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31339__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = (function (state_32848){
var state_val_32849 = (state_32848[(1)]);
if((state_val_32849 === (7))){
var inst_32827 = (state_32848[(2)]);
var state_32848__$1 = state_32848;
var statearr_32850_35567 = state_32848__$1;
(statearr_32850_35567[(2)] = inst_32827);

(statearr_32850_35567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32849 === (1))){
var inst_32820 = cljs.core.seq(coll);
var inst_32821 = inst_32820;
var state_32848__$1 = (function (){var statearr_32852 = state_32848;
(statearr_32852[(7)] = inst_32821);

return statearr_32852;
})();
var statearr_32853_35568 = state_32848__$1;
(statearr_32853_35568[(2)] = null);

(statearr_32853_35568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32849 === (4))){
var inst_32821 = (state_32848[(7)]);
var inst_32825 = cljs.core.first(inst_32821);
var state_32848__$1 = state_32848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32848__$1,(7),ch,inst_32825);
} else {
if((state_val_32849 === (13))){
var inst_32842 = (state_32848[(2)]);
var state_32848__$1 = state_32848;
var statearr_32854_35569 = state_32848__$1;
(statearr_32854_35569[(2)] = inst_32842);

(statearr_32854_35569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32849 === (6))){
var inst_32830 = (state_32848[(2)]);
var state_32848__$1 = state_32848;
if(cljs.core.truth_(inst_32830)){
var statearr_32856_35570 = state_32848__$1;
(statearr_32856_35570[(1)] = (8));

} else {
var statearr_32857_35571 = state_32848__$1;
(statearr_32857_35571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32849 === (3))){
var inst_32846 = (state_32848[(2)]);
var state_32848__$1 = state_32848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32848__$1,inst_32846);
} else {
if((state_val_32849 === (12))){
var state_32848__$1 = state_32848;
var statearr_32859_35577 = state_32848__$1;
(statearr_32859_35577[(2)] = null);

(statearr_32859_35577[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32849 === (2))){
var inst_32821 = (state_32848[(7)]);
var state_32848__$1 = state_32848;
if(cljs.core.truth_(inst_32821)){
var statearr_32861_35585 = state_32848__$1;
(statearr_32861_35585[(1)] = (4));

} else {
var statearr_32862_35592 = state_32848__$1;
(statearr_32862_35592[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32849 === (11))){
var inst_32839 = cljs.core.async.close_BANG_(ch);
var state_32848__$1 = state_32848;
var statearr_32863_35593 = state_32848__$1;
(statearr_32863_35593[(2)] = inst_32839);

(statearr_32863_35593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32849 === (9))){
var state_32848__$1 = state_32848;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32867_35595 = state_32848__$1;
(statearr_32867_35595[(1)] = (11));

} else {
var statearr_32869_35596 = state_32848__$1;
(statearr_32869_35596[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32849 === (5))){
var inst_32821 = (state_32848[(7)]);
var state_32848__$1 = state_32848;
var statearr_32871_35598 = state_32848__$1;
(statearr_32871_35598[(2)] = inst_32821);

(statearr_32871_35598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32849 === (10))){
var inst_32844 = (state_32848[(2)]);
var state_32848__$1 = state_32848;
var statearr_32873_35603 = state_32848__$1;
(statearr_32873_35603[(2)] = inst_32844);

(statearr_32873_35603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32849 === (8))){
var inst_32821 = (state_32848[(7)]);
var inst_32833 = cljs.core.next(inst_32821);
var inst_32821__$1 = inst_32833;
var state_32848__$1 = (function (){var statearr_32874 = state_32848;
(statearr_32874[(7)] = inst_32821__$1);

return statearr_32874;
})();
var statearr_32875_35608 = state_32848__$1;
(statearr_32875_35608[(2)] = null);

(statearr_32875_35608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30107__auto__ = null;
var cljs$core$async$state_machine__30107__auto____0 = (function (){
var statearr_32876 = [null,null,null,null,null,null,null,null];
(statearr_32876[(0)] = cljs$core$async$state_machine__30107__auto__);

(statearr_32876[(1)] = (1));

return statearr_32876;
});
var cljs$core$async$state_machine__30107__auto____1 = (function (state_32848){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_32848);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e32877){var ex__30110__auto__ = e32877;
var statearr_32878_35612 = state_32848;
(statearr_32878_35612[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_32848[(4)]))){
var statearr_32879_35613 = state_32848;
(statearr_32879_35613[(1)] = cljs.core.first((state_32848[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35614 = state_32848;
state_32848 = G__35614;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$state_machine__30107__auto__ = function(state_32848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30107__auto____1.call(this,state_32848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30107__auto____0;
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30107__auto____1;
return cljs$core$async$state_machine__30107__auto__;
})()
})();
var state__31341__auto__ = (function (){var statearr_32880 = f__31340__auto__();
(statearr_32880[(6)] = c__31339__auto__);

return statearr_32880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
}));

return c__31339__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32883 = arguments.length;
switch (G__32883) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35645 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35645(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35655 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5374__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5372__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35655(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35676 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35676(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35691 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35691(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32932 = (function (ch,cs,meta32933){
this.ch = ch;
this.cs = cs;
this.meta32933 = meta32933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32934,meta32933__$1){
var self__ = this;
var _32934__$1 = this;
return (new cljs.core.async.t_cljs$core$async32932(self__.ch,self__.cs,meta32933__$1));
}));

(cljs.core.async.t_cljs$core$async32932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32934){
var self__ = this;
var _32934__$1 = this;
return self__.meta32933;
}));

(cljs.core.async.t_cljs$core$async32932.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32932.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32932.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32932.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32932.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32932.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32933","meta32933",2044412986,null)], null);
}));

(cljs.core.async.t_cljs$core$async32932.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32932");

(cljs.core.async.t_cljs$core$async32932.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32932");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32932.
 */
cljs.core.async.__GT_t_cljs$core$async32932 = (function cljs$core$async$__GT_t_cljs$core$async32932(ch,cs,meta32933){
return (new cljs.core.async.t_cljs$core$async32932(ch,cs,meta32933));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async32932(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31339__auto___35711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = (function (state_33142){
var state_val_33146 = (state_33142[(1)]);
if((state_val_33146 === (7))){
var inst_33126 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33167_35712 = state_33142__$1;
(statearr_33167_35712[(2)] = inst_33126);

(statearr_33167_35712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (20))){
var inst_32994 = (state_33142[(7)]);
var inst_33006 = cljs.core.first(inst_32994);
var inst_33007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33006,(0),null);
var inst_33008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33006,(1),null);
var state_33142__$1 = (function (){var statearr_33173 = state_33142;
(statearr_33173[(8)] = inst_33007);

return statearr_33173;
})();
if(cljs.core.truth_(inst_33008)){
var statearr_33176_35714 = state_33142__$1;
(statearr_33176_35714[(1)] = (22));

} else {
var statearr_33180_35719 = state_33142__$1;
(statearr_33180_35719[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (27))){
var inst_33043 = (state_33142[(9)]);
var inst_33045 = (state_33142[(10)]);
var inst_33054 = (state_33142[(11)]);
var inst_32955 = (state_33142[(12)]);
var inst_33054__$1 = cljs.core._nth(inst_33043,inst_33045);
var inst_33055 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33054__$1,inst_32955,done);
var state_33142__$1 = (function (){var statearr_33184 = state_33142;
(statearr_33184[(11)] = inst_33054__$1);

return statearr_33184;
})();
if(cljs.core.truth_(inst_33055)){
var statearr_33188_35720 = state_33142__$1;
(statearr_33188_35720[(1)] = (30));

} else {
var statearr_33189_35721 = state_33142__$1;
(statearr_33189_35721[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (1))){
var state_33142__$1 = state_33142;
var statearr_33191_35722 = state_33142__$1;
(statearr_33191_35722[(2)] = null);

(statearr_33191_35722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (24))){
var inst_32994 = (state_33142[(7)]);
var inst_33013 = (state_33142[(2)]);
var inst_33014 = cljs.core.next(inst_32994);
var inst_32964 = inst_33014;
var inst_32965 = null;
var inst_32966 = (0);
var inst_32967 = (0);
var state_33142__$1 = (function (){var statearr_33192 = state_33142;
(statearr_33192[(13)] = inst_33013);

(statearr_33192[(14)] = inst_32964);

(statearr_33192[(15)] = inst_32965);

(statearr_33192[(16)] = inst_32966);

(statearr_33192[(17)] = inst_32967);

return statearr_33192;
})();
var statearr_33193_35730 = state_33142__$1;
(statearr_33193_35730[(2)] = null);

(statearr_33193_35730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (39))){
var state_33142__$1 = state_33142;
var statearr_33203_35731 = state_33142__$1;
(statearr_33203_35731[(2)] = null);

(statearr_33203_35731[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (4))){
var inst_32955 = (state_33142[(12)]);
var inst_32955__$1 = (state_33142[(2)]);
var inst_32956 = (inst_32955__$1 == null);
var state_33142__$1 = (function (){var statearr_33204 = state_33142;
(statearr_33204[(12)] = inst_32955__$1);

return statearr_33204;
})();
if(cljs.core.truth_(inst_32956)){
var statearr_33208_35732 = state_33142__$1;
(statearr_33208_35732[(1)] = (5));

} else {
var statearr_33209_35733 = state_33142__$1;
(statearr_33209_35733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (15))){
var inst_32967 = (state_33142[(17)]);
var inst_32964 = (state_33142[(14)]);
var inst_32965 = (state_33142[(15)]);
var inst_32966 = (state_33142[(16)]);
var inst_32989 = (state_33142[(2)]);
var inst_32990 = (inst_32967 + (1));
var tmp33199 = inst_32964;
var tmp33200 = inst_32966;
var tmp33201 = inst_32965;
var inst_32964__$1 = tmp33199;
var inst_32965__$1 = tmp33201;
var inst_32966__$1 = tmp33200;
var inst_32967__$1 = inst_32990;
var state_33142__$1 = (function (){var statearr_33213 = state_33142;
(statearr_33213[(18)] = inst_32989);

(statearr_33213[(14)] = inst_32964__$1);

(statearr_33213[(15)] = inst_32965__$1);

(statearr_33213[(16)] = inst_32966__$1);

(statearr_33213[(17)] = inst_32967__$1);

return statearr_33213;
})();
var statearr_33214_35735 = state_33142__$1;
(statearr_33214_35735[(2)] = null);

(statearr_33214_35735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (21))){
var inst_33017 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33221_35737 = state_33142__$1;
(statearr_33221_35737[(2)] = inst_33017);

(statearr_33221_35737[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (31))){
var inst_33054 = (state_33142[(11)]);
var inst_33058 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33054);
var state_33142__$1 = state_33142;
var statearr_33228_35741 = state_33142__$1;
(statearr_33228_35741[(2)] = inst_33058);

(statearr_33228_35741[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (32))){
var inst_33045 = (state_33142[(10)]);
var inst_33042 = (state_33142[(19)]);
var inst_33043 = (state_33142[(9)]);
var inst_33044 = (state_33142[(20)]);
var inst_33060 = (state_33142[(2)]);
var inst_33061 = (inst_33045 + (1));
var tmp33218 = inst_33042;
var tmp33219 = inst_33044;
var tmp33220 = inst_33043;
var inst_33042__$1 = tmp33218;
var inst_33043__$1 = tmp33220;
var inst_33044__$1 = tmp33219;
var inst_33045__$1 = inst_33061;
var state_33142__$1 = (function (){var statearr_33229 = state_33142;
(statearr_33229[(21)] = inst_33060);

(statearr_33229[(19)] = inst_33042__$1);

(statearr_33229[(9)] = inst_33043__$1);

(statearr_33229[(20)] = inst_33044__$1);

(statearr_33229[(10)] = inst_33045__$1);

return statearr_33229;
})();
var statearr_33231_35743 = state_33142__$1;
(statearr_33231_35743[(2)] = null);

(statearr_33231_35743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (40))){
var inst_33080 = (state_33142[(22)]);
var inst_33089 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33080);
var state_33142__$1 = state_33142;
var statearr_33244_35748 = state_33142__$1;
(statearr_33244_35748[(2)] = inst_33089);

(statearr_33244_35748[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (33))){
var inst_33064 = (state_33142[(23)]);
var inst_33066 = cljs.core.chunked_seq_QMARK_(inst_33064);
var state_33142__$1 = state_33142;
if(inst_33066){
var statearr_33245_35752 = state_33142__$1;
(statearr_33245_35752[(1)] = (36));

} else {
var statearr_33246_35753 = state_33142__$1;
(statearr_33246_35753[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (13))){
var inst_32980 = (state_33142[(24)]);
var inst_32983 = cljs.core.async.close_BANG_(inst_32980);
var state_33142__$1 = state_33142;
var statearr_33268_35754 = state_33142__$1;
(statearr_33268_35754[(2)] = inst_32983);

(statearr_33268_35754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (22))){
var inst_33007 = (state_33142[(8)]);
var inst_33010 = cljs.core.async.close_BANG_(inst_33007);
var state_33142__$1 = state_33142;
var statearr_33269_35756 = state_33142__$1;
(statearr_33269_35756[(2)] = inst_33010);

(statearr_33269_35756[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (36))){
var inst_33064 = (state_33142[(23)]);
var inst_33068 = cljs.core.chunk_first(inst_33064);
var inst_33069 = cljs.core.chunk_rest(inst_33064);
var inst_33073 = cljs.core.count(inst_33068);
var inst_33042 = inst_33069;
var inst_33043 = inst_33068;
var inst_33044 = inst_33073;
var inst_33045 = (0);
var state_33142__$1 = (function (){var statearr_33279 = state_33142;
(statearr_33279[(19)] = inst_33042);

(statearr_33279[(9)] = inst_33043);

(statearr_33279[(20)] = inst_33044);

(statearr_33279[(10)] = inst_33045);

return statearr_33279;
})();
var statearr_33284_35758 = state_33142__$1;
(statearr_33284_35758[(2)] = null);

(statearr_33284_35758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (41))){
var inst_33064 = (state_33142[(23)]);
var inst_33091 = (state_33142[(2)]);
var inst_33092 = cljs.core.next(inst_33064);
var inst_33042 = inst_33092;
var inst_33043 = null;
var inst_33044 = (0);
var inst_33045 = (0);
var state_33142__$1 = (function (){var statearr_33286 = state_33142;
(statearr_33286[(25)] = inst_33091);

(statearr_33286[(19)] = inst_33042);

(statearr_33286[(9)] = inst_33043);

(statearr_33286[(20)] = inst_33044);

(statearr_33286[(10)] = inst_33045);

return statearr_33286;
})();
var statearr_33290_35760 = state_33142__$1;
(statearr_33290_35760[(2)] = null);

(statearr_33290_35760[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (43))){
var state_33142__$1 = state_33142;
var statearr_33291_35761 = state_33142__$1;
(statearr_33291_35761[(2)] = null);

(statearr_33291_35761[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (29))){
var inst_33114 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33292_35766 = state_33142__$1;
(statearr_33292_35766[(2)] = inst_33114);

(statearr_33292_35766[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (44))){
var inst_33123 = (state_33142[(2)]);
var state_33142__$1 = (function (){var statearr_33293 = state_33142;
(statearr_33293[(26)] = inst_33123);

return statearr_33293;
})();
var statearr_33294_35767 = state_33142__$1;
(statearr_33294_35767[(2)] = null);

(statearr_33294_35767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (6))){
var inst_33034 = (state_33142[(27)]);
var inst_33033 = cljs.core.deref(cs);
var inst_33034__$1 = cljs.core.keys(inst_33033);
var inst_33035 = cljs.core.count(inst_33034__$1);
var inst_33036 = cljs.core.reset_BANG_(dctr,inst_33035);
var inst_33041 = cljs.core.seq(inst_33034__$1);
var inst_33042 = inst_33041;
var inst_33043 = null;
var inst_33044 = (0);
var inst_33045 = (0);
var state_33142__$1 = (function (){var statearr_33297 = state_33142;
(statearr_33297[(27)] = inst_33034__$1);

(statearr_33297[(28)] = inst_33036);

(statearr_33297[(19)] = inst_33042);

(statearr_33297[(9)] = inst_33043);

(statearr_33297[(20)] = inst_33044);

(statearr_33297[(10)] = inst_33045);

return statearr_33297;
})();
var statearr_33298_35773 = state_33142__$1;
(statearr_33298_35773[(2)] = null);

(statearr_33298_35773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (28))){
var inst_33042 = (state_33142[(19)]);
var inst_33064 = (state_33142[(23)]);
var inst_33064__$1 = cljs.core.seq(inst_33042);
var state_33142__$1 = (function (){var statearr_33300 = state_33142;
(statearr_33300[(23)] = inst_33064__$1);

return statearr_33300;
})();
if(inst_33064__$1){
var statearr_33301_35778 = state_33142__$1;
(statearr_33301_35778[(1)] = (33));

} else {
var statearr_33302_35780 = state_33142__$1;
(statearr_33302_35780[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (25))){
var inst_33045 = (state_33142[(10)]);
var inst_33044 = (state_33142[(20)]);
var inst_33050 = (inst_33045 < inst_33044);
var inst_33051 = inst_33050;
var state_33142__$1 = state_33142;
if(cljs.core.truth_(inst_33051)){
var statearr_33303_35781 = state_33142__$1;
(statearr_33303_35781[(1)] = (27));

} else {
var statearr_33304_35782 = state_33142__$1;
(statearr_33304_35782[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (34))){
var state_33142__$1 = state_33142;
var statearr_33331_35792 = state_33142__$1;
(statearr_33331_35792[(2)] = null);

(statearr_33331_35792[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (17))){
var state_33142__$1 = state_33142;
var statearr_33334_35793 = state_33142__$1;
(statearr_33334_35793[(2)] = null);

(statearr_33334_35793[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (3))){
var inst_33128 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33142__$1,inst_33128);
} else {
if((state_val_33146 === (12))){
var inst_33022 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33339_35794 = state_33142__$1;
(statearr_33339_35794[(2)] = inst_33022);

(statearr_33339_35794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (2))){
var state_33142__$1 = state_33142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33142__$1,(4),ch);
} else {
if((state_val_33146 === (23))){
var state_33142__$1 = state_33142;
var statearr_33346_35795 = state_33142__$1;
(statearr_33346_35795[(2)] = null);

(statearr_33346_35795[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (35))){
var inst_33102 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33347_35802 = state_33142__$1;
(statearr_33347_35802[(2)] = inst_33102);

(statearr_33347_35802[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (19))){
var inst_32994 = (state_33142[(7)]);
var inst_32998 = cljs.core.chunk_first(inst_32994);
var inst_32999 = cljs.core.chunk_rest(inst_32994);
var inst_33000 = cljs.core.count(inst_32998);
var inst_32964 = inst_32999;
var inst_32965 = inst_32998;
var inst_32966 = inst_33000;
var inst_32967 = (0);
var state_33142__$1 = (function (){var statearr_33349 = state_33142;
(statearr_33349[(14)] = inst_32964);

(statearr_33349[(15)] = inst_32965);

(statearr_33349[(16)] = inst_32966);

(statearr_33349[(17)] = inst_32967);

return statearr_33349;
})();
var statearr_33350_35803 = state_33142__$1;
(statearr_33350_35803[(2)] = null);

(statearr_33350_35803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (11))){
var inst_32964 = (state_33142[(14)]);
var inst_32994 = (state_33142[(7)]);
var inst_32994__$1 = cljs.core.seq(inst_32964);
var state_33142__$1 = (function (){var statearr_33354 = state_33142;
(statearr_33354[(7)] = inst_32994__$1);

return statearr_33354;
})();
if(inst_32994__$1){
var statearr_33355_35804 = state_33142__$1;
(statearr_33355_35804[(1)] = (16));

} else {
var statearr_33356_35805 = state_33142__$1;
(statearr_33356_35805[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (9))){
var inst_33024 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33362_35806 = state_33142__$1;
(statearr_33362_35806[(2)] = inst_33024);

(statearr_33362_35806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (5))){
var inst_32962 = cljs.core.deref(cs);
var inst_32963 = cljs.core.seq(inst_32962);
var inst_32964 = inst_32963;
var inst_32965 = null;
var inst_32966 = (0);
var inst_32967 = (0);
var state_33142__$1 = (function (){var statearr_33369 = state_33142;
(statearr_33369[(14)] = inst_32964);

(statearr_33369[(15)] = inst_32965);

(statearr_33369[(16)] = inst_32966);

(statearr_33369[(17)] = inst_32967);

return statearr_33369;
})();
var statearr_33371_35807 = state_33142__$1;
(statearr_33371_35807[(2)] = null);

(statearr_33371_35807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (14))){
var state_33142__$1 = state_33142;
var statearr_33377_35808 = state_33142__$1;
(statearr_33377_35808[(2)] = null);

(statearr_33377_35808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (45))){
var inst_33120 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33381_35809 = state_33142__$1;
(statearr_33381_35809[(2)] = inst_33120);

(statearr_33381_35809[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (26))){
var inst_33034 = (state_33142[(27)]);
var inst_33116 = (state_33142[(2)]);
var inst_33117 = cljs.core.seq(inst_33034);
var state_33142__$1 = (function (){var statearr_33382 = state_33142;
(statearr_33382[(29)] = inst_33116);

return statearr_33382;
})();
if(inst_33117){
var statearr_33383_35813 = state_33142__$1;
(statearr_33383_35813[(1)] = (42));

} else {
var statearr_33384_35819 = state_33142__$1;
(statearr_33384_35819[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (16))){
var inst_32994 = (state_33142[(7)]);
var inst_32996 = cljs.core.chunked_seq_QMARK_(inst_32994);
var state_33142__$1 = state_33142;
if(inst_32996){
var statearr_33390_35820 = state_33142__$1;
(statearr_33390_35820[(1)] = (19));

} else {
var statearr_33391_35821 = state_33142__$1;
(statearr_33391_35821[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (38))){
var inst_33099 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33393_35822 = state_33142__$1;
(statearr_33393_35822[(2)] = inst_33099);

(statearr_33393_35822[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (30))){
var state_33142__$1 = state_33142;
var statearr_33394_35835 = state_33142__$1;
(statearr_33394_35835[(2)] = null);

(statearr_33394_35835[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (10))){
var inst_32965 = (state_33142[(15)]);
var inst_32967 = (state_33142[(17)]);
var inst_32978 = cljs.core._nth(inst_32965,inst_32967);
var inst_32980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32978,(0),null);
var inst_32981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32978,(1),null);
var state_33142__$1 = (function (){var statearr_33396 = state_33142;
(statearr_33396[(24)] = inst_32980);

return statearr_33396;
})();
if(cljs.core.truth_(inst_32981)){
var statearr_33400_35836 = state_33142__$1;
(statearr_33400_35836[(1)] = (13));

} else {
var statearr_33402_35837 = state_33142__$1;
(statearr_33402_35837[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (18))){
var inst_33020 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33404_35840 = state_33142__$1;
(statearr_33404_35840[(2)] = inst_33020);

(statearr_33404_35840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (42))){
var state_33142__$1 = state_33142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33142__$1,(45),dchan);
} else {
if((state_val_33146 === (37))){
var inst_33064 = (state_33142[(23)]);
var inst_33080 = (state_33142[(22)]);
var inst_32955 = (state_33142[(12)]);
var inst_33080__$1 = cljs.core.first(inst_33064);
var inst_33082 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33080__$1,inst_32955,done);
var state_33142__$1 = (function (){var statearr_33408 = state_33142;
(statearr_33408[(22)] = inst_33080__$1);

return statearr_33408;
})();
if(cljs.core.truth_(inst_33082)){
var statearr_33409_35843 = state_33142__$1;
(statearr_33409_35843[(1)] = (39));

} else {
var statearr_33410_35844 = state_33142__$1;
(statearr_33410_35844[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (8))){
var inst_32967 = (state_33142[(17)]);
var inst_32966 = (state_33142[(16)]);
var inst_32969 = (inst_32967 < inst_32966);
var inst_32973 = inst_32969;
var state_33142__$1 = state_33142;
if(cljs.core.truth_(inst_32973)){
var statearr_33414_35845 = state_33142__$1;
(statearr_33414_35845[(1)] = (10));

} else {
var statearr_33415_35846 = state_33142__$1;
(statearr_33415_35846[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30107__auto__ = null;
var cljs$core$async$mult_$_state_machine__30107__auto____0 = (function (){
var statearr_33418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33418[(0)] = cljs$core$async$mult_$_state_machine__30107__auto__);

(statearr_33418[(1)] = (1));

return statearr_33418;
});
var cljs$core$async$mult_$_state_machine__30107__auto____1 = (function (state_33142){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_33142);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e33420){var ex__30110__auto__ = e33420;
var statearr_33421_35849 = state_33142;
(statearr_33421_35849[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_33142[(4)]))){
var statearr_33422_35850 = state_33142;
(statearr_33422_35850[(1)] = cljs.core.first((state_33142[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35851 = state_33142;
state_33142 = G__35851;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30107__auto__ = function(state_33142){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30107__auto____1.call(this,state_33142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30107__auto____0;
cljs$core$async$mult_$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30107__auto____1;
return cljs$core$async$mult_$_state_machine__30107__auto__;
})()
})();
var state__31341__auto__ = (function (){var statearr_33424 = f__31340__auto__();
(statearr_33424[(6)] = c__31339__auto___35711);

return statearr_33424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33427 = arguments.length;
switch (G__33427) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35858 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35858(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35866 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35866(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35867 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35867(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35869 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5374__auto__.call(null,m,state_map));
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5372__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35869(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35870 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5374__auto__.call(null,m,mode));
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5372__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35870(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35873 = arguments.length;
var i__5750__auto___35874 = (0);
while(true){
if((i__5750__auto___35874 < len__5749__auto___35873)){
args__5755__auto__.push((arguments[i__5750__auto___35874]));

var G__35878 = (i__5750__auto___35874 + (1));
i__5750__auto___35874 = G__35878;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33502){
var map__33503 = p__33502;
var map__33503__$1 = cljs.core.__destructure_map(map__33503);
var opts = map__33503__$1;
var statearr_33505_35880 = state;
(statearr_33505_35880[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33514_35884 = state;
(statearr_33514_35884[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_33515_35885 = state;
(statearr_33515_35885[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33483){
var G__33484 = cljs.core.first(seq33483);
var seq33483__$1 = cljs.core.next(seq33483);
var G__33485 = cljs.core.first(seq33483__$1);
var seq33483__$2 = cljs.core.next(seq33483__$1);
var G__33486 = cljs.core.first(seq33483__$2);
var seq33483__$3 = cljs.core.next(seq33483__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33484,G__33485,G__33486,seq33483__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33540 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33541){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33541 = meta33541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33542,meta33541__$1){
var self__ = this;
var _33542__$1 = this;
return (new cljs.core.async.t_cljs$core$async33540(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33541__$1));
}));

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33542){
var self__ = this;
var _33542__$1 = this;
return self__.meta33541;
}));

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33541","meta33541",-1478113748,null)], null);
}));

(cljs.core.async.t_cljs$core$async33540.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33540");

(cljs.core.async.t_cljs$core$async33540.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33540");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33540.
 */
cljs.core.async.__GT_t_cljs$core$async33540 = (function cljs$core$async$__GT_t_cljs$core$async33540(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33541){
return (new cljs.core.async.t_cljs$core$async33540(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33541));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async33540(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__31339__auto___35903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = (function (state_33679){
var state_val_33680 = (state_33679[(1)]);
if((state_val_33680 === (7))){
var inst_33634 = (state_33679[(2)]);
var state_33679__$1 = state_33679;
if(cljs.core.truth_(inst_33634)){
var statearr_33681_35910 = state_33679__$1;
(statearr_33681_35910[(1)] = (8));

} else {
var statearr_33683_35911 = state_33679__$1;
(statearr_33683_35911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (20))){
var inst_33619 = (state_33679[(7)]);
var state_33679__$1 = state_33679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33679__$1,(23),out,inst_33619);
} else {
if((state_val_33680 === (1))){
var inst_33593 = calc_state();
var inst_33594 = cljs.core.__destructure_map(inst_33593);
var inst_33595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33594,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33594,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33594,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33598 = inst_33593;
var state_33679__$1 = (function (){var statearr_33687 = state_33679;
(statearr_33687[(8)] = inst_33595);

(statearr_33687[(9)] = inst_33596);

(statearr_33687[(10)] = inst_33597);

(statearr_33687[(11)] = inst_33598);

return statearr_33687;
})();
var statearr_33688_35914 = state_33679__$1;
(statearr_33688_35914[(2)] = null);

(statearr_33688_35914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (24))){
var inst_33606 = (state_33679[(12)]);
var inst_33598 = inst_33606;
var state_33679__$1 = (function (){var statearr_33689 = state_33679;
(statearr_33689[(11)] = inst_33598);

return statearr_33689;
})();
var statearr_33690_35915 = state_33679__$1;
(statearr_33690_35915[(2)] = null);

(statearr_33690_35915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (4))){
var inst_33619 = (state_33679[(7)]);
var inst_33625 = (state_33679[(13)]);
var inst_33618 = (state_33679[(2)]);
var inst_33619__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33618,(0),null);
var inst_33620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33618,(1),null);
var inst_33625__$1 = (inst_33619__$1 == null);
var state_33679__$1 = (function (){var statearr_33698 = state_33679;
(statearr_33698[(7)] = inst_33619__$1);

(statearr_33698[(14)] = inst_33620);

(statearr_33698[(13)] = inst_33625__$1);

return statearr_33698;
})();
if(cljs.core.truth_(inst_33625__$1)){
var statearr_33704_35918 = state_33679__$1;
(statearr_33704_35918[(1)] = (5));

} else {
var statearr_33705_35919 = state_33679__$1;
(statearr_33705_35919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (15))){
var inst_33607 = (state_33679[(15)]);
var inst_33649 = (state_33679[(16)]);
var inst_33649__$1 = cljs.core.empty_QMARK_(inst_33607);
var state_33679__$1 = (function (){var statearr_33710 = state_33679;
(statearr_33710[(16)] = inst_33649__$1);

return statearr_33710;
})();
if(inst_33649__$1){
var statearr_33711_35920 = state_33679__$1;
(statearr_33711_35920[(1)] = (17));

} else {
var statearr_33712_35921 = state_33679__$1;
(statearr_33712_35921[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (21))){
var inst_33606 = (state_33679[(12)]);
var inst_33598 = inst_33606;
var state_33679__$1 = (function (){var statearr_33714 = state_33679;
(statearr_33714[(11)] = inst_33598);

return statearr_33714;
})();
var statearr_33715_35923 = state_33679__$1;
(statearr_33715_35923[(2)] = null);

(statearr_33715_35923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (13))){
var inst_33641 = (state_33679[(2)]);
var inst_33642 = calc_state();
var inst_33598 = inst_33642;
var state_33679__$1 = (function (){var statearr_33718 = state_33679;
(statearr_33718[(17)] = inst_33641);

(statearr_33718[(11)] = inst_33598);

return statearr_33718;
})();
var statearr_33720_35925 = state_33679__$1;
(statearr_33720_35925[(2)] = null);

(statearr_33720_35925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (22))){
var inst_33670 = (state_33679[(2)]);
var state_33679__$1 = state_33679;
var statearr_33729_35926 = state_33679__$1;
(statearr_33729_35926[(2)] = inst_33670);

(statearr_33729_35926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (6))){
var inst_33620 = (state_33679[(14)]);
var inst_33632 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33620,change);
var state_33679__$1 = state_33679;
var statearr_33734_35928 = state_33679__$1;
(statearr_33734_35928[(2)] = inst_33632);

(statearr_33734_35928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (25))){
var state_33679__$1 = state_33679;
var statearr_33739_35929 = state_33679__$1;
(statearr_33739_35929[(2)] = null);

(statearr_33739_35929[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (17))){
var inst_33608 = (state_33679[(18)]);
var inst_33620 = (state_33679[(14)]);
var inst_33651 = (inst_33608.cljs$core$IFn$_invoke$arity$1 ? inst_33608.cljs$core$IFn$_invoke$arity$1(inst_33620) : inst_33608.call(null,inst_33620));
var inst_33652 = cljs.core.not(inst_33651);
var state_33679__$1 = state_33679;
var statearr_33744_35933 = state_33679__$1;
(statearr_33744_35933[(2)] = inst_33652);

(statearr_33744_35933[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (3))){
var inst_33674 = (state_33679[(2)]);
var state_33679__$1 = state_33679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33679__$1,inst_33674);
} else {
if((state_val_33680 === (12))){
var state_33679__$1 = state_33679;
var statearr_33749_35935 = state_33679__$1;
(statearr_33749_35935[(2)] = null);

(statearr_33749_35935[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (2))){
var inst_33598 = (state_33679[(11)]);
var inst_33606 = (state_33679[(12)]);
var inst_33606__$1 = cljs.core.__destructure_map(inst_33598);
var inst_33607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33606__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33606__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33606__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33679__$1 = (function (){var statearr_33753 = state_33679;
(statearr_33753[(12)] = inst_33606__$1);

(statearr_33753[(15)] = inst_33607);

(statearr_33753[(18)] = inst_33608);

return statearr_33753;
})();
return cljs.core.async.ioc_alts_BANG_(state_33679__$1,(4),inst_33609);
} else {
if((state_val_33680 === (23))){
var inst_33660 = (state_33679[(2)]);
var state_33679__$1 = state_33679;
if(cljs.core.truth_(inst_33660)){
var statearr_33758_35938 = state_33679__$1;
(statearr_33758_35938[(1)] = (24));

} else {
var statearr_33759_35939 = state_33679__$1;
(statearr_33759_35939[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (19))){
var inst_33655 = (state_33679[(2)]);
var state_33679__$1 = state_33679;
var statearr_33760_35940 = state_33679__$1;
(statearr_33760_35940[(2)] = inst_33655);

(statearr_33760_35940[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (11))){
var inst_33620 = (state_33679[(14)]);
var inst_33638 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33620);
var state_33679__$1 = state_33679;
var statearr_33765_35944 = state_33679__$1;
(statearr_33765_35944[(2)] = inst_33638);

(statearr_33765_35944[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (9))){
var inst_33607 = (state_33679[(15)]);
var inst_33620 = (state_33679[(14)]);
var inst_33646 = (state_33679[(19)]);
var inst_33646__$1 = (inst_33607.cljs$core$IFn$_invoke$arity$1 ? inst_33607.cljs$core$IFn$_invoke$arity$1(inst_33620) : inst_33607.call(null,inst_33620));
var state_33679__$1 = (function (){var statearr_33775 = state_33679;
(statearr_33775[(19)] = inst_33646__$1);

return statearr_33775;
})();
if(cljs.core.truth_(inst_33646__$1)){
var statearr_33776_35951 = state_33679__$1;
(statearr_33776_35951[(1)] = (14));

} else {
var statearr_33777_35952 = state_33679__$1;
(statearr_33777_35952[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (5))){
var inst_33625 = (state_33679[(13)]);
var state_33679__$1 = state_33679;
var statearr_33778_35959 = state_33679__$1;
(statearr_33778_35959[(2)] = inst_33625);

(statearr_33778_35959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (14))){
var inst_33646 = (state_33679[(19)]);
var state_33679__$1 = state_33679;
var statearr_33779_35960 = state_33679__$1;
(statearr_33779_35960[(2)] = inst_33646);

(statearr_33779_35960[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (26))){
var inst_33665 = (state_33679[(2)]);
var state_33679__$1 = state_33679;
var statearr_33780_35963 = state_33679__$1;
(statearr_33780_35963[(2)] = inst_33665);

(statearr_33780_35963[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (16))){
var inst_33657 = (state_33679[(2)]);
var state_33679__$1 = state_33679;
if(cljs.core.truth_(inst_33657)){
var statearr_33781_35964 = state_33679__$1;
(statearr_33781_35964[(1)] = (20));

} else {
var statearr_33782_35965 = state_33679__$1;
(statearr_33782_35965[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (10))){
var inst_33672 = (state_33679[(2)]);
var state_33679__$1 = state_33679;
var statearr_33783_35967 = state_33679__$1;
(statearr_33783_35967[(2)] = inst_33672);

(statearr_33783_35967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (18))){
var inst_33649 = (state_33679[(16)]);
var state_33679__$1 = state_33679;
var statearr_33784_35968 = state_33679__$1;
(statearr_33784_35968[(2)] = inst_33649);

(statearr_33784_35968[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (8))){
var inst_33619 = (state_33679[(7)]);
var inst_33636 = (inst_33619 == null);
var state_33679__$1 = state_33679;
if(cljs.core.truth_(inst_33636)){
var statearr_33785_35972 = state_33679__$1;
(statearr_33785_35972[(1)] = (11));

} else {
var statearr_33786_35977 = state_33679__$1;
(statearr_33786_35977[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30107__auto__ = null;
var cljs$core$async$mix_$_state_machine__30107__auto____0 = (function (){
var statearr_33787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33787[(0)] = cljs$core$async$mix_$_state_machine__30107__auto__);

(statearr_33787[(1)] = (1));

return statearr_33787;
});
var cljs$core$async$mix_$_state_machine__30107__auto____1 = (function (state_33679){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_33679);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e33792){var ex__30110__auto__ = e33792;
var statearr_33793_35979 = state_33679;
(statearr_33793_35979[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_33679[(4)]))){
var statearr_33794_35982 = state_33679;
(statearr_33794_35982[(1)] = cljs.core.first((state_33679[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35985 = state_33679;
state_33679 = G__35985;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30107__auto__ = function(state_33679){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30107__auto____1.call(this,state_33679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30107__auto____0;
cljs$core$async$mix_$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30107__auto____1;
return cljs$core$async$mix_$_state_machine__30107__auto__;
})()
})();
var state__31341__auto__ = (function (){var statearr_33796 = f__31340__auto__();
(statearr_33796[(6)] = c__31339__auto___35903);

return statearr_33796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35989 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5374__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5372__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35989(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36001 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5374__auto__.call(null,p,v,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5372__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_36001(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36014 = (function() {
var G__36015 = null;
var G__36015__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5374__auto__.call(null,p));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5372__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__36015__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5374__auto__.call(null,p,v));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5372__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__36015 = function(p,v){
switch(arguments.length){
case 1:
return G__36015__1.call(this,p);
case 2:
return G__36015__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36015.cljs$core$IFn$_invoke$arity$1 = G__36015__1;
G__36015.cljs$core$IFn$_invoke$arity$2 = G__36015__2;
return G__36015;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33813 = arguments.length;
switch (G__33813) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36014(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36014(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33847 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33848){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33848 = meta33848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33849,meta33848__$1){
var self__ = this;
var _33849__$1 = this;
return (new cljs.core.async.t_cljs$core$async33847(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33848__$1));
}));

(cljs.core.async.t_cljs$core$async33847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33849){
var self__ = this;
var _33849__$1 = this;
return self__.meta33848;
}));

(cljs.core.async.t_cljs$core$async33847.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33847.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33847.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33847.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33847.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33847.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33848","meta33848",956364326,null)], null);
}));

(cljs.core.async.t_cljs$core$async33847.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33847");

(cljs.core.async.t_cljs$core$async33847.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33847");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33847.
 */
cljs.core.async.__GT_t_cljs$core$async33847 = (function cljs$core$async$__GT_t_cljs$core$async33847(ch,topic_fn,buf_fn,mults,ensure_mult,meta33848){
return (new cljs.core.async.t_cljs$core$async33847(ch,topic_fn,buf_fn,mults,ensure_mult,meta33848));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33833 = arguments.length;
switch (G__33833) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33822_SHARP_){
if(cljs.core.truth_((p1__33822_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33822_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33822_SHARP_.call(null,topic)))){
return p1__33822_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33822_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33847(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__31339__auto___36042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = (function (state_33967){
var state_val_33972 = (state_33967[(1)]);
if((state_val_33972 === (7))){
var inst_33954 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_34002_36044 = state_33967__$1;
(statearr_34002_36044[(2)] = inst_33954);

(statearr_34002_36044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (20))){
var state_33967__$1 = state_33967;
var statearr_34004_36045 = state_33967__$1;
(statearr_34004_36045[(2)] = null);

(statearr_34004_36045[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (1))){
var state_33967__$1 = state_33967;
var statearr_34005_36046 = state_33967__$1;
(statearr_34005_36046[(2)] = null);

(statearr_34005_36046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (24))){
var inst_33930 = (state_33967[(7)]);
var inst_33943 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33930);
var state_33967__$1 = state_33967;
var statearr_34011_36047 = state_33967__$1;
(statearr_34011_36047[(2)] = inst_33943);

(statearr_34011_36047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (4))){
var inst_33876 = (state_33967[(8)]);
var inst_33876__$1 = (state_33967[(2)]);
var inst_33878 = (inst_33876__$1 == null);
var state_33967__$1 = (function (){var statearr_34013 = state_33967;
(statearr_34013[(8)] = inst_33876__$1);

return statearr_34013;
})();
if(cljs.core.truth_(inst_33878)){
var statearr_34014_36048 = state_33967__$1;
(statearr_34014_36048[(1)] = (5));

} else {
var statearr_34015_36049 = state_33967__$1;
(statearr_34015_36049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (15))){
var inst_33924 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_34016_36050 = state_33967__$1;
(statearr_34016_36050[(2)] = inst_33924);

(statearr_34016_36050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (21))){
var inst_33948 = (state_33967[(2)]);
var state_33967__$1 = (function (){var statearr_34017 = state_33967;
(statearr_34017[(9)] = inst_33948);

return statearr_34017;
})();
var statearr_34018_36055 = state_33967__$1;
(statearr_34018_36055[(2)] = null);

(statearr_34018_36055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (13))){
var inst_33902 = (state_33967[(10)]);
var inst_33904 = cljs.core.chunked_seq_QMARK_(inst_33902);
var state_33967__$1 = state_33967;
if(inst_33904){
var statearr_34021_36063 = state_33967__$1;
(statearr_34021_36063[(1)] = (16));

} else {
var statearr_34024_36064 = state_33967__$1;
(statearr_34024_36064[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (22))){
var inst_33940 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
if(cljs.core.truth_(inst_33940)){
var statearr_34032_36071 = state_33967__$1;
(statearr_34032_36071[(1)] = (23));

} else {
var statearr_34034_36074 = state_33967__$1;
(statearr_34034_36074[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (6))){
var inst_33876 = (state_33967[(8)]);
var inst_33930 = (state_33967[(7)]);
var inst_33932 = (state_33967[(11)]);
var inst_33930__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33876) : topic_fn.call(null,inst_33876));
var inst_33931 = cljs.core.deref(mults);
var inst_33932__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33931,inst_33930__$1);
var state_33967__$1 = (function (){var statearr_34036 = state_33967;
(statearr_34036[(7)] = inst_33930__$1);

(statearr_34036[(11)] = inst_33932__$1);

return statearr_34036;
})();
if(cljs.core.truth_(inst_33932__$1)){
var statearr_34037_36079 = state_33967__$1;
(statearr_34037_36079[(1)] = (19));

} else {
var statearr_34038_36080 = state_33967__$1;
(statearr_34038_36080[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (25))){
var inst_33945 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_34039_36085 = state_33967__$1;
(statearr_34039_36085[(2)] = inst_33945);

(statearr_34039_36085[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (17))){
var inst_33902 = (state_33967[(10)]);
var inst_33914 = cljs.core.first(inst_33902);
var inst_33915 = cljs.core.async.muxch_STAR_(inst_33914);
var inst_33916 = cljs.core.async.close_BANG_(inst_33915);
var inst_33917 = cljs.core.next(inst_33902);
var inst_33887 = inst_33917;
var inst_33888 = null;
var inst_33889 = (0);
var inst_33890 = (0);
var state_33967__$1 = (function (){var statearr_34040 = state_33967;
(statearr_34040[(12)] = inst_33916);

(statearr_34040[(13)] = inst_33887);

(statearr_34040[(14)] = inst_33888);

(statearr_34040[(15)] = inst_33889);

(statearr_34040[(16)] = inst_33890);

return statearr_34040;
})();
var statearr_34041_36090 = state_33967__$1;
(statearr_34041_36090[(2)] = null);

(statearr_34041_36090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (3))){
var inst_33956 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33967__$1,inst_33956);
} else {
if((state_val_33972 === (12))){
var inst_33926 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_34042_36092 = state_33967__$1;
(statearr_34042_36092[(2)] = inst_33926);

(statearr_34042_36092[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (2))){
var state_33967__$1 = state_33967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33967__$1,(4),ch);
} else {
if((state_val_33972 === (23))){
var state_33967__$1 = state_33967;
var statearr_34043_36093 = state_33967__$1;
(statearr_34043_36093[(2)] = null);

(statearr_34043_36093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (19))){
var inst_33932 = (state_33967[(11)]);
var inst_33876 = (state_33967[(8)]);
var inst_33936 = cljs.core.async.muxch_STAR_(inst_33932);
var state_33967__$1 = state_33967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33967__$1,(22),inst_33936,inst_33876);
} else {
if((state_val_33972 === (11))){
var inst_33887 = (state_33967[(13)]);
var inst_33902 = (state_33967[(10)]);
var inst_33902__$1 = cljs.core.seq(inst_33887);
var state_33967__$1 = (function (){var statearr_34047 = state_33967;
(statearr_34047[(10)] = inst_33902__$1);

return statearr_34047;
})();
if(inst_33902__$1){
var statearr_34048_36102 = state_33967__$1;
(statearr_34048_36102[(1)] = (13));

} else {
var statearr_34049_36103 = state_33967__$1;
(statearr_34049_36103[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (9))){
var inst_33928 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_34052_36115 = state_33967__$1;
(statearr_34052_36115[(2)] = inst_33928);

(statearr_34052_36115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (5))){
var inst_33884 = cljs.core.deref(mults);
var inst_33885 = cljs.core.vals(inst_33884);
var inst_33886 = cljs.core.seq(inst_33885);
var inst_33887 = inst_33886;
var inst_33888 = null;
var inst_33889 = (0);
var inst_33890 = (0);
var state_33967__$1 = (function (){var statearr_34055 = state_33967;
(statearr_34055[(13)] = inst_33887);

(statearr_34055[(14)] = inst_33888);

(statearr_34055[(15)] = inst_33889);

(statearr_34055[(16)] = inst_33890);

return statearr_34055;
})();
var statearr_34057_36116 = state_33967__$1;
(statearr_34057_36116[(2)] = null);

(statearr_34057_36116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (14))){
var state_33967__$1 = state_33967;
var statearr_34062_36121 = state_33967__$1;
(statearr_34062_36121[(2)] = null);

(statearr_34062_36121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (16))){
var inst_33902 = (state_33967[(10)]);
var inst_33908 = cljs.core.chunk_first(inst_33902);
var inst_33910 = cljs.core.chunk_rest(inst_33902);
var inst_33911 = cljs.core.count(inst_33908);
var inst_33887 = inst_33910;
var inst_33888 = inst_33908;
var inst_33889 = inst_33911;
var inst_33890 = (0);
var state_33967__$1 = (function (){var statearr_34064 = state_33967;
(statearr_34064[(13)] = inst_33887);

(statearr_34064[(14)] = inst_33888);

(statearr_34064[(15)] = inst_33889);

(statearr_34064[(16)] = inst_33890);

return statearr_34064;
})();
var statearr_34065_36137 = state_33967__$1;
(statearr_34065_36137[(2)] = null);

(statearr_34065_36137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (10))){
var inst_33888 = (state_33967[(14)]);
var inst_33890 = (state_33967[(16)]);
var inst_33887 = (state_33967[(13)]);
var inst_33889 = (state_33967[(15)]);
var inst_33896 = cljs.core._nth(inst_33888,inst_33890);
var inst_33897 = cljs.core.async.muxch_STAR_(inst_33896);
var inst_33898 = cljs.core.async.close_BANG_(inst_33897);
var inst_33899 = (inst_33890 + (1));
var tmp34059 = inst_33887;
var tmp34060 = inst_33888;
var tmp34061 = inst_33889;
var inst_33887__$1 = tmp34059;
var inst_33888__$1 = tmp34060;
var inst_33889__$1 = tmp34061;
var inst_33890__$1 = inst_33899;
var state_33967__$1 = (function (){var statearr_34068 = state_33967;
(statearr_34068[(17)] = inst_33898);

(statearr_34068[(13)] = inst_33887__$1);

(statearr_34068[(14)] = inst_33888__$1);

(statearr_34068[(15)] = inst_33889__$1);

(statearr_34068[(16)] = inst_33890__$1);

return statearr_34068;
})();
var statearr_34069_36144 = state_33967__$1;
(statearr_34069_36144[(2)] = null);

(statearr_34069_36144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (18))){
var inst_33921 = (state_33967[(2)]);
var state_33967__$1 = state_33967;
var statearr_34071_36145 = state_33967__$1;
(statearr_34071_36145[(2)] = inst_33921);

(statearr_34071_36145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33972 === (8))){
var inst_33890 = (state_33967[(16)]);
var inst_33889 = (state_33967[(15)]);
var inst_33892 = (inst_33890 < inst_33889);
var inst_33893 = inst_33892;
var state_33967__$1 = state_33967;
if(cljs.core.truth_(inst_33893)){
var statearr_34072_36150 = state_33967__$1;
(statearr_34072_36150[(1)] = (10));

} else {
var statearr_34073_36151 = state_33967__$1;
(statearr_34073_36151[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30107__auto__ = null;
var cljs$core$async$state_machine__30107__auto____0 = (function (){
var statearr_34075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34075[(0)] = cljs$core$async$state_machine__30107__auto__);

(statearr_34075[(1)] = (1));

return statearr_34075;
});
var cljs$core$async$state_machine__30107__auto____1 = (function (state_33967){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_33967);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e34080){var ex__30110__auto__ = e34080;
var statearr_34081_36166 = state_33967;
(statearr_34081_36166[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_33967[(4)]))){
var statearr_34083_36167 = state_33967;
(statearr_34083_36167[(1)] = cljs.core.first((state_33967[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36174 = state_33967;
state_33967 = G__36174;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$state_machine__30107__auto__ = function(state_33967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30107__auto____1.call(this,state_33967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30107__auto____0;
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30107__auto____1;
return cljs$core$async$state_machine__30107__auto__;
})()
})();
var state__31341__auto__ = (function (){var statearr_34088 = f__31340__auto__();
(statearr_34088[(6)] = c__31339__auto___36042);

return statearr_34088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34092 = arguments.length;
switch (G__34092) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34100 = arguments.length;
switch (G__34100) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34107 = arguments.length;
switch (G__34107) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__31339__auto___36187 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = (function (state_34206){
var state_val_34207 = (state_34206[(1)]);
if((state_val_34207 === (7))){
var state_34206__$1 = state_34206;
var statearr_34213_36188 = state_34206__$1;
(statearr_34213_36188[(2)] = null);

(statearr_34213_36188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (1))){
var state_34206__$1 = state_34206;
var statearr_34214_36189 = state_34206__$1;
(statearr_34214_36189[(2)] = null);

(statearr_34214_36189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (4))){
var inst_34137 = (state_34206[(7)]);
var inst_34136 = (state_34206[(8)]);
var inst_34139 = (inst_34137 < inst_34136);
var state_34206__$1 = state_34206;
if(cljs.core.truth_(inst_34139)){
var statearr_34218_36190 = state_34206__$1;
(statearr_34218_36190[(1)] = (6));

} else {
var statearr_34219_36191 = state_34206__$1;
(statearr_34219_36191[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (15))){
var inst_34185 = (state_34206[(9)]);
var inst_34190 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34185);
var state_34206__$1 = state_34206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34206__$1,(17),out,inst_34190);
} else {
if((state_val_34207 === (13))){
var inst_34185 = (state_34206[(9)]);
var inst_34185__$1 = (state_34206[(2)]);
var inst_34186 = cljs.core.some(cljs.core.nil_QMARK_,inst_34185__$1);
var state_34206__$1 = (function (){var statearr_34220 = state_34206;
(statearr_34220[(9)] = inst_34185__$1);

return statearr_34220;
})();
if(cljs.core.truth_(inst_34186)){
var statearr_34224_36193 = state_34206__$1;
(statearr_34224_36193[(1)] = (14));

} else {
var statearr_34225_36194 = state_34206__$1;
(statearr_34225_36194[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (6))){
var state_34206__$1 = state_34206;
var statearr_34226_36195 = state_34206__$1;
(statearr_34226_36195[(2)] = null);

(statearr_34226_36195[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (17))){
var inst_34192 = (state_34206[(2)]);
var state_34206__$1 = (function (){var statearr_34231 = state_34206;
(statearr_34231[(10)] = inst_34192);

return statearr_34231;
})();
var statearr_34232_36197 = state_34206__$1;
(statearr_34232_36197[(2)] = null);

(statearr_34232_36197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (3))){
var inst_34200 = (state_34206[(2)]);
var state_34206__$1 = state_34206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34206__$1,inst_34200);
} else {
if((state_val_34207 === (12))){
var _ = (function (){var statearr_34233 = state_34206;
(statearr_34233[(4)] = cljs.core.rest((state_34206[(4)])));

return statearr_34233;
})();
var state_34206__$1 = state_34206;
var ex34230 = (state_34206__$1[(2)]);
var statearr_34234_36198 = state_34206__$1;
(statearr_34234_36198[(5)] = ex34230);


if((ex34230 instanceof Object)){
var statearr_34235_36199 = state_34206__$1;
(statearr_34235_36199[(1)] = (11));

(statearr_34235_36199[(5)] = null);

} else {
throw ex34230;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (2))){
var inst_34134 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34136 = cnt;
var inst_34137 = (0);
var state_34206__$1 = (function (){var statearr_34236 = state_34206;
(statearr_34236[(11)] = inst_34134);

(statearr_34236[(8)] = inst_34136);

(statearr_34236[(7)] = inst_34137);

return statearr_34236;
})();
var statearr_34237_36200 = state_34206__$1;
(statearr_34237_36200[(2)] = null);

(statearr_34237_36200[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (11))){
var inst_34149 = (state_34206[(2)]);
var inst_34150 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34206__$1 = (function (){var statearr_34238 = state_34206;
(statearr_34238[(12)] = inst_34149);

return statearr_34238;
})();
var statearr_34240_36206 = state_34206__$1;
(statearr_34240_36206[(2)] = inst_34150);

(statearr_34240_36206[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (9))){
var inst_34137 = (state_34206[(7)]);
var _ = (function (){var statearr_34243 = state_34206;
(statearr_34243[(4)] = cljs.core.cons((12),(state_34206[(4)])));

return statearr_34243;
})();
var inst_34164 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34137) : chs__$1.call(null,inst_34137));
var inst_34165 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34137) : done.call(null,inst_34137));
var inst_34166 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34164,inst_34165);
var ___$1 = (function (){var statearr_34247 = state_34206;
(statearr_34247[(4)] = cljs.core.rest((state_34206[(4)])));

return statearr_34247;
})();
var state_34206__$1 = state_34206;
var statearr_34248_36209 = state_34206__$1;
(statearr_34248_36209[(2)] = inst_34166);

(statearr_34248_36209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (5))){
var inst_34183 = (state_34206[(2)]);
var state_34206__$1 = (function (){var statearr_34249 = state_34206;
(statearr_34249[(13)] = inst_34183);

return statearr_34249;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34206__$1,(13),dchan);
} else {
if((state_val_34207 === (14))){
var inst_34188 = cljs.core.async.close_BANG_(out);
var state_34206__$1 = state_34206;
var statearr_34251_36217 = state_34206__$1;
(statearr_34251_36217[(2)] = inst_34188);

(statearr_34251_36217[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (16))){
var inst_34195 = (state_34206[(2)]);
var state_34206__$1 = state_34206;
var statearr_34252_36218 = state_34206__$1;
(statearr_34252_36218[(2)] = inst_34195);

(statearr_34252_36218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (10))){
var inst_34137 = (state_34206[(7)]);
var inst_34169 = (state_34206[(2)]);
var inst_34176 = (inst_34137 + (1));
var inst_34137__$1 = inst_34176;
var state_34206__$1 = (function (){var statearr_34253 = state_34206;
(statearr_34253[(14)] = inst_34169);

(statearr_34253[(7)] = inst_34137__$1);

return statearr_34253;
})();
var statearr_34254_36222 = state_34206__$1;
(statearr_34254_36222[(2)] = null);

(statearr_34254_36222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34207 === (8))){
var inst_34181 = (state_34206[(2)]);
var state_34206__$1 = state_34206;
var statearr_34255_36224 = state_34206__$1;
(statearr_34255_36224[(2)] = inst_34181);

(statearr_34255_36224[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30107__auto__ = null;
var cljs$core$async$state_machine__30107__auto____0 = (function (){
var statearr_34256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34256[(0)] = cljs$core$async$state_machine__30107__auto__);

(statearr_34256[(1)] = (1));

return statearr_34256;
});
var cljs$core$async$state_machine__30107__auto____1 = (function (state_34206){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_34206);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e34257){var ex__30110__auto__ = e34257;
var statearr_34258_36227 = state_34206;
(statearr_34258_36227[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_34206[(4)]))){
var statearr_34259_36228 = state_34206;
(statearr_34259_36228[(1)] = cljs.core.first((state_34206[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36229 = state_34206;
state_34206 = G__36229;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$state_machine__30107__auto__ = function(state_34206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30107__auto____1.call(this,state_34206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30107__auto____0;
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30107__auto____1;
return cljs$core$async$state_machine__30107__auto__;
})()
})();
var state__31341__auto__ = (function (){var statearr_34260 = f__31340__auto__();
(statearr_34260[(6)] = c__31339__auto___36187);

return statearr_34260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34266 = arguments.length;
switch (G__34266) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31339__auto___36231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = (function (state_34324){
var state_val_34325 = (state_34324[(1)]);
if((state_val_34325 === (7))){
var inst_34290 = (state_34324[(7)]);
var inst_34294 = (state_34324[(8)]);
var inst_34290__$1 = (state_34324[(2)]);
var inst_34294__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34290__$1,(0),null);
var inst_34296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34290__$1,(1),null);
var inst_34299 = (inst_34294__$1 == null);
var state_34324__$1 = (function (){var statearr_34328 = state_34324;
(statearr_34328[(7)] = inst_34290__$1);

(statearr_34328[(8)] = inst_34294__$1);

(statearr_34328[(9)] = inst_34296);

return statearr_34328;
})();
if(cljs.core.truth_(inst_34299)){
var statearr_34329_36232 = state_34324__$1;
(statearr_34329_36232[(1)] = (8));

} else {
var statearr_34330_36233 = state_34324__$1;
(statearr_34330_36233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (1))){
var inst_34274 = cljs.core.vec(chs);
var inst_34275 = inst_34274;
var state_34324__$1 = (function (){var statearr_34331 = state_34324;
(statearr_34331[(10)] = inst_34275);

return statearr_34331;
})();
var statearr_34332_36234 = state_34324__$1;
(statearr_34332_36234[(2)] = null);

(statearr_34332_36234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (4))){
var inst_34275 = (state_34324[(10)]);
var state_34324__$1 = state_34324;
return cljs.core.async.ioc_alts_BANG_(state_34324__$1,(7),inst_34275);
} else {
if((state_val_34325 === (6))){
var inst_34317 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
var statearr_34339_36239 = state_34324__$1;
(statearr_34339_36239[(2)] = inst_34317);

(statearr_34339_36239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (3))){
var inst_34322 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34324__$1,inst_34322);
} else {
if((state_val_34325 === (2))){
var inst_34275 = (state_34324[(10)]);
var inst_34279 = cljs.core.count(inst_34275);
var inst_34280 = (inst_34279 > (0));
var state_34324__$1 = state_34324;
if(cljs.core.truth_(inst_34280)){
var statearr_34341_36241 = state_34324__$1;
(statearr_34341_36241[(1)] = (4));

} else {
var statearr_34342_36242 = state_34324__$1;
(statearr_34342_36242[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (11))){
var inst_34275 = (state_34324[(10)]);
var inst_34310 = (state_34324[(2)]);
var tmp34340 = inst_34275;
var inst_34275__$1 = tmp34340;
var state_34324__$1 = (function (){var statearr_34348 = state_34324;
(statearr_34348[(11)] = inst_34310);

(statearr_34348[(10)] = inst_34275__$1);

return statearr_34348;
})();
var statearr_34349_36243 = state_34324__$1;
(statearr_34349_36243[(2)] = null);

(statearr_34349_36243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (9))){
var inst_34294 = (state_34324[(8)]);
var state_34324__$1 = state_34324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34324__$1,(11),out,inst_34294);
} else {
if((state_val_34325 === (5))){
var inst_34315 = cljs.core.async.close_BANG_(out);
var state_34324__$1 = state_34324;
var statearr_34353_36244 = state_34324__$1;
(statearr_34353_36244[(2)] = inst_34315);

(statearr_34353_36244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (10))){
var inst_34313 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
var statearr_34364_36249 = state_34324__$1;
(statearr_34364_36249[(2)] = inst_34313);

(statearr_34364_36249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (8))){
var inst_34275 = (state_34324[(10)]);
var inst_34290 = (state_34324[(7)]);
var inst_34294 = (state_34324[(8)]);
var inst_34296 = (state_34324[(9)]);
var inst_34301 = (function (){var cs = inst_34275;
var vec__34284 = inst_34290;
var v = inst_34294;
var c = inst_34296;
return (function (p1__34261_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34261_SHARP_);
});
})();
var inst_34302 = cljs.core.filterv(inst_34301,inst_34275);
var inst_34275__$1 = inst_34302;
var state_34324__$1 = (function (){var statearr_34373 = state_34324;
(statearr_34373[(10)] = inst_34275__$1);

return statearr_34373;
})();
var statearr_34374_36253 = state_34324__$1;
(statearr_34374_36253[(2)] = null);

(statearr_34374_36253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30107__auto__ = null;
var cljs$core$async$state_machine__30107__auto____0 = (function (){
var statearr_34380 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34380[(0)] = cljs$core$async$state_machine__30107__auto__);

(statearr_34380[(1)] = (1));

return statearr_34380;
});
var cljs$core$async$state_machine__30107__auto____1 = (function (state_34324){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_34324);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e34385){var ex__30110__auto__ = e34385;
var statearr_34386_36259 = state_34324;
(statearr_34386_36259[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_34324[(4)]))){
var statearr_34390_36260 = state_34324;
(statearr_34390_36260[(1)] = cljs.core.first((state_34324[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36261 = state_34324;
state_34324 = G__36261;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$state_machine__30107__auto__ = function(state_34324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30107__auto____1.call(this,state_34324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30107__auto____0;
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30107__auto____1;
return cljs$core$async$state_machine__30107__auto__;
})()
})();
var state__31341__auto__ = (function (){var statearr_34393 = f__31340__auto__();
(statearr_34393[(6)] = c__31339__auto___36231);

return statearr_34393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34412 = arguments.length;
switch (G__34412) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31339__auto___36273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = (function (state_34451){
var state_val_34452 = (state_34451[(1)]);
if((state_val_34452 === (7))){
var inst_34429 = (state_34451[(7)]);
var inst_34429__$1 = (state_34451[(2)]);
var inst_34430 = (inst_34429__$1 == null);
var inst_34431 = cljs.core.not(inst_34430);
var state_34451__$1 = (function (){var statearr_34464 = state_34451;
(statearr_34464[(7)] = inst_34429__$1);

return statearr_34464;
})();
if(inst_34431){
var statearr_34471_36275 = state_34451__$1;
(statearr_34471_36275[(1)] = (8));

} else {
var statearr_34472_36281 = state_34451__$1;
(statearr_34472_36281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (1))){
var inst_34422 = (0);
var state_34451__$1 = (function (){var statearr_34476 = state_34451;
(statearr_34476[(8)] = inst_34422);

return statearr_34476;
})();
var statearr_34478_36282 = state_34451__$1;
(statearr_34478_36282[(2)] = null);

(statearr_34478_36282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (4))){
var state_34451__$1 = state_34451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34451__$1,(7),ch);
} else {
if((state_val_34452 === (6))){
var inst_34445 = (state_34451[(2)]);
var state_34451__$1 = state_34451;
var statearr_34479_36283 = state_34451__$1;
(statearr_34479_36283[(2)] = inst_34445);

(statearr_34479_36283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (3))){
var inst_34447 = (state_34451[(2)]);
var inst_34448 = cljs.core.async.close_BANG_(out);
var state_34451__$1 = (function (){var statearr_34484 = state_34451;
(statearr_34484[(9)] = inst_34447);

return statearr_34484;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34451__$1,inst_34448);
} else {
if((state_val_34452 === (2))){
var inst_34422 = (state_34451[(8)]);
var inst_34426 = (inst_34422 < n);
var state_34451__$1 = state_34451;
if(cljs.core.truth_(inst_34426)){
var statearr_34491_36284 = state_34451__$1;
(statearr_34491_36284[(1)] = (4));

} else {
var statearr_34492_36285 = state_34451__$1;
(statearr_34492_36285[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (11))){
var inst_34422 = (state_34451[(8)]);
var inst_34435 = (state_34451[(2)]);
var inst_34437 = (inst_34422 + (1));
var inst_34422__$1 = inst_34437;
var state_34451__$1 = (function (){var statearr_34493 = state_34451;
(statearr_34493[(10)] = inst_34435);

(statearr_34493[(8)] = inst_34422__$1);

return statearr_34493;
})();
var statearr_34497_36288 = state_34451__$1;
(statearr_34497_36288[(2)] = null);

(statearr_34497_36288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (9))){
var state_34451__$1 = state_34451;
var statearr_34499_36290 = state_34451__$1;
(statearr_34499_36290[(2)] = null);

(statearr_34499_36290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (5))){
var state_34451__$1 = state_34451;
var statearr_34504_36292 = state_34451__$1;
(statearr_34504_36292[(2)] = null);

(statearr_34504_36292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (10))){
var inst_34442 = (state_34451[(2)]);
var state_34451__$1 = state_34451;
var statearr_34524_36293 = state_34451__$1;
(statearr_34524_36293[(2)] = inst_34442);

(statearr_34524_36293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (8))){
var inst_34429 = (state_34451[(7)]);
var state_34451__$1 = state_34451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34451__$1,(11),out,inst_34429);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30107__auto__ = null;
var cljs$core$async$state_machine__30107__auto____0 = (function (){
var statearr_34532 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34532[(0)] = cljs$core$async$state_machine__30107__auto__);

(statearr_34532[(1)] = (1));

return statearr_34532;
});
var cljs$core$async$state_machine__30107__auto____1 = (function (state_34451){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_34451);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e34533){var ex__30110__auto__ = e34533;
var statearr_34534_36303 = state_34451;
(statearr_34534_36303[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_34451[(4)]))){
var statearr_34535_36304 = state_34451;
(statearr_34535_36304[(1)] = cljs.core.first((state_34451[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36305 = state_34451;
state_34451 = G__36305;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$state_machine__30107__auto__ = function(state_34451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30107__auto____1.call(this,state_34451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30107__auto____0;
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30107__auto____1;
return cljs$core$async$state_machine__30107__auto__;
})()
})();
var state__31341__auto__ = (function (){var statearr_34538 = f__31340__auto__();
(statearr_34538[(6)] = c__31339__auto___36273);

return statearr_34538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34549 = (function (f,ch,meta34543,_,fn1,meta34550){
this.f = f;
this.ch = ch;
this.meta34543 = meta34543;
this._ = _;
this.fn1 = fn1;
this.meta34550 = meta34550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34551,meta34550__$1){
var self__ = this;
var _34551__$1 = this;
return (new cljs.core.async.t_cljs$core$async34549(self__.f,self__.ch,self__.meta34543,self__._,self__.fn1,meta34550__$1));
}));

(cljs.core.async.t_cljs$core$async34549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34551){
var self__ = this;
var _34551__$1 = this;
return self__.meta34550;
}));

(cljs.core.async.t_cljs$core$async34549.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34549.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34549.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34549.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34539_SHARP_){
var G__34568 = (((p1__34539_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34539_SHARP_) : self__.f.call(null,p1__34539_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34568) : f1.call(null,G__34568));
});
}));

(cljs.core.async.t_cljs$core$async34549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34543","meta34543",978882012,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34542","cljs.core.async/t_cljs$core$async34542",-248069707,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34550","meta34550",100701655,null)], null);
}));

(cljs.core.async.t_cljs$core$async34549.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34549");

(cljs.core.async.t_cljs$core$async34549.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34549");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34549.
 */
cljs.core.async.__GT_t_cljs$core$async34549 = (function cljs$core$async$__GT_t_cljs$core$async34549(f,ch,meta34543,_,fn1,meta34550){
return (new cljs.core.async.t_cljs$core$async34549(f,ch,meta34543,_,fn1,meta34550));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34542 = (function (f,ch,meta34543){
this.f = f;
this.ch = ch;
this.meta34543 = meta34543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34544,meta34543__$1){
var self__ = this;
var _34544__$1 = this;
return (new cljs.core.async.t_cljs$core$async34542(self__.f,self__.ch,meta34543__$1));
}));

(cljs.core.async.t_cljs$core$async34542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34544){
var self__ = this;
var _34544__$1 = this;
return self__.meta34543;
}));

(cljs.core.async.t_cljs$core$async34542.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34542.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34542.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34542.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34542.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async34549(self__.f,self__.ch,self__.meta34543,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34573 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34573) : self__.f.call(null,G__34573));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34542.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34542.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34543","meta34543",978882012,null)], null);
}));

(cljs.core.async.t_cljs$core$async34542.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34542");

(cljs.core.async.t_cljs$core$async34542.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34542");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34542.
 */
cljs.core.async.__GT_t_cljs$core$async34542 = (function cljs$core$async$__GT_t_cljs$core$async34542(f,ch,meta34543){
return (new cljs.core.async.t_cljs$core$async34542(f,ch,meta34543));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34542(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34585 = (function (f,ch,meta34586){
this.f = f;
this.ch = ch;
this.meta34586 = meta34586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34587,meta34586__$1){
var self__ = this;
var _34587__$1 = this;
return (new cljs.core.async.t_cljs$core$async34585(self__.f,self__.ch,meta34586__$1));
}));

(cljs.core.async.t_cljs$core$async34585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34587){
var self__ = this;
var _34587__$1 = this;
return self__.meta34586;
}));

(cljs.core.async.t_cljs$core$async34585.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34585.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34585.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34585.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34585.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34585.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34586","meta34586",-1899657118,null)], null);
}));

(cljs.core.async.t_cljs$core$async34585.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34585");

(cljs.core.async.t_cljs$core$async34585.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34585");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34585.
 */
cljs.core.async.__GT_t_cljs$core$async34585 = (function cljs$core$async$__GT_t_cljs$core$async34585(f,ch,meta34586){
return (new cljs.core.async.t_cljs$core$async34585(f,ch,meta34586));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34585(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34603 = (function (p,ch,meta34604){
this.p = p;
this.ch = ch;
this.meta34604 = meta34604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34605,meta34604__$1){
var self__ = this;
var _34605__$1 = this;
return (new cljs.core.async.t_cljs$core$async34603(self__.p,self__.ch,meta34604__$1));
}));

(cljs.core.async.t_cljs$core$async34603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34605){
var self__ = this;
var _34605__$1 = this;
return self__.meta34604;
}));

(cljs.core.async.t_cljs$core$async34603.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34603.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34603.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34603.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34603.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34603.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34603.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34604","meta34604",1392069369,null)], null);
}));

(cljs.core.async.t_cljs$core$async34603.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34603");

(cljs.core.async.t_cljs$core$async34603.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34603");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34603.
 */
cljs.core.async.__GT_t_cljs$core$async34603 = (function cljs$core$async$__GT_t_cljs$core$async34603(p,ch,meta34604){
return (new cljs.core.async.t_cljs$core$async34603(p,ch,meta34604));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34603(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34632 = arguments.length;
switch (G__34632) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31339__auto___36308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = (function (state_34659){
var state_val_34660 = (state_34659[(1)]);
if((state_val_34660 === (7))){
var inst_34652 = (state_34659[(2)]);
var state_34659__$1 = state_34659;
var statearr_34663_36309 = state_34659__$1;
(statearr_34663_36309[(2)] = inst_34652);

(statearr_34663_36309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (1))){
var state_34659__$1 = state_34659;
var statearr_34670_36310 = state_34659__$1;
(statearr_34670_36310[(2)] = null);

(statearr_34670_36310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (4))){
var inst_34638 = (state_34659[(7)]);
var inst_34638__$1 = (state_34659[(2)]);
var inst_34639 = (inst_34638__$1 == null);
var state_34659__$1 = (function (){var statearr_34675 = state_34659;
(statearr_34675[(7)] = inst_34638__$1);

return statearr_34675;
})();
if(cljs.core.truth_(inst_34639)){
var statearr_34677_36311 = state_34659__$1;
(statearr_34677_36311[(1)] = (5));

} else {
var statearr_34678_36312 = state_34659__$1;
(statearr_34678_36312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (6))){
var inst_34638 = (state_34659[(7)]);
var inst_34643 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34638) : p.call(null,inst_34638));
var state_34659__$1 = state_34659;
if(cljs.core.truth_(inst_34643)){
var statearr_34680_36313 = state_34659__$1;
(statearr_34680_36313[(1)] = (8));

} else {
var statearr_34681_36314 = state_34659__$1;
(statearr_34681_36314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (3))){
var inst_34657 = (state_34659[(2)]);
var state_34659__$1 = state_34659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34659__$1,inst_34657);
} else {
if((state_val_34660 === (2))){
var state_34659__$1 = state_34659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34659__$1,(4),ch);
} else {
if((state_val_34660 === (11))){
var inst_34646 = (state_34659[(2)]);
var state_34659__$1 = state_34659;
var statearr_34683_36315 = state_34659__$1;
(statearr_34683_36315[(2)] = inst_34646);

(statearr_34683_36315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (9))){
var state_34659__$1 = state_34659;
var statearr_34685_36318 = state_34659__$1;
(statearr_34685_36318[(2)] = null);

(statearr_34685_36318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (5))){
var inst_34641 = cljs.core.async.close_BANG_(out);
var state_34659__$1 = state_34659;
var statearr_34687_36321 = state_34659__$1;
(statearr_34687_36321[(2)] = inst_34641);

(statearr_34687_36321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (10))){
var inst_34649 = (state_34659[(2)]);
var state_34659__$1 = (function (){var statearr_34690 = state_34659;
(statearr_34690[(8)] = inst_34649);

return statearr_34690;
})();
var statearr_34691_36322 = state_34659__$1;
(statearr_34691_36322[(2)] = null);

(statearr_34691_36322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (8))){
var inst_34638 = (state_34659[(7)]);
var state_34659__$1 = state_34659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34659__$1,(11),out,inst_34638);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30107__auto__ = null;
var cljs$core$async$state_machine__30107__auto____0 = (function (){
var statearr_34693 = [null,null,null,null,null,null,null,null,null];
(statearr_34693[(0)] = cljs$core$async$state_machine__30107__auto__);

(statearr_34693[(1)] = (1));

return statearr_34693;
});
var cljs$core$async$state_machine__30107__auto____1 = (function (state_34659){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_34659);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e34694){var ex__30110__auto__ = e34694;
var statearr_34695_36336 = state_34659;
(statearr_34695_36336[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_34659[(4)]))){
var statearr_34696_36337 = state_34659;
(statearr_34696_36337[(1)] = cljs.core.first((state_34659[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36342 = state_34659;
state_34659 = G__36342;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$state_machine__30107__auto__ = function(state_34659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30107__auto____1.call(this,state_34659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30107__auto____0;
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30107__auto____1;
return cljs$core$async$state_machine__30107__auto__;
})()
})();
var state__31341__auto__ = (function (){var statearr_34698 = f__31340__auto__();
(statearr_34698[(6)] = c__31339__auto___36308);

return statearr_34698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34718 = arguments.length;
switch (G__34718) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31339__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = (function (state_34812){
var state_val_34813 = (state_34812[(1)]);
if((state_val_34813 === (7))){
var inst_34803 = (state_34812[(2)]);
var state_34812__$1 = state_34812;
var statearr_34819_36347 = state_34812__$1;
(statearr_34819_36347[(2)] = inst_34803);

(statearr_34819_36347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (20))){
var inst_34771 = (state_34812[(7)]);
var inst_34784 = (state_34812[(2)]);
var inst_34785 = cljs.core.next(inst_34771);
var inst_34746 = inst_34785;
var inst_34747 = null;
var inst_34748 = (0);
var inst_34749 = (0);
var state_34812__$1 = (function (){var statearr_34824 = state_34812;
(statearr_34824[(8)] = inst_34784);

(statearr_34824[(9)] = inst_34746);

(statearr_34824[(10)] = inst_34747);

(statearr_34824[(11)] = inst_34748);

(statearr_34824[(12)] = inst_34749);

return statearr_34824;
})();
var statearr_34825_36348 = state_34812__$1;
(statearr_34825_36348[(2)] = null);

(statearr_34825_36348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (1))){
var state_34812__$1 = state_34812;
var statearr_34827_36349 = state_34812__$1;
(statearr_34827_36349[(2)] = null);

(statearr_34827_36349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (4))){
var inst_34734 = (state_34812[(13)]);
var inst_34734__$1 = (state_34812[(2)]);
var inst_34735 = (inst_34734__$1 == null);
var state_34812__$1 = (function (){var statearr_34828 = state_34812;
(statearr_34828[(13)] = inst_34734__$1);

return statearr_34828;
})();
if(cljs.core.truth_(inst_34735)){
var statearr_34829_36350 = state_34812__$1;
(statearr_34829_36350[(1)] = (5));

} else {
var statearr_34833_36351 = state_34812__$1;
(statearr_34833_36351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (15))){
var state_34812__$1 = state_34812;
var statearr_34837_36352 = state_34812__$1;
(statearr_34837_36352[(2)] = null);

(statearr_34837_36352[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (21))){
var state_34812__$1 = state_34812;
var statearr_34838_36353 = state_34812__$1;
(statearr_34838_36353[(2)] = null);

(statearr_34838_36353[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (13))){
var inst_34749 = (state_34812[(12)]);
var inst_34746 = (state_34812[(9)]);
var inst_34747 = (state_34812[(10)]);
var inst_34748 = (state_34812[(11)]);
var inst_34767 = (state_34812[(2)]);
var inst_34768 = (inst_34749 + (1));
var tmp34834 = inst_34748;
var tmp34835 = inst_34746;
var tmp34836 = inst_34747;
var inst_34746__$1 = tmp34835;
var inst_34747__$1 = tmp34836;
var inst_34748__$1 = tmp34834;
var inst_34749__$1 = inst_34768;
var state_34812__$1 = (function (){var statearr_34843 = state_34812;
(statearr_34843[(14)] = inst_34767);

(statearr_34843[(9)] = inst_34746__$1);

(statearr_34843[(10)] = inst_34747__$1);

(statearr_34843[(11)] = inst_34748__$1);

(statearr_34843[(12)] = inst_34749__$1);

return statearr_34843;
})();
var statearr_34848_36357 = state_34812__$1;
(statearr_34848_36357[(2)] = null);

(statearr_34848_36357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (22))){
var state_34812__$1 = state_34812;
var statearr_34852_36358 = state_34812__$1;
(statearr_34852_36358[(2)] = null);

(statearr_34852_36358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (6))){
var inst_34734 = (state_34812[(13)]);
var inst_34744 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34734) : f.call(null,inst_34734));
var inst_34745 = cljs.core.seq(inst_34744);
var inst_34746 = inst_34745;
var inst_34747 = null;
var inst_34748 = (0);
var inst_34749 = (0);
var state_34812__$1 = (function (){var statearr_34856 = state_34812;
(statearr_34856[(9)] = inst_34746);

(statearr_34856[(10)] = inst_34747);

(statearr_34856[(11)] = inst_34748);

(statearr_34856[(12)] = inst_34749);

return statearr_34856;
})();
var statearr_34860_36366 = state_34812__$1;
(statearr_34860_36366[(2)] = null);

(statearr_34860_36366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (17))){
var inst_34771 = (state_34812[(7)]);
var inst_34775 = cljs.core.chunk_first(inst_34771);
var inst_34776 = cljs.core.chunk_rest(inst_34771);
var inst_34777 = cljs.core.count(inst_34775);
var inst_34746 = inst_34776;
var inst_34747 = inst_34775;
var inst_34748 = inst_34777;
var inst_34749 = (0);
var state_34812__$1 = (function (){var statearr_34861 = state_34812;
(statearr_34861[(9)] = inst_34746);

(statearr_34861[(10)] = inst_34747);

(statearr_34861[(11)] = inst_34748);

(statearr_34861[(12)] = inst_34749);

return statearr_34861;
})();
var statearr_34864_36372 = state_34812__$1;
(statearr_34864_36372[(2)] = null);

(statearr_34864_36372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (3))){
var inst_34805 = (state_34812[(2)]);
var state_34812__$1 = state_34812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34812__$1,inst_34805);
} else {
if((state_val_34813 === (12))){
var inst_34793 = (state_34812[(2)]);
var state_34812__$1 = state_34812;
var statearr_34867_36373 = state_34812__$1;
(statearr_34867_36373[(2)] = inst_34793);

(statearr_34867_36373[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (2))){
var state_34812__$1 = state_34812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34812__$1,(4),in$);
} else {
if((state_val_34813 === (23))){
var inst_34801 = (state_34812[(2)]);
var state_34812__$1 = state_34812;
var statearr_34868_36379 = state_34812__$1;
(statearr_34868_36379[(2)] = inst_34801);

(statearr_34868_36379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (19))){
var inst_34788 = (state_34812[(2)]);
var state_34812__$1 = state_34812;
var statearr_34873_36381 = state_34812__$1;
(statearr_34873_36381[(2)] = inst_34788);

(statearr_34873_36381[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (11))){
var inst_34746 = (state_34812[(9)]);
var inst_34771 = (state_34812[(7)]);
var inst_34771__$1 = cljs.core.seq(inst_34746);
var state_34812__$1 = (function (){var statearr_34877 = state_34812;
(statearr_34877[(7)] = inst_34771__$1);

return statearr_34877;
})();
if(inst_34771__$1){
var statearr_34878_36383 = state_34812__$1;
(statearr_34878_36383[(1)] = (14));

} else {
var statearr_34879_36384 = state_34812__$1;
(statearr_34879_36384[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (9))){
var inst_34795 = (state_34812[(2)]);
var inst_34796 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34812__$1 = (function (){var statearr_34880 = state_34812;
(statearr_34880[(15)] = inst_34795);

return statearr_34880;
})();
if(cljs.core.truth_(inst_34796)){
var statearr_34881_36385 = state_34812__$1;
(statearr_34881_36385[(1)] = (21));

} else {
var statearr_34882_36386 = state_34812__$1;
(statearr_34882_36386[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (5))){
var inst_34737 = cljs.core.async.close_BANG_(out);
var state_34812__$1 = state_34812;
var statearr_34886_36387 = state_34812__$1;
(statearr_34886_36387[(2)] = inst_34737);

(statearr_34886_36387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (14))){
var inst_34771 = (state_34812[(7)]);
var inst_34773 = cljs.core.chunked_seq_QMARK_(inst_34771);
var state_34812__$1 = state_34812;
if(inst_34773){
var statearr_34889_36388 = state_34812__$1;
(statearr_34889_36388[(1)] = (17));

} else {
var statearr_34890_36389 = state_34812__$1;
(statearr_34890_36389[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (16))){
var inst_34791 = (state_34812[(2)]);
var state_34812__$1 = state_34812;
var statearr_34891_36390 = state_34812__$1;
(statearr_34891_36390[(2)] = inst_34791);

(statearr_34891_36390[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (10))){
var inst_34747 = (state_34812[(10)]);
var inst_34749 = (state_34812[(12)]);
var inst_34764 = cljs.core._nth(inst_34747,inst_34749);
var state_34812__$1 = state_34812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34812__$1,(13),out,inst_34764);
} else {
if((state_val_34813 === (18))){
var inst_34771 = (state_34812[(7)]);
var inst_34782 = cljs.core.first(inst_34771);
var state_34812__$1 = state_34812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34812__$1,(20),out,inst_34782);
} else {
if((state_val_34813 === (8))){
var inst_34749 = (state_34812[(12)]);
var inst_34748 = (state_34812[(11)]);
var inst_34758 = (inst_34749 < inst_34748);
var inst_34759 = inst_34758;
var state_34812__$1 = state_34812;
if(cljs.core.truth_(inst_34759)){
var statearr_34892_36391 = state_34812__$1;
(statearr_34892_36391[(1)] = (10));

} else {
var statearr_34893_36392 = state_34812__$1;
(statearr_34893_36392[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30107__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30107__auto____0 = (function (){
var statearr_34898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34898[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30107__auto__);

(statearr_34898[(1)] = (1));

return statearr_34898;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30107__auto____1 = (function (state_34812){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_34812);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e34899){var ex__30110__auto__ = e34899;
var statearr_34900_36395 = state_34812;
(statearr_34900_36395[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_34812[(4)]))){
var statearr_34901_36396 = state_34812;
(statearr_34901_36396[(1)] = cljs.core.first((state_34812[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36399 = state_34812;
state_34812 = G__36399;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30107__auto__ = function(state_34812){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30107__auto____1.call(this,state_34812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30107__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30107__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30107__auto__;
})()
})();
var state__31341__auto__ = (function (){var statearr_34915 = f__31340__auto__();
(statearr_34915[(6)] = c__31339__auto__);

return statearr_34915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
}));

return c__31339__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34926 = arguments.length;
switch (G__34926) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34932 = arguments.length;
switch (G__34932) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34946 = arguments.length;
switch (G__34946) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31339__auto___36403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = (function (state_34975){
var state_val_34976 = (state_34975[(1)]);
if((state_val_34976 === (7))){
var inst_34970 = (state_34975[(2)]);
var state_34975__$1 = state_34975;
var statearr_34987_36404 = state_34975__$1;
(statearr_34987_36404[(2)] = inst_34970);

(statearr_34987_36404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34976 === (1))){
var inst_34949 = null;
var state_34975__$1 = (function (){var statearr_34990 = state_34975;
(statearr_34990[(7)] = inst_34949);

return statearr_34990;
})();
var statearr_34991_36405 = state_34975__$1;
(statearr_34991_36405[(2)] = null);

(statearr_34991_36405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34976 === (4))){
var inst_34955 = (state_34975[(8)]);
var inst_34955__$1 = (state_34975[(2)]);
var inst_34956 = (inst_34955__$1 == null);
var inst_34957 = cljs.core.not(inst_34956);
var state_34975__$1 = (function (){var statearr_35002 = state_34975;
(statearr_35002[(8)] = inst_34955__$1);

return statearr_35002;
})();
if(inst_34957){
var statearr_35003_36409 = state_34975__$1;
(statearr_35003_36409[(1)] = (5));

} else {
var statearr_35004_36413 = state_34975__$1;
(statearr_35004_36413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34976 === (6))){
var state_34975__$1 = state_34975;
var statearr_35005_36420 = state_34975__$1;
(statearr_35005_36420[(2)] = null);

(statearr_35005_36420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34976 === (3))){
var inst_34972 = (state_34975[(2)]);
var inst_34973 = cljs.core.async.close_BANG_(out);
var state_34975__$1 = (function (){var statearr_35007 = state_34975;
(statearr_35007[(9)] = inst_34972);

return statearr_35007;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34975__$1,inst_34973);
} else {
if((state_val_34976 === (2))){
var state_34975__$1 = state_34975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34975__$1,(4),ch);
} else {
if((state_val_34976 === (11))){
var inst_34955 = (state_34975[(8)]);
var inst_34964 = (state_34975[(2)]);
var inst_34949 = inst_34955;
var state_34975__$1 = (function (){var statearr_35016 = state_34975;
(statearr_35016[(10)] = inst_34964);

(statearr_35016[(7)] = inst_34949);

return statearr_35016;
})();
var statearr_35017_36421 = state_34975__$1;
(statearr_35017_36421[(2)] = null);

(statearr_35017_36421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34976 === (9))){
var inst_34955 = (state_34975[(8)]);
var state_34975__$1 = state_34975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34975__$1,(11),out,inst_34955);
} else {
if((state_val_34976 === (5))){
var inst_34955 = (state_34975[(8)]);
var inst_34949 = (state_34975[(7)]);
var inst_34959 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34955,inst_34949);
var state_34975__$1 = state_34975;
if(inst_34959){
var statearr_35025_36422 = state_34975__$1;
(statearr_35025_36422[(1)] = (8));

} else {
var statearr_35026_36423 = state_34975__$1;
(statearr_35026_36423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34976 === (10))){
var inst_34967 = (state_34975[(2)]);
var state_34975__$1 = state_34975;
var statearr_35027_36428 = state_34975__$1;
(statearr_35027_36428[(2)] = inst_34967);

(statearr_35027_36428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34976 === (8))){
var inst_34949 = (state_34975[(7)]);
var tmp35024 = inst_34949;
var inst_34949__$1 = tmp35024;
var state_34975__$1 = (function (){var statearr_35028 = state_34975;
(statearr_35028[(7)] = inst_34949__$1);

return statearr_35028;
})();
var statearr_35029_36429 = state_34975__$1;
(statearr_35029_36429[(2)] = null);

(statearr_35029_36429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30107__auto__ = null;
var cljs$core$async$state_machine__30107__auto____0 = (function (){
var statearr_35034 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35034[(0)] = cljs$core$async$state_machine__30107__auto__);

(statearr_35034[(1)] = (1));

return statearr_35034;
});
var cljs$core$async$state_machine__30107__auto____1 = (function (state_34975){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_34975);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e35038){var ex__30110__auto__ = e35038;
var statearr_35039_36430 = state_34975;
(statearr_35039_36430[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_34975[(4)]))){
var statearr_35046_36431 = state_34975;
(statearr_35046_36431[(1)] = cljs.core.first((state_34975[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36432 = state_34975;
state_34975 = G__36432;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$state_machine__30107__auto__ = function(state_34975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30107__auto____1.call(this,state_34975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30107__auto____0;
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30107__auto____1;
return cljs$core$async$state_machine__30107__auto__;
})()
})();
var state__31341__auto__ = (function (){var statearr_35047 = f__31340__auto__();
(statearr_35047[(6)] = c__31339__auto___36403);

return statearr_35047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35059 = arguments.length;
switch (G__35059) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31339__auto___36434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = (function (state_35104){
var state_val_35105 = (state_35104[(1)]);
if((state_val_35105 === (7))){
var inst_35097 = (state_35104[(2)]);
var state_35104__$1 = state_35104;
var statearr_35107_36435 = state_35104__$1;
(statearr_35107_36435[(2)] = inst_35097);

(statearr_35107_36435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35105 === (1))){
var inst_35064 = (new Array(n));
var inst_35065 = inst_35064;
var inst_35066 = (0);
var state_35104__$1 = (function (){var statearr_35109 = state_35104;
(statearr_35109[(7)] = inst_35065);

(statearr_35109[(8)] = inst_35066);

return statearr_35109;
})();
var statearr_35110_36436 = state_35104__$1;
(statearr_35110_36436[(2)] = null);

(statearr_35110_36436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35105 === (4))){
var inst_35069 = (state_35104[(9)]);
var inst_35069__$1 = (state_35104[(2)]);
var inst_35070 = (inst_35069__$1 == null);
var inst_35071 = cljs.core.not(inst_35070);
var state_35104__$1 = (function (){var statearr_35111 = state_35104;
(statearr_35111[(9)] = inst_35069__$1);

return statearr_35111;
})();
if(inst_35071){
var statearr_35112_36437 = state_35104__$1;
(statearr_35112_36437[(1)] = (5));

} else {
var statearr_35113_36438 = state_35104__$1;
(statearr_35113_36438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35105 === (15))){
var inst_35091 = (state_35104[(2)]);
var state_35104__$1 = state_35104;
var statearr_35114_36439 = state_35104__$1;
(statearr_35114_36439[(2)] = inst_35091);

(statearr_35114_36439[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35105 === (13))){
var state_35104__$1 = state_35104;
var statearr_35115_36440 = state_35104__$1;
(statearr_35115_36440[(2)] = null);

(statearr_35115_36440[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35105 === (6))){
var inst_35066 = (state_35104[(8)]);
var inst_35087 = (inst_35066 > (0));
var state_35104__$1 = state_35104;
if(cljs.core.truth_(inst_35087)){
var statearr_35116_36445 = state_35104__$1;
(statearr_35116_36445[(1)] = (12));

} else {
var statearr_35117_36446 = state_35104__$1;
(statearr_35117_36446[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35105 === (3))){
var inst_35099 = (state_35104[(2)]);
var state_35104__$1 = state_35104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35104__$1,inst_35099);
} else {
if((state_val_35105 === (12))){
var inst_35065 = (state_35104[(7)]);
var inst_35089 = cljs.core.vec(inst_35065);
var state_35104__$1 = state_35104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35104__$1,(15),out,inst_35089);
} else {
if((state_val_35105 === (2))){
var state_35104__$1 = state_35104;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35104__$1,(4),ch);
} else {
if((state_val_35105 === (11))){
var inst_35081 = (state_35104[(2)]);
var inst_35082 = (new Array(n));
var inst_35065 = inst_35082;
var inst_35066 = (0);
var state_35104__$1 = (function (){var statearr_35124 = state_35104;
(statearr_35124[(10)] = inst_35081);

(statearr_35124[(7)] = inst_35065);

(statearr_35124[(8)] = inst_35066);

return statearr_35124;
})();
var statearr_35125_36447 = state_35104__$1;
(statearr_35125_36447[(2)] = null);

(statearr_35125_36447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35105 === (9))){
var inst_35065 = (state_35104[(7)]);
var inst_35079 = cljs.core.vec(inst_35065);
var state_35104__$1 = state_35104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35104__$1,(11),out,inst_35079);
} else {
if((state_val_35105 === (5))){
var inst_35065 = (state_35104[(7)]);
var inst_35066 = (state_35104[(8)]);
var inst_35069 = (state_35104[(9)]);
var inst_35074 = (state_35104[(11)]);
var inst_35073 = (inst_35065[inst_35066] = inst_35069);
var inst_35074__$1 = (inst_35066 + (1));
var inst_35075 = (inst_35074__$1 < n);
var state_35104__$1 = (function (){var statearr_35126 = state_35104;
(statearr_35126[(12)] = inst_35073);

(statearr_35126[(11)] = inst_35074__$1);

return statearr_35126;
})();
if(cljs.core.truth_(inst_35075)){
var statearr_35130_36450 = state_35104__$1;
(statearr_35130_36450[(1)] = (8));

} else {
var statearr_35131_36451 = state_35104__$1;
(statearr_35131_36451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35105 === (14))){
var inst_35094 = (state_35104[(2)]);
var inst_35095 = cljs.core.async.close_BANG_(out);
var state_35104__$1 = (function (){var statearr_35136 = state_35104;
(statearr_35136[(13)] = inst_35094);

return statearr_35136;
})();
var statearr_35137_36452 = state_35104__$1;
(statearr_35137_36452[(2)] = inst_35095);

(statearr_35137_36452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35105 === (10))){
var inst_35085 = (state_35104[(2)]);
var state_35104__$1 = state_35104;
var statearr_35138_36453 = state_35104__$1;
(statearr_35138_36453[(2)] = inst_35085);

(statearr_35138_36453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35105 === (8))){
var inst_35065 = (state_35104[(7)]);
var inst_35074 = (state_35104[(11)]);
var tmp35135 = inst_35065;
var inst_35065__$1 = tmp35135;
var inst_35066 = inst_35074;
var state_35104__$1 = (function (){var statearr_35139 = state_35104;
(statearr_35139[(7)] = inst_35065__$1);

(statearr_35139[(8)] = inst_35066);

return statearr_35139;
})();
var statearr_35140_36454 = state_35104__$1;
(statearr_35140_36454[(2)] = null);

(statearr_35140_36454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30107__auto__ = null;
var cljs$core$async$state_machine__30107__auto____0 = (function (){
var statearr_35144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35144[(0)] = cljs$core$async$state_machine__30107__auto__);

(statearr_35144[(1)] = (1));

return statearr_35144;
});
var cljs$core$async$state_machine__30107__auto____1 = (function (state_35104){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_35104);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e35146){var ex__30110__auto__ = e35146;
var statearr_35147_36458 = state_35104;
(statearr_35147_36458[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_35104[(4)]))){
var statearr_35149_36459 = state_35104;
(statearr_35149_36459[(1)] = cljs.core.first((state_35104[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36461 = state_35104;
state_35104 = G__36461;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$state_machine__30107__auto__ = function(state_35104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30107__auto____1.call(this,state_35104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30107__auto____0;
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30107__auto____1;
return cljs$core$async$state_machine__30107__auto__;
})()
})();
var state__31341__auto__ = (function (){var statearr_35150 = f__31340__auto__();
(statearr_35150[(6)] = c__31339__auto___36434);

return statearr_35150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35158 = arguments.length;
switch (G__35158) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31339__auto___36465 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31340__auto__ = (function (){var switch__30106__auto__ = (function (state_35209){
var state_val_35210 = (state_35209[(1)]);
if((state_val_35210 === (7))){
var inst_35205 = (state_35209[(2)]);
var state_35209__$1 = state_35209;
var statearr_35212_36466 = state_35209__$1;
(statearr_35212_36466[(2)] = inst_35205);

(statearr_35212_36466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (1))){
var inst_35165 = [];
var inst_35166 = inst_35165;
var inst_35167 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35209__$1 = (function (){var statearr_35213 = state_35209;
(statearr_35213[(7)] = inst_35166);

(statearr_35213[(8)] = inst_35167);

return statearr_35213;
})();
var statearr_35214_36472 = state_35209__$1;
(statearr_35214_36472[(2)] = null);

(statearr_35214_36472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (4))){
var inst_35170 = (state_35209[(9)]);
var inst_35170__$1 = (state_35209[(2)]);
var inst_35171 = (inst_35170__$1 == null);
var inst_35172 = cljs.core.not(inst_35171);
var state_35209__$1 = (function (){var statearr_35215 = state_35209;
(statearr_35215[(9)] = inst_35170__$1);

return statearr_35215;
})();
if(inst_35172){
var statearr_35216_36473 = state_35209__$1;
(statearr_35216_36473[(1)] = (5));

} else {
var statearr_35217_36474 = state_35209__$1;
(statearr_35217_36474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (15))){
var inst_35166 = (state_35209[(7)]);
var inst_35197 = cljs.core.vec(inst_35166);
var state_35209__$1 = state_35209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35209__$1,(18),out,inst_35197);
} else {
if((state_val_35210 === (13))){
var inst_35192 = (state_35209[(2)]);
var state_35209__$1 = state_35209;
var statearr_35227_36475 = state_35209__$1;
(statearr_35227_36475[(2)] = inst_35192);

(statearr_35227_36475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (6))){
var inst_35166 = (state_35209[(7)]);
var inst_35194 = inst_35166.length;
var inst_35195 = (inst_35194 > (0));
var state_35209__$1 = state_35209;
if(cljs.core.truth_(inst_35195)){
var statearr_35233_36476 = state_35209__$1;
(statearr_35233_36476[(1)] = (15));

} else {
var statearr_35234_36477 = state_35209__$1;
(statearr_35234_36477[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (17))){
var inst_35202 = (state_35209[(2)]);
var inst_35203 = cljs.core.async.close_BANG_(out);
var state_35209__$1 = (function (){var statearr_35235 = state_35209;
(statearr_35235[(10)] = inst_35202);

return statearr_35235;
})();
var statearr_35236_36479 = state_35209__$1;
(statearr_35236_36479[(2)] = inst_35203);

(statearr_35236_36479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (3))){
var inst_35207 = (state_35209[(2)]);
var state_35209__$1 = state_35209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35209__$1,inst_35207);
} else {
if((state_val_35210 === (12))){
var inst_35166 = (state_35209[(7)]);
var inst_35185 = cljs.core.vec(inst_35166);
var state_35209__$1 = state_35209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35209__$1,(14),out,inst_35185);
} else {
if((state_val_35210 === (2))){
var state_35209__$1 = state_35209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35209__$1,(4),ch);
} else {
if((state_val_35210 === (11))){
var inst_35166 = (state_35209[(7)]);
var inst_35170 = (state_35209[(9)]);
var inst_35174 = (state_35209[(11)]);
var inst_35182 = inst_35166.push(inst_35170);
var tmp35238 = inst_35166;
var inst_35166__$1 = tmp35238;
var inst_35167 = inst_35174;
var state_35209__$1 = (function (){var statearr_35243 = state_35209;
(statearr_35243[(12)] = inst_35182);

(statearr_35243[(7)] = inst_35166__$1);

(statearr_35243[(8)] = inst_35167);

return statearr_35243;
})();
var statearr_35244_36481 = state_35209__$1;
(statearr_35244_36481[(2)] = null);

(statearr_35244_36481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (9))){
var inst_35167 = (state_35209[(8)]);
var inst_35178 = cljs.core.keyword_identical_QMARK_(inst_35167,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35209__$1 = state_35209;
var statearr_35248_36482 = state_35209__$1;
(statearr_35248_36482[(2)] = inst_35178);

(statearr_35248_36482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (5))){
var inst_35170 = (state_35209[(9)]);
var inst_35174 = (state_35209[(11)]);
var inst_35167 = (state_35209[(8)]);
var inst_35175 = (state_35209[(13)]);
var inst_35174__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35170) : f.call(null,inst_35170));
var inst_35175__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35174__$1,inst_35167);
var state_35209__$1 = (function (){var statearr_35249 = state_35209;
(statearr_35249[(11)] = inst_35174__$1);

(statearr_35249[(13)] = inst_35175__$1);

return statearr_35249;
})();
if(inst_35175__$1){
var statearr_35250_36484 = state_35209__$1;
(statearr_35250_36484[(1)] = (8));

} else {
var statearr_35251_36486 = state_35209__$1;
(statearr_35251_36486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (14))){
var inst_35170 = (state_35209[(9)]);
var inst_35174 = (state_35209[(11)]);
var inst_35187 = (state_35209[(2)]);
var inst_35188 = [];
var inst_35189 = inst_35188.push(inst_35170);
var inst_35166 = inst_35188;
var inst_35167 = inst_35174;
var state_35209__$1 = (function (){var statearr_35253 = state_35209;
(statearr_35253[(14)] = inst_35187);

(statearr_35253[(15)] = inst_35189);

(statearr_35253[(7)] = inst_35166);

(statearr_35253[(8)] = inst_35167);

return statearr_35253;
})();
var statearr_35254_36487 = state_35209__$1;
(statearr_35254_36487[(2)] = null);

(statearr_35254_36487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (16))){
var state_35209__$1 = state_35209;
var statearr_35255_36489 = state_35209__$1;
(statearr_35255_36489[(2)] = null);

(statearr_35255_36489[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (10))){
var inst_35180 = (state_35209[(2)]);
var state_35209__$1 = state_35209;
if(cljs.core.truth_(inst_35180)){
var statearr_35256_36490 = state_35209__$1;
(statearr_35256_36490[(1)] = (11));

} else {
var statearr_35257_36491 = state_35209__$1;
(statearr_35257_36491[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (18))){
var inst_35199 = (state_35209[(2)]);
var state_35209__$1 = state_35209;
var statearr_35258_36492 = state_35209__$1;
(statearr_35258_36492[(2)] = inst_35199);

(statearr_35258_36492[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (8))){
var inst_35175 = (state_35209[(13)]);
var state_35209__$1 = state_35209;
var statearr_35259_36493 = state_35209__$1;
(statearr_35259_36493[(2)] = inst_35175);

(statearr_35259_36493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30107__auto__ = null;
var cljs$core$async$state_machine__30107__auto____0 = (function (){
var statearr_35266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35266[(0)] = cljs$core$async$state_machine__30107__auto__);

(statearr_35266[(1)] = (1));

return statearr_35266;
});
var cljs$core$async$state_machine__30107__auto____1 = (function (state_35209){
while(true){
var ret_value__30108__auto__ = (function (){try{while(true){
var result__30109__auto__ = switch__30106__auto__(state_35209);
if(cljs.core.keyword_identical_QMARK_(result__30109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30109__auto__;
}
break;
}
}catch (e35267){var ex__30110__auto__ = e35267;
var statearr_35268_36505 = state_35209;
(statearr_35268_36505[(2)] = ex__30110__auto__);


if(cljs.core.seq((state_35209[(4)]))){
var statearr_35269_36506 = state_35209;
(statearr_35269_36506[(1)] = cljs.core.first((state_35209[(4)])));

} else {
throw ex__30110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36507 = state_35209;
state_35209 = G__36507;
continue;
} else {
return ret_value__30108__auto__;
}
break;
}
});
cljs$core$async$state_machine__30107__auto__ = function(state_35209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30107__auto____1.call(this,state_35209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30107__auto____0;
cljs$core$async$state_machine__30107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30107__auto____1;
return cljs$core$async$state_machine__30107__auto__;
})()
})();
var state__31341__auto__ = (function (){var statearr_35270 = f__31340__auto__();
(statearr_35270[(6)] = c__31339__auto___36465);

return statearr_35270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31341__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
