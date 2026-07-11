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
cljs.core.async.t_cljs$core$async31137 = (function (f,blockable,meta31138){
this.f = f;
this.blockable = blockable;
this.meta31138 = meta31138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31139,meta31138__$1){
var self__ = this;
var _31139__$1 = this;
return (new cljs.core.async.t_cljs$core$async31137(self__.f,self__.blockable,meta31138__$1));
}));

(cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31139){
var self__ = this;
var _31139__$1 = this;
return self__.meta31138;
}));

(cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31138","meta31138",192965016,null)], null);
}));

(cljs.core.async.t_cljs$core$async31137.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31137");

(cljs.core.async.t_cljs$core$async31137.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31137");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31137.
 */
cljs.core.async.__GT_t_cljs$core$async31137 = (function cljs$core$async$__GT_t_cljs$core$async31137(f,blockable,meta31138){
return (new cljs.core.async.t_cljs$core$async31137(f,blockable,meta31138));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31136 = arguments.length;
switch (G__31136) {
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
return (new cljs.core.async.t_cljs$core$async31137(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31168 = arguments.length;
switch (G__31168) {
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
var G__31186 = arguments.length;
switch (G__31186) {
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
var G__31197 = arguments.length;
switch (G__31197) {
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
var val_34618 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34618) : fn1.call(null,val_34618));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34618) : fn1.call(null,val_34618));
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
var G__31217 = arguments.length;
switch (G__31217) {
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
var n__5616__auto___34625 = n;
var x_34626 = (0);
while(true){
if((x_34626 < n__5616__auto___34625)){
(a[x_34626] = x_34626);

var G__34627 = (x_34626 + (1));
x_34626 = G__34627;
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
cljs.core.async.t_cljs$core$async31248 = (function (flag,meta31249){
this.flag = flag;
this.meta31249 = meta31249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31250,meta31249__$1){
var self__ = this;
var _31250__$1 = this;
return (new cljs.core.async.t_cljs$core$async31248(self__.flag,meta31249__$1));
}));

(cljs.core.async.t_cljs$core$async31248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31250){
var self__ = this;
var _31250__$1 = this;
return self__.meta31249;
}));

(cljs.core.async.t_cljs$core$async31248.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31248.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31248.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31248.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31249","meta31249",706159742,null)], null);
}));

(cljs.core.async.t_cljs$core$async31248.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31248");

(cljs.core.async.t_cljs$core$async31248.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31248");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31248.
 */
cljs.core.async.__GT_t_cljs$core$async31248 = (function cljs$core$async$__GT_t_cljs$core$async31248(flag,meta31249){
return (new cljs.core.async.t_cljs$core$async31248(flag,meta31249));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31248(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31264 = (function (flag,cb,meta31265){
this.flag = flag;
this.cb = cb;
this.meta31265 = meta31265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31266,meta31265__$1){
var self__ = this;
var _31266__$1 = this;
return (new cljs.core.async.t_cljs$core$async31264(self__.flag,self__.cb,meta31265__$1));
}));

(cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31266){
var self__ = this;
var _31266__$1 = this;
return self__.meta31265;
}));

(cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31265","meta31265",1763840661,null)], null);
}));

(cljs.core.async.t_cljs$core$async31264.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31264");

(cljs.core.async.t_cljs$core$async31264.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31264");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31264.
 */
cljs.core.async.__GT_t_cljs$core$async31264 = (function cljs$core$async$__GT_t_cljs$core$async31264(flag,cb,meta31265){
return (new cljs.core.async.t_cljs$core$async31264(flag,cb,meta31265));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31264(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_34653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_34653)){
if((!(((port_34653.cljs$core$IFn$_invoke$arity$1 ? port_34653.cljs$core$IFn$_invoke$arity$1((1)) : port_34653.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__34654 = (i + (1));
i = G__34654;
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
return (function (p1__31268_SHARP_){
var G__31276 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31268_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31276) : fret.call(null,G__31276));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__31270_SHARP_){
var G__31277 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31270_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31277) : fret.call(null,G__31277));
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
var G__34667 = (i + (1));
i = G__34667;
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
var len__5749__auto___34671 = arguments.length;
var i__5750__auto___34672 = (0);
while(true){
if((i__5750__auto___34672 < len__5749__auto___34671)){
args__5755__auto__.push((arguments[i__5750__auto___34672]));

var G__34673 = (i__5750__auto___34672 + (1));
i__5750__auto___34672 = G__34673;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31306){
var map__31308 = p__31306;
var map__31308__$1 = cljs.core.__destructure_map(map__31308);
var opts = map__31308__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31285){
var G__31286 = cljs.core.first(seq31285);
var seq31285__$1 = cljs.core.next(seq31285);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31286,seq31285__$1);
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
var G__31334 = arguments.length;
switch (G__31334) {
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
var c__31075__auto___34680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = (function (state_31477){
var state_val_31496 = (state_31477[(1)]);
if((state_val_31496 === (7))){
var inst_31467 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
var statearr_31533_34687 = state_31477__$1;
(statearr_31533_34687[(2)] = inst_31467);

(statearr_31533_34687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31496 === (1))){
var state_31477__$1 = state_31477;
var statearr_31537_34700 = state_31477__$1;
(statearr_31537_34700[(2)] = null);

(statearr_31537_34700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31496 === (4))){
var inst_31443 = (state_31477[(7)]);
var inst_31443__$1 = (state_31477[(2)]);
var inst_31446 = (inst_31443__$1 == null);
var state_31477__$1 = (function (){var statearr_31569 = state_31477;
(statearr_31569[(7)] = inst_31443__$1);

return statearr_31569;
})();
if(cljs.core.truth_(inst_31446)){
var statearr_31571_34704 = state_31477__$1;
(statearr_31571_34704[(1)] = (5));

} else {
var statearr_31573_34717 = state_31477__$1;
(statearr_31573_34717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31496 === (13))){
var state_31477__$1 = state_31477;
var statearr_31584_34730 = state_31477__$1;
(statearr_31584_34730[(2)] = null);

(statearr_31584_34730[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31496 === (6))){
var inst_31443 = (state_31477[(7)]);
var state_31477__$1 = state_31477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31477__$1,(11),to,inst_31443);
} else {
if((state_val_31496 === (3))){
var inst_31473 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31477__$1,inst_31473);
} else {
if((state_val_31496 === (12))){
var state_31477__$1 = state_31477;
var statearr_31598_34733 = state_31477__$1;
(statearr_31598_34733[(2)] = null);

(statearr_31598_34733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31496 === (2))){
var state_31477__$1 = state_31477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31477__$1,(4),from);
} else {
if((state_val_31496 === (11))){
var inst_31455 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
if(cljs.core.truth_(inst_31455)){
var statearr_31603_34734 = state_31477__$1;
(statearr_31603_34734[(1)] = (12));

} else {
var statearr_31604_34735 = state_31477__$1;
(statearr_31604_34735[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31496 === (9))){
var state_31477__$1 = state_31477;
var statearr_31605_34738 = state_31477__$1;
(statearr_31605_34738[(2)] = null);

(statearr_31605_34738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31496 === (5))){
var state_31477__$1 = state_31477;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31606_34740 = state_31477__$1;
(statearr_31606_34740[(1)] = (8));

} else {
var statearr_31607_34743 = state_31477__$1;
(statearr_31607_34743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31496 === (14))){
var inst_31465 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
var statearr_31608_34745 = state_31477__$1;
(statearr_31608_34745[(2)] = inst_31465);

(statearr_31608_34745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31496 === (10))){
var inst_31452 = (state_31477[(2)]);
var state_31477__$1 = state_31477;
var statearr_31609_34746 = state_31477__$1;
(statearr_31609_34746[(2)] = inst_31452);

(statearr_31609_34746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31496 === (8))){
var inst_31449 = cljs.core.async.close_BANG_(to);
var state_31477__$1 = state_31477;
var statearr_31610_34747 = state_31477__$1;
(statearr_31610_34747[(2)] = inst_31449);

(statearr_31610_34747[(1)] = (10));


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
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_31612 = [null,null,null,null,null,null,null,null];
(statearr_31612[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_31612[(1)] = (1));

return statearr_31612;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_31477){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_31477);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e31614){var ex__30882__auto__ = e31614;
var statearr_31616_34753 = state_31477;
(statearr_31616_34753[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_31477[(4)]))){
var statearr_31618_34755 = state_31477;
(statearr_31618_34755[(1)] = cljs.core.first((state_31477[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34756 = state_31477;
state_31477 = G__34756;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_31477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_31477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
})();
var state__31077__auto__ = (function (){var statearr_31621 = f__31076__auto__();
(statearr_31621[(6)] = c__31075__auto___34680);

return statearr_31621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
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
var process__$1 = (function (p__31624){
var vec__31625 = p__31624;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31625,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31625,(1),null);
var job = vec__31625;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31075__auto___34765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = (function (state_31633){
var state_val_31634 = (state_31633[(1)]);
if((state_val_31634 === (1))){
var state_31633__$1 = state_31633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31633__$1,(2),res,v);
} else {
if((state_val_31634 === (2))){
var inst_31630 = (state_31633[(2)]);
var inst_31631 = cljs.core.async.close_BANG_(res);
var state_31633__$1 = (function (){var statearr_31635 = state_31633;
(statearr_31635[(7)] = inst_31630);

return statearr_31635;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31633__$1,inst_31631);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0 = (function (){
var statearr_31636 = [null,null,null,null,null,null,null,null];
(statearr_31636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__);

(statearr_31636[(1)] = (1));

return statearr_31636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1 = (function (state_31633){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_31633);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e31637){var ex__30882__auto__ = e31637;
var statearr_31638_34767 = state_31633;
(statearr_31638_34767[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_31633[(4)]))){
var statearr_31639_34769 = state_31633;
(statearr_31639_34769[(1)] = cljs.core.first((state_31633[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34783 = state_31633;
state_31633 = G__34783;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = function(state_31633){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1.call(this,state_31633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__;
})()
})();
var state__31077__auto__ = (function (){var statearr_31641 = f__31076__auto__();
(statearr_31641[(6)] = c__31075__auto___34765);

return statearr_31641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31642){
var vec__31643 = p__31642;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31643,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31643,(1),null);
var job = vec__31643;
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
var n__5616__auto___34793 = n;
var __34794 = (0);
while(true){
if((__34794 < n__5616__auto___34793)){
var G__31646_34795 = type;
var G__31646_34796__$1 = (((G__31646_34795 instanceof cljs.core.Keyword))?G__31646_34795.fqn:null);
switch (G__31646_34796__$1) {
case "compute":
var c__31075__auto___34798 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34794,c__31075__auto___34798,G__31646_34795,G__31646_34796__$1,n__5616__auto___34793,jobs,results,process__$1,async){
return (function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = ((function (__34794,c__31075__auto___34798,G__31646_34795,G__31646_34796__$1,n__5616__auto___34793,jobs,results,process__$1,async){
return (function (state_31660){
var state_val_31661 = (state_31660[(1)]);
if((state_val_31661 === (1))){
var state_31660__$1 = state_31660;
var statearr_31662_34804 = state_31660__$1;
(statearr_31662_34804[(2)] = null);

(statearr_31662_34804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (2))){
var state_31660__$1 = state_31660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31660__$1,(4),jobs);
} else {
if((state_val_31661 === (3))){
var inst_31658 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31660__$1,inst_31658);
} else {
if((state_val_31661 === (4))){
var inst_31649 = (state_31660[(2)]);
var inst_31651 = process__$1(inst_31649);
var state_31660__$1 = state_31660;
if(cljs.core.truth_(inst_31651)){
var statearr_31663_34809 = state_31660__$1;
(statearr_31663_34809[(1)] = (5));

} else {
var statearr_31664_34810 = state_31660__$1;
(statearr_31664_34810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (5))){
var state_31660__$1 = state_31660;
var statearr_31665_34811 = state_31660__$1;
(statearr_31665_34811[(2)] = null);

(statearr_31665_34811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (6))){
var state_31660__$1 = state_31660;
var statearr_31666_34812 = state_31660__$1;
(statearr_31666_34812[(2)] = null);

(statearr_31666_34812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (7))){
var inst_31656 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
var statearr_31667_34813 = state_31660__$1;
(statearr_31667_34813[(2)] = inst_31656);

(statearr_31667_34813[(1)] = (3));


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
});})(__34794,c__31075__auto___34798,G__31646_34795,G__31646_34796__$1,n__5616__auto___34793,jobs,results,process__$1,async))
;
return ((function (__34794,switch__30878__auto__,c__31075__auto___34798,G__31646_34795,G__31646_34796__$1,n__5616__auto___34793,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0 = (function (){
var statearr_31669 = [null,null,null,null,null,null,null];
(statearr_31669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__);

(statearr_31669[(1)] = (1));

return statearr_31669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1 = (function (state_31660){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_31660);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e31670){var ex__30882__auto__ = e31670;
var statearr_31671_34822 = state_31660;
(statearr_31671_34822[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_31660[(4)]))){
var statearr_31672_34824 = state_31660;
(statearr_31672_34824[(1)] = cljs.core.first((state_31660[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34826 = state_31660;
state_31660 = G__34826;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = function(state_31660){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1.call(this,state_31660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__;
})()
;})(__34794,switch__30878__auto__,c__31075__auto___34798,G__31646_34795,G__31646_34796__$1,n__5616__auto___34793,jobs,results,process__$1,async))
})();
var state__31077__auto__ = (function (){var statearr_31673 = f__31076__auto__();
(statearr_31673[(6)] = c__31075__auto___34798);

return statearr_31673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
});})(__34794,c__31075__auto___34798,G__31646_34795,G__31646_34796__$1,n__5616__auto___34793,jobs,results,process__$1,async))
);


break;
case "async":
var c__31075__auto___34827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34794,c__31075__auto___34827,G__31646_34795,G__31646_34796__$1,n__5616__auto___34793,jobs,results,process__$1,async){
return (function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = ((function (__34794,c__31075__auto___34827,G__31646_34795,G__31646_34796__$1,n__5616__auto___34793,jobs,results,process__$1,async){
return (function (state_31698){
var state_val_31703 = (state_31698[(1)]);
if((state_val_31703 === (1))){
var state_31698__$1 = state_31698;
var statearr_31716_34828 = state_31698__$1;
(statearr_31716_34828[(2)] = null);

(statearr_31716_34828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (2))){
var state_31698__$1 = state_31698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31698__$1,(4),jobs);
} else {
if((state_val_31703 === (3))){
var inst_31696 = (state_31698[(2)]);
var state_31698__$1 = state_31698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31698__$1,inst_31696);
} else {
if((state_val_31703 === (4))){
var inst_31682 = (state_31698[(2)]);
var inst_31689 = async(inst_31682);
var state_31698__$1 = state_31698;
if(cljs.core.truth_(inst_31689)){
var statearr_31718_34832 = state_31698__$1;
(statearr_31718_34832[(1)] = (5));

} else {
var statearr_31719_34833 = state_31698__$1;
(statearr_31719_34833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (5))){
var state_31698__$1 = state_31698;
var statearr_31720_34834 = state_31698__$1;
(statearr_31720_34834[(2)] = null);

(statearr_31720_34834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (6))){
var state_31698__$1 = state_31698;
var statearr_31721_34835 = state_31698__$1;
(statearr_31721_34835[(2)] = null);

(statearr_31721_34835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (7))){
var inst_31694 = (state_31698[(2)]);
var state_31698__$1 = state_31698;
var statearr_31722_34836 = state_31698__$1;
(statearr_31722_34836[(2)] = inst_31694);

(statearr_31722_34836[(1)] = (3));


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
});})(__34794,c__31075__auto___34827,G__31646_34795,G__31646_34796__$1,n__5616__auto___34793,jobs,results,process__$1,async))
;
return ((function (__34794,switch__30878__auto__,c__31075__auto___34827,G__31646_34795,G__31646_34796__$1,n__5616__auto___34793,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0 = (function (){
var statearr_31723 = [null,null,null,null,null,null,null];
(statearr_31723[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__);

(statearr_31723[(1)] = (1));

return statearr_31723;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1 = (function (state_31698){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_31698);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e31724){var ex__30882__auto__ = e31724;
var statearr_31725_34838 = state_31698;
(statearr_31725_34838[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_31698[(4)]))){
var statearr_31730_34839 = state_31698;
(statearr_31730_34839[(1)] = cljs.core.first((state_31698[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34840 = state_31698;
state_31698 = G__34840;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = function(state_31698){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1.call(this,state_31698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__;
})()
;})(__34794,switch__30878__auto__,c__31075__auto___34827,G__31646_34795,G__31646_34796__$1,n__5616__auto___34793,jobs,results,process__$1,async))
})();
var state__31077__auto__ = (function (){var statearr_31732 = f__31076__auto__();
(statearr_31732[(6)] = c__31075__auto___34827);

return statearr_31732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
});})(__34794,c__31075__auto___34827,G__31646_34795,G__31646_34796__$1,n__5616__auto___34793,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31646_34796__$1)].join('')));

}

var G__34841 = (__34794 + (1));
__34794 = G__34841;
continue;
} else {
}
break;
}

var c__31075__auto___34842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = (function (state_31764){
var state_val_31765 = (state_31764[(1)]);
if((state_val_31765 === (7))){
var inst_31760 = (state_31764[(2)]);
var state_31764__$1 = state_31764;
var statearr_31768_34843 = state_31764__$1;
(statearr_31768_34843[(2)] = inst_31760);

(statearr_31768_34843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (1))){
var state_31764__$1 = state_31764;
var statearr_31770_34844 = state_31764__$1;
(statearr_31770_34844[(2)] = null);

(statearr_31770_34844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (4))){
var inst_31740 = (state_31764[(7)]);
var inst_31740__$1 = (state_31764[(2)]);
var inst_31742 = (inst_31740__$1 == null);
var state_31764__$1 = (function (){var statearr_31772 = state_31764;
(statearr_31772[(7)] = inst_31740__$1);

return statearr_31772;
})();
if(cljs.core.truth_(inst_31742)){
var statearr_31773_34848 = state_31764__$1;
(statearr_31773_34848[(1)] = (5));

} else {
var statearr_31775_34849 = state_31764__$1;
(statearr_31775_34849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (6))){
var inst_31740 = (state_31764[(7)]);
var inst_31749 = (state_31764[(8)]);
var inst_31749__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31750 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31752 = [inst_31740,inst_31749__$1];
var inst_31753 = (new cljs.core.PersistentVector(null,2,(5),inst_31750,inst_31752,null));
var state_31764__$1 = (function (){var statearr_31776 = state_31764;
(statearr_31776[(8)] = inst_31749__$1);

return statearr_31776;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31764__$1,(8),jobs,inst_31753);
} else {
if((state_val_31765 === (3))){
var inst_31762 = (state_31764[(2)]);
var state_31764__$1 = state_31764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31764__$1,inst_31762);
} else {
if((state_val_31765 === (2))){
var state_31764__$1 = state_31764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31764__$1,(4),from);
} else {
if((state_val_31765 === (9))){
var inst_31757 = (state_31764[(2)]);
var state_31764__$1 = (function (){var statearr_31790 = state_31764;
(statearr_31790[(9)] = inst_31757);

return statearr_31790;
})();
var statearr_31794_34850 = state_31764__$1;
(statearr_31794_34850[(2)] = null);

(statearr_31794_34850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (5))){
var inst_31744 = cljs.core.async.close_BANG_(jobs);
var state_31764__$1 = state_31764;
var statearr_31799_34851 = state_31764__$1;
(statearr_31799_34851[(2)] = inst_31744);

(statearr_31799_34851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31765 === (8))){
var inst_31749 = (state_31764[(8)]);
var inst_31755 = (state_31764[(2)]);
var state_31764__$1 = (function (){var statearr_31810 = state_31764;
(statearr_31810[(10)] = inst_31755);

return statearr_31810;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31764__$1,(9),results,inst_31749);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0 = (function (){
var statearr_31813 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31813[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__);

(statearr_31813[(1)] = (1));

return statearr_31813;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1 = (function (state_31764){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_31764);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e31816){var ex__30882__auto__ = e31816;
var statearr_31817_34855 = state_31764;
(statearr_31817_34855[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_31764[(4)]))){
var statearr_31818_34856 = state_31764;
(statearr_31818_34856[(1)] = cljs.core.first((state_31764[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34857 = state_31764;
state_31764 = G__34857;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = function(state_31764){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1.call(this,state_31764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__;
})()
})();
var state__31077__auto__ = (function (){var statearr_31825 = f__31076__auto__();
(statearr_31825[(6)] = c__31075__auto___34842);

return statearr_31825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
}));


var c__31075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = (function (state_31892){
var state_val_31894 = (state_31892[(1)]);
if((state_val_31894 === (7))){
var inst_31875 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
var statearr_31914_34859 = state_31892__$1;
(statearr_31914_34859[(2)] = inst_31875);

(statearr_31914_34859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (20))){
var state_31892__$1 = state_31892;
var statearr_31916_34860 = state_31892__$1;
(statearr_31916_34860[(2)] = null);

(statearr_31916_34860[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (1))){
var state_31892__$1 = state_31892;
var statearr_31932_34861 = state_31892__$1;
(statearr_31932_34861[(2)] = null);

(statearr_31932_34861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (4))){
var inst_31835 = (state_31892[(7)]);
var inst_31835__$1 = (state_31892[(2)]);
var inst_31836 = (inst_31835__$1 == null);
var state_31892__$1 = (function (){var statearr_31944 = state_31892;
(statearr_31944[(7)] = inst_31835__$1);

return statearr_31944;
})();
if(cljs.core.truth_(inst_31836)){
var statearr_31946_34862 = state_31892__$1;
(statearr_31946_34862[(1)] = (5));

} else {
var statearr_31948_34863 = state_31892__$1;
(statearr_31948_34863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (15))){
var inst_31849 = (state_31892[(8)]);
var state_31892__$1 = state_31892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31892__$1,(18),to,inst_31849);
} else {
if((state_val_31894 === (21))){
var inst_31870 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
var statearr_31952_34867 = state_31892__$1;
(statearr_31952_34867[(2)] = inst_31870);

(statearr_31952_34867[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (13))){
var inst_31872 = (state_31892[(2)]);
var state_31892__$1 = (function (){var statearr_31959 = state_31892;
(statearr_31959[(9)] = inst_31872);

return statearr_31959;
})();
var statearr_31960_34868 = state_31892__$1;
(statearr_31960_34868[(2)] = null);

(statearr_31960_34868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (6))){
var inst_31835 = (state_31892[(7)]);
var state_31892__$1 = state_31892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31892__$1,(11),inst_31835);
} else {
if((state_val_31894 === (17))){
var inst_31861 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
if(cljs.core.truth_(inst_31861)){
var statearr_31971_34869 = state_31892__$1;
(statearr_31971_34869[(1)] = (19));

} else {
var statearr_31980_34870 = state_31892__$1;
(statearr_31980_34870[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (3))){
var inst_31878 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31892__$1,inst_31878);
} else {
if((state_val_31894 === (12))){
var inst_31846 = (state_31892[(10)]);
var state_31892__$1 = state_31892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31892__$1,(14),inst_31846);
} else {
if((state_val_31894 === (2))){
var state_31892__$1 = state_31892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31892__$1,(4),results);
} else {
if((state_val_31894 === (19))){
var state_31892__$1 = state_31892;
var statearr_32032_34871 = state_31892__$1;
(statearr_32032_34871[(2)] = null);

(statearr_32032_34871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (11))){
var inst_31846 = (state_31892[(2)]);
var state_31892__$1 = (function (){var statearr_32059 = state_31892;
(statearr_32059[(10)] = inst_31846);

return statearr_32059;
})();
var statearr_32067_34872 = state_31892__$1;
(statearr_32067_34872[(2)] = null);

(statearr_32067_34872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (9))){
var state_31892__$1 = state_31892;
var statearr_32073_34873 = state_31892__$1;
(statearr_32073_34873[(2)] = null);

(statearr_32073_34873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (5))){
var state_31892__$1 = state_31892;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32088_34878 = state_31892__$1;
(statearr_32088_34878[(1)] = (8));

} else {
var statearr_32089_34879 = state_31892__$1;
(statearr_32089_34879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (14))){
var inst_31849 = (state_31892[(8)]);
var inst_31854 = (state_31892[(11)]);
var inst_31849__$1 = (state_31892[(2)]);
var inst_31853 = (inst_31849__$1 == null);
var inst_31854__$1 = cljs.core.not(inst_31853);
var state_31892__$1 = (function (){var statearr_32090 = state_31892;
(statearr_32090[(8)] = inst_31849__$1);

(statearr_32090[(11)] = inst_31854__$1);

return statearr_32090;
})();
if(inst_31854__$1){
var statearr_32091_34883 = state_31892__$1;
(statearr_32091_34883[(1)] = (15));

} else {
var statearr_32093_34884 = state_31892__$1;
(statearr_32093_34884[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (16))){
var inst_31854 = (state_31892[(11)]);
var state_31892__$1 = state_31892;
var statearr_32094_34885 = state_31892__$1;
(statearr_32094_34885[(2)] = inst_31854);

(statearr_32094_34885[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (10))){
var inst_31843 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
var statearr_32096_34887 = state_31892__$1;
(statearr_32096_34887[(2)] = inst_31843);

(statearr_32096_34887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (18))){
var inst_31858 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
var statearr_32100_34888 = state_31892__$1;
(statearr_32100_34888[(2)] = inst_31858);

(statearr_32100_34888[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (8))){
var inst_31840 = cljs.core.async.close_BANG_(to);
var state_31892__$1 = state_31892;
var statearr_32101_34892 = state_31892__$1;
(statearr_32101_34892[(2)] = inst_31840);

(statearr_32101_34892[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0 = (function (){
var statearr_32102 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32102[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__);

(statearr_32102[(1)] = (1));

return statearr_32102;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1 = (function (state_31892){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_31892);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e32103){var ex__30882__auto__ = e32103;
var statearr_32104_34893 = state_31892;
(statearr_32104_34893[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_31892[(4)]))){
var statearr_32105_34894 = state_31892;
(statearr_32105_34894[(1)] = cljs.core.first((state_31892[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34895 = state_31892;
state_31892 = G__34895;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = function(state_31892){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1.call(this,state_31892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__;
})()
})();
var state__31077__auto__ = (function (){var statearr_32106 = f__31076__auto__();
(statearr_32106[(6)] = c__31075__auto__);

return statearr_32106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
}));

return c__31075__auto__;
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
var G__32108 = arguments.length;
switch (G__32108) {
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
var G__32112 = arguments.length;
switch (G__32112) {
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
var G__32118 = arguments.length;
switch (G__32118) {
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
var c__31075__auto___34905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = (function (state_32145){
var state_val_32146 = (state_32145[(1)]);
if((state_val_32146 === (7))){
var inst_32141 = (state_32145[(2)]);
var state_32145__$1 = state_32145;
var statearr_32148_34909 = state_32145__$1;
(statearr_32148_34909[(2)] = inst_32141);

(statearr_32148_34909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (1))){
var state_32145__$1 = state_32145;
var statearr_32151_34910 = state_32145__$1;
(statearr_32151_34910[(2)] = null);

(statearr_32151_34910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (4))){
var inst_32121 = (state_32145[(7)]);
var inst_32121__$1 = (state_32145[(2)]);
var inst_32123 = (inst_32121__$1 == null);
var state_32145__$1 = (function (){var statearr_32155 = state_32145;
(statearr_32155[(7)] = inst_32121__$1);

return statearr_32155;
})();
if(cljs.core.truth_(inst_32123)){
var statearr_32156_34911 = state_32145__$1;
(statearr_32156_34911[(1)] = (5));

} else {
var statearr_32157_34912 = state_32145__$1;
(statearr_32157_34912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (13))){
var state_32145__$1 = state_32145;
var statearr_32159_34913 = state_32145__$1;
(statearr_32159_34913[(2)] = null);

(statearr_32159_34913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (6))){
var inst_32121 = (state_32145[(7)]);
var inst_32128 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32121) : p.call(null,inst_32121));
var state_32145__$1 = state_32145;
if(cljs.core.truth_(inst_32128)){
var statearr_32160_34914 = state_32145__$1;
(statearr_32160_34914[(1)] = (9));

} else {
var statearr_32161_34915 = state_32145__$1;
(statearr_32161_34915[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (3))){
var inst_32143 = (state_32145[(2)]);
var state_32145__$1 = state_32145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32145__$1,inst_32143);
} else {
if((state_val_32146 === (12))){
var state_32145__$1 = state_32145;
var statearr_32162_34916 = state_32145__$1;
(statearr_32162_34916[(2)] = null);

(statearr_32162_34916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (2))){
var state_32145__$1 = state_32145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32145__$1,(4),ch);
} else {
if((state_val_32146 === (11))){
var inst_32121 = (state_32145[(7)]);
var inst_32132 = (state_32145[(2)]);
var state_32145__$1 = state_32145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32145__$1,(8),inst_32132,inst_32121);
} else {
if((state_val_32146 === (9))){
var state_32145__$1 = state_32145;
var statearr_32163_34917 = state_32145__$1;
(statearr_32163_34917[(2)] = tc);

(statearr_32163_34917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (5))){
var inst_32125 = cljs.core.async.close_BANG_(tc);
var inst_32126 = cljs.core.async.close_BANG_(fc);
var state_32145__$1 = (function (){var statearr_32173 = state_32145;
(statearr_32173[(8)] = inst_32125);

return statearr_32173;
})();
var statearr_32175_34919 = state_32145__$1;
(statearr_32175_34919[(2)] = inst_32126);

(statearr_32175_34919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (14))){
var inst_32139 = (state_32145[(2)]);
var state_32145__$1 = state_32145;
var statearr_32180_34920 = state_32145__$1;
(statearr_32180_34920[(2)] = inst_32139);

(statearr_32180_34920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (10))){
var state_32145__$1 = state_32145;
var statearr_32181_34921 = state_32145__$1;
(statearr_32181_34921[(2)] = fc);

(statearr_32181_34921[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (8))){
var inst_32134 = (state_32145[(2)]);
var state_32145__$1 = state_32145;
if(cljs.core.truth_(inst_32134)){
var statearr_32185_34928 = state_32145__$1;
(statearr_32185_34928[(1)] = (12));

} else {
var statearr_32186_34929 = state_32145__$1;
(statearr_32186_34929[(1)] = (13));

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
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_32189 = [null,null,null,null,null,null,null,null,null];
(statearr_32189[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_32189[(1)] = (1));

return statearr_32189;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_32145){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_32145);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e32190){var ex__30882__auto__ = e32190;
var statearr_32191_34930 = state_32145;
(statearr_32191_34930[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_32145[(4)]))){
var statearr_32192_34931 = state_32145;
(statearr_32192_34931[(1)] = cljs.core.first((state_32145[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34932 = state_32145;
state_32145 = G__34932;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_32145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_32145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
})();
var state__31077__auto__ = (function (){var statearr_32193 = f__31076__auto__();
(statearr_32193[(6)] = c__31075__auto___34905);

return statearr_32193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
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
var c__31075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = (function (state_32216){
var state_val_32217 = (state_32216[(1)]);
if((state_val_32217 === (7))){
var inst_32212 = (state_32216[(2)]);
var state_32216__$1 = state_32216;
var statearr_32218_34937 = state_32216__$1;
(statearr_32218_34937[(2)] = inst_32212);

(statearr_32218_34937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32217 === (1))){
var inst_32195 = init;
var inst_32196 = inst_32195;
var state_32216__$1 = (function (){var statearr_32220 = state_32216;
(statearr_32220[(7)] = inst_32196);

return statearr_32220;
})();
var statearr_32222_34938 = state_32216__$1;
(statearr_32222_34938[(2)] = null);

(statearr_32222_34938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32217 === (4))){
var inst_32199 = (state_32216[(8)]);
var inst_32199__$1 = (state_32216[(2)]);
var inst_32200 = (inst_32199__$1 == null);
var state_32216__$1 = (function (){var statearr_32224 = state_32216;
(statearr_32224[(8)] = inst_32199__$1);

return statearr_32224;
})();
if(cljs.core.truth_(inst_32200)){
var statearr_32225_34939 = state_32216__$1;
(statearr_32225_34939[(1)] = (5));

} else {
var statearr_32229_34940 = state_32216__$1;
(statearr_32229_34940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32217 === (6))){
var inst_32196 = (state_32216[(7)]);
var inst_32199 = (state_32216[(8)]);
var inst_32203 = (state_32216[(9)]);
var inst_32203__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32196,inst_32199) : f.call(null,inst_32196,inst_32199));
var inst_32204 = cljs.core.reduced_QMARK_(inst_32203__$1);
var state_32216__$1 = (function (){var statearr_32232 = state_32216;
(statearr_32232[(9)] = inst_32203__$1);

return statearr_32232;
})();
if(inst_32204){
var statearr_32233_34941 = state_32216__$1;
(statearr_32233_34941[(1)] = (8));

} else {
var statearr_32234_34942 = state_32216__$1;
(statearr_32234_34942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32217 === (3))){
var inst_32214 = (state_32216[(2)]);
var state_32216__$1 = state_32216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32216__$1,inst_32214);
} else {
if((state_val_32217 === (2))){
var state_32216__$1 = state_32216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32216__$1,(4),ch);
} else {
if((state_val_32217 === (9))){
var inst_32203 = (state_32216[(9)]);
var inst_32196 = inst_32203;
var state_32216__$1 = (function (){var statearr_32235 = state_32216;
(statearr_32235[(7)] = inst_32196);

return statearr_32235;
})();
var statearr_32236_34943 = state_32216__$1;
(statearr_32236_34943[(2)] = null);

(statearr_32236_34943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32217 === (5))){
var inst_32196 = (state_32216[(7)]);
var state_32216__$1 = state_32216;
var statearr_32237_34944 = state_32216__$1;
(statearr_32237_34944[(2)] = inst_32196);

(statearr_32237_34944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32217 === (10))){
var inst_32210 = (state_32216[(2)]);
var state_32216__$1 = state_32216;
var statearr_32238_34945 = state_32216__$1;
(statearr_32238_34945[(2)] = inst_32210);

(statearr_32238_34945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32217 === (8))){
var inst_32203 = (state_32216[(9)]);
var inst_32206 = cljs.core.deref(inst_32203);
var state_32216__$1 = state_32216;
var statearr_32239_34946 = state_32216__$1;
(statearr_32239_34946[(2)] = inst_32206);

(statearr_32239_34946[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30879__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30879__auto____0 = (function (){
var statearr_32242 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32242[(0)] = cljs$core$async$reduce_$_state_machine__30879__auto__);

(statearr_32242[(1)] = (1));

return statearr_32242;
});
var cljs$core$async$reduce_$_state_machine__30879__auto____1 = (function (state_32216){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_32216);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e32243){var ex__30882__auto__ = e32243;
var statearr_32244_34947 = state_32216;
(statearr_32244_34947[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_32216[(4)]))){
var statearr_32245_34952 = state_32216;
(statearr_32245_34952[(1)] = cljs.core.first((state_32216[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34953 = state_32216;
state_32216 = G__34953;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30879__auto__ = function(state_32216){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30879__auto____1.call(this,state_32216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30879__auto____0;
cljs$core$async$reduce_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30879__auto____1;
return cljs$core$async$reduce_$_state_machine__30879__auto__;
})()
})();
var state__31077__auto__ = (function (){var statearr_32250 = f__31076__auto__();
(statearr_32250[(6)] = c__31075__auto__);

return statearr_32250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
}));

return c__31075__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = (function (state_32258){
var state_val_32259 = (state_32258[(1)]);
if((state_val_32259 === (1))){
var inst_32253 = cljs.core.async.reduce(f__$1,init,ch);
var state_32258__$1 = state_32258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32258__$1,(2),inst_32253);
} else {
if((state_val_32259 === (2))){
var inst_32255 = (state_32258[(2)]);
var inst_32256 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32255) : f__$1.call(null,inst_32255));
var state_32258__$1 = state_32258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32258__$1,inst_32256);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30879__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30879__auto____0 = (function (){
var statearr_32260 = [null,null,null,null,null,null,null];
(statearr_32260[(0)] = cljs$core$async$transduce_$_state_machine__30879__auto__);

(statearr_32260[(1)] = (1));

return statearr_32260;
});
var cljs$core$async$transduce_$_state_machine__30879__auto____1 = (function (state_32258){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_32258);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e32261){var ex__30882__auto__ = e32261;
var statearr_32262_34966 = state_32258;
(statearr_32262_34966[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_32258[(4)]))){
var statearr_32263_34971 = state_32258;
(statearr_32263_34971[(1)] = cljs.core.first((state_32258[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34975 = state_32258;
state_32258 = G__34975;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30879__auto__ = function(state_32258){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30879__auto____1.call(this,state_32258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30879__auto____0;
cljs$core$async$transduce_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30879__auto____1;
return cljs$core$async$transduce_$_state_machine__30879__auto__;
})()
})();
var state__31077__auto__ = (function (){var statearr_32264 = f__31076__auto__();
(statearr_32264[(6)] = c__31075__auto__);

return statearr_32264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
}));

return c__31075__auto__;
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
var G__32266 = arguments.length;
switch (G__32266) {
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
var c__31075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = (function (state_32291){
var state_val_32292 = (state_32291[(1)]);
if((state_val_32292 === (7))){
var inst_32273 = (state_32291[(2)]);
var state_32291__$1 = state_32291;
var statearr_32293_34977 = state_32291__$1;
(statearr_32293_34977[(2)] = inst_32273);

(statearr_32293_34977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (1))){
var inst_32267 = cljs.core.seq(coll);
var inst_32268 = inst_32267;
var state_32291__$1 = (function (){var statearr_32294 = state_32291;
(statearr_32294[(7)] = inst_32268);

return statearr_32294;
})();
var statearr_32296_34982 = state_32291__$1;
(statearr_32296_34982[(2)] = null);

(statearr_32296_34982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (4))){
var inst_32268 = (state_32291[(7)]);
var inst_32271 = cljs.core.first(inst_32268);
var state_32291__$1 = state_32291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32291__$1,(7),ch,inst_32271);
} else {
if((state_val_32292 === (13))){
var inst_32285 = (state_32291[(2)]);
var state_32291__$1 = state_32291;
var statearr_32297_34984 = state_32291__$1;
(statearr_32297_34984[(2)] = inst_32285);

(statearr_32297_34984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (6))){
var inst_32276 = (state_32291[(2)]);
var state_32291__$1 = state_32291;
if(cljs.core.truth_(inst_32276)){
var statearr_32298_34985 = state_32291__$1;
(statearr_32298_34985[(1)] = (8));

} else {
var statearr_32299_34986 = state_32291__$1;
(statearr_32299_34986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (3))){
var inst_32289 = (state_32291[(2)]);
var state_32291__$1 = state_32291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32291__$1,inst_32289);
} else {
if((state_val_32292 === (12))){
var state_32291__$1 = state_32291;
var statearr_32301_34990 = state_32291__$1;
(statearr_32301_34990[(2)] = null);

(statearr_32301_34990[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (2))){
var inst_32268 = (state_32291[(7)]);
var state_32291__$1 = state_32291;
if(cljs.core.truth_(inst_32268)){
var statearr_32305_34994 = state_32291__$1;
(statearr_32305_34994[(1)] = (4));

} else {
var statearr_32306_34995 = state_32291__$1;
(statearr_32306_34995[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (11))){
var inst_32282 = cljs.core.async.close_BANG_(ch);
var state_32291__$1 = state_32291;
var statearr_32307_35004 = state_32291__$1;
(statearr_32307_35004[(2)] = inst_32282);

(statearr_32307_35004[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (9))){
var state_32291__$1 = state_32291;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32308_35008 = state_32291__$1;
(statearr_32308_35008[(1)] = (11));

} else {
var statearr_32309_35009 = state_32291__$1;
(statearr_32309_35009[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (5))){
var inst_32268 = (state_32291[(7)]);
var state_32291__$1 = state_32291;
var statearr_32312_35019 = state_32291__$1;
(statearr_32312_35019[(2)] = inst_32268);

(statearr_32312_35019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (10))){
var inst_32287 = (state_32291[(2)]);
var state_32291__$1 = state_32291;
var statearr_32313_35045 = state_32291__$1;
(statearr_32313_35045[(2)] = inst_32287);

(statearr_32313_35045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32292 === (8))){
var inst_32268 = (state_32291[(7)]);
var inst_32278 = cljs.core.next(inst_32268);
var inst_32268__$1 = inst_32278;
var state_32291__$1 = (function (){var statearr_32314 = state_32291;
(statearr_32314[(7)] = inst_32268__$1);

return statearr_32314;
})();
var statearr_32316_35056 = state_32291__$1;
(statearr_32316_35056[(2)] = null);

(statearr_32316_35056[(1)] = (2));


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
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_32320 = [null,null,null,null,null,null,null,null];
(statearr_32320[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_32320[(1)] = (1));

return statearr_32320;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_32291){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_32291);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e32321){var ex__30882__auto__ = e32321;
var statearr_32322_35058 = state_32291;
(statearr_32322_35058[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_32291[(4)]))){
var statearr_32324_35059 = state_32291;
(statearr_32324_35059[(1)] = cljs.core.first((state_32291[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35060 = state_32291;
state_32291 = G__35060;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_32291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_32291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
})();
var state__31077__auto__ = (function (){var statearr_32326 = f__31076__auto__();
(statearr_32326[(6)] = c__31075__auto__);

return statearr_32326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
}));

return c__31075__auto__;
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
var G__32335 = arguments.length;
switch (G__32335) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_35076 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_35076(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35081 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_35081(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35082 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_35082(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35083 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_35083(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32386 = (function (ch,cs,meta32387){
this.ch = ch;
this.cs = cs;
this.meta32387 = meta32387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32388,meta32387__$1){
var self__ = this;
var _32388__$1 = this;
return (new cljs.core.async.t_cljs$core$async32386(self__.ch,self__.cs,meta32387__$1));
}));

(cljs.core.async.t_cljs$core$async32386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32388){
var self__ = this;
var _32388__$1 = this;
return self__.meta32387;
}));

(cljs.core.async.t_cljs$core$async32386.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32386.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32386.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32386.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32386.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32386.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32387","meta32387",34679609,null)], null);
}));

(cljs.core.async.t_cljs$core$async32386.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32386");

(cljs.core.async.t_cljs$core$async32386.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32386");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32386.
 */
cljs.core.async.__GT_t_cljs$core$async32386 = (function cljs$core$async$__GT_t_cljs$core$async32386(ch,cs,meta32387){
return (new cljs.core.async.t_cljs$core$async32386(ch,cs,meta32387));
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
var m = (new cljs.core.async.t_cljs$core$async32386(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31075__auto___35087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = (function (state_32546){
var state_val_32547 = (state_32546[(1)]);
if((state_val_32547 === (7))){
var inst_32542 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32554_35088 = state_32546__$1;
(statearr_32554_35088[(2)] = inst_32542);

(statearr_32554_35088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (20))){
var inst_32433 = (state_32546[(7)]);
var inst_32446 = cljs.core.first(inst_32433);
var inst_32447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32446,(0),null);
var inst_32448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32446,(1),null);
var state_32546__$1 = (function (){var statearr_32555 = state_32546;
(statearr_32555[(8)] = inst_32447);

return statearr_32555;
})();
if(cljs.core.truth_(inst_32448)){
var statearr_32556_35089 = state_32546__$1;
(statearr_32556_35089[(1)] = (22));

} else {
var statearr_32557_35090 = state_32546__$1;
(statearr_32557_35090[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (27))){
var inst_32479 = (state_32546[(9)]);
var inst_32481 = (state_32546[(10)]);
var inst_32487 = (state_32546[(11)]);
var inst_32400 = (state_32546[(12)]);
var inst_32487__$1 = cljs.core._nth(inst_32479,inst_32481);
var inst_32488 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32487__$1,inst_32400,done);
var state_32546__$1 = (function (){var statearr_32558 = state_32546;
(statearr_32558[(11)] = inst_32487__$1);

return statearr_32558;
})();
if(cljs.core.truth_(inst_32488)){
var statearr_32559_35091 = state_32546__$1;
(statearr_32559_35091[(1)] = (30));

} else {
var statearr_32560_35092 = state_32546__$1;
(statearr_32560_35092[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (1))){
var state_32546__$1 = state_32546;
var statearr_32561_35093 = state_32546__$1;
(statearr_32561_35093[(2)] = null);

(statearr_32561_35093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (24))){
var inst_32433 = (state_32546[(7)]);
var inst_32453 = (state_32546[(2)]);
var inst_32454 = cljs.core.next(inst_32433);
var inst_32409 = inst_32454;
var inst_32410 = null;
var inst_32411 = (0);
var inst_32412 = (0);
var state_32546__$1 = (function (){var statearr_32569 = state_32546;
(statearr_32569[(13)] = inst_32453);

(statearr_32569[(14)] = inst_32409);

(statearr_32569[(15)] = inst_32410);

(statearr_32569[(16)] = inst_32411);

(statearr_32569[(17)] = inst_32412);

return statearr_32569;
})();
var statearr_32571_35094 = state_32546__$1;
(statearr_32571_35094[(2)] = null);

(statearr_32571_35094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (39))){
var state_32546__$1 = state_32546;
var statearr_32578_35095 = state_32546__$1;
(statearr_32578_35095[(2)] = null);

(statearr_32578_35095[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (4))){
var inst_32400 = (state_32546[(12)]);
var inst_32400__$1 = (state_32546[(2)]);
var inst_32401 = (inst_32400__$1 == null);
var state_32546__$1 = (function (){var statearr_32580 = state_32546;
(statearr_32580[(12)] = inst_32400__$1);

return statearr_32580;
})();
if(cljs.core.truth_(inst_32401)){
var statearr_32581_35096 = state_32546__$1;
(statearr_32581_35096[(1)] = (5));

} else {
var statearr_32582_35097 = state_32546__$1;
(statearr_32582_35097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (15))){
var inst_32412 = (state_32546[(17)]);
var inst_32409 = (state_32546[(14)]);
var inst_32410 = (state_32546[(15)]);
var inst_32411 = (state_32546[(16)]);
var inst_32427 = (state_32546[(2)]);
var inst_32430 = (inst_32412 + (1));
var tmp32574 = inst_32411;
var tmp32575 = inst_32410;
var tmp32576 = inst_32409;
var inst_32409__$1 = tmp32576;
var inst_32410__$1 = tmp32575;
var inst_32411__$1 = tmp32574;
var inst_32412__$1 = inst_32430;
var state_32546__$1 = (function (){var statearr_32583 = state_32546;
(statearr_32583[(18)] = inst_32427);

(statearr_32583[(14)] = inst_32409__$1);

(statearr_32583[(15)] = inst_32410__$1);

(statearr_32583[(16)] = inst_32411__$1);

(statearr_32583[(17)] = inst_32412__$1);

return statearr_32583;
})();
var statearr_32584_35098 = state_32546__$1;
(statearr_32584_35098[(2)] = null);

(statearr_32584_35098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (21))){
var inst_32457 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32595_35099 = state_32546__$1;
(statearr_32595_35099[(2)] = inst_32457);

(statearr_32595_35099[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (31))){
var inst_32487 = (state_32546[(11)]);
var inst_32491 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32487);
var state_32546__$1 = state_32546;
var statearr_32605_35100 = state_32546__$1;
(statearr_32605_35100[(2)] = inst_32491);

(statearr_32605_35100[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (32))){
var inst_32481 = (state_32546[(10)]);
var inst_32478 = (state_32546[(19)]);
var inst_32479 = (state_32546[(9)]);
var inst_32480 = (state_32546[(20)]);
var inst_32493 = (state_32546[(2)]);
var inst_32494 = (inst_32481 + (1));
var tmp32586 = inst_32478;
var tmp32587 = inst_32479;
var tmp32588 = inst_32480;
var inst_32478__$1 = tmp32586;
var inst_32479__$1 = tmp32587;
var inst_32480__$1 = tmp32588;
var inst_32481__$1 = inst_32494;
var state_32546__$1 = (function (){var statearr_32609 = state_32546;
(statearr_32609[(21)] = inst_32493);

(statearr_32609[(19)] = inst_32478__$1);

(statearr_32609[(9)] = inst_32479__$1);

(statearr_32609[(20)] = inst_32480__$1);

(statearr_32609[(10)] = inst_32481__$1);

return statearr_32609;
})();
var statearr_32633_35103 = state_32546__$1;
(statearr_32633_35103[(2)] = null);

(statearr_32633_35103[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (40))){
var inst_32510 = (state_32546[(22)]);
var inst_32517 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32510);
var state_32546__$1 = state_32546;
var statearr_32634_35104 = state_32546__$1;
(statearr_32634_35104[(2)] = inst_32517);

(statearr_32634_35104[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (33))){
var inst_32498 = (state_32546[(23)]);
var inst_32501 = cljs.core.chunked_seq_QMARK_(inst_32498);
var state_32546__$1 = state_32546;
if(inst_32501){
var statearr_32635_35105 = state_32546__$1;
(statearr_32635_35105[(1)] = (36));

} else {
var statearr_32636_35106 = state_32546__$1;
(statearr_32636_35106[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (13))){
var inst_32421 = (state_32546[(24)]);
var inst_32424 = cljs.core.async.close_BANG_(inst_32421);
var state_32546__$1 = state_32546;
var statearr_32637_35107 = state_32546__$1;
(statearr_32637_35107[(2)] = inst_32424);

(statearr_32637_35107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (22))){
var inst_32447 = (state_32546[(8)]);
var inst_32450 = cljs.core.async.close_BANG_(inst_32447);
var state_32546__$1 = state_32546;
var statearr_32638_35108 = state_32546__$1;
(statearr_32638_35108[(2)] = inst_32450);

(statearr_32638_35108[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (36))){
var inst_32498 = (state_32546[(23)]);
var inst_32503 = cljs.core.chunk_first(inst_32498);
var inst_32504 = cljs.core.chunk_rest(inst_32498);
var inst_32507 = cljs.core.count(inst_32503);
var inst_32478 = inst_32504;
var inst_32479 = inst_32503;
var inst_32480 = inst_32507;
var inst_32481 = (0);
var state_32546__$1 = (function (){var statearr_32640 = state_32546;
(statearr_32640[(19)] = inst_32478);

(statearr_32640[(9)] = inst_32479);

(statearr_32640[(20)] = inst_32480);

(statearr_32640[(10)] = inst_32481);

return statearr_32640;
})();
var statearr_32641_35115 = state_32546__$1;
(statearr_32641_35115[(2)] = null);

(statearr_32641_35115[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (41))){
var inst_32498 = (state_32546[(23)]);
var inst_32519 = (state_32546[(2)]);
var inst_32520 = cljs.core.next(inst_32498);
var inst_32478 = inst_32520;
var inst_32479 = null;
var inst_32480 = (0);
var inst_32481 = (0);
var state_32546__$1 = (function (){var statearr_32647 = state_32546;
(statearr_32647[(25)] = inst_32519);

(statearr_32647[(19)] = inst_32478);

(statearr_32647[(9)] = inst_32479);

(statearr_32647[(20)] = inst_32480);

(statearr_32647[(10)] = inst_32481);

return statearr_32647;
})();
var statearr_32648_35119 = state_32546__$1;
(statearr_32648_35119[(2)] = null);

(statearr_32648_35119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (43))){
var state_32546__$1 = state_32546;
var statearr_32651_35120 = state_32546__$1;
(statearr_32651_35120[(2)] = null);

(statearr_32651_35120[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (29))){
var inst_32528 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32655_35121 = state_32546__$1;
(statearr_32655_35121[(2)] = inst_32528);

(statearr_32655_35121[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (44))){
var inst_32539 = (state_32546[(2)]);
var state_32546__$1 = (function (){var statearr_32656 = state_32546;
(statearr_32656[(26)] = inst_32539);

return statearr_32656;
})();
var statearr_32657_35122 = state_32546__$1;
(statearr_32657_35122[(2)] = null);

(statearr_32657_35122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (6))){
var inst_32469 = (state_32546[(27)]);
var inst_32468 = cljs.core.deref(cs);
var inst_32469__$1 = cljs.core.keys(inst_32468);
var inst_32470 = cljs.core.count(inst_32469__$1);
var inst_32471 = cljs.core.reset_BANG_(dctr,inst_32470);
var inst_32477 = cljs.core.seq(inst_32469__$1);
var inst_32478 = inst_32477;
var inst_32479 = null;
var inst_32480 = (0);
var inst_32481 = (0);
var state_32546__$1 = (function (){var statearr_32677 = state_32546;
(statearr_32677[(27)] = inst_32469__$1);

(statearr_32677[(28)] = inst_32471);

(statearr_32677[(19)] = inst_32478);

(statearr_32677[(9)] = inst_32479);

(statearr_32677[(20)] = inst_32480);

(statearr_32677[(10)] = inst_32481);

return statearr_32677;
})();
var statearr_32682_35123 = state_32546__$1;
(statearr_32682_35123[(2)] = null);

(statearr_32682_35123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (28))){
var inst_32478 = (state_32546[(19)]);
var inst_32498 = (state_32546[(23)]);
var inst_32498__$1 = cljs.core.seq(inst_32478);
var state_32546__$1 = (function (){var statearr_32687 = state_32546;
(statearr_32687[(23)] = inst_32498__$1);

return statearr_32687;
})();
if(inst_32498__$1){
var statearr_32688_35124 = state_32546__$1;
(statearr_32688_35124[(1)] = (33));

} else {
var statearr_32689_35125 = state_32546__$1;
(statearr_32689_35125[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (25))){
var inst_32481 = (state_32546[(10)]);
var inst_32480 = (state_32546[(20)]);
var inst_32483 = (inst_32481 < inst_32480);
var inst_32484 = inst_32483;
var state_32546__$1 = state_32546;
if(cljs.core.truth_(inst_32484)){
var statearr_32693_35126 = state_32546__$1;
(statearr_32693_35126[(1)] = (27));

} else {
var statearr_32697_35127 = state_32546__$1;
(statearr_32697_35127[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (34))){
var state_32546__$1 = state_32546;
var statearr_32703_35128 = state_32546__$1;
(statearr_32703_35128[(2)] = null);

(statearr_32703_35128[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (17))){
var state_32546__$1 = state_32546;
var statearr_32710_35129 = state_32546__$1;
(statearr_32710_35129[(2)] = null);

(statearr_32710_35129[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (3))){
var inst_32544 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32546__$1,inst_32544);
} else {
if((state_val_32547 === (12))){
var inst_32462 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32734_35130 = state_32546__$1;
(statearr_32734_35130[(2)] = inst_32462);

(statearr_32734_35130[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (2))){
var state_32546__$1 = state_32546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32546__$1,(4),ch);
} else {
if((state_val_32547 === (23))){
var state_32546__$1 = state_32546;
var statearr_32740_35131 = state_32546__$1;
(statearr_32740_35131[(2)] = null);

(statearr_32740_35131[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (35))){
var inst_32526 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32741_35132 = state_32546__$1;
(statearr_32741_35132[(2)] = inst_32526);

(statearr_32741_35132[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (19))){
var inst_32433 = (state_32546[(7)]);
var inst_32438 = cljs.core.chunk_first(inst_32433);
var inst_32439 = cljs.core.chunk_rest(inst_32433);
var inst_32440 = cljs.core.count(inst_32438);
var inst_32409 = inst_32439;
var inst_32410 = inst_32438;
var inst_32411 = inst_32440;
var inst_32412 = (0);
var state_32546__$1 = (function (){var statearr_32746 = state_32546;
(statearr_32746[(14)] = inst_32409);

(statearr_32746[(15)] = inst_32410);

(statearr_32746[(16)] = inst_32411);

(statearr_32746[(17)] = inst_32412);

return statearr_32746;
})();
var statearr_32747_35133 = state_32546__$1;
(statearr_32747_35133[(2)] = null);

(statearr_32747_35133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (11))){
var inst_32409 = (state_32546[(14)]);
var inst_32433 = (state_32546[(7)]);
var inst_32433__$1 = cljs.core.seq(inst_32409);
var state_32546__$1 = (function (){var statearr_32750 = state_32546;
(statearr_32750[(7)] = inst_32433__$1);

return statearr_32750;
})();
if(inst_32433__$1){
var statearr_32751_35134 = state_32546__$1;
(statearr_32751_35134[(1)] = (16));

} else {
var statearr_32752_35135 = state_32546__$1;
(statearr_32752_35135[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (9))){
var inst_32464 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32753_35136 = state_32546__$1;
(statearr_32753_35136[(2)] = inst_32464);

(statearr_32753_35136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (5))){
var inst_32407 = cljs.core.deref(cs);
var inst_32408 = cljs.core.seq(inst_32407);
var inst_32409 = inst_32408;
var inst_32410 = null;
var inst_32411 = (0);
var inst_32412 = (0);
var state_32546__$1 = (function (){var statearr_32755 = state_32546;
(statearr_32755[(14)] = inst_32409);

(statearr_32755[(15)] = inst_32410);

(statearr_32755[(16)] = inst_32411);

(statearr_32755[(17)] = inst_32412);

return statearr_32755;
})();
var statearr_32756_35138 = state_32546__$1;
(statearr_32756_35138[(2)] = null);

(statearr_32756_35138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (14))){
var state_32546__$1 = state_32546;
var statearr_32758_35139 = state_32546__$1;
(statearr_32758_35139[(2)] = null);

(statearr_32758_35139[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (45))){
var inst_32536 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32759_35141 = state_32546__$1;
(statearr_32759_35141[(2)] = inst_32536);

(statearr_32759_35141[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (26))){
var inst_32469 = (state_32546[(27)]);
var inst_32530 = (state_32546[(2)]);
var inst_32532 = cljs.core.seq(inst_32469);
var state_32546__$1 = (function (){var statearr_32760 = state_32546;
(statearr_32760[(29)] = inst_32530);

return statearr_32760;
})();
if(inst_32532){
var statearr_32761_35142 = state_32546__$1;
(statearr_32761_35142[(1)] = (42));

} else {
var statearr_32762_35143 = state_32546__$1;
(statearr_32762_35143[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (16))){
var inst_32433 = (state_32546[(7)]);
var inst_32435 = cljs.core.chunked_seq_QMARK_(inst_32433);
var state_32546__$1 = state_32546;
if(inst_32435){
var statearr_32766_35145 = state_32546__$1;
(statearr_32766_35145[(1)] = (19));

} else {
var statearr_32767_35146 = state_32546__$1;
(statearr_32767_35146[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (38))){
var inst_32523 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32768_35150 = state_32546__$1;
(statearr_32768_35150[(2)] = inst_32523);

(statearr_32768_35150[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (30))){
var state_32546__$1 = state_32546;
var statearr_32769_35151 = state_32546__$1;
(statearr_32769_35151[(2)] = null);

(statearr_32769_35151[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (10))){
var inst_32410 = (state_32546[(15)]);
var inst_32412 = (state_32546[(17)]);
var inst_32420 = cljs.core._nth(inst_32410,inst_32412);
var inst_32421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32420,(0),null);
var inst_32422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32420,(1),null);
var state_32546__$1 = (function (){var statearr_32771 = state_32546;
(statearr_32771[(24)] = inst_32421);

return statearr_32771;
})();
if(cljs.core.truth_(inst_32422)){
var statearr_32773_35152 = state_32546__$1;
(statearr_32773_35152[(1)] = (13));

} else {
var statearr_32774_35153 = state_32546__$1;
(statearr_32774_35153[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (18))){
var inst_32460 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32775_35154 = state_32546__$1;
(statearr_32775_35154[(2)] = inst_32460);

(statearr_32775_35154[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (42))){
var state_32546__$1 = state_32546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32546__$1,(45),dchan);
} else {
if((state_val_32547 === (37))){
var inst_32498 = (state_32546[(23)]);
var inst_32510 = (state_32546[(22)]);
var inst_32400 = (state_32546[(12)]);
var inst_32510__$1 = cljs.core.first(inst_32498);
var inst_32514 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32510__$1,inst_32400,done);
var state_32546__$1 = (function (){var statearr_32777 = state_32546;
(statearr_32777[(22)] = inst_32510__$1);

return statearr_32777;
})();
if(cljs.core.truth_(inst_32514)){
var statearr_32778_35162 = state_32546__$1;
(statearr_32778_35162[(1)] = (39));

} else {
var statearr_32779_35163 = state_32546__$1;
(statearr_32779_35163[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (8))){
var inst_32412 = (state_32546[(17)]);
var inst_32411 = (state_32546[(16)]);
var inst_32414 = (inst_32412 < inst_32411);
var inst_32415 = inst_32414;
var state_32546__$1 = state_32546;
if(cljs.core.truth_(inst_32415)){
var statearr_32784_35168 = state_32546__$1;
(statearr_32784_35168[(1)] = (10));

} else {
var statearr_32785_35169 = state_32546__$1;
(statearr_32785_35169[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30879__auto__ = null;
var cljs$core$async$mult_$_state_machine__30879__auto____0 = (function (){
var statearr_32788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32788[(0)] = cljs$core$async$mult_$_state_machine__30879__auto__);

(statearr_32788[(1)] = (1));

return statearr_32788;
});
var cljs$core$async$mult_$_state_machine__30879__auto____1 = (function (state_32546){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_32546);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e32789){var ex__30882__auto__ = e32789;
var statearr_32790_35171 = state_32546;
(statearr_32790_35171[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_32546[(4)]))){
var statearr_32791_35172 = state_32546;
(statearr_32791_35172[(1)] = cljs.core.first((state_32546[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35173 = state_32546;
state_32546 = G__35173;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30879__auto__ = function(state_32546){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30879__auto____1.call(this,state_32546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30879__auto____0;
cljs$core$async$mult_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30879__auto____1;
return cljs$core$async$mult_$_state_machine__30879__auto__;
})()
})();
var state__31077__auto__ = (function (){var statearr_32792 = f__31076__auto__();
(statearr_32792[(6)] = c__31075__auto___35087);

return statearr_32792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
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
var G__32796 = arguments.length;
switch (G__32796) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35179 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35179(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35200 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35200(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35221 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35221(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35226 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35226(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35252 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35252(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35257 = arguments.length;
var i__5750__auto___35258 = (0);
while(true){
if((i__5750__auto___35258 < len__5749__auto___35257)){
args__5755__auto__.push((arguments[i__5750__auto___35258]));

var G__35262 = (i__5750__auto___35258 + (1));
i__5750__auto___35258 = G__35262;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32854){
var map__32855 = p__32854;
var map__32855__$1 = cljs.core.__destructure_map(map__32855);
var opts = map__32855__$1;
var statearr_32856_35266 = state;
(statearr_32856_35266[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32857_35267 = state;
(statearr_32857_35267[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_32858_35272 = state;
(statearr_32858_35272[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32849){
var G__32850 = cljs.core.first(seq32849);
var seq32849__$1 = cljs.core.next(seq32849);
var G__32851 = cljs.core.first(seq32849__$1);
var seq32849__$2 = cljs.core.next(seq32849__$1);
var G__32852 = cljs.core.first(seq32849__$2);
var seq32849__$3 = cljs.core.next(seq32849__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32850,G__32851,G__32852,seq32849__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32891 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32892){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32892 = meta32892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32893,meta32892__$1){
var self__ = this;
var _32893__$1 = this;
return (new cljs.core.async.t_cljs$core$async32891(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32892__$1));
}));

(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32893){
var self__ = this;
var _32893__$1 = this;
return self__.meta32892;
}));

(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32892","meta32892",1738472187,null)], null);
}));

(cljs.core.async.t_cljs$core$async32891.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32891");

(cljs.core.async.t_cljs$core$async32891.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32891");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32891.
 */
cljs.core.async.__GT_t_cljs$core$async32891 = (function cljs$core$async$__GT_t_cljs$core$async32891(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32892){
return (new cljs.core.async.t_cljs$core$async32891(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32892));
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
var m = (new cljs.core.async.t_cljs$core$async32891(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__31075__auto___35393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = (function (state_33007){
var state_val_33008 = (state_33007[(1)]);
if((state_val_33008 === (7))){
var inst_32961 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
if(cljs.core.truth_(inst_32961)){
var statearr_33012_35395 = state_33007__$1;
(statearr_33012_35395[(1)] = (8));

} else {
var statearr_33014_35397 = state_33007__$1;
(statearr_33014_35397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (20))){
var inst_32947 = (state_33007[(7)]);
var state_33007__$1 = state_33007;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33007__$1,(23),out,inst_32947);
} else {
if((state_val_33008 === (1))){
var inst_32929 = calc_state();
var inst_32930 = cljs.core.__destructure_map(inst_32929);
var inst_32931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32930,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32930,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32930,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32934 = inst_32929;
var state_33007__$1 = (function (){var statearr_33018 = state_33007;
(statearr_33018[(8)] = inst_32931);

(statearr_33018[(9)] = inst_32932);

(statearr_33018[(10)] = inst_32933);

(statearr_33018[(11)] = inst_32934);

return statearr_33018;
})();
var statearr_33020_35416 = state_33007__$1;
(statearr_33020_35416[(2)] = null);

(statearr_33020_35416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (24))){
var inst_32937 = (state_33007[(12)]);
var inst_32934 = inst_32937;
var state_33007__$1 = (function (){var statearr_33023 = state_33007;
(statearr_33023[(11)] = inst_32934);

return statearr_33023;
})();
var statearr_33026_35421 = state_33007__$1;
(statearr_33026_35421[(2)] = null);

(statearr_33026_35421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (4))){
var inst_32947 = (state_33007[(7)]);
var inst_32955 = (state_33007[(13)]);
var inst_32945 = (state_33007[(2)]);
var inst_32947__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32945,(0),null);
var inst_32953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32945,(1),null);
var inst_32955__$1 = (inst_32947__$1 == null);
var state_33007__$1 = (function (){var statearr_33029 = state_33007;
(statearr_33029[(7)] = inst_32947__$1);

(statearr_33029[(14)] = inst_32953);

(statearr_33029[(13)] = inst_32955__$1);

return statearr_33029;
})();
if(cljs.core.truth_(inst_32955__$1)){
var statearr_33031_35458 = state_33007__$1;
(statearr_33031_35458[(1)] = (5));

} else {
var statearr_33033_35459 = state_33007__$1;
(statearr_33033_35459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (15))){
var inst_32938 = (state_33007[(15)]);
var inst_32977 = (state_33007[(16)]);
var inst_32977__$1 = cljs.core.empty_QMARK_(inst_32938);
var state_33007__$1 = (function (){var statearr_33037 = state_33007;
(statearr_33037[(16)] = inst_32977__$1);

return statearr_33037;
})();
if(inst_32977__$1){
var statearr_33038_35462 = state_33007__$1;
(statearr_33038_35462[(1)] = (17));

} else {
var statearr_33039_35464 = state_33007__$1;
(statearr_33039_35464[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (21))){
var inst_32937 = (state_33007[(12)]);
var inst_32934 = inst_32937;
var state_33007__$1 = (function (){var statearr_33041 = state_33007;
(statearr_33041[(11)] = inst_32934);

return statearr_33041;
})();
var statearr_33045_35469 = state_33007__$1;
(statearr_33045_35469[(2)] = null);

(statearr_33045_35469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (13))){
var inst_32968 = (state_33007[(2)]);
var inst_32970 = calc_state();
var inst_32934 = inst_32970;
var state_33007__$1 = (function (){var statearr_33046 = state_33007;
(statearr_33046[(17)] = inst_32968);

(statearr_33046[(11)] = inst_32934);

return statearr_33046;
})();
var statearr_33047_35473 = state_33007__$1;
(statearr_33047_35473[(2)] = null);

(statearr_33047_35473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (22))){
var inst_33000 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33055_35476 = state_33007__$1;
(statearr_33055_35476[(2)] = inst_33000);

(statearr_33055_35476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (6))){
var inst_32953 = (state_33007[(14)]);
var inst_32959 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32953,change);
var state_33007__$1 = state_33007;
var statearr_33165_35477 = state_33007__$1;
(statearr_33165_35477[(2)] = inst_32959);

(statearr_33165_35477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (25))){
var state_33007__$1 = state_33007;
var statearr_33166_35478 = state_33007__$1;
(statearr_33166_35478[(2)] = null);

(statearr_33166_35478[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (17))){
var inst_32939 = (state_33007[(18)]);
var inst_32953 = (state_33007[(14)]);
var inst_32979 = (inst_32939.cljs$core$IFn$_invoke$arity$1 ? inst_32939.cljs$core$IFn$_invoke$arity$1(inst_32953) : inst_32939.call(null,inst_32953));
var inst_32980 = cljs.core.not(inst_32979);
var state_33007__$1 = state_33007;
var statearr_33167_35486 = state_33007__$1;
(statearr_33167_35486[(2)] = inst_32980);

(statearr_33167_35486[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (3))){
var inst_33004 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33007__$1,inst_33004);
} else {
if((state_val_33008 === (12))){
var state_33007__$1 = state_33007;
var statearr_33168_35491 = state_33007__$1;
(statearr_33168_35491[(2)] = null);

(statearr_33168_35491[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (2))){
var inst_32934 = (state_33007[(11)]);
var inst_32937 = (state_33007[(12)]);
var inst_32937__$1 = cljs.core.__destructure_map(inst_32934);
var inst_32938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32937__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32937__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32937__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33007__$1 = (function (){var statearr_33169 = state_33007;
(statearr_33169[(12)] = inst_32937__$1);

(statearr_33169[(15)] = inst_32938);

(statearr_33169[(18)] = inst_32939);

return statearr_33169;
})();
return cljs.core.async.ioc_alts_BANG_(state_33007__$1,(4),inst_32940);
} else {
if((state_val_33008 === (23))){
var inst_32990 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
if(cljs.core.truth_(inst_32990)){
var statearr_33172_35502 = state_33007__$1;
(statearr_33172_35502[(1)] = (24));

} else {
var statearr_33173_35507 = state_33007__$1;
(statearr_33173_35507[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (19))){
var inst_32983 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33180_35508 = state_33007__$1;
(statearr_33180_35508[(2)] = inst_32983);

(statearr_33180_35508[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (11))){
var inst_32953 = (state_33007[(14)]);
var inst_32965 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32953);
var state_33007__$1 = state_33007;
var statearr_33185_35515 = state_33007__$1;
(statearr_33185_35515[(2)] = inst_32965);

(statearr_33185_35515[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (9))){
var inst_32938 = (state_33007[(15)]);
var inst_32953 = (state_33007[(14)]);
var inst_32974 = (state_33007[(19)]);
var inst_32974__$1 = (inst_32938.cljs$core$IFn$_invoke$arity$1 ? inst_32938.cljs$core$IFn$_invoke$arity$1(inst_32953) : inst_32938.call(null,inst_32953));
var state_33007__$1 = (function (){var statearr_33186 = state_33007;
(statearr_33186[(19)] = inst_32974__$1);

return statearr_33186;
})();
if(cljs.core.truth_(inst_32974__$1)){
var statearr_33187_35522 = state_33007__$1;
(statearr_33187_35522[(1)] = (14));

} else {
var statearr_33188_35527 = state_33007__$1;
(statearr_33188_35527[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (5))){
var inst_32955 = (state_33007[(13)]);
var state_33007__$1 = state_33007;
var statearr_33192_35528 = state_33007__$1;
(statearr_33192_35528[(2)] = inst_32955);

(statearr_33192_35528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (14))){
var inst_32974 = (state_33007[(19)]);
var state_33007__$1 = state_33007;
var statearr_33195_35529 = state_33007__$1;
(statearr_33195_35529[(2)] = inst_32974);

(statearr_33195_35529[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (26))){
var inst_32996 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33199_35538 = state_33007__$1;
(statearr_33199_35538[(2)] = inst_32996);

(statearr_33199_35538[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (16))){
var inst_32986 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
if(cljs.core.truth_(inst_32986)){
var statearr_33201_35545 = state_33007__$1;
(statearr_33201_35545[(1)] = (20));

} else {
var statearr_33202_35546 = state_33007__$1;
(statearr_33202_35546[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (10))){
var inst_33002 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33203_35547 = state_33007__$1;
(statearr_33203_35547[(2)] = inst_33002);

(statearr_33203_35547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (18))){
var inst_32977 = (state_33007[(16)]);
var state_33007__$1 = state_33007;
var statearr_33207_35550 = state_33007__$1;
(statearr_33207_35550[(2)] = inst_32977);

(statearr_33207_35550[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (8))){
var inst_32947 = (state_33007[(7)]);
var inst_32963 = (inst_32947 == null);
var state_33007__$1 = state_33007;
if(cljs.core.truth_(inst_32963)){
var statearr_33209_35556 = state_33007__$1;
(statearr_33209_35556[(1)] = (11));

} else {
var statearr_33210_35558 = state_33007__$1;
(statearr_33210_35558[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__30879__auto__ = null;
var cljs$core$async$mix_$_state_machine__30879__auto____0 = (function (){
var statearr_33241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33241[(0)] = cljs$core$async$mix_$_state_machine__30879__auto__);

(statearr_33241[(1)] = (1));

return statearr_33241;
});
var cljs$core$async$mix_$_state_machine__30879__auto____1 = (function (state_33007){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_33007);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e33242){var ex__30882__auto__ = e33242;
var statearr_33243_35562 = state_33007;
(statearr_33243_35562[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_33007[(4)]))){
var statearr_33249_35565 = state_33007;
(statearr_33249_35565[(1)] = cljs.core.first((state_33007[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35571 = state_33007;
state_33007 = G__35571;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30879__auto__ = function(state_33007){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30879__auto____1.call(this,state_33007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30879__auto____0;
cljs$core$async$mix_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30879__auto____1;
return cljs$core$async$mix_$_state_machine__30879__auto__;
})()
})();
var state__31077__auto__ = (function (){var statearr_33251 = f__31076__auto__();
(statearr_33251[(6)] = c__31075__auto___35393);

return statearr_33251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35583 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35583(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35589 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35589(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35610 = (function() {
var G__35611 = null;
var G__35611__1 = (function (p){
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
var G__35611__2 = (function (p,v){
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
G__35611 = function(p,v){
switch(arguments.length){
case 1:
return G__35611__1.call(this,p);
case 2:
return G__35611__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35611.cljs$core$IFn$_invoke$arity$1 = G__35611__1;
G__35611.cljs$core$IFn$_invoke$arity$2 = G__35611__2;
return G__35611;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33271 = arguments.length;
switch (G__33271) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35610(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35610(p,v);
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
cljs.core.async.t_cljs$core$async33282 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33283){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33283 = meta33283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33284,meta33283__$1){
var self__ = this;
var _33284__$1 = this;
return (new cljs.core.async.t_cljs$core$async33282(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33283__$1));
}));

(cljs.core.async.t_cljs$core$async33282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33284){
var self__ = this;
var _33284__$1 = this;
return self__.meta33283;
}));

(cljs.core.async.t_cljs$core$async33282.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33282.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33282.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33282.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33282.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33282.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33282.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33283","meta33283",1319032549,null)], null);
}));

(cljs.core.async.t_cljs$core$async33282.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33282");

(cljs.core.async.t_cljs$core$async33282.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33282");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33282.
 */
cljs.core.async.__GT_t_cljs$core$async33282 = (function cljs$core$async$__GT_t_cljs$core$async33282(ch,topic_fn,buf_fn,mults,ensure_mult,meta33283){
return (new cljs.core.async.t_cljs$core$async33282(ch,topic_fn,buf_fn,mults,ensure_mult,meta33283));
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
var G__33275 = arguments.length;
switch (G__33275) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33273_SHARP_){
if(cljs.core.truth_((p1__33273_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33273_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33273_SHARP_.call(null,topic)))){
return p1__33273_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33273_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33282(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__31075__auto___35829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = (function (state_33376){
var state_val_33377 = (state_33376[(1)]);
if((state_val_33377 === (7))){
var inst_33371 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
var statearr_33381_35844 = state_33376__$1;
(statearr_33381_35844[(2)] = inst_33371);

(statearr_33381_35844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (20))){
var state_33376__$1 = state_33376;
var statearr_33382_35860 = state_33376__$1;
(statearr_33382_35860[(2)] = null);

(statearr_33382_35860[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (1))){
var state_33376__$1 = state_33376;
var statearr_33383_35868 = state_33376__$1;
(statearr_33383_35868[(2)] = null);

(statearr_33383_35868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (24))){
var inst_33353 = (state_33376[(7)]);
var inst_33363 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33353);
var state_33376__$1 = state_33376;
var statearr_33385_35869 = state_33376__$1;
(statearr_33385_35869[(2)] = inst_33363);

(statearr_33385_35869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (4))){
var inst_33299 = (state_33376[(8)]);
var inst_33299__$1 = (state_33376[(2)]);
var inst_33300 = (inst_33299__$1 == null);
var state_33376__$1 = (function (){var statearr_33389 = state_33376;
(statearr_33389[(8)] = inst_33299__$1);

return statearr_33389;
})();
if(cljs.core.truth_(inst_33300)){
var statearr_33390_35870 = state_33376__$1;
(statearr_33390_35870[(1)] = (5));

} else {
var statearr_33391_35871 = state_33376__$1;
(statearr_33391_35871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (15))){
var inst_33347 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
var statearr_33392_35873 = state_33376__$1;
(statearr_33392_35873[(2)] = inst_33347);

(statearr_33392_35873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (21))){
var inst_33368 = (state_33376[(2)]);
var state_33376__$1 = (function (){var statearr_33393 = state_33376;
(statearr_33393[(9)] = inst_33368);

return statearr_33393;
})();
var statearr_33395_35874 = state_33376__$1;
(statearr_33395_35874[(2)] = null);

(statearr_33395_35874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (13))){
var inst_33328 = (state_33376[(10)]);
var inst_33330 = cljs.core.chunked_seq_QMARK_(inst_33328);
var state_33376__$1 = state_33376;
if(inst_33330){
var statearr_33397_35879 = state_33376__$1;
(statearr_33397_35879[(1)] = (16));

} else {
var statearr_33398_35881 = state_33376__$1;
(statearr_33398_35881[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (22))){
var inst_33359 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
if(cljs.core.truth_(inst_33359)){
var statearr_33403_35882 = state_33376__$1;
(statearr_33403_35882[(1)] = (23));

} else {
var statearr_33404_35883 = state_33376__$1;
(statearr_33404_35883[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (6))){
var inst_33299 = (state_33376[(8)]);
var inst_33353 = (state_33376[(7)]);
var inst_33355 = (state_33376[(11)]);
var inst_33353__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33299) : topic_fn.call(null,inst_33299));
var inst_33354 = cljs.core.deref(mults);
var inst_33355__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33354,inst_33353__$1);
var state_33376__$1 = (function (){var statearr_33406 = state_33376;
(statearr_33406[(7)] = inst_33353__$1);

(statearr_33406[(11)] = inst_33355__$1);

return statearr_33406;
})();
if(cljs.core.truth_(inst_33355__$1)){
var statearr_33407_35895 = state_33376__$1;
(statearr_33407_35895[(1)] = (19));

} else {
var statearr_33408_35901 = state_33376__$1;
(statearr_33408_35901[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (25))){
var inst_33365 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
var statearr_33409_35909 = state_33376__$1;
(statearr_33409_35909[(2)] = inst_33365);

(statearr_33409_35909[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (17))){
var inst_33328 = (state_33376[(10)]);
var inst_33337 = cljs.core.first(inst_33328);
var inst_33339 = cljs.core.async.muxch_STAR_(inst_33337);
var inst_33340 = cljs.core.async.close_BANG_(inst_33339);
var inst_33341 = cljs.core.next(inst_33328);
var inst_33313 = inst_33341;
var inst_33314 = null;
var inst_33315 = (0);
var inst_33316 = (0);
var state_33376__$1 = (function (){var statearr_33412 = state_33376;
(statearr_33412[(12)] = inst_33340);

(statearr_33412[(13)] = inst_33313);

(statearr_33412[(14)] = inst_33314);

(statearr_33412[(15)] = inst_33315);

(statearr_33412[(16)] = inst_33316);

return statearr_33412;
})();
var statearr_33415_35918 = state_33376__$1;
(statearr_33415_35918[(2)] = null);

(statearr_33415_35918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (3))){
var inst_33373 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33376__$1,inst_33373);
} else {
if((state_val_33377 === (12))){
var inst_33349 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
var statearr_33416_35919 = state_33376__$1;
(statearr_33416_35919[(2)] = inst_33349);

(statearr_33416_35919[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (2))){
var state_33376__$1 = state_33376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33376__$1,(4),ch);
} else {
if((state_val_33377 === (23))){
var state_33376__$1 = state_33376;
var statearr_33417_35923 = state_33376__$1;
(statearr_33417_35923[(2)] = null);

(statearr_33417_35923[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (19))){
var inst_33355 = (state_33376[(11)]);
var inst_33299 = (state_33376[(8)]);
var inst_33357 = cljs.core.async.muxch_STAR_(inst_33355);
var state_33376__$1 = state_33376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33376__$1,(22),inst_33357,inst_33299);
} else {
if((state_val_33377 === (11))){
var inst_33313 = (state_33376[(13)]);
var inst_33328 = (state_33376[(10)]);
var inst_33328__$1 = cljs.core.seq(inst_33313);
var state_33376__$1 = (function (){var statearr_33421 = state_33376;
(statearr_33421[(10)] = inst_33328__$1);

return statearr_33421;
})();
if(inst_33328__$1){
var statearr_33422_35926 = state_33376__$1;
(statearr_33422_35926[(1)] = (13));

} else {
var statearr_33423_35928 = state_33376__$1;
(statearr_33423_35928[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (9))){
var inst_33351 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
var statearr_33424_35931 = state_33376__$1;
(statearr_33424_35931[(2)] = inst_33351);

(statearr_33424_35931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (5))){
var inst_33310 = cljs.core.deref(mults);
var inst_33311 = cljs.core.vals(inst_33310);
var inst_33312 = cljs.core.seq(inst_33311);
var inst_33313 = inst_33312;
var inst_33314 = null;
var inst_33315 = (0);
var inst_33316 = (0);
var state_33376__$1 = (function (){var statearr_33426 = state_33376;
(statearr_33426[(13)] = inst_33313);

(statearr_33426[(14)] = inst_33314);

(statearr_33426[(15)] = inst_33315);

(statearr_33426[(16)] = inst_33316);

return statearr_33426;
})();
var statearr_33427_35934 = state_33376__$1;
(statearr_33427_35934[(2)] = null);

(statearr_33427_35934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (14))){
var state_33376__$1 = state_33376;
var statearr_33432_35935 = state_33376__$1;
(statearr_33432_35935[(2)] = null);

(statearr_33432_35935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (16))){
var inst_33328 = (state_33376[(10)]);
var inst_33332 = cljs.core.chunk_first(inst_33328);
var inst_33333 = cljs.core.chunk_rest(inst_33328);
var inst_33334 = cljs.core.count(inst_33332);
var inst_33313 = inst_33333;
var inst_33314 = inst_33332;
var inst_33315 = inst_33334;
var inst_33316 = (0);
var state_33376__$1 = (function (){var statearr_33440 = state_33376;
(statearr_33440[(13)] = inst_33313);

(statearr_33440[(14)] = inst_33314);

(statearr_33440[(15)] = inst_33315);

(statearr_33440[(16)] = inst_33316);

return statearr_33440;
})();
var statearr_33447_35942 = state_33376__$1;
(statearr_33447_35942[(2)] = null);

(statearr_33447_35942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (10))){
var inst_33314 = (state_33376[(14)]);
var inst_33316 = (state_33376[(16)]);
var inst_33313 = (state_33376[(13)]);
var inst_33315 = (state_33376[(15)]);
var inst_33321 = cljs.core._nth(inst_33314,inst_33316);
var inst_33322 = cljs.core.async.muxch_STAR_(inst_33321);
var inst_33323 = cljs.core.async.close_BANG_(inst_33322);
var inst_33324 = (inst_33316 + (1));
var tmp33429 = inst_33313;
var tmp33430 = inst_33315;
var tmp33431 = inst_33314;
var inst_33313__$1 = tmp33429;
var inst_33314__$1 = tmp33431;
var inst_33315__$1 = tmp33430;
var inst_33316__$1 = inst_33324;
var state_33376__$1 = (function (){var statearr_33455 = state_33376;
(statearr_33455[(17)] = inst_33323);

(statearr_33455[(13)] = inst_33313__$1);

(statearr_33455[(14)] = inst_33314__$1);

(statearr_33455[(15)] = inst_33315__$1);

(statearr_33455[(16)] = inst_33316__$1);

return statearr_33455;
})();
var statearr_33456_35948 = state_33376__$1;
(statearr_33456_35948[(2)] = null);

(statearr_33456_35948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (18))){
var inst_33344 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
var statearr_33457_35949 = state_33376__$1;
(statearr_33457_35949[(2)] = inst_33344);

(statearr_33457_35949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (8))){
var inst_33316 = (state_33376[(16)]);
var inst_33315 = (state_33376[(15)]);
var inst_33318 = (inst_33316 < inst_33315);
var inst_33319 = inst_33318;
var state_33376__$1 = state_33376;
if(cljs.core.truth_(inst_33319)){
var statearr_33458_35957 = state_33376__$1;
(statearr_33458_35957[(1)] = (10));

} else {
var statearr_33459_35958 = state_33376__$1;
(statearr_33459_35958[(1)] = (11));

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
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_33460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33460[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_33460[(1)] = (1));

return statearr_33460;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_33376){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_33376);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e33461){var ex__30882__auto__ = e33461;
var statearr_33462_35971 = state_33376;
(statearr_33462_35971[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_33376[(4)]))){
var statearr_33464_35972 = state_33376;
(statearr_33464_35972[(1)] = cljs.core.first((state_33376[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35974 = state_33376;
state_33376 = G__35974;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_33376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_33376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
})();
var state__31077__auto__ = (function (){var statearr_33465 = f__31076__auto__();
(statearr_33465[(6)] = c__31075__auto___35829);

return statearr_33465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
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
var G__33467 = arguments.length;
switch (G__33467) {
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
var G__33489 = arguments.length;
switch (G__33489) {
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
var G__33494 = arguments.length;
switch (G__33494) {
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
var c__31075__auto___36060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = (function (state_33564){
var state_val_33567 = (state_33564[(1)]);
if((state_val_33567 === (7))){
var state_33564__$1 = state_33564;
var statearr_33570_36074 = state_33564__$1;
(statearr_33570_36074[(2)] = null);

(statearr_33570_36074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (1))){
var state_33564__$1 = state_33564;
var statearr_33574_36087 = state_33564__$1;
(statearr_33574_36087[(2)] = null);

(statearr_33574_36087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (4))){
var inst_33504 = (state_33564[(7)]);
var inst_33502 = (state_33564[(8)]);
var inst_33506 = (inst_33504 < inst_33502);
var state_33564__$1 = state_33564;
if(cljs.core.truth_(inst_33506)){
var statearr_33580_36105 = state_33564__$1;
(statearr_33580_36105[(1)] = (6));

} else {
var statearr_33584_36110 = state_33564__$1;
(statearr_33584_36110[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (15))){
var inst_33534 = (state_33564[(9)]);
var inst_33543 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33534);
var state_33564__$1 = state_33564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33564__$1,(17),out,inst_33543);
} else {
if((state_val_33567 === (13))){
var inst_33534 = (state_33564[(9)]);
var inst_33534__$1 = (state_33564[(2)]);
var inst_33535 = cljs.core.some(cljs.core.nil_QMARK_,inst_33534__$1);
var state_33564__$1 = (function (){var statearr_33591 = state_33564;
(statearr_33591[(9)] = inst_33534__$1);

return statearr_33591;
})();
if(cljs.core.truth_(inst_33535)){
var statearr_33593_36116 = state_33564__$1;
(statearr_33593_36116[(1)] = (14));

} else {
var statearr_33594_36118 = state_33564__$1;
(statearr_33594_36118[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (6))){
var state_33564__$1 = state_33564;
var statearr_33599_36128 = state_33564__$1;
(statearr_33599_36128[(2)] = null);

(statearr_33599_36128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (17))){
var inst_33545 = (state_33564[(2)]);
var state_33564__$1 = (function (){var statearr_33621 = state_33564;
(statearr_33621[(10)] = inst_33545);

return statearr_33621;
})();
var statearr_33629_36129 = state_33564__$1;
(statearr_33629_36129[(2)] = null);

(statearr_33629_36129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (3))){
var inst_33554 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33564__$1,inst_33554);
} else {
if((state_val_33567 === (12))){
var _ = (function (){var statearr_33640 = state_33564;
(statearr_33640[(4)] = cljs.core.rest((state_33564[(4)])));

return statearr_33640;
})();
var state_33564__$1 = state_33564;
var ex33612 = (state_33564__$1[(2)]);
var statearr_33644_36130 = state_33564__$1;
(statearr_33644_36130[(5)] = ex33612);


if((ex33612 instanceof Object)){
var statearr_33648_36131 = state_33564__$1;
(statearr_33648_36131[(1)] = (11));

(statearr_33648_36131[(5)] = null);

} else {
throw ex33612;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (2))){
var inst_33501 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33502 = cnt;
var inst_33504 = (0);
var state_33564__$1 = (function (){var statearr_33656 = state_33564;
(statearr_33656[(11)] = inst_33501);

(statearr_33656[(8)] = inst_33502);

(statearr_33656[(7)] = inst_33504);

return statearr_33656;
})();
var statearr_33660_36132 = state_33564__$1;
(statearr_33660_36132[(2)] = null);

(statearr_33660_36132[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (11))){
var inst_33511 = (state_33564[(2)]);
var inst_33512 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33564__$1 = (function (){var statearr_33661 = state_33564;
(statearr_33661[(12)] = inst_33511);

return statearr_33661;
})();
var statearr_33662_36134 = state_33564__$1;
(statearr_33662_36134[(2)] = inst_33512);

(statearr_33662_36134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (9))){
var inst_33504 = (state_33564[(7)]);
var _ = (function (){var statearr_33663 = state_33564;
(statearr_33663[(4)] = cljs.core.cons((12),(state_33564[(4)])));

return statearr_33663;
})();
var inst_33519 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33504) : chs__$1.call(null,inst_33504));
var inst_33520 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33504) : done.call(null,inst_33504));
var inst_33521 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33519,inst_33520);
var ___$1 = (function (){var statearr_33664 = state_33564;
(statearr_33664[(4)] = cljs.core.rest((state_33564[(4)])));

return statearr_33664;
})();
var state_33564__$1 = state_33564;
var statearr_33665_36135 = state_33564__$1;
(statearr_33665_36135[(2)] = inst_33521);

(statearr_33665_36135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (5))){
var inst_33531 = (state_33564[(2)]);
var state_33564__$1 = (function (){var statearr_33666 = state_33564;
(statearr_33666[(13)] = inst_33531);

return statearr_33666;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33564__$1,(13),dchan);
} else {
if((state_val_33567 === (14))){
var inst_33537 = cljs.core.async.close_BANG_(out);
var state_33564__$1 = state_33564;
var statearr_33667_36214 = state_33564__$1;
(statearr_33667_36214[(2)] = inst_33537);

(statearr_33667_36214[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (16))){
var inst_33552 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
var statearr_33668_36224 = state_33564__$1;
(statearr_33668_36224[(2)] = inst_33552);

(statearr_33668_36224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (10))){
var inst_33504 = (state_33564[(7)]);
var inst_33524 = (state_33564[(2)]);
var inst_33525 = (inst_33504 + (1));
var inst_33504__$1 = inst_33525;
var state_33564__$1 = (function (){var statearr_33669 = state_33564;
(statearr_33669[(14)] = inst_33524);

(statearr_33669[(7)] = inst_33504__$1);

return statearr_33669;
})();
var statearr_33670_36232 = state_33564__$1;
(statearr_33670_36232[(2)] = null);

(statearr_33670_36232[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33567 === (8))){
var inst_33529 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
var statearr_33671_36254 = state_33564__$1;
(statearr_33671_36254[(2)] = inst_33529);

(statearr_33671_36254[(1)] = (5));


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
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_33673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33673[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_33673[(1)] = (1));

return statearr_33673;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_33564){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_33564);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e33677){var ex__30882__auto__ = e33677;
var statearr_33678_36292 = state_33564;
(statearr_33678_36292[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_33564[(4)]))){
var statearr_33679_36311 = state_33564;
(statearr_33679_36311[(1)] = cljs.core.first((state_33564[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36312 = state_33564;
state_33564 = G__36312;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_33564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_33564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
})();
var state__31077__auto__ = (function (){var statearr_33680 = f__31076__auto__();
(statearr_33680[(6)] = c__31075__auto___36060);

return statearr_33680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
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
var G__33691 = arguments.length;
switch (G__33691) {
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
var c__31075__auto___36320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = (function (state_33725){
var state_val_33726 = (state_33725[(1)]);
if((state_val_33726 === (7))){
var inst_33704 = (state_33725[(7)]);
var inst_33705 = (state_33725[(8)]);
var inst_33704__$1 = (state_33725[(2)]);
var inst_33705__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33704__$1,(0),null);
var inst_33706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33704__$1,(1),null);
var inst_33707 = (inst_33705__$1 == null);
var state_33725__$1 = (function (){var statearr_33728 = state_33725;
(statearr_33728[(7)] = inst_33704__$1);

(statearr_33728[(8)] = inst_33705__$1);

(statearr_33728[(9)] = inst_33706);

return statearr_33728;
})();
if(cljs.core.truth_(inst_33707)){
var statearr_33730_36326 = state_33725__$1;
(statearr_33730_36326[(1)] = (8));

} else {
var statearr_33731_36328 = state_33725__$1;
(statearr_33731_36328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (1))){
var inst_33694 = cljs.core.vec(chs);
var inst_33695 = inst_33694;
var state_33725__$1 = (function (){var statearr_33732 = state_33725;
(statearr_33732[(10)] = inst_33695);

return statearr_33732;
})();
var statearr_33733_36333 = state_33725__$1;
(statearr_33733_36333[(2)] = null);

(statearr_33733_36333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (4))){
var inst_33695 = (state_33725[(10)]);
var state_33725__$1 = state_33725;
return cljs.core.async.ioc_alts_BANG_(state_33725__$1,(7),inst_33695);
} else {
if((state_val_33726 === (6))){
var inst_33721 = (state_33725[(2)]);
var state_33725__$1 = state_33725;
var statearr_33737_36342 = state_33725__$1;
(statearr_33737_36342[(2)] = inst_33721);

(statearr_33737_36342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (3))){
var inst_33723 = (state_33725[(2)]);
var state_33725__$1 = state_33725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33725__$1,inst_33723);
} else {
if((state_val_33726 === (2))){
var inst_33695 = (state_33725[(10)]);
var inst_33697 = cljs.core.count(inst_33695);
var inst_33698 = (inst_33697 > (0));
var state_33725__$1 = state_33725;
if(cljs.core.truth_(inst_33698)){
var statearr_33739_36362 = state_33725__$1;
(statearr_33739_36362[(1)] = (4));

} else {
var statearr_33740_36364 = state_33725__$1;
(statearr_33740_36364[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (11))){
var inst_33695 = (state_33725[(10)]);
var inst_33714 = (state_33725[(2)]);
var tmp33738 = inst_33695;
var inst_33695__$1 = tmp33738;
var state_33725__$1 = (function (){var statearr_33741 = state_33725;
(statearr_33741[(11)] = inst_33714);

(statearr_33741[(10)] = inst_33695__$1);

return statearr_33741;
})();
var statearr_33742_36371 = state_33725__$1;
(statearr_33742_36371[(2)] = null);

(statearr_33742_36371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (9))){
var inst_33705 = (state_33725[(8)]);
var state_33725__$1 = state_33725;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33725__$1,(11),out,inst_33705);
} else {
if((state_val_33726 === (5))){
var inst_33719 = cljs.core.async.close_BANG_(out);
var state_33725__$1 = state_33725;
var statearr_33743_36377 = state_33725__$1;
(statearr_33743_36377[(2)] = inst_33719);

(statearr_33743_36377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (10))){
var inst_33717 = (state_33725[(2)]);
var state_33725__$1 = state_33725;
var statearr_33744_36381 = state_33725__$1;
(statearr_33744_36381[(2)] = inst_33717);

(statearr_33744_36381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33726 === (8))){
var inst_33695 = (state_33725[(10)]);
var inst_33704 = (state_33725[(7)]);
var inst_33705 = (state_33725[(8)]);
var inst_33706 = (state_33725[(9)]);
var inst_33709 = (function (){var cs = inst_33695;
var vec__33700 = inst_33704;
var v = inst_33705;
var c = inst_33706;
return (function (p1__33687_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33687_SHARP_);
});
})();
var inst_33710 = cljs.core.filterv(inst_33709,inst_33695);
var inst_33695__$1 = inst_33710;
var state_33725__$1 = (function (){var statearr_33745 = state_33725;
(statearr_33745[(10)] = inst_33695__$1);

return statearr_33745;
})();
var statearr_33746_36403 = state_33725__$1;
(statearr_33746_36403[(2)] = null);

(statearr_33746_36403[(1)] = (2));


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
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_33747 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33747[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_33747[(1)] = (1));

return statearr_33747;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_33725){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_33725);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e33748){var ex__30882__auto__ = e33748;
var statearr_33749_36429 = state_33725;
(statearr_33749_36429[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_33725[(4)]))){
var statearr_33750_36430 = state_33725;
(statearr_33750_36430[(1)] = cljs.core.first((state_33725[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36440 = state_33725;
state_33725 = G__36440;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_33725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_33725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
})();
var state__31077__auto__ = (function (){var statearr_33751 = f__31076__auto__();
(statearr_33751[(6)] = c__31075__auto___36320);

return statearr_33751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
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
var G__33757 = arguments.length;
switch (G__33757) {
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
var c__31075__auto___36451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = (function (state_33786){
var state_val_33787 = (state_33786[(1)]);
if((state_val_33787 === (7))){
var inst_33765 = (state_33786[(7)]);
var inst_33765__$1 = (state_33786[(2)]);
var inst_33766 = (inst_33765__$1 == null);
var inst_33767 = cljs.core.not(inst_33766);
var state_33786__$1 = (function (){var statearr_33788 = state_33786;
(statearr_33788[(7)] = inst_33765__$1);

return statearr_33788;
})();
if(inst_33767){
var statearr_33789_36465 = state_33786__$1;
(statearr_33789_36465[(1)] = (8));

} else {
var statearr_33790_36467 = state_33786__$1;
(statearr_33790_36467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (1))){
var inst_33760 = (0);
var state_33786__$1 = (function (){var statearr_33791 = state_33786;
(statearr_33791[(8)] = inst_33760);

return statearr_33791;
})();
var statearr_33792_36476 = state_33786__$1;
(statearr_33792_36476[(2)] = null);

(statearr_33792_36476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (4))){
var state_33786__$1 = state_33786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33786__$1,(7),ch);
} else {
if((state_val_33787 === (6))){
var inst_33781 = (state_33786[(2)]);
var state_33786__$1 = state_33786;
var statearr_33793_36479 = state_33786__$1;
(statearr_33793_36479[(2)] = inst_33781);

(statearr_33793_36479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (3))){
var inst_33783 = (state_33786[(2)]);
var inst_33784 = cljs.core.async.close_BANG_(out);
var state_33786__$1 = (function (){var statearr_33794 = state_33786;
(statearr_33794[(9)] = inst_33783);

return statearr_33794;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33786__$1,inst_33784);
} else {
if((state_val_33787 === (2))){
var inst_33760 = (state_33786[(8)]);
var inst_33762 = (inst_33760 < n);
var state_33786__$1 = state_33786;
if(cljs.core.truth_(inst_33762)){
var statearr_33796_36480 = state_33786__$1;
(statearr_33796_36480[(1)] = (4));

} else {
var statearr_33797_36481 = state_33786__$1;
(statearr_33797_36481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (11))){
var inst_33760 = (state_33786[(8)]);
var inst_33770 = (state_33786[(2)]);
var inst_33774 = (inst_33760 + (1));
var inst_33760__$1 = inst_33774;
var state_33786__$1 = (function (){var statearr_33798 = state_33786;
(statearr_33798[(10)] = inst_33770);

(statearr_33798[(8)] = inst_33760__$1);

return statearr_33798;
})();
var statearr_33799_36482 = state_33786__$1;
(statearr_33799_36482[(2)] = null);

(statearr_33799_36482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (9))){
var state_33786__$1 = state_33786;
var statearr_33800_36491 = state_33786__$1;
(statearr_33800_36491[(2)] = null);

(statearr_33800_36491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (5))){
var state_33786__$1 = state_33786;
var statearr_33801_36495 = state_33786__$1;
(statearr_33801_36495[(2)] = null);

(statearr_33801_36495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (10))){
var inst_33778 = (state_33786[(2)]);
var state_33786__$1 = state_33786;
var statearr_33802_36503 = state_33786__$1;
(statearr_33802_36503[(2)] = inst_33778);

(statearr_33802_36503[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (8))){
var inst_33765 = (state_33786[(7)]);
var state_33786__$1 = state_33786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33786__$1,(11),out,inst_33765);
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
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_33810 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33810[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_33810[(1)] = (1));

return statearr_33810;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_33786){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_33786);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e33817){var ex__30882__auto__ = e33817;
var statearr_33818_36526 = state_33786;
(statearr_33818_36526[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_33786[(4)]))){
var statearr_33819_36535 = state_33786;
(statearr_33819_36535[(1)] = cljs.core.first((state_33786[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36536 = state_33786;
state_33786 = G__36536;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_33786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_33786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
})();
var state__31077__auto__ = (function (){var statearr_33828 = f__31076__auto__();
(statearr_33828[(6)] = c__31075__auto___36451);

return statearr_33828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
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
cljs.core.async.t_cljs$core$async33869 = (function (f,ch,meta33847,_,fn1,meta33870){
this.f = f;
this.ch = ch;
this.meta33847 = meta33847;
this._ = _;
this.fn1 = fn1;
this.meta33870 = meta33870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33871,meta33870__$1){
var self__ = this;
var _33871__$1 = this;
return (new cljs.core.async.t_cljs$core$async33869(self__.f,self__.ch,self__.meta33847,self__._,self__.fn1,meta33870__$1));
}));

(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33871){
var self__ = this;
var _33871__$1 = this;
return self__.meta33870;
}));

(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33845_SHARP_){
var G__33874 = (((p1__33845_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33845_SHARP_) : self__.f.call(null,p1__33845_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33874) : f1.call(null,G__33874));
});
}));

(cljs.core.async.t_cljs$core$async33869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33847","meta33847",935262547,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33846","cljs.core.async/t_cljs$core$async33846",-2086979406,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33870","meta33870",2023852550,null)], null);
}));

(cljs.core.async.t_cljs$core$async33869.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33869");

(cljs.core.async.t_cljs$core$async33869.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33869");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33869.
 */
cljs.core.async.__GT_t_cljs$core$async33869 = (function cljs$core$async$__GT_t_cljs$core$async33869(f,ch,meta33847,_,fn1,meta33870){
return (new cljs.core.async.t_cljs$core$async33869(f,ch,meta33847,_,fn1,meta33870));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33846 = (function (f,ch,meta33847){
this.f = f;
this.ch = ch;
this.meta33847 = meta33847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33848,meta33847__$1){
var self__ = this;
var _33848__$1 = this;
return (new cljs.core.async.t_cljs$core$async33846(self__.f,self__.ch,meta33847__$1));
}));

(cljs.core.async.t_cljs$core$async33846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33848){
var self__ = this;
var _33848__$1 = this;
return self__.meta33847;
}));

(cljs.core.async.t_cljs$core$async33846.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33846.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33846.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33846.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33846.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async33869(self__.f,self__.ch,self__.meta33847,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33877 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33877) : self__.f.call(null,G__33877));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33846.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33846.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33847","meta33847",935262547,null)], null);
}));

(cljs.core.async.t_cljs$core$async33846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33846");

(cljs.core.async.t_cljs$core$async33846.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33846.
 */
cljs.core.async.__GT_t_cljs$core$async33846 = (function cljs$core$async$__GT_t_cljs$core$async33846(f,ch,meta33847){
return (new cljs.core.async.t_cljs$core$async33846(f,ch,meta33847));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33846(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33881 = (function (f,ch,meta33882){
this.f = f;
this.ch = ch;
this.meta33882 = meta33882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33883,meta33882__$1){
var self__ = this;
var _33883__$1 = this;
return (new cljs.core.async.t_cljs$core$async33881(self__.f,self__.ch,meta33882__$1));
}));

(cljs.core.async.t_cljs$core$async33881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33883){
var self__ = this;
var _33883__$1 = this;
return self__.meta33882;
}));

(cljs.core.async.t_cljs$core$async33881.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33881.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33881.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33881.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33881.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33881.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33882","meta33882",371333117,null)], null);
}));

(cljs.core.async.t_cljs$core$async33881.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33881");

(cljs.core.async.t_cljs$core$async33881.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33881");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33881.
 */
cljs.core.async.__GT_t_cljs$core$async33881 = (function cljs$core$async$__GT_t_cljs$core$async33881(f,ch,meta33882){
return (new cljs.core.async.t_cljs$core$async33881(f,ch,meta33882));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33881(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33887 = (function (p,ch,meta33888){
this.p = p;
this.ch = ch;
this.meta33888 = meta33888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33889,meta33888__$1){
var self__ = this;
var _33889__$1 = this;
return (new cljs.core.async.t_cljs$core$async33887(self__.p,self__.ch,meta33888__$1));
}));

(cljs.core.async.t_cljs$core$async33887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33889){
var self__ = this;
var _33889__$1 = this;
return self__.meta33888;
}));

(cljs.core.async.t_cljs$core$async33887.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33887.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33887.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33887.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33887.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33887.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33887.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33888","meta33888",352958342,null)], null);
}));

(cljs.core.async.t_cljs$core$async33887.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33887");

(cljs.core.async.t_cljs$core$async33887.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33887");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33887.
 */
cljs.core.async.__GT_t_cljs$core$async33887 = (function cljs$core$async$__GT_t_cljs$core$async33887(p,ch,meta33888){
return (new cljs.core.async.t_cljs$core$async33887(p,ch,meta33888));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async33887(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33894 = arguments.length;
switch (G__33894) {
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
var c__31075__auto___36558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = (function (state_33915){
var state_val_33917 = (state_33915[(1)]);
if((state_val_33917 === (7))){
var inst_33911 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
var statearr_33918_36559 = state_33915__$1;
(statearr_33918_36559[(2)] = inst_33911);

(statearr_33918_36559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (1))){
var state_33915__$1 = state_33915;
var statearr_33921_36560 = state_33915__$1;
(statearr_33921_36560[(2)] = null);

(statearr_33921_36560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (4))){
var inst_33897 = (state_33915[(7)]);
var inst_33897__$1 = (state_33915[(2)]);
var inst_33898 = (inst_33897__$1 == null);
var state_33915__$1 = (function (){var statearr_33922 = state_33915;
(statearr_33922[(7)] = inst_33897__$1);

return statearr_33922;
})();
if(cljs.core.truth_(inst_33898)){
var statearr_33924_36561 = state_33915__$1;
(statearr_33924_36561[(1)] = (5));

} else {
var statearr_33925_36562 = state_33915__$1;
(statearr_33925_36562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (6))){
var inst_33897 = (state_33915[(7)]);
var inst_33902 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33897) : p.call(null,inst_33897));
var state_33915__$1 = state_33915;
if(cljs.core.truth_(inst_33902)){
var statearr_33927_36563 = state_33915__$1;
(statearr_33927_36563[(1)] = (8));

} else {
var statearr_33928_36564 = state_33915__$1;
(statearr_33928_36564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (3))){
var inst_33913 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33915__$1,inst_33913);
} else {
if((state_val_33917 === (2))){
var state_33915__$1 = state_33915;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33915__$1,(4),ch);
} else {
if((state_val_33917 === (11))){
var inst_33905 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
var statearr_33933_36565 = state_33915__$1;
(statearr_33933_36565[(2)] = inst_33905);

(statearr_33933_36565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (9))){
var state_33915__$1 = state_33915;
var statearr_33936_36566 = state_33915__$1;
(statearr_33936_36566[(2)] = null);

(statearr_33936_36566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (5))){
var inst_33900 = cljs.core.async.close_BANG_(out);
var state_33915__$1 = state_33915;
var statearr_33937_36567 = state_33915__$1;
(statearr_33937_36567[(2)] = inst_33900);

(statearr_33937_36567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (10))){
var inst_33908 = (state_33915[(2)]);
var state_33915__$1 = (function (){var statearr_33938 = state_33915;
(statearr_33938[(8)] = inst_33908);

return statearr_33938;
})();
var statearr_33942_36568 = state_33915__$1;
(statearr_33942_36568[(2)] = null);

(statearr_33942_36568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (8))){
var inst_33897 = (state_33915[(7)]);
var state_33915__$1 = state_33915;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33915__$1,(11),out,inst_33897);
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
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_33964 = [null,null,null,null,null,null,null,null,null];
(statearr_33964[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_33964[(1)] = (1));

return statearr_33964;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_33915){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_33915);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e33968){var ex__30882__auto__ = e33968;
var statearr_33970_36569 = state_33915;
(statearr_33970_36569[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_33915[(4)]))){
var statearr_33976_36570 = state_33915;
(statearr_33976_36570[(1)] = cljs.core.first((state_33915[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36571 = state_33915;
state_33915 = G__36571;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_33915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_33915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
})();
var state__31077__auto__ = (function (){var statearr_33980 = f__31076__auto__();
(statearr_33980[(6)] = c__31075__auto___36558);

return statearr_33980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33994 = arguments.length;
switch (G__33994) {
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
var c__31075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = (function (state_34079){
var state_val_34080 = (state_34079[(1)]);
if((state_val_34080 === (7))){
var inst_34074 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34086_36580 = state_34079__$1;
(statearr_34086_36580[(2)] = inst_34074);

(statearr_34086_36580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (20))){
var inst_34043 = (state_34079[(7)]);
var inst_34054 = (state_34079[(2)]);
var inst_34055 = cljs.core.next(inst_34043);
var inst_34024 = inst_34055;
var inst_34025 = null;
var inst_34026 = (0);
var inst_34027 = (0);
var state_34079__$1 = (function (){var statearr_34089 = state_34079;
(statearr_34089[(8)] = inst_34054);

(statearr_34089[(9)] = inst_34024);

(statearr_34089[(10)] = inst_34025);

(statearr_34089[(11)] = inst_34026);

(statearr_34089[(12)] = inst_34027);

return statearr_34089;
})();
var statearr_34090_36581 = state_34079__$1;
(statearr_34090_36581[(2)] = null);

(statearr_34090_36581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (1))){
var state_34079__$1 = state_34079;
var statearr_34091_36582 = state_34079__$1;
(statearr_34091_36582[(2)] = null);

(statearr_34091_36582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (4))){
var inst_34010 = (state_34079[(13)]);
var inst_34010__$1 = (state_34079[(2)]);
var inst_34014 = (inst_34010__$1 == null);
var state_34079__$1 = (function (){var statearr_34092 = state_34079;
(statearr_34092[(13)] = inst_34010__$1);

return statearr_34092;
})();
if(cljs.core.truth_(inst_34014)){
var statearr_34095_36583 = state_34079__$1;
(statearr_34095_36583[(1)] = (5));

} else {
var statearr_34100_36584 = state_34079__$1;
(statearr_34100_36584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (15))){
var state_34079__$1 = state_34079;
var statearr_34104_36585 = state_34079__$1;
(statearr_34104_36585[(2)] = null);

(statearr_34104_36585[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (21))){
var state_34079__$1 = state_34079;
var statearr_34105_36586 = state_34079__$1;
(statearr_34105_36586[(2)] = null);

(statearr_34105_36586[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (13))){
var inst_34027 = (state_34079[(12)]);
var inst_34024 = (state_34079[(9)]);
var inst_34025 = (state_34079[(10)]);
var inst_34026 = (state_34079[(11)]);
var inst_34035 = (state_34079[(2)]);
var inst_34036 = (inst_34027 + (1));
var tmp34101 = inst_34024;
var tmp34102 = inst_34025;
var tmp34103 = inst_34026;
var inst_34024__$1 = tmp34101;
var inst_34025__$1 = tmp34102;
var inst_34026__$1 = tmp34103;
var inst_34027__$1 = inst_34036;
var state_34079__$1 = (function (){var statearr_34118 = state_34079;
(statearr_34118[(14)] = inst_34035);

(statearr_34118[(9)] = inst_34024__$1);

(statearr_34118[(10)] = inst_34025__$1);

(statearr_34118[(11)] = inst_34026__$1);

(statearr_34118[(12)] = inst_34027__$1);

return statearr_34118;
})();
var statearr_34126_36591 = state_34079__$1;
(statearr_34126_36591[(2)] = null);

(statearr_34126_36591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (22))){
var state_34079__$1 = state_34079;
var statearr_34130_36592 = state_34079__$1;
(statearr_34130_36592[(2)] = null);

(statearr_34130_36592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (6))){
var inst_34010 = (state_34079[(13)]);
var inst_34022 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34010) : f.call(null,inst_34010));
var inst_34023 = cljs.core.seq(inst_34022);
var inst_34024 = inst_34023;
var inst_34025 = null;
var inst_34026 = (0);
var inst_34027 = (0);
var state_34079__$1 = (function (){var statearr_34134 = state_34079;
(statearr_34134[(9)] = inst_34024);

(statearr_34134[(10)] = inst_34025);

(statearr_34134[(11)] = inst_34026);

(statearr_34134[(12)] = inst_34027);

return statearr_34134;
})();
var statearr_34135_36596 = state_34079__$1;
(statearr_34135_36596[(2)] = null);

(statearr_34135_36596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (17))){
var inst_34043 = (state_34079[(7)]);
var inst_34047 = cljs.core.chunk_first(inst_34043);
var inst_34048 = cljs.core.chunk_rest(inst_34043);
var inst_34049 = cljs.core.count(inst_34047);
var inst_34024 = inst_34048;
var inst_34025 = inst_34047;
var inst_34026 = inst_34049;
var inst_34027 = (0);
var state_34079__$1 = (function (){var statearr_34136 = state_34079;
(statearr_34136[(9)] = inst_34024);

(statearr_34136[(10)] = inst_34025);

(statearr_34136[(11)] = inst_34026);

(statearr_34136[(12)] = inst_34027);

return statearr_34136;
})();
var statearr_34145_36601 = state_34079__$1;
(statearr_34145_36601[(2)] = null);

(statearr_34145_36601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (3))){
var inst_34076 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34079__$1,inst_34076);
} else {
if((state_val_34080 === (12))){
var inst_34063 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34162_36603 = state_34079__$1;
(statearr_34162_36603[(2)] = inst_34063);

(statearr_34162_36603[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (2))){
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34079__$1,(4),in$);
} else {
if((state_val_34080 === (23))){
var inst_34072 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34170_36604 = state_34079__$1;
(statearr_34170_36604[(2)] = inst_34072);

(statearr_34170_36604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (19))){
var inst_34058 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34171_36605 = state_34079__$1;
(statearr_34171_36605[(2)] = inst_34058);

(statearr_34171_36605[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (11))){
var inst_34024 = (state_34079[(9)]);
var inst_34043 = (state_34079[(7)]);
var inst_34043__$1 = cljs.core.seq(inst_34024);
var state_34079__$1 = (function (){var statearr_34174 = state_34079;
(statearr_34174[(7)] = inst_34043__$1);

return statearr_34174;
})();
if(inst_34043__$1){
var statearr_34175_36609 = state_34079__$1;
(statearr_34175_36609[(1)] = (14));

} else {
var statearr_34176_36610 = state_34079__$1;
(statearr_34176_36610[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (9))){
var inst_34065 = (state_34079[(2)]);
var inst_34067 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34079__$1 = (function (){var statearr_34177 = state_34079;
(statearr_34177[(15)] = inst_34065);

return statearr_34177;
})();
if(cljs.core.truth_(inst_34067)){
var statearr_34178_36614 = state_34079__$1;
(statearr_34178_36614[(1)] = (21));

} else {
var statearr_34179_36615 = state_34079__$1;
(statearr_34179_36615[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (5))){
var inst_34016 = cljs.core.async.close_BANG_(out);
var state_34079__$1 = state_34079;
var statearr_34180_36618 = state_34079__$1;
(statearr_34180_36618[(2)] = inst_34016);

(statearr_34180_36618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (14))){
var inst_34043 = (state_34079[(7)]);
var inst_34045 = cljs.core.chunked_seq_QMARK_(inst_34043);
var state_34079__$1 = state_34079;
if(inst_34045){
var statearr_34181_36623 = state_34079__$1;
(statearr_34181_36623[(1)] = (17));

} else {
var statearr_34182_36624 = state_34079__$1;
(statearr_34182_36624[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (16))){
var inst_34061 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34183_36625 = state_34079__$1;
(statearr_34183_36625[(2)] = inst_34061);

(statearr_34183_36625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (10))){
var inst_34025 = (state_34079[(10)]);
var inst_34027 = (state_34079[(12)]);
var inst_34033 = cljs.core._nth(inst_34025,inst_34027);
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34079__$1,(13),out,inst_34033);
} else {
if((state_val_34080 === (18))){
var inst_34043 = (state_34079[(7)]);
var inst_34052 = cljs.core.first(inst_34043);
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34079__$1,(20),out,inst_34052);
} else {
if((state_val_34080 === (8))){
var inst_34027 = (state_34079[(12)]);
var inst_34026 = (state_34079[(11)]);
var inst_34029 = (inst_34027 < inst_34026);
var inst_34030 = inst_34029;
var state_34079__$1 = state_34079;
if(cljs.core.truth_(inst_34030)){
var statearr_34184_36627 = state_34079__$1;
(statearr_34184_36627[(1)] = (10));

} else {
var statearr_34185_36628 = state_34079__$1;
(statearr_34185_36628[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30879__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30879__auto____0 = (function (){
var statearr_34186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34186[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30879__auto__);

(statearr_34186[(1)] = (1));

return statearr_34186;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30879__auto____1 = (function (state_34079){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_34079);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e34187){var ex__30882__auto__ = e34187;
var statearr_34188_36629 = state_34079;
(statearr_34188_36629[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_34079[(4)]))){
var statearr_34192_36630 = state_34079;
(statearr_34192_36630[(1)] = cljs.core.first((state_34079[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36631 = state_34079;
state_34079 = G__36631;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30879__auto__ = function(state_34079){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30879__auto____1.call(this,state_34079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30879__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30879__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30879__auto__;
})()
})();
var state__31077__auto__ = (function (){var statearr_34201 = f__31076__auto__();
(statearr_34201[(6)] = c__31075__auto__);

return statearr_34201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
}));

return c__31075__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34209 = arguments.length;
switch (G__34209) {
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
var G__34211 = arguments.length;
switch (G__34211) {
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
var G__34226 = arguments.length;
switch (G__34226) {
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
var c__31075__auto___36640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = (function (state_34252){
var state_val_34253 = (state_34252[(1)]);
if((state_val_34253 === (7))){
var inst_34247 = (state_34252[(2)]);
var state_34252__$1 = state_34252;
var statearr_34254_36642 = state_34252__$1;
(statearr_34254_36642[(2)] = inst_34247);

(statearr_34254_36642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (1))){
var inst_34228 = null;
var state_34252__$1 = (function (){var statearr_34255 = state_34252;
(statearr_34255[(7)] = inst_34228);

return statearr_34255;
})();
var statearr_34256_36643 = state_34252__$1;
(statearr_34256_36643[(2)] = null);

(statearr_34256_36643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (4))){
var inst_34231 = (state_34252[(8)]);
var inst_34231__$1 = (state_34252[(2)]);
var inst_34233 = (inst_34231__$1 == null);
var inst_34234 = cljs.core.not(inst_34233);
var state_34252__$1 = (function (){var statearr_34257 = state_34252;
(statearr_34257[(8)] = inst_34231__$1);

return statearr_34257;
})();
if(inst_34234){
var statearr_34258_36645 = state_34252__$1;
(statearr_34258_36645[(1)] = (5));

} else {
var statearr_34259_36646 = state_34252__$1;
(statearr_34259_36646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (6))){
var state_34252__$1 = state_34252;
var statearr_34260_36647 = state_34252__$1;
(statearr_34260_36647[(2)] = null);

(statearr_34260_36647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (3))){
var inst_34249 = (state_34252[(2)]);
var inst_34250 = cljs.core.async.close_BANG_(out);
var state_34252__$1 = (function (){var statearr_34261 = state_34252;
(statearr_34261[(9)] = inst_34249);

return statearr_34261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34252__$1,inst_34250);
} else {
if((state_val_34253 === (2))){
var state_34252__$1 = state_34252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34252__$1,(4),ch);
} else {
if((state_val_34253 === (11))){
var inst_34231 = (state_34252[(8)]);
var inst_34241 = (state_34252[(2)]);
var inst_34228 = inst_34231;
var state_34252__$1 = (function (){var statearr_34262 = state_34252;
(statearr_34262[(10)] = inst_34241);

(statearr_34262[(7)] = inst_34228);

return statearr_34262;
})();
var statearr_34263_36649 = state_34252__$1;
(statearr_34263_36649[(2)] = null);

(statearr_34263_36649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (9))){
var inst_34231 = (state_34252[(8)]);
var state_34252__$1 = state_34252;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34252__$1,(11),out,inst_34231);
} else {
if((state_val_34253 === (5))){
var inst_34231 = (state_34252[(8)]);
var inst_34228 = (state_34252[(7)]);
var inst_34236 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34231,inst_34228);
var state_34252__$1 = state_34252;
if(inst_34236){
var statearr_34265_36653 = state_34252__$1;
(statearr_34265_36653[(1)] = (8));

} else {
var statearr_34266_36654 = state_34252__$1;
(statearr_34266_36654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (10))){
var inst_34244 = (state_34252[(2)]);
var state_34252__$1 = state_34252;
var statearr_34267_36655 = state_34252__$1;
(statearr_34267_36655[(2)] = inst_34244);

(statearr_34267_36655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (8))){
var inst_34228 = (state_34252[(7)]);
var tmp34264 = inst_34228;
var inst_34228__$1 = tmp34264;
var state_34252__$1 = (function (){var statearr_34274 = state_34252;
(statearr_34274[(7)] = inst_34228__$1);

return statearr_34274;
})();
var statearr_34275_36656 = state_34252__$1;
(statearr_34275_36656[(2)] = null);

(statearr_34275_36656[(1)] = (2));


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
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_34276 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34276[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_34276[(1)] = (1));

return statearr_34276;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_34252){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_34252);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e34277){var ex__30882__auto__ = e34277;
var statearr_34278_36657 = state_34252;
(statearr_34278_36657[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_34252[(4)]))){
var statearr_34279_36658 = state_34252;
(statearr_34279_36658[(1)] = cljs.core.first((state_34252[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36659 = state_34252;
state_34252 = G__36659;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_34252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_34252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
})();
var state__31077__auto__ = (function (){var statearr_34280 = f__31076__auto__();
(statearr_34280[(6)] = c__31075__auto___36640);

return statearr_34280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34282 = arguments.length;
switch (G__34282) {
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
var c__31075__auto___36663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = (function (state_34355){
var state_val_34356 = (state_34355[(1)]);
if((state_val_34356 === (7))){
var inst_34340 = (state_34355[(2)]);
var state_34355__$1 = state_34355;
var statearr_34364_36664 = state_34355__$1;
(statearr_34364_36664[(2)] = inst_34340);

(statearr_34364_36664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (1))){
var inst_34285 = (new Array(n));
var inst_34286 = inst_34285;
var inst_34287 = (0);
var state_34355__$1 = (function (){var statearr_34371 = state_34355;
(statearr_34371[(7)] = inst_34286);

(statearr_34371[(8)] = inst_34287);

return statearr_34371;
})();
var statearr_34374_36665 = state_34355__$1;
(statearr_34374_36665[(2)] = null);

(statearr_34374_36665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (4))){
var inst_34294 = (state_34355[(9)]);
var inst_34294__$1 = (state_34355[(2)]);
var inst_34295 = (inst_34294__$1 == null);
var inst_34296 = cljs.core.not(inst_34295);
var state_34355__$1 = (function (){var statearr_34384 = state_34355;
(statearr_34384[(9)] = inst_34294__$1);

return statearr_34384;
})();
if(inst_34296){
var statearr_34387_36666 = state_34355__$1;
(statearr_34387_36666[(1)] = (5));

} else {
var statearr_34390_36667 = state_34355__$1;
(statearr_34390_36667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (15))){
var inst_34334 = (state_34355[(2)]);
var state_34355__$1 = state_34355;
var statearr_34394_36668 = state_34355__$1;
(statearr_34394_36668[(2)] = inst_34334);

(statearr_34394_36668[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (13))){
var state_34355__$1 = state_34355;
var statearr_34395_36672 = state_34355__$1;
(statearr_34395_36672[(2)] = null);

(statearr_34395_36672[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (6))){
var inst_34287 = (state_34355[(8)]);
var inst_34330 = (inst_34287 > (0));
var state_34355__$1 = state_34355;
if(cljs.core.truth_(inst_34330)){
var statearr_34396_36674 = state_34355__$1;
(statearr_34396_36674[(1)] = (12));

} else {
var statearr_34397_36676 = state_34355__$1;
(statearr_34397_36676[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (3))){
var inst_34342 = (state_34355[(2)]);
var state_34355__$1 = state_34355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34355__$1,inst_34342);
} else {
if((state_val_34356 === (12))){
var inst_34286 = (state_34355[(7)]);
var inst_34332 = cljs.core.vec(inst_34286);
var state_34355__$1 = state_34355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34355__$1,(15),out,inst_34332);
} else {
if((state_val_34356 === (2))){
var state_34355__$1 = state_34355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34355__$1,(4),ch);
} else {
if((state_val_34356 === (11))){
var inst_34320 = (state_34355[(2)]);
var inst_34321 = (new Array(n));
var inst_34286 = inst_34321;
var inst_34287 = (0);
var state_34355__$1 = (function (){var statearr_34401 = state_34355;
(statearr_34401[(10)] = inst_34320);

(statearr_34401[(7)] = inst_34286);

(statearr_34401[(8)] = inst_34287);

return statearr_34401;
})();
var statearr_34402_36677 = state_34355__$1;
(statearr_34402_36677[(2)] = null);

(statearr_34402_36677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (9))){
var inst_34286 = (state_34355[(7)]);
var inst_34318 = cljs.core.vec(inst_34286);
var state_34355__$1 = state_34355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34355__$1,(11),out,inst_34318);
} else {
if((state_val_34356 === (5))){
var inst_34286 = (state_34355[(7)]);
var inst_34287 = (state_34355[(8)]);
var inst_34294 = (state_34355[(9)]);
var inst_34313 = (state_34355[(11)]);
var inst_34298 = (inst_34286[inst_34287] = inst_34294);
var inst_34313__$1 = (inst_34287 + (1));
var inst_34314 = (inst_34313__$1 < n);
var state_34355__$1 = (function (){var statearr_34406 = state_34355;
(statearr_34406[(12)] = inst_34298);

(statearr_34406[(11)] = inst_34313__$1);

return statearr_34406;
})();
if(cljs.core.truth_(inst_34314)){
var statearr_34409_36683 = state_34355__$1;
(statearr_34409_36683[(1)] = (8));

} else {
var statearr_34417_36687 = state_34355__$1;
(statearr_34417_36687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (14))){
var inst_34337 = (state_34355[(2)]);
var inst_34338 = cljs.core.async.close_BANG_(out);
var state_34355__$1 = (function (){var statearr_34419 = state_34355;
(statearr_34419[(13)] = inst_34337);

return statearr_34419;
})();
var statearr_34420_36688 = state_34355__$1;
(statearr_34420_36688[(2)] = inst_34338);

(statearr_34420_36688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (10))){
var inst_34324 = (state_34355[(2)]);
var state_34355__$1 = state_34355;
var statearr_34422_36689 = state_34355__$1;
(statearr_34422_36689[(2)] = inst_34324);

(statearr_34422_36689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (8))){
var inst_34286 = (state_34355[(7)]);
var inst_34313 = (state_34355[(11)]);
var tmp34418 = inst_34286;
var inst_34286__$1 = tmp34418;
var inst_34287 = inst_34313;
var state_34355__$1 = (function (){var statearr_34423 = state_34355;
(statearr_34423[(7)] = inst_34286__$1);

(statearr_34423[(8)] = inst_34287);

return statearr_34423;
})();
var statearr_34424_36691 = state_34355__$1;
(statearr_34424_36691[(2)] = null);

(statearr_34424_36691[(1)] = (2));


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
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_34437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34437[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_34437[(1)] = (1));

return statearr_34437;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_34355){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_34355);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e34438){var ex__30882__auto__ = e34438;
var statearr_34439_36696 = state_34355;
(statearr_34439_36696[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_34355[(4)]))){
var statearr_34441_36697 = state_34355;
(statearr_34441_36697[(1)] = cljs.core.first((state_34355[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36699 = state_34355;
state_34355 = G__36699;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_34355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_34355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
})();
var state__31077__auto__ = (function (){var statearr_34448 = f__31076__auto__();
(statearr_34448[(6)] = c__31075__auto___36663);

return statearr_34448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34463 = arguments.length;
switch (G__34463) {
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
var c__31075__auto___36701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31076__auto__ = (function (){var switch__30878__auto__ = (function (state_34520){
var state_val_34521 = (state_34520[(1)]);
if((state_val_34521 === (7))){
var inst_34516 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
var statearr_34523_36702 = state_34520__$1;
(statearr_34523_36702[(2)] = inst_34516);

(statearr_34523_36702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (1))){
var inst_34467 = [];
var inst_34469 = inst_34467;
var inst_34470 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34520__$1 = (function (){var statearr_34524 = state_34520;
(statearr_34524[(7)] = inst_34469);

(statearr_34524[(8)] = inst_34470);

return statearr_34524;
})();
var statearr_34528_36703 = state_34520__$1;
(statearr_34528_36703[(2)] = null);

(statearr_34528_36703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (4))){
var inst_34473 = (state_34520[(9)]);
var inst_34473__$1 = (state_34520[(2)]);
var inst_34476 = (inst_34473__$1 == null);
var inst_34477 = cljs.core.not(inst_34476);
var state_34520__$1 = (function (){var statearr_34530 = state_34520;
(statearr_34530[(9)] = inst_34473__$1);

return statearr_34530;
})();
if(inst_34477){
var statearr_34531_36705 = state_34520__$1;
(statearr_34531_36705[(1)] = (5));

} else {
var statearr_34532_36706 = state_34520__$1;
(statearr_34532_36706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (15))){
var inst_34469 = (state_34520[(7)]);
var inst_34508 = cljs.core.vec(inst_34469);
var state_34520__$1 = state_34520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34520__$1,(18),out,inst_34508);
} else {
if((state_val_34521 === (13))){
var inst_34503 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
var statearr_34533_36708 = state_34520__$1;
(statearr_34533_36708[(2)] = inst_34503);

(statearr_34533_36708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (6))){
var inst_34469 = (state_34520[(7)]);
var inst_34505 = inst_34469.length;
var inst_34506 = (inst_34505 > (0));
var state_34520__$1 = state_34520;
if(cljs.core.truth_(inst_34506)){
var statearr_34534_36709 = state_34520__$1;
(statearr_34534_36709[(1)] = (15));

} else {
var statearr_34535_36710 = state_34520__$1;
(statearr_34535_36710[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (17))){
var inst_34513 = (state_34520[(2)]);
var inst_34514 = cljs.core.async.close_BANG_(out);
var state_34520__$1 = (function (){var statearr_34536 = state_34520;
(statearr_34536[(10)] = inst_34513);

return statearr_34536;
})();
var statearr_34537_36711 = state_34520__$1;
(statearr_34537_36711[(2)] = inst_34514);

(statearr_34537_36711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (3))){
var inst_34518 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34520__$1,inst_34518);
} else {
if((state_val_34521 === (12))){
var inst_34469 = (state_34520[(7)]);
var inst_34494 = cljs.core.vec(inst_34469);
var state_34520__$1 = state_34520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34520__$1,(14),out,inst_34494);
} else {
if((state_val_34521 === (2))){
var state_34520__$1 = state_34520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34520__$1,(4),ch);
} else {
if((state_val_34521 === (11))){
var inst_34469 = (state_34520[(7)]);
var inst_34473 = (state_34520[(9)]);
var inst_34479 = (state_34520[(11)]);
var inst_34491 = inst_34469.push(inst_34473);
var tmp34539 = inst_34469;
var inst_34469__$1 = tmp34539;
var inst_34470 = inst_34479;
var state_34520__$1 = (function (){var statearr_34549 = state_34520;
(statearr_34549[(12)] = inst_34491);

(statearr_34549[(7)] = inst_34469__$1);

(statearr_34549[(8)] = inst_34470);

return statearr_34549;
})();
var statearr_34550_36712 = state_34520__$1;
(statearr_34550_36712[(2)] = null);

(statearr_34550_36712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (9))){
var inst_34470 = (state_34520[(8)]);
var inst_34484 = cljs.core.keyword_identical_QMARK_(inst_34470,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34520__$1 = state_34520;
var statearr_34551_36714 = state_34520__$1;
(statearr_34551_36714[(2)] = inst_34484);

(statearr_34551_36714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (5))){
var inst_34473 = (state_34520[(9)]);
var inst_34479 = (state_34520[(11)]);
var inst_34470 = (state_34520[(8)]);
var inst_34481 = (state_34520[(13)]);
var inst_34479__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34473) : f.call(null,inst_34473));
var inst_34481__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34479__$1,inst_34470);
var state_34520__$1 = (function (){var statearr_34553 = state_34520;
(statearr_34553[(11)] = inst_34479__$1);

(statearr_34553[(13)] = inst_34481__$1);

return statearr_34553;
})();
if(inst_34481__$1){
var statearr_34554_36716 = state_34520__$1;
(statearr_34554_36716[(1)] = (8));

} else {
var statearr_34555_36717 = state_34520__$1;
(statearr_34555_36717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (14))){
var inst_34473 = (state_34520[(9)]);
var inst_34479 = (state_34520[(11)]);
var inst_34496 = (state_34520[(2)]);
var inst_34499 = [];
var inst_34500 = inst_34499.push(inst_34473);
var inst_34469 = inst_34499;
var inst_34470 = inst_34479;
var state_34520__$1 = (function (){var statearr_34556 = state_34520;
(statearr_34556[(14)] = inst_34496);

(statearr_34556[(15)] = inst_34500);

(statearr_34556[(7)] = inst_34469);

(statearr_34556[(8)] = inst_34470);

return statearr_34556;
})();
var statearr_34557_36718 = state_34520__$1;
(statearr_34557_36718[(2)] = null);

(statearr_34557_36718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (16))){
var state_34520__$1 = state_34520;
var statearr_34559_36719 = state_34520__$1;
(statearr_34559_36719[(2)] = null);

(statearr_34559_36719[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (10))){
var inst_34486 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
if(cljs.core.truth_(inst_34486)){
var statearr_34561_36720 = state_34520__$1;
(statearr_34561_36720[(1)] = (11));

} else {
var statearr_34562_36721 = state_34520__$1;
(statearr_34562_36721[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (18))){
var inst_34510 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
var statearr_34563_36725 = state_34520__$1;
(statearr_34563_36725[(2)] = inst_34510);

(statearr_34563_36725[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (8))){
var inst_34481 = (state_34520[(13)]);
var state_34520__$1 = state_34520;
var statearr_34566_36727 = state_34520__$1;
(statearr_34566_36727[(2)] = inst_34481);

(statearr_34566_36727[(1)] = (10));


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
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_34567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34567[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_34567[(1)] = (1));

return statearr_34567;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_34520){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__(state_34520);
if(cljs.core.keyword_identical_QMARK_(result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e34568){var ex__30882__auto__ = e34568;
var statearr_34569_36737 = state_34520;
(statearr_34569_36737[(2)] = ex__30882__auto__);


if(cljs.core.seq((state_34520[(4)]))){
var statearr_34570_36740 = state_34520;
(statearr_34570_36740[(1)] = cljs.core.first((state_34520[(4)])));

} else {
throw ex__30882__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36741 = state_34520;
state_34520 = G__36741;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_34520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_34520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
})();
var state__31077__auto__ = (function (){var statearr_34575 = f__31076__auto__();
(statearr_34575[(6)] = c__31075__auto___36701);

return statearr_34575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31077__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
