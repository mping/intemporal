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
cljs.core.async.t_cljs$core$async30295 = (function (f,blockable,meta30296){
this.f = f;
this.blockable = blockable;
this.meta30296 = meta30296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30297,meta30296__$1){
var self__ = this;
var _30297__$1 = this;
return (new cljs.core.async.t_cljs$core$async30295(self__.f,self__.blockable,meta30296__$1));
}));

(cljs.core.async.t_cljs$core$async30295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30297){
var self__ = this;
var _30297__$1 = this;
return self__.meta30296;
}));

(cljs.core.async.t_cljs$core$async30295.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30295.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30295.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30295.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30296","meta30296",1771748393,null)], null);
}));

(cljs.core.async.t_cljs$core$async30295.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30295");

(cljs.core.async.t_cljs$core$async30295.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async30295");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30295.
 */
cljs.core.async.__GT_t_cljs$core$async30295 = (function cljs$core$async$__GT_t_cljs$core$async30295(f,blockable,meta30296){
return (new cljs.core.async.t_cljs$core$async30295(f,blockable,meta30296));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30294 = arguments.length;
switch (G__30294) {
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
return (new cljs.core.async.t_cljs$core$async30295(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30300 = arguments.length;
switch (G__30300) {
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
var G__30314 = arguments.length;
switch (G__30314) {
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
var G__30325 = arguments.length;
switch (G__30325) {
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
var val_33724 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33724) : fn1.call(null,val_33724));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33724) : fn1.call(null,val_33724));
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
var G__30327 = arguments.length;
switch (G__30327) {
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
var n__5616__auto___33737 = n;
var x_33738 = (0);
while(true){
if((x_33738 < n__5616__auto___33737)){
(a[x_33738] = x_33738);

var G__33739 = (x_33738 + (1));
x_33738 = G__33739;
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
cljs.core.async.t_cljs$core$async30328 = (function (flag,meta30329){
this.flag = flag;
this.meta30329 = meta30329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30330,meta30329__$1){
var self__ = this;
var _30330__$1 = this;
return (new cljs.core.async.t_cljs$core$async30328(self__.flag,meta30329__$1));
}));

(cljs.core.async.t_cljs$core$async30328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30330){
var self__ = this;
var _30330__$1 = this;
return self__.meta30329;
}));

(cljs.core.async.t_cljs$core$async30328.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30329","meta30329",-1769616714,null)], null);
}));

(cljs.core.async.t_cljs$core$async30328.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30328");

(cljs.core.async.t_cljs$core$async30328.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async30328");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30328.
 */
cljs.core.async.__GT_t_cljs$core$async30328 = (function cljs$core$async$__GT_t_cljs$core$async30328(flag,meta30329){
return (new cljs.core.async.t_cljs$core$async30328(flag,meta30329));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async30328(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30334 = (function (flag,cb,meta30335){
this.flag = flag;
this.cb = cb;
this.meta30335 = meta30335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30336,meta30335__$1){
var self__ = this;
var _30336__$1 = this;
return (new cljs.core.async.t_cljs$core$async30334(self__.flag,self__.cb,meta30335__$1));
}));

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30336){
var self__ = this;
var _30336__$1 = this;
return self__.meta30335;
}));

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30335","meta30335",-1009123233,null)], null);
}));

(cljs.core.async.t_cljs$core$async30334.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30334");

(cljs.core.async.t_cljs$core$async30334.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async30334");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30334.
 */
cljs.core.async.__GT_t_cljs$core$async30334 = (function cljs$core$async$__GT_t_cljs$core$async30334(flag,cb,meta30335){
return (new cljs.core.async.t_cljs$core$async30334(flag,cb,meta30335));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async30334(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_33746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_33746)){
if((!(((port_33746.cljs$core$IFn$_invoke$arity$1 ? port_33746.cljs$core$IFn$_invoke$arity$1((1)) : port_33746.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__33747 = (i + (1));
i = G__33747;
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
return (function (p1__30356_SHARP_){
var G__30363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30356_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30363) : fret.call(null,G__30363));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__30357_SHARP_){
var G__30364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30357_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30364) : fret.call(null,G__30364));
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
var G__33748 = (i + (1));
i = G__33748;
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
var len__5749__auto___33751 = arguments.length;
var i__5750__auto___33753 = (0);
while(true){
if((i__5750__auto___33753 < len__5749__auto___33751)){
args__5755__auto__.push((arguments[i__5750__auto___33753]));

var G__33754 = (i__5750__auto___33753 + (1));
i__5750__auto___33753 = G__33754;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30369){
var map__30370 = p__30369;
var map__30370__$1 = cljs.core.__destructure_map(map__30370);
var opts = map__30370__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30367){
var G__30368 = cljs.core.first(seq30367);
var seq30367__$1 = cljs.core.next(seq30367);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30368,seq30367__$1);
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
var G__30398 = arguments.length;
switch (G__30398) {
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
var c__30232__auto___33764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = (function (state_30432){
var state_val_30433 = (state_30432[(1)]);
if((state_val_30433 === (7))){
var inst_30428 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30437_33768 = state_30432__$1;
(statearr_30437_33768[(2)] = inst_30428);

(statearr_30437_33768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (1))){
var state_30432__$1 = state_30432;
var statearr_30438_33769 = state_30432__$1;
(statearr_30438_33769[(2)] = null);

(statearr_30438_33769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (4))){
var inst_30411 = (state_30432[(7)]);
var inst_30411__$1 = (state_30432[(2)]);
var inst_30412 = (inst_30411__$1 == null);
var state_30432__$1 = (function (){var statearr_30439 = state_30432;
(statearr_30439[(7)] = inst_30411__$1);

return statearr_30439;
})();
if(cljs.core.truth_(inst_30412)){
var statearr_30440_33770 = state_30432__$1;
(statearr_30440_33770[(1)] = (5));

} else {
var statearr_30441_33771 = state_30432__$1;
(statearr_30441_33771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (13))){
var state_30432__$1 = state_30432;
var statearr_30446_33772 = state_30432__$1;
(statearr_30446_33772[(2)] = null);

(statearr_30446_33772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (6))){
var inst_30411 = (state_30432[(7)]);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30432__$1,(11),to,inst_30411);
} else {
if((state_val_30433 === (3))){
var inst_30430 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30432__$1,inst_30430);
} else {
if((state_val_30433 === (12))){
var state_30432__$1 = state_30432;
var statearr_30448_33773 = state_30432__$1;
(statearr_30448_33773[(2)] = null);

(statearr_30448_33773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (2))){
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30432__$1,(4),from);
} else {
if((state_val_30433 === (11))){
var inst_30421 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30421)){
var statearr_30450_33774 = state_30432__$1;
(statearr_30450_33774[(1)] = (12));

} else {
var statearr_30451_33775 = state_30432__$1;
(statearr_30451_33775[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (9))){
var state_30432__$1 = state_30432;
var statearr_30452_33776 = state_30432__$1;
(statearr_30452_33776[(2)] = null);

(statearr_30452_33776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (5))){
var state_30432__$1 = state_30432;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30453_33778 = state_30432__$1;
(statearr_30453_33778[(1)] = (8));

} else {
var statearr_30455_33779 = state_30432__$1;
(statearr_30455_33779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (14))){
var inst_30426 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30459_33780 = state_30432__$1;
(statearr_30459_33780[(2)] = inst_30426);

(statearr_30459_33780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (10))){
var inst_30418 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30460_33781 = state_30432__$1;
(statearr_30460_33781[(2)] = inst_30418);

(statearr_30460_33781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (8))){
var inst_30415 = cljs.core.async.close_BANG_(to);
var state_30432__$1 = state_30432;
var statearr_30461_33782 = state_30432__$1;
(statearr_30461_33782[(2)] = inst_30415);

(statearr_30461_33782[(1)] = (10));


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
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_30462 = [null,null,null,null,null,null,null,null];
(statearr_30462[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_30462[(1)] = (1));

return statearr_30462;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_30432){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_30432);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e30463){var ex__28696__auto__ = e30463;
var statearr_30464_33783 = state_30432;
(statearr_30464_33783[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_30432[(4)]))){
var statearr_30465_33784 = state_30432;
(statearr_30465_33784[(1)] = cljs.core.first((state_30432[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33785 = state_30432;
state_30432 = G__33785;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_30432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_30432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
})();
var state__30234__auto__ = (function (){var statearr_30468 = f__30233__auto__();
(statearr_30468[(6)] = c__30232__auto___33764);

return statearr_30468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
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
var process__$1 = (function (p__30475){
var vec__30476 = p__30475;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30476,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30476,(1),null);
var job = vec__30476;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30232__auto___33787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = (function (state_30485){
var state_val_30486 = (state_30485[(1)]);
if((state_val_30486 === (1))){
var state_30485__$1 = state_30485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30485__$1,(2),res,v);
} else {
if((state_val_30486 === (2))){
var inst_30481 = (state_30485[(2)]);
var inst_30482 = cljs.core.async.close_BANG_(res);
var state_30485__$1 = (function (){var statearr_30493 = state_30485;
(statearr_30493[(7)] = inst_30481);

return statearr_30493;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30485__$1,inst_30482);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0 = (function (){
var statearr_30494 = [null,null,null,null,null,null,null,null];
(statearr_30494[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__);

(statearr_30494[(1)] = (1));

return statearr_30494;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1 = (function (state_30485){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_30485);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e30496){var ex__28696__auto__ = e30496;
var statearr_30497_33788 = state_30485;
(statearr_30497_33788[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_30485[(4)]))){
var statearr_30498_33789 = state_30485;
(statearr_30498_33789[(1)] = cljs.core.first((state_30485[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33790 = state_30485;
state_30485 = G__33790;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = function(state_30485){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1.call(this,state_30485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__;
})()
})();
var state__30234__auto__ = (function (){var statearr_30503 = f__30233__auto__();
(statearr_30503[(6)] = c__30232__auto___33787);

return statearr_30503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30506){
var vec__30507 = p__30506;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30507,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30507,(1),null);
var job = vec__30507;
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
var n__5616__auto___33791 = n;
var __33792 = (0);
while(true){
if((__33792 < n__5616__auto___33791)){
var G__30515_33793 = type;
var G__30515_33794__$1 = (((G__30515_33793 instanceof cljs.core.Keyword))?G__30515_33793.fqn:null);
switch (G__30515_33794__$1) {
case "compute":
var c__30232__auto___33796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33792,c__30232__auto___33796,G__30515_33793,G__30515_33794__$1,n__5616__auto___33791,jobs,results,process__$1,async){
return (function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = ((function (__33792,c__30232__auto___33796,G__30515_33793,G__30515_33794__$1,n__5616__auto___33791,jobs,results,process__$1,async){
return (function (state_30531){
var state_val_30532 = (state_30531[(1)]);
if((state_val_30532 === (1))){
var state_30531__$1 = state_30531;
var statearr_30534_33798 = state_30531__$1;
(statearr_30534_33798[(2)] = null);

(statearr_30534_33798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (2))){
var state_30531__$1 = state_30531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30531__$1,(4),jobs);
} else {
if((state_val_30532 === (3))){
var inst_30529 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30531__$1,inst_30529);
} else {
if((state_val_30532 === (4))){
var inst_30518 = (state_30531[(2)]);
var inst_30522 = process__$1(inst_30518);
var state_30531__$1 = state_30531;
if(cljs.core.truth_(inst_30522)){
var statearr_30543_33799 = state_30531__$1;
(statearr_30543_33799[(1)] = (5));

} else {
var statearr_30544_33800 = state_30531__$1;
(statearr_30544_33800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (5))){
var state_30531__$1 = state_30531;
var statearr_30550_33801 = state_30531__$1;
(statearr_30550_33801[(2)] = null);

(statearr_30550_33801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (6))){
var state_30531__$1 = state_30531;
var statearr_30551_33802 = state_30531__$1;
(statearr_30551_33802[(2)] = null);

(statearr_30551_33802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (7))){
var inst_30527 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30553_33803 = state_30531__$1;
(statearr_30553_33803[(2)] = inst_30527);

(statearr_30553_33803[(1)] = (3));


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
});})(__33792,c__30232__auto___33796,G__30515_33793,G__30515_33794__$1,n__5616__auto___33791,jobs,results,process__$1,async))
;
return ((function (__33792,switch__28692__auto__,c__30232__auto___33796,G__30515_33793,G__30515_33794__$1,n__5616__auto___33791,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0 = (function (){
var statearr_30554 = [null,null,null,null,null,null,null];
(statearr_30554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__);

(statearr_30554[(1)] = (1));

return statearr_30554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1 = (function (state_30531){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_30531);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e30559){var ex__28696__auto__ = e30559;
var statearr_30562_33806 = state_30531;
(statearr_30562_33806[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_30531[(4)]))){
var statearr_30565_33807 = state_30531;
(statearr_30565_33807[(1)] = cljs.core.first((state_30531[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33810 = state_30531;
state_30531 = G__33810;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = function(state_30531){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1.call(this,state_30531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__;
})()
;})(__33792,switch__28692__auto__,c__30232__auto___33796,G__30515_33793,G__30515_33794__$1,n__5616__auto___33791,jobs,results,process__$1,async))
})();
var state__30234__auto__ = (function (){var statearr_30567 = f__30233__auto__();
(statearr_30567[(6)] = c__30232__auto___33796);

return statearr_30567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
});})(__33792,c__30232__auto___33796,G__30515_33793,G__30515_33794__$1,n__5616__auto___33791,jobs,results,process__$1,async))
);


break;
case "async":
var c__30232__auto___33814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33792,c__30232__auto___33814,G__30515_33793,G__30515_33794__$1,n__5616__auto___33791,jobs,results,process__$1,async){
return (function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = ((function (__33792,c__30232__auto___33814,G__30515_33793,G__30515_33794__$1,n__5616__auto___33791,jobs,results,process__$1,async){
return (function (state_30583){
var state_val_30584 = (state_30583[(1)]);
if((state_val_30584 === (1))){
var state_30583__$1 = state_30583;
var statearr_30593_33815 = state_30583__$1;
(statearr_30593_33815[(2)] = null);

(statearr_30593_33815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (2))){
var state_30583__$1 = state_30583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30583__$1,(4),jobs);
} else {
if((state_val_30584 === (3))){
var inst_30581 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30583__$1,inst_30581);
} else {
if((state_val_30584 === (4))){
var inst_30571 = (state_30583[(2)]);
var inst_30572 = async(inst_30571);
var state_30583__$1 = state_30583;
if(cljs.core.truth_(inst_30572)){
var statearr_30598_33816 = state_30583__$1;
(statearr_30598_33816[(1)] = (5));

} else {
var statearr_30599_33817 = state_30583__$1;
(statearr_30599_33817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (5))){
var state_30583__$1 = state_30583;
var statearr_30601_33818 = state_30583__$1;
(statearr_30601_33818[(2)] = null);

(statearr_30601_33818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (6))){
var state_30583__$1 = state_30583;
var statearr_30602_33819 = state_30583__$1;
(statearr_30602_33819[(2)] = null);

(statearr_30602_33819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (7))){
var inst_30579 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
var statearr_30605_33820 = state_30583__$1;
(statearr_30605_33820[(2)] = inst_30579);

(statearr_30605_33820[(1)] = (3));


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
});})(__33792,c__30232__auto___33814,G__30515_33793,G__30515_33794__$1,n__5616__auto___33791,jobs,results,process__$1,async))
;
return ((function (__33792,switch__28692__auto__,c__30232__auto___33814,G__30515_33793,G__30515_33794__$1,n__5616__auto___33791,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0 = (function (){
var statearr_30608 = [null,null,null,null,null,null,null];
(statearr_30608[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__);

(statearr_30608[(1)] = (1));

return statearr_30608;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1 = (function (state_30583){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_30583);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e30610){var ex__28696__auto__ = e30610;
var statearr_30611_33822 = state_30583;
(statearr_30611_33822[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_30583[(4)]))){
var statearr_30614_33823 = state_30583;
(statearr_30614_33823[(1)] = cljs.core.first((state_30583[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33824 = state_30583;
state_30583 = G__33824;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = function(state_30583){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1.call(this,state_30583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__;
})()
;})(__33792,switch__28692__auto__,c__30232__auto___33814,G__30515_33793,G__30515_33794__$1,n__5616__auto___33791,jobs,results,process__$1,async))
})();
var state__30234__auto__ = (function (){var statearr_30617 = f__30233__auto__();
(statearr_30617[(6)] = c__30232__auto___33814);

return statearr_30617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
});})(__33792,c__30232__auto___33814,G__30515_33793,G__30515_33794__$1,n__5616__auto___33791,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30515_33794__$1)].join('')));

}

var G__33825 = (__33792 + (1));
__33792 = G__33825;
continue;
} else {
}
break;
}

var c__30232__auto___33826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = (function (state_30651){
var state_val_30652 = (state_30651[(1)]);
if((state_val_30652 === (7))){
var inst_30647 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
var statearr_30659_33828 = state_30651__$1;
(statearr_30659_33828[(2)] = inst_30647);

(statearr_30659_33828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (1))){
var state_30651__$1 = state_30651;
var statearr_30660_33829 = state_30651__$1;
(statearr_30660_33829[(2)] = null);

(statearr_30660_33829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (4))){
var inst_30626 = (state_30651[(7)]);
var inst_30626__$1 = (state_30651[(2)]);
var inst_30627 = (inst_30626__$1 == null);
var state_30651__$1 = (function (){var statearr_30666 = state_30651;
(statearr_30666[(7)] = inst_30626__$1);

return statearr_30666;
})();
if(cljs.core.truth_(inst_30627)){
var statearr_30667_33830 = state_30651__$1;
(statearr_30667_33830[(1)] = (5));

} else {
var statearr_30668_33831 = state_30651__$1;
(statearr_30668_33831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (6))){
var inst_30626 = (state_30651[(7)]);
var inst_30631 = (state_30651[(8)]);
var inst_30631__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30637 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30638 = [inst_30626,inst_30631__$1];
var inst_30639 = (new cljs.core.PersistentVector(null,2,(5),inst_30637,inst_30638,null));
var state_30651__$1 = (function (){var statearr_30676 = state_30651;
(statearr_30676[(8)] = inst_30631__$1);

return statearr_30676;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30651__$1,(8),jobs,inst_30639);
} else {
if((state_val_30652 === (3))){
var inst_30649 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30651__$1,inst_30649);
} else {
if((state_val_30652 === (2))){
var state_30651__$1 = state_30651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30651__$1,(4),from);
} else {
if((state_val_30652 === (9))){
var inst_30643 = (state_30651[(2)]);
var state_30651__$1 = (function (){var statearr_30684 = state_30651;
(statearr_30684[(9)] = inst_30643);

return statearr_30684;
})();
var statearr_30685_33834 = state_30651__$1;
(statearr_30685_33834[(2)] = null);

(statearr_30685_33834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (5))){
var inst_30629 = cljs.core.async.close_BANG_(jobs);
var state_30651__$1 = state_30651;
var statearr_30693_33835 = state_30651__$1;
(statearr_30693_33835[(2)] = inst_30629);

(statearr_30693_33835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (8))){
var inst_30631 = (state_30651[(8)]);
var inst_30641 = (state_30651[(2)]);
var state_30651__$1 = (function (){var statearr_30694 = state_30651;
(statearr_30694[(10)] = inst_30641);

return statearr_30694;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30651__$1,(9),results,inst_30631);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0 = (function (){
var statearr_30695 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30695[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__);

(statearr_30695[(1)] = (1));

return statearr_30695;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1 = (function (state_30651){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_30651);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e30696){var ex__28696__auto__ = e30696;
var statearr_30697_33837 = state_30651;
(statearr_30697_33837[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_30651[(4)]))){
var statearr_30698_33838 = state_30651;
(statearr_30698_33838[(1)] = cljs.core.first((state_30651[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33839 = state_30651;
state_30651 = G__33839;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = function(state_30651){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1.call(this,state_30651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__;
})()
})();
var state__30234__auto__ = (function (){var statearr_30703 = f__30233__auto__();
(statearr_30703[(6)] = c__30232__auto___33826);

return statearr_30703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
}));


var c__30232__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = (function (state_30748){
var state_val_30750 = (state_30748[(1)]);
if((state_val_30750 === (7))){
var inst_30744 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30752_33846 = state_30748__$1;
(statearr_30752_33846[(2)] = inst_30744);

(statearr_30752_33846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (20))){
var state_30748__$1 = state_30748;
var statearr_30753_33847 = state_30748__$1;
(statearr_30753_33847[(2)] = null);

(statearr_30753_33847[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (1))){
var state_30748__$1 = state_30748;
var statearr_30754_33848 = state_30748__$1;
(statearr_30754_33848[(2)] = null);

(statearr_30754_33848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (4))){
var inst_30709 = (state_30748[(7)]);
var inst_30709__$1 = (state_30748[(2)]);
var inst_30710 = (inst_30709__$1 == null);
var state_30748__$1 = (function (){var statearr_30755 = state_30748;
(statearr_30755[(7)] = inst_30709__$1);

return statearr_30755;
})();
if(cljs.core.truth_(inst_30710)){
var statearr_30760_33850 = state_30748__$1;
(statearr_30760_33850[(1)] = (5));

} else {
var statearr_30761_33851 = state_30748__$1;
(statearr_30761_33851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (15))){
var inst_30726 = (state_30748[(8)]);
var state_30748__$1 = state_30748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30748__$1,(18),to,inst_30726);
} else {
if((state_val_30750 === (21))){
var inst_30739 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30762_33853 = state_30748__$1;
(statearr_30762_33853[(2)] = inst_30739);

(statearr_30762_33853[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (13))){
var inst_30741 = (state_30748[(2)]);
var state_30748__$1 = (function (){var statearr_30763 = state_30748;
(statearr_30763[(9)] = inst_30741);

return statearr_30763;
})();
var statearr_30764_33854 = state_30748__$1;
(statearr_30764_33854[(2)] = null);

(statearr_30764_33854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (6))){
var inst_30709 = (state_30748[(7)]);
var state_30748__$1 = state_30748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30748__$1,(11),inst_30709);
} else {
if((state_val_30750 === (17))){
var inst_30734 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
if(cljs.core.truth_(inst_30734)){
var statearr_30770_33855 = state_30748__$1;
(statearr_30770_33855[(1)] = (19));

} else {
var statearr_30771_33856 = state_30748__$1;
(statearr_30771_33856[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (3))){
var inst_30746 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30748__$1,inst_30746);
} else {
if((state_val_30750 === (12))){
var inst_30719 = (state_30748[(10)]);
var state_30748__$1 = state_30748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30748__$1,(14),inst_30719);
} else {
if((state_val_30750 === (2))){
var state_30748__$1 = state_30748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30748__$1,(4),results);
} else {
if((state_val_30750 === (19))){
var state_30748__$1 = state_30748;
var statearr_30775_33858 = state_30748__$1;
(statearr_30775_33858[(2)] = null);

(statearr_30775_33858[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (11))){
var inst_30719 = (state_30748[(2)]);
var state_30748__$1 = (function (){var statearr_30776 = state_30748;
(statearr_30776[(10)] = inst_30719);

return statearr_30776;
})();
var statearr_30777_33859 = state_30748__$1;
(statearr_30777_33859[(2)] = null);

(statearr_30777_33859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (9))){
var state_30748__$1 = state_30748;
var statearr_30778_33860 = state_30748__$1;
(statearr_30778_33860[(2)] = null);

(statearr_30778_33860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (5))){
var state_30748__$1 = state_30748;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30779_33861 = state_30748__$1;
(statearr_30779_33861[(1)] = (8));

} else {
var statearr_30781_33862 = state_30748__$1;
(statearr_30781_33862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (14))){
var inst_30726 = (state_30748[(8)]);
var inst_30728 = (state_30748[(11)]);
var inst_30726__$1 = (state_30748[(2)]);
var inst_30727 = (inst_30726__$1 == null);
var inst_30728__$1 = cljs.core.not(inst_30727);
var state_30748__$1 = (function (){var statearr_30782 = state_30748;
(statearr_30782[(8)] = inst_30726__$1);

(statearr_30782[(11)] = inst_30728__$1);

return statearr_30782;
})();
if(inst_30728__$1){
var statearr_30783_33864 = state_30748__$1;
(statearr_30783_33864[(1)] = (15));

} else {
var statearr_30784_33865 = state_30748__$1;
(statearr_30784_33865[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (16))){
var inst_30728 = (state_30748[(11)]);
var state_30748__$1 = state_30748;
var statearr_30785_33866 = state_30748__$1;
(statearr_30785_33866[(2)] = inst_30728);

(statearr_30785_33866[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (10))){
var inst_30716 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30786_33867 = state_30748__$1;
(statearr_30786_33867[(2)] = inst_30716);

(statearr_30786_33867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (18))){
var inst_30731 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30787_33868 = state_30748__$1;
(statearr_30787_33868[(2)] = inst_30731);

(statearr_30787_33868[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (8))){
var inst_30713 = cljs.core.async.close_BANG_(to);
var state_30748__$1 = state_30748;
var statearr_30790_33869 = state_30748__$1;
(statearr_30790_33869[(2)] = inst_30713);

(statearr_30790_33869[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0 = (function (){
var statearr_30791 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30791[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__);

(statearr_30791[(1)] = (1));

return statearr_30791;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1 = (function (state_30748){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_30748);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e30792){var ex__28696__auto__ = e30792;
var statearr_30793_33870 = state_30748;
(statearr_30793_33870[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_30748[(4)]))){
var statearr_30794_33871 = state_30748;
(statearr_30794_33871[(1)] = cljs.core.first((state_30748[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33872 = state_30748;
state_30748 = G__33872;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__ = function(state_30748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1.call(this,state_30748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28693__auto__;
})()
})();
var state__30234__auto__ = (function (){var statearr_30795 = f__30233__auto__();
(statearr_30795[(6)] = c__30232__auto__);

return statearr_30795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
}));

return c__30232__auto__;
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
var G__30801 = arguments.length;
switch (G__30801) {
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
var G__30824 = arguments.length;
switch (G__30824) {
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
var G__30837 = arguments.length;
switch (G__30837) {
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
var c__30232__auto___33884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = (function (state_30885){
var state_val_30886 = (state_30885[(1)]);
if((state_val_30886 === (7))){
var inst_30881 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
var statearr_30893_33885 = state_30885__$1;
(statearr_30893_33885[(2)] = inst_30881);

(statearr_30893_33885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (1))){
var state_30885__$1 = state_30885;
var statearr_30894_33886 = state_30885__$1;
(statearr_30894_33886[(2)] = null);

(statearr_30894_33886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (4))){
var inst_30854 = (state_30885[(7)]);
var inst_30854__$1 = (state_30885[(2)]);
var inst_30855 = (inst_30854__$1 == null);
var state_30885__$1 = (function (){var statearr_30896 = state_30885;
(statearr_30896[(7)] = inst_30854__$1);

return statearr_30896;
})();
if(cljs.core.truth_(inst_30855)){
var statearr_30897_33887 = state_30885__$1;
(statearr_30897_33887[(1)] = (5));

} else {
var statearr_30900_33888 = state_30885__$1;
(statearr_30900_33888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (13))){
var state_30885__$1 = state_30885;
var statearr_30903_33889 = state_30885__$1;
(statearr_30903_33889[(2)] = null);

(statearr_30903_33889[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (6))){
var inst_30854 = (state_30885[(7)]);
var inst_30865 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30854) : p.call(null,inst_30854));
var state_30885__$1 = state_30885;
if(cljs.core.truth_(inst_30865)){
var statearr_30906_33892 = state_30885__$1;
(statearr_30906_33892[(1)] = (9));

} else {
var statearr_30908_33893 = state_30885__$1;
(statearr_30908_33893[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (3))){
var inst_30883 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30885__$1,inst_30883);
} else {
if((state_val_30886 === (12))){
var state_30885__$1 = state_30885;
var statearr_30913_33895 = state_30885__$1;
(statearr_30913_33895[(2)] = null);

(statearr_30913_33895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (2))){
var state_30885__$1 = state_30885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30885__$1,(4),ch);
} else {
if((state_val_30886 === (11))){
var inst_30854 = (state_30885[(7)]);
var inst_30872 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30885__$1,(8),inst_30872,inst_30854);
} else {
if((state_val_30886 === (9))){
var state_30885__$1 = state_30885;
var statearr_30923_33900 = state_30885__$1;
(statearr_30923_33900[(2)] = tc);

(statearr_30923_33900[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (5))){
var inst_30857 = cljs.core.async.close_BANG_(tc);
var inst_30859 = cljs.core.async.close_BANG_(fc);
var state_30885__$1 = (function (){var statearr_30929 = state_30885;
(statearr_30929[(8)] = inst_30857);

return statearr_30929;
})();
var statearr_30930_33905 = state_30885__$1;
(statearr_30930_33905[(2)] = inst_30859);

(statearr_30930_33905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (14))){
var inst_30879 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
var statearr_30934_33911 = state_30885__$1;
(statearr_30934_33911[(2)] = inst_30879);

(statearr_30934_33911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (10))){
var state_30885__$1 = state_30885;
var statearr_30939_33913 = state_30885__$1;
(statearr_30939_33913[(2)] = fc);

(statearr_30939_33913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (8))){
var inst_30874 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
if(cljs.core.truth_(inst_30874)){
var statearr_30941_33915 = state_30885__$1;
(statearr_30941_33915[(1)] = (12));

} else {
var statearr_30943_33917 = state_30885__$1;
(statearr_30943_33917[(1)] = (13));

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
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_30949 = [null,null,null,null,null,null,null,null,null];
(statearr_30949[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_30949[(1)] = (1));

return statearr_30949;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_30885){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_30885);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e30951){var ex__28696__auto__ = e30951;
var statearr_30953_33922 = state_30885;
(statearr_30953_33922[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_30885[(4)]))){
var statearr_30957_33924 = state_30885;
(statearr_30957_33924[(1)] = cljs.core.first((state_30885[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33926 = state_30885;
state_30885 = G__33926;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_30885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_30885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
})();
var state__30234__auto__ = (function (){var statearr_30961 = f__30233__auto__();
(statearr_30961[(6)] = c__30232__auto___33884);

return statearr_30961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
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
var c__30232__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = (function (state_31005){
var state_val_31006 = (state_31005[(1)]);
if((state_val_31006 === (7))){
var inst_30999 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31012_33928 = state_31005__$1;
(statearr_31012_33928[(2)] = inst_30999);

(statearr_31012_33928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (1))){
var inst_30979 = init;
var inst_30980 = inst_30979;
var state_31005__$1 = (function (){var statearr_31014 = state_31005;
(statearr_31014[(7)] = inst_30980);

return statearr_31014;
})();
var statearr_31016_33929 = state_31005__$1;
(statearr_31016_33929[(2)] = null);

(statearr_31016_33929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (4))){
var inst_30984 = (state_31005[(8)]);
var inst_30984__$1 = (state_31005[(2)]);
var inst_30985 = (inst_30984__$1 == null);
var state_31005__$1 = (function (){var statearr_31018 = state_31005;
(statearr_31018[(8)] = inst_30984__$1);

return statearr_31018;
})();
if(cljs.core.truth_(inst_30985)){
var statearr_31024_33933 = state_31005__$1;
(statearr_31024_33933[(1)] = (5));

} else {
var statearr_31027_33935 = state_31005__$1;
(statearr_31027_33935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (6))){
var inst_30980 = (state_31005[(7)]);
var inst_30984 = (state_31005[(8)]);
var inst_30988 = (state_31005[(9)]);
var inst_30988__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30980,inst_30984) : f.call(null,inst_30980,inst_30984));
var inst_30989 = cljs.core.reduced_QMARK_(inst_30988__$1);
var state_31005__$1 = (function (){var statearr_31029 = state_31005;
(statearr_31029[(9)] = inst_30988__$1);

return statearr_31029;
})();
if(inst_30989){
var statearr_31030_33937 = state_31005__$1;
(statearr_31030_33937[(1)] = (8));

} else {
var statearr_31032_33938 = state_31005__$1;
(statearr_31032_33938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (3))){
var inst_31001 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31005__$1,inst_31001);
} else {
if((state_val_31006 === (2))){
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31005__$1,(4),ch);
} else {
if((state_val_31006 === (9))){
var inst_30988 = (state_31005[(9)]);
var inst_30980 = inst_30988;
var state_31005__$1 = (function (){var statearr_31045 = state_31005;
(statearr_31045[(7)] = inst_30980);

return statearr_31045;
})();
var statearr_31048_33941 = state_31005__$1;
(statearr_31048_33941[(2)] = null);

(statearr_31048_33941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (5))){
var inst_30980 = (state_31005[(7)]);
var state_31005__$1 = state_31005;
var statearr_31053_33942 = state_31005__$1;
(statearr_31053_33942[(2)] = inst_30980);

(statearr_31053_33942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (10))){
var inst_30997 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31055_33943 = state_31005__$1;
(statearr_31055_33943[(2)] = inst_30997);

(statearr_31055_33943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (8))){
var inst_30988 = (state_31005[(9)]);
var inst_30991 = cljs.core.deref(inst_30988);
var state_31005__$1 = state_31005;
var statearr_31063_33944 = state_31005__$1;
(statearr_31063_33944[(2)] = inst_30991);

(statearr_31063_33944[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28693__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28693__auto____0 = (function (){
var statearr_31066 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31066[(0)] = cljs$core$async$reduce_$_state_machine__28693__auto__);

(statearr_31066[(1)] = (1));

return statearr_31066;
});
var cljs$core$async$reduce_$_state_machine__28693__auto____1 = (function (state_31005){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_31005);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e31069){var ex__28696__auto__ = e31069;
var statearr_31072_33945 = state_31005;
(statearr_31072_33945[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_31005[(4)]))){
var statearr_31073_33946 = state_31005;
(statearr_31073_33946[(1)] = cljs.core.first((state_31005[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33948 = state_31005;
state_31005 = G__33948;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28693__auto__ = function(state_31005){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28693__auto____1.call(this,state_31005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28693__auto____0;
cljs$core$async$reduce_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28693__auto____1;
return cljs$core$async$reduce_$_state_machine__28693__auto__;
})()
})();
var state__30234__auto__ = (function (){var statearr_31081 = f__30233__auto__();
(statearr_31081[(6)] = c__30232__auto__);

return statearr_31081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
}));

return c__30232__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30232__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = (function (state_31094){
var state_val_31095 = (state_31094[(1)]);
if((state_val_31095 === (1))){
var inst_31089 = cljs.core.async.reduce(f__$1,init,ch);
var state_31094__$1 = state_31094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31094__$1,(2),inst_31089);
} else {
if((state_val_31095 === (2))){
var inst_31091 = (state_31094[(2)]);
var inst_31092 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31091) : f__$1.call(null,inst_31091));
var state_31094__$1 = state_31094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31094__$1,inst_31092);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28693__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28693__auto____0 = (function (){
var statearr_31107 = [null,null,null,null,null,null,null];
(statearr_31107[(0)] = cljs$core$async$transduce_$_state_machine__28693__auto__);

(statearr_31107[(1)] = (1));

return statearr_31107;
});
var cljs$core$async$transduce_$_state_machine__28693__auto____1 = (function (state_31094){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_31094);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e31111){var ex__28696__auto__ = e31111;
var statearr_31112_33959 = state_31094;
(statearr_31112_33959[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_31094[(4)]))){
var statearr_31113_33960 = state_31094;
(statearr_31113_33960[(1)] = cljs.core.first((state_31094[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33966 = state_31094;
state_31094 = G__33966;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28693__auto__ = function(state_31094){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28693__auto____1.call(this,state_31094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28693__auto____0;
cljs$core$async$transduce_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28693__auto____1;
return cljs$core$async$transduce_$_state_machine__28693__auto__;
})()
})();
var state__30234__auto__ = (function (){var statearr_31114 = f__30233__auto__();
(statearr_31114[(6)] = c__30232__auto__);

return statearr_31114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
}));

return c__30232__auto__;
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
var G__31135 = arguments.length;
switch (G__31135) {
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
var c__30232__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = (function (state_31169){
var state_val_31170 = (state_31169[(1)]);
if((state_val_31170 === (7))){
var inst_31144 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31174_33986 = state_31169__$1;
(statearr_31174_33986[(2)] = inst_31144);

(statearr_31174_33986[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (1))){
var inst_31138 = cljs.core.seq(coll);
var inst_31139 = inst_31138;
var state_31169__$1 = (function (){var statearr_31178 = state_31169;
(statearr_31178[(7)] = inst_31139);

return statearr_31178;
})();
var statearr_31181_33987 = state_31169__$1;
(statearr_31181_33987[(2)] = null);

(statearr_31181_33987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (4))){
var inst_31139 = (state_31169[(7)]);
var inst_31142 = cljs.core.first(inst_31139);
var state_31169__$1 = state_31169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31169__$1,(7),ch,inst_31142);
} else {
if((state_val_31170 === (13))){
var inst_31158 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31184_33988 = state_31169__$1;
(statearr_31184_33988[(2)] = inst_31158);

(statearr_31184_33988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (6))){
var inst_31147 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
if(cljs.core.truth_(inst_31147)){
var statearr_31189_33990 = state_31169__$1;
(statearr_31189_33990[(1)] = (8));

} else {
var statearr_31190_33991 = state_31169__$1;
(statearr_31190_33991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (3))){
var inst_31165 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31169__$1,inst_31165);
} else {
if((state_val_31170 === (12))){
var state_31169__$1 = state_31169;
var statearr_31192_33992 = state_31169__$1;
(statearr_31192_33992[(2)] = null);

(statearr_31192_33992[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (2))){
var inst_31139 = (state_31169[(7)]);
var state_31169__$1 = state_31169;
if(cljs.core.truth_(inst_31139)){
var statearr_31205_33993 = state_31169__$1;
(statearr_31205_33993[(1)] = (4));

} else {
var statearr_31207_33994 = state_31169__$1;
(statearr_31207_33994[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (11))){
var inst_31155 = cljs.core.async.close_BANG_(ch);
var state_31169__$1 = state_31169;
var statearr_31211_33995 = state_31169__$1;
(statearr_31211_33995[(2)] = inst_31155);

(statearr_31211_33995[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (9))){
var state_31169__$1 = state_31169;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31213_33996 = state_31169__$1;
(statearr_31213_33996[(1)] = (11));

} else {
var statearr_31214_33997 = state_31169__$1;
(statearr_31214_33997[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (5))){
var inst_31139 = (state_31169[(7)]);
var state_31169__$1 = state_31169;
var statearr_31216_33998 = state_31169__$1;
(statearr_31216_33998[(2)] = inst_31139);

(statearr_31216_33998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (10))){
var inst_31163 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31217_33999 = state_31169__$1;
(statearr_31217_33999[(2)] = inst_31163);

(statearr_31217_33999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (8))){
var inst_31139 = (state_31169[(7)]);
var inst_31149 = cljs.core.next(inst_31139);
var inst_31139__$1 = inst_31149;
var state_31169__$1 = (function (){var statearr_31220 = state_31169;
(statearr_31220[(7)] = inst_31139__$1);

return statearr_31220;
})();
var statearr_31223_34000 = state_31169__$1;
(statearr_31223_34000[(2)] = null);

(statearr_31223_34000[(1)] = (2));


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
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_31224 = [null,null,null,null,null,null,null,null];
(statearr_31224[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_31224[(1)] = (1));

return statearr_31224;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_31169){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_31169);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e31227){var ex__28696__auto__ = e31227;
var statearr_31228_34003 = state_31169;
(statearr_31228_34003[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_31169[(4)]))){
var statearr_31230_34004 = state_31169;
(statearr_31230_34004[(1)] = cljs.core.first((state_31169[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34005 = state_31169;
state_31169 = G__34005;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_31169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_31169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
})();
var state__30234__auto__ = (function (){var statearr_31233 = f__30233__auto__();
(statearr_31233[(6)] = c__30232__auto__);

return statearr_31233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
}));

return c__30232__auto__;
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
var G__31258 = arguments.length;
switch (G__31258) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34015 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34015(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34019 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34019(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34022 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34022(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34024 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34024(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31329 = (function (ch,cs,meta31330){
this.ch = ch;
this.cs = cs;
this.meta31330 = meta31330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31331,meta31330__$1){
var self__ = this;
var _31331__$1 = this;
return (new cljs.core.async.t_cljs$core$async31329(self__.ch,self__.cs,meta31330__$1));
}));

(cljs.core.async.t_cljs$core$async31329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31331){
var self__ = this;
var _31331__$1 = this;
return self__.meta31330;
}));

(cljs.core.async.t_cljs$core$async31329.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31329.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31329.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31329.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31329.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31329.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31330","meta31330",-1089511788,null)], null);
}));

(cljs.core.async.t_cljs$core$async31329.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31329");

(cljs.core.async.t_cljs$core$async31329.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31329");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31329.
 */
cljs.core.async.__GT_t_cljs$core$async31329 = (function cljs$core$async$__GT_t_cljs$core$async31329(ch,cs,meta31330){
return (new cljs.core.async.t_cljs$core$async31329(ch,cs,meta31330));
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
var m = (new cljs.core.async.t_cljs$core$async31329(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30232__auto___34039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = (function (state_31521){
var state_val_31522 = (state_31521[(1)]);
if((state_val_31522 === (7))){
var inst_31515 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31527_34040 = state_31521__$1;
(statearr_31527_34040[(2)] = inst_31515);

(statearr_31527_34040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (20))){
var inst_31406 = (state_31521[(7)]);
var inst_31426 = cljs.core.first(inst_31406);
var inst_31427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31426,(0),null);
var inst_31428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31426,(1),null);
var state_31521__$1 = (function (){var statearr_31529 = state_31521;
(statearr_31529[(8)] = inst_31427);

return statearr_31529;
})();
if(cljs.core.truth_(inst_31428)){
var statearr_31531_34044 = state_31521__$1;
(statearr_31531_34044[(1)] = (22));

} else {
var statearr_31532_34045 = state_31521__$1;
(statearr_31532_34045[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (27))){
var inst_31456 = (state_31521[(9)]);
var inst_31458 = (state_31521[(10)]);
var inst_31464 = (state_31521[(11)]);
var inst_31371 = (state_31521[(12)]);
var inst_31464__$1 = cljs.core._nth(inst_31456,inst_31458);
var inst_31465 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31464__$1,inst_31371,done);
var state_31521__$1 = (function (){var statearr_31538 = state_31521;
(statearr_31538[(11)] = inst_31464__$1);

return statearr_31538;
})();
if(cljs.core.truth_(inst_31465)){
var statearr_31539_34052 = state_31521__$1;
(statearr_31539_34052[(1)] = (30));

} else {
var statearr_31540_34053 = state_31521__$1;
(statearr_31540_34053[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (1))){
var state_31521__$1 = state_31521;
var statearr_31546_34054 = state_31521__$1;
(statearr_31546_34054[(2)] = null);

(statearr_31546_34054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (24))){
var inst_31406 = (state_31521[(7)]);
var inst_31433 = (state_31521[(2)]);
var inst_31434 = cljs.core.next(inst_31406);
var inst_31380 = inst_31434;
var inst_31381 = null;
var inst_31382 = (0);
var inst_31383 = (0);
var state_31521__$1 = (function (){var statearr_31549 = state_31521;
(statearr_31549[(13)] = inst_31433);

(statearr_31549[(14)] = inst_31380);

(statearr_31549[(15)] = inst_31381);

(statearr_31549[(16)] = inst_31382);

(statearr_31549[(17)] = inst_31383);

return statearr_31549;
})();
var statearr_31550_34056 = state_31521__$1;
(statearr_31550_34056[(2)] = null);

(statearr_31550_34056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (39))){
var state_31521__$1 = state_31521;
var statearr_31561_34057 = state_31521__$1;
(statearr_31561_34057[(2)] = null);

(statearr_31561_34057[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (4))){
var inst_31371 = (state_31521[(12)]);
var inst_31371__$1 = (state_31521[(2)]);
var inst_31372 = (inst_31371__$1 == null);
var state_31521__$1 = (function (){var statearr_31563 = state_31521;
(statearr_31563[(12)] = inst_31371__$1);

return statearr_31563;
})();
if(cljs.core.truth_(inst_31372)){
var statearr_31565_34058 = state_31521__$1;
(statearr_31565_34058[(1)] = (5));

} else {
var statearr_31566_34059 = state_31521__$1;
(statearr_31566_34059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (15))){
var inst_31383 = (state_31521[(17)]);
var inst_31380 = (state_31521[(14)]);
var inst_31381 = (state_31521[(15)]);
var inst_31382 = (state_31521[(16)]);
var inst_31401 = (state_31521[(2)]);
var inst_31402 = (inst_31383 + (1));
var tmp31556 = inst_31380;
var tmp31557 = inst_31381;
var tmp31558 = inst_31382;
var inst_31380__$1 = tmp31556;
var inst_31381__$1 = tmp31557;
var inst_31382__$1 = tmp31558;
var inst_31383__$1 = inst_31402;
var state_31521__$1 = (function (){var statearr_31568 = state_31521;
(statearr_31568[(18)] = inst_31401);

(statearr_31568[(14)] = inst_31380__$1);

(statearr_31568[(15)] = inst_31381__$1);

(statearr_31568[(16)] = inst_31382__$1);

(statearr_31568[(17)] = inst_31383__$1);

return statearr_31568;
})();
var statearr_31575_34065 = state_31521__$1;
(statearr_31575_34065[(2)] = null);

(statearr_31575_34065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (21))){
var inst_31437 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31579_34067 = state_31521__$1;
(statearr_31579_34067[(2)] = inst_31437);

(statearr_31579_34067[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (31))){
var inst_31464 = (state_31521[(11)]);
var inst_31468 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31464);
var state_31521__$1 = state_31521;
var statearr_31592_34068 = state_31521__$1;
(statearr_31592_34068[(2)] = inst_31468);

(statearr_31592_34068[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (32))){
var inst_31458 = (state_31521[(10)]);
var inst_31455 = (state_31521[(19)]);
var inst_31456 = (state_31521[(9)]);
var inst_31457 = (state_31521[(20)]);
var inst_31470 = (state_31521[(2)]);
var inst_31471 = (inst_31458 + (1));
var tmp31576 = inst_31456;
var tmp31577 = inst_31457;
var tmp31578 = inst_31455;
var inst_31455__$1 = tmp31578;
var inst_31456__$1 = tmp31576;
var inst_31457__$1 = tmp31577;
var inst_31458__$1 = inst_31471;
var state_31521__$1 = (function (){var statearr_31597 = state_31521;
(statearr_31597[(21)] = inst_31470);

(statearr_31597[(19)] = inst_31455__$1);

(statearr_31597[(9)] = inst_31456__$1);

(statearr_31597[(20)] = inst_31457__$1);

(statearr_31597[(10)] = inst_31458__$1);

return statearr_31597;
})();
var statearr_31601_34070 = state_31521__$1;
(statearr_31601_34070[(2)] = null);

(statearr_31601_34070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (40))){
var inst_31484 = (state_31521[(22)]);
var inst_31488 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31484);
var state_31521__$1 = state_31521;
var statearr_31603_34071 = state_31521__$1;
(statearr_31603_34071[(2)] = inst_31488);

(statearr_31603_34071[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (33))){
var inst_31474 = (state_31521[(23)]);
var inst_31476 = cljs.core.chunked_seq_QMARK_(inst_31474);
var state_31521__$1 = state_31521;
if(inst_31476){
var statearr_31604_34072 = state_31521__$1;
(statearr_31604_34072[(1)] = (36));

} else {
var statearr_31605_34073 = state_31521__$1;
(statearr_31605_34073[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (13))){
var inst_31395 = (state_31521[(24)]);
var inst_31398 = cljs.core.async.close_BANG_(inst_31395);
var state_31521__$1 = state_31521;
var statearr_31618_34074 = state_31521__$1;
(statearr_31618_34074[(2)] = inst_31398);

(statearr_31618_34074[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (22))){
var inst_31427 = (state_31521[(8)]);
var inst_31430 = cljs.core.async.close_BANG_(inst_31427);
var state_31521__$1 = state_31521;
var statearr_31622_34076 = state_31521__$1;
(statearr_31622_34076[(2)] = inst_31430);

(statearr_31622_34076[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (36))){
var inst_31474 = (state_31521[(23)]);
var inst_31478 = cljs.core.chunk_first(inst_31474);
var inst_31479 = cljs.core.chunk_rest(inst_31474);
var inst_31481 = cljs.core.count(inst_31478);
var inst_31455 = inst_31479;
var inst_31456 = inst_31478;
var inst_31457 = inst_31481;
var inst_31458 = (0);
var state_31521__$1 = (function (){var statearr_31624 = state_31521;
(statearr_31624[(19)] = inst_31455);

(statearr_31624[(9)] = inst_31456);

(statearr_31624[(20)] = inst_31457);

(statearr_31624[(10)] = inst_31458);

return statearr_31624;
})();
var statearr_31625_34077 = state_31521__$1;
(statearr_31625_34077[(2)] = null);

(statearr_31625_34077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (41))){
var inst_31474 = (state_31521[(23)]);
var inst_31490 = (state_31521[(2)]);
var inst_31494 = cljs.core.next(inst_31474);
var inst_31455 = inst_31494;
var inst_31456 = null;
var inst_31457 = (0);
var inst_31458 = (0);
var state_31521__$1 = (function (){var statearr_31626 = state_31521;
(statearr_31626[(25)] = inst_31490);

(statearr_31626[(19)] = inst_31455);

(statearr_31626[(9)] = inst_31456);

(statearr_31626[(20)] = inst_31457);

(statearr_31626[(10)] = inst_31458);

return statearr_31626;
})();
var statearr_31629_34079 = state_31521__$1;
(statearr_31629_34079[(2)] = null);

(statearr_31629_34079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (43))){
var state_31521__$1 = state_31521;
var statearr_31633_34080 = state_31521__$1;
(statearr_31633_34080[(2)] = null);

(statearr_31633_34080[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (29))){
var inst_31503 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31639_34081 = state_31521__$1;
(statearr_31639_34081[(2)] = inst_31503);

(statearr_31639_34081[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (44))){
var inst_31512 = (state_31521[(2)]);
var state_31521__$1 = (function (){var statearr_31643 = state_31521;
(statearr_31643[(26)] = inst_31512);

return statearr_31643;
})();
var statearr_31644_34083 = state_31521__$1;
(statearr_31644_34083[(2)] = null);

(statearr_31644_34083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (6))){
var inst_31447 = (state_31521[(27)]);
var inst_31446 = cljs.core.deref(cs);
var inst_31447__$1 = cljs.core.keys(inst_31446);
var inst_31448 = cljs.core.count(inst_31447__$1);
var inst_31449 = cljs.core.reset_BANG_(dctr,inst_31448);
var inst_31454 = cljs.core.seq(inst_31447__$1);
var inst_31455 = inst_31454;
var inst_31456 = null;
var inst_31457 = (0);
var inst_31458 = (0);
var state_31521__$1 = (function (){var statearr_31653 = state_31521;
(statearr_31653[(27)] = inst_31447__$1);

(statearr_31653[(28)] = inst_31449);

(statearr_31653[(19)] = inst_31455);

(statearr_31653[(9)] = inst_31456);

(statearr_31653[(20)] = inst_31457);

(statearr_31653[(10)] = inst_31458);

return statearr_31653;
})();
var statearr_31656_34084 = state_31521__$1;
(statearr_31656_34084[(2)] = null);

(statearr_31656_34084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (28))){
var inst_31455 = (state_31521[(19)]);
var inst_31474 = (state_31521[(23)]);
var inst_31474__$1 = cljs.core.seq(inst_31455);
var state_31521__$1 = (function (){var statearr_31661 = state_31521;
(statearr_31661[(23)] = inst_31474__$1);

return statearr_31661;
})();
if(inst_31474__$1){
var statearr_31664_34085 = state_31521__$1;
(statearr_31664_34085[(1)] = (33));

} else {
var statearr_31666_34086 = state_31521__$1;
(statearr_31666_34086[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (25))){
var inst_31458 = (state_31521[(10)]);
var inst_31457 = (state_31521[(20)]);
var inst_31460 = (inst_31458 < inst_31457);
var inst_31461 = inst_31460;
var state_31521__$1 = state_31521;
if(cljs.core.truth_(inst_31461)){
var statearr_31670_34087 = state_31521__$1;
(statearr_31670_34087[(1)] = (27));

} else {
var statearr_31672_34088 = state_31521__$1;
(statearr_31672_34088[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (34))){
var state_31521__$1 = state_31521;
var statearr_31675_34089 = state_31521__$1;
(statearr_31675_34089[(2)] = null);

(statearr_31675_34089[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (17))){
var state_31521__$1 = state_31521;
var statearr_31679_34090 = state_31521__$1;
(statearr_31679_34090[(2)] = null);

(statearr_31679_34090[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (3))){
var inst_31517 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31521__$1,inst_31517);
} else {
if((state_val_31522 === (12))){
var inst_31442 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31683_34091 = state_31521__$1;
(statearr_31683_34091[(2)] = inst_31442);

(statearr_31683_34091[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (2))){
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31521__$1,(4),ch);
} else {
if((state_val_31522 === (23))){
var state_31521__$1 = state_31521;
var statearr_31692_34092 = state_31521__$1;
(statearr_31692_34092[(2)] = null);

(statearr_31692_34092[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (35))){
var inst_31501 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31696_34093 = state_31521__$1;
(statearr_31696_34093[(2)] = inst_31501);

(statearr_31696_34093[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (19))){
var inst_31406 = (state_31521[(7)]);
var inst_31412 = cljs.core.chunk_first(inst_31406);
var inst_31419 = cljs.core.chunk_rest(inst_31406);
var inst_31420 = cljs.core.count(inst_31412);
var inst_31380 = inst_31419;
var inst_31381 = inst_31412;
var inst_31382 = inst_31420;
var inst_31383 = (0);
var state_31521__$1 = (function (){var statearr_31701 = state_31521;
(statearr_31701[(14)] = inst_31380);

(statearr_31701[(15)] = inst_31381);

(statearr_31701[(16)] = inst_31382);

(statearr_31701[(17)] = inst_31383);

return statearr_31701;
})();
var statearr_31704_34096 = state_31521__$1;
(statearr_31704_34096[(2)] = null);

(statearr_31704_34096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (11))){
var inst_31380 = (state_31521[(14)]);
var inst_31406 = (state_31521[(7)]);
var inst_31406__$1 = cljs.core.seq(inst_31380);
var state_31521__$1 = (function (){var statearr_31707 = state_31521;
(statearr_31707[(7)] = inst_31406__$1);

return statearr_31707;
})();
if(inst_31406__$1){
var statearr_31712_34097 = state_31521__$1;
(statearr_31712_34097[(1)] = (16));

} else {
var statearr_31714_34098 = state_31521__$1;
(statearr_31714_34098[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (9))){
var inst_31444 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31716_34100 = state_31521__$1;
(statearr_31716_34100[(2)] = inst_31444);

(statearr_31716_34100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (5))){
var inst_31378 = cljs.core.deref(cs);
var inst_31379 = cljs.core.seq(inst_31378);
var inst_31380 = inst_31379;
var inst_31381 = null;
var inst_31382 = (0);
var inst_31383 = (0);
var state_31521__$1 = (function (){var statearr_31717 = state_31521;
(statearr_31717[(14)] = inst_31380);

(statearr_31717[(15)] = inst_31381);

(statearr_31717[(16)] = inst_31382);

(statearr_31717[(17)] = inst_31383);

return statearr_31717;
})();
var statearr_31718_34104 = state_31521__$1;
(statearr_31718_34104[(2)] = null);

(statearr_31718_34104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (14))){
var state_31521__$1 = state_31521;
var statearr_31719_34105 = state_31521__$1;
(statearr_31719_34105[(2)] = null);

(statearr_31719_34105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (45))){
var inst_31509 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31720_34106 = state_31521__$1;
(statearr_31720_34106[(2)] = inst_31509);

(statearr_31720_34106[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (26))){
var inst_31447 = (state_31521[(27)]);
var inst_31505 = (state_31521[(2)]);
var inst_31506 = cljs.core.seq(inst_31447);
var state_31521__$1 = (function (){var statearr_31721 = state_31521;
(statearr_31721[(29)] = inst_31505);

return statearr_31721;
})();
if(inst_31506){
var statearr_31722_34107 = state_31521__$1;
(statearr_31722_34107[(1)] = (42));

} else {
var statearr_31726_34108 = state_31521__$1;
(statearr_31726_34108[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (16))){
var inst_31406 = (state_31521[(7)]);
var inst_31410 = cljs.core.chunked_seq_QMARK_(inst_31406);
var state_31521__$1 = state_31521;
if(inst_31410){
var statearr_31728_34109 = state_31521__$1;
(statearr_31728_34109[(1)] = (19));

} else {
var statearr_31729_34111 = state_31521__$1;
(statearr_31729_34111[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (38))){
var inst_31497 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31731_34113 = state_31521__$1;
(statearr_31731_34113[(2)] = inst_31497);

(statearr_31731_34113[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (30))){
var state_31521__$1 = state_31521;
var statearr_31734_34114 = state_31521__$1;
(statearr_31734_34114[(2)] = null);

(statearr_31734_34114[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (10))){
var inst_31381 = (state_31521[(15)]);
var inst_31383 = (state_31521[(17)]);
var inst_31394 = cljs.core._nth(inst_31381,inst_31383);
var inst_31395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31394,(0),null);
var inst_31396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31394,(1),null);
var state_31521__$1 = (function (){var statearr_31738 = state_31521;
(statearr_31738[(24)] = inst_31395);

return statearr_31738;
})();
if(cljs.core.truth_(inst_31396)){
var statearr_31739_34115 = state_31521__$1;
(statearr_31739_34115[(1)] = (13));

} else {
var statearr_31742_34116 = state_31521__$1;
(statearr_31742_34116[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (18))){
var inst_31440 = (state_31521[(2)]);
var state_31521__$1 = state_31521;
var statearr_31748_34119 = state_31521__$1;
(statearr_31748_34119[(2)] = inst_31440);

(statearr_31748_34119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (42))){
var state_31521__$1 = state_31521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31521__$1,(45),dchan);
} else {
if((state_val_31522 === (37))){
var inst_31474 = (state_31521[(23)]);
var inst_31484 = (state_31521[(22)]);
var inst_31371 = (state_31521[(12)]);
var inst_31484__$1 = cljs.core.first(inst_31474);
var inst_31485 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31484__$1,inst_31371,done);
var state_31521__$1 = (function (){var statearr_31749 = state_31521;
(statearr_31749[(22)] = inst_31484__$1);

return statearr_31749;
})();
if(cljs.core.truth_(inst_31485)){
var statearr_31751_34122 = state_31521__$1;
(statearr_31751_34122[(1)] = (39));

} else {
var statearr_31752_34123 = state_31521__$1;
(statearr_31752_34123[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31522 === (8))){
var inst_31383 = (state_31521[(17)]);
var inst_31382 = (state_31521[(16)]);
var inst_31386 = (inst_31383 < inst_31382);
var inst_31387 = inst_31386;
var state_31521__$1 = state_31521;
if(cljs.core.truth_(inst_31387)){
var statearr_31753_34124 = state_31521__$1;
(statearr_31753_34124[(1)] = (10));

} else {
var statearr_31754_34125 = state_31521__$1;
(statearr_31754_34125[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28693__auto__ = null;
var cljs$core$async$mult_$_state_machine__28693__auto____0 = (function (){
var statearr_31769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31769[(0)] = cljs$core$async$mult_$_state_machine__28693__auto__);

(statearr_31769[(1)] = (1));

return statearr_31769;
});
var cljs$core$async$mult_$_state_machine__28693__auto____1 = (function (state_31521){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_31521);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e31773){var ex__28696__auto__ = e31773;
var statearr_31774_34129 = state_31521;
(statearr_31774_34129[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_31521[(4)]))){
var statearr_31775_34130 = state_31521;
(statearr_31775_34130[(1)] = cljs.core.first((state_31521[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34131 = state_31521;
state_31521 = G__34131;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28693__auto__ = function(state_31521){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28693__auto____1.call(this,state_31521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28693__auto____0;
cljs$core$async$mult_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28693__auto____1;
return cljs$core$async$mult_$_state_machine__28693__auto__;
})()
})();
var state__30234__auto__ = (function (){var statearr_31779 = f__30233__auto__();
(statearr_31779[(6)] = c__30232__auto___34039);

return statearr_31779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
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
var G__31792 = arguments.length;
switch (G__31792) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_34135 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_34135(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34139 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_34139(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34140 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34140(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34141 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_34141(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34143 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34143(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___34146 = arguments.length;
var i__5750__auto___34147 = (0);
while(true){
if((i__5750__auto___34147 < len__5749__auto___34146)){
args__5755__auto__.push((arguments[i__5750__auto___34147]));

var G__34148 = (i__5750__auto___34147 + (1));
i__5750__auto___34147 = G__34148;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31895){
var map__31896 = p__31895;
var map__31896__$1 = cljs.core.__destructure_map(map__31896);
var opts = map__31896__$1;
var statearr_31897_34152 = state;
(statearr_31897_34152[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31901_34153 = state;
(statearr_31901_34153[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_31903_34160 = state;
(statearr_31903_34160[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31883){
var G__31884 = cljs.core.first(seq31883);
var seq31883__$1 = cljs.core.next(seq31883);
var G__31885 = cljs.core.first(seq31883__$1);
var seq31883__$2 = cljs.core.next(seq31883__$1);
var G__31886 = cljs.core.first(seq31883__$2);
var seq31883__$3 = cljs.core.next(seq31883__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31884,G__31885,G__31886,seq31883__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31928 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31929){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31929 = meta31929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31930,meta31929__$1){
var self__ = this;
var _31930__$1 = this;
return (new cljs.core.async.t_cljs$core$async31928(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31929__$1));
}));

(cljs.core.async.t_cljs$core$async31928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31930){
var self__ = this;
var _31930__$1 = this;
return self__.meta31929;
}));

(cljs.core.async.t_cljs$core$async31928.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31928.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31928.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31928.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31928.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31928.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31928.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31928.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31928.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31929","meta31929",2030838189,null)], null);
}));

(cljs.core.async.t_cljs$core$async31928.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31928");

(cljs.core.async.t_cljs$core$async31928.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31928");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31928.
 */
cljs.core.async.__GT_t_cljs$core$async31928 = (function cljs$core$async$__GT_t_cljs$core$async31928(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31929){
return (new cljs.core.async.t_cljs$core$async31928(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31929));
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
var m = (new cljs.core.async.t_cljs$core$async31928(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__30232__auto___34183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = (function (state_32071){
var state_val_32072 = (state_32071[(1)]);
if((state_val_32072 === (7))){
var inst_32025 = (state_32071[(2)]);
var state_32071__$1 = state_32071;
if(cljs.core.truth_(inst_32025)){
var statearr_32078_34187 = state_32071__$1;
(statearr_32078_34187[(1)] = (8));

} else {
var statearr_32080_34188 = state_32071__$1;
(statearr_32080_34188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (20))){
var inst_32018 = (state_32071[(7)]);
var state_32071__$1 = state_32071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32071__$1,(23),out,inst_32018);
} else {
if((state_val_32072 === (1))){
var inst_32000 = calc_state();
var inst_32001 = cljs.core.__destructure_map(inst_32000);
var inst_32002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32001,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32001,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32001,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32005 = inst_32000;
var state_32071__$1 = (function (){var statearr_32082 = state_32071;
(statearr_32082[(8)] = inst_32002);

(statearr_32082[(9)] = inst_32003);

(statearr_32082[(10)] = inst_32004);

(statearr_32082[(11)] = inst_32005);

return statearr_32082;
})();
var statearr_32083_34189 = state_32071__$1;
(statearr_32083_34189[(2)] = null);

(statearr_32083_34189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (24))){
var inst_32009 = (state_32071[(12)]);
var inst_32005 = inst_32009;
var state_32071__$1 = (function (){var statearr_32084 = state_32071;
(statearr_32084[(11)] = inst_32005);

return statearr_32084;
})();
var statearr_32085_34191 = state_32071__$1;
(statearr_32085_34191[(2)] = null);

(statearr_32085_34191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (4))){
var inst_32018 = (state_32071[(7)]);
var inst_32020 = (state_32071[(13)]);
var inst_32017 = (state_32071[(2)]);
var inst_32018__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32017,(0),null);
var inst_32019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32017,(1),null);
var inst_32020__$1 = (inst_32018__$1 == null);
var state_32071__$1 = (function (){var statearr_32094 = state_32071;
(statearr_32094[(7)] = inst_32018__$1);

(statearr_32094[(14)] = inst_32019);

(statearr_32094[(13)] = inst_32020__$1);

return statearr_32094;
})();
if(cljs.core.truth_(inst_32020__$1)){
var statearr_32095_34200 = state_32071__$1;
(statearr_32095_34200[(1)] = (5));

} else {
var statearr_32096_34201 = state_32071__$1;
(statearr_32096_34201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (15))){
var inst_32010 = (state_32071[(15)]);
var inst_32041 = (state_32071[(16)]);
var inst_32041__$1 = cljs.core.empty_QMARK_(inst_32010);
var state_32071__$1 = (function (){var statearr_32102 = state_32071;
(statearr_32102[(16)] = inst_32041__$1);

return statearr_32102;
})();
if(inst_32041__$1){
var statearr_32103_34202 = state_32071__$1;
(statearr_32103_34202[(1)] = (17));

} else {
var statearr_32104_34203 = state_32071__$1;
(statearr_32104_34203[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (21))){
var inst_32009 = (state_32071[(12)]);
var inst_32005 = inst_32009;
var state_32071__$1 = (function (){var statearr_32105 = state_32071;
(statearr_32105[(11)] = inst_32005);

return statearr_32105;
})();
var statearr_32106_34204 = state_32071__$1;
(statearr_32106_34204[(2)] = null);

(statearr_32106_34204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (13))){
var inst_32034 = (state_32071[(2)]);
var inst_32035 = calc_state();
var inst_32005 = inst_32035;
var state_32071__$1 = (function (){var statearr_32107 = state_32071;
(statearr_32107[(17)] = inst_32034);

(statearr_32107[(11)] = inst_32005);

return statearr_32107;
})();
var statearr_32109_34205 = state_32071__$1;
(statearr_32109_34205[(2)] = null);

(statearr_32109_34205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (22))){
var inst_32063 = (state_32071[(2)]);
var state_32071__$1 = state_32071;
var statearr_32110_34208 = state_32071__$1;
(statearr_32110_34208[(2)] = inst_32063);

(statearr_32110_34208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (6))){
var inst_32019 = (state_32071[(14)]);
var inst_32023 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32019,change);
var state_32071__$1 = state_32071;
var statearr_32111_34210 = state_32071__$1;
(statearr_32111_34210[(2)] = inst_32023);

(statearr_32111_34210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (25))){
var state_32071__$1 = state_32071;
var statearr_32113_34211 = state_32071__$1;
(statearr_32113_34211[(2)] = null);

(statearr_32113_34211[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (17))){
var inst_32011 = (state_32071[(18)]);
var inst_32019 = (state_32071[(14)]);
var inst_32044 = (inst_32011.cljs$core$IFn$_invoke$arity$1 ? inst_32011.cljs$core$IFn$_invoke$arity$1(inst_32019) : inst_32011.call(null,inst_32019));
var inst_32045 = cljs.core.not(inst_32044);
var state_32071__$1 = state_32071;
var statearr_32117_34212 = state_32071__$1;
(statearr_32117_34212[(2)] = inst_32045);

(statearr_32117_34212[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (3))){
var inst_32068 = (state_32071[(2)]);
var state_32071__$1 = state_32071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32071__$1,inst_32068);
} else {
if((state_val_32072 === (12))){
var state_32071__$1 = state_32071;
var statearr_32118_34213 = state_32071__$1;
(statearr_32118_34213[(2)] = null);

(statearr_32118_34213[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (2))){
var inst_32005 = (state_32071[(11)]);
var inst_32009 = (state_32071[(12)]);
var inst_32009__$1 = cljs.core.__destructure_map(inst_32005);
var inst_32010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32009__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32009__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32009__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32071__$1 = (function (){var statearr_32127 = state_32071;
(statearr_32127[(12)] = inst_32009__$1);

(statearr_32127[(15)] = inst_32010);

(statearr_32127[(18)] = inst_32011);

return statearr_32127;
})();
return cljs.core.async.ioc_alts_BANG_(state_32071__$1,(4),inst_32012);
} else {
if((state_val_32072 === (23))){
var inst_32054 = (state_32071[(2)]);
var state_32071__$1 = state_32071;
if(cljs.core.truth_(inst_32054)){
var statearr_32131_34214 = state_32071__$1;
(statearr_32131_34214[(1)] = (24));

} else {
var statearr_32139_34215 = state_32071__$1;
(statearr_32139_34215[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (19))){
var inst_32048 = (state_32071[(2)]);
var state_32071__$1 = state_32071;
var statearr_32144_34216 = state_32071__$1;
(statearr_32144_34216[(2)] = inst_32048);

(statearr_32144_34216[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (11))){
var inst_32019 = (state_32071[(14)]);
var inst_32031 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32019);
var state_32071__$1 = state_32071;
var statearr_32146_34217 = state_32071__$1;
(statearr_32146_34217[(2)] = inst_32031);

(statearr_32146_34217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (9))){
var inst_32010 = (state_32071[(15)]);
var inst_32019 = (state_32071[(14)]);
var inst_32038 = (state_32071[(19)]);
var inst_32038__$1 = (inst_32010.cljs$core$IFn$_invoke$arity$1 ? inst_32010.cljs$core$IFn$_invoke$arity$1(inst_32019) : inst_32010.call(null,inst_32019));
var state_32071__$1 = (function (){var statearr_32147 = state_32071;
(statearr_32147[(19)] = inst_32038__$1);

return statearr_32147;
})();
if(cljs.core.truth_(inst_32038__$1)){
var statearr_32148_34218 = state_32071__$1;
(statearr_32148_34218[(1)] = (14));

} else {
var statearr_32149_34219 = state_32071__$1;
(statearr_32149_34219[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (5))){
var inst_32020 = (state_32071[(13)]);
var state_32071__$1 = state_32071;
var statearr_32152_34220 = state_32071__$1;
(statearr_32152_34220[(2)] = inst_32020);

(statearr_32152_34220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (14))){
var inst_32038 = (state_32071[(19)]);
var state_32071__$1 = state_32071;
var statearr_32158_34221 = state_32071__$1;
(statearr_32158_34221[(2)] = inst_32038);

(statearr_32158_34221[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (26))){
var inst_32059 = (state_32071[(2)]);
var state_32071__$1 = state_32071;
var statearr_32159_34223 = state_32071__$1;
(statearr_32159_34223[(2)] = inst_32059);

(statearr_32159_34223[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (16))){
var inst_32051 = (state_32071[(2)]);
var state_32071__$1 = state_32071;
if(cljs.core.truth_(inst_32051)){
var statearr_32166_34225 = state_32071__$1;
(statearr_32166_34225[(1)] = (20));

} else {
var statearr_32168_34226 = state_32071__$1;
(statearr_32168_34226[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (10))){
var inst_32065 = (state_32071[(2)]);
var state_32071__$1 = state_32071;
var statearr_32169_34227 = state_32071__$1;
(statearr_32169_34227[(2)] = inst_32065);

(statearr_32169_34227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (18))){
var inst_32041 = (state_32071[(16)]);
var state_32071__$1 = state_32071;
var statearr_32170_34229 = state_32071__$1;
(statearr_32170_34229[(2)] = inst_32041);

(statearr_32170_34229[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (8))){
var inst_32018 = (state_32071[(7)]);
var inst_32029 = (inst_32018 == null);
var state_32071__$1 = state_32071;
if(cljs.core.truth_(inst_32029)){
var statearr_32171_34231 = state_32071__$1;
(statearr_32171_34231[(1)] = (11));

} else {
var statearr_32173_34232 = state_32071__$1;
(statearr_32173_34232[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__28693__auto__ = null;
var cljs$core$async$mix_$_state_machine__28693__auto____0 = (function (){
var statearr_32174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32174[(0)] = cljs$core$async$mix_$_state_machine__28693__auto__);

(statearr_32174[(1)] = (1));

return statearr_32174;
});
var cljs$core$async$mix_$_state_machine__28693__auto____1 = (function (state_32071){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_32071);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e32175){var ex__28696__auto__ = e32175;
var statearr_32176_34235 = state_32071;
(statearr_32176_34235[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_32071[(4)]))){
var statearr_32178_34236 = state_32071;
(statearr_32178_34236[(1)] = cljs.core.first((state_32071[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34237 = state_32071;
state_32071 = G__34237;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28693__auto__ = function(state_32071){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28693__auto____1.call(this,state_32071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28693__auto____0;
cljs$core$async$mix_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28693__auto____1;
return cljs$core$async$mix_$_state_machine__28693__auto__;
})()
})();
var state__30234__auto__ = (function (){var statearr_32179 = f__30233__auto__();
(statearr_32179[(6)] = c__30232__auto___34183);

return statearr_32179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_34240 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_34240(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34241 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_34241(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34245 = (function() {
var G__34246 = null;
var G__34246__1 = (function (p){
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
var G__34246__2 = (function (p,v){
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
G__34246 = function(p,v){
switch(arguments.length){
case 1:
return G__34246__1.call(this,p);
case 2:
return G__34246__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34246.cljs$core$IFn$_invoke$arity$1 = G__34246__1;
G__34246.cljs$core$IFn$_invoke$arity$2 = G__34246__2;
return G__34246;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32198 = arguments.length;
switch (G__32198) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34245(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34245(p,v);
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
cljs.core.async.t_cljs$core$async32226 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32227){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32227 = meta32227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32228,meta32227__$1){
var self__ = this;
var _32228__$1 = this;
return (new cljs.core.async.t_cljs$core$async32226(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32227__$1));
}));

(cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32228){
var self__ = this;
var _32228__$1 = this;
return self__.meta32227;
}));

(cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32227","meta32227",1069254993,null)], null);
}));

(cljs.core.async.t_cljs$core$async32226.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32226");

(cljs.core.async.t_cljs$core$async32226.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32226");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32226.
 */
cljs.core.async.__GT_t_cljs$core$async32226 = (function cljs$core$async$__GT_t_cljs$core$async32226(ch,topic_fn,buf_fn,mults,ensure_mult,meta32227){
return (new cljs.core.async.t_cljs$core$async32226(ch,topic_fn,buf_fn,mults,ensure_mult,meta32227));
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
var G__32217 = arguments.length;
switch (G__32217) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32211_SHARP_){
if(cljs.core.truth_((p1__32211_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32211_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32211_SHARP_.call(null,topic)))){
return p1__32211_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32211_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async32226(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__30232__auto___34290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = (function (state_32337){
var state_val_32338 = (state_32337[(1)]);
if((state_val_32338 === (7))){
var inst_32327 = (state_32337[(2)]);
var state_32337__$1 = state_32337;
var statearr_32340_34291 = state_32337__$1;
(statearr_32340_34291[(2)] = inst_32327);

(statearr_32340_34291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (20))){
var state_32337__$1 = state_32337;
var statearr_32342_34292 = state_32337__$1;
(statearr_32342_34292[(2)] = null);

(statearr_32342_34292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (1))){
var state_32337__$1 = state_32337;
var statearr_32343_34293 = state_32337__$1;
(statearr_32343_34293[(2)] = null);

(statearr_32343_34293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (24))){
var inst_32310 = (state_32337[(7)]);
var inst_32319 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32310);
var state_32337__$1 = state_32337;
var statearr_32358_34294 = state_32337__$1;
(statearr_32358_34294[(2)] = inst_32319);

(statearr_32358_34294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (4))){
var inst_32249 = (state_32337[(8)]);
var inst_32249__$1 = (state_32337[(2)]);
var inst_32250 = (inst_32249__$1 == null);
var state_32337__$1 = (function (){var statearr_32361 = state_32337;
(statearr_32361[(8)] = inst_32249__$1);

return statearr_32361;
})();
if(cljs.core.truth_(inst_32250)){
var statearr_32363_34302 = state_32337__$1;
(statearr_32363_34302[(1)] = (5));

} else {
var statearr_32364_34303 = state_32337__$1;
(statearr_32364_34303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (15))){
var inst_32298 = (state_32337[(2)]);
var state_32337__$1 = state_32337;
var statearr_32366_34304 = state_32337__$1;
(statearr_32366_34304[(2)] = inst_32298);

(statearr_32366_34304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (21))){
var inst_32324 = (state_32337[(2)]);
var state_32337__$1 = (function (){var statearr_32369 = state_32337;
(statearr_32369[(9)] = inst_32324);

return statearr_32369;
})();
var statearr_32370_34308 = state_32337__$1;
(statearr_32370_34308[(2)] = null);

(statearr_32370_34308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (13))){
var inst_32280 = (state_32337[(10)]);
var inst_32282 = cljs.core.chunked_seq_QMARK_(inst_32280);
var state_32337__$1 = state_32337;
if(inst_32282){
var statearr_32374_34309 = state_32337__$1;
(statearr_32374_34309[(1)] = (16));

} else {
var statearr_32375_34312 = state_32337__$1;
(statearr_32375_34312[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (22))){
var inst_32316 = (state_32337[(2)]);
var state_32337__$1 = state_32337;
if(cljs.core.truth_(inst_32316)){
var statearr_32376_34314 = state_32337__$1;
(statearr_32376_34314[(1)] = (23));

} else {
var statearr_32377_34315 = state_32337__$1;
(statearr_32377_34315[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (6))){
var inst_32249 = (state_32337[(8)]);
var inst_32310 = (state_32337[(7)]);
var inst_32312 = (state_32337[(11)]);
var inst_32310__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32249) : topic_fn.call(null,inst_32249));
var inst_32311 = cljs.core.deref(mults);
var inst_32312__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32311,inst_32310__$1);
var state_32337__$1 = (function (){var statearr_32379 = state_32337;
(statearr_32379[(7)] = inst_32310__$1);

(statearr_32379[(11)] = inst_32312__$1);

return statearr_32379;
})();
if(cljs.core.truth_(inst_32312__$1)){
var statearr_32381_34320 = state_32337__$1;
(statearr_32381_34320[(1)] = (19));

} else {
var statearr_32382_34321 = state_32337__$1;
(statearr_32382_34321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (25))){
var inst_32321 = (state_32337[(2)]);
var state_32337__$1 = state_32337;
var statearr_32383_34322 = state_32337__$1;
(statearr_32383_34322[(2)] = inst_32321);

(statearr_32383_34322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (17))){
var inst_32280 = (state_32337[(10)]);
var inst_32289 = cljs.core.first(inst_32280);
var inst_32290 = cljs.core.async.muxch_STAR_(inst_32289);
var inst_32291 = cljs.core.async.close_BANG_(inst_32290);
var inst_32292 = cljs.core.next(inst_32280);
var inst_32262 = inst_32292;
var inst_32263 = null;
var inst_32264 = (0);
var inst_32265 = (0);
var state_32337__$1 = (function (){var statearr_32387 = state_32337;
(statearr_32387[(12)] = inst_32291);

(statearr_32387[(13)] = inst_32262);

(statearr_32387[(14)] = inst_32263);

(statearr_32387[(15)] = inst_32264);

(statearr_32387[(16)] = inst_32265);

return statearr_32387;
})();
var statearr_32390_34323 = state_32337__$1;
(statearr_32390_34323[(2)] = null);

(statearr_32390_34323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (3))){
var inst_32329 = (state_32337[(2)]);
var state_32337__$1 = state_32337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32337__$1,inst_32329);
} else {
if((state_val_32338 === (12))){
var inst_32300 = (state_32337[(2)]);
var state_32337__$1 = state_32337;
var statearr_32391_34327 = state_32337__$1;
(statearr_32391_34327[(2)] = inst_32300);

(statearr_32391_34327[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (2))){
var state_32337__$1 = state_32337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32337__$1,(4),ch);
} else {
if((state_val_32338 === (23))){
var state_32337__$1 = state_32337;
var statearr_32397_34330 = state_32337__$1;
(statearr_32397_34330[(2)] = null);

(statearr_32397_34330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (19))){
var inst_32312 = (state_32337[(11)]);
var inst_32249 = (state_32337[(8)]);
var inst_32314 = cljs.core.async.muxch_STAR_(inst_32312);
var state_32337__$1 = state_32337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32337__$1,(22),inst_32314,inst_32249);
} else {
if((state_val_32338 === (11))){
var inst_32262 = (state_32337[(13)]);
var inst_32280 = (state_32337[(10)]);
var inst_32280__$1 = cljs.core.seq(inst_32262);
var state_32337__$1 = (function (){var statearr_32403 = state_32337;
(statearr_32403[(10)] = inst_32280__$1);

return statearr_32403;
})();
if(inst_32280__$1){
var statearr_32404_34335 = state_32337__$1;
(statearr_32404_34335[(1)] = (13));

} else {
var statearr_32407_34336 = state_32337__$1;
(statearr_32407_34336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (9))){
var inst_32302 = (state_32337[(2)]);
var state_32337__$1 = state_32337;
var statearr_32409_34338 = state_32337__$1;
(statearr_32409_34338[(2)] = inst_32302);

(statearr_32409_34338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (5))){
var inst_32258 = cljs.core.deref(mults);
var inst_32259 = cljs.core.vals(inst_32258);
var inst_32260 = cljs.core.seq(inst_32259);
var inst_32262 = inst_32260;
var inst_32263 = null;
var inst_32264 = (0);
var inst_32265 = (0);
var state_32337__$1 = (function (){var statearr_32410 = state_32337;
(statearr_32410[(13)] = inst_32262);

(statearr_32410[(14)] = inst_32263);

(statearr_32410[(15)] = inst_32264);

(statearr_32410[(16)] = inst_32265);

return statearr_32410;
})();
var statearr_32413_34341 = state_32337__$1;
(statearr_32413_34341[(2)] = null);

(statearr_32413_34341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (14))){
var state_32337__$1 = state_32337;
var statearr_32420_34343 = state_32337__$1;
(statearr_32420_34343[(2)] = null);

(statearr_32420_34343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (16))){
var inst_32280 = (state_32337[(10)]);
var inst_32284 = cljs.core.chunk_first(inst_32280);
var inst_32285 = cljs.core.chunk_rest(inst_32280);
var inst_32286 = cljs.core.count(inst_32284);
var inst_32262 = inst_32285;
var inst_32263 = inst_32284;
var inst_32264 = inst_32286;
var inst_32265 = (0);
var state_32337__$1 = (function (){var statearr_32422 = state_32337;
(statearr_32422[(13)] = inst_32262);

(statearr_32422[(14)] = inst_32263);

(statearr_32422[(15)] = inst_32264);

(statearr_32422[(16)] = inst_32265);

return statearr_32422;
})();
var statearr_32423_34344 = state_32337__$1;
(statearr_32423_34344[(2)] = null);

(statearr_32423_34344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (10))){
var inst_32263 = (state_32337[(14)]);
var inst_32265 = (state_32337[(16)]);
var inst_32262 = (state_32337[(13)]);
var inst_32264 = (state_32337[(15)]);
var inst_32270 = cljs.core._nth(inst_32263,inst_32265);
var inst_32271 = cljs.core.async.muxch_STAR_(inst_32270);
var inst_32272 = cljs.core.async.close_BANG_(inst_32271);
var inst_32277 = (inst_32265 + (1));
var tmp32416 = inst_32262;
var tmp32417 = inst_32263;
var tmp32418 = inst_32264;
var inst_32262__$1 = tmp32416;
var inst_32263__$1 = tmp32417;
var inst_32264__$1 = tmp32418;
var inst_32265__$1 = inst_32277;
var state_32337__$1 = (function (){var statearr_32425 = state_32337;
(statearr_32425[(17)] = inst_32272);

(statearr_32425[(13)] = inst_32262__$1);

(statearr_32425[(14)] = inst_32263__$1);

(statearr_32425[(15)] = inst_32264__$1);

(statearr_32425[(16)] = inst_32265__$1);

return statearr_32425;
})();
var statearr_32426_34345 = state_32337__$1;
(statearr_32426_34345[(2)] = null);

(statearr_32426_34345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (18))){
var inst_32295 = (state_32337[(2)]);
var state_32337__$1 = state_32337;
var statearr_32433_34346 = state_32337__$1;
(statearr_32433_34346[(2)] = inst_32295);

(statearr_32433_34346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32338 === (8))){
var inst_32265 = (state_32337[(16)]);
var inst_32264 = (state_32337[(15)]);
var inst_32267 = (inst_32265 < inst_32264);
var inst_32268 = inst_32267;
var state_32337__$1 = state_32337;
if(cljs.core.truth_(inst_32268)){
var statearr_32442_34347 = state_32337__$1;
(statearr_32442_34347[(1)] = (10));

} else {
var statearr_32445_34348 = state_32337__$1;
(statearr_32445_34348[(1)] = (11));

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
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_32448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32448[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_32448[(1)] = (1));

return statearr_32448;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_32337){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_32337);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e32451){var ex__28696__auto__ = e32451;
var statearr_32452_34349 = state_32337;
(statearr_32452_34349[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_32337[(4)]))){
var statearr_32454_34350 = state_32337;
(statearr_32454_34350[(1)] = cljs.core.first((state_32337[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34351 = state_32337;
state_32337 = G__34351;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_32337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_32337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
})();
var state__30234__auto__ = (function (){var statearr_32459 = f__30233__auto__();
(statearr_32459[(6)] = c__30232__auto___34290);

return statearr_32459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
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
var G__32468 = arguments.length;
switch (G__32468) {
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
var G__32486 = arguments.length;
switch (G__32486) {
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
var G__32497 = arguments.length;
switch (G__32497) {
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
var c__30232__auto___34367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = (function (state_32569){
var state_val_32571 = (state_32569[(1)]);
if((state_val_32571 === (7))){
var state_32569__$1 = state_32569;
var statearr_32573_34370 = state_32569__$1;
(statearr_32573_34370[(2)] = null);

(statearr_32573_34370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (1))){
var state_32569__$1 = state_32569;
var statearr_32575_34373 = state_32569__$1;
(statearr_32575_34373[(2)] = null);

(statearr_32575_34373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (4))){
var inst_32513 = (state_32569[(7)]);
var inst_32512 = (state_32569[(8)]);
var inst_32517 = (inst_32513 < inst_32512);
var state_32569__$1 = state_32569;
if(cljs.core.truth_(inst_32517)){
var statearr_32577_34376 = state_32569__$1;
(statearr_32577_34376[(1)] = (6));

} else {
var statearr_32579_34377 = state_32569__$1;
(statearr_32579_34377[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (15))){
var inst_32552 = (state_32569[(9)]);
var inst_32557 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32552);
var state_32569__$1 = state_32569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32569__$1,(17),out,inst_32557);
} else {
if((state_val_32571 === (13))){
var inst_32552 = (state_32569[(9)]);
var inst_32552__$1 = (state_32569[(2)]);
var inst_32553 = cljs.core.some(cljs.core.nil_QMARK_,inst_32552__$1);
var state_32569__$1 = (function (){var statearr_32580 = state_32569;
(statearr_32580[(9)] = inst_32552__$1);

return statearr_32580;
})();
if(cljs.core.truth_(inst_32553)){
var statearr_32586_34380 = state_32569__$1;
(statearr_32586_34380[(1)] = (14));

} else {
var statearr_32587_34381 = state_32569__$1;
(statearr_32587_34381[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (6))){
var state_32569__$1 = state_32569;
var statearr_32588_34382 = state_32569__$1;
(statearr_32588_34382[(2)] = null);

(statearr_32588_34382[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (17))){
var inst_32559 = (state_32569[(2)]);
var state_32569__$1 = (function (){var statearr_32598 = state_32569;
(statearr_32598[(10)] = inst_32559);

return statearr_32598;
})();
var statearr_32599_34386 = state_32569__$1;
(statearr_32599_34386[(2)] = null);

(statearr_32599_34386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (3))){
var inst_32564 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32569__$1,inst_32564);
} else {
if((state_val_32571 === (12))){
var _ = (function (){var statearr_32601 = state_32569;
(statearr_32601[(4)] = cljs.core.rest((state_32569[(4)])));

return statearr_32601;
})();
var state_32569__$1 = state_32569;
var ex32596 = (state_32569__$1[(2)]);
var statearr_32602_34390 = state_32569__$1;
(statearr_32602_34390[(5)] = ex32596);


if((ex32596 instanceof Object)){
var statearr_32610_34393 = state_32569__$1;
(statearr_32610_34393[(1)] = (11));

(statearr_32610_34393[(5)] = null);

} else {
throw ex32596;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (2))){
var inst_32510 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32512 = cnt;
var inst_32513 = (0);
var state_32569__$1 = (function (){var statearr_32618 = state_32569;
(statearr_32618[(11)] = inst_32510);

(statearr_32618[(8)] = inst_32512);

(statearr_32618[(7)] = inst_32513);

return statearr_32618;
})();
var statearr_32620_34406 = state_32569__$1;
(statearr_32620_34406[(2)] = null);

(statearr_32620_34406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (11))){
var inst_32528 = (state_32569[(2)]);
var inst_32529 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32569__$1 = (function (){var statearr_32622 = state_32569;
(statearr_32622[(12)] = inst_32528);

return statearr_32622;
})();
var statearr_32623_34411 = state_32569__$1;
(statearr_32623_34411[(2)] = inst_32529);

(statearr_32623_34411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (9))){
var inst_32513 = (state_32569[(7)]);
var _ = (function (){var statearr_32624 = state_32569;
(statearr_32624[(4)] = cljs.core.cons((12),(state_32569[(4)])));

return statearr_32624;
})();
var inst_32535 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32513) : chs__$1.call(null,inst_32513));
var inst_32536 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32513) : done.call(null,inst_32513));
var inst_32537 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32535,inst_32536);
var ___$1 = (function (){var statearr_32625 = state_32569;
(statearr_32625[(4)] = cljs.core.rest((state_32569[(4)])));

return statearr_32625;
})();
var state_32569__$1 = state_32569;
var statearr_32626_34412 = state_32569__$1;
(statearr_32626_34412[(2)] = inst_32537);

(statearr_32626_34412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (5))){
var inst_32547 = (state_32569[(2)]);
var state_32569__$1 = (function (){var statearr_32627 = state_32569;
(statearr_32627[(13)] = inst_32547);

return statearr_32627;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32569__$1,(13),dchan);
} else {
if((state_val_32571 === (14))){
var inst_32555 = cljs.core.async.close_BANG_(out);
var state_32569__$1 = state_32569;
var statearr_32632_34413 = state_32569__$1;
(statearr_32632_34413[(2)] = inst_32555);

(statearr_32632_34413[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (16))){
var inst_32562 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
var statearr_32633_34418 = state_32569__$1;
(statearr_32633_34418[(2)] = inst_32562);

(statearr_32633_34418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (10))){
var inst_32513 = (state_32569[(7)]);
var inst_32540 = (state_32569[(2)]);
var inst_32541 = (inst_32513 + (1));
var inst_32513__$1 = inst_32541;
var state_32569__$1 = (function (){var statearr_32634 = state_32569;
(statearr_32634[(14)] = inst_32540);

(statearr_32634[(7)] = inst_32513__$1);

return statearr_32634;
})();
var statearr_32635_34419 = state_32569__$1;
(statearr_32635_34419[(2)] = null);

(statearr_32635_34419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32571 === (8))){
var inst_32545 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
var statearr_32637_34420 = state_32569__$1;
(statearr_32637_34420[(2)] = inst_32545);

(statearr_32637_34420[(1)] = (5));


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
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_32639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32639[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_32639[(1)] = (1));

return statearr_32639;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_32569){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_32569);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e32640){var ex__28696__auto__ = e32640;
var statearr_32642_34423 = state_32569;
(statearr_32642_34423[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_32569[(4)]))){
var statearr_32643_34424 = state_32569;
(statearr_32643_34424[(1)] = cljs.core.first((state_32569[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34425 = state_32569;
state_32569 = G__34425;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_32569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_32569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
})();
var state__30234__auto__ = (function (){var statearr_32649 = f__30233__auto__();
(statearr_32649[(6)] = c__30232__auto___34367);

return statearr_32649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
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
var G__32660 = arguments.length;
switch (G__32660) {
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
var c__30232__auto___34434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = (function (state_32701){
var state_val_32702 = (state_32701[(1)]);
if((state_val_32702 === (7))){
var inst_32676 = (state_32701[(7)]);
var inst_32677 = (state_32701[(8)]);
var inst_32676__$1 = (state_32701[(2)]);
var inst_32677__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32676__$1,(0),null);
var inst_32678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32676__$1,(1),null);
var inst_32679 = (inst_32677__$1 == null);
var state_32701__$1 = (function (){var statearr_32707 = state_32701;
(statearr_32707[(7)] = inst_32676__$1);

(statearr_32707[(8)] = inst_32677__$1);

(statearr_32707[(9)] = inst_32678);

return statearr_32707;
})();
if(cljs.core.truth_(inst_32679)){
var statearr_32709_34441 = state_32701__$1;
(statearr_32709_34441[(1)] = (8));

} else {
var statearr_32711_34442 = state_32701__$1;
(statearr_32711_34442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (1))){
var inst_32664 = cljs.core.vec(chs);
var inst_32665 = inst_32664;
var state_32701__$1 = (function (){var statearr_32717 = state_32701;
(statearr_32717[(10)] = inst_32665);

return statearr_32717;
})();
var statearr_32719_34443 = state_32701__$1;
(statearr_32719_34443[(2)] = null);

(statearr_32719_34443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (4))){
var inst_32665 = (state_32701[(10)]);
var state_32701__$1 = state_32701;
return cljs.core.async.ioc_alts_BANG_(state_32701__$1,(7),inst_32665);
} else {
if((state_val_32702 === (6))){
var inst_32695 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32723_34445 = state_32701__$1;
(statearr_32723_34445[(2)] = inst_32695);

(statearr_32723_34445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (3))){
var inst_32697 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32701__$1,inst_32697);
} else {
if((state_val_32702 === (2))){
var inst_32665 = (state_32701[(10)]);
var inst_32667 = cljs.core.count(inst_32665);
var inst_32668 = (inst_32667 > (0));
var state_32701__$1 = state_32701;
if(cljs.core.truth_(inst_32668)){
var statearr_32726_34448 = state_32701__$1;
(statearr_32726_34448[(1)] = (4));

} else {
var statearr_32727_34449 = state_32701__$1;
(statearr_32727_34449[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (11))){
var inst_32665 = (state_32701[(10)]);
var inst_32688 = (state_32701[(2)]);
var tmp32725 = inst_32665;
var inst_32665__$1 = tmp32725;
var state_32701__$1 = (function (){var statearr_32730 = state_32701;
(statearr_32730[(11)] = inst_32688);

(statearr_32730[(10)] = inst_32665__$1);

return statearr_32730;
})();
var statearr_32731_34450 = state_32701__$1;
(statearr_32731_34450[(2)] = null);

(statearr_32731_34450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (9))){
var inst_32677 = (state_32701[(8)]);
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32701__$1,(11),out,inst_32677);
} else {
if((state_val_32702 === (5))){
var inst_32693 = cljs.core.async.close_BANG_(out);
var state_32701__$1 = state_32701;
var statearr_32736_34452 = state_32701__$1;
(statearr_32736_34452[(2)] = inst_32693);

(statearr_32736_34452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (10))){
var inst_32691 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32737_34453 = state_32701__$1;
(statearr_32737_34453[(2)] = inst_32691);

(statearr_32737_34453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (8))){
var inst_32665 = (state_32701[(10)]);
var inst_32676 = (state_32701[(7)]);
var inst_32677 = (state_32701[(8)]);
var inst_32678 = (state_32701[(9)]);
var inst_32682 = (function (){var cs = inst_32665;
var vec__32671 = inst_32676;
var v = inst_32677;
var c = inst_32678;
return (function (p1__32655_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32655_SHARP_);
});
})();
var inst_32684 = cljs.core.filterv(inst_32682,inst_32665);
var inst_32665__$1 = inst_32684;
var state_32701__$1 = (function (){var statearr_32740 = state_32701;
(statearr_32740[(10)] = inst_32665__$1);

return statearr_32740;
})();
var statearr_32742_34455 = state_32701__$1;
(statearr_32742_34455[(2)] = null);

(statearr_32742_34455[(1)] = (2));


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
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_32745 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32745[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_32745[(1)] = (1));

return statearr_32745;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_32701){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_32701);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e32747){var ex__28696__auto__ = e32747;
var statearr_32748_34456 = state_32701;
(statearr_32748_34456[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_32701[(4)]))){
var statearr_32750_34458 = state_32701;
(statearr_32750_34458[(1)] = cljs.core.first((state_32701[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34459 = state_32701;
state_32701 = G__34459;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_32701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_32701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
})();
var state__30234__auto__ = (function (){var statearr_32753 = f__30233__auto__();
(statearr_32753[(6)] = c__30232__auto___34434);

return statearr_32753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
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
var G__32767 = arguments.length;
switch (G__32767) {
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
var c__30232__auto___34465 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = (function (state_32801){
var state_val_32802 = (state_32801[(1)]);
if((state_val_32802 === (7))){
var inst_32780 = (state_32801[(7)]);
var inst_32780__$1 = (state_32801[(2)]);
var inst_32781 = (inst_32780__$1 == null);
var inst_32782 = cljs.core.not(inst_32781);
var state_32801__$1 = (function (){var statearr_32810 = state_32801;
(statearr_32810[(7)] = inst_32780__$1);

return statearr_32810;
})();
if(inst_32782){
var statearr_32811_34468 = state_32801__$1;
(statearr_32811_34468[(1)] = (8));

} else {
var statearr_32812_34469 = state_32801__$1;
(statearr_32812_34469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (1))){
var inst_32773 = (0);
var state_32801__$1 = (function (){var statearr_32814 = state_32801;
(statearr_32814[(8)] = inst_32773);

return statearr_32814;
})();
var statearr_32815_34470 = state_32801__$1;
(statearr_32815_34470[(2)] = null);

(statearr_32815_34470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (4))){
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32801__$1,(7),ch);
} else {
if((state_val_32802 === (6))){
var inst_32796 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32816_34471 = state_32801__$1;
(statearr_32816_34471[(2)] = inst_32796);

(statearr_32816_34471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (3))){
var inst_32798 = (state_32801[(2)]);
var inst_32799 = cljs.core.async.close_BANG_(out);
var state_32801__$1 = (function (){var statearr_32818 = state_32801;
(statearr_32818[(9)] = inst_32798);

return statearr_32818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32801__$1,inst_32799);
} else {
if((state_val_32802 === (2))){
var inst_32773 = (state_32801[(8)]);
var inst_32775 = (inst_32773 < n);
var state_32801__$1 = state_32801;
if(cljs.core.truth_(inst_32775)){
var statearr_32819_34474 = state_32801__$1;
(statearr_32819_34474[(1)] = (4));

} else {
var statearr_32820_34475 = state_32801__$1;
(statearr_32820_34475[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (11))){
var inst_32773 = (state_32801[(8)]);
var inst_32788 = (state_32801[(2)]);
var inst_32789 = (inst_32773 + (1));
var inst_32773__$1 = inst_32789;
var state_32801__$1 = (function (){var statearr_32822 = state_32801;
(statearr_32822[(10)] = inst_32788);

(statearr_32822[(8)] = inst_32773__$1);

return statearr_32822;
})();
var statearr_32823_34478 = state_32801__$1;
(statearr_32823_34478[(2)] = null);

(statearr_32823_34478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (9))){
var state_32801__$1 = state_32801;
var statearr_32824_34479 = state_32801__$1;
(statearr_32824_34479[(2)] = null);

(statearr_32824_34479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (5))){
var state_32801__$1 = state_32801;
var statearr_32825_34481 = state_32801__$1;
(statearr_32825_34481[(2)] = null);

(statearr_32825_34481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (10))){
var inst_32793 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32827_34485 = state_32801__$1;
(statearr_32827_34485[(2)] = inst_32793);

(statearr_32827_34485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (8))){
var inst_32780 = (state_32801[(7)]);
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32801__$1,(11),out,inst_32780);
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
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_32828 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32828[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_32828[(1)] = (1));

return statearr_32828;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_32801){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_32801);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e32833){var ex__28696__auto__ = e32833;
var statearr_32840_34492 = state_32801;
(statearr_32840_34492[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_32801[(4)]))){
var statearr_32841_34493 = state_32801;
(statearr_32841_34493[(1)] = cljs.core.first((state_32801[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34494 = state_32801;
state_32801 = G__34494;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_32801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_32801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
})();
var state__30234__auto__ = (function (){var statearr_32843 = f__30233__auto__();
(statearr_32843[(6)] = c__30232__auto___34465);

return statearr_32843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
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
cljs.core.async.t_cljs$core$async32875 = (function (f,ch,meta32862,_,fn1,meta32876){
this.f = f;
this.ch = ch;
this.meta32862 = meta32862;
this._ = _;
this.fn1 = fn1;
this.meta32876 = meta32876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32877,meta32876__$1){
var self__ = this;
var _32877__$1 = this;
return (new cljs.core.async.t_cljs$core$async32875(self__.f,self__.ch,self__.meta32862,self__._,self__.fn1,meta32876__$1));
}));

(cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32877){
var self__ = this;
var _32877__$1 = this;
return self__.meta32876;
}));

(cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32859_SHARP_){
var G__32889 = (((p1__32859_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32859_SHARP_) : self__.f.call(null,p1__32859_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32889) : f1.call(null,G__32889));
});
}));

(cljs.core.async.t_cljs$core$async32875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32862","meta32862",-475497724,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32861","cljs.core.async/t_cljs$core$async32861",1699761153,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32876","meta32876",-535217984,null)], null);
}));

(cljs.core.async.t_cljs$core$async32875.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32875");

(cljs.core.async.t_cljs$core$async32875.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32875");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32875.
 */
cljs.core.async.__GT_t_cljs$core$async32875 = (function cljs$core$async$__GT_t_cljs$core$async32875(f,ch,meta32862,_,fn1,meta32876){
return (new cljs.core.async.t_cljs$core$async32875(f,ch,meta32862,_,fn1,meta32876));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32861 = (function (f,ch,meta32862){
this.f = f;
this.ch = ch;
this.meta32862 = meta32862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32863,meta32862__$1){
var self__ = this;
var _32863__$1 = this;
return (new cljs.core.async.t_cljs$core$async32861(self__.f,self__.ch,meta32862__$1));
}));

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32863){
var self__ = this;
var _32863__$1 = this;
return self__.meta32862;
}));

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async32875(self__.f,self__.ch,self__.meta32862,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32898 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32898) : self__.f.call(null,G__32898));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32862","meta32862",-475497724,null)], null);
}));

(cljs.core.async.t_cljs$core$async32861.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32861");

(cljs.core.async.t_cljs$core$async32861.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32861");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32861.
 */
cljs.core.async.__GT_t_cljs$core$async32861 = (function cljs$core$async$__GT_t_cljs$core$async32861(f,ch,meta32862){
return (new cljs.core.async.t_cljs$core$async32861(f,ch,meta32862));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32861(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32924 = (function (f,ch,meta32925){
this.f = f;
this.ch = ch;
this.meta32925 = meta32925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32926,meta32925__$1){
var self__ = this;
var _32926__$1 = this;
return (new cljs.core.async.t_cljs$core$async32924(self__.f,self__.ch,meta32925__$1));
}));

(cljs.core.async.t_cljs$core$async32924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32926){
var self__ = this;
var _32926__$1 = this;
return self__.meta32925;
}));

(cljs.core.async.t_cljs$core$async32924.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32924.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32924.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32924.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32924.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32924.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32925","meta32925",-86706951,null)], null);
}));

(cljs.core.async.t_cljs$core$async32924.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32924");

(cljs.core.async.t_cljs$core$async32924.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32924");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32924.
 */
cljs.core.async.__GT_t_cljs$core$async32924 = (function cljs$core$async$__GT_t_cljs$core$async32924(f,ch,meta32925){
return (new cljs.core.async.t_cljs$core$async32924(f,ch,meta32925));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32924(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32939 = (function (p,ch,meta32940){
this.p = p;
this.ch = ch;
this.meta32940 = meta32940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32941,meta32940__$1){
var self__ = this;
var _32941__$1 = this;
return (new cljs.core.async.t_cljs$core$async32939(self__.p,self__.ch,meta32940__$1));
}));

(cljs.core.async.t_cljs$core$async32939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32941){
var self__ = this;
var _32941__$1 = this;
return self__.meta32940;
}));

(cljs.core.async.t_cljs$core$async32939.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32939.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32939.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32939.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32939.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32939.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32939.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32940","meta32940",1572014032,null)], null);
}));

(cljs.core.async.t_cljs$core$async32939.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32939");

(cljs.core.async.t_cljs$core$async32939.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32939");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32939.
 */
cljs.core.async.__GT_t_cljs$core$async32939 = (function cljs$core$async$__GT_t_cljs$core$async32939(p,ch,meta32940){
return (new cljs.core.async.t_cljs$core$async32939(p,ch,meta32940));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async32939(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32960 = arguments.length;
switch (G__32960) {
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
var c__30232__auto___34545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = (function (state_32987){
var state_val_32988 = (state_32987[(1)]);
if((state_val_32988 === (7))){
var inst_32983 = (state_32987[(2)]);
var state_32987__$1 = state_32987;
var statearr_32991_34548 = state_32987__$1;
(statearr_32991_34548[(2)] = inst_32983);

(statearr_32991_34548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32988 === (1))){
var state_32987__$1 = state_32987;
var statearr_32993_34549 = state_32987__$1;
(statearr_32993_34549[(2)] = null);

(statearr_32993_34549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32988 === (4))){
var inst_32969 = (state_32987[(7)]);
var inst_32969__$1 = (state_32987[(2)]);
var inst_32970 = (inst_32969__$1 == null);
var state_32987__$1 = (function (){var statearr_32994 = state_32987;
(statearr_32994[(7)] = inst_32969__$1);

return statearr_32994;
})();
if(cljs.core.truth_(inst_32970)){
var statearr_32996_34550 = state_32987__$1;
(statearr_32996_34550[(1)] = (5));

} else {
var statearr_32997_34551 = state_32987__$1;
(statearr_32997_34551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32988 === (6))){
var inst_32969 = (state_32987[(7)]);
var inst_32974 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32969) : p.call(null,inst_32969));
var state_32987__$1 = state_32987;
if(cljs.core.truth_(inst_32974)){
var statearr_32999_34552 = state_32987__$1;
(statearr_32999_34552[(1)] = (8));

} else {
var statearr_33000_34553 = state_32987__$1;
(statearr_33000_34553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32988 === (3))){
var inst_32985 = (state_32987[(2)]);
var state_32987__$1 = state_32987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32987__$1,inst_32985);
} else {
if((state_val_32988 === (2))){
var state_32987__$1 = state_32987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32987__$1,(4),ch);
} else {
if((state_val_32988 === (11))){
var inst_32977 = (state_32987[(2)]);
var state_32987__$1 = state_32987;
var statearr_33003_34555 = state_32987__$1;
(statearr_33003_34555[(2)] = inst_32977);

(statearr_33003_34555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32988 === (9))){
var state_32987__$1 = state_32987;
var statearr_33004_34556 = state_32987__$1;
(statearr_33004_34556[(2)] = null);

(statearr_33004_34556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32988 === (5))){
var inst_32972 = cljs.core.async.close_BANG_(out);
var state_32987__$1 = state_32987;
var statearr_33012_34559 = state_32987__$1;
(statearr_33012_34559[(2)] = inst_32972);

(statearr_33012_34559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32988 === (10))){
var inst_32980 = (state_32987[(2)]);
var state_32987__$1 = (function (){var statearr_33016 = state_32987;
(statearr_33016[(8)] = inst_32980);

return statearr_33016;
})();
var statearr_33017_34560 = state_32987__$1;
(statearr_33017_34560[(2)] = null);

(statearr_33017_34560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32988 === (8))){
var inst_32969 = (state_32987[(7)]);
var state_32987__$1 = state_32987;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32987__$1,(11),out,inst_32969);
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
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_33020 = [null,null,null,null,null,null,null,null,null];
(statearr_33020[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_33020[(1)] = (1));

return statearr_33020;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_32987){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_32987);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e33025){var ex__28696__auto__ = e33025;
var statearr_33026_34563 = state_32987;
(statearr_33026_34563[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_32987[(4)]))){
var statearr_33027_34565 = state_32987;
(statearr_33027_34565[(1)] = cljs.core.first((state_32987[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34567 = state_32987;
state_32987 = G__34567;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_32987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_32987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
})();
var state__30234__auto__ = (function (){var statearr_33031 = f__30233__auto__();
(statearr_33031[(6)] = c__30232__auto___34545);

return statearr_33031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33037 = arguments.length;
switch (G__33037) {
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
var c__30232__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = (function (state_33138){
var state_val_33139 = (state_33138[(1)]);
if((state_val_33139 === (7))){
var inst_33130 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
var statearr_33143_34574 = state_33138__$1;
(statearr_33143_34574[(2)] = inst_33130);

(statearr_33143_34574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (20))){
var inst_33095 = (state_33138[(7)]);
var inst_33109 = (state_33138[(2)]);
var inst_33110 = cljs.core.next(inst_33095);
var inst_33073 = inst_33110;
var inst_33074 = null;
var inst_33076 = (0);
var inst_33077 = (0);
var state_33138__$1 = (function (){var statearr_33149 = state_33138;
(statearr_33149[(8)] = inst_33109);

(statearr_33149[(9)] = inst_33073);

(statearr_33149[(10)] = inst_33074);

(statearr_33149[(11)] = inst_33076);

(statearr_33149[(12)] = inst_33077);

return statearr_33149;
})();
var statearr_33151_34578 = state_33138__$1;
(statearr_33151_34578[(2)] = null);

(statearr_33151_34578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (1))){
var state_33138__$1 = state_33138;
var statearr_33154_34580 = state_33138__$1;
(statearr_33154_34580[(2)] = null);

(statearr_33154_34580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (4))){
var inst_33061 = (state_33138[(13)]);
var inst_33061__$1 = (state_33138[(2)]);
var inst_33062 = (inst_33061__$1 == null);
var state_33138__$1 = (function (){var statearr_33156 = state_33138;
(statearr_33156[(13)] = inst_33061__$1);

return statearr_33156;
})();
if(cljs.core.truth_(inst_33062)){
var statearr_33159_34581 = state_33138__$1;
(statearr_33159_34581[(1)] = (5));

} else {
var statearr_33161_34583 = state_33138__$1;
(statearr_33161_34583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (15))){
var state_33138__$1 = state_33138;
var statearr_33166_34587 = state_33138__$1;
(statearr_33166_34587[(2)] = null);

(statearr_33166_34587[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (21))){
var state_33138__$1 = state_33138;
var statearr_33168_34589 = state_33138__$1;
(statearr_33168_34589[(2)] = null);

(statearr_33168_34589[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (13))){
var inst_33077 = (state_33138[(12)]);
var inst_33073 = (state_33138[(9)]);
var inst_33074 = (state_33138[(10)]);
var inst_33076 = (state_33138[(11)]);
var inst_33091 = (state_33138[(2)]);
var inst_33092 = (inst_33077 + (1));
var tmp33162 = inst_33074;
var tmp33163 = inst_33073;
var tmp33164 = inst_33076;
var inst_33073__$1 = tmp33163;
var inst_33074__$1 = tmp33162;
var inst_33076__$1 = tmp33164;
var inst_33077__$1 = inst_33092;
var state_33138__$1 = (function (){var statearr_33169 = state_33138;
(statearr_33169[(14)] = inst_33091);

(statearr_33169[(9)] = inst_33073__$1);

(statearr_33169[(10)] = inst_33074__$1);

(statearr_33169[(11)] = inst_33076__$1);

(statearr_33169[(12)] = inst_33077__$1);

return statearr_33169;
})();
var statearr_33170_34596 = state_33138__$1;
(statearr_33170_34596[(2)] = null);

(statearr_33170_34596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (22))){
var state_33138__$1 = state_33138;
var statearr_33173_34599 = state_33138__$1;
(statearr_33173_34599[(2)] = null);

(statearr_33173_34599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (6))){
var inst_33061 = (state_33138[(13)]);
var inst_33070 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33061) : f.call(null,inst_33061));
var inst_33072 = cljs.core.seq(inst_33070);
var inst_33073 = inst_33072;
var inst_33074 = null;
var inst_33076 = (0);
var inst_33077 = (0);
var state_33138__$1 = (function (){var statearr_33175 = state_33138;
(statearr_33175[(9)] = inst_33073);

(statearr_33175[(10)] = inst_33074);

(statearr_33175[(11)] = inst_33076);

(statearr_33175[(12)] = inst_33077);

return statearr_33175;
})();
var statearr_33176_34601 = state_33138__$1;
(statearr_33176_34601[(2)] = null);

(statearr_33176_34601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (17))){
var inst_33095 = (state_33138[(7)]);
var inst_33100 = cljs.core.chunk_first(inst_33095);
var inst_33101 = cljs.core.chunk_rest(inst_33095);
var inst_33102 = cljs.core.count(inst_33100);
var inst_33073 = inst_33101;
var inst_33074 = inst_33100;
var inst_33076 = inst_33102;
var inst_33077 = (0);
var state_33138__$1 = (function (){var statearr_33179 = state_33138;
(statearr_33179[(9)] = inst_33073);

(statearr_33179[(10)] = inst_33074);

(statearr_33179[(11)] = inst_33076);

(statearr_33179[(12)] = inst_33077);

return statearr_33179;
})();
var statearr_33181_34603 = state_33138__$1;
(statearr_33181_34603[(2)] = null);

(statearr_33181_34603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (3))){
var inst_33132 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33138__$1,inst_33132);
} else {
if((state_val_33139 === (12))){
var inst_33118 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
var statearr_33189_34605 = state_33138__$1;
(statearr_33189_34605[(2)] = inst_33118);

(statearr_33189_34605[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (2))){
var state_33138__$1 = state_33138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33138__$1,(4),in$);
} else {
if((state_val_33139 === (23))){
var inst_33128 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
var statearr_33194_34606 = state_33138__$1;
(statearr_33194_34606[(2)] = inst_33128);

(statearr_33194_34606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (19))){
var inst_33113 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
var statearr_33197_34607 = state_33138__$1;
(statearr_33197_34607[(2)] = inst_33113);

(statearr_33197_34607[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (11))){
var inst_33073 = (state_33138[(9)]);
var inst_33095 = (state_33138[(7)]);
var inst_33095__$1 = cljs.core.seq(inst_33073);
var state_33138__$1 = (function (){var statearr_33201 = state_33138;
(statearr_33201[(7)] = inst_33095__$1);

return statearr_33201;
})();
if(inst_33095__$1){
var statearr_33202_34608 = state_33138__$1;
(statearr_33202_34608[(1)] = (14));

} else {
var statearr_33204_34609 = state_33138__$1;
(statearr_33204_34609[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (9))){
var inst_33120 = (state_33138[(2)]);
var inst_33122 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33138__$1 = (function (){var statearr_33209 = state_33138;
(statearr_33209[(15)] = inst_33120);

return statearr_33209;
})();
if(cljs.core.truth_(inst_33122)){
var statearr_33212_34612 = state_33138__$1;
(statearr_33212_34612[(1)] = (21));

} else {
var statearr_33213_34613 = state_33138__$1;
(statearr_33213_34613[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (5))){
var inst_33064 = cljs.core.async.close_BANG_(out);
var state_33138__$1 = state_33138;
var statearr_33215_34614 = state_33138__$1;
(statearr_33215_34614[(2)] = inst_33064);

(statearr_33215_34614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (14))){
var inst_33095 = (state_33138[(7)]);
var inst_33098 = cljs.core.chunked_seq_QMARK_(inst_33095);
var state_33138__$1 = state_33138;
if(inst_33098){
var statearr_33217_34616 = state_33138__$1;
(statearr_33217_34616[(1)] = (17));

} else {
var statearr_33218_34617 = state_33138__$1;
(statearr_33218_34617[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (16))){
var inst_33116 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
var statearr_33219_34620 = state_33138__$1;
(statearr_33219_34620[(2)] = inst_33116);

(statearr_33219_34620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (10))){
var inst_33074 = (state_33138[(10)]);
var inst_33077 = (state_33138[(12)]);
var inst_33085 = cljs.core._nth(inst_33074,inst_33077);
var state_33138__$1 = state_33138;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33138__$1,(13),out,inst_33085);
} else {
if((state_val_33139 === (18))){
var inst_33095 = (state_33138[(7)]);
var inst_33105 = cljs.core.first(inst_33095);
var state_33138__$1 = state_33138;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33138__$1,(20),out,inst_33105);
} else {
if((state_val_33139 === (8))){
var inst_33077 = (state_33138[(12)]);
var inst_33076 = (state_33138[(11)]);
var inst_33080 = (inst_33077 < inst_33076);
var inst_33081 = inst_33080;
var state_33138__$1 = state_33138;
if(cljs.core.truth_(inst_33081)){
var statearr_33222_34624 = state_33138__$1;
(statearr_33222_34624[(1)] = (10));

} else {
var statearr_33223_34625 = state_33138__$1;
(statearr_33223_34625[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28693__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28693__auto____0 = (function (){
var statearr_33227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33227[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28693__auto__);

(statearr_33227[(1)] = (1));

return statearr_33227;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28693__auto____1 = (function (state_33138){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_33138);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e33229){var ex__28696__auto__ = e33229;
var statearr_33231_34626 = state_33138;
(statearr_33231_34626[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_33138[(4)]))){
var statearr_33232_34627 = state_33138;
(statearr_33232_34627[(1)] = cljs.core.first((state_33138[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34629 = state_33138;
state_33138 = G__34629;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28693__auto__ = function(state_33138){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28693__auto____1.call(this,state_33138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28693__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28693__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28693__auto__;
})()
})();
var state__30234__auto__ = (function (){var statearr_33238 = f__30233__auto__();
(statearr_33238[(6)] = c__30232__auto__);

return statearr_33238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
}));

return c__30232__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33244 = arguments.length;
switch (G__33244) {
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
var G__33256 = arguments.length;
switch (G__33256) {
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
var G__33268 = arguments.length;
switch (G__33268) {
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
var c__30232__auto___34638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = (function (state_33303){
var state_val_33304 = (state_33303[(1)]);
if((state_val_33304 === (7))){
var inst_33295 = (state_33303[(2)]);
var state_33303__$1 = state_33303;
var statearr_33310_34640 = state_33303__$1;
(statearr_33310_34640[(2)] = inst_33295);

(statearr_33310_34640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (1))){
var inst_33277 = null;
var state_33303__$1 = (function (){var statearr_33313 = state_33303;
(statearr_33313[(7)] = inst_33277);

return statearr_33313;
})();
var statearr_33314_34643 = state_33303__$1;
(statearr_33314_34643[(2)] = null);

(statearr_33314_34643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (4))){
var inst_33280 = (state_33303[(8)]);
var inst_33280__$1 = (state_33303[(2)]);
var inst_33281 = (inst_33280__$1 == null);
var inst_33282 = cljs.core.not(inst_33281);
var state_33303__$1 = (function (){var statearr_33318 = state_33303;
(statearr_33318[(8)] = inst_33280__$1);

return statearr_33318;
})();
if(inst_33282){
var statearr_33319_34648 = state_33303__$1;
(statearr_33319_34648[(1)] = (5));

} else {
var statearr_33320_34649 = state_33303__$1;
(statearr_33320_34649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (6))){
var state_33303__$1 = state_33303;
var statearr_33321_34650 = state_33303__$1;
(statearr_33321_34650[(2)] = null);

(statearr_33321_34650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (3))){
var inst_33297 = (state_33303[(2)]);
var inst_33299 = cljs.core.async.close_BANG_(out);
var state_33303__$1 = (function (){var statearr_33323 = state_33303;
(statearr_33323[(9)] = inst_33297);

return statearr_33323;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33303__$1,inst_33299);
} else {
if((state_val_33304 === (2))){
var state_33303__$1 = state_33303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33303__$1,(4),ch);
} else {
if((state_val_33304 === (11))){
var inst_33280 = (state_33303[(8)]);
var inst_33289 = (state_33303[(2)]);
var inst_33277 = inst_33280;
var state_33303__$1 = (function (){var statearr_33324 = state_33303;
(statearr_33324[(10)] = inst_33289);

(statearr_33324[(7)] = inst_33277);

return statearr_33324;
})();
var statearr_33325_34652 = state_33303__$1;
(statearr_33325_34652[(2)] = null);

(statearr_33325_34652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (9))){
var inst_33280 = (state_33303[(8)]);
var state_33303__$1 = state_33303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33303__$1,(11),out,inst_33280);
} else {
if((state_val_33304 === (5))){
var inst_33280 = (state_33303[(8)]);
var inst_33277 = (state_33303[(7)]);
var inst_33284 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33280,inst_33277);
var state_33303__$1 = state_33303;
if(inst_33284){
var statearr_33331_34654 = state_33303__$1;
(statearr_33331_34654[(1)] = (8));

} else {
var statearr_33332_34655 = state_33303__$1;
(statearr_33332_34655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (10))){
var inst_33292 = (state_33303[(2)]);
var state_33303__$1 = state_33303;
var statearr_33336_34658 = state_33303__$1;
(statearr_33336_34658[(2)] = inst_33292);

(statearr_33336_34658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (8))){
var inst_33277 = (state_33303[(7)]);
var tmp33330 = inst_33277;
var inst_33277__$1 = tmp33330;
var state_33303__$1 = (function (){var statearr_33337 = state_33303;
(statearr_33337[(7)] = inst_33277__$1);

return statearr_33337;
})();
var statearr_33339_34660 = state_33303__$1;
(statearr_33339_34660[(2)] = null);

(statearr_33339_34660[(1)] = (2));


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
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_33343 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33343[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_33343[(1)] = (1));

return statearr_33343;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_33303){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_33303);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e33344){var ex__28696__auto__ = e33344;
var statearr_33350_34661 = state_33303;
(statearr_33350_34661[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_33303[(4)]))){
var statearr_33352_34662 = state_33303;
(statearr_33352_34662[(1)] = cljs.core.first((state_33303[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34663 = state_33303;
state_33303 = G__34663;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_33303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_33303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
})();
var state__30234__auto__ = (function (){var statearr_33363 = f__30233__auto__();
(statearr_33363[(6)] = c__30232__auto___34638);

return statearr_33363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33376 = arguments.length;
switch (G__33376) {
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
var c__30232__auto___34665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = (function (state_33425){
var state_val_33426 = (state_33425[(1)]);
if((state_val_33426 === (7))){
var inst_33421 = (state_33425[(2)]);
var state_33425__$1 = state_33425;
var statearr_33435_34666 = state_33425__$1;
(statearr_33435_34666[(2)] = inst_33421);

(statearr_33435_34666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (1))){
var inst_33385 = (new Array(n));
var inst_33386 = inst_33385;
var inst_33387 = (0);
var state_33425__$1 = (function (){var statearr_33436 = state_33425;
(statearr_33436[(7)] = inst_33386);

(statearr_33436[(8)] = inst_33387);

return statearr_33436;
})();
var statearr_33437_34668 = state_33425__$1;
(statearr_33437_34668[(2)] = null);

(statearr_33437_34668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (4))){
var inst_33390 = (state_33425[(9)]);
var inst_33390__$1 = (state_33425[(2)]);
var inst_33393 = (inst_33390__$1 == null);
var inst_33394 = cljs.core.not(inst_33393);
var state_33425__$1 = (function (){var statearr_33439 = state_33425;
(statearr_33439[(9)] = inst_33390__$1);

return statearr_33439;
})();
if(inst_33394){
var statearr_33440_34669 = state_33425__$1;
(statearr_33440_34669[(1)] = (5));

} else {
var statearr_33441_34670 = state_33425__$1;
(statearr_33441_34670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (15))){
var inst_33415 = (state_33425[(2)]);
var state_33425__$1 = state_33425;
var statearr_33443_34671 = state_33425__$1;
(statearr_33443_34671[(2)] = inst_33415);

(statearr_33443_34671[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (13))){
var state_33425__$1 = state_33425;
var statearr_33444_34672 = state_33425__$1;
(statearr_33444_34672[(2)] = null);

(statearr_33444_34672[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (6))){
var inst_33387 = (state_33425[(8)]);
var inst_33411 = (inst_33387 > (0));
var state_33425__$1 = state_33425;
if(cljs.core.truth_(inst_33411)){
var statearr_33447_34673 = state_33425__$1;
(statearr_33447_34673[(1)] = (12));

} else {
var statearr_33448_34674 = state_33425__$1;
(statearr_33448_34674[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (3))){
var inst_33423 = (state_33425[(2)]);
var state_33425__$1 = state_33425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33425__$1,inst_33423);
} else {
if((state_val_33426 === (12))){
var inst_33386 = (state_33425[(7)]);
var inst_33413 = cljs.core.vec(inst_33386);
var state_33425__$1 = state_33425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33425__$1,(15),out,inst_33413);
} else {
if((state_val_33426 === (2))){
var state_33425__$1 = state_33425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33425__$1,(4),ch);
} else {
if((state_val_33426 === (11))){
var inst_33405 = (state_33425[(2)]);
var inst_33406 = (new Array(n));
var inst_33386 = inst_33406;
var inst_33387 = (0);
var state_33425__$1 = (function (){var statearr_33452 = state_33425;
(statearr_33452[(10)] = inst_33405);

(statearr_33452[(7)] = inst_33386);

(statearr_33452[(8)] = inst_33387);

return statearr_33452;
})();
var statearr_33453_34675 = state_33425__$1;
(statearr_33453_34675[(2)] = null);

(statearr_33453_34675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (9))){
var inst_33386 = (state_33425[(7)]);
var inst_33403 = cljs.core.vec(inst_33386);
var state_33425__$1 = state_33425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33425__$1,(11),out,inst_33403);
} else {
if((state_val_33426 === (5))){
var inst_33386 = (state_33425[(7)]);
var inst_33387 = (state_33425[(8)]);
var inst_33390 = (state_33425[(9)]);
var inst_33398 = (state_33425[(11)]);
var inst_33396 = (inst_33386[inst_33387] = inst_33390);
var inst_33398__$1 = (inst_33387 + (1));
var inst_33399 = (inst_33398__$1 < n);
var state_33425__$1 = (function (){var statearr_33455 = state_33425;
(statearr_33455[(12)] = inst_33396);

(statearr_33455[(11)] = inst_33398__$1);

return statearr_33455;
})();
if(cljs.core.truth_(inst_33399)){
var statearr_33456_34682 = state_33425__$1;
(statearr_33456_34682[(1)] = (8));

} else {
var statearr_33458_34687 = state_33425__$1;
(statearr_33458_34687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (14))){
var inst_33418 = (state_33425[(2)]);
var inst_33419 = cljs.core.async.close_BANG_(out);
var state_33425__$1 = (function (){var statearr_33460 = state_33425;
(statearr_33460[(13)] = inst_33418);

return statearr_33460;
})();
var statearr_33461_34692 = state_33425__$1;
(statearr_33461_34692[(2)] = inst_33419);

(statearr_33461_34692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (10))){
var inst_33409 = (state_33425[(2)]);
var state_33425__$1 = state_33425;
var statearr_33463_34693 = state_33425__$1;
(statearr_33463_34693[(2)] = inst_33409);

(statearr_33463_34693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33426 === (8))){
var inst_33386 = (state_33425[(7)]);
var inst_33398 = (state_33425[(11)]);
var tmp33459 = inst_33386;
var inst_33386__$1 = tmp33459;
var inst_33387 = inst_33398;
var state_33425__$1 = (function (){var statearr_33464 = state_33425;
(statearr_33464[(7)] = inst_33386__$1);

(statearr_33464[(8)] = inst_33387);

return statearr_33464;
})();
var statearr_33465_34703 = state_33425__$1;
(statearr_33465_34703[(2)] = null);

(statearr_33465_34703[(1)] = (2));


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
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_33467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33467[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_33467[(1)] = (1));

return statearr_33467;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_33425){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_33425);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e33468){var ex__28696__auto__ = e33468;
var statearr_33469_34708 = state_33425;
(statearr_33469_34708[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_33425[(4)]))){
var statearr_33471_34709 = state_33425;
(statearr_33471_34709[(1)] = cljs.core.first((state_33425[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34710 = state_33425;
state_33425 = G__34710;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_33425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_33425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
})();
var state__30234__auto__ = (function (){var statearr_33473 = f__30233__auto__();
(statearr_33473[(6)] = c__30232__auto___34665);

return statearr_33473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33477 = arguments.length;
switch (G__33477) {
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
var c__30232__auto___34714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30233__auto__ = (function (){var switch__28692__auto__ = (function (state_33538){
var state_val_33539 = (state_33538[(1)]);
if((state_val_33539 === (7))){
var inst_33531 = (state_33538[(2)]);
var state_33538__$1 = state_33538;
var statearr_33545_34717 = state_33538__$1;
(statearr_33545_34717[(2)] = inst_33531);

(statearr_33545_34717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33539 === (1))){
var inst_33484 = [];
var inst_33485 = inst_33484;
var inst_33486 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33538__$1 = (function (){var statearr_33549 = state_33538;
(statearr_33549[(7)] = inst_33485);

(statearr_33549[(8)] = inst_33486);

return statearr_33549;
})();
var statearr_33552_34718 = state_33538__$1;
(statearr_33552_34718[(2)] = null);

(statearr_33552_34718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33539 === (4))){
var inst_33489 = (state_33538[(9)]);
var inst_33489__$1 = (state_33538[(2)]);
var inst_33490 = (inst_33489__$1 == null);
var inst_33491 = cljs.core.not(inst_33490);
var state_33538__$1 = (function (){var statearr_33559 = state_33538;
(statearr_33559[(9)] = inst_33489__$1);

return statearr_33559;
})();
if(inst_33491){
var statearr_33561_34719 = state_33538__$1;
(statearr_33561_34719[(1)] = (5));

} else {
var statearr_33562_34720 = state_33538__$1;
(statearr_33562_34720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33539 === (15))){
var inst_33485 = (state_33538[(7)]);
var inst_33523 = cljs.core.vec(inst_33485);
var state_33538__$1 = state_33538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33538__$1,(18),out,inst_33523);
} else {
if((state_val_33539 === (13))){
var inst_33517 = (state_33538[(2)]);
var state_33538__$1 = state_33538;
var statearr_33565_34722 = state_33538__$1;
(statearr_33565_34722[(2)] = inst_33517);

(statearr_33565_34722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33539 === (6))){
var inst_33485 = (state_33538[(7)]);
var inst_33519 = inst_33485.length;
var inst_33520 = (inst_33519 > (0));
var state_33538__$1 = state_33538;
if(cljs.core.truth_(inst_33520)){
var statearr_33567_34723 = state_33538__$1;
(statearr_33567_34723[(1)] = (15));

} else {
var statearr_33568_34725 = state_33538__$1;
(statearr_33568_34725[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33539 === (17))){
var inst_33528 = (state_33538[(2)]);
var inst_33529 = cljs.core.async.close_BANG_(out);
var state_33538__$1 = (function (){var statearr_33573 = state_33538;
(statearr_33573[(10)] = inst_33528);

return statearr_33573;
})();
var statearr_33576_34726 = state_33538__$1;
(statearr_33576_34726[(2)] = inst_33529);

(statearr_33576_34726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33539 === (3))){
var inst_33533 = (state_33538[(2)]);
var state_33538__$1 = state_33538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33538__$1,inst_33533);
} else {
if((state_val_33539 === (12))){
var inst_33485 = (state_33538[(7)]);
var inst_33508 = cljs.core.vec(inst_33485);
var state_33538__$1 = state_33538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33538__$1,(14),out,inst_33508);
} else {
if((state_val_33539 === (2))){
var state_33538__$1 = state_33538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33538__$1,(4),ch);
} else {
if((state_val_33539 === (11))){
var inst_33485 = (state_33538[(7)]);
var inst_33489 = (state_33538[(9)]);
var inst_33494 = (state_33538[(11)]);
var inst_33504 = inst_33485.push(inst_33489);
var tmp33579 = inst_33485;
var inst_33485__$1 = tmp33579;
var inst_33486 = inst_33494;
var state_33538__$1 = (function (){var statearr_33594 = state_33538;
(statearr_33594[(12)] = inst_33504);

(statearr_33594[(7)] = inst_33485__$1);

(statearr_33594[(8)] = inst_33486);

return statearr_33594;
})();
var statearr_33595_34729 = state_33538__$1;
(statearr_33595_34729[(2)] = null);

(statearr_33595_34729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33539 === (9))){
var inst_33486 = (state_33538[(8)]);
var inst_33500 = cljs.core.keyword_identical_QMARK_(inst_33486,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33538__$1 = state_33538;
var statearr_33597_34731 = state_33538__$1;
(statearr_33597_34731[(2)] = inst_33500);

(statearr_33597_34731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33539 === (5))){
var inst_33489 = (state_33538[(9)]);
var inst_33494 = (state_33538[(11)]);
var inst_33486 = (state_33538[(8)]);
var inst_33496 = (state_33538[(13)]);
var inst_33494__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33489) : f.call(null,inst_33489));
var inst_33496__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33494__$1,inst_33486);
var state_33538__$1 = (function (){var statearr_33600 = state_33538;
(statearr_33600[(11)] = inst_33494__$1);

(statearr_33600[(13)] = inst_33496__$1);

return statearr_33600;
})();
if(inst_33496__$1){
var statearr_33602_34732 = state_33538__$1;
(statearr_33602_34732[(1)] = (8));

} else {
var statearr_33605_34733 = state_33538__$1;
(statearr_33605_34733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33539 === (14))){
var inst_33489 = (state_33538[(9)]);
var inst_33494 = (state_33538[(11)]);
var inst_33510 = (state_33538[(2)]);
var inst_33511 = [];
var inst_33513 = inst_33511.push(inst_33489);
var inst_33485 = inst_33511;
var inst_33486 = inst_33494;
var state_33538__$1 = (function (){var statearr_33611 = state_33538;
(statearr_33611[(14)] = inst_33510);

(statearr_33611[(15)] = inst_33513);

(statearr_33611[(7)] = inst_33485);

(statearr_33611[(8)] = inst_33486);

return statearr_33611;
})();
var statearr_33615_34737 = state_33538__$1;
(statearr_33615_34737[(2)] = null);

(statearr_33615_34737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33539 === (16))){
var state_33538__$1 = state_33538;
var statearr_33618_34738 = state_33538__$1;
(statearr_33618_34738[(2)] = null);

(statearr_33618_34738[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33539 === (10))){
var inst_33502 = (state_33538[(2)]);
var state_33538__$1 = state_33538;
if(cljs.core.truth_(inst_33502)){
var statearr_33622_34739 = state_33538__$1;
(statearr_33622_34739[(1)] = (11));

} else {
var statearr_33623_34740 = state_33538__$1;
(statearr_33623_34740[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33539 === (18))){
var inst_33525 = (state_33538[(2)]);
var state_33538__$1 = state_33538;
var statearr_33627_34741 = state_33538__$1;
(statearr_33627_34741[(2)] = inst_33525);

(statearr_33627_34741[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33539 === (8))){
var inst_33496 = (state_33538[(13)]);
var state_33538__$1 = state_33538;
var statearr_33629_34743 = state_33538__$1;
(statearr_33629_34743[(2)] = inst_33496);

(statearr_33629_34743[(1)] = (10));


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
var cljs$core$async$state_machine__28693__auto__ = null;
var cljs$core$async$state_machine__28693__auto____0 = (function (){
var statearr_33642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33642[(0)] = cljs$core$async$state_machine__28693__auto__);

(statearr_33642[(1)] = (1));

return statearr_33642;
});
var cljs$core$async$state_machine__28693__auto____1 = (function (state_33538){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__(state_33538);
if(cljs.core.keyword_identical_QMARK_(result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e33647){var ex__28696__auto__ = e33647;
var statearr_33648_34745 = state_33538;
(statearr_33648_34745[(2)] = ex__28696__auto__);


if(cljs.core.seq((state_33538[(4)]))){
var statearr_33652_34746 = state_33538;
(statearr_33652_34746[(1)] = cljs.core.first((state_33538[(4)])));

} else {
throw ex__28696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34748 = state_33538;
state_33538 = G__34748;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
cljs$core$async$state_machine__28693__auto__ = function(state_33538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28693__auto____1.call(this,state_33538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28693__auto____0;
cljs$core$async$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28693__auto____1;
return cljs$core$async$state_machine__28693__auto__;
})()
})();
var state__30234__auto__ = (function (){var statearr_33663 = f__30233__auto__();
(statearr_33663[(6)] = c__30232__auto___34714);

return statearr_33663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30234__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
