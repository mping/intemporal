goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29828 = arguments.length;
switch (G__29828) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29833 = (function (f,blockable,meta29834){
this.f = f;
this.blockable = blockable;
this.meta29834 = meta29834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29835,meta29834__$1){
var self__ = this;
var _29835__$1 = this;
return (new cljs.core.async.t_cljs$core$async29833(self__.f,self__.blockable,meta29834__$1));
}));

(cljs.core.async.t_cljs$core$async29833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29835){
var self__ = this;
var _29835__$1 = this;
return self__.meta29834;
}));

(cljs.core.async.t_cljs$core$async29833.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29833.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29833.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29833.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29834","meta29834",1612096112,null)], null);
}));

(cljs.core.async.t_cljs$core$async29833.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29833");

(cljs.core.async.t_cljs$core$async29833.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29833");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29833.
 */
cljs.core.async.__GT_t_cljs$core$async29833 = (function cljs$core$async$__GT_t_cljs$core$async29833(f__$1,blockable__$1,meta29834){
return (new cljs.core.async.t_cljs$core$async29833(f__$1,blockable__$1,meta29834));
});

}

return (new cljs.core.async.t_cljs$core$async29833(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29882 = arguments.length;
switch (G__29882) {
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
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29901 = arguments.length;
switch (G__29901) {
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
var G__29919 = arguments.length;
switch (G__29919) {
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
var val_33802 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33802) : fn1.call(null,val_33802));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33802) : fn1.call(null,val_33802));
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
var G__29937 = arguments.length;
switch (G__29937) {
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
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
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
var n__5636__auto___33808 = n;
var x_33809 = (0);
while(true){
if((x_33809 < n__5636__auto___33808)){
(a[x_33809] = x_33809);

var G__33810 = (x_33809 + (1));
x_33809 = G__33810;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29962 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29962 = (function (flag,meta29963){
this.flag = flag;
this.meta29963 = meta29963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29964,meta29963__$1){
var self__ = this;
var _29964__$1 = this;
return (new cljs.core.async.t_cljs$core$async29962(self__.flag,meta29963__$1));
}));

(cljs.core.async.t_cljs$core$async29962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29964){
var self__ = this;
var _29964__$1 = this;
return self__.meta29963;
}));

(cljs.core.async.t_cljs$core$async29962.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29962.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29963","meta29963",35092916,null)], null);
}));

(cljs.core.async.t_cljs$core$async29962.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29962");

(cljs.core.async.t_cljs$core$async29962.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29962");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29962.
 */
cljs.core.async.__GT_t_cljs$core$async29962 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29962(flag__$1,meta29963){
return (new cljs.core.async.t_cljs$core$async29962(flag__$1,meta29963));
});

}

return (new cljs.core.async.t_cljs$core$async29962(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29979 = (function (flag,cb,meta29980){
this.flag = flag;
this.cb = cb;
this.meta29980 = meta29980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29981,meta29980__$1){
var self__ = this;
var _29981__$1 = this;
return (new cljs.core.async.t_cljs$core$async29979(self__.flag,self__.cb,meta29980__$1));
}));

(cljs.core.async.t_cljs$core$async29979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29981){
var self__ = this;
var _29981__$1 = this;
return self__.meta29980;
}));

(cljs.core.async.t_cljs$core$async29979.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29979.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29980","meta29980",889431787,null)], null);
}));

(cljs.core.async.t_cljs$core$async29979.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29979");

(cljs.core.async.t_cljs$core$async29979.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29979");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29979.
 */
cljs.core.async.__GT_t_cljs$core$async29979 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29979(flag__$1,cb__$1,meta29980){
return (new cljs.core.async.t_cljs$core$async29979(flag__$1,cb__$1,meta29980));
});

}

return (new cljs.core.async.t_cljs$core$async29979(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30017_SHARP_){
var G__30025 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30017_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30025) : fret.call(null,G__30025));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30018_SHARP_){
var G__30028 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30018_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30028) : fret.call(null,G__30028));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33836 = (i + (1));
i = G__33836;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___33837 = arguments.length;
var i__5770__auto___33838 = (0);
while(true){
if((i__5770__auto___33838 < len__5769__auto___33837)){
args__5775__auto__.push((arguments[i__5770__auto___33838]));

var G__33839 = (i__5770__auto___33838 + (1));
i__5770__auto___33838 = G__33839;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30054){
var map__30055 = p__30054;
var map__30055__$1 = cljs.core.__destructure_map(map__30055);
var opts = map__30055__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30049){
var G__30050 = cljs.core.first(seq30049);
var seq30049__$1 = cljs.core.next(seq30049);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30050,seq30049__$1);
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
var G__30073 = arguments.length;
switch (G__30073) {
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
var c__29727__auto___33878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_30173){
var state_val_30178 = (state_30173[(1)]);
if((state_val_30178 === (7))){
var inst_30151 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
var statearr_30202_33883 = state_30173__$1;
(statearr_30202_33883[(2)] = inst_30151);

(statearr_30202_33883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (1))){
var state_30173__$1 = state_30173;
var statearr_30204_33887 = state_30173__$1;
(statearr_30204_33887[(2)] = null);

(statearr_30204_33887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (4))){
var inst_30118 = (state_30173[(7)]);
var inst_30118__$1 = (state_30173[(2)]);
var inst_30125 = (inst_30118__$1 == null);
var state_30173__$1 = (function (){var statearr_30214 = state_30173;
(statearr_30214[(7)] = inst_30118__$1);

return statearr_30214;
})();
if(cljs.core.truth_(inst_30125)){
var statearr_30216_33901 = state_30173__$1;
(statearr_30216_33901[(1)] = (5));

} else {
var statearr_30219_33902 = state_30173__$1;
(statearr_30219_33902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (13))){
var state_30173__$1 = state_30173;
var statearr_30226_33904 = state_30173__$1;
(statearr_30226_33904[(2)] = null);

(statearr_30226_33904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (6))){
var inst_30118 = (state_30173[(7)]);
var state_30173__$1 = state_30173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30173__$1,(11),to,inst_30118);
} else {
if((state_val_30178 === (3))){
var inst_30156 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30173__$1,inst_30156);
} else {
if((state_val_30178 === (12))){
var state_30173__$1 = state_30173;
var statearr_30233_33905 = state_30173__$1;
(statearr_30233_33905[(2)] = null);

(statearr_30233_33905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (2))){
var state_30173__$1 = state_30173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30173__$1,(4),from);
} else {
if((state_val_30178 === (11))){
var inst_30144 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
if(cljs.core.truth_(inst_30144)){
var statearr_30243_33907 = state_30173__$1;
(statearr_30243_33907[(1)] = (12));

} else {
var statearr_30246_33908 = state_30173__$1;
(statearr_30246_33908[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (9))){
var state_30173__$1 = state_30173;
var statearr_30253_33910 = state_30173__$1;
(statearr_30253_33910[(2)] = null);

(statearr_30253_33910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (5))){
var state_30173__$1 = state_30173;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30261_33912 = state_30173__$1;
(statearr_30261_33912[(1)] = (8));

} else {
var statearr_30265_33913 = state_30173__$1;
(statearr_30265_33913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (14))){
var inst_30149 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
var statearr_30267_33914 = state_30173__$1;
(statearr_30267_33914[(2)] = inst_30149);

(statearr_30267_33914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (10))){
var inst_30141 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
var statearr_30276_33918 = state_30173__$1;
(statearr_30276_33918[(2)] = inst_30141);

(statearr_30276_33918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (8))){
var inst_30134 = cljs.core.async.close_BANG_(to);
var state_30173__$1 = state_30173;
var statearr_30282_33920 = state_30173__$1;
(statearr_30282_33920[(2)] = inst_30134);

(statearr_30282_33920[(1)] = (10));


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
var cljs$core$async$state_machine__29270__auto__ = null;
var cljs$core$async$state_machine__29270__auto____0 = (function (){
var statearr_30289 = [null,null,null,null,null,null,null,null];
(statearr_30289[(0)] = cljs$core$async$state_machine__29270__auto__);

(statearr_30289[(1)] = (1));

return statearr_30289;
});
var cljs$core$async$state_machine__29270__auto____1 = (function (state_30173){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_30173);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e30291){var ex__29273__auto__ = e30291;
var statearr_30292_33922 = state_30173;
(statearr_30292_33922[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_30173[(4)]))){
var statearr_30293_33929 = state_30173;
(statearr_30293_33929[(1)] = cljs.core.first((state_30173[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33930 = state_30173;
state_30173 = G__33930;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$state_machine__29270__auto__ = function(state_30173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29270__auto____1.call(this,state_30173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29270__auto____0;
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29270__auto____1;
return cljs$core$async$state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_30295 = f__29728__auto__();
(statearr_30295[(6)] = c__29727__auto___33878);

return statearr_30295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
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
var process__$1 = (function (p__30309){
var vec__30310 = p__30309;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30310,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30310,(1),null);
var job = vec__30310;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29727__auto___33934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_30321){
var state_val_30322 = (state_30321[(1)]);
if((state_val_30322 === (1))){
var state_30321__$1 = state_30321;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30321__$1,(2),res,v);
} else {
if((state_val_30322 === (2))){
var inst_30314 = (state_30321[(2)]);
var inst_30315 = cljs.core.async.close_BANG_(res);
var state_30321__$1 = (function (){var statearr_30325 = state_30321;
(statearr_30325[(7)] = inst_30314);

return statearr_30325;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30321__$1,inst_30315);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____0 = (function (){
var statearr_30326 = [null,null,null,null,null,null,null,null];
(statearr_30326[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__);

(statearr_30326[(1)] = (1));

return statearr_30326;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____1 = (function (state_30321){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_30321);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e30327){var ex__29273__auto__ = e30327;
var statearr_30329_33937 = state_30321;
(statearr_30329_33937[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_30321[(4)]))){
var statearr_30330_33938 = state_30321;
(statearr_30330_33938[(1)] = cljs.core.first((state_30321[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33939 = state_30321;
state_30321 = G__33939;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__ = function(state_30321){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____1.call(this,state_30321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_30332 = f__29728__auto__();
(statearr_30332[(6)] = c__29727__auto___33934);

return statearr_30332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30334){
var vec__30335 = p__30334;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30335,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30335,(1),null);
var job = vec__30335;
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
var n__5636__auto___33943 = n;
var __33944 = (0);
while(true){
if((__33944 < n__5636__auto___33943)){
var G__30341_33945 = type;
var G__30341_33946__$1 = (((G__30341_33945 instanceof cljs.core.Keyword))?G__30341_33945.fqn:null);
switch (G__30341_33946__$1) {
case "compute":
var c__29727__auto___33948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33944,c__29727__auto___33948,G__30341_33945,G__30341_33946__$1,n__5636__auto___33943,jobs,results,process__$1,async){
return (function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = ((function (__33944,c__29727__auto___33948,G__30341_33945,G__30341_33946__$1,n__5636__auto___33943,jobs,results,process__$1,async){
return (function (state_30370){
var state_val_30371 = (state_30370[(1)]);
if((state_val_30371 === (1))){
var state_30370__$1 = state_30370;
var statearr_30375_33950 = state_30370__$1;
(statearr_30375_33950[(2)] = null);

(statearr_30375_33950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (2))){
var state_30370__$1 = state_30370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30370__$1,(4),jobs);
} else {
if((state_val_30371 === (3))){
var inst_30368 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30370__$1,inst_30368);
} else {
if((state_val_30371 === (4))){
var inst_30353 = (state_30370[(2)]);
var inst_30357 = process__$1(inst_30353);
var state_30370__$1 = state_30370;
if(cljs.core.truth_(inst_30357)){
var statearr_30379_33952 = state_30370__$1;
(statearr_30379_33952[(1)] = (5));

} else {
var statearr_30381_33953 = state_30370__$1;
(statearr_30381_33953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (5))){
var state_30370__$1 = state_30370;
var statearr_30382_33956 = state_30370__$1;
(statearr_30382_33956[(2)] = null);

(statearr_30382_33956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (6))){
var state_30370__$1 = state_30370;
var statearr_30384_33960 = state_30370__$1;
(statearr_30384_33960[(2)] = null);

(statearr_30384_33960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (7))){
var inst_30366 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30386_33961 = state_30370__$1;
(statearr_30386_33961[(2)] = inst_30366);

(statearr_30386_33961[(1)] = (3));


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
});})(__33944,c__29727__auto___33948,G__30341_33945,G__30341_33946__$1,n__5636__auto___33943,jobs,results,process__$1,async))
;
return ((function (__33944,switch__29269__auto__,c__29727__auto___33948,G__30341_33945,G__30341_33946__$1,n__5636__auto___33943,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____0 = (function (){
var statearr_30387 = [null,null,null,null,null,null,null];
(statearr_30387[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__);

(statearr_30387[(1)] = (1));

return statearr_30387;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____1 = (function (state_30370){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_30370);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e30388){var ex__29273__auto__ = e30388;
var statearr_30389_33963 = state_30370;
(statearr_30389_33963[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_30370[(4)]))){
var statearr_30390_33965 = state_30370;
(statearr_30390_33965[(1)] = cljs.core.first((state_30370[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33970 = state_30370;
state_30370 = G__33970;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__ = function(state_30370){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____1.call(this,state_30370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__;
})()
;})(__33944,switch__29269__auto__,c__29727__auto___33948,G__30341_33945,G__30341_33946__$1,n__5636__auto___33943,jobs,results,process__$1,async))
})();
var state__29729__auto__ = (function (){var statearr_30392 = f__29728__auto__();
(statearr_30392[(6)] = c__29727__auto___33948);

return statearr_30392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
});})(__33944,c__29727__auto___33948,G__30341_33945,G__30341_33946__$1,n__5636__auto___33943,jobs,results,process__$1,async))
);


break;
case "async":
var c__29727__auto___33971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33944,c__29727__auto___33971,G__30341_33945,G__30341_33946__$1,n__5636__auto___33943,jobs,results,process__$1,async){
return (function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = ((function (__33944,c__29727__auto___33971,G__30341_33945,G__30341_33946__$1,n__5636__auto___33943,jobs,results,process__$1,async){
return (function (state_30405){
var state_val_30406 = (state_30405[(1)]);
if((state_val_30406 === (1))){
var state_30405__$1 = state_30405;
var statearr_30413_33973 = state_30405__$1;
(statearr_30413_33973[(2)] = null);

(statearr_30413_33973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (2))){
var state_30405__$1 = state_30405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30405__$1,(4),jobs);
} else {
if((state_val_30406 === (3))){
var inst_30403 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30405__$1,inst_30403);
} else {
if((state_val_30406 === (4))){
var inst_30395 = (state_30405[(2)]);
var inst_30396 = async(inst_30395);
var state_30405__$1 = state_30405;
if(cljs.core.truth_(inst_30396)){
var statearr_30415_33978 = state_30405__$1;
(statearr_30415_33978[(1)] = (5));

} else {
var statearr_30416_33982 = state_30405__$1;
(statearr_30416_33982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (5))){
var state_30405__$1 = state_30405;
var statearr_30417_33987 = state_30405__$1;
(statearr_30417_33987[(2)] = null);

(statearr_30417_33987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (6))){
var state_30405__$1 = state_30405;
var statearr_30418_33992 = state_30405__$1;
(statearr_30418_33992[(2)] = null);

(statearr_30418_33992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (7))){
var inst_30401 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
var statearr_30419_33993 = state_30405__$1;
(statearr_30419_33993[(2)] = inst_30401);

(statearr_30419_33993[(1)] = (3));


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
});})(__33944,c__29727__auto___33971,G__30341_33945,G__30341_33946__$1,n__5636__auto___33943,jobs,results,process__$1,async))
;
return ((function (__33944,switch__29269__auto__,c__29727__auto___33971,G__30341_33945,G__30341_33946__$1,n__5636__auto___33943,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____0 = (function (){
var statearr_30421 = [null,null,null,null,null,null,null];
(statearr_30421[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__);

(statearr_30421[(1)] = (1));

return statearr_30421;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____1 = (function (state_30405){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_30405);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e30422){var ex__29273__auto__ = e30422;
var statearr_30423_34006 = state_30405;
(statearr_30423_34006[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_30405[(4)]))){
var statearr_30424_34007 = state_30405;
(statearr_30424_34007[(1)] = cljs.core.first((state_30405[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34008 = state_30405;
state_30405 = G__34008;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__ = function(state_30405){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____1.call(this,state_30405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__;
})()
;})(__33944,switch__29269__auto__,c__29727__auto___33971,G__30341_33945,G__30341_33946__$1,n__5636__auto___33943,jobs,results,process__$1,async))
})();
var state__29729__auto__ = (function (){var statearr_30435 = f__29728__auto__();
(statearr_30435[(6)] = c__29727__auto___33971);

return statearr_30435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
});})(__33944,c__29727__auto___33971,G__30341_33945,G__30341_33946__$1,n__5636__auto___33943,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30341_33946__$1)].join('')));

}

var G__34009 = (__33944 + (1));
__33944 = G__34009;
continue;
} else {
}
break;
}

var c__29727__auto___34010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_30460){
var state_val_30461 = (state_30460[(1)]);
if((state_val_30461 === (7))){
var inst_30456 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
var statearr_30465_34014 = state_30460__$1;
(statearr_30465_34014[(2)] = inst_30456);

(statearr_30465_34014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (1))){
var state_30460__$1 = state_30460;
var statearr_30469_34015 = state_30460__$1;
(statearr_30469_34015[(2)] = null);

(statearr_30469_34015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (4))){
var inst_30438 = (state_30460[(7)]);
var inst_30438__$1 = (state_30460[(2)]);
var inst_30439 = (inst_30438__$1 == null);
var state_30460__$1 = (function (){var statearr_30470 = state_30460;
(statearr_30470[(7)] = inst_30438__$1);

return statearr_30470;
})();
if(cljs.core.truth_(inst_30439)){
var statearr_30471_34016 = state_30460__$1;
(statearr_30471_34016[(1)] = (5));

} else {
var statearr_30474_34017 = state_30460__$1;
(statearr_30474_34017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (6))){
var inst_30438 = (state_30460[(7)]);
var inst_30443 = (state_30460[(8)]);
var inst_30443__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30447 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30448 = [inst_30438,inst_30443__$1];
var inst_30449 = (new cljs.core.PersistentVector(null,2,(5),inst_30447,inst_30448,null));
var state_30460__$1 = (function (){var statearr_30481 = state_30460;
(statearr_30481[(8)] = inst_30443__$1);

return statearr_30481;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30460__$1,(8),jobs,inst_30449);
} else {
if((state_val_30461 === (3))){
var inst_30458 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30460__$1,inst_30458);
} else {
if((state_val_30461 === (2))){
var state_30460__$1 = state_30460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30460__$1,(4),from);
} else {
if((state_val_30461 === (9))){
var inst_30453 = (state_30460[(2)]);
var state_30460__$1 = (function (){var statearr_30485 = state_30460;
(statearr_30485[(9)] = inst_30453);

return statearr_30485;
})();
var statearr_30486_34020 = state_30460__$1;
(statearr_30486_34020[(2)] = null);

(statearr_30486_34020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (5))){
var inst_30441 = cljs.core.async.close_BANG_(jobs);
var state_30460__$1 = state_30460;
var statearr_30487_34021 = state_30460__$1;
(statearr_30487_34021[(2)] = inst_30441);

(statearr_30487_34021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (8))){
var inst_30443 = (state_30460[(8)]);
var inst_30451 = (state_30460[(2)]);
var state_30460__$1 = (function (){var statearr_30488 = state_30460;
(statearr_30488[(10)] = inst_30451);

return statearr_30488;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30460__$1,(9),results,inst_30443);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____0 = (function (){
var statearr_30493 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__);

(statearr_30493[(1)] = (1));

return statearr_30493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____1 = (function (state_30460){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_30460);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e30501){var ex__29273__auto__ = e30501;
var statearr_30502_34026 = state_30460;
(statearr_30502_34026[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_30460[(4)]))){
var statearr_30504_34027 = state_30460;
(statearr_30504_34027[(1)] = cljs.core.first((state_30460[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34030 = state_30460;
state_30460 = G__34030;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__ = function(state_30460){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____1.call(this,state_30460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_30505 = f__29728__auto__();
(statearr_30505[(6)] = c__29727__auto___34010);

return statearr_30505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


var c__29727__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_30556){
var state_val_30557 = (state_30556[(1)]);
if((state_val_30557 === (7))){
var inst_30551 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
var statearr_30559_34041 = state_30556__$1;
(statearr_30559_34041[(2)] = inst_30551);

(statearr_30559_34041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (20))){
var state_30556__$1 = state_30556;
var statearr_30560_34046 = state_30556__$1;
(statearr_30560_34046[(2)] = null);

(statearr_30560_34046[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (1))){
var state_30556__$1 = state_30556;
var statearr_30561_34047 = state_30556__$1;
(statearr_30561_34047[(2)] = null);

(statearr_30561_34047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (4))){
var inst_30514 = (state_30556[(7)]);
var inst_30514__$1 = (state_30556[(2)]);
var inst_30515 = (inst_30514__$1 == null);
var state_30556__$1 = (function (){var statearr_30562 = state_30556;
(statearr_30562[(7)] = inst_30514__$1);

return statearr_30562;
})();
if(cljs.core.truth_(inst_30515)){
var statearr_30563_34052 = state_30556__$1;
(statearr_30563_34052[(1)] = (5));

} else {
var statearr_30565_34053 = state_30556__$1;
(statearr_30565_34053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (15))){
var inst_30533 = (state_30556[(8)]);
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30556__$1,(18),to,inst_30533);
} else {
if((state_val_30557 === (21))){
var inst_30546 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
var statearr_30573_34056 = state_30556__$1;
(statearr_30573_34056[(2)] = inst_30546);

(statearr_30573_34056[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (13))){
var inst_30548 = (state_30556[(2)]);
var state_30556__$1 = (function (){var statearr_30575 = state_30556;
(statearr_30575[(9)] = inst_30548);

return statearr_30575;
})();
var statearr_30576_34057 = state_30556__$1;
(statearr_30576_34057[(2)] = null);

(statearr_30576_34057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (6))){
var inst_30514 = (state_30556[(7)]);
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30556__$1,(11),inst_30514);
} else {
if((state_val_30557 === (17))){
var inst_30541 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
if(cljs.core.truth_(inst_30541)){
var statearr_30577_34060 = state_30556__$1;
(statearr_30577_34060[(1)] = (19));

} else {
var statearr_30579_34062 = state_30556__$1;
(statearr_30579_34062[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (3))){
var inst_30553 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30556__$1,inst_30553);
} else {
if((state_val_30557 === (12))){
var inst_30530 = (state_30556[(10)]);
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30556__$1,(14),inst_30530);
} else {
if((state_val_30557 === (2))){
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30556__$1,(4),results);
} else {
if((state_val_30557 === (19))){
var state_30556__$1 = state_30556;
var statearr_30580_34065 = state_30556__$1;
(statearr_30580_34065[(2)] = null);

(statearr_30580_34065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (11))){
var inst_30530 = (state_30556[(2)]);
var state_30556__$1 = (function (){var statearr_30581 = state_30556;
(statearr_30581[(10)] = inst_30530);

return statearr_30581;
})();
var statearr_30583_34066 = state_30556__$1;
(statearr_30583_34066[(2)] = null);

(statearr_30583_34066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (9))){
var state_30556__$1 = state_30556;
var statearr_30588_34067 = state_30556__$1;
(statearr_30588_34067[(2)] = null);

(statearr_30588_34067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (5))){
var state_30556__$1 = state_30556;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30590_34070 = state_30556__$1;
(statearr_30590_34070[(1)] = (8));

} else {
var statearr_30592_34072 = state_30556__$1;
(statearr_30592_34072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (14))){
var inst_30535 = (state_30556[(11)]);
var inst_30533 = (state_30556[(8)]);
var inst_30533__$1 = (state_30556[(2)]);
var inst_30534 = (inst_30533__$1 == null);
var inst_30535__$1 = cljs.core.not(inst_30534);
var state_30556__$1 = (function (){var statearr_30594 = state_30556;
(statearr_30594[(11)] = inst_30535__$1);

(statearr_30594[(8)] = inst_30533__$1);

return statearr_30594;
})();
if(inst_30535__$1){
var statearr_30596_34075 = state_30556__$1;
(statearr_30596_34075[(1)] = (15));

} else {
var statearr_30600_34076 = state_30556__$1;
(statearr_30600_34076[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (16))){
var inst_30535 = (state_30556[(11)]);
var state_30556__$1 = state_30556;
var statearr_30602_34077 = state_30556__$1;
(statearr_30602_34077[(2)] = inst_30535);

(statearr_30602_34077[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (10))){
var inst_30527 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
var statearr_30603_34078 = state_30556__$1;
(statearr_30603_34078[(2)] = inst_30527);

(statearr_30603_34078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (18))){
var inst_30538 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
var statearr_30608_34079 = state_30556__$1;
(statearr_30608_34079[(2)] = inst_30538);

(statearr_30608_34079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (8))){
var inst_30524 = cljs.core.async.close_BANG_(to);
var state_30556__$1 = state_30556;
var statearr_30612_34080 = state_30556__$1;
(statearr_30612_34080[(2)] = inst_30524);

(statearr_30612_34080[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____0 = (function (){
var statearr_30613 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__);

(statearr_30613[(1)] = (1));

return statearr_30613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____1 = (function (state_30556){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_30556);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e30617){var ex__29273__auto__ = e30617;
var statearr_30618_34083 = state_30556;
(statearr_30618_34083[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_30556[(4)]))){
var statearr_30619_34084 = state_30556;
(statearr_30619_34084[(1)] = cljs.core.first((state_30556[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34085 = state_30556;
state_30556 = G__34085;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__ = function(state_30556){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____1.call(this,state_30556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29270__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_30623 = f__29728__auto__();
(statearr_30623[(6)] = c__29727__auto__);

return statearr_30623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

return c__29727__auto__;
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
var G__30626 = arguments.length;
switch (G__30626) {
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
var G__30651 = arguments.length;
switch (G__30651) {
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
var G__30690 = arguments.length;
switch (G__30690) {
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
var c__29727__auto___34108 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_30731){
var state_val_30732 = (state_30731[(1)]);
if((state_val_30732 === (7))){
var inst_30721 = (state_30731[(2)]);
var state_30731__$1 = state_30731;
var statearr_30733_34112 = state_30731__$1;
(statearr_30733_34112[(2)] = inst_30721);

(statearr_30733_34112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (1))){
var state_30731__$1 = state_30731;
var statearr_30734_34116 = state_30731__$1;
(statearr_30734_34116[(2)] = null);

(statearr_30734_34116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (4))){
var inst_30702 = (state_30731[(7)]);
var inst_30702__$1 = (state_30731[(2)]);
var inst_30703 = (inst_30702__$1 == null);
var state_30731__$1 = (function (){var statearr_30736 = state_30731;
(statearr_30736[(7)] = inst_30702__$1);

return statearr_30736;
})();
if(cljs.core.truth_(inst_30703)){
var statearr_30741_34124 = state_30731__$1;
(statearr_30741_34124[(1)] = (5));

} else {
var statearr_30742_34125 = state_30731__$1;
(statearr_30742_34125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (13))){
var state_30731__$1 = state_30731;
var statearr_30747_34126 = state_30731__$1;
(statearr_30747_34126[(2)] = null);

(statearr_30747_34126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (6))){
var inst_30702 = (state_30731[(7)]);
var inst_30708 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30702) : p.call(null,inst_30702));
var state_30731__$1 = state_30731;
if(cljs.core.truth_(inst_30708)){
var statearr_30749_34132 = state_30731__$1;
(statearr_30749_34132[(1)] = (9));

} else {
var statearr_30753_34133 = state_30731__$1;
(statearr_30753_34133[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (3))){
var inst_30723 = (state_30731[(2)]);
var state_30731__$1 = state_30731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30731__$1,inst_30723);
} else {
if((state_val_30732 === (12))){
var state_30731__$1 = state_30731;
var statearr_30754_34137 = state_30731__$1;
(statearr_30754_34137[(2)] = null);

(statearr_30754_34137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (2))){
var state_30731__$1 = state_30731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30731__$1,(4),ch);
} else {
if((state_val_30732 === (11))){
var inst_30702 = (state_30731[(7)]);
var inst_30712 = (state_30731[(2)]);
var state_30731__$1 = state_30731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30731__$1,(8),inst_30712,inst_30702);
} else {
if((state_val_30732 === (9))){
var state_30731__$1 = state_30731;
var statearr_30762_34139 = state_30731__$1;
(statearr_30762_34139[(2)] = tc);

(statearr_30762_34139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (5))){
var inst_30705 = cljs.core.async.close_BANG_(tc);
var inst_30706 = cljs.core.async.close_BANG_(fc);
var state_30731__$1 = (function (){var statearr_30767 = state_30731;
(statearr_30767[(8)] = inst_30705);

return statearr_30767;
})();
var statearr_30770_34149 = state_30731__$1;
(statearr_30770_34149[(2)] = inst_30706);

(statearr_30770_34149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (14))){
var inst_30719 = (state_30731[(2)]);
var state_30731__$1 = state_30731;
var statearr_30772_34153 = state_30731__$1;
(statearr_30772_34153[(2)] = inst_30719);

(statearr_30772_34153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (10))){
var state_30731__$1 = state_30731;
var statearr_30777_34154 = state_30731__$1;
(statearr_30777_34154[(2)] = fc);

(statearr_30777_34154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30732 === (8))){
var inst_30714 = (state_30731[(2)]);
var state_30731__$1 = state_30731;
if(cljs.core.truth_(inst_30714)){
var statearr_30781_34155 = state_30731__$1;
(statearr_30781_34155[(1)] = (12));

} else {
var statearr_30782_34157 = state_30731__$1;
(statearr_30782_34157[(1)] = (13));

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
var cljs$core$async$state_machine__29270__auto__ = null;
var cljs$core$async$state_machine__29270__auto____0 = (function (){
var statearr_30785 = [null,null,null,null,null,null,null,null,null];
(statearr_30785[(0)] = cljs$core$async$state_machine__29270__auto__);

(statearr_30785[(1)] = (1));

return statearr_30785;
});
var cljs$core$async$state_machine__29270__auto____1 = (function (state_30731){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_30731);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e30788){var ex__29273__auto__ = e30788;
var statearr_30789_34163 = state_30731;
(statearr_30789_34163[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_30731[(4)]))){
var statearr_30792_34164 = state_30731;
(statearr_30792_34164[(1)] = cljs.core.first((state_30731[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34165 = state_30731;
state_30731 = G__34165;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$state_machine__29270__auto__ = function(state_30731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29270__auto____1.call(this,state_30731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29270__auto____0;
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29270__auto____1;
return cljs$core$async$state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_30802 = f__29728__auto__();
(statearr_30802[(6)] = c__29727__auto___34108);

return statearr_30802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
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
var c__29727__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_30848){
var state_val_30849 = (state_30848[(1)]);
if((state_val_30849 === (7))){
var inst_30844 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30853_34170 = state_30848__$1;
(statearr_30853_34170[(2)] = inst_30844);

(statearr_30853_34170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (1))){
var inst_30824 = init;
var inst_30825 = inst_30824;
var state_30848__$1 = (function (){var statearr_30854 = state_30848;
(statearr_30854[(7)] = inst_30825);

return statearr_30854;
})();
var statearr_30855_34171 = state_30848__$1;
(statearr_30855_34171[(2)] = null);

(statearr_30855_34171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (4))){
var inst_30828 = (state_30848[(8)]);
var inst_30828__$1 = (state_30848[(2)]);
var inst_30832 = (inst_30828__$1 == null);
var state_30848__$1 = (function (){var statearr_30858 = state_30848;
(statearr_30858[(8)] = inst_30828__$1);

return statearr_30858;
})();
if(cljs.core.truth_(inst_30832)){
var statearr_30859_34175 = state_30848__$1;
(statearr_30859_34175[(1)] = (5));

} else {
var statearr_30860_34176 = state_30848__$1;
(statearr_30860_34176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (6))){
var inst_30825 = (state_30848[(7)]);
var inst_30835 = (state_30848[(9)]);
var inst_30828 = (state_30848[(8)]);
var inst_30835__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30825,inst_30828) : f.call(null,inst_30825,inst_30828));
var inst_30836 = cljs.core.reduced_QMARK_(inst_30835__$1);
var state_30848__$1 = (function (){var statearr_30861 = state_30848;
(statearr_30861[(9)] = inst_30835__$1);

return statearr_30861;
})();
if(inst_30836){
var statearr_30862_34180 = state_30848__$1;
(statearr_30862_34180[(1)] = (8));

} else {
var statearr_30863_34181 = state_30848__$1;
(statearr_30863_34181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (3))){
var inst_30846 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30848__$1,inst_30846);
} else {
if((state_val_30849 === (2))){
var state_30848__$1 = state_30848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30848__$1,(4),ch);
} else {
if((state_val_30849 === (9))){
var inst_30835 = (state_30848[(9)]);
var inst_30825 = inst_30835;
var state_30848__$1 = (function (){var statearr_30870 = state_30848;
(statearr_30870[(7)] = inst_30825);

return statearr_30870;
})();
var statearr_30871_34182 = state_30848__$1;
(statearr_30871_34182[(2)] = null);

(statearr_30871_34182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (5))){
var inst_30825 = (state_30848[(7)]);
var state_30848__$1 = state_30848;
var statearr_30875_34184 = state_30848__$1;
(statearr_30875_34184[(2)] = inst_30825);

(statearr_30875_34184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (10))){
var inst_30842 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30878_34185 = state_30848__$1;
(statearr_30878_34185[(2)] = inst_30842);

(statearr_30878_34185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (8))){
var inst_30835 = (state_30848[(9)]);
var inst_30838 = cljs.core.deref(inst_30835);
var state_30848__$1 = state_30848;
var statearr_30879_34187 = state_30848__$1;
(statearr_30879_34187[(2)] = inst_30838);

(statearr_30879_34187[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29270__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29270__auto____0 = (function (){
var statearr_30881 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30881[(0)] = cljs$core$async$reduce_$_state_machine__29270__auto__);

(statearr_30881[(1)] = (1));

return statearr_30881;
});
var cljs$core$async$reduce_$_state_machine__29270__auto____1 = (function (state_30848){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_30848);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e30882){var ex__29273__auto__ = e30882;
var statearr_30883_34191 = state_30848;
(statearr_30883_34191[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_30848[(4)]))){
var statearr_30884_34193 = state_30848;
(statearr_30884_34193[(1)] = cljs.core.first((state_30848[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34194 = state_30848;
state_30848 = G__34194;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29270__auto__ = function(state_30848){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29270__auto____1.call(this,state_30848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29270__auto____0;
cljs$core$async$reduce_$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29270__auto____1;
return cljs$core$async$reduce_$_state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_30895 = f__29728__auto__();
(statearr_30895[(6)] = c__29727__auto__);

return statearr_30895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

return c__29727__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29727__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_30904){
var state_val_30905 = (state_30904[(1)]);
if((state_val_30905 === (1))){
var inst_30899 = cljs.core.async.reduce(f__$1,init,ch);
var state_30904__$1 = state_30904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30904__$1,(2),inst_30899);
} else {
if((state_val_30905 === (2))){
var inst_30901 = (state_30904[(2)]);
var inst_30902 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30901) : f__$1.call(null,inst_30901));
var state_30904__$1 = state_30904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30904__$1,inst_30902);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29270__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29270__auto____0 = (function (){
var statearr_30907 = [null,null,null,null,null,null,null];
(statearr_30907[(0)] = cljs$core$async$transduce_$_state_machine__29270__auto__);

(statearr_30907[(1)] = (1));

return statearr_30907;
});
var cljs$core$async$transduce_$_state_machine__29270__auto____1 = (function (state_30904){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_30904);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e30908){var ex__29273__auto__ = e30908;
var statearr_30909_34195 = state_30904;
(statearr_30909_34195[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_30904[(4)]))){
var statearr_30913_34196 = state_30904;
(statearr_30913_34196[(1)] = cljs.core.first((state_30904[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34197 = state_30904;
state_30904 = G__34197;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29270__auto__ = function(state_30904){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29270__auto____1.call(this,state_30904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29270__auto____0;
cljs$core$async$transduce_$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29270__auto____1;
return cljs$core$async$transduce_$_state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_30914 = f__29728__auto__();
(statearr_30914[(6)] = c__29727__auto__);

return statearr_30914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

return c__29727__auto__;
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
var G__30922 = arguments.length;
switch (G__30922) {
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
var c__29727__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_30990){
var state_val_30991 = (state_30990[(1)]);
if((state_val_30991 === (7))){
var inst_30962 = (state_30990[(2)]);
var state_30990__$1 = state_30990;
var statearr_30992_34199 = state_30990__$1;
(statearr_30992_34199[(2)] = inst_30962);

(statearr_30992_34199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (1))){
var inst_30947 = cljs.core.seq(coll);
var inst_30952 = inst_30947;
var state_30990__$1 = (function (){var statearr_30993 = state_30990;
(statearr_30993[(7)] = inst_30952);

return statearr_30993;
})();
var statearr_30994_34204 = state_30990__$1;
(statearr_30994_34204[(2)] = null);

(statearr_30994_34204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (4))){
var inst_30952 = (state_30990[(7)]);
var inst_30960 = cljs.core.first(inst_30952);
var state_30990__$1 = state_30990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30990__$1,(7),ch,inst_30960);
} else {
if((state_val_30991 === (13))){
var inst_30980 = (state_30990[(2)]);
var state_30990__$1 = state_30990;
var statearr_30995_34209 = state_30990__$1;
(statearr_30995_34209[(2)] = inst_30980);

(statearr_30995_34209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (6))){
var inst_30965 = (state_30990[(2)]);
var state_30990__$1 = state_30990;
if(cljs.core.truth_(inst_30965)){
var statearr_30996_34212 = state_30990__$1;
(statearr_30996_34212[(1)] = (8));

} else {
var statearr_30997_34213 = state_30990__$1;
(statearr_30997_34213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (3))){
var inst_30984 = (state_30990[(2)]);
var state_30990__$1 = state_30990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30990__$1,inst_30984);
} else {
if((state_val_30991 === (12))){
var state_30990__$1 = state_30990;
var statearr_31000_34218 = state_30990__$1;
(statearr_31000_34218[(2)] = null);

(statearr_31000_34218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (2))){
var inst_30952 = (state_30990[(7)]);
var state_30990__$1 = state_30990;
if(cljs.core.truth_(inst_30952)){
var statearr_31003_34220 = state_30990__$1;
(statearr_31003_34220[(1)] = (4));

} else {
var statearr_31004_34221 = state_30990__$1;
(statearr_31004_34221[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (11))){
var inst_30977 = cljs.core.async.close_BANG_(ch);
var state_30990__$1 = state_30990;
var statearr_31006_34222 = state_30990__$1;
(statearr_31006_34222[(2)] = inst_30977);

(statearr_31006_34222[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (9))){
var state_30990__$1 = state_30990;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31008_34223 = state_30990__$1;
(statearr_31008_34223[(1)] = (11));

} else {
var statearr_31011_34224 = state_30990__$1;
(statearr_31011_34224[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (5))){
var inst_30952 = (state_30990[(7)]);
var state_30990__$1 = state_30990;
var statearr_31013_34227 = state_30990__$1;
(statearr_31013_34227[(2)] = inst_30952);

(statearr_31013_34227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (10))){
var inst_30982 = (state_30990[(2)]);
var state_30990__$1 = state_30990;
var statearr_31014_34228 = state_30990__$1;
(statearr_31014_34228[(2)] = inst_30982);

(statearr_31014_34228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30991 === (8))){
var inst_30952 = (state_30990[(7)]);
var inst_30973 = cljs.core.next(inst_30952);
var inst_30952__$1 = inst_30973;
var state_30990__$1 = (function (){var statearr_31016 = state_30990;
(statearr_31016[(7)] = inst_30952__$1);

return statearr_31016;
})();
var statearr_31017_34231 = state_30990__$1;
(statearr_31017_34231[(2)] = null);

(statearr_31017_34231[(1)] = (2));


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
var cljs$core$async$state_machine__29270__auto__ = null;
var cljs$core$async$state_machine__29270__auto____0 = (function (){
var statearr_31021 = [null,null,null,null,null,null,null,null];
(statearr_31021[(0)] = cljs$core$async$state_machine__29270__auto__);

(statearr_31021[(1)] = (1));

return statearr_31021;
});
var cljs$core$async$state_machine__29270__auto____1 = (function (state_30990){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_30990);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e31022){var ex__29273__auto__ = e31022;
var statearr_31023_34239 = state_30990;
(statearr_31023_34239[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_30990[(4)]))){
var statearr_31024_34241 = state_30990;
(statearr_31024_34241[(1)] = cljs.core.first((state_30990[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34242 = state_30990;
state_30990 = G__34242;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$state_machine__29270__auto__ = function(state_30990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29270__auto____1.call(this,state_30990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29270__auto____0;
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29270__auto____1;
return cljs$core$async$state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_31025 = f__29728__auto__();
(statearr_31025[(6)] = c__29727__auto__);

return statearr_31025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

return c__29727__auto__;
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
var G__31029 = arguments.length;
switch (G__31029) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34250 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34250(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34251 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34251(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34256 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34256(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34265 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34265(m);
}
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31066 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31066 = (function (ch,cs,meta31067){
this.ch = ch;
this.cs = cs;
this.meta31067 = meta31067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31068,meta31067__$1){
var self__ = this;
var _31068__$1 = this;
return (new cljs.core.async.t_cljs$core$async31066(self__.ch,self__.cs,meta31067__$1));
}));

(cljs.core.async.t_cljs$core$async31066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31068){
var self__ = this;
var _31068__$1 = this;
return self__.meta31067;
}));

(cljs.core.async.t_cljs$core$async31066.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31066.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31066.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31066.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31066.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31066.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31067","meta31067",-291588158,null)], null);
}));

(cljs.core.async.t_cljs$core$async31066.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31066");

(cljs.core.async.t_cljs$core$async31066.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31066");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31066.
 */
cljs.core.async.__GT_t_cljs$core$async31066 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31066(ch__$1,cs__$1,meta31067){
return (new cljs.core.async.t_cljs$core$async31066(ch__$1,cs__$1,meta31067));
});

}

return (new cljs.core.async.t_cljs$core$async31066(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29727__auto___34286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_31244){
var state_val_31245 = (state_31244[(1)]);
if((state_val_31245 === (7))){
var inst_31236 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31251_34287 = state_31244__$1;
(statearr_31251_34287[(2)] = inst_31236);

(statearr_31251_34287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (20))){
var inst_31123 = (state_31244[(7)]);
var inst_31137 = cljs.core.first(inst_31123);
var inst_31140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31137,(0),null);
var inst_31144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31137,(1),null);
var state_31244__$1 = (function (){var statearr_31252 = state_31244;
(statearr_31252[(8)] = inst_31140);

return statearr_31252;
})();
if(cljs.core.truth_(inst_31144)){
var statearr_31255_34290 = state_31244__$1;
(statearr_31255_34290[(1)] = (22));

} else {
var statearr_31262_34291 = state_31244__$1;
(statearr_31262_34291[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (27))){
var inst_31177 = (state_31244[(9)]);
var inst_31179 = (state_31244[(10)]);
var inst_31088 = (state_31244[(11)]);
var inst_31185 = (state_31244[(12)]);
var inst_31185__$1 = cljs.core._nth(inst_31177,inst_31179);
var inst_31186 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31185__$1,inst_31088,done);
var state_31244__$1 = (function (){var statearr_31272 = state_31244;
(statearr_31272[(12)] = inst_31185__$1);

return statearr_31272;
})();
if(cljs.core.truth_(inst_31186)){
var statearr_31273_34293 = state_31244__$1;
(statearr_31273_34293[(1)] = (30));

} else {
var statearr_31274_34294 = state_31244__$1;
(statearr_31274_34294[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (1))){
var state_31244__$1 = state_31244;
var statearr_31275_34295 = state_31244__$1;
(statearr_31275_34295[(2)] = null);

(statearr_31275_34295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (24))){
var inst_31123 = (state_31244[(7)]);
var inst_31152 = (state_31244[(2)]);
var inst_31154 = cljs.core.next(inst_31123);
var inst_31099 = inst_31154;
var inst_31100 = null;
var inst_31101 = (0);
var inst_31102 = (0);
var state_31244__$1 = (function (){var statearr_31277 = state_31244;
(statearr_31277[(13)] = inst_31102);

(statearr_31277[(14)] = inst_31101);

(statearr_31277[(15)] = inst_31099);

(statearr_31277[(16)] = inst_31152);

(statearr_31277[(17)] = inst_31100);

return statearr_31277;
})();
var statearr_31279_34300 = state_31244__$1;
(statearr_31279_34300[(2)] = null);

(statearr_31279_34300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (39))){
var state_31244__$1 = state_31244;
var statearr_31298_34301 = state_31244__$1;
(statearr_31298_34301[(2)] = null);

(statearr_31298_34301[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (4))){
var inst_31088 = (state_31244[(11)]);
var inst_31088__$1 = (state_31244[(2)]);
var inst_31091 = (inst_31088__$1 == null);
var state_31244__$1 = (function (){var statearr_31302 = state_31244;
(statearr_31302[(11)] = inst_31088__$1);

return statearr_31302;
})();
if(cljs.core.truth_(inst_31091)){
var statearr_31303_34303 = state_31244__$1;
(statearr_31303_34303[(1)] = (5));

} else {
var statearr_31305_34304 = state_31244__$1;
(statearr_31305_34304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (15))){
var inst_31102 = (state_31244[(13)]);
var inst_31101 = (state_31244[(14)]);
var inst_31099 = (state_31244[(15)]);
var inst_31100 = (state_31244[(17)]);
var inst_31117 = (state_31244[(2)]);
var inst_31119 = (inst_31102 + (1));
var tmp31295 = inst_31101;
var tmp31296 = inst_31099;
var tmp31297 = inst_31100;
var inst_31099__$1 = tmp31296;
var inst_31100__$1 = tmp31297;
var inst_31101__$1 = tmp31295;
var inst_31102__$1 = inst_31119;
var state_31244__$1 = (function (){var statearr_31308 = state_31244;
(statearr_31308[(13)] = inst_31102__$1);

(statearr_31308[(14)] = inst_31101__$1);

(statearr_31308[(15)] = inst_31099__$1);

(statearr_31308[(18)] = inst_31117);

(statearr_31308[(17)] = inst_31100__$1);

return statearr_31308;
})();
var statearr_31312_34305 = state_31244__$1;
(statearr_31312_34305[(2)] = null);

(statearr_31312_34305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (21))){
var inst_31157 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31318_34306 = state_31244__$1;
(statearr_31318_34306[(2)] = inst_31157);

(statearr_31318_34306[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (31))){
var inst_31185 = (state_31244[(12)]);
var inst_31189 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31185);
var state_31244__$1 = state_31244;
var statearr_31325_34313 = state_31244__$1;
(statearr_31325_34313[(2)] = inst_31189);

(statearr_31325_34313[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (32))){
var inst_31177 = (state_31244[(9)]);
var inst_31179 = (state_31244[(10)]);
var inst_31176 = (state_31244[(19)]);
var inst_31178 = (state_31244[(20)]);
var inst_31191 = (state_31244[(2)]);
var inst_31193 = (inst_31179 + (1));
var tmp31315 = inst_31177;
var tmp31316 = inst_31176;
var tmp31317 = inst_31178;
var inst_31176__$1 = tmp31316;
var inst_31177__$1 = tmp31315;
var inst_31178__$1 = tmp31317;
var inst_31179__$1 = inst_31193;
var state_31244__$1 = (function (){var statearr_31332 = state_31244;
(statearr_31332[(9)] = inst_31177__$1);

(statearr_31332[(10)] = inst_31179__$1);

(statearr_31332[(19)] = inst_31176__$1);

(statearr_31332[(21)] = inst_31191);

(statearr_31332[(20)] = inst_31178__$1);

return statearr_31332;
})();
var statearr_31333_34322 = state_31244__$1;
(statearr_31333_34322[(2)] = null);

(statearr_31333_34322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (40))){
var inst_31205 = (state_31244[(22)]);
var inst_31209 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31205);
var state_31244__$1 = state_31244;
var statearr_31337_34327 = state_31244__$1;
(statearr_31337_34327[(2)] = inst_31209);

(statearr_31337_34327[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (33))){
var inst_31196 = (state_31244[(23)]);
var inst_31198 = cljs.core.chunked_seq_QMARK_(inst_31196);
var state_31244__$1 = state_31244;
if(inst_31198){
var statearr_31341_34328 = state_31244__$1;
(statearr_31341_34328[(1)] = (36));

} else {
var statearr_31343_34329 = state_31244__$1;
(statearr_31343_34329[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (13))){
var inst_31111 = (state_31244[(24)]);
var inst_31114 = cljs.core.async.close_BANG_(inst_31111);
var state_31244__$1 = state_31244;
var statearr_31344_34330 = state_31244__$1;
(statearr_31344_34330[(2)] = inst_31114);

(statearr_31344_34330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (22))){
var inst_31140 = (state_31244[(8)]);
var inst_31149 = cljs.core.async.close_BANG_(inst_31140);
var state_31244__$1 = state_31244;
var statearr_31346_34331 = state_31244__$1;
(statearr_31346_34331[(2)] = inst_31149);

(statearr_31346_34331[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (36))){
var inst_31196 = (state_31244[(23)]);
var inst_31200 = cljs.core.chunk_first(inst_31196);
var inst_31201 = cljs.core.chunk_rest(inst_31196);
var inst_31202 = cljs.core.count(inst_31200);
var inst_31176 = inst_31201;
var inst_31177 = inst_31200;
var inst_31178 = inst_31202;
var inst_31179 = (0);
var state_31244__$1 = (function (){var statearr_31349 = state_31244;
(statearr_31349[(9)] = inst_31177);

(statearr_31349[(10)] = inst_31179);

(statearr_31349[(19)] = inst_31176);

(statearr_31349[(20)] = inst_31178);

return statearr_31349;
})();
var statearr_31353_34335 = state_31244__$1;
(statearr_31353_34335[(2)] = null);

(statearr_31353_34335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (41))){
var inst_31196 = (state_31244[(23)]);
var inst_31212 = (state_31244[(2)]);
var inst_31213 = cljs.core.next(inst_31196);
var inst_31176 = inst_31213;
var inst_31177 = null;
var inst_31178 = (0);
var inst_31179 = (0);
var state_31244__$1 = (function (){var statearr_31355 = state_31244;
(statearr_31355[(25)] = inst_31212);

(statearr_31355[(9)] = inst_31177);

(statearr_31355[(10)] = inst_31179);

(statearr_31355[(19)] = inst_31176);

(statearr_31355[(20)] = inst_31178);

return statearr_31355;
})();
var statearr_31356_34337 = state_31244__$1;
(statearr_31356_34337[(2)] = null);

(statearr_31356_34337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (43))){
var state_31244__$1 = state_31244;
var statearr_31361_34340 = state_31244__$1;
(statearr_31361_34340[(2)] = null);

(statearr_31361_34340[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (29))){
var inst_31221 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31369_34341 = state_31244__$1;
(statearr_31369_34341[(2)] = inst_31221);

(statearr_31369_34341[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (44))){
var inst_31233 = (state_31244[(2)]);
var state_31244__$1 = (function (){var statearr_31370 = state_31244;
(statearr_31370[(26)] = inst_31233);

return statearr_31370;
})();
var statearr_31373_34349 = state_31244__$1;
(statearr_31373_34349[(2)] = null);

(statearr_31373_34349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (6))){
var inst_31167 = (state_31244[(27)]);
var inst_31166 = cljs.core.deref(cs);
var inst_31167__$1 = cljs.core.keys(inst_31166);
var inst_31168 = cljs.core.count(inst_31167__$1);
var inst_31169 = cljs.core.reset_BANG_(dctr,inst_31168);
var inst_31175 = cljs.core.seq(inst_31167__$1);
var inst_31176 = inst_31175;
var inst_31177 = null;
var inst_31178 = (0);
var inst_31179 = (0);
var state_31244__$1 = (function (){var statearr_31379 = state_31244;
(statearr_31379[(28)] = inst_31169);

(statearr_31379[(9)] = inst_31177);

(statearr_31379[(27)] = inst_31167__$1);

(statearr_31379[(10)] = inst_31179);

(statearr_31379[(19)] = inst_31176);

(statearr_31379[(20)] = inst_31178);

return statearr_31379;
})();
var statearr_31382_34354 = state_31244__$1;
(statearr_31382_34354[(2)] = null);

(statearr_31382_34354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (28))){
var inst_31176 = (state_31244[(19)]);
var inst_31196 = (state_31244[(23)]);
var inst_31196__$1 = cljs.core.seq(inst_31176);
var state_31244__$1 = (function (){var statearr_31385 = state_31244;
(statearr_31385[(23)] = inst_31196__$1);

return statearr_31385;
})();
if(inst_31196__$1){
var statearr_31386_34356 = state_31244__$1;
(statearr_31386_34356[(1)] = (33));

} else {
var statearr_31387_34357 = state_31244__$1;
(statearr_31387_34357[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (25))){
var inst_31179 = (state_31244[(10)]);
var inst_31178 = (state_31244[(20)]);
var inst_31182 = (inst_31179 < inst_31178);
var inst_31183 = inst_31182;
var state_31244__$1 = state_31244;
if(cljs.core.truth_(inst_31183)){
var statearr_31389_34359 = state_31244__$1;
(statearr_31389_34359[(1)] = (27));

} else {
var statearr_31390_34360 = state_31244__$1;
(statearr_31390_34360[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (34))){
var state_31244__$1 = state_31244;
var statearr_31396_34361 = state_31244__$1;
(statearr_31396_34361[(2)] = null);

(statearr_31396_34361[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (17))){
var state_31244__$1 = state_31244;
var statearr_31400_34368 = state_31244__$1;
(statearr_31400_34368[(2)] = null);

(statearr_31400_34368[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (3))){
var inst_31239 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31244__$1,inst_31239);
} else {
if((state_val_31245 === (12))){
var inst_31162 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31409_34371 = state_31244__$1;
(statearr_31409_34371[(2)] = inst_31162);

(statearr_31409_34371[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (2))){
var state_31244__$1 = state_31244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31244__$1,(4),ch);
} else {
if((state_val_31245 === (23))){
var state_31244__$1 = state_31244;
var statearr_31414_34373 = state_31244__$1;
(statearr_31414_34373[(2)] = null);

(statearr_31414_34373[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (35))){
var inst_31219 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31416_34374 = state_31244__$1;
(statearr_31416_34374[(2)] = inst_31219);

(statearr_31416_34374[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (19))){
var inst_31123 = (state_31244[(7)]);
var inst_31127 = cljs.core.chunk_first(inst_31123);
var inst_31128 = cljs.core.chunk_rest(inst_31123);
var inst_31129 = cljs.core.count(inst_31127);
var inst_31099 = inst_31128;
var inst_31100 = inst_31127;
var inst_31101 = inst_31129;
var inst_31102 = (0);
var state_31244__$1 = (function (){var statearr_31421 = state_31244;
(statearr_31421[(13)] = inst_31102);

(statearr_31421[(14)] = inst_31101);

(statearr_31421[(15)] = inst_31099);

(statearr_31421[(17)] = inst_31100);

return statearr_31421;
})();
var statearr_31422_34379 = state_31244__$1;
(statearr_31422_34379[(2)] = null);

(statearr_31422_34379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (11))){
var inst_31123 = (state_31244[(7)]);
var inst_31099 = (state_31244[(15)]);
var inst_31123__$1 = cljs.core.seq(inst_31099);
var state_31244__$1 = (function (){var statearr_31426 = state_31244;
(statearr_31426[(7)] = inst_31123__$1);

return statearr_31426;
})();
if(inst_31123__$1){
var statearr_31429_34384 = state_31244__$1;
(statearr_31429_34384[(1)] = (16));

} else {
var statearr_31431_34385 = state_31244__$1;
(statearr_31431_34385[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (9))){
var inst_31164 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31436_34386 = state_31244__$1;
(statearr_31436_34386[(2)] = inst_31164);

(statearr_31436_34386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (5))){
var inst_31097 = cljs.core.deref(cs);
var inst_31098 = cljs.core.seq(inst_31097);
var inst_31099 = inst_31098;
var inst_31100 = null;
var inst_31101 = (0);
var inst_31102 = (0);
var state_31244__$1 = (function (){var statearr_31438 = state_31244;
(statearr_31438[(13)] = inst_31102);

(statearr_31438[(14)] = inst_31101);

(statearr_31438[(15)] = inst_31099);

(statearr_31438[(17)] = inst_31100);

return statearr_31438;
})();
var statearr_31439_34395 = state_31244__$1;
(statearr_31439_34395[(2)] = null);

(statearr_31439_34395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (14))){
var state_31244__$1 = state_31244;
var statearr_31442_34399 = state_31244__$1;
(statearr_31442_34399[(2)] = null);

(statearr_31442_34399[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (45))){
var inst_31230 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31446_34400 = state_31244__$1;
(statearr_31446_34400[(2)] = inst_31230);

(statearr_31446_34400[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (26))){
var inst_31167 = (state_31244[(27)]);
var inst_31224 = (state_31244[(2)]);
var inst_31225 = cljs.core.seq(inst_31167);
var state_31244__$1 = (function (){var statearr_31450 = state_31244;
(statearr_31450[(29)] = inst_31224);

return statearr_31450;
})();
if(inst_31225){
var statearr_31456_34403 = state_31244__$1;
(statearr_31456_34403[(1)] = (42));

} else {
var statearr_31457_34406 = state_31244__$1;
(statearr_31457_34406[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (16))){
var inst_31123 = (state_31244[(7)]);
var inst_31125 = cljs.core.chunked_seq_QMARK_(inst_31123);
var state_31244__$1 = state_31244;
if(inst_31125){
var statearr_31461_34410 = state_31244__$1;
(statearr_31461_34410[(1)] = (19));

} else {
var statearr_31462_34411 = state_31244__$1;
(statearr_31462_34411[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (38))){
var inst_31216 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31469_34412 = state_31244__$1;
(statearr_31469_34412[(2)] = inst_31216);

(statearr_31469_34412[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (30))){
var state_31244__$1 = state_31244;
var statearr_31470_34414 = state_31244__$1;
(statearr_31470_34414[(2)] = null);

(statearr_31470_34414[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (10))){
var inst_31102 = (state_31244[(13)]);
var inst_31100 = (state_31244[(17)]);
var inst_31110 = cljs.core._nth(inst_31100,inst_31102);
var inst_31111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31110,(0),null);
var inst_31112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31110,(1),null);
var state_31244__$1 = (function (){var statearr_31472 = state_31244;
(statearr_31472[(24)] = inst_31111);

return statearr_31472;
})();
if(cljs.core.truth_(inst_31112)){
var statearr_31473_34425 = state_31244__$1;
(statearr_31473_34425[(1)] = (13));

} else {
var statearr_31475_34426 = state_31244__$1;
(statearr_31475_34426[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (18))){
var inst_31160 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31477_34427 = state_31244__$1;
(statearr_31477_34427[(2)] = inst_31160);

(statearr_31477_34427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (42))){
var state_31244__$1 = state_31244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31244__$1,(45),dchan);
} else {
if((state_val_31245 === (37))){
var inst_31088 = (state_31244[(11)]);
var inst_31205 = (state_31244[(22)]);
var inst_31196 = (state_31244[(23)]);
var inst_31205__$1 = cljs.core.first(inst_31196);
var inst_31206 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31205__$1,inst_31088,done);
var state_31244__$1 = (function (){var statearr_31481 = state_31244;
(statearr_31481[(22)] = inst_31205__$1);

return statearr_31481;
})();
if(cljs.core.truth_(inst_31206)){
var statearr_31484_34433 = state_31244__$1;
(statearr_31484_34433[(1)] = (39));

} else {
var statearr_31485_34437 = state_31244__$1;
(statearr_31485_34437[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (8))){
var inst_31102 = (state_31244[(13)]);
var inst_31101 = (state_31244[(14)]);
var inst_31104 = (inst_31102 < inst_31101);
var inst_31105 = inst_31104;
var state_31244__$1 = state_31244;
if(cljs.core.truth_(inst_31105)){
var statearr_31488_34439 = state_31244__$1;
(statearr_31488_34439[(1)] = (10));

} else {
var statearr_31491_34441 = state_31244__$1;
(statearr_31491_34441[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29270__auto__ = null;
var cljs$core$async$mult_$_state_machine__29270__auto____0 = (function (){
var statearr_31501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31501[(0)] = cljs$core$async$mult_$_state_machine__29270__auto__);

(statearr_31501[(1)] = (1));

return statearr_31501;
});
var cljs$core$async$mult_$_state_machine__29270__auto____1 = (function (state_31244){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_31244);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e31504){var ex__29273__auto__ = e31504;
var statearr_31505_34449 = state_31244;
(statearr_31505_34449[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_31244[(4)]))){
var statearr_31507_34450 = state_31244;
(statearr_31507_34450[(1)] = cljs.core.first((state_31244[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34452 = state_31244;
state_31244 = G__34452;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29270__auto__ = function(state_31244){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29270__auto____1.call(this,state_31244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29270__auto____0;
cljs$core$async$mult_$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29270__auto____1;
return cljs$core$async$mult_$_state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_31512 = f__29728__auto__();
(statearr_31512[(6)] = c__29727__auto___34286);

return statearr_31512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
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
var G__31524 = arguments.length;
switch (G__31524) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_34461 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34461(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34483 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34483(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34488 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34488(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34497 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34497(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34519 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34519(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34551 = arguments.length;
var i__5770__auto___34552 = (0);
while(true){
if((i__5770__auto___34552 < len__5769__auto___34551)){
args__5775__auto__.push((arguments[i__5770__auto___34552]));

var G__34557 = (i__5770__auto___34552 + (1));
i__5770__auto___34552 = G__34557;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31631){
var map__31632 = p__31631;
var map__31632__$1 = cljs.core.__destructure_map(map__31632);
var opts = map__31632__$1;
var statearr_31633_34567 = state;
(statearr_31633_34567[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31635_34570 = state;
(statearr_31635_34570[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_31641_34571 = state;
(statearr_31641_34571[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31619){
var G__31620 = cljs.core.first(seq31619);
var seq31619__$1 = cljs.core.next(seq31619);
var G__31622 = cljs.core.first(seq31619__$1);
var seq31619__$2 = cljs.core.next(seq31619__$1);
var G__31623 = cljs.core.first(seq31619__$2);
var seq31619__$3 = cljs.core.next(seq31619__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31620,G__31622,G__31623,seq31619__$3);
}));

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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31679 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31679 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31680){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31680 = meta31680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31681,meta31680__$1){
var self__ = this;
var _31681__$1 = this;
return (new cljs.core.async.t_cljs$core$async31679(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31680__$1));
}));

(cljs.core.async.t_cljs$core$async31679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31681){
var self__ = this;
var _31681__$1 = this;
return self__.meta31680;
}));

(cljs.core.async.t_cljs$core$async31679.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31679.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31679.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31679.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31679.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31679.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31679.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31679.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31680","meta31680",817375552,null)], null);
}));

(cljs.core.async.t_cljs$core$async31679.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31679");

(cljs.core.async.t_cljs$core$async31679.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31679");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31679.
 */
cljs.core.async.__GT_t_cljs$core$async31679 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31679(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31680){
return (new cljs.core.async.t_cljs$core$async31679(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31680));
});

}

return (new cljs.core.async.t_cljs$core$async31679(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29727__auto___34639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_31811){
var state_val_31812 = (state_31811[(1)]);
if((state_val_31812 === (7))){
var inst_31764 = (state_31811[(2)]);
var state_31811__$1 = state_31811;
if(cljs.core.truth_(inst_31764)){
var statearr_31817_34651 = state_31811__$1;
(statearr_31817_34651[(1)] = (8));

} else {
var statearr_31818_34652 = state_31811__$1;
(statearr_31818_34652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (20))){
var inst_31756 = (state_31811[(7)]);
var state_31811__$1 = state_31811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31811__$1,(23),out,inst_31756);
} else {
if((state_val_31812 === (1))){
var inst_31731 = calc_state();
var inst_31732 = cljs.core.__destructure_map(inst_31731);
var inst_31734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31732,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31732,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31732,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31739 = inst_31731;
var state_31811__$1 = (function (){var statearr_31825 = state_31811;
(statearr_31825[(8)] = inst_31735);

(statearr_31825[(9)] = inst_31734);

(statearr_31825[(10)] = inst_31737);

(statearr_31825[(11)] = inst_31739);

return statearr_31825;
})();
var statearr_31828_34655 = state_31811__$1;
(statearr_31828_34655[(2)] = null);

(statearr_31828_34655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (24))){
var inst_31747 = (state_31811[(12)]);
var inst_31739 = inst_31747;
var state_31811__$1 = (function (){var statearr_31830 = state_31811;
(statearr_31830[(11)] = inst_31739);

return statearr_31830;
})();
var statearr_31832_34656 = state_31811__$1;
(statearr_31832_34656[(2)] = null);

(statearr_31832_34656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (4))){
var inst_31758 = (state_31811[(13)]);
var inst_31756 = (state_31811[(7)]);
var inst_31755 = (state_31811[(2)]);
var inst_31756__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31755,(0),null);
var inst_31757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31755,(1),null);
var inst_31758__$1 = (inst_31756__$1 == null);
var state_31811__$1 = (function (){var statearr_31834 = state_31811;
(statearr_31834[(13)] = inst_31758__$1);

(statearr_31834[(7)] = inst_31756__$1);

(statearr_31834[(14)] = inst_31757);

return statearr_31834;
})();
if(cljs.core.truth_(inst_31758__$1)){
var statearr_31836_34659 = state_31811__$1;
(statearr_31836_34659[(1)] = (5));

} else {
var statearr_31837_34660 = state_31811__$1;
(statearr_31837_34660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (15))){
var inst_31779 = (state_31811[(15)]);
var inst_31748 = (state_31811[(16)]);
var inst_31779__$1 = cljs.core.empty_QMARK_(inst_31748);
var state_31811__$1 = (function (){var statearr_31838 = state_31811;
(statearr_31838[(15)] = inst_31779__$1);

return statearr_31838;
})();
if(inst_31779__$1){
var statearr_31840_34661 = state_31811__$1;
(statearr_31840_34661[(1)] = (17));

} else {
var statearr_31842_34663 = state_31811__$1;
(statearr_31842_34663[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (21))){
var inst_31747 = (state_31811[(12)]);
var inst_31739 = inst_31747;
var state_31811__$1 = (function (){var statearr_31845 = state_31811;
(statearr_31845[(11)] = inst_31739);

return statearr_31845;
})();
var statearr_31846_34673 = state_31811__$1;
(statearr_31846_34673[(2)] = null);

(statearr_31846_34673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (13))){
var inst_31771 = (state_31811[(2)]);
var inst_31772 = calc_state();
var inst_31739 = inst_31772;
var state_31811__$1 = (function (){var statearr_31848 = state_31811;
(statearr_31848[(17)] = inst_31771);

(statearr_31848[(11)] = inst_31739);

return statearr_31848;
})();
var statearr_31849_34675 = state_31811__$1;
(statearr_31849_34675[(2)] = null);

(statearr_31849_34675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (22))){
var inst_31804 = (state_31811[(2)]);
var state_31811__$1 = state_31811;
var statearr_31852_34679 = state_31811__$1;
(statearr_31852_34679[(2)] = inst_31804);

(statearr_31852_34679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (6))){
var inst_31757 = (state_31811[(14)]);
var inst_31762 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31757,change);
var state_31811__$1 = state_31811;
var statearr_31857_34681 = state_31811__$1;
(statearr_31857_34681[(2)] = inst_31762);

(statearr_31857_34681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (25))){
var state_31811__$1 = state_31811;
var statearr_31859_34685 = state_31811__$1;
(statearr_31859_34685[(2)] = null);

(statearr_31859_34685[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (17))){
var inst_31749 = (state_31811[(18)]);
var inst_31757 = (state_31811[(14)]);
var inst_31782 = (inst_31749.cljs$core$IFn$_invoke$arity$1 ? inst_31749.cljs$core$IFn$_invoke$arity$1(inst_31757) : inst_31749.call(null,inst_31757));
var inst_31783 = cljs.core.not(inst_31782);
var state_31811__$1 = state_31811;
var statearr_31861_34697 = state_31811__$1;
(statearr_31861_34697[(2)] = inst_31783);

(statearr_31861_34697[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (3))){
var inst_31808 = (state_31811[(2)]);
var state_31811__$1 = state_31811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31811__$1,inst_31808);
} else {
if((state_val_31812 === (12))){
var state_31811__$1 = state_31811;
var statearr_31862_34705 = state_31811__$1;
(statearr_31862_34705[(2)] = null);

(statearr_31862_34705[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (2))){
var inst_31739 = (state_31811[(11)]);
var inst_31747 = (state_31811[(12)]);
var inst_31747__$1 = cljs.core.__destructure_map(inst_31739);
var inst_31748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31747__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31747__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31747__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31811__$1 = (function (){var statearr_31875 = state_31811;
(statearr_31875[(18)] = inst_31749);

(statearr_31875[(16)] = inst_31748);

(statearr_31875[(12)] = inst_31747__$1);

return statearr_31875;
})();
return cljs.core.async.ioc_alts_BANG_(state_31811__$1,(4),inst_31750);
} else {
if((state_val_31812 === (23))){
var inst_31792 = (state_31811[(2)]);
var state_31811__$1 = state_31811;
if(cljs.core.truth_(inst_31792)){
var statearr_31876_34716 = state_31811__$1;
(statearr_31876_34716[(1)] = (24));

} else {
var statearr_31878_34717 = state_31811__$1;
(statearr_31878_34717[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (19))){
var inst_31786 = (state_31811[(2)]);
var state_31811__$1 = state_31811;
var statearr_31879_34719 = state_31811__$1;
(statearr_31879_34719[(2)] = inst_31786);

(statearr_31879_34719[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (11))){
var inst_31757 = (state_31811[(14)]);
var inst_31768 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31757);
var state_31811__$1 = state_31811;
var statearr_31888_34725 = state_31811__$1;
(statearr_31888_34725[(2)] = inst_31768);

(statearr_31888_34725[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (9))){
var inst_31748 = (state_31811[(16)]);
var inst_31757 = (state_31811[(14)]);
var inst_31776 = (state_31811[(19)]);
var inst_31776__$1 = (inst_31748.cljs$core$IFn$_invoke$arity$1 ? inst_31748.cljs$core$IFn$_invoke$arity$1(inst_31757) : inst_31748.call(null,inst_31757));
var state_31811__$1 = (function (){var statearr_31889 = state_31811;
(statearr_31889[(19)] = inst_31776__$1);

return statearr_31889;
})();
if(cljs.core.truth_(inst_31776__$1)){
var statearr_31891_34731 = state_31811__$1;
(statearr_31891_34731[(1)] = (14));

} else {
var statearr_31893_34736 = state_31811__$1;
(statearr_31893_34736[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (5))){
var inst_31758 = (state_31811[(13)]);
var state_31811__$1 = state_31811;
var statearr_31895_34737 = state_31811__$1;
(statearr_31895_34737[(2)] = inst_31758);

(statearr_31895_34737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (14))){
var inst_31776 = (state_31811[(19)]);
var state_31811__$1 = state_31811;
var statearr_31900_34744 = state_31811__$1;
(statearr_31900_34744[(2)] = inst_31776);

(statearr_31900_34744[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (26))){
var inst_31799 = (state_31811[(2)]);
var state_31811__$1 = state_31811;
var statearr_31904_34747 = state_31811__$1;
(statearr_31904_34747[(2)] = inst_31799);

(statearr_31904_34747[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (16))){
var inst_31789 = (state_31811[(2)]);
var state_31811__$1 = state_31811;
if(cljs.core.truth_(inst_31789)){
var statearr_31905_34748 = state_31811__$1;
(statearr_31905_34748[(1)] = (20));

} else {
var statearr_31907_34749 = state_31811__$1;
(statearr_31907_34749[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (10))){
var inst_31806 = (state_31811[(2)]);
var state_31811__$1 = state_31811;
var statearr_31908_34751 = state_31811__$1;
(statearr_31908_34751[(2)] = inst_31806);

(statearr_31908_34751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (18))){
var inst_31779 = (state_31811[(15)]);
var state_31811__$1 = state_31811;
var statearr_31912_34754 = state_31811__$1;
(statearr_31912_34754[(2)] = inst_31779);

(statearr_31912_34754[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (8))){
var inst_31756 = (state_31811[(7)]);
var inst_31766 = (inst_31756 == null);
var state_31811__$1 = state_31811;
if(cljs.core.truth_(inst_31766)){
var statearr_31918_34755 = state_31811__$1;
(statearr_31918_34755[(1)] = (11));

} else {
var statearr_31920_34764 = state_31811__$1;
(statearr_31920_34764[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__29270__auto__ = null;
var cljs$core$async$mix_$_state_machine__29270__auto____0 = (function (){
var statearr_31930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31930[(0)] = cljs$core$async$mix_$_state_machine__29270__auto__);

(statearr_31930[(1)] = (1));

return statearr_31930;
});
var cljs$core$async$mix_$_state_machine__29270__auto____1 = (function (state_31811){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_31811);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e31932){var ex__29273__auto__ = e31932;
var statearr_31934_34777 = state_31811;
(statearr_31934_34777[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_31811[(4)]))){
var statearr_31936_34778 = state_31811;
(statearr_31936_34778[(1)] = cljs.core.first((state_31811[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34779 = state_31811;
state_31811 = G__34779;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29270__auto__ = function(state_31811){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29270__auto____1.call(this,state_31811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29270__auto____0;
cljs$core$async$mix_$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29270__auto____1;
return cljs$core$async$mix_$_state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_31945 = f__29728__auto__();
(statearr_31945[(6)] = c__29727__auto___34639);

return statearr_31945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_34786 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34786(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34797 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34797(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34808 = (function() {
var G__34809 = null;
var G__34809__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34809__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34809 = function(p,v){
switch(arguments.length){
case 1:
return G__34809__1.call(this,p);
case 2:
return G__34809__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34809.cljs$core$IFn$_invoke$arity$1 = G__34809__1;
G__34809.cljs$core$IFn$_invoke$arity$2 = G__34809__2;
return G__34809;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32038 = arguments.length;
switch (G__32038) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34808(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34808(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__32070 = arguments.length;
switch (G__32070) {
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
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32054_SHARP_){
if(cljs.core.truth_((p1__32054_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32054_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32054_SHARP_.call(null,topic)))){
return p1__32054_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32054_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32095 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32095 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32096){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32096 = meta32096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32097,meta32096__$1){
var self__ = this;
var _32097__$1 = this;
return (new cljs.core.async.t_cljs$core$async32095(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32096__$1));
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32097){
var self__ = this;
var _32097__$1 = this;
return self__.meta32096;
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32095.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32096","meta32096",-651993443,null)], null);
}));

(cljs.core.async.t_cljs$core$async32095.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32095");

(cljs.core.async.t_cljs$core$async32095.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32095");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32095.
 */
cljs.core.async.__GT_t_cljs$core$async32095 = (function cljs$core$async$__GT_t_cljs$core$async32095(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32096){
return (new cljs.core.async.t_cljs$core$async32095(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32096));
});

}

return (new cljs.core.async.t_cljs$core$async32095(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29727__auto___34903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_32233){
var state_val_32234 = (state_32233[(1)]);
if((state_val_32234 === (7))){
var inst_32224 = (state_32233[(2)]);
var state_32233__$1 = state_32233;
var statearr_32237_34915 = state_32233__$1;
(statearr_32237_34915[(2)] = inst_32224);

(statearr_32237_34915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (20))){
var state_32233__$1 = state_32233;
var statearr_32238_34916 = state_32233__$1;
(statearr_32238_34916[(2)] = null);

(statearr_32238_34916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (1))){
var state_32233__$1 = state_32233;
var statearr_32241_34923 = state_32233__$1;
(statearr_32241_34923[(2)] = null);

(statearr_32241_34923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (24))){
var inst_32201 = (state_32233[(7)]);
var inst_32215 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32201);
var state_32233__$1 = state_32233;
var statearr_32248_34929 = state_32233__$1;
(statearr_32248_34929[(2)] = inst_32215);

(statearr_32248_34929[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (4))){
var inst_32137 = (state_32233[(8)]);
var inst_32137__$1 = (state_32233[(2)]);
var inst_32142 = (inst_32137__$1 == null);
var state_32233__$1 = (function (){var statearr_32249 = state_32233;
(statearr_32249[(8)] = inst_32137__$1);

return statearr_32249;
})();
if(cljs.core.truth_(inst_32142)){
var statearr_32251_34933 = state_32233__$1;
(statearr_32251_34933[(1)] = (5));

} else {
var statearr_32253_34940 = state_32233__$1;
(statearr_32253_34940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (15))){
var inst_32195 = (state_32233[(2)]);
var state_32233__$1 = state_32233;
var statearr_32256_34947 = state_32233__$1;
(statearr_32256_34947[(2)] = inst_32195);

(statearr_32256_34947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (21))){
var inst_32220 = (state_32233[(2)]);
var state_32233__$1 = (function (){var statearr_32259 = state_32233;
(statearr_32259[(9)] = inst_32220);

return statearr_32259;
})();
var statearr_32260_34957 = state_32233__$1;
(statearr_32260_34957[(2)] = null);

(statearr_32260_34957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (13))){
var inst_32171 = (state_32233[(10)]);
var inst_32176 = cljs.core.chunked_seq_QMARK_(inst_32171);
var state_32233__$1 = state_32233;
if(inst_32176){
var statearr_32261_34963 = state_32233__$1;
(statearr_32261_34963[(1)] = (16));

} else {
var statearr_32262_34965 = state_32233__$1;
(statearr_32262_34965[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (22))){
var inst_32212 = (state_32233[(2)]);
var state_32233__$1 = state_32233;
if(cljs.core.truth_(inst_32212)){
var statearr_32263_34969 = state_32233__$1;
(statearr_32263_34969[(1)] = (23));

} else {
var statearr_32265_34970 = state_32233__$1;
(statearr_32265_34970[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (6))){
var inst_32201 = (state_32233[(7)]);
var inst_32137 = (state_32233[(8)]);
var inst_32205 = (state_32233[(11)]);
var inst_32201__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32137) : topic_fn.call(null,inst_32137));
var inst_32204 = cljs.core.deref(mults);
var inst_32205__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32204,inst_32201__$1);
var state_32233__$1 = (function (){var statearr_32271 = state_32233;
(statearr_32271[(7)] = inst_32201__$1);

(statearr_32271[(11)] = inst_32205__$1);

return statearr_32271;
})();
if(cljs.core.truth_(inst_32205__$1)){
var statearr_32273_34978 = state_32233__$1;
(statearr_32273_34978[(1)] = (19));

} else {
var statearr_32274_34979 = state_32233__$1;
(statearr_32274_34979[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (25))){
var inst_32217 = (state_32233[(2)]);
var state_32233__$1 = state_32233;
var statearr_32275_34984 = state_32233__$1;
(statearr_32275_34984[(2)] = inst_32217);

(statearr_32275_34984[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (17))){
var inst_32171 = (state_32233[(10)]);
var inst_32184 = cljs.core.first(inst_32171);
var inst_32187 = cljs.core.async.muxch_STAR_(inst_32184);
var inst_32188 = cljs.core.async.close_BANG_(inst_32187);
var inst_32189 = cljs.core.next(inst_32171);
var inst_32151 = inst_32189;
var inst_32152 = null;
var inst_32153 = (0);
var inst_32154 = (0);
var state_32233__$1 = (function (){var statearr_32277 = state_32233;
(statearr_32277[(12)] = inst_32153);

(statearr_32277[(13)] = inst_32188);

(statearr_32277[(14)] = inst_32152);

(statearr_32277[(15)] = inst_32154);

(statearr_32277[(16)] = inst_32151);

return statearr_32277;
})();
var statearr_32279_34997 = state_32233__$1;
(statearr_32279_34997[(2)] = null);

(statearr_32279_34997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (3))){
var inst_32226 = (state_32233[(2)]);
var state_32233__$1 = state_32233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32233__$1,inst_32226);
} else {
if((state_val_32234 === (12))){
var inst_32197 = (state_32233[(2)]);
var state_32233__$1 = state_32233;
var statearr_32284_35002 = state_32233__$1;
(statearr_32284_35002[(2)] = inst_32197);

(statearr_32284_35002[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (2))){
var state_32233__$1 = state_32233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32233__$1,(4),ch);
} else {
if((state_val_32234 === (23))){
var state_32233__$1 = state_32233;
var statearr_32288_35007 = state_32233__$1;
(statearr_32288_35007[(2)] = null);

(statearr_32288_35007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (19))){
var inst_32137 = (state_32233[(8)]);
var inst_32205 = (state_32233[(11)]);
var inst_32210 = cljs.core.async.muxch_STAR_(inst_32205);
var state_32233__$1 = state_32233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32233__$1,(22),inst_32210,inst_32137);
} else {
if((state_val_32234 === (11))){
var inst_32151 = (state_32233[(16)]);
var inst_32171 = (state_32233[(10)]);
var inst_32171__$1 = cljs.core.seq(inst_32151);
var state_32233__$1 = (function (){var statearr_32297 = state_32233;
(statearr_32297[(10)] = inst_32171__$1);

return statearr_32297;
})();
if(inst_32171__$1){
var statearr_32300_35022 = state_32233__$1;
(statearr_32300_35022[(1)] = (13));

} else {
var statearr_32301_35023 = state_32233__$1;
(statearr_32301_35023[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (9))){
var inst_32199 = (state_32233[(2)]);
var state_32233__$1 = state_32233;
var statearr_32303_35030 = state_32233__$1;
(statearr_32303_35030[(2)] = inst_32199);

(statearr_32303_35030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (5))){
var inst_32148 = cljs.core.deref(mults);
var inst_32149 = cljs.core.vals(inst_32148);
var inst_32150 = cljs.core.seq(inst_32149);
var inst_32151 = inst_32150;
var inst_32152 = null;
var inst_32153 = (0);
var inst_32154 = (0);
var state_32233__$1 = (function (){var statearr_32309 = state_32233;
(statearr_32309[(12)] = inst_32153);

(statearr_32309[(14)] = inst_32152);

(statearr_32309[(15)] = inst_32154);

(statearr_32309[(16)] = inst_32151);

return statearr_32309;
})();
var statearr_32313_35052 = state_32233__$1;
(statearr_32313_35052[(2)] = null);

(statearr_32313_35052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (14))){
var state_32233__$1 = state_32233;
var statearr_32317_35055 = state_32233__$1;
(statearr_32317_35055[(2)] = null);

(statearr_32317_35055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (16))){
var inst_32171 = (state_32233[(10)]);
var inst_32178 = cljs.core.chunk_first(inst_32171);
var inst_32179 = cljs.core.chunk_rest(inst_32171);
var inst_32180 = cljs.core.count(inst_32178);
var inst_32151 = inst_32179;
var inst_32152 = inst_32178;
var inst_32153 = inst_32180;
var inst_32154 = (0);
var state_32233__$1 = (function (){var statearr_32322 = state_32233;
(statearr_32322[(12)] = inst_32153);

(statearr_32322[(14)] = inst_32152);

(statearr_32322[(15)] = inst_32154);

(statearr_32322[(16)] = inst_32151);

return statearr_32322;
})();
var statearr_32324_35062 = state_32233__$1;
(statearr_32324_35062[(2)] = null);

(statearr_32324_35062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (10))){
var inst_32153 = (state_32233[(12)]);
var inst_32152 = (state_32233[(14)]);
var inst_32154 = (state_32233[(15)]);
var inst_32151 = (state_32233[(16)]);
var inst_32164 = cljs.core._nth(inst_32152,inst_32154);
var inst_32165 = cljs.core.async.muxch_STAR_(inst_32164);
var inst_32166 = cljs.core.async.close_BANG_(inst_32165);
var inst_32167 = (inst_32154 + (1));
var tmp32314 = inst_32153;
var tmp32315 = inst_32152;
var tmp32316 = inst_32151;
var inst_32151__$1 = tmp32316;
var inst_32152__$1 = tmp32315;
var inst_32153__$1 = tmp32314;
var inst_32154__$1 = inst_32167;
var state_32233__$1 = (function (){var statearr_32327 = state_32233;
(statearr_32327[(12)] = inst_32153__$1);

(statearr_32327[(14)] = inst_32152__$1);

(statearr_32327[(15)] = inst_32154__$1);

(statearr_32327[(17)] = inst_32166);

(statearr_32327[(16)] = inst_32151__$1);

return statearr_32327;
})();
var statearr_32329_35076 = state_32233__$1;
(statearr_32329_35076[(2)] = null);

(statearr_32329_35076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (18))){
var inst_32192 = (state_32233[(2)]);
var state_32233__$1 = state_32233;
var statearr_32330_35082 = state_32233__$1;
(statearr_32330_35082[(2)] = inst_32192);

(statearr_32330_35082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32234 === (8))){
var inst_32153 = (state_32233[(12)]);
var inst_32154 = (state_32233[(15)]);
var inst_32159 = (inst_32154 < inst_32153);
var inst_32161 = inst_32159;
var state_32233__$1 = state_32233;
if(cljs.core.truth_(inst_32161)){
var statearr_32331_35098 = state_32233__$1;
(statearr_32331_35098[(1)] = (10));

} else {
var statearr_32332_35099 = state_32233__$1;
(statearr_32332_35099[(1)] = (11));

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
var cljs$core$async$state_machine__29270__auto__ = null;
var cljs$core$async$state_machine__29270__auto____0 = (function (){
var statearr_32335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32335[(0)] = cljs$core$async$state_machine__29270__auto__);

(statearr_32335[(1)] = (1));

return statearr_32335;
});
var cljs$core$async$state_machine__29270__auto____1 = (function (state_32233){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_32233);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e32336){var ex__29273__auto__ = e32336;
var statearr_32339_35112 = state_32233;
(statearr_32339_35112[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_32233[(4)]))){
var statearr_32340_35113 = state_32233;
(statearr_32340_35113[(1)] = cljs.core.first((state_32233[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35118 = state_32233;
state_32233 = G__35118;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$state_machine__29270__auto__ = function(state_32233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29270__auto____1.call(this,state_32233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29270__auto____0;
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29270__auto____1;
return cljs$core$async$state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_32342 = f__29728__auto__();
(statearr_32342[(6)] = c__29727__auto___34903);

return statearr_32342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
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
var G__32346 = arguments.length;
switch (G__32346) {
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
var G__32354 = arguments.length;
switch (G__32354) {
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
var G__32361 = arguments.length;
switch (G__32361) {
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
var c__29727__auto___35148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_32437){
var state_val_32438 = (state_32437[(1)]);
if((state_val_32438 === (7))){
var state_32437__$1 = state_32437;
var statearr_32446_35149 = state_32437__$1;
(statearr_32446_35149[(2)] = null);

(statearr_32446_35149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (1))){
var state_32437__$1 = state_32437;
var statearr_32449_35150 = state_32437__$1;
(statearr_32449_35150[(2)] = null);

(statearr_32449_35150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (4))){
var inst_32380 = (state_32437[(7)]);
var inst_32379 = (state_32437[(8)]);
var inst_32382 = (inst_32380 < inst_32379);
var state_32437__$1 = state_32437;
if(cljs.core.truth_(inst_32382)){
var statearr_32457_35156 = state_32437__$1;
(statearr_32457_35156[(1)] = (6));

} else {
var statearr_32458_35157 = state_32437__$1;
(statearr_32458_35157[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (15))){
var inst_32415 = (state_32437[(9)]);
var inst_32428 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32415);
var state_32437__$1 = state_32437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32437__$1,(17),out,inst_32428);
} else {
if((state_val_32438 === (13))){
var inst_32415 = (state_32437[(9)]);
var inst_32415__$1 = (state_32437[(2)]);
var inst_32416 = cljs.core.some(cljs.core.nil_QMARK_,inst_32415__$1);
var state_32437__$1 = (function (){var statearr_32462 = state_32437;
(statearr_32462[(9)] = inst_32415__$1);

return statearr_32462;
})();
if(cljs.core.truth_(inst_32416)){
var statearr_32463_35160 = state_32437__$1;
(statearr_32463_35160[(1)] = (14));

} else {
var statearr_32464_35168 = state_32437__$1;
(statearr_32464_35168[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (6))){
var state_32437__$1 = state_32437;
var statearr_32469_35169 = state_32437__$1;
(statearr_32469_35169[(2)] = null);

(statearr_32469_35169[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (17))){
var inst_32430 = (state_32437[(2)]);
var state_32437__$1 = (function (){var statearr_32481 = state_32437;
(statearr_32481[(10)] = inst_32430);

return statearr_32481;
})();
var statearr_32482_35171 = state_32437__$1;
(statearr_32482_35171[(2)] = null);

(statearr_32482_35171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (3))){
var inst_32435 = (state_32437[(2)]);
var state_32437__$1 = state_32437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32437__$1,inst_32435);
} else {
if((state_val_32438 === (12))){
var _ = (function (){var statearr_32498 = state_32437;
(statearr_32498[(4)] = cljs.core.rest((state_32437[(4)])));

return statearr_32498;
})();
var state_32437__$1 = state_32437;
var ex32476 = (state_32437__$1[(2)]);
var statearr_32506_35174 = state_32437__$1;
(statearr_32506_35174[(5)] = ex32476);


if((ex32476 instanceof Object)){
var statearr_32507_35175 = state_32437__$1;
(statearr_32507_35175[(1)] = (11));

(statearr_32507_35175[(5)] = null);

} else {
throw ex32476;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (2))){
var inst_32378 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32379 = cnt;
var inst_32380 = (0);
var state_32437__$1 = (function (){var statearr_32532 = state_32437;
(statearr_32532[(7)] = inst_32380);

(statearr_32532[(11)] = inst_32378);

(statearr_32532[(8)] = inst_32379);

return statearr_32532;
})();
var statearr_32534_35179 = state_32437__$1;
(statearr_32534_35179[(2)] = null);

(statearr_32534_35179[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (11))){
var inst_32388 = (state_32437[(2)]);
var inst_32393 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32437__$1 = (function (){var statearr_32540 = state_32437;
(statearr_32540[(12)] = inst_32388);

return statearr_32540;
})();
var statearr_32542_35180 = state_32437__$1;
(statearr_32542_35180[(2)] = inst_32393);

(statearr_32542_35180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (9))){
var inst_32380 = (state_32437[(7)]);
var _ = (function (){var statearr_32551 = state_32437;
(statearr_32551[(4)] = cljs.core.cons((12),(state_32437[(4)])));

return statearr_32551;
})();
var inst_32399 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32380) : chs__$1.call(null,inst_32380));
var inst_32400 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32380) : done.call(null,inst_32380));
var inst_32401 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32399,inst_32400);
var ___$1 = (function (){var statearr_32552 = state_32437;
(statearr_32552[(4)] = cljs.core.rest((state_32437[(4)])));

return statearr_32552;
})();
var state_32437__$1 = state_32437;
var statearr_32553_35186 = state_32437__$1;
(statearr_32553_35186[(2)] = inst_32401);

(statearr_32553_35186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (5))){
var inst_32412 = (state_32437[(2)]);
var state_32437__$1 = (function (){var statearr_32554 = state_32437;
(statearr_32554[(13)] = inst_32412);

return statearr_32554;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32437__$1,(13),dchan);
} else {
if((state_val_32438 === (14))){
var inst_32426 = cljs.core.async.close_BANG_(out);
var state_32437__$1 = state_32437;
var statearr_32557_35190 = state_32437__$1;
(statearr_32557_35190[(2)] = inst_32426);

(statearr_32557_35190[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (16))){
var inst_32433 = (state_32437[(2)]);
var state_32437__$1 = state_32437;
var statearr_32565_35194 = state_32437__$1;
(statearr_32565_35194[(2)] = inst_32433);

(statearr_32565_35194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (10))){
var inst_32380 = (state_32437[(7)]);
var inst_32404 = (state_32437[(2)]);
var inst_32405 = (inst_32380 + (1));
var inst_32380__$1 = inst_32405;
var state_32437__$1 = (function (){var statearr_32572 = state_32437;
(statearr_32572[(7)] = inst_32380__$1);

(statearr_32572[(14)] = inst_32404);

return statearr_32572;
})();
var statearr_32573_35199 = state_32437__$1;
(statearr_32573_35199[(2)] = null);

(statearr_32573_35199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (8))){
var inst_32409 = (state_32437[(2)]);
var state_32437__$1 = state_32437;
var statearr_32576_35200 = state_32437__$1;
(statearr_32576_35200[(2)] = inst_32409);

(statearr_32576_35200[(1)] = (5));


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
var cljs$core$async$state_machine__29270__auto__ = null;
var cljs$core$async$state_machine__29270__auto____0 = (function (){
var statearr_32579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32579[(0)] = cljs$core$async$state_machine__29270__auto__);

(statearr_32579[(1)] = (1));

return statearr_32579;
});
var cljs$core$async$state_machine__29270__auto____1 = (function (state_32437){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_32437);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e32584){var ex__29273__auto__ = e32584;
var statearr_32586_35214 = state_32437;
(statearr_32586_35214[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_32437[(4)]))){
var statearr_32587_35216 = state_32437;
(statearr_32587_35216[(1)] = cljs.core.first((state_32437[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35217 = state_32437;
state_32437 = G__35217;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$state_machine__29270__auto__ = function(state_32437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29270__auto____1.call(this,state_32437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29270__auto____0;
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29270__auto____1;
return cljs$core$async$state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_32594 = f__29728__auto__();
(statearr_32594[(6)] = c__29727__auto___35148);

return statearr_32594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
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
var G__32611 = arguments.length;
switch (G__32611) {
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
var c__29727__auto___35226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_32654){
var state_val_32655 = (state_32654[(1)]);
if((state_val_32655 === (7))){
var inst_32629 = (state_32654[(7)]);
var inst_32630 = (state_32654[(8)]);
var inst_32629__$1 = (state_32654[(2)]);
var inst_32630__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32629__$1,(0),null);
var inst_32631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32629__$1,(1),null);
var inst_32632 = (inst_32630__$1 == null);
var state_32654__$1 = (function (){var statearr_32664 = state_32654;
(statearr_32664[(9)] = inst_32631);

(statearr_32664[(7)] = inst_32629__$1);

(statearr_32664[(8)] = inst_32630__$1);

return statearr_32664;
})();
if(cljs.core.truth_(inst_32632)){
var statearr_32669_35227 = state_32654__$1;
(statearr_32669_35227[(1)] = (8));

} else {
var statearr_32671_35228 = state_32654__$1;
(statearr_32671_35228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32655 === (1))){
var inst_32618 = cljs.core.vec(chs);
var inst_32619 = inst_32618;
var state_32654__$1 = (function (){var statearr_32676 = state_32654;
(statearr_32676[(10)] = inst_32619);

return statearr_32676;
})();
var statearr_32678_35229 = state_32654__$1;
(statearr_32678_35229[(2)] = null);

(statearr_32678_35229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32655 === (4))){
var inst_32619 = (state_32654[(10)]);
var state_32654__$1 = state_32654;
return cljs.core.async.ioc_alts_BANG_(state_32654__$1,(7),inst_32619);
} else {
if((state_val_32655 === (6))){
var inst_32650 = (state_32654[(2)]);
var state_32654__$1 = state_32654;
var statearr_32704_35230 = state_32654__$1;
(statearr_32704_35230[(2)] = inst_32650);

(statearr_32704_35230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32655 === (3))){
var inst_32652 = (state_32654[(2)]);
var state_32654__$1 = state_32654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32654__$1,inst_32652);
} else {
if((state_val_32655 === (2))){
var inst_32619 = (state_32654[(10)]);
var inst_32622 = cljs.core.count(inst_32619);
var inst_32623 = (inst_32622 > (0));
var state_32654__$1 = state_32654;
if(cljs.core.truth_(inst_32623)){
var statearr_32712_35235 = state_32654__$1;
(statearr_32712_35235[(1)] = (4));

} else {
var statearr_32713_35237 = state_32654__$1;
(statearr_32713_35237[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32655 === (11))){
var inst_32619 = (state_32654[(10)]);
var inst_32643 = (state_32654[(2)]);
var tmp32709 = inst_32619;
var inst_32619__$1 = tmp32709;
var state_32654__$1 = (function (){var statearr_32715 = state_32654;
(statearr_32715[(10)] = inst_32619__$1);

(statearr_32715[(11)] = inst_32643);

return statearr_32715;
})();
var statearr_32716_35240 = state_32654__$1;
(statearr_32716_35240[(2)] = null);

(statearr_32716_35240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32655 === (9))){
var inst_32630 = (state_32654[(8)]);
var state_32654__$1 = state_32654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32654__$1,(11),out,inst_32630);
} else {
if((state_val_32655 === (5))){
var inst_32648 = cljs.core.async.close_BANG_(out);
var state_32654__$1 = state_32654;
var statearr_32720_35247 = state_32654__$1;
(statearr_32720_35247[(2)] = inst_32648);

(statearr_32720_35247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32655 === (10))){
var inst_32646 = (state_32654[(2)]);
var state_32654__$1 = state_32654;
var statearr_32724_35248 = state_32654__$1;
(statearr_32724_35248[(2)] = inst_32646);

(statearr_32724_35248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32655 === (8))){
var inst_32631 = (state_32654[(9)]);
var inst_32619 = (state_32654[(10)]);
var inst_32629 = (state_32654[(7)]);
var inst_32630 = (state_32654[(8)]);
var inst_32638 = (function (){var cs = inst_32619;
var vec__32625 = inst_32629;
var v = inst_32630;
var c = inst_32631;
return (function (p1__32605_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32605_SHARP_);
});
})();
var inst_32639 = cljs.core.filterv(inst_32638,inst_32619);
var inst_32619__$1 = inst_32639;
var state_32654__$1 = (function (){var statearr_32726 = state_32654;
(statearr_32726[(10)] = inst_32619__$1);

return statearr_32726;
})();
var statearr_32727_35249 = state_32654__$1;
(statearr_32727_35249[(2)] = null);

(statearr_32727_35249[(1)] = (2));


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
var cljs$core$async$state_machine__29270__auto__ = null;
var cljs$core$async$state_machine__29270__auto____0 = (function (){
var statearr_32729 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32729[(0)] = cljs$core$async$state_machine__29270__auto__);

(statearr_32729[(1)] = (1));

return statearr_32729;
});
var cljs$core$async$state_machine__29270__auto____1 = (function (state_32654){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_32654);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e32733){var ex__29273__auto__ = e32733;
var statearr_32734_35253 = state_32654;
(statearr_32734_35253[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_32654[(4)]))){
var statearr_32737_35254 = state_32654;
(statearr_32737_35254[(1)] = cljs.core.first((state_32654[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35258 = state_32654;
state_32654 = G__35258;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$state_machine__29270__auto__ = function(state_32654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29270__auto____1.call(this,state_32654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29270__auto____0;
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29270__auto____1;
return cljs$core$async$state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_32748 = f__29728__auto__();
(statearr_32748[(6)] = c__29727__auto___35226);

return statearr_32748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
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
var G__32772 = arguments.length;
switch (G__32772) {
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
var c__29727__auto___35262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_32801){
var state_val_32802 = (state_32801[(1)]);
if((state_val_32802 === (7))){
var inst_32783 = (state_32801[(7)]);
var inst_32783__$1 = (state_32801[(2)]);
var inst_32784 = (inst_32783__$1 == null);
var inst_32785 = cljs.core.not(inst_32784);
var state_32801__$1 = (function (){var statearr_32809 = state_32801;
(statearr_32809[(7)] = inst_32783__$1);

return statearr_32809;
})();
if(inst_32785){
var statearr_32810_35268 = state_32801__$1;
(statearr_32810_35268[(1)] = (8));

} else {
var statearr_32811_35269 = state_32801__$1;
(statearr_32811_35269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (1))){
var inst_32778 = (0);
var state_32801__$1 = (function (){var statearr_32812 = state_32801;
(statearr_32812[(8)] = inst_32778);

return statearr_32812;
})();
var statearr_32814_35270 = state_32801__$1;
(statearr_32814_35270[(2)] = null);

(statearr_32814_35270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (4))){
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32801__$1,(7),ch);
} else {
if((state_val_32802 === (6))){
var inst_32796 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32822_35272 = state_32801__$1;
(statearr_32822_35272[(2)] = inst_32796);

(statearr_32822_35272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (3))){
var inst_32798 = (state_32801[(2)]);
var inst_32799 = cljs.core.async.close_BANG_(out);
var state_32801__$1 = (function (){var statearr_32826 = state_32801;
(statearr_32826[(9)] = inst_32798);

return statearr_32826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32801__$1,inst_32799);
} else {
if((state_val_32802 === (2))){
var inst_32778 = (state_32801[(8)]);
var inst_32780 = (inst_32778 < n);
var state_32801__$1 = state_32801;
if(cljs.core.truth_(inst_32780)){
var statearr_32830_35274 = state_32801__$1;
(statearr_32830_35274[(1)] = (4));

} else {
var statearr_32831_35275 = state_32801__$1;
(statearr_32831_35275[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (11))){
var inst_32778 = (state_32801[(8)]);
var inst_32788 = (state_32801[(2)]);
var inst_32789 = (inst_32778 + (1));
var inst_32778__$1 = inst_32789;
var state_32801__$1 = (function (){var statearr_32834 = state_32801;
(statearr_32834[(8)] = inst_32778__$1);

(statearr_32834[(10)] = inst_32788);

return statearr_32834;
})();
var statearr_32835_35276 = state_32801__$1;
(statearr_32835_35276[(2)] = null);

(statearr_32835_35276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (9))){
var state_32801__$1 = state_32801;
var statearr_32842_35277 = state_32801__$1;
(statearr_32842_35277[(2)] = null);

(statearr_32842_35277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (5))){
var state_32801__$1 = state_32801;
var statearr_32844_35278 = state_32801__$1;
(statearr_32844_35278[(2)] = null);

(statearr_32844_35278[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (10))){
var inst_32793 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32846_35280 = state_32801__$1;
(statearr_32846_35280[(2)] = inst_32793);

(statearr_32846_35280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (8))){
var inst_32783 = (state_32801[(7)]);
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32801__$1,(11),out,inst_32783);
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
var cljs$core$async$state_machine__29270__auto__ = null;
var cljs$core$async$state_machine__29270__auto____0 = (function (){
var statearr_32850 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32850[(0)] = cljs$core$async$state_machine__29270__auto__);

(statearr_32850[(1)] = (1));

return statearr_32850;
});
var cljs$core$async$state_machine__29270__auto____1 = (function (state_32801){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_32801);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e32851){var ex__29273__auto__ = e32851;
var statearr_32853_35288 = state_32801;
(statearr_32853_35288[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_32801[(4)]))){
var statearr_32855_35289 = state_32801;
(statearr_32855_35289[(1)] = cljs.core.first((state_32801[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35294 = state_32801;
state_32801 = G__35294;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$state_machine__29270__auto__ = function(state_32801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29270__auto____1.call(this,state_32801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29270__auto____0;
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29270__auto____1;
return cljs$core$async$state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_32866 = f__29728__auto__();
(statearr_32866[(6)] = c__29727__auto___35262);

return statearr_32866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32874 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32874 = (function (f,ch,meta32875){
this.f = f;
this.ch = ch;
this.meta32875 = meta32875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32876,meta32875__$1){
var self__ = this;
var _32876__$1 = this;
return (new cljs.core.async.t_cljs$core$async32874(self__.f,self__.ch,meta32875__$1));
}));

(cljs.core.async.t_cljs$core$async32874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32876){
var self__ = this;
var _32876__$1 = this;
return self__.meta32875;
}));

(cljs.core.async.t_cljs$core$async32874.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32874.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32874.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32874.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32874.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32884 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32884 = (function (f,ch,meta32875,_,fn1,meta32885){
this.f = f;
this.ch = ch;
this.meta32875 = meta32875;
this._ = _;
this.fn1 = fn1;
this.meta32885 = meta32885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32886,meta32885__$1){
var self__ = this;
var _32886__$1 = this;
return (new cljs.core.async.t_cljs$core$async32884(self__.f,self__.ch,self__.meta32875,self__._,self__.fn1,meta32885__$1));
}));

(cljs.core.async.t_cljs$core$async32884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32886){
var self__ = this;
var _32886__$1 = this;
return self__.meta32885;
}));

(cljs.core.async.t_cljs$core$async32884.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32884.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32884.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32884.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32870_SHARP_){
var G__32889 = (((p1__32870_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32870_SHARP_) : self__.f.call(null,p1__32870_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32889) : f1.call(null,G__32889));
});
}));

(cljs.core.async.t_cljs$core$async32884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32875","meta32875",1948427601,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32874","cljs.core.async/t_cljs$core$async32874",-1276636607,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32885","meta32885",786515893,null)], null);
}));

(cljs.core.async.t_cljs$core$async32884.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32884.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32884");

(cljs.core.async.t_cljs$core$async32884.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32884");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32884.
 */
cljs.core.async.__GT_t_cljs$core$async32884 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32884(f__$1,ch__$1,meta32875__$1,___$2,fn1__$1,meta32885){
return (new cljs.core.async.t_cljs$core$async32884(f__$1,ch__$1,meta32875__$1,___$2,fn1__$1,meta32885));
});

}

return (new cljs.core.async.t_cljs$core$async32884(self__.f,self__.ch,self__.meta32875,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32893 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32893) : self__.f.call(null,G__32893));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32874.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32874.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32875","meta32875",1948427601,null)], null);
}));

(cljs.core.async.t_cljs$core$async32874.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32874");

(cljs.core.async.t_cljs$core$async32874.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32874");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32874.
 */
cljs.core.async.__GT_t_cljs$core$async32874 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32874(f__$1,ch__$1,meta32875){
return (new cljs.core.async.t_cljs$core$async32874(f__$1,ch__$1,meta32875));
});

}

return (new cljs.core.async.t_cljs$core$async32874(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32897 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32897 = (function (f,ch,meta32898){
this.f = f;
this.ch = ch;
this.meta32898 = meta32898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32899,meta32898__$1){
var self__ = this;
var _32899__$1 = this;
return (new cljs.core.async.t_cljs$core$async32897(self__.f,self__.ch,meta32898__$1));
}));

(cljs.core.async.t_cljs$core$async32897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32899){
var self__ = this;
var _32899__$1 = this;
return self__.meta32898;
}));

(cljs.core.async.t_cljs$core$async32897.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32897.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32897.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32897.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32897.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32897.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32898","meta32898",-992306475,null)], null);
}));

(cljs.core.async.t_cljs$core$async32897.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32897");

(cljs.core.async.t_cljs$core$async32897.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32897");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32897.
 */
cljs.core.async.__GT_t_cljs$core$async32897 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32897(f__$1,ch__$1,meta32898){
return (new cljs.core.async.t_cljs$core$async32897(f__$1,ch__$1,meta32898));
});

}

return (new cljs.core.async.t_cljs$core$async32897(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32906 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32906 = (function (p,ch,meta32907){
this.p = p;
this.ch = ch;
this.meta32907 = meta32907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32908,meta32907__$1){
var self__ = this;
var _32908__$1 = this;
return (new cljs.core.async.t_cljs$core$async32906(self__.p,self__.ch,meta32907__$1));
}));

(cljs.core.async.t_cljs$core$async32906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32908){
var self__ = this;
var _32908__$1 = this;
return self__.meta32907;
}));

(cljs.core.async.t_cljs$core$async32906.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32906.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32906.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32906.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32906.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32906.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32906.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32907","meta32907",-2070283558,null)], null);
}));

(cljs.core.async.t_cljs$core$async32906.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32906");

(cljs.core.async.t_cljs$core$async32906.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32906");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32906.
 */
cljs.core.async.__GT_t_cljs$core$async32906 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32906(p__$1,ch__$1,meta32907){
return (new cljs.core.async.t_cljs$core$async32906(p__$1,ch__$1,meta32907));
});

}

return (new cljs.core.async.t_cljs$core$async32906(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32927 = arguments.length;
switch (G__32927) {
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
var c__29727__auto___35377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_32981){
var state_val_32982 = (state_32981[(1)]);
if((state_val_32982 === (7))){
var inst_32977 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
var statearr_33003_35378 = state_32981__$1;
(statearr_33003_35378[(2)] = inst_32977);

(statearr_33003_35378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (1))){
var state_32981__$1 = state_32981;
var statearr_33004_35380 = state_32981__$1;
(statearr_33004_35380[(2)] = null);

(statearr_33004_35380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (4))){
var inst_32959 = (state_32981[(7)]);
var inst_32959__$1 = (state_32981[(2)]);
var inst_32960 = (inst_32959__$1 == null);
var state_32981__$1 = (function (){var statearr_33007 = state_32981;
(statearr_33007[(7)] = inst_32959__$1);

return statearr_33007;
})();
if(cljs.core.truth_(inst_32960)){
var statearr_33008_35386 = state_32981__$1;
(statearr_33008_35386[(1)] = (5));

} else {
var statearr_33009_35389 = state_32981__$1;
(statearr_33009_35389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (6))){
var inst_32959 = (state_32981[(7)]);
var inst_32968 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32959) : p.call(null,inst_32959));
var state_32981__$1 = state_32981;
if(cljs.core.truth_(inst_32968)){
var statearr_33011_35394 = state_32981__$1;
(statearr_33011_35394[(1)] = (8));

} else {
var statearr_33013_35397 = state_32981__$1;
(statearr_33013_35397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (3))){
var inst_32979 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32981__$1,inst_32979);
} else {
if((state_val_32982 === (2))){
var state_32981__$1 = state_32981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32981__$1,(4),ch);
} else {
if((state_val_32982 === (11))){
var inst_32971 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
var statearr_33014_35407 = state_32981__$1;
(statearr_33014_35407[(2)] = inst_32971);

(statearr_33014_35407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (9))){
var state_32981__$1 = state_32981;
var statearr_33016_35410 = state_32981__$1;
(statearr_33016_35410[(2)] = null);

(statearr_33016_35410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (5))){
var inst_32966 = cljs.core.async.close_BANG_(out);
var state_32981__$1 = state_32981;
var statearr_33023_35415 = state_32981__$1;
(statearr_33023_35415[(2)] = inst_32966);

(statearr_33023_35415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (10))){
var inst_32974 = (state_32981[(2)]);
var state_32981__$1 = (function (){var statearr_33027 = state_32981;
(statearr_33027[(8)] = inst_32974);

return statearr_33027;
})();
var statearr_33028_35429 = state_32981__$1;
(statearr_33028_35429[(2)] = null);

(statearr_33028_35429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (8))){
var inst_32959 = (state_32981[(7)]);
var state_32981__$1 = state_32981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32981__$1,(11),out,inst_32959);
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
var cljs$core$async$state_machine__29270__auto__ = null;
var cljs$core$async$state_machine__29270__auto____0 = (function (){
var statearr_33029 = [null,null,null,null,null,null,null,null,null];
(statearr_33029[(0)] = cljs$core$async$state_machine__29270__auto__);

(statearr_33029[(1)] = (1));

return statearr_33029;
});
var cljs$core$async$state_machine__29270__auto____1 = (function (state_32981){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_32981);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e33030){var ex__29273__auto__ = e33030;
var statearr_33031_35430 = state_32981;
(statearr_33031_35430[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_32981[(4)]))){
var statearr_33032_35431 = state_32981;
(statearr_33032_35431[(1)] = cljs.core.first((state_32981[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35432 = state_32981;
state_32981 = G__35432;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$state_machine__29270__auto__ = function(state_32981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29270__auto____1.call(this,state_32981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29270__auto____0;
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29270__auto____1;
return cljs$core$async$state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_33035 = f__29728__auto__();
(statearr_33035[(6)] = c__29727__auto___35377);

return statearr_33035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33038 = arguments.length;
switch (G__33038) {
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
var c__29727__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_33103){
var state_val_33104 = (state_33103[(1)]);
if((state_val_33104 === (7))){
var inst_33099 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
var statearr_33105_35443 = state_33103__$1;
(statearr_33105_35443[(2)] = inst_33099);

(statearr_33105_35443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (20))){
var inst_33069 = (state_33103[(7)]);
var inst_33080 = (state_33103[(2)]);
var inst_33081 = cljs.core.next(inst_33069);
var inst_33054 = inst_33081;
var inst_33055 = null;
var inst_33056 = (0);
var inst_33057 = (0);
var state_33103__$1 = (function (){var statearr_33106 = state_33103;
(statearr_33106[(8)] = inst_33055);

(statearr_33106[(9)] = inst_33054);

(statearr_33106[(10)] = inst_33056);

(statearr_33106[(11)] = inst_33057);

(statearr_33106[(12)] = inst_33080);

return statearr_33106;
})();
var statearr_33107_35444 = state_33103__$1;
(statearr_33107_35444[(2)] = null);

(statearr_33107_35444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (1))){
var state_33103__$1 = state_33103;
var statearr_33113_35446 = state_33103__$1;
(statearr_33113_35446[(2)] = null);

(statearr_33113_35446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (4))){
var inst_33041 = (state_33103[(13)]);
var inst_33041__$1 = (state_33103[(2)]);
var inst_33042 = (inst_33041__$1 == null);
var state_33103__$1 = (function (){var statearr_33117 = state_33103;
(statearr_33117[(13)] = inst_33041__$1);

return statearr_33117;
})();
if(cljs.core.truth_(inst_33042)){
var statearr_33118_35448 = state_33103__$1;
(statearr_33118_35448[(1)] = (5));

} else {
var statearr_33119_35449 = state_33103__$1;
(statearr_33119_35449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (15))){
var state_33103__$1 = state_33103;
var statearr_33129_35451 = state_33103__$1;
(statearr_33129_35451[(2)] = null);

(statearr_33129_35451[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (21))){
var state_33103__$1 = state_33103;
var statearr_33131_35455 = state_33103__$1;
(statearr_33131_35455[(2)] = null);

(statearr_33131_35455[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (13))){
var inst_33055 = (state_33103[(8)]);
var inst_33054 = (state_33103[(9)]);
var inst_33056 = (state_33103[(10)]);
var inst_33057 = (state_33103[(11)]);
var inst_33065 = (state_33103[(2)]);
var inst_33066 = (inst_33057 + (1));
var tmp33124 = inst_33055;
var tmp33125 = inst_33054;
var tmp33126 = inst_33056;
var inst_33054__$1 = tmp33125;
var inst_33055__$1 = tmp33124;
var inst_33056__$1 = tmp33126;
var inst_33057__$1 = inst_33066;
var state_33103__$1 = (function (){var statearr_33135 = state_33103;
(statearr_33135[(14)] = inst_33065);

(statearr_33135[(8)] = inst_33055__$1);

(statearr_33135[(9)] = inst_33054__$1);

(statearr_33135[(10)] = inst_33056__$1);

(statearr_33135[(11)] = inst_33057__$1);

return statearr_33135;
})();
var statearr_33136_35459 = state_33103__$1;
(statearr_33136_35459[(2)] = null);

(statearr_33136_35459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (22))){
var state_33103__$1 = state_33103;
var statearr_33139_35461 = state_33103__$1;
(statearr_33139_35461[(2)] = null);

(statearr_33139_35461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (6))){
var inst_33041 = (state_33103[(13)]);
var inst_33052 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33041) : f.call(null,inst_33041));
var inst_33053 = cljs.core.seq(inst_33052);
var inst_33054 = inst_33053;
var inst_33055 = null;
var inst_33056 = (0);
var inst_33057 = (0);
var state_33103__$1 = (function (){var statearr_33144 = state_33103;
(statearr_33144[(8)] = inst_33055);

(statearr_33144[(9)] = inst_33054);

(statearr_33144[(10)] = inst_33056);

(statearr_33144[(11)] = inst_33057);

return statearr_33144;
})();
var statearr_33146_35476 = state_33103__$1;
(statearr_33146_35476[(2)] = null);

(statearr_33146_35476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (17))){
var inst_33069 = (state_33103[(7)]);
var inst_33073 = cljs.core.chunk_first(inst_33069);
var inst_33074 = cljs.core.chunk_rest(inst_33069);
var inst_33075 = cljs.core.count(inst_33073);
var inst_33054 = inst_33074;
var inst_33055 = inst_33073;
var inst_33056 = inst_33075;
var inst_33057 = (0);
var state_33103__$1 = (function (){var statearr_33149 = state_33103;
(statearr_33149[(8)] = inst_33055);

(statearr_33149[(9)] = inst_33054);

(statearr_33149[(10)] = inst_33056);

(statearr_33149[(11)] = inst_33057);

return statearr_33149;
})();
var statearr_33151_35481 = state_33103__$1;
(statearr_33151_35481[(2)] = null);

(statearr_33151_35481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (3))){
var inst_33101 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33103__$1,inst_33101);
} else {
if((state_val_33104 === (12))){
var inst_33089 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
var statearr_33164_35483 = state_33103__$1;
(statearr_33164_35483[(2)] = inst_33089);

(statearr_33164_35483[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (2))){
var state_33103__$1 = state_33103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33103__$1,(4),in$);
} else {
if((state_val_33104 === (23))){
var inst_33097 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
var statearr_33170_35486 = state_33103__$1;
(statearr_33170_35486[(2)] = inst_33097);

(statearr_33170_35486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (19))){
var inst_33084 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
var statearr_33171_35488 = state_33103__$1;
(statearr_33171_35488[(2)] = inst_33084);

(statearr_33171_35488[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (11))){
var inst_33054 = (state_33103[(9)]);
var inst_33069 = (state_33103[(7)]);
var inst_33069__$1 = cljs.core.seq(inst_33054);
var state_33103__$1 = (function (){var statearr_33173 = state_33103;
(statearr_33173[(7)] = inst_33069__$1);

return statearr_33173;
})();
if(inst_33069__$1){
var statearr_33174_35491 = state_33103__$1;
(statearr_33174_35491[(1)] = (14));

} else {
var statearr_33176_35493 = state_33103__$1;
(statearr_33176_35493[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (9))){
var inst_33091 = (state_33103[(2)]);
var inst_33092 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33103__$1 = (function (){var statearr_33177 = state_33103;
(statearr_33177[(15)] = inst_33091);

return statearr_33177;
})();
if(cljs.core.truth_(inst_33092)){
var statearr_33180_35494 = state_33103__$1;
(statearr_33180_35494[(1)] = (21));

} else {
var statearr_33181_35495 = state_33103__$1;
(statearr_33181_35495[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (5))){
var inst_33044 = cljs.core.async.close_BANG_(out);
var state_33103__$1 = state_33103;
var statearr_33182_35500 = state_33103__$1;
(statearr_33182_35500[(2)] = inst_33044);

(statearr_33182_35500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (14))){
var inst_33069 = (state_33103[(7)]);
var inst_33071 = cljs.core.chunked_seq_QMARK_(inst_33069);
var state_33103__$1 = state_33103;
if(inst_33071){
var statearr_33186_35504 = state_33103__$1;
(statearr_33186_35504[(1)] = (17));

} else {
var statearr_33187_35505 = state_33103__$1;
(statearr_33187_35505[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (16))){
var inst_33087 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
var statearr_33188_35510 = state_33103__$1;
(statearr_33188_35510[(2)] = inst_33087);

(statearr_33188_35510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (10))){
var inst_33055 = (state_33103[(8)]);
var inst_33057 = (state_33103[(11)]);
var inst_33063 = cljs.core._nth(inst_33055,inst_33057);
var state_33103__$1 = state_33103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33103__$1,(13),out,inst_33063);
} else {
if((state_val_33104 === (18))){
var inst_33069 = (state_33103[(7)]);
var inst_33078 = cljs.core.first(inst_33069);
var state_33103__$1 = state_33103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33103__$1,(20),out,inst_33078);
} else {
if((state_val_33104 === (8))){
var inst_33056 = (state_33103[(10)]);
var inst_33057 = (state_33103[(11)]);
var inst_33059 = (inst_33057 < inst_33056);
var inst_33060 = inst_33059;
var state_33103__$1 = state_33103;
if(cljs.core.truth_(inst_33060)){
var statearr_33191_35525 = state_33103__$1;
(statearr_33191_35525[(1)] = (10));

} else {
var statearr_33193_35527 = state_33103__$1;
(statearr_33193_35527[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29270__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29270__auto____0 = (function (){
var statearr_33195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33195[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29270__auto__);

(statearr_33195[(1)] = (1));

return statearr_33195;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29270__auto____1 = (function (state_33103){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_33103);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e33196){var ex__29273__auto__ = e33196;
var statearr_33197_35549 = state_33103;
(statearr_33197_35549[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_33103[(4)]))){
var statearr_33198_35555 = state_33103;
(statearr_33198_35555[(1)] = cljs.core.first((state_33103[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35559 = state_33103;
state_33103 = G__35559;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29270__auto__ = function(state_33103){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29270__auto____1.call(this,state_33103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29270__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29270__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_33199 = f__29728__auto__();
(statearr_33199[(6)] = c__29727__auto__);

return statearr_33199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

return c__29727__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33203 = arguments.length;
switch (G__33203) {
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
var G__33219 = arguments.length;
switch (G__33219) {
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
var G__33255 = arguments.length;
switch (G__33255) {
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
var c__29727__auto___35596 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_33292){
var state_val_33293 = (state_33292[(1)]);
if((state_val_33293 === (7))){
var inst_33287 = (state_33292[(2)]);
var state_33292__$1 = state_33292;
var statearr_33305_35597 = state_33292__$1;
(statearr_33305_35597[(2)] = inst_33287);

(statearr_33305_35597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33293 === (1))){
var inst_33266 = null;
var state_33292__$1 = (function (){var statearr_33310 = state_33292;
(statearr_33310[(7)] = inst_33266);

return statearr_33310;
})();
var statearr_33311_35600 = state_33292__$1;
(statearr_33311_35600[(2)] = null);

(statearr_33311_35600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33293 === (4))){
var inst_33269 = (state_33292[(8)]);
var inst_33269__$1 = (state_33292[(2)]);
var inst_33270 = (inst_33269__$1 == null);
var inst_33271 = cljs.core.not(inst_33270);
var state_33292__$1 = (function (){var statearr_33313 = state_33292;
(statearr_33313[(8)] = inst_33269__$1);

return statearr_33313;
})();
if(inst_33271){
var statearr_33314_35602 = state_33292__$1;
(statearr_33314_35602[(1)] = (5));

} else {
var statearr_33318_35607 = state_33292__$1;
(statearr_33318_35607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33293 === (6))){
var state_33292__$1 = state_33292;
var statearr_33322_35610 = state_33292__$1;
(statearr_33322_35610[(2)] = null);

(statearr_33322_35610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33293 === (3))){
var inst_33289 = (state_33292[(2)]);
var inst_33290 = cljs.core.async.close_BANG_(out);
var state_33292__$1 = (function (){var statearr_33324 = state_33292;
(statearr_33324[(9)] = inst_33289);

return statearr_33324;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33292__$1,inst_33290);
} else {
if((state_val_33293 === (2))){
var state_33292__$1 = state_33292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33292__$1,(4),ch);
} else {
if((state_val_33293 === (11))){
var inst_33269 = (state_33292[(8)]);
var inst_33278 = (state_33292[(2)]);
var inst_33266 = inst_33269;
var state_33292__$1 = (function (){var statearr_33325 = state_33292;
(statearr_33325[(7)] = inst_33266);

(statearr_33325[(10)] = inst_33278);

return statearr_33325;
})();
var statearr_33327_35614 = state_33292__$1;
(statearr_33327_35614[(2)] = null);

(statearr_33327_35614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33293 === (9))){
var inst_33269 = (state_33292[(8)]);
var state_33292__$1 = state_33292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33292__$1,(11),out,inst_33269);
} else {
if((state_val_33293 === (5))){
var inst_33269 = (state_33292[(8)]);
var inst_33266 = (state_33292[(7)]);
var inst_33273 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33269,inst_33266);
var state_33292__$1 = state_33292;
if(inst_33273){
var statearr_33332_35615 = state_33292__$1;
(statearr_33332_35615[(1)] = (8));

} else {
var statearr_33333_35617 = state_33292__$1;
(statearr_33333_35617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33293 === (10))){
var inst_33281 = (state_33292[(2)]);
var state_33292__$1 = state_33292;
var statearr_33334_35618 = state_33292__$1;
(statearr_33334_35618[(2)] = inst_33281);

(statearr_33334_35618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33293 === (8))){
var inst_33266 = (state_33292[(7)]);
var tmp33331 = inst_33266;
var inst_33266__$1 = tmp33331;
var state_33292__$1 = (function (){var statearr_33335 = state_33292;
(statearr_33335[(7)] = inst_33266__$1);

return statearr_33335;
})();
var statearr_33336_35619 = state_33292__$1;
(statearr_33336_35619[(2)] = null);

(statearr_33336_35619[(1)] = (2));


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
var cljs$core$async$state_machine__29270__auto__ = null;
var cljs$core$async$state_machine__29270__auto____0 = (function (){
var statearr_33337 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33337[(0)] = cljs$core$async$state_machine__29270__auto__);

(statearr_33337[(1)] = (1));

return statearr_33337;
});
var cljs$core$async$state_machine__29270__auto____1 = (function (state_33292){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_33292);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e33338){var ex__29273__auto__ = e33338;
var statearr_33339_35621 = state_33292;
(statearr_33339_35621[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_33292[(4)]))){
var statearr_33340_35623 = state_33292;
(statearr_33340_35623[(1)] = cljs.core.first((state_33292[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35624 = state_33292;
state_33292 = G__35624;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$state_machine__29270__auto__ = function(state_33292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29270__auto____1.call(this,state_33292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29270__auto____0;
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29270__auto____1;
return cljs$core$async$state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_33341 = f__29728__auto__();
(statearr_33341[(6)] = c__29727__auto___35596);

return statearr_33341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33360 = arguments.length;
switch (G__33360) {
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
var c__29727__auto___35629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_33427){
var state_val_33428 = (state_33427[(1)]);
if((state_val_33428 === (7))){
var inst_33411 = (state_33427[(2)]);
var state_33427__$1 = state_33427;
var statearr_33434_35634 = state_33427__$1;
(statearr_33434_35634[(2)] = inst_33411);

(statearr_33434_35634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33428 === (1))){
var inst_33369 = (new Array(n));
var inst_33370 = inst_33369;
var inst_33371 = (0);
var state_33427__$1 = (function (){var statearr_33442 = state_33427;
(statearr_33442[(7)] = inst_33371);

(statearr_33442[(8)] = inst_33370);

return statearr_33442;
})();
var statearr_33443_35635 = state_33427__$1;
(statearr_33443_35635[(2)] = null);

(statearr_33443_35635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33428 === (4))){
var inst_33374 = (state_33427[(9)]);
var inst_33374__$1 = (state_33427[(2)]);
var inst_33375 = (inst_33374__$1 == null);
var inst_33376 = cljs.core.not(inst_33375);
var state_33427__$1 = (function (){var statearr_33447 = state_33427;
(statearr_33447[(9)] = inst_33374__$1);

return statearr_33447;
})();
if(inst_33376){
var statearr_33448_35643 = state_33427__$1;
(statearr_33448_35643[(1)] = (5));

} else {
var statearr_33452_35644 = state_33427__$1;
(statearr_33452_35644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33428 === (15))){
var inst_33405 = (state_33427[(2)]);
var state_33427__$1 = state_33427;
var statearr_33453_35645 = state_33427__$1;
(statearr_33453_35645[(2)] = inst_33405);

(statearr_33453_35645[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33428 === (13))){
var state_33427__$1 = state_33427;
var statearr_33454_35646 = state_33427__$1;
(statearr_33454_35646[(2)] = null);

(statearr_33454_35646[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33428 === (6))){
var inst_33371 = (state_33427[(7)]);
var inst_33397 = (inst_33371 > (0));
var state_33427__$1 = state_33427;
if(cljs.core.truth_(inst_33397)){
var statearr_33457_35647 = state_33427__$1;
(statearr_33457_35647[(1)] = (12));

} else {
var statearr_33458_35649 = state_33427__$1;
(statearr_33458_35649[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33428 === (3))){
var inst_33413 = (state_33427[(2)]);
var state_33427__$1 = state_33427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33427__$1,inst_33413);
} else {
if((state_val_33428 === (12))){
var inst_33370 = (state_33427[(8)]);
var inst_33403 = cljs.core.vec(inst_33370);
var state_33427__$1 = state_33427;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33427__$1,(15),out,inst_33403);
} else {
if((state_val_33428 === (2))){
var state_33427__$1 = state_33427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33427__$1,(4),ch);
} else {
if((state_val_33428 === (11))){
var inst_33389 = (state_33427[(2)]);
var inst_33390 = (new Array(n));
var inst_33370 = inst_33390;
var inst_33371 = (0);
var state_33427__$1 = (function (){var statearr_33463 = state_33427;
(statearr_33463[(7)] = inst_33371);

(statearr_33463[(8)] = inst_33370);

(statearr_33463[(10)] = inst_33389);

return statearr_33463;
})();
var statearr_33464_35654 = state_33427__$1;
(statearr_33464_35654[(2)] = null);

(statearr_33464_35654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33428 === (9))){
var inst_33370 = (state_33427[(8)]);
var inst_33387 = cljs.core.vec(inst_33370);
var state_33427__$1 = state_33427;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33427__$1,(11),out,inst_33387);
} else {
if((state_val_33428 === (5))){
var inst_33371 = (state_33427[(7)]);
var inst_33370 = (state_33427[(8)]);
var inst_33382 = (state_33427[(11)]);
var inst_33374 = (state_33427[(9)]);
var inst_33378 = (inst_33370[inst_33371] = inst_33374);
var inst_33382__$1 = (inst_33371 + (1));
var inst_33383 = (inst_33382__$1 < n);
var state_33427__$1 = (function (){var statearr_33471 = state_33427;
(statearr_33471[(11)] = inst_33382__$1);

(statearr_33471[(12)] = inst_33378);

return statearr_33471;
})();
if(cljs.core.truth_(inst_33383)){
var statearr_33476_35655 = state_33427__$1;
(statearr_33476_35655[(1)] = (8));

} else {
var statearr_33477_35656 = state_33427__$1;
(statearr_33477_35656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33428 === (14))){
var inst_33408 = (state_33427[(2)]);
var inst_33409 = cljs.core.async.close_BANG_(out);
var state_33427__$1 = (function (){var statearr_33482 = state_33427;
(statearr_33482[(13)] = inst_33408);

return statearr_33482;
})();
var statearr_33483_35662 = state_33427__$1;
(statearr_33483_35662[(2)] = inst_33409);

(statearr_33483_35662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33428 === (10))){
var inst_33393 = (state_33427[(2)]);
var state_33427__$1 = state_33427;
var statearr_33485_35663 = state_33427__$1;
(statearr_33485_35663[(2)] = inst_33393);

(statearr_33485_35663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33428 === (8))){
var inst_33370 = (state_33427[(8)]);
var inst_33382 = (state_33427[(11)]);
var tmp33480 = inst_33370;
var inst_33370__$1 = tmp33480;
var inst_33371 = inst_33382;
var state_33427__$1 = (function (){var statearr_33490 = state_33427;
(statearr_33490[(7)] = inst_33371);

(statearr_33490[(8)] = inst_33370__$1);

return statearr_33490;
})();
var statearr_33491_35664 = state_33427__$1;
(statearr_33491_35664[(2)] = null);

(statearr_33491_35664[(1)] = (2));


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
var cljs$core$async$state_machine__29270__auto__ = null;
var cljs$core$async$state_machine__29270__auto____0 = (function (){
var statearr_33496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33496[(0)] = cljs$core$async$state_machine__29270__auto__);

(statearr_33496[(1)] = (1));

return statearr_33496;
});
var cljs$core$async$state_machine__29270__auto____1 = (function (state_33427){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_33427);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e33503){var ex__29273__auto__ = e33503;
var statearr_33504_35670 = state_33427;
(statearr_33504_35670[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_33427[(4)]))){
var statearr_33509_35673 = state_33427;
(statearr_33509_35673[(1)] = cljs.core.first((state_33427[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35674 = state_33427;
state_33427 = G__35674;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$state_machine__29270__auto__ = function(state_33427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29270__auto____1.call(this,state_33427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29270__auto____0;
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29270__auto____1;
return cljs$core$async$state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_33517 = f__29728__auto__();
(statearr_33517[(6)] = c__29727__auto___35629);

return statearr_33517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33536 = arguments.length;
switch (G__33536) {
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
var c__29727__auto___35676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29269__auto__ = (function (state_33585){
var state_val_33586 = (state_33585[(1)]);
if((state_val_33586 === (7))){
var inst_33581 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
var statearr_33588_35678 = state_33585__$1;
(statearr_33588_35678[(2)] = inst_33581);

(statearr_33588_35678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (1))){
var inst_33540 = [];
var inst_33541 = inst_33540;
var inst_33542 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33585__$1 = (function (){var statearr_33592 = state_33585;
(statearr_33592[(7)] = inst_33541);

(statearr_33592[(8)] = inst_33542);

return statearr_33592;
})();
var statearr_33595_35682 = state_33585__$1;
(statearr_33595_35682[(2)] = null);

(statearr_33595_35682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (4))){
var inst_33545 = (state_33585[(9)]);
var inst_33545__$1 = (state_33585[(2)]);
var inst_33546 = (inst_33545__$1 == null);
var inst_33547 = cljs.core.not(inst_33546);
var state_33585__$1 = (function (){var statearr_33596 = state_33585;
(statearr_33596[(9)] = inst_33545__$1);

return statearr_33596;
})();
if(inst_33547){
var statearr_33597_35684 = state_33585__$1;
(statearr_33597_35684[(1)] = (5));

} else {
var statearr_33599_35685 = state_33585__$1;
(statearr_33599_35685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (15))){
var inst_33541 = (state_33585[(7)]);
var inst_33572 = cljs.core.vec(inst_33541);
var state_33585__$1 = state_33585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33585__$1,(18),out,inst_33572);
} else {
if((state_val_33586 === (13))){
var inst_33567 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
var statearr_33602_35689 = state_33585__$1;
(statearr_33602_35689[(2)] = inst_33567);

(statearr_33602_35689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (6))){
var inst_33541 = (state_33585[(7)]);
var inst_33569 = inst_33541.length;
var inst_33570 = (inst_33569 > (0));
var state_33585__$1 = state_33585;
if(cljs.core.truth_(inst_33570)){
var statearr_33603_35696 = state_33585__$1;
(statearr_33603_35696[(1)] = (15));

} else {
var statearr_33604_35697 = state_33585__$1;
(statearr_33604_35697[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (17))){
var inst_33577 = (state_33585[(2)]);
var inst_33578 = cljs.core.async.close_BANG_(out);
var state_33585__$1 = (function (){var statearr_33606 = state_33585;
(statearr_33606[(10)] = inst_33577);

return statearr_33606;
})();
var statearr_33607_35699 = state_33585__$1;
(statearr_33607_35699[(2)] = inst_33578);

(statearr_33607_35699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (3))){
var inst_33583 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33585__$1,inst_33583);
} else {
if((state_val_33586 === (12))){
var inst_33541 = (state_33585[(7)]);
var inst_33560 = cljs.core.vec(inst_33541);
var state_33585__$1 = state_33585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33585__$1,(14),out,inst_33560);
} else {
if((state_val_33586 === (2))){
var state_33585__$1 = state_33585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33585__$1,(4),ch);
} else {
if((state_val_33586 === (11))){
var inst_33545 = (state_33585[(9)]);
var inst_33549 = (state_33585[(11)]);
var inst_33541 = (state_33585[(7)]);
var inst_33557 = inst_33541.push(inst_33545);
var tmp33608 = inst_33541;
var inst_33541__$1 = tmp33608;
var inst_33542 = inst_33549;
var state_33585__$1 = (function (){var statearr_33618 = state_33585;
(statearr_33618[(7)] = inst_33541__$1);

(statearr_33618[(12)] = inst_33557);

(statearr_33618[(8)] = inst_33542);

return statearr_33618;
})();
var statearr_33621_35712 = state_33585__$1;
(statearr_33621_35712[(2)] = null);

(statearr_33621_35712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (9))){
var inst_33542 = (state_33585[(8)]);
var inst_33553 = cljs.core.keyword_identical_QMARK_(inst_33542,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33585__$1 = state_33585;
var statearr_33622_35713 = state_33585__$1;
(statearr_33622_35713[(2)] = inst_33553);

(statearr_33622_35713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (5))){
var inst_33545 = (state_33585[(9)]);
var inst_33549 = (state_33585[(11)]);
var inst_33550 = (state_33585[(13)]);
var inst_33542 = (state_33585[(8)]);
var inst_33549__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33545) : f.call(null,inst_33545));
var inst_33550__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33549__$1,inst_33542);
var state_33585__$1 = (function (){var statearr_33632 = state_33585;
(statearr_33632[(11)] = inst_33549__$1);

(statearr_33632[(13)] = inst_33550__$1);

return statearr_33632;
})();
if(inst_33550__$1){
var statearr_33633_35715 = state_33585__$1;
(statearr_33633_35715[(1)] = (8));

} else {
var statearr_33634_35716 = state_33585__$1;
(statearr_33634_35716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (14))){
var inst_33545 = (state_33585[(9)]);
var inst_33549 = (state_33585[(11)]);
var inst_33562 = (state_33585[(2)]);
var inst_33563 = [];
var inst_33564 = inst_33563.push(inst_33545);
var inst_33541 = inst_33563;
var inst_33542 = inst_33549;
var state_33585__$1 = (function (){var statearr_33639 = state_33585;
(statearr_33639[(14)] = inst_33564);

(statearr_33639[(7)] = inst_33541);

(statearr_33639[(15)] = inst_33562);

(statearr_33639[(8)] = inst_33542);

return statearr_33639;
})();
var statearr_33640_35717 = state_33585__$1;
(statearr_33640_35717[(2)] = null);

(statearr_33640_35717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (16))){
var state_33585__$1 = state_33585;
var statearr_33648_35721 = state_33585__$1;
(statearr_33648_35721[(2)] = null);

(statearr_33648_35721[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (10))){
var inst_33555 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
if(cljs.core.truth_(inst_33555)){
var statearr_33649_35724 = state_33585__$1;
(statearr_33649_35724[(1)] = (11));

} else {
var statearr_33650_35725 = state_33585__$1;
(statearr_33650_35725[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (18))){
var inst_33574 = (state_33585[(2)]);
var state_33585__$1 = state_33585;
var statearr_33652_35726 = state_33585__$1;
(statearr_33652_35726[(2)] = inst_33574);

(statearr_33652_35726[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33586 === (8))){
var inst_33550 = (state_33585[(13)]);
var state_33585__$1 = state_33585;
var statearr_33653_35727 = state_33585__$1;
(statearr_33653_35727[(2)] = inst_33550);

(statearr_33653_35727[(1)] = (10));


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
var cljs$core$async$state_machine__29270__auto__ = null;
var cljs$core$async$state_machine__29270__auto____0 = (function (){
var statearr_33656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33656[(0)] = cljs$core$async$state_machine__29270__auto__);

(statearr_33656[(1)] = (1));

return statearr_33656;
});
var cljs$core$async$state_machine__29270__auto____1 = (function (state_33585){
while(true){
var ret_value__29271__auto__ = (function (){try{while(true){
var result__29272__auto__ = switch__29269__auto__(state_33585);
if(cljs.core.keyword_identical_QMARK_(result__29272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29272__auto__;
}
break;
}
}catch (e33657){var ex__29273__auto__ = e33657;
var statearr_33661_35730 = state_33585;
(statearr_33661_35730[(2)] = ex__29273__auto__);


if(cljs.core.seq((state_33585[(4)]))){
var statearr_33664_35731 = state_33585;
(statearr_33664_35731[(1)] = cljs.core.first((state_33585[(4)])));

} else {
throw ex__29273__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35732 = state_33585;
state_33585 = G__35732;
continue;
} else {
return ret_value__29271__auto__;
}
break;
}
});
cljs$core$async$state_machine__29270__auto__ = function(state_33585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29270__auto____1.call(this,state_33585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29270__auto____0;
cljs$core$async$state_machine__29270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29270__auto____1;
return cljs$core$async$state_machine__29270__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_33665 = f__29728__auto__();
(statearr_33665[(6)] = c__29727__auto___35676);

return statearr_33665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
