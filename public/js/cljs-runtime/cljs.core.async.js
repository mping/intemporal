goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36847 = arguments.length;
switch (G__36847) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36850 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36850 = (function (f,blockable,meta36851){
this.f = f;
this.blockable = blockable;
this.meta36851 = meta36851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36852,meta36851__$1){
var self__ = this;
var _36852__$1 = this;
return (new cljs.core.async.t_cljs$core$async36850(self__.f,self__.blockable,meta36851__$1));
}));

(cljs.core.async.t_cljs$core$async36850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36852){
var self__ = this;
var _36852__$1 = this;
return self__.meta36851;
}));

(cljs.core.async.t_cljs$core$async36850.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36850.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36850.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async36850.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async36850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36851","meta36851",-1727134929,null)], null);
}));

(cljs.core.async.t_cljs$core$async36850.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36850");

(cljs.core.async.t_cljs$core$async36850.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36850");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36850.
 */
cljs.core.async.__GT_t_cljs$core$async36850 = (function cljs$core$async$__GT_t_cljs$core$async36850(f__$1,blockable__$1,meta36851){
return (new cljs.core.async.t_cljs$core$async36850(f__$1,blockable__$1,meta36851));
});

}

return (new cljs.core.async.t_cljs$core$async36850(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36906 = arguments.length;
switch (G__36906) {
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
var G__36910 = arguments.length;
switch (G__36910) {
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
var G__36936 = arguments.length;
switch (G__36936) {
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
var val_40814 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40814) : fn1.call(null,val_40814));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40814) : fn1.call(null,val_40814));
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
var G__36963 = arguments.length;
switch (G__36963) {
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
var n__5636__auto___40834 = n;
var x_40835 = (0);
while(true){
if((x_40835 < n__5636__auto___40834)){
(a[x_40835] = x_40835);

var G__40836 = (x_40835 + (1));
x_40835 = G__40836;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36987 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36987 = (function (flag,meta36988){
this.flag = flag;
this.meta36988 = meta36988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36989,meta36988__$1){
var self__ = this;
var _36989__$1 = this;
return (new cljs.core.async.t_cljs$core$async36987(self__.flag,meta36988__$1));
}));

(cljs.core.async.t_cljs$core$async36987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36989){
var self__ = this;
var _36989__$1 = this;
return self__.meta36988;
}));

(cljs.core.async.t_cljs$core$async36987.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36987.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36987.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36987.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async36987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36988","meta36988",10050173,null)], null);
}));

(cljs.core.async.t_cljs$core$async36987.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36987");

(cljs.core.async.t_cljs$core$async36987.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36987");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36987.
 */
cljs.core.async.__GT_t_cljs$core$async36987 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36987(flag__$1,meta36988){
return (new cljs.core.async.t_cljs$core$async36987(flag__$1,meta36988));
});

}

return (new cljs.core.async.t_cljs$core$async36987(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37018 = (function (flag,cb,meta37019){
this.flag = flag;
this.cb = cb;
this.meta37019 = meta37019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37020,meta37019__$1){
var self__ = this;
var _37020__$1 = this;
return (new cljs.core.async.t_cljs$core$async37018(self__.flag,self__.cb,meta37019__$1));
}));

(cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37020){
var self__ = this;
var _37020__$1 = this;
return self__.meta37019;
}));

(cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37019","meta37019",-513122008,null)], null);
}));

(cljs.core.async.t_cljs$core$async37018.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37018");

(cljs.core.async.t_cljs$core$async37018.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async37018");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37018.
 */
cljs.core.async.__GT_t_cljs$core$async37018 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37018(flag__$1,cb__$1,meta37019){
return (new cljs.core.async.t_cljs$core$async37018(flag__$1,cb__$1,meta37019));
});

}

return (new cljs.core.async.t_cljs$core$async37018(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37032_SHARP_){
var G__37041 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37032_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37041) : fret.call(null,G__37041));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37033_SHARP_){
var G__37045 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37033_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37045) : fret.call(null,G__37045));
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
var G__40842 = (i + (1));
i = G__40842;
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
var len__5769__auto___40844 = arguments.length;
var i__5770__auto___40846 = (0);
while(true){
if((i__5770__auto___40846 < len__5769__auto___40844)){
args__5775__auto__.push((arguments[i__5770__auto___40846]));

var G__40847 = (i__5770__auto___40846 + (1));
i__5770__auto___40846 = G__40847;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37054){
var map__37055 = p__37054;
var map__37055__$1 = cljs.core.__destructure_map(map__37055);
var opts = map__37055__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37050){
var G__37051 = cljs.core.first(seq37050);
var seq37050__$1 = cljs.core.next(seq37050);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37051,seq37050__$1);
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
var G__37067 = arguments.length;
switch (G__37067) {
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
var c__27317__auto___40850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_37129){
var state_val_37132 = (state_37129[(1)]);
if((state_val_37132 === (7))){
var inst_37113 = (state_37129[(2)]);
var state_37129__$1 = state_37129;
var statearr_37142_40852 = state_37129__$1;
(statearr_37142_40852[(2)] = inst_37113);

(statearr_37142_40852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37132 === (1))){
var state_37129__$1 = state_37129;
var statearr_37144_40854 = state_37129__$1;
(statearr_37144_40854[(2)] = null);

(statearr_37144_40854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37132 === (4))){
var inst_37092 = (state_37129[(7)]);
var inst_37092__$1 = (state_37129[(2)]);
var inst_37097 = (inst_37092__$1 == null);
var state_37129__$1 = (function (){var statearr_37149 = state_37129;
(statearr_37149[(7)] = inst_37092__$1);

return statearr_37149;
})();
if(cljs.core.truth_(inst_37097)){
var statearr_37150_40855 = state_37129__$1;
(statearr_37150_40855[(1)] = (5));

} else {
var statearr_37151_40856 = state_37129__$1;
(statearr_37151_40856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37132 === (13))){
var state_37129__$1 = state_37129;
var statearr_37158_40857 = state_37129__$1;
(statearr_37158_40857[(2)] = null);

(statearr_37158_40857[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37132 === (6))){
var inst_37092 = (state_37129[(7)]);
var state_37129__$1 = state_37129;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37129__$1,(11),to,inst_37092);
} else {
if((state_val_37132 === (3))){
var inst_37116 = (state_37129[(2)]);
var state_37129__$1 = state_37129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37129__$1,inst_37116);
} else {
if((state_val_37132 === (12))){
var state_37129__$1 = state_37129;
var statearr_37164_40858 = state_37129__$1;
(statearr_37164_40858[(2)] = null);

(statearr_37164_40858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37132 === (2))){
var state_37129__$1 = state_37129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37129__$1,(4),from);
} else {
if((state_val_37132 === (11))){
var inst_37106 = (state_37129[(2)]);
var state_37129__$1 = state_37129;
if(cljs.core.truth_(inst_37106)){
var statearr_37168_40859 = state_37129__$1;
(statearr_37168_40859[(1)] = (12));

} else {
var statearr_37172_40860 = state_37129__$1;
(statearr_37172_40860[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37132 === (9))){
var state_37129__$1 = state_37129;
var statearr_37174_40861 = state_37129__$1;
(statearr_37174_40861[(2)] = null);

(statearr_37174_40861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37132 === (5))){
var state_37129__$1 = state_37129;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37175_40862 = state_37129__$1;
(statearr_37175_40862[(1)] = (8));

} else {
var statearr_37176_40863 = state_37129__$1;
(statearr_37176_40863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37132 === (14))){
var inst_37111 = (state_37129[(2)]);
var state_37129__$1 = state_37129;
var statearr_37178_40864 = state_37129__$1;
(statearr_37178_40864[(2)] = inst_37111);

(statearr_37178_40864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37132 === (10))){
var inst_37103 = (state_37129[(2)]);
var state_37129__$1 = state_37129;
var statearr_37182_40865 = state_37129__$1;
(statearr_37182_40865[(2)] = inst_37103);

(statearr_37182_40865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37132 === (8))){
var inst_37100 = cljs.core.async.close_BANG_(to);
var state_37129__$1 = state_37129;
var statearr_37185_40869 = state_37129__$1;
(statearr_37185_40869[(2)] = inst_37100);

(statearr_37185_40869[(1)] = (10));


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
var cljs$core$async$state_machine__27139__auto__ = null;
var cljs$core$async$state_machine__27139__auto____0 = (function (){
var statearr_37191 = [null,null,null,null,null,null,null,null];
(statearr_37191[(0)] = cljs$core$async$state_machine__27139__auto__);

(statearr_37191[(1)] = (1));

return statearr_37191;
});
var cljs$core$async$state_machine__27139__auto____1 = (function (state_37129){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_37129);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e37193){var ex__27142__auto__ = e37193;
var statearr_37194_40876 = state_37129;
(statearr_37194_40876[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_37129[(4)]))){
var statearr_37195_40877 = state_37129;
(statearr_37195_40877[(1)] = cljs.core.first((state_37129[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40878 = state_37129;
state_37129 = G__40878;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$state_machine__27139__auto__ = function(state_37129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27139__auto____1.call(this,state_37129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27139__auto____0;
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27139__auto____1;
return cljs$core$async$state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_37200 = f__27318__auto__();
(statearr_37200[(6)] = c__27317__auto___40850);

return statearr_37200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
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
var process__$1 = (function (p__37269){
var vec__37273 = p__37269;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37273,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37273,(1),null);
var job = vec__37273;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27317__auto___40907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_37281){
var state_val_37282 = (state_37281[(1)]);
if((state_val_37282 === (1))){
var state_37281__$1 = state_37281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37281__$1,(2),res,v);
} else {
if((state_val_37282 === (2))){
var inst_37278 = (state_37281[(2)]);
var inst_37279 = cljs.core.async.close_BANG_(res);
var state_37281__$1 = (function (){var statearr_37286 = state_37281;
(statearr_37286[(7)] = inst_37278);

return statearr_37286;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37281__$1,inst_37279);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____0 = (function (){
var statearr_37288 = [null,null,null,null,null,null,null,null];
(statearr_37288[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__);

(statearr_37288[(1)] = (1));

return statearr_37288;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____1 = (function (state_37281){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_37281);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e37295){var ex__27142__auto__ = e37295;
var statearr_37300_40909 = state_37281;
(statearr_37300_40909[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_37281[(4)]))){
var statearr_37303_40910 = state_37281;
(statearr_37303_40910[(1)] = cljs.core.first((state_37281[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40913 = state_37281;
state_37281 = G__40913;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__ = function(state_37281){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____1.call(this,state_37281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_37314 = f__27318__auto__();
(statearr_37314[(6)] = c__27317__auto___40907);

return statearr_37314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37318){
var vec__37320 = p__37318;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37320,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37320,(1),null);
var job = vec__37320;
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
var n__5636__auto___40929 = n;
var __40930 = (0);
while(true){
if((__40930 < n__5636__auto___40929)){
var G__37333_40931 = type;
var G__37333_40932__$1 = (((G__37333_40931 instanceof cljs.core.Keyword))?G__37333_40931.fqn:null);
switch (G__37333_40932__$1) {
case "compute":
var c__27317__auto___40934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40930,c__27317__auto___40934,G__37333_40931,G__37333_40932__$1,n__5636__auto___40929,jobs,results,process__$1,async){
return (function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = ((function (__40930,c__27317__auto___40934,G__37333_40931,G__37333_40932__$1,n__5636__auto___40929,jobs,results,process__$1,async){
return (function (state_37361){
var state_val_37362 = (state_37361[(1)]);
if((state_val_37362 === (1))){
var state_37361__$1 = state_37361;
var statearr_37387_40935 = state_37361__$1;
(statearr_37387_40935[(2)] = null);

(statearr_37387_40935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37362 === (2))){
var state_37361__$1 = state_37361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37361__$1,(4),jobs);
} else {
if((state_val_37362 === (3))){
var inst_37359 = (state_37361[(2)]);
var state_37361__$1 = state_37361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37361__$1,inst_37359);
} else {
if((state_val_37362 === (4))){
var inst_37347 = (state_37361[(2)]);
var inst_37348 = process__$1(inst_37347);
var state_37361__$1 = state_37361;
if(cljs.core.truth_(inst_37348)){
var statearr_37394_40938 = state_37361__$1;
(statearr_37394_40938[(1)] = (5));

} else {
var statearr_37400_40939 = state_37361__$1;
(statearr_37400_40939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37362 === (5))){
var state_37361__$1 = state_37361;
var statearr_37402_40940 = state_37361__$1;
(statearr_37402_40940[(2)] = null);

(statearr_37402_40940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37362 === (6))){
var state_37361__$1 = state_37361;
var statearr_37403_40941 = state_37361__$1;
(statearr_37403_40941[(2)] = null);

(statearr_37403_40941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37362 === (7))){
var inst_37357 = (state_37361[(2)]);
var state_37361__$1 = state_37361;
var statearr_37404_40943 = state_37361__$1;
(statearr_37404_40943[(2)] = inst_37357);

(statearr_37404_40943[(1)] = (3));


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
});})(__40930,c__27317__auto___40934,G__37333_40931,G__37333_40932__$1,n__5636__auto___40929,jobs,results,process__$1,async))
;
return ((function (__40930,switch__27138__auto__,c__27317__auto___40934,G__37333_40931,G__37333_40932__$1,n__5636__auto___40929,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____0 = (function (){
var statearr_37405 = [null,null,null,null,null,null,null];
(statearr_37405[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__);

(statearr_37405[(1)] = (1));

return statearr_37405;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____1 = (function (state_37361){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_37361);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e37406){var ex__27142__auto__ = e37406;
var statearr_37407_40946 = state_37361;
(statearr_37407_40946[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_37361[(4)]))){
var statearr_37408_40947 = state_37361;
(statearr_37408_40947[(1)] = cljs.core.first((state_37361[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40948 = state_37361;
state_37361 = G__40948;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__ = function(state_37361){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____1.call(this,state_37361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__;
})()
;})(__40930,switch__27138__auto__,c__27317__auto___40934,G__37333_40931,G__37333_40932__$1,n__5636__auto___40929,jobs,results,process__$1,async))
})();
var state__27319__auto__ = (function (){var statearr_37414 = f__27318__auto__();
(statearr_37414[(6)] = c__27317__auto___40934);

return statearr_37414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
});})(__40930,c__27317__auto___40934,G__37333_40931,G__37333_40932__$1,n__5636__auto___40929,jobs,results,process__$1,async))
);


break;
case "async":
var c__27317__auto___40949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40930,c__27317__auto___40949,G__37333_40931,G__37333_40932__$1,n__5636__auto___40929,jobs,results,process__$1,async){
return (function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = ((function (__40930,c__27317__auto___40949,G__37333_40931,G__37333_40932__$1,n__5636__auto___40929,jobs,results,process__$1,async){
return (function (state_37427){
var state_val_37428 = (state_37427[(1)]);
if((state_val_37428 === (1))){
var state_37427__$1 = state_37427;
var statearr_37429_40950 = state_37427__$1;
(statearr_37429_40950[(2)] = null);

(statearr_37429_40950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37428 === (2))){
var state_37427__$1 = state_37427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37427__$1,(4),jobs);
} else {
if((state_val_37428 === (3))){
var inst_37425 = (state_37427[(2)]);
var state_37427__$1 = state_37427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37427__$1,inst_37425);
} else {
if((state_val_37428 === (4))){
var inst_37417 = (state_37427[(2)]);
var inst_37418 = async(inst_37417);
var state_37427__$1 = state_37427;
if(cljs.core.truth_(inst_37418)){
var statearr_37434_40951 = state_37427__$1;
(statearr_37434_40951[(1)] = (5));

} else {
var statearr_37439_40952 = state_37427__$1;
(statearr_37439_40952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37428 === (5))){
var state_37427__$1 = state_37427;
var statearr_37444_40953 = state_37427__$1;
(statearr_37444_40953[(2)] = null);

(statearr_37444_40953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37428 === (6))){
var state_37427__$1 = state_37427;
var statearr_37445_40954 = state_37427__$1;
(statearr_37445_40954[(2)] = null);

(statearr_37445_40954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37428 === (7))){
var inst_37423 = (state_37427[(2)]);
var state_37427__$1 = state_37427;
var statearr_37450_40955 = state_37427__$1;
(statearr_37450_40955[(2)] = inst_37423);

(statearr_37450_40955[(1)] = (3));


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
});})(__40930,c__27317__auto___40949,G__37333_40931,G__37333_40932__$1,n__5636__auto___40929,jobs,results,process__$1,async))
;
return ((function (__40930,switch__27138__auto__,c__27317__auto___40949,G__37333_40931,G__37333_40932__$1,n__5636__auto___40929,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____0 = (function (){
var statearr_37452 = [null,null,null,null,null,null,null];
(statearr_37452[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__);

(statearr_37452[(1)] = (1));

return statearr_37452;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____1 = (function (state_37427){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_37427);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e37453){var ex__27142__auto__ = e37453;
var statearr_37454_40956 = state_37427;
(statearr_37454_40956[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_37427[(4)]))){
var statearr_37455_40957 = state_37427;
(statearr_37455_40957[(1)] = cljs.core.first((state_37427[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40958 = state_37427;
state_37427 = G__40958;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__ = function(state_37427){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____1.call(this,state_37427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__;
})()
;})(__40930,switch__27138__auto__,c__27317__auto___40949,G__37333_40931,G__37333_40932__$1,n__5636__auto___40929,jobs,results,process__$1,async))
})();
var state__27319__auto__ = (function (){var statearr_37456 = f__27318__auto__();
(statearr_37456[(6)] = c__27317__auto___40949);

return statearr_37456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
});})(__40930,c__27317__auto___40949,G__37333_40931,G__37333_40932__$1,n__5636__auto___40929,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37333_40932__$1)].join('')));

}

var G__40959 = (__40930 + (1));
__40930 = G__40959;
continue;
} else {
}
break;
}

var c__27317__auto___40960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_37486){
var state_val_37487 = (state_37486[(1)]);
if((state_val_37487 === (7))){
var inst_37481 = (state_37486[(2)]);
var state_37486__$1 = state_37486;
var statearr_37493_40961 = state_37486__$1;
(statearr_37493_40961[(2)] = inst_37481);

(statearr_37493_40961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37487 === (1))){
var state_37486__$1 = state_37486;
var statearr_37494_40962 = state_37486__$1;
(statearr_37494_40962[(2)] = null);

(statearr_37494_40962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37487 === (4))){
var inst_37463 = (state_37486[(7)]);
var inst_37463__$1 = (state_37486[(2)]);
var inst_37464 = (inst_37463__$1 == null);
var state_37486__$1 = (function (){var statearr_37496 = state_37486;
(statearr_37496[(7)] = inst_37463__$1);

return statearr_37496;
})();
if(cljs.core.truth_(inst_37464)){
var statearr_37497_40963 = state_37486__$1;
(statearr_37497_40963[(1)] = (5));

} else {
var statearr_37499_40964 = state_37486__$1;
(statearr_37499_40964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37487 === (6))){
var inst_37469 = (state_37486[(8)]);
var inst_37463 = (state_37486[(7)]);
var inst_37469__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37470 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37471 = [inst_37463,inst_37469__$1];
var inst_37472 = (new cljs.core.PersistentVector(null,2,(5),inst_37470,inst_37471,null));
var state_37486__$1 = (function (){var statearr_37503 = state_37486;
(statearr_37503[(8)] = inst_37469__$1);

return statearr_37503;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37486__$1,(8),jobs,inst_37472);
} else {
if((state_val_37487 === (3))){
var inst_37483 = (state_37486[(2)]);
var state_37486__$1 = state_37486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37486__$1,inst_37483);
} else {
if((state_val_37487 === (2))){
var state_37486__$1 = state_37486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37486__$1,(4),from);
} else {
if((state_val_37487 === (9))){
var inst_37476 = (state_37486[(2)]);
var state_37486__$1 = (function (){var statearr_37507 = state_37486;
(statearr_37507[(9)] = inst_37476);

return statearr_37507;
})();
var statearr_37508_40966 = state_37486__$1;
(statearr_37508_40966[(2)] = null);

(statearr_37508_40966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37487 === (5))){
var inst_37466 = cljs.core.async.close_BANG_(jobs);
var state_37486__$1 = state_37486;
var statearr_37510_40968 = state_37486__$1;
(statearr_37510_40968[(2)] = inst_37466);

(statearr_37510_40968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37487 === (8))){
var inst_37469 = (state_37486[(8)]);
var inst_37474 = (state_37486[(2)]);
var state_37486__$1 = (function (){var statearr_37513 = state_37486;
(statearr_37513[(10)] = inst_37474);

return statearr_37513;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37486__$1,(9),results,inst_37469);
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
var cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____0 = (function (){
var statearr_37516 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37516[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__);

(statearr_37516[(1)] = (1));

return statearr_37516;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____1 = (function (state_37486){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_37486);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e37517){var ex__27142__auto__ = e37517;
var statearr_37518_40972 = state_37486;
(statearr_37518_40972[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_37486[(4)]))){
var statearr_37519_40973 = state_37486;
(statearr_37519_40973[(1)] = cljs.core.first((state_37486[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40974 = state_37486;
state_37486 = G__40974;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__ = function(state_37486){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____1.call(this,state_37486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_37520 = f__27318__auto__();
(statearr_37520[(6)] = c__27317__auto___40960);

return statearr_37520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
}));


var c__27317__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_37811){
var state_val_37812 = (state_37811[(1)]);
if((state_val_37812 === (7))){
var inst_37803 = (state_37811[(2)]);
var state_37811__$1 = state_37811;
var statearr_37816_40975 = state_37811__$1;
(statearr_37816_40975[(2)] = inst_37803);

(statearr_37816_40975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (20))){
var state_37811__$1 = state_37811;
var statearr_37820_40977 = state_37811__$1;
(statearr_37820_40977[(2)] = null);

(statearr_37820_40977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (1))){
var state_37811__$1 = state_37811;
var statearr_37821_40981 = state_37811__$1;
(statearr_37821_40981[(2)] = null);

(statearr_37821_40981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (4))){
var inst_37524 = (state_37811[(7)]);
var inst_37524__$1 = (state_37811[(2)]);
var inst_37526 = (inst_37524__$1 == null);
var state_37811__$1 = (function (){var statearr_37823 = state_37811;
(statearr_37823[(7)] = inst_37524__$1);

return statearr_37823;
})();
if(cljs.core.truth_(inst_37526)){
var statearr_37824_40982 = state_37811__$1;
(statearr_37824_40982[(1)] = (5));

} else {
var statearr_37825_40983 = state_37811__$1;
(statearr_37825_40983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (15))){
var inst_37782 = (state_37811[(8)]);
var state_37811__$1 = state_37811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37811__$1,(18),to,inst_37782);
} else {
if((state_val_37812 === (21))){
var inst_37798 = (state_37811[(2)]);
var state_37811__$1 = state_37811;
var statearr_37829_40985 = state_37811__$1;
(statearr_37829_40985[(2)] = inst_37798);

(statearr_37829_40985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (13))){
var inst_37800 = (state_37811[(2)]);
var state_37811__$1 = (function (){var statearr_37832 = state_37811;
(statearr_37832[(9)] = inst_37800);

return statearr_37832;
})();
var statearr_37833_40990 = state_37811__$1;
(statearr_37833_40990[(2)] = null);

(statearr_37833_40990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (6))){
var inst_37524 = (state_37811[(7)]);
var state_37811__$1 = state_37811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37811__$1,(11),inst_37524);
} else {
if((state_val_37812 === (17))){
var inst_37793 = (state_37811[(2)]);
var state_37811__$1 = state_37811;
if(cljs.core.truth_(inst_37793)){
var statearr_37837_40991 = state_37811__$1;
(statearr_37837_40991[(1)] = (19));

} else {
var statearr_37838_40992 = state_37811__$1;
(statearr_37838_40992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (3))){
var inst_37805 = (state_37811[(2)]);
var state_37811__$1 = state_37811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37811__$1,inst_37805);
} else {
if((state_val_37812 === (12))){
var inst_37779 = (state_37811[(10)]);
var state_37811__$1 = state_37811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37811__$1,(14),inst_37779);
} else {
if((state_val_37812 === (2))){
var state_37811__$1 = state_37811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37811__$1,(4),results);
} else {
if((state_val_37812 === (19))){
var state_37811__$1 = state_37811;
var statearr_37840_40993 = state_37811__$1;
(statearr_37840_40993[(2)] = null);

(statearr_37840_40993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (11))){
var inst_37779 = (state_37811[(2)]);
var state_37811__$1 = (function (){var statearr_37841 = state_37811;
(statearr_37841[(10)] = inst_37779);

return statearr_37841;
})();
var statearr_37845_40996 = state_37811__$1;
(statearr_37845_40996[(2)] = null);

(statearr_37845_40996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (9))){
var state_37811__$1 = state_37811;
var statearr_37848_40997 = state_37811__$1;
(statearr_37848_40997[(2)] = null);

(statearr_37848_40997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (5))){
var state_37811__$1 = state_37811;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37849_40998 = state_37811__$1;
(statearr_37849_40998[(1)] = (8));

} else {
var statearr_37850_41000 = state_37811__$1;
(statearr_37850_41000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (14))){
var inst_37782 = (state_37811[(8)]);
var inst_37784 = (state_37811[(11)]);
var inst_37782__$1 = (state_37811[(2)]);
var inst_37783 = (inst_37782__$1 == null);
var inst_37784__$1 = cljs.core.not(inst_37783);
var state_37811__$1 = (function (){var statearr_37851 = state_37811;
(statearr_37851[(8)] = inst_37782__$1);

(statearr_37851[(11)] = inst_37784__$1);

return statearr_37851;
})();
if(inst_37784__$1){
var statearr_37856_41004 = state_37811__$1;
(statearr_37856_41004[(1)] = (15));

} else {
var statearr_37858_41017 = state_37811__$1;
(statearr_37858_41017[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (16))){
var inst_37784 = (state_37811[(11)]);
var state_37811__$1 = state_37811;
var statearr_37859_41018 = state_37811__$1;
(statearr_37859_41018[(2)] = inst_37784);

(statearr_37859_41018[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (10))){
var inst_37776 = (state_37811[(2)]);
var state_37811__$1 = state_37811;
var statearr_37861_41019 = state_37811__$1;
(statearr_37861_41019[(2)] = inst_37776);

(statearr_37861_41019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (18))){
var inst_37790 = (state_37811[(2)]);
var state_37811__$1 = state_37811;
var statearr_37862_41020 = state_37811__$1;
(statearr_37862_41020[(2)] = inst_37790);

(statearr_37862_41020[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (8))){
var inst_37530 = cljs.core.async.close_BANG_(to);
var state_37811__$1 = state_37811;
var statearr_37863_41021 = state_37811__$1;
(statearr_37863_41021[(2)] = inst_37530);

(statearr_37863_41021[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____0 = (function (){
var statearr_37864 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37864[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__);

(statearr_37864[(1)] = (1));

return statearr_37864;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____1 = (function (state_37811){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_37811);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e37865){var ex__27142__auto__ = e37865;
var statearr_37878_41022 = state_37811;
(statearr_37878_41022[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_37811[(4)]))){
var statearr_37879_41024 = state_37811;
(statearr_37879_41024[(1)] = cljs.core.first((state_37811[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41025 = state_37811;
state_37811 = G__41025;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__ = function(state_37811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____1.call(this,state_37811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27139__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_37880 = f__27318__auto__();
(statearr_37880[(6)] = c__27317__auto__);

return statearr_37880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
}));

return c__27317__auto__;
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
var G__37883 = arguments.length;
switch (G__37883) {
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
var G__37887 = arguments.length;
switch (G__37887) {
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
var G__37892 = arguments.length;
switch (G__37892) {
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
var c__27317__auto___41037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_37921){
var state_val_37922 = (state_37921[(1)]);
if((state_val_37922 === (7))){
var inst_37917 = (state_37921[(2)]);
var state_37921__$1 = state_37921;
var statearr_37926_41039 = state_37921__$1;
(statearr_37926_41039[(2)] = inst_37917);

(statearr_37926_41039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37922 === (1))){
var state_37921__$1 = state_37921;
var statearr_37928_41040 = state_37921__$1;
(statearr_37928_41040[(2)] = null);

(statearr_37928_41040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37922 === (4))){
var inst_37898 = (state_37921[(7)]);
var inst_37898__$1 = (state_37921[(2)]);
var inst_37899 = (inst_37898__$1 == null);
var state_37921__$1 = (function (){var statearr_37929 = state_37921;
(statearr_37929[(7)] = inst_37898__$1);

return statearr_37929;
})();
if(cljs.core.truth_(inst_37899)){
var statearr_37930_41042 = state_37921__$1;
(statearr_37930_41042[(1)] = (5));

} else {
var statearr_37931_41043 = state_37921__$1;
(statearr_37931_41043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37922 === (13))){
var state_37921__$1 = state_37921;
var statearr_37937_41044 = state_37921__$1;
(statearr_37937_41044[(2)] = null);

(statearr_37937_41044[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37922 === (6))){
var inst_37898 = (state_37921[(7)]);
var inst_37904 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37898) : p.call(null,inst_37898));
var state_37921__$1 = state_37921;
if(cljs.core.truth_(inst_37904)){
var statearr_37939_41045 = state_37921__$1;
(statearr_37939_41045[(1)] = (9));

} else {
var statearr_37940_41046 = state_37921__$1;
(statearr_37940_41046[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37922 === (3))){
var inst_37919 = (state_37921[(2)]);
var state_37921__$1 = state_37921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37921__$1,inst_37919);
} else {
if((state_val_37922 === (12))){
var state_37921__$1 = state_37921;
var statearr_37945_41047 = state_37921__$1;
(statearr_37945_41047[(2)] = null);

(statearr_37945_41047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37922 === (2))){
var state_37921__$1 = state_37921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37921__$1,(4),ch);
} else {
if((state_val_37922 === (11))){
var inst_37898 = (state_37921[(7)]);
var inst_37908 = (state_37921[(2)]);
var state_37921__$1 = state_37921;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37921__$1,(8),inst_37908,inst_37898);
} else {
if((state_val_37922 === (9))){
var state_37921__$1 = state_37921;
var statearr_37946_41048 = state_37921__$1;
(statearr_37946_41048[(2)] = tc);

(statearr_37946_41048[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37922 === (5))){
var inst_37901 = cljs.core.async.close_BANG_(tc);
var inst_37902 = cljs.core.async.close_BANG_(fc);
var state_37921__$1 = (function (){var statearr_37947 = state_37921;
(statearr_37947[(8)] = inst_37901);

return statearr_37947;
})();
var statearr_37951_41049 = state_37921__$1;
(statearr_37951_41049[(2)] = inst_37902);

(statearr_37951_41049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37922 === (14))){
var inst_37915 = (state_37921[(2)]);
var state_37921__$1 = state_37921;
var statearr_37954_41050 = state_37921__$1;
(statearr_37954_41050[(2)] = inst_37915);

(statearr_37954_41050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37922 === (10))){
var state_37921__$1 = state_37921;
var statearr_37955_41053 = state_37921__$1;
(statearr_37955_41053[(2)] = fc);

(statearr_37955_41053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37922 === (8))){
var inst_37910 = (state_37921[(2)]);
var state_37921__$1 = state_37921;
if(cljs.core.truth_(inst_37910)){
var statearr_37957_41054 = state_37921__$1;
(statearr_37957_41054[(1)] = (12));

} else {
var statearr_37958_41055 = state_37921__$1;
(statearr_37958_41055[(1)] = (13));

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
var cljs$core$async$state_machine__27139__auto__ = null;
var cljs$core$async$state_machine__27139__auto____0 = (function (){
var statearr_37959 = [null,null,null,null,null,null,null,null,null];
(statearr_37959[(0)] = cljs$core$async$state_machine__27139__auto__);

(statearr_37959[(1)] = (1));

return statearr_37959;
});
var cljs$core$async$state_machine__27139__auto____1 = (function (state_37921){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_37921);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e37960){var ex__27142__auto__ = e37960;
var statearr_37961_41056 = state_37921;
(statearr_37961_41056[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_37921[(4)]))){
var statearr_37962_41057 = state_37921;
(statearr_37962_41057[(1)] = cljs.core.first((state_37921[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41058 = state_37921;
state_37921 = G__41058;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$state_machine__27139__auto__ = function(state_37921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27139__auto____1.call(this,state_37921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27139__auto____0;
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27139__auto____1;
return cljs$core$async$state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_37963 = f__27318__auto__();
(statearr_37963[(6)] = c__27317__auto___41037);

return statearr_37963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
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
var c__27317__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_37987){
var state_val_37988 = (state_37987[(1)]);
if((state_val_37988 === (7))){
var inst_37983 = (state_37987[(2)]);
var state_37987__$1 = state_37987;
var statearr_37994_41067 = state_37987__$1;
(statearr_37994_41067[(2)] = inst_37983);

(statearr_37994_41067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (1))){
var inst_37964 = init;
var inst_37965 = inst_37964;
var state_37987__$1 = (function (){var statearr_37995 = state_37987;
(statearr_37995[(7)] = inst_37965);

return statearr_37995;
})();
var statearr_37996_41068 = state_37987__$1;
(statearr_37996_41068[(2)] = null);

(statearr_37996_41068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (4))){
var inst_37968 = (state_37987[(8)]);
var inst_37968__$1 = (state_37987[(2)]);
var inst_37969 = (inst_37968__$1 == null);
var state_37987__$1 = (function (){var statearr_37999 = state_37987;
(statearr_37999[(8)] = inst_37968__$1);

return statearr_37999;
})();
if(cljs.core.truth_(inst_37969)){
var statearr_38003_41070 = state_37987__$1;
(statearr_38003_41070[(1)] = (5));

} else {
var statearr_38005_41071 = state_37987__$1;
(statearr_38005_41071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (6))){
var inst_37965 = (state_37987[(7)]);
var inst_37968 = (state_37987[(8)]);
var inst_37972 = (state_37987[(9)]);
var inst_37972__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37965,inst_37968) : f.call(null,inst_37965,inst_37968));
var inst_37973 = cljs.core.reduced_QMARK_(inst_37972__$1);
var state_37987__$1 = (function (){var statearr_38006 = state_37987;
(statearr_38006[(9)] = inst_37972__$1);

return statearr_38006;
})();
if(inst_37973){
var statearr_38007_41075 = state_37987__$1;
(statearr_38007_41075[(1)] = (8));

} else {
var statearr_38008_41076 = state_37987__$1;
(statearr_38008_41076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (3))){
var inst_37985 = (state_37987[(2)]);
var state_37987__$1 = state_37987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37987__$1,inst_37985);
} else {
if((state_val_37988 === (2))){
var state_37987__$1 = state_37987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37987__$1,(4),ch);
} else {
if((state_val_37988 === (9))){
var inst_37972 = (state_37987[(9)]);
var inst_37965 = inst_37972;
var state_37987__$1 = (function (){var statearr_38010 = state_37987;
(statearr_38010[(7)] = inst_37965);

return statearr_38010;
})();
var statearr_38011_41080 = state_37987__$1;
(statearr_38011_41080[(2)] = null);

(statearr_38011_41080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (5))){
var inst_37965 = (state_37987[(7)]);
var state_37987__$1 = state_37987;
var statearr_38012_41081 = state_37987__$1;
(statearr_38012_41081[(2)] = inst_37965);

(statearr_38012_41081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (10))){
var inst_37981 = (state_37987[(2)]);
var state_37987__$1 = state_37987;
var statearr_38014_41082 = state_37987__$1;
(statearr_38014_41082[(2)] = inst_37981);

(statearr_38014_41082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (8))){
var inst_37972 = (state_37987[(9)]);
var inst_37977 = cljs.core.deref(inst_37972);
var state_37987__$1 = state_37987;
var statearr_38016_41083 = state_37987__$1;
(statearr_38016_41083[(2)] = inst_37977);

(statearr_38016_41083[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__27139__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27139__auto____0 = (function (){
var statearr_38018 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38018[(0)] = cljs$core$async$reduce_$_state_machine__27139__auto__);

(statearr_38018[(1)] = (1));

return statearr_38018;
});
var cljs$core$async$reduce_$_state_machine__27139__auto____1 = (function (state_37987){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_37987);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e38022){var ex__27142__auto__ = e38022;
var statearr_38023_41087 = state_37987;
(statearr_38023_41087[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_37987[(4)]))){
var statearr_38024_41088 = state_37987;
(statearr_38024_41088[(1)] = cljs.core.first((state_37987[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41100 = state_37987;
state_37987 = G__41100;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27139__auto__ = function(state_37987){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27139__auto____1.call(this,state_37987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27139__auto____0;
cljs$core$async$reduce_$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27139__auto____1;
return cljs$core$async$reduce_$_state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_38025 = f__27318__auto__();
(statearr_38025[(6)] = c__27317__auto__);

return statearr_38025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
}));

return c__27317__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__27317__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_38035){
var state_val_38036 = (state_38035[(1)]);
if((state_val_38036 === (1))){
var inst_38030 = cljs.core.async.reduce(f__$1,init,ch);
var state_38035__$1 = state_38035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38035__$1,(2),inst_38030);
} else {
if((state_val_38036 === (2))){
var inst_38032 = (state_38035[(2)]);
var inst_38033 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_38032) : f__$1.call(null,inst_38032));
var state_38035__$1 = state_38035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38035__$1,inst_38033);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27139__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27139__auto____0 = (function (){
var statearr_38038 = [null,null,null,null,null,null,null];
(statearr_38038[(0)] = cljs$core$async$transduce_$_state_machine__27139__auto__);

(statearr_38038[(1)] = (1));

return statearr_38038;
});
var cljs$core$async$transduce_$_state_machine__27139__auto____1 = (function (state_38035){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_38035);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e38040){var ex__27142__auto__ = e38040;
var statearr_38041_41114 = state_38035;
(statearr_38041_41114[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_38035[(4)]))){
var statearr_38044_41115 = state_38035;
(statearr_38044_41115[(1)] = cljs.core.first((state_38035[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41116 = state_38035;
state_38035 = G__41116;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27139__auto__ = function(state_38035){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27139__auto____1.call(this,state_38035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27139__auto____0;
cljs$core$async$transduce_$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27139__auto____1;
return cljs$core$async$transduce_$_state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_38048 = f__27318__auto__();
(statearr_38048[(6)] = c__27317__auto__);

return statearr_38048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
}));

return c__27317__auto__;
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
var G__38050 = arguments.length;
switch (G__38050) {
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
var c__27317__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_38080){
var state_val_38081 = (state_38080[(1)]);
if((state_val_38081 === (7))){
var inst_38062 = (state_38080[(2)]);
var state_38080__$1 = state_38080;
var statearr_38085_41134 = state_38080__$1;
(statearr_38085_41134[(2)] = inst_38062);

(statearr_38085_41134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38081 === (1))){
var inst_38054 = cljs.core.seq(coll);
var inst_38055 = inst_38054;
var state_38080__$1 = (function (){var statearr_38086 = state_38080;
(statearr_38086[(7)] = inst_38055);

return statearr_38086;
})();
var statearr_38087_41138 = state_38080__$1;
(statearr_38087_41138[(2)] = null);

(statearr_38087_41138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38081 === (4))){
var inst_38055 = (state_38080[(7)]);
var inst_38060 = cljs.core.first(inst_38055);
var state_38080__$1 = state_38080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38080__$1,(7),ch,inst_38060);
} else {
if((state_val_38081 === (13))){
var inst_38074 = (state_38080[(2)]);
var state_38080__$1 = state_38080;
var statearr_38088_41143 = state_38080__$1;
(statearr_38088_41143[(2)] = inst_38074);

(statearr_38088_41143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38081 === (6))){
var inst_38065 = (state_38080[(2)]);
var state_38080__$1 = state_38080;
if(cljs.core.truth_(inst_38065)){
var statearr_38090_41144 = state_38080__$1;
(statearr_38090_41144[(1)] = (8));

} else {
var statearr_38091_41145 = state_38080__$1;
(statearr_38091_41145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38081 === (3))){
var inst_38078 = (state_38080[(2)]);
var state_38080__$1 = state_38080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38080__$1,inst_38078);
} else {
if((state_val_38081 === (12))){
var state_38080__$1 = state_38080;
var statearr_38092_41146 = state_38080__$1;
(statearr_38092_41146[(2)] = null);

(statearr_38092_41146[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38081 === (2))){
var inst_38055 = (state_38080[(7)]);
var state_38080__$1 = state_38080;
if(cljs.core.truth_(inst_38055)){
var statearr_38093_41157 = state_38080__$1;
(statearr_38093_41157[(1)] = (4));

} else {
var statearr_38094_41158 = state_38080__$1;
(statearr_38094_41158[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38081 === (11))){
var inst_38071 = cljs.core.async.close_BANG_(ch);
var state_38080__$1 = state_38080;
var statearr_38096_41159 = state_38080__$1;
(statearr_38096_41159[(2)] = inst_38071);

(statearr_38096_41159[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38081 === (9))){
var state_38080__$1 = state_38080;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38098_41160 = state_38080__$1;
(statearr_38098_41160[(1)] = (11));

} else {
var statearr_38100_41161 = state_38080__$1;
(statearr_38100_41161[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38081 === (5))){
var inst_38055 = (state_38080[(7)]);
var state_38080__$1 = state_38080;
var statearr_38103_41162 = state_38080__$1;
(statearr_38103_41162[(2)] = inst_38055);

(statearr_38103_41162[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38081 === (10))){
var inst_38076 = (state_38080[(2)]);
var state_38080__$1 = state_38080;
var statearr_38108_41163 = state_38080__$1;
(statearr_38108_41163[(2)] = inst_38076);

(statearr_38108_41163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38081 === (8))){
var inst_38055 = (state_38080[(7)]);
var inst_38067 = cljs.core.next(inst_38055);
var inst_38055__$1 = inst_38067;
var state_38080__$1 = (function (){var statearr_38111 = state_38080;
(statearr_38111[(7)] = inst_38055__$1);

return statearr_38111;
})();
var statearr_38112_41165 = state_38080__$1;
(statearr_38112_41165[(2)] = null);

(statearr_38112_41165[(1)] = (2));


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
var cljs$core$async$state_machine__27139__auto__ = null;
var cljs$core$async$state_machine__27139__auto____0 = (function (){
var statearr_38115 = [null,null,null,null,null,null,null,null];
(statearr_38115[(0)] = cljs$core$async$state_machine__27139__auto__);

(statearr_38115[(1)] = (1));

return statearr_38115;
});
var cljs$core$async$state_machine__27139__auto____1 = (function (state_38080){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_38080);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e38122){var ex__27142__auto__ = e38122;
var statearr_38123_41166 = state_38080;
(statearr_38123_41166[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_38080[(4)]))){
var statearr_38124_41167 = state_38080;
(statearr_38124_41167[(1)] = cljs.core.first((state_38080[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41168 = state_38080;
state_38080 = G__41168;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$state_machine__27139__auto__ = function(state_38080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27139__auto____1.call(this,state_38080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27139__auto____0;
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27139__auto____1;
return cljs$core$async$state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_38125 = f__27318__auto__();
(statearr_38125[(6)] = c__27317__auto__);

return statearr_38125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
}));

return c__27317__auto__;
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
var G__38139 = arguments.length;
switch (G__38139) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_41179 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_41179(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_41184 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_41184(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_41185 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_41185(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_41186 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_41186(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38197 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38197 = (function (ch,cs,meta38198){
this.ch = ch;
this.cs = cs;
this.meta38198 = meta38198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38199,meta38198__$1){
var self__ = this;
var _38199__$1 = this;
return (new cljs.core.async.t_cljs$core$async38197(self__.ch,self__.cs,meta38198__$1));
}));

(cljs.core.async.t_cljs$core$async38197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38199){
var self__ = this;
var _38199__$1 = this;
return self__.meta38198;
}));

(cljs.core.async.t_cljs$core$async38197.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38197.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38197.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38197.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async38197.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async38197.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async38197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38198","meta38198",1951415121,null)], null);
}));

(cljs.core.async.t_cljs$core$async38197.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38197");

(cljs.core.async.t_cljs$core$async38197.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async38197");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38197.
 */
cljs.core.async.__GT_t_cljs$core$async38197 = (function cljs$core$async$mult_$___GT_t_cljs$core$async38197(ch__$1,cs__$1,meta38198){
return (new cljs.core.async.t_cljs$core$async38197(ch__$1,cs__$1,meta38198));
});

}

return (new cljs.core.async.t_cljs$core$async38197(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27317__auto___41196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_38388){
var state_val_38389 = (state_38388[(1)]);
if((state_val_38389 === (7))){
var inst_38383 = (state_38388[(2)]);
var state_38388__$1 = state_38388;
var statearr_38392_41197 = state_38388__$1;
(statearr_38392_41197[(2)] = inst_38383);

(statearr_38392_41197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (20))){
var inst_38269 = (state_38388[(7)]);
var inst_38282 = cljs.core.first(inst_38269);
var inst_38283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38282,(0),null);
var inst_38284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38282,(1),null);
var state_38388__$1 = (function (){var statearr_38394 = state_38388;
(statearr_38394[(8)] = inst_38283);

return statearr_38394;
})();
if(cljs.core.truth_(inst_38284)){
var statearr_38395_41198 = state_38388__$1;
(statearr_38395_41198[(1)] = (22));

} else {
var statearr_38396_41199 = state_38388__$1;
(statearr_38396_41199[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (27))){
var inst_38314 = (state_38388[(9)]);
var inst_38226 = (state_38388[(10)]);
var inst_38316 = (state_38388[(11)]);
var inst_38321 = (state_38388[(12)]);
var inst_38321__$1 = cljs.core._nth(inst_38314,inst_38316);
var inst_38322 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38321__$1,inst_38226,done);
var state_38388__$1 = (function (){var statearr_38397 = state_38388;
(statearr_38397[(12)] = inst_38321__$1);

return statearr_38397;
})();
if(cljs.core.truth_(inst_38322)){
var statearr_38398_41204 = state_38388__$1;
(statearr_38398_41204[(1)] = (30));

} else {
var statearr_38399_41205 = state_38388__$1;
(statearr_38399_41205[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (1))){
var state_38388__$1 = state_38388;
var statearr_38400_41206 = state_38388__$1;
(statearr_38400_41206[(2)] = null);

(statearr_38400_41206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (24))){
var inst_38269 = (state_38388[(7)]);
var inst_38289 = (state_38388[(2)]);
var inst_38290 = cljs.core.next(inst_38269);
var inst_38237 = inst_38290;
var inst_38238 = null;
var inst_38239 = (0);
var inst_38240 = (0);
var state_38388__$1 = (function (){var statearr_38401 = state_38388;
(statearr_38401[(13)] = inst_38238);

(statearr_38401[(14)] = inst_38240);

(statearr_38401[(15)] = inst_38239);

(statearr_38401[(16)] = inst_38237);

(statearr_38401[(17)] = inst_38289);

return statearr_38401;
})();
var statearr_38402_41207 = state_38388__$1;
(statearr_38402_41207[(2)] = null);

(statearr_38402_41207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (39))){
var state_38388__$1 = state_38388;
var statearr_38407_41208 = state_38388__$1;
(statearr_38407_41208[(2)] = null);

(statearr_38407_41208[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (4))){
var inst_38226 = (state_38388[(10)]);
var inst_38226__$1 = (state_38388[(2)]);
var inst_38229 = (inst_38226__$1 == null);
var state_38388__$1 = (function (){var statearr_38408 = state_38388;
(statearr_38408[(10)] = inst_38226__$1);

return statearr_38408;
})();
if(cljs.core.truth_(inst_38229)){
var statearr_38409_41209 = state_38388__$1;
(statearr_38409_41209[(1)] = (5));

} else {
var statearr_38410_41210 = state_38388__$1;
(statearr_38410_41210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (15))){
var inst_38238 = (state_38388[(13)]);
var inst_38240 = (state_38388[(14)]);
var inst_38239 = (state_38388[(15)]);
var inst_38237 = (state_38388[(16)]);
var inst_38260 = (state_38388[(2)]);
var inst_38262 = (inst_38240 + (1));
var tmp38404 = inst_38238;
var tmp38405 = inst_38239;
var tmp38406 = inst_38237;
var inst_38237__$1 = tmp38406;
var inst_38238__$1 = tmp38404;
var inst_38239__$1 = tmp38405;
var inst_38240__$1 = inst_38262;
var state_38388__$1 = (function (){var statearr_38417 = state_38388;
(statearr_38417[(18)] = inst_38260);

(statearr_38417[(13)] = inst_38238__$1);

(statearr_38417[(14)] = inst_38240__$1);

(statearr_38417[(15)] = inst_38239__$1);

(statearr_38417[(16)] = inst_38237__$1);

return statearr_38417;
})();
var statearr_38419_41216 = state_38388__$1;
(statearr_38419_41216[(2)] = null);

(statearr_38419_41216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (21))){
var inst_38293 = (state_38388[(2)]);
var state_38388__$1 = state_38388;
var statearr_38423_41218 = state_38388__$1;
(statearr_38423_41218[(2)] = inst_38293);

(statearr_38423_41218[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (31))){
var inst_38321 = (state_38388[(12)]);
var inst_38325 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38321);
var state_38388__$1 = state_38388;
var statearr_38427_41219 = state_38388__$1;
(statearr_38427_41219[(2)] = inst_38325);

(statearr_38427_41219[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (32))){
var inst_38314 = (state_38388[(9)]);
var inst_38315 = (state_38388[(19)]);
var inst_38316 = (state_38388[(11)]);
var inst_38313 = (state_38388[(20)]);
var inst_38327 = (state_38388[(2)]);
var inst_38329 = (inst_38316 + (1));
var tmp38420 = inst_38314;
var tmp38421 = inst_38315;
var tmp38422 = inst_38313;
var inst_38313__$1 = tmp38422;
var inst_38314__$1 = tmp38420;
var inst_38315__$1 = tmp38421;
var inst_38316__$1 = inst_38329;
var state_38388__$1 = (function (){var statearr_38435 = state_38388;
(statearr_38435[(9)] = inst_38314__$1);

(statearr_38435[(21)] = inst_38327);

(statearr_38435[(19)] = inst_38315__$1);

(statearr_38435[(11)] = inst_38316__$1);

(statearr_38435[(20)] = inst_38313__$1);

return statearr_38435;
})();
var statearr_38438_41222 = state_38388__$1;
(statearr_38438_41222[(2)] = null);

(statearr_38438_41222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (40))){
var inst_38343 = (state_38388[(22)]);
var inst_38347 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38343);
var state_38388__$1 = state_38388;
var statearr_38440_41224 = state_38388__$1;
(statearr_38440_41224[(2)] = inst_38347);

(statearr_38440_41224[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (33))){
var inst_38332 = (state_38388[(23)]);
var inst_38336 = cljs.core.chunked_seq_QMARK_(inst_38332);
var state_38388__$1 = state_38388;
if(inst_38336){
var statearr_38441_41225 = state_38388__$1;
(statearr_38441_41225[(1)] = (36));

} else {
var statearr_38442_41226 = state_38388__$1;
(statearr_38442_41226[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (13))){
var inst_38252 = (state_38388[(24)]);
var inst_38257 = cljs.core.async.close_BANG_(inst_38252);
var state_38388__$1 = state_38388;
var statearr_38443_41228 = state_38388__$1;
(statearr_38443_41228[(2)] = inst_38257);

(statearr_38443_41228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (22))){
var inst_38283 = (state_38388[(8)]);
var inst_38286 = cljs.core.async.close_BANG_(inst_38283);
var state_38388__$1 = state_38388;
var statearr_38444_41229 = state_38388__$1;
(statearr_38444_41229[(2)] = inst_38286);

(statearr_38444_41229[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (36))){
var inst_38332 = (state_38388[(23)]);
var inst_38338 = cljs.core.chunk_first(inst_38332);
var inst_38339 = cljs.core.chunk_rest(inst_38332);
var inst_38340 = cljs.core.count(inst_38338);
var inst_38313 = inst_38339;
var inst_38314 = inst_38338;
var inst_38315 = inst_38340;
var inst_38316 = (0);
var state_38388__$1 = (function (){var statearr_38445 = state_38388;
(statearr_38445[(9)] = inst_38314);

(statearr_38445[(19)] = inst_38315);

(statearr_38445[(11)] = inst_38316);

(statearr_38445[(20)] = inst_38313);

return statearr_38445;
})();
var statearr_38447_41230 = state_38388__$1;
(statearr_38447_41230[(2)] = null);

(statearr_38447_41230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (41))){
var inst_38332 = (state_38388[(23)]);
var inst_38349 = (state_38388[(2)]);
var inst_38350 = cljs.core.next(inst_38332);
var inst_38313 = inst_38350;
var inst_38314 = null;
var inst_38315 = (0);
var inst_38316 = (0);
var state_38388__$1 = (function (){var statearr_38448 = state_38388;
(statearr_38448[(9)] = inst_38314);

(statearr_38448[(19)] = inst_38315);

(statearr_38448[(25)] = inst_38349);

(statearr_38448[(11)] = inst_38316);

(statearr_38448[(20)] = inst_38313);

return statearr_38448;
})();
var statearr_38449_41231 = state_38388__$1;
(statearr_38449_41231[(2)] = null);

(statearr_38449_41231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (43))){
var state_38388__$1 = state_38388;
var statearr_38453_41232 = state_38388__$1;
(statearr_38453_41232[(2)] = null);

(statearr_38453_41232[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (29))){
var inst_38370 = (state_38388[(2)]);
var state_38388__$1 = state_38388;
var statearr_38461_41233 = state_38388__$1;
(statearr_38461_41233[(2)] = inst_38370);

(statearr_38461_41233[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (44))){
var inst_38379 = (state_38388[(2)]);
var state_38388__$1 = (function (){var statearr_38462 = state_38388;
(statearr_38462[(26)] = inst_38379);

return statearr_38462;
})();
var statearr_38463_41234 = state_38388__$1;
(statearr_38463_41234[(2)] = null);

(statearr_38463_41234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (6))){
var inst_38303 = (state_38388[(27)]);
var inst_38302 = cljs.core.deref(cs);
var inst_38303__$1 = cljs.core.keys(inst_38302);
var inst_38306 = cljs.core.count(inst_38303__$1);
var inst_38307 = cljs.core.reset_BANG_(dctr,inst_38306);
var inst_38312 = cljs.core.seq(inst_38303__$1);
var inst_38313 = inst_38312;
var inst_38314 = null;
var inst_38315 = (0);
var inst_38316 = (0);
var state_38388__$1 = (function (){var statearr_38465 = state_38388;
(statearr_38465[(9)] = inst_38314);

(statearr_38465[(28)] = inst_38307);

(statearr_38465[(27)] = inst_38303__$1);

(statearr_38465[(19)] = inst_38315);

(statearr_38465[(11)] = inst_38316);

(statearr_38465[(20)] = inst_38313);

return statearr_38465;
})();
var statearr_38466_41239 = state_38388__$1;
(statearr_38466_41239[(2)] = null);

(statearr_38466_41239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (28))){
var inst_38332 = (state_38388[(23)]);
var inst_38313 = (state_38388[(20)]);
var inst_38332__$1 = cljs.core.seq(inst_38313);
var state_38388__$1 = (function (){var statearr_38469 = state_38388;
(statearr_38469[(23)] = inst_38332__$1);

return statearr_38469;
})();
if(inst_38332__$1){
var statearr_38472_41242 = state_38388__$1;
(statearr_38472_41242[(1)] = (33));

} else {
var statearr_38473_41244 = state_38388__$1;
(statearr_38473_41244[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (25))){
var inst_38315 = (state_38388[(19)]);
var inst_38316 = (state_38388[(11)]);
var inst_38318 = (inst_38316 < inst_38315);
var inst_38319 = inst_38318;
var state_38388__$1 = state_38388;
if(cljs.core.truth_(inst_38319)){
var statearr_38474_41250 = state_38388__$1;
(statearr_38474_41250[(1)] = (27));

} else {
var statearr_38476_41251 = state_38388__$1;
(statearr_38476_41251[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (34))){
var state_38388__$1 = state_38388;
var statearr_38477_41258 = state_38388__$1;
(statearr_38477_41258[(2)] = null);

(statearr_38477_41258[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (17))){
var state_38388__$1 = state_38388;
var statearr_38482_41260 = state_38388__$1;
(statearr_38482_41260[(2)] = null);

(statearr_38482_41260[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (3))){
var inst_38385 = (state_38388[(2)]);
var state_38388__$1 = state_38388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38388__$1,inst_38385);
} else {
if((state_val_38389 === (12))){
var inst_38298 = (state_38388[(2)]);
var state_38388__$1 = state_38388;
var statearr_38483_41263 = state_38388__$1;
(statearr_38483_41263[(2)] = inst_38298);

(statearr_38483_41263[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (2))){
var state_38388__$1 = state_38388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38388__$1,(4),ch);
} else {
if((state_val_38389 === (23))){
var state_38388__$1 = state_38388;
var statearr_38486_41268 = state_38388__$1;
(statearr_38486_41268[(2)] = null);

(statearr_38486_41268[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (35))){
var inst_38356 = (state_38388[(2)]);
var state_38388__$1 = state_38388;
var statearr_38487_41273 = state_38388__$1;
(statearr_38487_41273[(2)] = inst_38356);

(statearr_38487_41273[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (19))){
var inst_38269 = (state_38388[(7)]);
var inst_38273 = cljs.core.chunk_first(inst_38269);
var inst_38274 = cljs.core.chunk_rest(inst_38269);
var inst_38275 = cljs.core.count(inst_38273);
var inst_38237 = inst_38274;
var inst_38238 = inst_38273;
var inst_38239 = inst_38275;
var inst_38240 = (0);
var state_38388__$1 = (function (){var statearr_38492 = state_38388;
(statearr_38492[(13)] = inst_38238);

(statearr_38492[(14)] = inst_38240);

(statearr_38492[(15)] = inst_38239);

(statearr_38492[(16)] = inst_38237);

return statearr_38492;
})();
var statearr_38493_41275 = state_38388__$1;
(statearr_38493_41275[(2)] = null);

(statearr_38493_41275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (11))){
var inst_38237 = (state_38388[(16)]);
var inst_38269 = (state_38388[(7)]);
var inst_38269__$1 = cljs.core.seq(inst_38237);
var state_38388__$1 = (function (){var statearr_38495 = state_38388;
(statearr_38495[(7)] = inst_38269__$1);

return statearr_38495;
})();
if(inst_38269__$1){
var statearr_38496_41282 = state_38388__$1;
(statearr_38496_41282[(1)] = (16));

} else {
var statearr_38497_41283 = state_38388__$1;
(statearr_38497_41283[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (9))){
var inst_38300 = (state_38388[(2)]);
var state_38388__$1 = state_38388;
var statearr_38498_41284 = state_38388__$1;
(statearr_38498_41284[(2)] = inst_38300);

(statearr_38498_41284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (5))){
var inst_38235 = cljs.core.deref(cs);
var inst_38236 = cljs.core.seq(inst_38235);
var inst_38237 = inst_38236;
var inst_38238 = null;
var inst_38239 = (0);
var inst_38240 = (0);
var state_38388__$1 = (function (){var statearr_38499 = state_38388;
(statearr_38499[(13)] = inst_38238);

(statearr_38499[(14)] = inst_38240);

(statearr_38499[(15)] = inst_38239);

(statearr_38499[(16)] = inst_38237);

return statearr_38499;
})();
var statearr_38501_41291 = state_38388__$1;
(statearr_38501_41291[(2)] = null);

(statearr_38501_41291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (14))){
var state_38388__$1 = state_38388;
var statearr_38503_41292 = state_38388__$1;
(statearr_38503_41292[(2)] = null);

(statearr_38503_41292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (45))){
var inst_38376 = (state_38388[(2)]);
var state_38388__$1 = state_38388;
var statearr_38509_41296 = state_38388__$1;
(statearr_38509_41296[(2)] = inst_38376);

(statearr_38509_41296[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (26))){
var inst_38303 = (state_38388[(27)]);
var inst_38372 = (state_38388[(2)]);
var inst_38373 = cljs.core.seq(inst_38303);
var state_38388__$1 = (function (){var statearr_38511 = state_38388;
(statearr_38511[(29)] = inst_38372);

return statearr_38511;
})();
if(inst_38373){
var statearr_38512_41297 = state_38388__$1;
(statearr_38512_41297[(1)] = (42));

} else {
var statearr_38514_41298 = state_38388__$1;
(statearr_38514_41298[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (16))){
var inst_38269 = (state_38388[(7)]);
var inst_38271 = cljs.core.chunked_seq_QMARK_(inst_38269);
var state_38388__$1 = state_38388;
if(inst_38271){
var statearr_38516_41299 = state_38388__$1;
(statearr_38516_41299[(1)] = (19));

} else {
var statearr_38517_41300 = state_38388__$1;
(statearr_38517_41300[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (38))){
var inst_38353 = (state_38388[(2)]);
var state_38388__$1 = state_38388;
var statearr_38518_41305 = state_38388__$1;
(statearr_38518_41305[(2)] = inst_38353);

(statearr_38518_41305[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (30))){
var state_38388__$1 = state_38388;
var statearr_38519_41306 = state_38388__$1;
(statearr_38519_41306[(2)] = null);

(statearr_38519_41306[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (10))){
var inst_38238 = (state_38388[(13)]);
var inst_38240 = (state_38388[(14)]);
var inst_38251 = cljs.core._nth(inst_38238,inst_38240);
var inst_38252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38251,(0),null);
var inst_38254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38251,(1),null);
var state_38388__$1 = (function (){var statearr_38524 = state_38388;
(statearr_38524[(24)] = inst_38252);

return statearr_38524;
})();
if(cljs.core.truth_(inst_38254)){
var statearr_38526_41307 = state_38388__$1;
(statearr_38526_41307[(1)] = (13));

} else {
var statearr_38534_41308 = state_38388__$1;
(statearr_38534_41308[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (18))){
var inst_38296 = (state_38388[(2)]);
var state_38388__$1 = state_38388;
var statearr_38535_41309 = state_38388__$1;
(statearr_38535_41309[(2)] = inst_38296);

(statearr_38535_41309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (42))){
var state_38388__$1 = state_38388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38388__$1,(45),dchan);
} else {
if((state_val_38389 === (37))){
var inst_38332 = (state_38388[(23)]);
var inst_38226 = (state_38388[(10)]);
var inst_38343 = (state_38388[(22)]);
var inst_38343__$1 = cljs.core.first(inst_38332);
var inst_38344 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38343__$1,inst_38226,done);
var state_38388__$1 = (function (){var statearr_38546 = state_38388;
(statearr_38546[(22)] = inst_38343__$1);

return statearr_38546;
})();
if(cljs.core.truth_(inst_38344)){
var statearr_38547_41310 = state_38388__$1;
(statearr_38547_41310[(1)] = (39));

} else {
var statearr_38548_41317 = state_38388__$1;
(statearr_38548_41317[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38389 === (8))){
var inst_38240 = (state_38388[(14)]);
var inst_38239 = (state_38388[(15)]);
var inst_38242 = (inst_38240 < inst_38239);
var inst_38243 = inst_38242;
var state_38388__$1 = state_38388;
if(cljs.core.truth_(inst_38243)){
var statearr_38550_41318 = state_38388__$1;
(statearr_38550_41318[(1)] = (10));

} else {
var statearr_38551_41319 = state_38388__$1;
(statearr_38551_41319[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__27139__auto__ = null;
var cljs$core$async$mult_$_state_machine__27139__auto____0 = (function (){
var statearr_38565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38565[(0)] = cljs$core$async$mult_$_state_machine__27139__auto__);

(statearr_38565[(1)] = (1));

return statearr_38565;
});
var cljs$core$async$mult_$_state_machine__27139__auto____1 = (function (state_38388){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_38388);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e38570){var ex__27142__auto__ = e38570;
var statearr_38571_41332 = state_38388;
(statearr_38571_41332[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_38388[(4)]))){
var statearr_38572_41333 = state_38388;
(statearr_38572_41333[(1)] = cljs.core.first((state_38388[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41334 = state_38388;
state_38388 = G__41334;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27139__auto__ = function(state_38388){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27139__auto____1.call(this,state_38388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27139__auto____0;
cljs$core$async$mult_$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27139__auto____1;
return cljs$core$async$mult_$_state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_38573 = f__27318__auto__();
(statearr_38573[(6)] = c__27317__auto___41196);

return statearr_38573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
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
var G__38584 = arguments.length;
switch (G__38584) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_41338 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_41338(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_41345 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_41345(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_41346 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_41346(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_41347 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_41347(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_41358 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_41358(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41359 = arguments.length;
var i__5770__auto___41360 = (0);
while(true){
if((i__5770__auto___41360 < len__5769__auto___41359)){
args__5775__auto__.push((arguments[i__5770__auto___41360]));

var G__41361 = (i__5770__auto___41360 + (1));
i__5770__auto___41360 = G__41361;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38639){
var map__38640 = p__38639;
var map__38640__$1 = cljs.core.__destructure_map(map__38640);
var opts = map__38640__$1;
var statearr_38642_41362 = state;
(statearr_38642_41362[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_38650_41363 = state;
(statearr_38650_41363[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_38654_41364 = state;
(statearr_38654_41364[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38632){
var G__38633 = cljs.core.first(seq38632);
var seq38632__$1 = cljs.core.next(seq38632);
var G__38634 = cljs.core.first(seq38632__$1);
var seq38632__$2 = cljs.core.next(seq38632__$1);
var G__38635 = cljs.core.first(seq38632__$2);
var seq38632__$3 = cljs.core.next(seq38632__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38633,G__38634,G__38635,seq38632__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38667 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38667 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38668){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38668 = meta38668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38669,meta38668__$1){
var self__ = this;
var _38669__$1 = this;
return (new cljs.core.async.t_cljs$core$async38667(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38668__$1));
}));

(cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38669){
var self__ = this;
var _38669__$1 = this;
return self__.meta38668;
}));

(cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38668","meta38668",-1590398907,null)], null);
}));

(cljs.core.async.t_cljs$core$async38667.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38667");

(cljs.core.async.t_cljs$core$async38667.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async38667");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38667.
 */
cljs.core.async.__GT_t_cljs$core$async38667 = (function cljs$core$async$mix_$___GT_t_cljs$core$async38667(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38668){
return (new cljs.core.async.t_cljs$core$async38667(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38668));
});

}

return (new cljs.core.async.t_cljs$core$async38667(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27317__auto___41383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_38758){
var state_val_38759 = (state_38758[(1)]);
if((state_val_38759 === (7))){
var inst_38714 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
if(cljs.core.truth_(inst_38714)){
var statearr_38760_41384 = state_38758__$1;
(statearr_38760_41384[(1)] = (8));

} else {
var statearr_38761_41385 = state_38758__$1;
(statearr_38761_41385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (20))){
var inst_38707 = (state_38758[(7)]);
var state_38758__$1 = state_38758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38758__$1,(23),out,inst_38707);
} else {
if((state_val_38759 === (1))){
var inst_38684 = calc_state();
var inst_38689 = cljs.core.__destructure_map(inst_38684);
var inst_38690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38689,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38689,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38689,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38693 = inst_38684;
var state_38758__$1 = (function (){var statearr_38764 = state_38758;
(statearr_38764[(8)] = inst_38692);

(statearr_38764[(9)] = inst_38690);

(statearr_38764[(10)] = inst_38693);

(statearr_38764[(11)] = inst_38691);

return statearr_38764;
})();
var statearr_38766_41386 = state_38758__$1;
(statearr_38766_41386[(2)] = null);

(statearr_38766_41386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (24))){
var inst_38697 = (state_38758[(12)]);
var inst_38693 = inst_38697;
var state_38758__$1 = (function (){var statearr_38767 = state_38758;
(statearr_38767[(10)] = inst_38693);

return statearr_38767;
})();
var statearr_38768_41391 = state_38758__$1;
(statearr_38768_41391[(2)] = null);

(statearr_38768_41391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (4))){
var inst_38709 = (state_38758[(13)]);
var inst_38707 = (state_38758[(7)]);
var inst_38706 = (state_38758[(2)]);
var inst_38707__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38706,(0),null);
var inst_38708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38706,(1),null);
var inst_38709__$1 = (inst_38707__$1 == null);
var state_38758__$1 = (function (){var statearr_38776 = state_38758;
(statearr_38776[(13)] = inst_38709__$1);

(statearr_38776[(14)] = inst_38708);

(statearr_38776[(7)] = inst_38707__$1);

return statearr_38776;
})();
if(cljs.core.truth_(inst_38709__$1)){
var statearr_38780_41396 = state_38758__$1;
(statearr_38780_41396[(1)] = (5));

} else {
var statearr_38781_41397 = state_38758__$1;
(statearr_38781_41397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (15))){
var inst_38698 = (state_38758[(15)]);
var inst_38732 = (state_38758[(16)]);
var inst_38732__$1 = cljs.core.empty_QMARK_(inst_38698);
var state_38758__$1 = (function (){var statearr_38783 = state_38758;
(statearr_38783[(16)] = inst_38732__$1);

return statearr_38783;
})();
if(inst_38732__$1){
var statearr_38784_41405 = state_38758__$1;
(statearr_38784_41405[(1)] = (17));

} else {
var statearr_38785_41406 = state_38758__$1;
(statearr_38785_41406[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (21))){
var inst_38697 = (state_38758[(12)]);
var inst_38693 = inst_38697;
var state_38758__$1 = (function (){var statearr_38790 = state_38758;
(statearr_38790[(10)] = inst_38693);

return statearr_38790;
})();
var statearr_38795_41407 = state_38758__$1;
(statearr_38795_41407[(2)] = null);

(statearr_38795_41407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (13))){
var inst_38721 = (state_38758[(2)]);
var inst_38722 = calc_state();
var inst_38693 = inst_38722;
var state_38758__$1 = (function (){var statearr_38802 = state_38758;
(statearr_38802[(17)] = inst_38721);

(statearr_38802[(10)] = inst_38693);

return statearr_38802;
})();
var statearr_38805_41408 = state_38758__$1;
(statearr_38805_41408[(2)] = null);

(statearr_38805_41408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (22))){
var inst_38752 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38806_41409 = state_38758__$1;
(statearr_38806_41409[(2)] = inst_38752);

(statearr_38806_41409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (6))){
var inst_38708 = (state_38758[(14)]);
var inst_38712 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38708,change);
var state_38758__$1 = state_38758;
var statearr_38809_41415 = state_38758__$1;
(statearr_38809_41415[(2)] = inst_38712);

(statearr_38809_41415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (25))){
var state_38758__$1 = state_38758;
var statearr_38814_41417 = state_38758__$1;
(statearr_38814_41417[(2)] = null);

(statearr_38814_41417[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (17))){
var inst_38699 = (state_38758[(18)]);
var inst_38708 = (state_38758[(14)]);
var inst_38734 = (inst_38699.cljs$core$IFn$_invoke$arity$1 ? inst_38699.cljs$core$IFn$_invoke$arity$1(inst_38708) : inst_38699.call(null,inst_38708));
var inst_38735 = cljs.core.not(inst_38734);
var state_38758__$1 = state_38758;
var statearr_38817_41421 = state_38758__$1;
(statearr_38817_41421[(2)] = inst_38735);

(statearr_38817_41421[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (3))){
var inst_38756 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38758__$1,inst_38756);
} else {
if((state_val_38759 === (12))){
var state_38758__$1 = state_38758;
var statearr_38821_41422 = state_38758__$1;
(statearr_38821_41422[(2)] = null);

(statearr_38821_41422[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (2))){
var inst_38693 = (state_38758[(10)]);
var inst_38697 = (state_38758[(12)]);
var inst_38697__$1 = cljs.core.__destructure_map(inst_38693);
var inst_38698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38697__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38697__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38697__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38758__$1 = (function (){var statearr_38826 = state_38758;
(statearr_38826[(18)] = inst_38699);

(statearr_38826[(15)] = inst_38698);

(statearr_38826[(12)] = inst_38697__$1);

return statearr_38826;
})();
return cljs.core.async.ioc_alts_BANG_(state_38758__$1,(4),inst_38700);
} else {
if((state_val_38759 === (23))){
var inst_38743 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
if(cljs.core.truth_(inst_38743)){
var statearr_38829_41423 = state_38758__$1;
(statearr_38829_41423[(1)] = (24));

} else {
var statearr_38830_41424 = state_38758__$1;
(statearr_38830_41424[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (19))){
var inst_38738 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38832_41425 = state_38758__$1;
(statearr_38832_41425[(2)] = inst_38738);

(statearr_38832_41425[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (11))){
var inst_38708 = (state_38758[(14)]);
var inst_38718 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38708);
var state_38758__$1 = state_38758;
var statearr_38835_41426 = state_38758__$1;
(statearr_38835_41426[(2)] = inst_38718);

(statearr_38835_41426[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (9))){
var inst_38708 = (state_38758[(14)]);
var inst_38729 = (state_38758[(19)]);
var inst_38698 = (state_38758[(15)]);
var inst_38729__$1 = (inst_38698.cljs$core$IFn$_invoke$arity$1 ? inst_38698.cljs$core$IFn$_invoke$arity$1(inst_38708) : inst_38698.call(null,inst_38708));
var state_38758__$1 = (function (){var statearr_38841 = state_38758;
(statearr_38841[(19)] = inst_38729__$1);

return statearr_38841;
})();
if(cljs.core.truth_(inst_38729__$1)){
var statearr_38844_41427 = state_38758__$1;
(statearr_38844_41427[(1)] = (14));

} else {
var statearr_38845_41428 = state_38758__$1;
(statearr_38845_41428[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (5))){
var inst_38709 = (state_38758[(13)]);
var state_38758__$1 = state_38758;
var statearr_38847_41429 = state_38758__$1;
(statearr_38847_41429[(2)] = inst_38709);

(statearr_38847_41429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (14))){
var inst_38729 = (state_38758[(19)]);
var state_38758__$1 = state_38758;
var statearr_38850_41430 = state_38758__$1;
(statearr_38850_41430[(2)] = inst_38729);

(statearr_38850_41430[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (26))){
var inst_38748 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38859_41431 = state_38758__$1;
(statearr_38859_41431[(2)] = inst_38748);

(statearr_38859_41431[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (16))){
var inst_38740 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
if(cljs.core.truth_(inst_38740)){
var statearr_38862_41432 = state_38758__$1;
(statearr_38862_41432[(1)] = (20));

} else {
var statearr_38865_41433 = state_38758__$1;
(statearr_38865_41433[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (10))){
var inst_38754 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38867_41434 = state_38758__$1;
(statearr_38867_41434[(2)] = inst_38754);

(statearr_38867_41434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (18))){
var inst_38732 = (state_38758[(16)]);
var state_38758__$1 = state_38758;
var statearr_38871_41435 = state_38758__$1;
(statearr_38871_41435[(2)] = inst_38732);

(statearr_38871_41435[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (8))){
var inst_38707 = (state_38758[(7)]);
var inst_38716 = (inst_38707 == null);
var state_38758__$1 = state_38758;
if(cljs.core.truth_(inst_38716)){
var statearr_38882_41437 = state_38758__$1;
(statearr_38882_41437[(1)] = (11));

} else {
var statearr_38885_41443 = state_38758__$1;
(statearr_38885_41443[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__27139__auto__ = null;
var cljs$core$async$mix_$_state_machine__27139__auto____0 = (function (){
var statearr_38897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38897[(0)] = cljs$core$async$mix_$_state_machine__27139__auto__);

(statearr_38897[(1)] = (1));

return statearr_38897;
});
var cljs$core$async$mix_$_state_machine__27139__auto____1 = (function (state_38758){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_38758);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e38899){var ex__27142__auto__ = e38899;
var statearr_38900_41448 = state_38758;
(statearr_38900_41448[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_38758[(4)]))){
var statearr_38906_41449 = state_38758;
(statearr_38906_41449[(1)] = cljs.core.first((state_38758[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41450 = state_38758;
state_38758 = G__41450;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27139__auto__ = function(state_38758){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27139__auto____1.call(this,state_38758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27139__auto____0;
cljs$core$async$mix_$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27139__auto____1;
return cljs$core$async$mix_$_state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_38910 = f__27318__auto__();
(statearr_38910[(6)] = c__27317__auto___41383);

return statearr_38910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_41459 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_41459(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_41463 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_41463(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_41468 = (function() {
var G__41469 = null;
var G__41469__1 = (function (p){
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
var G__41469__2 = (function (p,v){
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
G__41469 = function(p,v){
switch(arguments.length){
case 1:
return G__41469__1.call(this,p);
case 2:
return G__41469__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41469.cljs$core$IFn$_invoke$arity$1 = G__41469__1;
G__41469.cljs$core$IFn$_invoke$arity$2 = G__41469__2;
return G__41469;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38979 = arguments.length;
switch (G__38979) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41468(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41468(p,v);
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
var G__39000 = arguments.length;
switch (G__39000) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__38991_SHARP_){
if(cljs.core.truth_((p1__38991_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38991_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__38991_SHARP_.call(null,topic)))){
return p1__38991_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38991_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39011 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39011 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39012){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39012 = meta39012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39013,meta39012__$1){
var self__ = this;
var _39013__$1 = this;
return (new cljs.core.async.t_cljs$core$async39011(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39012__$1));
}));

(cljs.core.async.t_cljs$core$async39011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39013){
var self__ = this;
var _39013__$1 = this;
return self__.meta39012;
}));

(cljs.core.async.t_cljs$core$async39011.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39011.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39011.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39011.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async39011.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async39011.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async39011.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async39011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39012","meta39012",-1923869160,null)], null);
}));

(cljs.core.async.t_cljs$core$async39011.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39011");

(cljs.core.async.t_cljs$core$async39011.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async39011");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39011.
 */
cljs.core.async.__GT_t_cljs$core$async39011 = (function cljs$core$async$__GT_t_cljs$core$async39011(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39012){
return (new cljs.core.async.t_cljs$core$async39011(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39012));
});

}

return (new cljs.core.async.t_cljs$core$async39011(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27317__auto___41496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_39144){
var state_val_39147 = (state_39144[(1)]);
if((state_val_39147 === (7))){
var inst_39134 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
var statearr_39156_41497 = state_39144__$1;
(statearr_39156_41497[(2)] = inst_39134);

(statearr_39156_41497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (20))){
var state_39144__$1 = state_39144;
var statearr_39164_41498 = state_39144__$1;
(statearr_39164_41498[(2)] = null);

(statearr_39164_41498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (1))){
var state_39144__$1 = state_39144;
var statearr_39166_41502 = state_39144__$1;
(statearr_39166_41502[(2)] = null);

(statearr_39166_41502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (24))){
var inst_39113 = (state_39144[(7)]);
var inst_39126 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_39113);
var state_39144__$1 = state_39144;
var statearr_39170_41503 = state_39144__$1;
(statearr_39170_41503[(2)] = inst_39126);

(statearr_39170_41503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (4))){
var inst_39054 = (state_39144[(8)]);
var inst_39054__$1 = (state_39144[(2)]);
var inst_39055 = (inst_39054__$1 == null);
var state_39144__$1 = (function (){var statearr_39172 = state_39144;
(statearr_39172[(8)] = inst_39054__$1);

return statearr_39172;
})();
if(cljs.core.truth_(inst_39055)){
var statearr_39173_41504 = state_39144__$1;
(statearr_39173_41504[(1)] = (5));

} else {
var statearr_39175_41505 = state_39144__$1;
(statearr_39175_41505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (15))){
var inst_39107 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
var statearr_39178_41510 = state_39144__$1;
(statearr_39178_41510[(2)] = inst_39107);

(statearr_39178_41510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (21))){
var inst_39131 = (state_39144[(2)]);
var state_39144__$1 = (function (){var statearr_39180 = state_39144;
(statearr_39180[(9)] = inst_39131);

return statearr_39180;
})();
var statearr_39185_41512 = state_39144__$1;
(statearr_39185_41512[(2)] = null);

(statearr_39185_41512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (13))){
var inst_39087 = (state_39144[(10)]);
var inst_39089 = cljs.core.chunked_seq_QMARK_(inst_39087);
var state_39144__$1 = state_39144;
if(inst_39089){
var statearr_39193_41516 = state_39144__$1;
(statearr_39193_41516[(1)] = (16));

} else {
var statearr_39194_41517 = state_39144__$1;
(statearr_39194_41517[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (22))){
var inst_39122 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
if(cljs.core.truth_(inst_39122)){
var statearr_39200_41518 = state_39144__$1;
(statearr_39200_41518[(1)] = (23));

} else {
var statearr_39205_41520 = state_39144__$1;
(statearr_39205_41520[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (6))){
var inst_39117 = (state_39144[(11)]);
var inst_39113 = (state_39144[(7)]);
var inst_39054 = (state_39144[(8)]);
var inst_39113__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39054) : topic_fn.call(null,inst_39054));
var inst_39116 = cljs.core.deref(mults);
var inst_39117__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39116,inst_39113__$1);
var state_39144__$1 = (function (){var statearr_39210 = state_39144;
(statearr_39210[(11)] = inst_39117__$1);

(statearr_39210[(7)] = inst_39113__$1);

return statearr_39210;
})();
if(cljs.core.truth_(inst_39117__$1)){
var statearr_39211_41534 = state_39144__$1;
(statearr_39211_41534[(1)] = (19));

} else {
var statearr_39212_41539 = state_39144__$1;
(statearr_39212_41539[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (25))){
var inst_39128 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
var statearr_39216_41543 = state_39144__$1;
(statearr_39216_41543[(2)] = inst_39128);

(statearr_39216_41543[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (17))){
var inst_39087 = (state_39144[(10)]);
var inst_39096 = cljs.core.first(inst_39087);
var inst_39097 = cljs.core.async.muxch_STAR_(inst_39096);
var inst_39098 = cljs.core.async.close_BANG_(inst_39097);
var inst_39099 = cljs.core.next(inst_39087);
var inst_39068 = inst_39099;
var inst_39069 = null;
var inst_39070 = (0);
var inst_39071 = (0);
var state_39144__$1 = (function (){var statearr_39218 = state_39144;
(statearr_39218[(12)] = inst_39071);

(statearr_39218[(13)] = inst_39069);

(statearr_39218[(14)] = inst_39070);

(statearr_39218[(15)] = inst_39098);

(statearr_39218[(16)] = inst_39068);

return statearr_39218;
})();
var statearr_39221_41548 = state_39144__$1;
(statearr_39221_41548[(2)] = null);

(statearr_39221_41548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (3))){
var inst_39136 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39144__$1,inst_39136);
} else {
if((state_val_39147 === (12))){
var inst_39109 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
var statearr_39225_41555 = state_39144__$1;
(statearr_39225_41555[(2)] = inst_39109);

(statearr_39225_41555[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (2))){
var state_39144__$1 = state_39144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39144__$1,(4),ch);
} else {
if((state_val_39147 === (23))){
var state_39144__$1 = state_39144;
var statearr_39231_41556 = state_39144__$1;
(statearr_39231_41556[(2)] = null);

(statearr_39231_41556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (19))){
var inst_39117 = (state_39144[(11)]);
var inst_39054 = (state_39144[(8)]);
var inst_39119 = cljs.core.async.muxch_STAR_(inst_39117);
var state_39144__$1 = state_39144;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39144__$1,(22),inst_39119,inst_39054);
} else {
if((state_val_39147 === (11))){
var inst_39087 = (state_39144[(10)]);
var inst_39068 = (state_39144[(16)]);
var inst_39087__$1 = cljs.core.seq(inst_39068);
var state_39144__$1 = (function (){var statearr_39235 = state_39144;
(statearr_39235[(10)] = inst_39087__$1);

return statearr_39235;
})();
if(inst_39087__$1){
var statearr_39237_41563 = state_39144__$1;
(statearr_39237_41563[(1)] = (13));

} else {
var statearr_39238_41564 = state_39144__$1;
(statearr_39238_41564[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (9))){
var inst_39111 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
var statearr_39240_41566 = state_39144__$1;
(statearr_39240_41566[(2)] = inst_39111);

(statearr_39240_41566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (5))){
var inst_39065 = cljs.core.deref(mults);
var inst_39066 = cljs.core.vals(inst_39065);
var inst_39067 = cljs.core.seq(inst_39066);
var inst_39068 = inst_39067;
var inst_39069 = null;
var inst_39070 = (0);
var inst_39071 = (0);
var state_39144__$1 = (function (){var statearr_39246 = state_39144;
(statearr_39246[(12)] = inst_39071);

(statearr_39246[(13)] = inst_39069);

(statearr_39246[(14)] = inst_39070);

(statearr_39246[(16)] = inst_39068);

return statearr_39246;
})();
var statearr_39247_41572 = state_39144__$1;
(statearr_39247_41572[(2)] = null);

(statearr_39247_41572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (14))){
var state_39144__$1 = state_39144;
var statearr_39254_41574 = state_39144__$1;
(statearr_39254_41574[(2)] = null);

(statearr_39254_41574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (16))){
var inst_39087 = (state_39144[(10)]);
var inst_39091 = cljs.core.chunk_first(inst_39087);
var inst_39092 = cljs.core.chunk_rest(inst_39087);
var inst_39093 = cljs.core.count(inst_39091);
var inst_39068 = inst_39092;
var inst_39069 = inst_39091;
var inst_39070 = inst_39093;
var inst_39071 = (0);
var state_39144__$1 = (function (){var statearr_39265 = state_39144;
(statearr_39265[(12)] = inst_39071);

(statearr_39265[(13)] = inst_39069);

(statearr_39265[(14)] = inst_39070);

(statearr_39265[(16)] = inst_39068);

return statearr_39265;
})();
var statearr_39268_41583 = state_39144__$1;
(statearr_39268_41583[(2)] = null);

(statearr_39268_41583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (10))){
var inst_39071 = (state_39144[(12)]);
var inst_39069 = (state_39144[(13)]);
var inst_39070 = (state_39144[(14)]);
var inst_39068 = (state_39144[(16)]);
var inst_39080 = cljs.core._nth(inst_39069,inst_39071);
var inst_39081 = cljs.core.async.muxch_STAR_(inst_39080);
var inst_39082 = cljs.core.async.close_BANG_(inst_39081);
var inst_39083 = (inst_39071 + (1));
var tmp39249 = inst_39069;
var tmp39250 = inst_39070;
var tmp39251 = inst_39068;
var inst_39068__$1 = tmp39251;
var inst_39069__$1 = tmp39249;
var inst_39070__$1 = tmp39250;
var inst_39071__$1 = inst_39083;
var state_39144__$1 = (function (){var statearr_39275 = state_39144;
(statearr_39275[(12)] = inst_39071__$1);

(statearr_39275[(13)] = inst_39069__$1);

(statearr_39275[(14)] = inst_39070__$1);

(statearr_39275[(17)] = inst_39082);

(statearr_39275[(16)] = inst_39068__$1);

return statearr_39275;
})();
var statearr_39281_41586 = state_39144__$1;
(statearr_39281_41586[(2)] = null);

(statearr_39281_41586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (18))){
var inst_39102 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
var statearr_39286_41587 = state_39144__$1;
(statearr_39286_41587[(2)] = inst_39102);

(statearr_39286_41587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (8))){
var inst_39071 = (state_39144[(12)]);
var inst_39070 = (state_39144[(14)]);
var inst_39077 = (inst_39071 < inst_39070);
var inst_39078 = inst_39077;
var state_39144__$1 = state_39144;
if(cljs.core.truth_(inst_39078)){
var statearr_39293_41592 = state_39144__$1;
(statearr_39293_41592[(1)] = (10));

} else {
var statearr_39294_41593 = state_39144__$1;
(statearr_39294_41593[(1)] = (11));

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
var cljs$core$async$state_machine__27139__auto__ = null;
var cljs$core$async$state_machine__27139__auto____0 = (function (){
var statearr_39296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39296[(0)] = cljs$core$async$state_machine__27139__auto__);

(statearr_39296[(1)] = (1));

return statearr_39296;
});
var cljs$core$async$state_machine__27139__auto____1 = (function (state_39144){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_39144);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e39297){var ex__27142__auto__ = e39297;
var statearr_39298_41597 = state_39144;
(statearr_39298_41597[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_39144[(4)]))){
var statearr_39299_41598 = state_39144;
(statearr_39299_41598[(1)] = cljs.core.first((state_39144[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41601 = state_39144;
state_39144 = G__41601;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$state_machine__27139__auto__ = function(state_39144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27139__auto____1.call(this,state_39144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27139__auto____0;
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27139__auto____1;
return cljs$core$async$state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_39306 = f__27318__auto__();
(statearr_39306[(6)] = c__27317__auto___41496);

return statearr_39306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
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
var G__39313 = arguments.length;
switch (G__39313) {
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
var G__39352 = arguments.length;
switch (G__39352) {
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
var G__39370 = arguments.length;
switch (G__39370) {
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
var c__27317__auto___41628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_39456){
var state_val_39460 = (state_39456[(1)]);
if((state_val_39460 === (7))){
var state_39456__$1 = state_39456;
var statearr_39467_41631 = state_39456__$1;
(statearr_39467_41631[(2)] = null);

(statearr_39467_41631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (1))){
var state_39456__$1 = state_39456;
var statearr_39469_41633 = state_39456__$1;
(statearr_39469_41633[(2)] = null);

(statearr_39469_41633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (4))){
var inst_39394 = (state_39456[(7)]);
var inst_39395 = (state_39456[(8)]);
var inst_39397 = (inst_39395 < inst_39394);
var state_39456__$1 = state_39456;
if(cljs.core.truth_(inst_39397)){
var statearr_39474_41642 = state_39456__$1;
(statearr_39474_41642[(1)] = (6));

} else {
var statearr_39475_41644 = state_39456__$1;
(statearr_39475_41644[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (15))){
var inst_39437 = (state_39456[(9)]);
var inst_39442 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39437);
var state_39456__$1 = state_39456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39456__$1,(17),out,inst_39442);
} else {
if((state_val_39460 === (13))){
var inst_39437 = (state_39456[(9)]);
var inst_39437__$1 = (state_39456[(2)]);
var inst_39438 = cljs.core.some(cljs.core.nil_QMARK_,inst_39437__$1);
var state_39456__$1 = (function (){var statearr_39485 = state_39456;
(statearr_39485[(9)] = inst_39437__$1);

return statearr_39485;
})();
if(cljs.core.truth_(inst_39438)){
var statearr_39486_41654 = state_39456__$1;
(statearr_39486_41654[(1)] = (14));

} else {
var statearr_39487_41655 = state_39456__$1;
(statearr_39487_41655[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (6))){
var state_39456__$1 = state_39456;
var statearr_39489_41658 = state_39456__$1;
(statearr_39489_41658[(2)] = null);

(statearr_39489_41658[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (17))){
var inst_39444 = (state_39456[(2)]);
var state_39456__$1 = (function (){var statearr_39505 = state_39456;
(statearr_39505[(10)] = inst_39444);

return statearr_39505;
})();
var statearr_39509_41660 = state_39456__$1;
(statearr_39509_41660[(2)] = null);

(statearr_39509_41660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (3))){
var inst_39449 = (state_39456[(2)]);
var state_39456__$1 = state_39456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39456__$1,inst_39449);
} else {
if((state_val_39460 === (12))){
var _ = (function (){var statearr_39516 = state_39456;
(statearr_39516[(4)] = cljs.core.rest((state_39456[(4)])));

return statearr_39516;
})();
var state_39456__$1 = state_39456;
var ex39500 = (state_39456__$1[(2)]);
var statearr_39518_41669 = state_39456__$1;
(statearr_39518_41669[(5)] = ex39500);


if((ex39500 instanceof Object)){
var statearr_39527_41672 = state_39456__$1;
(statearr_39527_41672[(1)] = (11));

(statearr_39527_41672[(5)] = null);

} else {
throw ex39500;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (2))){
var inst_39393 = cljs.core.reset_BANG_(dctr,cnt);
var inst_39394 = cnt;
var inst_39395 = (0);
var state_39456__$1 = (function (){var statearr_39537 = state_39456;
(statearr_39537[(7)] = inst_39394);

(statearr_39537[(8)] = inst_39395);

(statearr_39537[(11)] = inst_39393);

return statearr_39537;
})();
var statearr_39540_41677 = state_39456__$1;
(statearr_39540_41677[(2)] = null);

(statearr_39540_41677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (11))){
var inst_39415 = (state_39456[(2)]);
var inst_39416 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_39456__$1 = (function (){var statearr_39548 = state_39456;
(statearr_39548[(12)] = inst_39415);

return statearr_39548;
})();
var statearr_39549_41678 = state_39456__$1;
(statearr_39549_41678[(2)] = inst_39416);

(statearr_39549_41678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (9))){
var inst_39395 = (state_39456[(8)]);
var _ = (function (){var statearr_39554 = state_39456;
(statearr_39554[(4)] = cljs.core.cons((12),(state_39456[(4)])));

return statearr_39554;
})();
var inst_39423 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39395) : chs__$1.call(null,inst_39395));
var inst_39424 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39395) : done.call(null,inst_39395));
var inst_39425 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39423,inst_39424);
var ___$1 = (function (){var statearr_39557 = state_39456;
(statearr_39557[(4)] = cljs.core.rest((state_39456[(4)])));

return statearr_39557;
})();
var state_39456__$1 = state_39456;
var statearr_39558_41685 = state_39456__$1;
(statearr_39558_41685[(2)] = inst_39425);

(statearr_39558_41685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (5))){
var inst_39435 = (state_39456[(2)]);
var state_39456__$1 = (function (){var statearr_39560 = state_39456;
(statearr_39560[(13)] = inst_39435);

return statearr_39560;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39456__$1,(13),dchan);
} else {
if((state_val_39460 === (14))){
var inst_39440 = cljs.core.async.close_BANG_(out);
var state_39456__$1 = state_39456;
var statearr_39561_41693 = state_39456__$1;
(statearr_39561_41693[(2)] = inst_39440);

(statearr_39561_41693[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (16))){
var inst_39447 = (state_39456[(2)]);
var state_39456__$1 = state_39456;
var statearr_39562_41696 = state_39456__$1;
(statearr_39562_41696[(2)] = inst_39447);

(statearr_39562_41696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (10))){
var inst_39395 = (state_39456[(8)]);
var inst_39428 = (state_39456[(2)]);
var inst_39429 = (inst_39395 + (1));
var inst_39395__$1 = inst_39429;
var state_39456__$1 = (function (){var statearr_39563 = state_39456;
(statearr_39563[(8)] = inst_39395__$1);

(statearr_39563[(14)] = inst_39428);

return statearr_39563;
})();
var statearr_39564_41701 = state_39456__$1;
(statearr_39564_41701[(2)] = null);

(statearr_39564_41701[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (8))){
var inst_39433 = (state_39456[(2)]);
var state_39456__$1 = state_39456;
var statearr_39568_41702 = state_39456__$1;
(statearr_39568_41702[(2)] = inst_39433);

(statearr_39568_41702[(1)] = (5));


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
var cljs$core$async$state_machine__27139__auto__ = null;
var cljs$core$async$state_machine__27139__auto____0 = (function (){
var statearr_39572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39572[(0)] = cljs$core$async$state_machine__27139__auto__);

(statearr_39572[(1)] = (1));

return statearr_39572;
});
var cljs$core$async$state_machine__27139__auto____1 = (function (state_39456){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_39456);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e39577){var ex__27142__auto__ = e39577;
var statearr_39578_41706 = state_39456;
(statearr_39578_41706[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_39456[(4)]))){
var statearr_39581_41707 = state_39456;
(statearr_39581_41707[(1)] = cljs.core.first((state_39456[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41709 = state_39456;
state_39456 = G__41709;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$state_machine__27139__auto__ = function(state_39456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27139__auto____1.call(this,state_39456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27139__auto____0;
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27139__auto____1;
return cljs$core$async$state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_39589 = f__27318__auto__();
(statearr_39589[(6)] = c__27317__auto___41628);

return statearr_39589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
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
var G__39613 = arguments.length;
switch (G__39613) {
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
var c__27317__auto___41719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_39659){
var state_val_39660 = (state_39659[(1)]);
if((state_val_39660 === (7))){
var inst_39635 = (state_39659[(7)]);
var inst_39634 = (state_39659[(8)]);
var inst_39634__$1 = (state_39659[(2)]);
var inst_39635__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39634__$1,(0),null);
var inst_39636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39634__$1,(1),null);
var inst_39639 = (inst_39635__$1 == null);
var state_39659__$1 = (function (){var statearr_39669 = state_39659;
(statearr_39669[(9)] = inst_39636);

(statearr_39669[(7)] = inst_39635__$1);

(statearr_39669[(8)] = inst_39634__$1);

return statearr_39669;
})();
if(cljs.core.truth_(inst_39639)){
var statearr_39671_41726 = state_39659__$1;
(statearr_39671_41726[(1)] = (8));

} else {
var statearr_39673_41727 = state_39659__$1;
(statearr_39673_41727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39660 === (1))){
var inst_39619 = cljs.core.vec(chs);
var inst_39620 = inst_39619;
var state_39659__$1 = (function (){var statearr_39676 = state_39659;
(statearr_39676[(10)] = inst_39620);

return statearr_39676;
})();
var statearr_39679_41728 = state_39659__$1;
(statearr_39679_41728[(2)] = null);

(statearr_39679_41728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39660 === (4))){
var inst_39620 = (state_39659[(10)]);
var state_39659__$1 = state_39659;
return cljs.core.async.ioc_alts_BANG_(state_39659__$1,(7),inst_39620);
} else {
if((state_val_39660 === (6))){
var inst_39653 = (state_39659[(2)]);
var state_39659__$1 = state_39659;
var statearr_39681_41731 = state_39659__$1;
(statearr_39681_41731[(2)] = inst_39653);

(statearr_39681_41731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39660 === (3))){
var inst_39655 = (state_39659[(2)]);
var state_39659__$1 = state_39659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39659__$1,inst_39655);
} else {
if((state_val_39660 === (2))){
var inst_39620 = (state_39659[(10)]);
var inst_39624 = cljs.core.count(inst_39620);
var inst_39625 = (inst_39624 > (0));
var state_39659__$1 = state_39659;
if(cljs.core.truth_(inst_39625)){
var statearr_39686_41736 = state_39659__$1;
(statearr_39686_41736[(1)] = (4));

} else {
var statearr_39688_41737 = state_39659__$1;
(statearr_39688_41737[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39660 === (11))){
var inst_39620 = (state_39659[(10)]);
var inst_39646 = (state_39659[(2)]);
var tmp39682 = inst_39620;
var inst_39620__$1 = tmp39682;
var state_39659__$1 = (function (){var statearr_39689 = state_39659;
(statearr_39689[(11)] = inst_39646);

(statearr_39689[(10)] = inst_39620__$1);

return statearr_39689;
})();
var statearr_39690_41739 = state_39659__$1;
(statearr_39690_41739[(2)] = null);

(statearr_39690_41739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39660 === (9))){
var inst_39635 = (state_39659[(7)]);
var state_39659__$1 = state_39659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39659__$1,(11),out,inst_39635);
} else {
if((state_val_39660 === (5))){
var inst_39651 = cljs.core.async.close_BANG_(out);
var state_39659__$1 = state_39659;
var statearr_39712_41744 = state_39659__$1;
(statearr_39712_41744[(2)] = inst_39651);

(statearr_39712_41744[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39660 === (10))){
var inst_39649 = (state_39659[(2)]);
var state_39659__$1 = state_39659;
var statearr_39723_41749 = state_39659__$1;
(statearr_39723_41749[(2)] = inst_39649);

(statearr_39723_41749[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39660 === (8))){
var inst_39636 = (state_39659[(9)]);
var inst_39635 = (state_39659[(7)]);
var inst_39620 = (state_39659[(10)]);
var inst_39634 = (state_39659[(8)]);
var inst_39641 = (function (){var cs = inst_39620;
var vec__39628 = inst_39634;
var v = inst_39635;
var c = inst_39636;
return (function (p1__39611_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39611_SHARP_);
});
})();
var inst_39642 = cljs.core.filterv(inst_39641,inst_39620);
var inst_39620__$1 = inst_39642;
var state_39659__$1 = (function (){var statearr_39742 = state_39659;
(statearr_39742[(10)] = inst_39620__$1);

return statearr_39742;
})();
var statearr_39743_41752 = state_39659__$1;
(statearr_39743_41752[(2)] = null);

(statearr_39743_41752[(1)] = (2));


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
var cljs$core$async$state_machine__27139__auto__ = null;
var cljs$core$async$state_machine__27139__auto____0 = (function (){
var statearr_39747 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39747[(0)] = cljs$core$async$state_machine__27139__auto__);

(statearr_39747[(1)] = (1));

return statearr_39747;
});
var cljs$core$async$state_machine__27139__auto____1 = (function (state_39659){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_39659);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e39749){var ex__27142__auto__ = e39749;
var statearr_39750_41753 = state_39659;
(statearr_39750_41753[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_39659[(4)]))){
var statearr_39752_41754 = state_39659;
(statearr_39752_41754[(1)] = cljs.core.first((state_39659[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41756 = state_39659;
state_39659 = G__41756;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$state_machine__27139__auto__ = function(state_39659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27139__auto____1.call(this,state_39659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27139__auto____0;
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27139__auto____1;
return cljs$core$async$state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_39755 = f__27318__auto__();
(statearr_39755[(6)] = c__27317__auto___41719);

return statearr_39755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
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
var G__39772 = arguments.length;
switch (G__39772) {
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
var c__27317__auto___41779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_39805){
var state_val_39806 = (state_39805[(1)]);
if((state_val_39806 === (7))){
var inst_39786 = (state_39805[(7)]);
var inst_39786__$1 = (state_39805[(2)]);
var inst_39787 = (inst_39786__$1 == null);
var inst_39788 = cljs.core.not(inst_39787);
var state_39805__$1 = (function (){var statearr_39816 = state_39805;
(statearr_39816[(7)] = inst_39786__$1);

return statearr_39816;
})();
if(inst_39788){
var statearr_39817_41781 = state_39805__$1;
(statearr_39817_41781[(1)] = (8));

} else {
var statearr_39819_41782 = state_39805__$1;
(statearr_39819_41782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39806 === (1))){
var inst_39778 = (0);
var state_39805__$1 = (function (){var statearr_39822 = state_39805;
(statearr_39822[(8)] = inst_39778);

return statearr_39822;
})();
var statearr_39823_41783 = state_39805__$1;
(statearr_39823_41783[(2)] = null);

(statearr_39823_41783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39806 === (4))){
var state_39805__$1 = state_39805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39805__$1,(7),ch);
} else {
if((state_val_39806 === (6))){
var inst_39799 = (state_39805[(2)]);
var state_39805__$1 = state_39805;
var statearr_39824_41784 = state_39805__$1;
(statearr_39824_41784[(2)] = inst_39799);

(statearr_39824_41784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39806 === (3))){
var inst_39801 = (state_39805[(2)]);
var inst_39802 = cljs.core.async.close_BANG_(out);
var state_39805__$1 = (function (){var statearr_39825 = state_39805;
(statearr_39825[(9)] = inst_39801);

return statearr_39825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39805__$1,inst_39802);
} else {
if((state_val_39806 === (2))){
var inst_39778 = (state_39805[(8)]);
var inst_39783 = (inst_39778 < n);
var state_39805__$1 = state_39805;
if(cljs.core.truth_(inst_39783)){
var statearr_39826_41785 = state_39805__$1;
(statearr_39826_41785[(1)] = (4));

} else {
var statearr_39827_41786 = state_39805__$1;
(statearr_39827_41786[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39806 === (11))){
var inst_39778 = (state_39805[(8)]);
var inst_39791 = (state_39805[(2)]);
var inst_39792 = (inst_39778 + (1));
var inst_39778__$1 = inst_39792;
var state_39805__$1 = (function (){var statearr_39834 = state_39805;
(statearr_39834[(10)] = inst_39791);

(statearr_39834[(8)] = inst_39778__$1);

return statearr_39834;
})();
var statearr_39839_41788 = state_39805__$1;
(statearr_39839_41788[(2)] = null);

(statearr_39839_41788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39806 === (9))){
var state_39805__$1 = state_39805;
var statearr_39844_41789 = state_39805__$1;
(statearr_39844_41789[(2)] = null);

(statearr_39844_41789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39806 === (5))){
var state_39805__$1 = state_39805;
var statearr_39852_41790 = state_39805__$1;
(statearr_39852_41790[(2)] = null);

(statearr_39852_41790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39806 === (10))){
var inst_39796 = (state_39805[(2)]);
var state_39805__$1 = state_39805;
var statearr_39859_41791 = state_39805__$1;
(statearr_39859_41791[(2)] = inst_39796);

(statearr_39859_41791[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39806 === (8))){
var inst_39786 = (state_39805[(7)]);
var state_39805__$1 = state_39805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39805__$1,(11),out,inst_39786);
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
var cljs$core$async$state_machine__27139__auto__ = null;
var cljs$core$async$state_machine__27139__auto____0 = (function (){
var statearr_39869 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39869[(0)] = cljs$core$async$state_machine__27139__auto__);

(statearr_39869[(1)] = (1));

return statearr_39869;
});
var cljs$core$async$state_machine__27139__auto____1 = (function (state_39805){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_39805);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e39870){var ex__27142__auto__ = e39870;
var statearr_39871_41793 = state_39805;
(statearr_39871_41793[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_39805[(4)]))){
var statearr_39872_41794 = state_39805;
(statearr_39872_41794[(1)] = cljs.core.first((state_39805[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41795 = state_39805;
state_39805 = G__41795;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$state_machine__27139__auto__ = function(state_39805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27139__auto____1.call(this,state_39805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27139__auto____0;
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27139__auto____1;
return cljs$core$async$state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_39878 = f__27318__auto__();
(statearr_39878[(6)] = c__27317__auto___41779);

return statearr_39878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39891 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39891 = (function (f,ch,meta39892){
this.f = f;
this.ch = ch;
this.meta39892 = meta39892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39893,meta39892__$1){
var self__ = this;
var _39893__$1 = this;
return (new cljs.core.async.t_cljs$core$async39891(self__.f,self__.ch,meta39892__$1));
}));

(cljs.core.async.t_cljs$core$async39891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39893){
var self__ = this;
var _39893__$1 = this;
return self__.meta39892;
}));

(cljs.core.async.t_cljs$core$async39891.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39891.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39891.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39891.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39891.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39926 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39926 = (function (f,ch,meta39892,_,fn1,meta39927){
this.f = f;
this.ch = ch;
this.meta39892 = meta39892;
this._ = _;
this.fn1 = fn1;
this.meta39927 = meta39927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39928,meta39927__$1){
var self__ = this;
var _39928__$1 = this;
return (new cljs.core.async.t_cljs$core$async39926(self__.f,self__.ch,self__.meta39892,self__._,self__.fn1,meta39927__$1));
}));

(cljs.core.async.t_cljs$core$async39926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39928){
var self__ = this;
var _39928__$1 = this;
return self__.meta39927;
}));

(cljs.core.async.t_cljs$core$async39926.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async39926.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__39889_SHARP_){
var G__39950 = (((p1__39889_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__39889_SHARP_) : self__.f.call(null,p1__39889_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__39950) : f1.call(null,G__39950));
});
}));

(cljs.core.async.t_cljs$core$async39926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39892","meta39892",-730448774,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39891","cljs.core.async/t_cljs$core$async39891",-1154599875,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39927","meta39927",856206222,null)], null);
}));

(cljs.core.async.t_cljs$core$async39926.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39926");

(cljs.core.async.t_cljs$core$async39926.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async39926");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39926.
 */
cljs.core.async.__GT_t_cljs$core$async39926 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39926(f__$1,ch__$1,meta39892__$1,___$2,fn1__$1,meta39927){
return (new cljs.core.async.t_cljs$core$async39926(f__$1,ch__$1,meta39892__$1,___$2,fn1__$1,meta39927));
});

}

return (new cljs.core.async.t_cljs$core$async39926(self__.f,self__.ch,self__.meta39892,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__39964 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__39964) : self__.f.call(null,G__39964));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async39891.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39891.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async39891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39892","meta39892",-730448774,null)], null);
}));

(cljs.core.async.t_cljs$core$async39891.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39891");

(cljs.core.async.t_cljs$core$async39891.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async39891");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39891.
 */
cljs.core.async.__GT_t_cljs$core$async39891 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39891(f__$1,ch__$1,meta39892){
return (new cljs.core.async.t_cljs$core$async39891(f__$1,ch__$1,meta39892));
});

}

return (new cljs.core.async.t_cljs$core$async39891(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39981 = (function (f,ch,meta39982){
this.f = f;
this.ch = ch;
this.meta39982 = meta39982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39983,meta39982__$1){
var self__ = this;
var _39983__$1 = this;
return (new cljs.core.async.t_cljs$core$async39981(self__.f,self__.ch,meta39982__$1));
}));

(cljs.core.async.t_cljs$core$async39981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39983){
var self__ = this;
var _39983__$1 = this;
return self__.meta39982;
}));

(cljs.core.async.t_cljs$core$async39981.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39981.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39981.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39981.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39981.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39981.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async39981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39982","meta39982",212302879,null)], null);
}));

(cljs.core.async.t_cljs$core$async39981.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39981");

(cljs.core.async.t_cljs$core$async39981.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async39981");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39981.
 */
cljs.core.async.__GT_t_cljs$core$async39981 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39981(f__$1,ch__$1,meta39982){
return (new cljs.core.async.t_cljs$core$async39981(f__$1,ch__$1,meta39982));
});

}

return (new cljs.core.async.t_cljs$core$async39981(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40023 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40023 = (function (p,ch,meta40024){
this.p = p;
this.ch = ch;
this.meta40024 = meta40024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40025,meta40024__$1){
var self__ = this;
var _40025__$1 = this;
return (new cljs.core.async.t_cljs$core$async40023(self__.p,self__.ch,meta40024__$1));
}));

(cljs.core.async.t_cljs$core$async40023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40025){
var self__ = this;
var _40025__$1 = this;
return self__.meta40024;
}));

(cljs.core.async.t_cljs$core$async40023.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40023.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40023.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40023.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40023.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async40023.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40023.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async40023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40024","meta40024",135067965,null)], null);
}));

(cljs.core.async.t_cljs$core$async40023.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40023");

(cljs.core.async.t_cljs$core$async40023.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async40023");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40023.
 */
cljs.core.async.__GT_t_cljs$core$async40023 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40023(p__$1,ch__$1,meta40024){
return (new cljs.core.async.t_cljs$core$async40023(p__$1,ch__$1,meta40024));
});

}

return (new cljs.core.async.t_cljs$core$async40023(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40045 = arguments.length;
switch (G__40045) {
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
var c__27317__auto___41824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_40074){
var state_val_40075 = (state_40074[(1)]);
if((state_val_40075 === (7))){
var inst_40070 = (state_40074[(2)]);
var state_40074__$1 = state_40074;
var statearr_40077_41825 = state_40074__$1;
(statearr_40077_41825[(2)] = inst_40070);

(statearr_40077_41825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40075 === (1))){
var state_40074__$1 = state_40074;
var statearr_40078_41826 = state_40074__$1;
(statearr_40078_41826[(2)] = null);

(statearr_40078_41826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40075 === (4))){
var inst_40056 = (state_40074[(7)]);
var inst_40056__$1 = (state_40074[(2)]);
var inst_40057 = (inst_40056__$1 == null);
var state_40074__$1 = (function (){var statearr_40079 = state_40074;
(statearr_40079[(7)] = inst_40056__$1);

return statearr_40079;
})();
if(cljs.core.truth_(inst_40057)){
var statearr_40080_41827 = state_40074__$1;
(statearr_40080_41827[(1)] = (5));

} else {
var statearr_40081_41828 = state_40074__$1;
(statearr_40081_41828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40075 === (6))){
var inst_40056 = (state_40074[(7)]);
var inst_40061 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40056) : p.call(null,inst_40056));
var state_40074__$1 = state_40074;
if(cljs.core.truth_(inst_40061)){
var statearr_40089_41829 = state_40074__$1;
(statearr_40089_41829[(1)] = (8));

} else {
var statearr_40091_41830 = state_40074__$1;
(statearr_40091_41830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40075 === (3))){
var inst_40072 = (state_40074[(2)]);
var state_40074__$1 = state_40074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40074__$1,inst_40072);
} else {
if((state_val_40075 === (2))){
var state_40074__$1 = state_40074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40074__$1,(4),ch);
} else {
if((state_val_40075 === (11))){
var inst_40064 = (state_40074[(2)]);
var state_40074__$1 = state_40074;
var statearr_40101_41832 = state_40074__$1;
(statearr_40101_41832[(2)] = inst_40064);

(statearr_40101_41832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40075 === (9))){
var state_40074__$1 = state_40074;
var statearr_40110_41833 = state_40074__$1;
(statearr_40110_41833[(2)] = null);

(statearr_40110_41833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40075 === (5))){
var inst_40059 = cljs.core.async.close_BANG_(out);
var state_40074__$1 = state_40074;
var statearr_40113_41837 = state_40074__$1;
(statearr_40113_41837[(2)] = inst_40059);

(statearr_40113_41837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40075 === (10))){
var inst_40067 = (state_40074[(2)]);
var state_40074__$1 = (function (){var statearr_40115 = state_40074;
(statearr_40115[(8)] = inst_40067);

return statearr_40115;
})();
var statearr_40117_41838 = state_40074__$1;
(statearr_40117_41838[(2)] = null);

(statearr_40117_41838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40075 === (8))){
var inst_40056 = (state_40074[(7)]);
var state_40074__$1 = state_40074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40074__$1,(11),out,inst_40056);
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
var cljs$core$async$state_machine__27139__auto__ = null;
var cljs$core$async$state_machine__27139__auto____0 = (function (){
var statearr_40121 = [null,null,null,null,null,null,null,null,null];
(statearr_40121[(0)] = cljs$core$async$state_machine__27139__auto__);

(statearr_40121[(1)] = (1));

return statearr_40121;
});
var cljs$core$async$state_machine__27139__auto____1 = (function (state_40074){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_40074);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e40123){var ex__27142__auto__ = e40123;
var statearr_40124_41839 = state_40074;
(statearr_40124_41839[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_40074[(4)]))){
var statearr_40125_41840 = state_40074;
(statearr_40125_41840[(1)] = cljs.core.first((state_40074[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41841 = state_40074;
state_40074 = G__41841;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$state_machine__27139__auto__ = function(state_40074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27139__auto____1.call(this,state_40074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27139__auto____0;
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27139__auto____1;
return cljs$core$async$state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_40129 = f__27318__auto__();
(statearr_40129[(6)] = c__27317__auto___41824);

return statearr_40129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40134 = arguments.length;
switch (G__40134) {
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
var c__27317__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_40202){
var state_val_40203 = (state_40202[(1)]);
if((state_val_40203 === (7))){
var inst_40198 = (state_40202[(2)]);
var state_40202__$1 = state_40202;
var statearr_40207_41843 = state_40202__$1;
(statearr_40207_41843[(2)] = inst_40198);

(statearr_40207_41843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (20))){
var inst_40164 = (state_40202[(7)]);
var inst_40178 = (state_40202[(2)]);
var inst_40179 = cljs.core.next(inst_40164);
var inst_40150 = inst_40179;
var inst_40151 = null;
var inst_40152 = (0);
var inst_40153 = (0);
var state_40202__$1 = (function (){var statearr_40212 = state_40202;
(statearr_40212[(8)] = inst_40152);

(statearr_40212[(9)] = inst_40151);

(statearr_40212[(10)] = inst_40178);

(statearr_40212[(11)] = inst_40150);

(statearr_40212[(12)] = inst_40153);

return statearr_40212;
})();
var statearr_40213_41844 = state_40202__$1;
(statearr_40213_41844[(2)] = null);

(statearr_40213_41844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (1))){
var state_40202__$1 = state_40202;
var statearr_40215_41845 = state_40202__$1;
(statearr_40215_41845[(2)] = null);

(statearr_40215_41845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (4))){
var inst_40139 = (state_40202[(13)]);
var inst_40139__$1 = (state_40202[(2)]);
var inst_40140 = (inst_40139__$1 == null);
var state_40202__$1 = (function (){var statearr_40217 = state_40202;
(statearr_40217[(13)] = inst_40139__$1);

return statearr_40217;
})();
if(cljs.core.truth_(inst_40140)){
var statearr_40218_41846 = state_40202__$1;
(statearr_40218_41846[(1)] = (5));

} else {
var statearr_40223_41847 = state_40202__$1;
(statearr_40223_41847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (15))){
var state_40202__$1 = state_40202;
var statearr_40231_41849 = state_40202__$1;
(statearr_40231_41849[(2)] = null);

(statearr_40231_41849[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (21))){
var state_40202__$1 = state_40202;
var statearr_40232_41850 = state_40202__$1;
(statearr_40232_41850[(2)] = null);

(statearr_40232_41850[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (13))){
var inst_40152 = (state_40202[(8)]);
var inst_40151 = (state_40202[(9)]);
var inst_40150 = (state_40202[(11)]);
var inst_40153 = (state_40202[(12)]);
var inst_40160 = (state_40202[(2)]);
var inst_40161 = (inst_40153 + (1));
var tmp40228 = inst_40152;
var tmp40229 = inst_40151;
var tmp40230 = inst_40150;
var inst_40150__$1 = tmp40230;
var inst_40151__$1 = tmp40229;
var inst_40152__$1 = tmp40228;
var inst_40153__$1 = inst_40161;
var state_40202__$1 = (function (){var statearr_40234 = state_40202;
(statearr_40234[(8)] = inst_40152__$1);

(statearr_40234[(9)] = inst_40151__$1);

(statearr_40234[(14)] = inst_40160);

(statearr_40234[(11)] = inst_40150__$1);

(statearr_40234[(12)] = inst_40153__$1);

return statearr_40234;
})();
var statearr_40235_41853 = state_40202__$1;
(statearr_40235_41853[(2)] = null);

(statearr_40235_41853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (22))){
var state_40202__$1 = state_40202;
var statearr_40237_41855 = state_40202__$1;
(statearr_40237_41855[(2)] = null);

(statearr_40237_41855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (6))){
var inst_40139 = (state_40202[(13)]);
var inst_40148 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40139) : f.call(null,inst_40139));
var inst_40149 = cljs.core.seq(inst_40148);
var inst_40150 = inst_40149;
var inst_40151 = null;
var inst_40152 = (0);
var inst_40153 = (0);
var state_40202__$1 = (function (){var statearr_40239 = state_40202;
(statearr_40239[(8)] = inst_40152);

(statearr_40239[(9)] = inst_40151);

(statearr_40239[(11)] = inst_40150);

(statearr_40239[(12)] = inst_40153);

return statearr_40239;
})();
var statearr_40240_41856 = state_40202__$1;
(statearr_40240_41856[(2)] = null);

(statearr_40240_41856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (17))){
var inst_40164 = (state_40202[(7)]);
var inst_40168 = cljs.core.chunk_first(inst_40164);
var inst_40170 = cljs.core.chunk_rest(inst_40164);
var inst_40171 = cljs.core.count(inst_40168);
var inst_40150 = inst_40170;
var inst_40151 = inst_40168;
var inst_40152 = inst_40171;
var inst_40153 = (0);
var state_40202__$1 = (function (){var statearr_40242 = state_40202;
(statearr_40242[(8)] = inst_40152);

(statearr_40242[(9)] = inst_40151);

(statearr_40242[(11)] = inst_40150);

(statearr_40242[(12)] = inst_40153);

return statearr_40242;
})();
var statearr_40243_41857 = state_40202__$1;
(statearr_40243_41857[(2)] = null);

(statearr_40243_41857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (3))){
var inst_40200 = (state_40202[(2)]);
var state_40202__$1 = state_40202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40202__$1,inst_40200);
} else {
if((state_val_40203 === (12))){
var inst_40188 = (state_40202[(2)]);
var state_40202__$1 = state_40202;
var statearr_40244_41858 = state_40202__$1;
(statearr_40244_41858[(2)] = inst_40188);

(statearr_40244_41858[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (2))){
var state_40202__$1 = state_40202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40202__$1,(4),in$);
} else {
if((state_val_40203 === (23))){
var inst_40196 = (state_40202[(2)]);
var state_40202__$1 = state_40202;
var statearr_40248_41859 = state_40202__$1;
(statearr_40248_41859[(2)] = inst_40196);

(statearr_40248_41859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (19))){
var inst_40183 = (state_40202[(2)]);
var state_40202__$1 = state_40202;
var statearr_40251_41860 = state_40202__$1;
(statearr_40251_41860[(2)] = inst_40183);

(statearr_40251_41860[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (11))){
var inst_40164 = (state_40202[(7)]);
var inst_40150 = (state_40202[(11)]);
var inst_40164__$1 = cljs.core.seq(inst_40150);
var state_40202__$1 = (function (){var statearr_40256 = state_40202;
(statearr_40256[(7)] = inst_40164__$1);

return statearr_40256;
})();
if(inst_40164__$1){
var statearr_40260_41861 = state_40202__$1;
(statearr_40260_41861[(1)] = (14));

} else {
var statearr_40261_41862 = state_40202__$1;
(statearr_40261_41862[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (9))){
var inst_40190 = (state_40202[(2)]);
var inst_40191 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_40202__$1 = (function (){var statearr_40268 = state_40202;
(statearr_40268[(15)] = inst_40190);

return statearr_40268;
})();
if(cljs.core.truth_(inst_40191)){
var statearr_40274_41863 = state_40202__$1;
(statearr_40274_41863[(1)] = (21));

} else {
var statearr_40279_41864 = state_40202__$1;
(statearr_40279_41864[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (5))){
var inst_40142 = cljs.core.async.close_BANG_(out);
var state_40202__$1 = state_40202;
var statearr_40317_41865 = state_40202__$1;
(statearr_40317_41865[(2)] = inst_40142);

(statearr_40317_41865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (14))){
var inst_40164 = (state_40202[(7)]);
var inst_40166 = cljs.core.chunked_seq_QMARK_(inst_40164);
var state_40202__$1 = state_40202;
if(inst_40166){
var statearr_40320_41866 = state_40202__$1;
(statearr_40320_41866[(1)] = (17));

} else {
var statearr_40321_41867 = state_40202__$1;
(statearr_40321_41867[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (16))){
var inst_40186 = (state_40202[(2)]);
var state_40202__$1 = state_40202;
var statearr_40323_41868 = state_40202__$1;
(statearr_40323_41868[(2)] = inst_40186);

(statearr_40323_41868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (10))){
var inst_40151 = (state_40202[(9)]);
var inst_40153 = (state_40202[(12)]);
var inst_40158 = cljs.core._nth(inst_40151,inst_40153);
var state_40202__$1 = state_40202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40202__$1,(13),out,inst_40158);
} else {
if((state_val_40203 === (18))){
var inst_40164 = (state_40202[(7)]);
var inst_40174 = cljs.core.first(inst_40164);
var state_40202__$1 = state_40202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40202__$1,(20),out,inst_40174);
} else {
if((state_val_40203 === (8))){
var inst_40152 = (state_40202[(8)]);
var inst_40153 = (state_40202[(12)]);
var inst_40155 = (inst_40153 < inst_40152);
var inst_40156 = inst_40155;
var state_40202__$1 = state_40202;
if(cljs.core.truth_(inst_40156)){
var statearr_40331_41869 = state_40202__$1;
(statearr_40331_41869[(1)] = (10));

} else {
var statearr_40332_41871 = state_40202__$1;
(statearr_40332_41871[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__27139__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27139__auto____0 = (function (){
var statearr_40333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40333[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27139__auto__);

(statearr_40333[(1)] = (1));

return statearr_40333;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27139__auto____1 = (function (state_40202){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_40202);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e40334){var ex__27142__auto__ = e40334;
var statearr_40335_41875 = state_40202;
(statearr_40335_41875[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_40202[(4)]))){
var statearr_40336_41876 = state_40202;
(statearr_40336_41876[(1)] = cljs.core.first((state_40202[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41877 = state_40202;
state_40202 = G__41877;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27139__auto__ = function(state_40202){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27139__auto____1.call(this,state_40202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27139__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27139__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_40345 = f__27318__auto__();
(statearr_40345[(6)] = c__27317__auto__);

return statearr_40345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
}));

return c__27317__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40355 = arguments.length;
switch (G__40355) {
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
var G__40360 = arguments.length;
switch (G__40360) {
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
var G__40367 = arguments.length;
switch (G__40367) {
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
var c__27317__auto___41891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_40398){
var state_val_40399 = (state_40398[(1)]);
if((state_val_40399 === (7))){
var inst_40393 = (state_40398[(2)]);
var state_40398__$1 = state_40398;
var statearr_40405_41892 = state_40398__$1;
(statearr_40405_41892[(2)] = inst_40393);

(statearr_40405_41892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40399 === (1))){
var inst_40373 = null;
var state_40398__$1 = (function (){var statearr_40407 = state_40398;
(statearr_40407[(7)] = inst_40373);

return statearr_40407;
})();
var statearr_40408_41897 = state_40398__$1;
(statearr_40408_41897[(2)] = null);

(statearr_40408_41897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40399 === (4))){
var inst_40376 = (state_40398[(8)]);
var inst_40376__$1 = (state_40398[(2)]);
var inst_40379 = (inst_40376__$1 == null);
var inst_40380 = cljs.core.not(inst_40379);
var state_40398__$1 = (function (){var statearr_40413 = state_40398;
(statearr_40413[(8)] = inst_40376__$1);

return statearr_40413;
})();
if(inst_40380){
var statearr_40418_41898 = state_40398__$1;
(statearr_40418_41898[(1)] = (5));

} else {
var statearr_40420_41899 = state_40398__$1;
(statearr_40420_41899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40399 === (6))){
var state_40398__$1 = state_40398;
var statearr_40422_41900 = state_40398__$1;
(statearr_40422_41900[(2)] = null);

(statearr_40422_41900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40399 === (3))){
var inst_40395 = (state_40398[(2)]);
var inst_40396 = cljs.core.async.close_BANG_(out);
var state_40398__$1 = (function (){var statearr_40424 = state_40398;
(statearr_40424[(9)] = inst_40395);

return statearr_40424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40398__$1,inst_40396);
} else {
if((state_val_40399 === (2))){
var state_40398__$1 = state_40398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40398__$1,(4),ch);
} else {
if((state_val_40399 === (11))){
var inst_40376 = (state_40398[(8)]);
var inst_40387 = (state_40398[(2)]);
var inst_40373 = inst_40376;
var state_40398__$1 = (function (){var statearr_40430 = state_40398;
(statearr_40430[(10)] = inst_40387);

(statearr_40430[(7)] = inst_40373);

return statearr_40430;
})();
var statearr_40431_41901 = state_40398__$1;
(statearr_40431_41901[(2)] = null);

(statearr_40431_41901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40399 === (9))){
var inst_40376 = (state_40398[(8)]);
var state_40398__$1 = state_40398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40398__$1,(11),out,inst_40376);
} else {
if((state_val_40399 === (5))){
var inst_40373 = (state_40398[(7)]);
var inst_40376 = (state_40398[(8)]);
var inst_40382 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40376,inst_40373);
var state_40398__$1 = state_40398;
if(inst_40382){
var statearr_40433_41902 = state_40398__$1;
(statearr_40433_41902[(1)] = (8));

} else {
var statearr_40434_41903 = state_40398__$1;
(statearr_40434_41903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40399 === (10))){
var inst_40390 = (state_40398[(2)]);
var state_40398__$1 = state_40398;
var statearr_40435_41904 = state_40398__$1;
(statearr_40435_41904[(2)] = inst_40390);

(statearr_40435_41904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40399 === (8))){
var inst_40373 = (state_40398[(7)]);
var tmp40432 = inst_40373;
var inst_40373__$1 = tmp40432;
var state_40398__$1 = (function (){var statearr_40436 = state_40398;
(statearr_40436[(7)] = inst_40373__$1);

return statearr_40436;
})();
var statearr_40437_41905 = state_40398__$1;
(statearr_40437_41905[(2)] = null);

(statearr_40437_41905[(1)] = (2));


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
var cljs$core$async$state_machine__27139__auto__ = null;
var cljs$core$async$state_machine__27139__auto____0 = (function (){
var statearr_40442 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40442[(0)] = cljs$core$async$state_machine__27139__auto__);

(statearr_40442[(1)] = (1));

return statearr_40442;
});
var cljs$core$async$state_machine__27139__auto____1 = (function (state_40398){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_40398);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e40443){var ex__27142__auto__ = e40443;
var statearr_40444_41906 = state_40398;
(statearr_40444_41906[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_40398[(4)]))){
var statearr_40445_41907 = state_40398;
(statearr_40445_41907[(1)] = cljs.core.first((state_40398[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41908 = state_40398;
state_40398 = G__41908;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$state_machine__27139__auto__ = function(state_40398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27139__auto____1.call(this,state_40398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27139__auto____0;
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27139__auto____1;
return cljs$core$async$state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_40447 = f__27318__auto__();
(statearr_40447[(6)] = c__27317__auto___41891);

return statearr_40447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40451 = arguments.length;
switch (G__40451) {
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
var c__27317__auto___41910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_40493){
var state_val_40494 = (state_40493[(1)]);
if((state_val_40494 === (7))){
var inst_40489 = (state_40493[(2)]);
var state_40493__$1 = state_40493;
var statearr_40503_41911 = state_40493__$1;
(statearr_40503_41911[(2)] = inst_40489);

(statearr_40503_41911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40494 === (1))){
var inst_40456 = (new Array(n));
var inst_40457 = inst_40456;
var inst_40458 = (0);
var state_40493__$1 = (function (){var statearr_40509 = state_40493;
(statearr_40509[(7)] = inst_40458);

(statearr_40509[(8)] = inst_40457);

return statearr_40509;
})();
var statearr_40512_41912 = state_40493__$1;
(statearr_40512_41912[(2)] = null);

(statearr_40512_41912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40494 === (4))){
var inst_40461 = (state_40493[(9)]);
var inst_40461__$1 = (state_40493[(2)]);
var inst_40462 = (inst_40461__$1 == null);
var inst_40463 = cljs.core.not(inst_40462);
var state_40493__$1 = (function (){var statearr_40519 = state_40493;
(statearr_40519[(9)] = inst_40461__$1);

return statearr_40519;
})();
if(inst_40463){
var statearr_40524_41913 = state_40493__$1;
(statearr_40524_41913[(1)] = (5));

} else {
var statearr_40525_41914 = state_40493__$1;
(statearr_40525_41914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40494 === (15))){
var inst_40483 = (state_40493[(2)]);
var state_40493__$1 = state_40493;
var statearr_40526_41915 = state_40493__$1;
(statearr_40526_41915[(2)] = inst_40483);

(statearr_40526_41915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40494 === (13))){
var state_40493__$1 = state_40493;
var statearr_40527_41916 = state_40493__$1;
(statearr_40527_41916[(2)] = null);

(statearr_40527_41916[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40494 === (6))){
var inst_40458 = (state_40493[(7)]);
var inst_40479 = (inst_40458 > (0));
var state_40493__$1 = state_40493;
if(cljs.core.truth_(inst_40479)){
var statearr_40536_41917 = state_40493__$1;
(statearr_40536_41917[(1)] = (12));

} else {
var statearr_40537_41918 = state_40493__$1;
(statearr_40537_41918[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40494 === (3))){
var inst_40491 = (state_40493[(2)]);
var state_40493__$1 = state_40493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40493__$1,inst_40491);
} else {
if((state_val_40494 === (12))){
var inst_40457 = (state_40493[(8)]);
var inst_40481 = cljs.core.vec(inst_40457);
var state_40493__$1 = state_40493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40493__$1,(15),out,inst_40481);
} else {
if((state_val_40494 === (2))){
var state_40493__$1 = state_40493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40493__$1,(4),ch);
} else {
if((state_val_40494 === (11))){
var inst_40473 = (state_40493[(2)]);
var inst_40474 = (new Array(n));
var inst_40457 = inst_40474;
var inst_40458 = (0);
var state_40493__$1 = (function (){var statearr_40544 = state_40493;
(statearr_40544[(10)] = inst_40473);

(statearr_40544[(7)] = inst_40458);

(statearr_40544[(8)] = inst_40457);

return statearr_40544;
})();
var statearr_40548_41919 = state_40493__$1;
(statearr_40548_41919[(2)] = null);

(statearr_40548_41919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40494 === (9))){
var inst_40457 = (state_40493[(8)]);
var inst_40471 = cljs.core.vec(inst_40457);
var state_40493__$1 = state_40493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40493__$1,(11),out,inst_40471);
} else {
if((state_val_40494 === (5))){
var inst_40461 = (state_40493[(9)]);
var inst_40458 = (state_40493[(7)]);
var inst_40457 = (state_40493[(8)]);
var inst_40466 = (state_40493[(11)]);
var inst_40465 = (inst_40457[inst_40458] = inst_40461);
var inst_40466__$1 = (inst_40458 + (1));
var inst_40467 = (inst_40466__$1 < n);
var state_40493__$1 = (function (){var statearr_40554 = state_40493;
(statearr_40554[(12)] = inst_40465);

(statearr_40554[(11)] = inst_40466__$1);

return statearr_40554;
})();
if(cljs.core.truth_(inst_40467)){
var statearr_40556_41920 = state_40493__$1;
(statearr_40556_41920[(1)] = (8));

} else {
var statearr_40557_41921 = state_40493__$1;
(statearr_40557_41921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40494 === (14))){
var inst_40486 = (state_40493[(2)]);
var inst_40487 = cljs.core.async.close_BANG_(out);
var state_40493__$1 = (function (){var statearr_40567 = state_40493;
(statearr_40567[(13)] = inst_40486);

return statearr_40567;
})();
var statearr_40569_41922 = state_40493__$1;
(statearr_40569_41922[(2)] = inst_40487);

(statearr_40569_41922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40494 === (10))){
var inst_40477 = (state_40493[(2)]);
var state_40493__$1 = state_40493;
var statearr_40576_41923 = state_40493__$1;
(statearr_40576_41923[(2)] = inst_40477);

(statearr_40576_41923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40494 === (8))){
var inst_40457 = (state_40493[(8)]);
var inst_40466 = (state_40493[(11)]);
var tmp40558 = inst_40457;
var inst_40457__$1 = tmp40558;
var inst_40458 = inst_40466;
var state_40493__$1 = (function (){var statearr_40584 = state_40493;
(statearr_40584[(7)] = inst_40458);

(statearr_40584[(8)] = inst_40457__$1);

return statearr_40584;
})();
var statearr_40586_41924 = state_40493__$1;
(statearr_40586_41924[(2)] = null);

(statearr_40586_41924[(1)] = (2));


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
var cljs$core$async$state_machine__27139__auto__ = null;
var cljs$core$async$state_machine__27139__auto____0 = (function (){
var statearr_40592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40592[(0)] = cljs$core$async$state_machine__27139__auto__);

(statearr_40592[(1)] = (1));

return statearr_40592;
});
var cljs$core$async$state_machine__27139__auto____1 = (function (state_40493){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_40493);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e40593){var ex__27142__auto__ = e40593;
var statearr_40596_41925 = state_40493;
(statearr_40596_41925[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_40493[(4)]))){
var statearr_40597_41926 = state_40493;
(statearr_40597_41926[(1)] = cljs.core.first((state_40493[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41927 = state_40493;
state_40493 = G__41927;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$state_machine__27139__auto__ = function(state_40493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27139__auto____1.call(this,state_40493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27139__auto____0;
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27139__auto____1;
return cljs$core$async$state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_40603 = f__27318__auto__();
(statearr_40603[(6)] = c__27317__auto___41910);

return statearr_40603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40609 = arguments.length;
switch (G__40609) {
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
var c__27317__auto___41932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27318__auto__ = (function (){var switch__27138__auto__ = (function (state_40656){
var state_val_40657 = (state_40656[(1)]);
if((state_val_40657 === (7))){
var inst_40650 = (state_40656[(2)]);
var state_40656__$1 = state_40656;
var statearr_40659_41933 = state_40656__$1;
(statearr_40659_41933[(2)] = inst_40650);

(statearr_40659_41933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (1))){
var inst_40610 = [];
var inst_40611 = inst_40610;
var inst_40612 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40656__$1 = (function (){var statearr_40660 = state_40656;
(statearr_40660[(7)] = inst_40611);

(statearr_40660[(8)] = inst_40612);

return statearr_40660;
})();
var statearr_40661_41934 = state_40656__$1;
(statearr_40661_41934[(2)] = null);

(statearr_40661_41934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (4))){
var inst_40615 = (state_40656[(9)]);
var inst_40615__$1 = (state_40656[(2)]);
var inst_40616 = (inst_40615__$1 == null);
var inst_40617 = cljs.core.not(inst_40616);
var state_40656__$1 = (function (){var statearr_40662 = state_40656;
(statearr_40662[(9)] = inst_40615__$1);

return statearr_40662;
})();
if(inst_40617){
var statearr_40663_41935 = state_40656__$1;
(statearr_40663_41935[(1)] = (5));

} else {
var statearr_40664_41937 = state_40656__$1;
(statearr_40664_41937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (15))){
var inst_40611 = (state_40656[(7)]);
var inst_40642 = cljs.core.vec(inst_40611);
var state_40656__$1 = state_40656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40656__$1,(18),out,inst_40642);
} else {
if((state_val_40657 === (13))){
var inst_40637 = (state_40656[(2)]);
var state_40656__$1 = state_40656;
var statearr_40671_41939 = state_40656__$1;
(statearr_40671_41939[(2)] = inst_40637);

(statearr_40671_41939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (6))){
var inst_40611 = (state_40656[(7)]);
var inst_40639 = inst_40611.length;
var inst_40640 = (inst_40639 > (0));
var state_40656__$1 = state_40656;
if(cljs.core.truth_(inst_40640)){
var statearr_40672_41944 = state_40656__$1;
(statearr_40672_41944[(1)] = (15));

} else {
var statearr_40674_41945 = state_40656__$1;
(statearr_40674_41945[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (17))){
var inst_40647 = (state_40656[(2)]);
var inst_40648 = cljs.core.async.close_BANG_(out);
var state_40656__$1 = (function (){var statearr_40675 = state_40656;
(statearr_40675[(10)] = inst_40647);

return statearr_40675;
})();
var statearr_40676_41946 = state_40656__$1;
(statearr_40676_41946[(2)] = inst_40648);

(statearr_40676_41946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (3))){
var inst_40652 = (state_40656[(2)]);
var state_40656__$1 = state_40656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40656__$1,inst_40652);
} else {
if((state_val_40657 === (12))){
var inst_40611 = (state_40656[(7)]);
var inst_40630 = cljs.core.vec(inst_40611);
var state_40656__$1 = state_40656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40656__$1,(14),out,inst_40630);
} else {
if((state_val_40657 === (2))){
var state_40656__$1 = state_40656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40656__$1,(4),ch);
} else {
if((state_val_40657 === (11))){
var inst_40615 = (state_40656[(9)]);
var inst_40619 = (state_40656[(11)]);
var inst_40611 = (state_40656[(7)]);
var inst_40627 = inst_40611.push(inst_40615);
var tmp40679 = inst_40611;
var inst_40611__$1 = tmp40679;
var inst_40612 = inst_40619;
var state_40656__$1 = (function (){var statearr_40688 = state_40656;
(statearr_40688[(12)] = inst_40627);

(statearr_40688[(7)] = inst_40611__$1);

(statearr_40688[(8)] = inst_40612);

return statearr_40688;
})();
var statearr_40689_41950 = state_40656__$1;
(statearr_40689_41950[(2)] = null);

(statearr_40689_41950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (9))){
var inst_40612 = (state_40656[(8)]);
var inst_40623 = cljs.core.keyword_identical_QMARK_(inst_40612,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_40656__$1 = state_40656;
var statearr_40693_41951 = state_40656__$1;
(statearr_40693_41951[(2)] = inst_40623);

(statearr_40693_41951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (5))){
var inst_40615 = (state_40656[(9)]);
var inst_40619 = (state_40656[(11)]);
var inst_40620 = (state_40656[(13)]);
var inst_40612 = (state_40656[(8)]);
var inst_40619__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40615) : f.call(null,inst_40615));
var inst_40620__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40619__$1,inst_40612);
var state_40656__$1 = (function (){var statearr_40697 = state_40656;
(statearr_40697[(11)] = inst_40619__$1);

(statearr_40697[(13)] = inst_40620__$1);

return statearr_40697;
})();
if(inst_40620__$1){
var statearr_40698_41953 = state_40656__$1;
(statearr_40698_41953[(1)] = (8));

} else {
var statearr_40699_41956 = state_40656__$1;
(statearr_40699_41956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (14))){
var inst_40615 = (state_40656[(9)]);
var inst_40619 = (state_40656[(11)]);
var inst_40632 = (state_40656[(2)]);
var inst_40633 = [];
var inst_40634 = inst_40633.push(inst_40615);
var inst_40611 = inst_40633;
var inst_40612 = inst_40619;
var state_40656__$1 = (function (){var statearr_40700 = state_40656;
(statearr_40700[(7)] = inst_40611);

(statearr_40700[(14)] = inst_40634);

(statearr_40700[(8)] = inst_40612);

(statearr_40700[(15)] = inst_40632);

return statearr_40700;
})();
var statearr_40701_41957 = state_40656__$1;
(statearr_40701_41957[(2)] = null);

(statearr_40701_41957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (16))){
var state_40656__$1 = state_40656;
var statearr_40703_41958 = state_40656__$1;
(statearr_40703_41958[(2)] = null);

(statearr_40703_41958[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (10))){
var inst_40625 = (state_40656[(2)]);
var state_40656__$1 = state_40656;
if(cljs.core.truth_(inst_40625)){
var statearr_40704_41959 = state_40656__$1;
(statearr_40704_41959[(1)] = (11));

} else {
var statearr_40705_41960 = state_40656__$1;
(statearr_40705_41960[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (18))){
var inst_40644 = (state_40656[(2)]);
var state_40656__$1 = state_40656;
var statearr_40706_41968 = state_40656__$1;
(statearr_40706_41968[(2)] = inst_40644);

(statearr_40706_41968[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40657 === (8))){
var inst_40620 = (state_40656[(13)]);
var state_40656__$1 = state_40656;
var statearr_40707_41969 = state_40656__$1;
(statearr_40707_41969[(2)] = inst_40620);

(statearr_40707_41969[(1)] = (10));


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
var cljs$core$async$state_machine__27139__auto__ = null;
var cljs$core$async$state_machine__27139__auto____0 = (function (){
var statearr_40708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40708[(0)] = cljs$core$async$state_machine__27139__auto__);

(statearr_40708[(1)] = (1));

return statearr_40708;
});
var cljs$core$async$state_machine__27139__auto____1 = (function (state_40656){
while(true){
var ret_value__27140__auto__ = (function (){try{while(true){
var result__27141__auto__ = switch__27138__auto__(state_40656);
if(cljs.core.keyword_identical_QMARK_(result__27141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27141__auto__;
}
break;
}
}catch (e40709){var ex__27142__auto__ = e40709;
var statearr_40711_41971 = state_40656;
(statearr_40711_41971[(2)] = ex__27142__auto__);


if(cljs.core.seq((state_40656[(4)]))){
var statearr_40712_41972 = state_40656;
(statearr_40712_41972[(1)] = cljs.core.first((state_40656[(4)])));

} else {
throw ex__27142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41973 = state_40656;
state_40656 = G__41973;
continue;
} else {
return ret_value__27140__auto__;
}
break;
}
});
cljs$core$async$state_machine__27139__auto__ = function(state_40656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27139__auto____1.call(this,state_40656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27139__auto____0;
cljs$core$async$state_machine__27139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27139__auto____1;
return cljs$core$async$state_machine__27139__auto__;
})()
})();
var state__27319__auto__ = (function (){var statearr_40713 = f__27318__auto__();
(statearr_40713[(6)] = c__27317__auto___41932);

return statearr_40713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27319__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
