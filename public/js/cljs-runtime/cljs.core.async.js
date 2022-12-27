goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30435 = arguments.length;
switch (G__30435) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30443 = (function (f,blockable,meta30444){
this.f = f;
this.blockable = blockable;
this.meta30444 = meta30444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30445,meta30444__$1){
var self__ = this;
var _30445__$1 = this;
return (new cljs.core.async.t_cljs$core$async30443(self__.f,self__.blockable,meta30444__$1));
}));

(cljs.core.async.t_cljs$core$async30443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30445){
var self__ = this;
var _30445__$1 = this;
return self__.meta30444;
}));

(cljs.core.async.t_cljs$core$async30443.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30443.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30443.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30443.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30444","meta30444",-908438322,null)], null);
}));

(cljs.core.async.t_cljs$core$async30443.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30443");

(cljs.core.async.t_cljs$core$async30443.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30443");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30443.
 */
cljs.core.async.__GT_t_cljs$core$async30443 = (function cljs$core$async$__GT_t_cljs$core$async30443(f__$1,blockable__$1,meta30444){
return (new cljs.core.async.t_cljs$core$async30443(f__$1,blockable__$1,meta30444));
});

}

return (new cljs.core.async.t_cljs$core$async30443(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30480 = arguments.length;
switch (G__30480) {
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
var G__30510 = arguments.length;
switch (G__30510) {
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
var G__30541 = arguments.length;
switch (G__30541) {
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
var val_34467 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34467) : fn1.call(null,val_34467));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34467) : fn1.call(null,val_34467));
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
var G__30562 = arguments.length;
switch (G__30562) {
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
var n__5636__auto___34491 = n;
var x_34492 = (0);
while(true){
if((x_34492 < n__5636__auto___34491)){
(a[x_34492] = x_34492);

var G__34493 = (x_34492 + (1));
x_34492 = G__34493;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30583 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30583 = (function (flag,meta30584){
this.flag = flag;
this.meta30584 = meta30584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30585,meta30584__$1){
var self__ = this;
var _30585__$1 = this;
return (new cljs.core.async.t_cljs$core$async30583(self__.flag,meta30584__$1));
}));

(cljs.core.async.t_cljs$core$async30583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30585){
var self__ = this;
var _30585__$1 = this;
return self__.meta30584;
}));

(cljs.core.async.t_cljs$core$async30583.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30583.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30583.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30583.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30584","meta30584",-500977830,null)], null);
}));

(cljs.core.async.t_cljs$core$async30583.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30583");

(cljs.core.async.t_cljs$core$async30583.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30583");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30583.
 */
cljs.core.async.__GT_t_cljs$core$async30583 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30583(flag__$1,meta30584){
return (new cljs.core.async.t_cljs$core$async30583(flag__$1,meta30584));
});

}

return (new cljs.core.async.t_cljs$core$async30583(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30601 = (function (flag,cb,meta30602){
this.flag = flag;
this.cb = cb;
this.meta30602 = meta30602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30603,meta30602__$1){
var self__ = this;
var _30603__$1 = this;
return (new cljs.core.async.t_cljs$core$async30601(self__.flag,self__.cb,meta30602__$1));
}));

(cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30603){
var self__ = this;
var _30603__$1 = this;
return self__.meta30602;
}));

(cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30602","meta30602",-263380635,null)], null);
}));

(cljs.core.async.t_cljs$core$async30601.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30601");

(cljs.core.async.t_cljs$core$async30601.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30601");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30601.
 */
cljs.core.async.__GT_t_cljs$core$async30601 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30601(flag__$1,cb__$1,meta30602){
return (new cljs.core.async.t_cljs$core$async30601(flag__$1,cb__$1,meta30602));
});

}

return (new cljs.core.async.t_cljs$core$async30601(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30642_SHARP_){
var G__30653 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30642_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30653) : fret.call(null,G__30653));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30643_SHARP_){
var G__30654 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30643_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30654) : fret.call(null,G__30654));
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
var G__34524 = (i + (1));
i = G__34524;
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
var len__5769__auto___34531 = arguments.length;
var i__5770__auto___34532 = (0);
while(true){
if((i__5770__auto___34532 < len__5769__auto___34531)){
args__5775__auto__.push((arguments[i__5770__auto___34532]));

var G__34533 = (i__5770__auto___34532 + (1));
i__5770__auto___34532 = G__34533;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30687){
var map__30688 = p__30687;
var map__30688__$1 = cljs.core.__destructure_map(map__30688);
var opts = map__30688__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30665){
var G__30666 = cljs.core.first(seq30665);
var seq30665__$1 = cljs.core.next(seq30665);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30666,seq30665__$1);
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
var G__30734 = arguments.length;
switch (G__30734) {
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
var c__30325__auto___34559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_30807){
var state_val_30808 = (state_30807[(1)]);
if((state_val_30808 === (7))){
var inst_30795 = (state_30807[(2)]);
var state_30807__$1 = state_30807;
var statearr_30817_34563 = state_30807__$1;
(statearr_30817_34563[(2)] = inst_30795);

(statearr_30817_34563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (1))){
var state_30807__$1 = state_30807;
var statearr_30818_34565 = state_30807__$1;
(statearr_30818_34565[(2)] = null);

(statearr_30818_34565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (4))){
var inst_30766 = (state_30807[(7)]);
var inst_30766__$1 = (state_30807[(2)]);
var inst_30769 = (inst_30766__$1 == null);
var state_30807__$1 = (function (){var statearr_30821 = state_30807;
(statearr_30821[(7)] = inst_30766__$1);

return statearr_30821;
})();
if(cljs.core.truth_(inst_30769)){
var statearr_30822_34568 = state_30807__$1;
(statearr_30822_34568[(1)] = (5));

} else {
var statearr_30823_34570 = state_30807__$1;
(statearr_30823_34570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (13))){
var state_30807__$1 = state_30807;
var statearr_30831_34574 = state_30807__$1;
(statearr_30831_34574[(2)] = null);

(statearr_30831_34574[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (6))){
var inst_30766 = (state_30807[(7)]);
var state_30807__$1 = state_30807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30807__$1,(11),to,inst_30766);
} else {
if((state_val_30808 === (3))){
var inst_30801 = (state_30807[(2)]);
var state_30807__$1 = state_30807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30807__$1,inst_30801);
} else {
if((state_val_30808 === (12))){
var state_30807__$1 = state_30807;
var statearr_30840_34576 = state_30807__$1;
(statearr_30840_34576[(2)] = null);

(statearr_30840_34576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (2))){
var state_30807__$1 = state_30807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30807__$1,(4),from);
} else {
if((state_val_30808 === (11))){
var inst_30785 = (state_30807[(2)]);
var state_30807__$1 = state_30807;
if(cljs.core.truth_(inst_30785)){
var statearr_30841_34581 = state_30807__$1;
(statearr_30841_34581[(1)] = (12));

} else {
var statearr_30842_34582 = state_30807__$1;
(statearr_30842_34582[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (9))){
var state_30807__$1 = state_30807;
var statearr_30843_34583 = state_30807__$1;
(statearr_30843_34583[(2)] = null);

(statearr_30843_34583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (5))){
var state_30807__$1 = state_30807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30844_34587 = state_30807__$1;
(statearr_30844_34587[(1)] = (8));

} else {
var statearr_30846_34589 = state_30807__$1;
(statearr_30846_34589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (14))){
var inst_30793 = (state_30807[(2)]);
var state_30807__$1 = state_30807;
var statearr_30847_34591 = state_30807__$1;
(statearr_30847_34591[(2)] = inst_30793);

(statearr_30847_34591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (10))){
var inst_30782 = (state_30807[(2)]);
var state_30807__$1 = state_30807;
var statearr_30871_34593 = state_30807__$1;
(statearr_30871_34593[(2)] = inst_30782);

(statearr_30871_34593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30808 === (8))){
var inst_30772 = cljs.core.async.close_BANG_(to);
var state_30807__$1 = state_30807;
var statearr_30886_34596 = state_30807__$1;
(statearr_30886_34596[(2)] = inst_30772);

(statearr_30886_34596[(1)] = (10));


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
var cljs$core$async$state_machine__29622__auto__ = null;
var cljs$core$async$state_machine__29622__auto____0 = (function (){
var statearr_30901 = [null,null,null,null,null,null,null,null];
(statearr_30901[(0)] = cljs$core$async$state_machine__29622__auto__);

(statearr_30901[(1)] = (1));

return statearr_30901;
});
var cljs$core$async$state_machine__29622__auto____1 = (function (state_30807){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_30807);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e30906){var ex__29625__auto__ = e30906;
var statearr_30907_34600 = state_30807;
(statearr_30907_34600[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_30807[(4)]))){
var statearr_30908_34602 = state_30807;
(statearr_30908_34602[(1)] = cljs.core.first((state_30807[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34604 = state_30807;
state_30807 = G__34604;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$state_machine__29622__auto__ = function(state_30807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29622__auto____1.call(this,state_30807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29622__auto____0;
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29622__auto____1;
return cljs$core$async$state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_30909 = f__30326__auto__();
(statearr_30909[(6)] = c__30325__auto___34559);

return statearr_30909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
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
var process__$1 = (function (p__30930){
var vec__30931 = p__30930;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30931,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30931,(1),null);
var job = vec__30931;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30325__auto___34615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_30938){
var state_val_30939 = (state_30938[(1)]);
if((state_val_30939 === (1))){
var state_30938__$1 = state_30938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30938__$1,(2),res,v);
} else {
if((state_val_30939 === (2))){
var inst_30935 = (state_30938[(2)]);
var inst_30936 = cljs.core.async.close_BANG_(res);
var state_30938__$1 = (function (){var statearr_30941 = state_30938;
(statearr_30941[(7)] = inst_30935);

return statearr_30941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30938__$1,inst_30936);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____0 = (function (){
var statearr_30944 = [null,null,null,null,null,null,null,null];
(statearr_30944[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__);

(statearr_30944[(1)] = (1));

return statearr_30944;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____1 = (function (state_30938){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_30938);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e30948){var ex__29625__auto__ = e30948;
var statearr_30949_34622 = state_30938;
(statearr_30949_34622[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_30938[(4)]))){
var statearr_30950_34623 = state_30938;
(statearr_30950_34623[(1)] = cljs.core.first((state_30938[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34624 = state_30938;
state_30938 = G__34624;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__ = function(state_30938){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____1.call(this,state_30938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_30953 = f__30326__auto__();
(statearr_30953[(6)] = c__30325__auto___34615);

return statearr_30953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30954){
var vec__30957 = p__30954;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30957,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30957,(1),null);
var job = vec__30957;
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
var n__5636__auto___34631 = n;
var __34633 = (0);
while(true){
if((__34633 < n__5636__auto___34631)){
var G__30968_34634 = type;
var G__30968_34635__$1 = (((G__30968_34634 instanceof cljs.core.Keyword))?G__30968_34634.fqn:null);
switch (G__30968_34635__$1) {
case "compute":
var c__30325__auto___34637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34633,c__30325__auto___34637,G__30968_34634,G__30968_34635__$1,n__5636__auto___34631,jobs,results,process__$1,async){
return (function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = ((function (__34633,c__30325__auto___34637,G__30968_34634,G__30968_34635__$1,n__5636__auto___34631,jobs,results,process__$1,async){
return (function (state_30983){
var state_val_30984 = (state_30983[(1)]);
if((state_val_30984 === (1))){
var state_30983__$1 = state_30983;
var statearr_30985_34641 = state_30983__$1;
(statearr_30985_34641[(2)] = null);

(statearr_30985_34641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (2))){
var state_30983__$1 = state_30983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30983__$1,(4),jobs);
} else {
if((state_val_30984 === (3))){
var inst_30981 = (state_30983[(2)]);
var state_30983__$1 = state_30983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30983__$1,inst_30981);
} else {
if((state_val_30984 === (4))){
var inst_30971 = (state_30983[(2)]);
var inst_30972 = process__$1(inst_30971);
var state_30983__$1 = state_30983;
if(cljs.core.truth_(inst_30972)){
var statearr_30986_34647 = state_30983__$1;
(statearr_30986_34647[(1)] = (5));

} else {
var statearr_30987_34648 = state_30983__$1;
(statearr_30987_34648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (5))){
var state_30983__$1 = state_30983;
var statearr_30988_34651 = state_30983__$1;
(statearr_30988_34651[(2)] = null);

(statearr_30988_34651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (6))){
var state_30983__$1 = state_30983;
var statearr_30994_34653 = state_30983__$1;
(statearr_30994_34653[(2)] = null);

(statearr_30994_34653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (7))){
var inst_30979 = (state_30983[(2)]);
var state_30983__$1 = state_30983;
var statearr_30995_34661 = state_30983__$1;
(statearr_30995_34661[(2)] = inst_30979);

(statearr_30995_34661[(1)] = (3));


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
});})(__34633,c__30325__auto___34637,G__30968_34634,G__30968_34635__$1,n__5636__auto___34631,jobs,results,process__$1,async))
;
return ((function (__34633,switch__29621__auto__,c__30325__auto___34637,G__30968_34634,G__30968_34635__$1,n__5636__auto___34631,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____0 = (function (){
var statearr_30998 = [null,null,null,null,null,null,null];
(statearr_30998[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__);

(statearr_30998[(1)] = (1));

return statearr_30998;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____1 = (function (state_30983){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_30983);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e31007){var ex__29625__auto__ = e31007;
var statearr_31009_34662 = state_30983;
(statearr_31009_34662[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_30983[(4)]))){
var statearr_31010_34665 = state_30983;
(statearr_31010_34665[(1)] = cljs.core.first((state_30983[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34666 = state_30983;
state_30983 = G__34666;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__ = function(state_30983){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____1.call(this,state_30983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__;
})()
;})(__34633,switch__29621__auto__,c__30325__auto___34637,G__30968_34634,G__30968_34635__$1,n__5636__auto___34631,jobs,results,process__$1,async))
})();
var state__30327__auto__ = (function (){var statearr_31012 = f__30326__auto__();
(statearr_31012[(6)] = c__30325__auto___34637);

return statearr_31012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
});})(__34633,c__30325__auto___34637,G__30968_34634,G__30968_34635__$1,n__5636__auto___34631,jobs,results,process__$1,async))
);


break;
case "async":
var c__30325__auto___34670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34633,c__30325__auto___34670,G__30968_34634,G__30968_34635__$1,n__5636__auto___34631,jobs,results,process__$1,async){
return (function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = ((function (__34633,c__30325__auto___34670,G__30968_34634,G__30968_34635__$1,n__5636__auto___34631,jobs,results,process__$1,async){
return (function (state_31028){
var state_val_31029 = (state_31028[(1)]);
if((state_val_31029 === (1))){
var state_31028__$1 = state_31028;
var statearr_31033_34675 = state_31028__$1;
(statearr_31033_34675[(2)] = null);

(statearr_31033_34675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31029 === (2))){
var state_31028__$1 = state_31028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31028__$1,(4),jobs);
} else {
if((state_val_31029 === (3))){
var inst_31024 = (state_31028[(2)]);
var state_31028__$1 = state_31028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31028__$1,inst_31024);
} else {
if((state_val_31029 === (4))){
var inst_31015 = (state_31028[(2)]);
var inst_31017 = async(inst_31015);
var state_31028__$1 = state_31028;
if(cljs.core.truth_(inst_31017)){
var statearr_31035_34682 = state_31028__$1;
(statearr_31035_34682[(1)] = (5));

} else {
var statearr_31037_34683 = state_31028__$1;
(statearr_31037_34683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31029 === (5))){
var state_31028__$1 = state_31028;
var statearr_31038_34688 = state_31028__$1;
(statearr_31038_34688[(2)] = null);

(statearr_31038_34688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31029 === (6))){
var state_31028__$1 = state_31028;
var statearr_31039_34689 = state_31028__$1;
(statearr_31039_34689[(2)] = null);

(statearr_31039_34689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31029 === (7))){
var inst_31022 = (state_31028[(2)]);
var state_31028__$1 = state_31028;
var statearr_31040_34690 = state_31028__$1;
(statearr_31040_34690[(2)] = inst_31022);

(statearr_31040_34690[(1)] = (3));


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
});})(__34633,c__30325__auto___34670,G__30968_34634,G__30968_34635__$1,n__5636__auto___34631,jobs,results,process__$1,async))
;
return ((function (__34633,switch__29621__auto__,c__30325__auto___34670,G__30968_34634,G__30968_34635__$1,n__5636__auto___34631,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____0 = (function (){
var statearr_31045 = [null,null,null,null,null,null,null];
(statearr_31045[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__);

(statearr_31045[(1)] = (1));

return statearr_31045;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____1 = (function (state_31028){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_31028);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e31046){var ex__29625__auto__ = e31046;
var statearr_31047_34693 = state_31028;
(statearr_31047_34693[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_31028[(4)]))){
var statearr_31054_34694 = state_31028;
(statearr_31054_34694[(1)] = cljs.core.first((state_31028[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34695 = state_31028;
state_31028 = G__34695;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__ = function(state_31028){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____1.call(this,state_31028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__;
})()
;})(__34633,switch__29621__auto__,c__30325__auto___34670,G__30968_34634,G__30968_34635__$1,n__5636__auto___34631,jobs,results,process__$1,async))
})();
var state__30327__auto__ = (function (){var statearr_31055 = f__30326__auto__();
(statearr_31055[(6)] = c__30325__auto___34670);

return statearr_31055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
});})(__34633,c__30325__auto___34670,G__30968_34634,G__30968_34635__$1,n__5636__auto___34631,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30968_34635__$1)].join('')));

}

var G__34696 = (__34633 + (1));
__34633 = G__34696;
continue;
} else {
}
break;
}

var c__30325__auto___34697 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_31085){
var state_val_31086 = (state_31085[(1)]);
if((state_val_31086 === (7))){
var inst_31081 = (state_31085[(2)]);
var state_31085__$1 = state_31085;
var statearr_31088_34698 = state_31085__$1;
(statearr_31088_34698[(2)] = inst_31081);

(statearr_31088_34698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31086 === (1))){
var state_31085__$1 = state_31085;
var statearr_31089_34700 = state_31085__$1;
(statearr_31089_34700[(2)] = null);

(statearr_31089_34700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31086 === (4))){
var inst_31059 = (state_31085[(7)]);
var inst_31059__$1 = (state_31085[(2)]);
var inst_31060 = (inst_31059__$1 == null);
var state_31085__$1 = (function (){var statearr_31091 = state_31085;
(statearr_31091[(7)] = inst_31059__$1);

return statearr_31091;
})();
if(cljs.core.truth_(inst_31060)){
var statearr_31092_34703 = state_31085__$1;
(statearr_31092_34703[(1)] = (5));

} else {
var statearr_31093_34704 = state_31085__$1;
(statearr_31093_34704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31086 === (6))){
var inst_31059 = (state_31085[(7)]);
var inst_31064 = (state_31085[(8)]);
var inst_31064__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31072 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31073 = [inst_31059,inst_31064__$1];
var inst_31074 = (new cljs.core.PersistentVector(null,2,(5),inst_31072,inst_31073,null));
var state_31085__$1 = (function (){var statearr_31097 = state_31085;
(statearr_31097[(8)] = inst_31064__$1);

return statearr_31097;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31085__$1,(8),jobs,inst_31074);
} else {
if((state_val_31086 === (3))){
var inst_31083 = (state_31085[(2)]);
var state_31085__$1 = state_31085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31085__$1,inst_31083);
} else {
if((state_val_31086 === (2))){
var state_31085__$1 = state_31085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31085__$1,(4),from);
} else {
if((state_val_31086 === (9))){
var inst_31078 = (state_31085[(2)]);
var state_31085__$1 = (function (){var statearr_31108 = state_31085;
(statearr_31108[(9)] = inst_31078);

return statearr_31108;
})();
var statearr_31109_34716 = state_31085__$1;
(statearr_31109_34716[(2)] = null);

(statearr_31109_34716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31086 === (5))){
var inst_31062 = cljs.core.async.close_BANG_(jobs);
var state_31085__$1 = state_31085;
var statearr_31110_34719 = state_31085__$1;
(statearr_31110_34719[(2)] = inst_31062);

(statearr_31110_34719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31086 === (8))){
var inst_31064 = (state_31085[(8)]);
var inst_31076 = (state_31085[(2)]);
var state_31085__$1 = (function (){var statearr_31111 = state_31085;
(statearr_31111[(10)] = inst_31076);

return statearr_31111;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31085__$1,(9),results,inst_31064);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____0 = (function (){
var statearr_31112 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31112[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__);

(statearr_31112[(1)] = (1));

return statearr_31112;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____1 = (function (state_31085){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_31085);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e31113){var ex__29625__auto__ = e31113;
var statearr_31115_34720 = state_31085;
(statearr_31115_34720[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_31085[(4)]))){
var statearr_31116_34721 = state_31085;
(statearr_31116_34721[(1)] = cljs.core.first((state_31085[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34723 = state_31085;
state_31085 = G__34723;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__ = function(state_31085){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____1.call(this,state_31085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_31119 = f__30326__auto__();
(statearr_31119[(6)] = c__30325__auto___34697);

return statearr_31119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
}));


var c__30325__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_31164){
var state_val_31165 = (state_31164[(1)]);
if((state_val_31165 === (7))){
var inst_31160 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
var statearr_31166_34724 = state_31164__$1;
(statearr_31166_34724[(2)] = inst_31160);

(statearr_31166_34724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (20))){
var state_31164__$1 = state_31164;
var statearr_31167_34725 = state_31164__$1;
(statearr_31167_34725[(2)] = null);

(statearr_31167_34725[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (1))){
var state_31164__$1 = state_31164;
var statearr_31169_34726 = state_31164__$1;
(statearr_31169_34726[(2)] = null);

(statearr_31169_34726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (4))){
var inst_31127 = (state_31164[(7)]);
var inst_31127__$1 = (state_31164[(2)]);
var inst_31128 = (inst_31127__$1 == null);
var state_31164__$1 = (function (){var statearr_31170 = state_31164;
(statearr_31170[(7)] = inst_31127__$1);

return statearr_31170;
})();
if(cljs.core.truth_(inst_31128)){
var statearr_31171_34730 = state_31164__$1;
(statearr_31171_34730[(1)] = (5));

} else {
var statearr_31172_34731 = state_31164__$1;
(statearr_31172_34731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (15))){
var inst_31141 = (state_31164[(8)]);
var state_31164__$1 = state_31164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31164__$1,(18),to,inst_31141);
} else {
if((state_val_31165 === (21))){
var inst_31154 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
var statearr_31177_34732 = state_31164__$1;
(statearr_31177_34732[(2)] = inst_31154);

(statearr_31177_34732[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (13))){
var inst_31156 = (state_31164[(2)]);
var state_31164__$1 = (function (){var statearr_31178 = state_31164;
(statearr_31178[(9)] = inst_31156);

return statearr_31178;
})();
var statearr_31179_34733 = state_31164__$1;
(statearr_31179_34733[(2)] = null);

(statearr_31179_34733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (6))){
var inst_31127 = (state_31164[(7)]);
var state_31164__$1 = state_31164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31164__$1,(11),inst_31127);
} else {
if((state_val_31165 === (17))){
var inst_31149 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
if(cljs.core.truth_(inst_31149)){
var statearr_31181_34735 = state_31164__$1;
(statearr_31181_34735[(1)] = (19));

} else {
var statearr_31182_34737 = state_31164__$1;
(statearr_31182_34737[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (3))){
var inst_31162 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31164__$1,inst_31162);
} else {
if((state_val_31165 === (12))){
var inst_31137 = (state_31164[(10)]);
var state_31164__$1 = state_31164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31164__$1,(14),inst_31137);
} else {
if((state_val_31165 === (2))){
var state_31164__$1 = state_31164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31164__$1,(4),results);
} else {
if((state_val_31165 === (19))){
var state_31164__$1 = state_31164;
var statearr_31184_34738 = state_31164__$1;
(statearr_31184_34738[(2)] = null);

(statearr_31184_34738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (11))){
var inst_31137 = (state_31164[(2)]);
var state_31164__$1 = (function (){var statearr_31185 = state_31164;
(statearr_31185[(10)] = inst_31137);

return statearr_31185;
})();
var statearr_31186_34739 = state_31164__$1;
(statearr_31186_34739[(2)] = null);

(statearr_31186_34739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (9))){
var state_31164__$1 = state_31164;
var statearr_31191_34740 = state_31164__$1;
(statearr_31191_34740[(2)] = null);

(statearr_31191_34740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (5))){
var state_31164__$1 = state_31164;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31193_34741 = state_31164__$1;
(statearr_31193_34741[(1)] = (8));

} else {
var statearr_31195_34742 = state_31164__$1;
(statearr_31195_34742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (14))){
var inst_31143 = (state_31164[(11)]);
var inst_31141 = (state_31164[(8)]);
var inst_31141__$1 = (state_31164[(2)]);
var inst_31142 = (inst_31141__$1 == null);
var inst_31143__$1 = cljs.core.not(inst_31142);
var state_31164__$1 = (function (){var statearr_31197 = state_31164;
(statearr_31197[(11)] = inst_31143__$1);

(statearr_31197[(8)] = inst_31141__$1);

return statearr_31197;
})();
if(inst_31143__$1){
var statearr_31198_34743 = state_31164__$1;
(statearr_31198_34743[(1)] = (15));

} else {
var statearr_31199_34744 = state_31164__$1;
(statearr_31199_34744[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (16))){
var inst_31143 = (state_31164[(11)]);
var state_31164__$1 = state_31164;
var statearr_31200_34745 = state_31164__$1;
(statearr_31200_34745[(2)] = inst_31143);

(statearr_31200_34745[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (10))){
var inst_31134 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
var statearr_31202_34747 = state_31164__$1;
(statearr_31202_34747[(2)] = inst_31134);

(statearr_31202_34747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (18))){
var inst_31146 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
var statearr_31203_34748 = state_31164__$1;
(statearr_31203_34748[(2)] = inst_31146);

(statearr_31203_34748[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (8))){
var inst_31131 = cljs.core.async.close_BANG_(to);
var state_31164__$1 = state_31164;
var statearr_31204_34749 = state_31164__$1;
(statearr_31204_34749[(2)] = inst_31131);

(statearr_31204_34749[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____0 = (function (){
var statearr_31205 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31205[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__);

(statearr_31205[(1)] = (1));

return statearr_31205;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____1 = (function (state_31164){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_31164);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e31206){var ex__29625__auto__ = e31206;
var statearr_31207_34750 = state_31164;
(statearr_31207_34750[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_31164[(4)]))){
var statearr_31208_34751 = state_31164;
(statearr_31208_34751[(1)] = cljs.core.first((state_31164[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34756 = state_31164;
state_31164 = G__34756;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__ = function(state_31164){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____1.call(this,state_31164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_31214 = f__30326__auto__();
(statearr_31214[(6)] = c__30325__auto__);

return statearr_31214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
}));

return c__30325__auto__;
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
var G__31225 = arguments.length;
switch (G__31225) {
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
var G__31238 = arguments.length;
switch (G__31238) {
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
var G__31258 = arguments.length;
switch (G__31258) {
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
var c__30325__auto___34786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_31299){
var state_val_31300 = (state_31299[(1)]);
if((state_val_31300 === (7))){
var inst_31283 = (state_31299[(2)]);
var state_31299__$1 = state_31299;
var statearr_31306_34788 = state_31299__$1;
(statearr_31306_34788[(2)] = inst_31283);

(statearr_31306_34788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31300 === (1))){
var state_31299__$1 = state_31299;
var statearr_31307_34790 = state_31299__$1;
(statearr_31307_34790[(2)] = null);

(statearr_31307_34790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31300 === (4))){
var inst_31262 = (state_31299[(7)]);
var inst_31262__$1 = (state_31299[(2)]);
var inst_31263 = (inst_31262__$1 == null);
var state_31299__$1 = (function (){var statearr_31311 = state_31299;
(statearr_31311[(7)] = inst_31262__$1);

return statearr_31311;
})();
if(cljs.core.truth_(inst_31263)){
var statearr_31312_34795 = state_31299__$1;
(statearr_31312_34795[(1)] = (5));

} else {
var statearr_31313_34796 = state_31299__$1;
(statearr_31313_34796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31300 === (13))){
var state_31299__$1 = state_31299;
var statearr_31316_34800 = state_31299__$1;
(statearr_31316_34800[(2)] = null);

(statearr_31316_34800[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31300 === (6))){
var inst_31262 = (state_31299[(7)]);
var inst_31269 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31262) : p.call(null,inst_31262));
var state_31299__$1 = state_31299;
if(cljs.core.truth_(inst_31269)){
var statearr_31318_34801 = state_31299__$1;
(statearr_31318_34801[(1)] = (9));

} else {
var statearr_31319_34802 = state_31299__$1;
(statearr_31319_34802[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31300 === (3))){
var inst_31285 = (state_31299[(2)]);
var state_31299__$1 = state_31299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31299__$1,inst_31285);
} else {
if((state_val_31300 === (12))){
var state_31299__$1 = state_31299;
var statearr_31321_34803 = state_31299__$1;
(statearr_31321_34803[(2)] = null);

(statearr_31321_34803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31300 === (2))){
var state_31299__$1 = state_31299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31299__$1,(4),ch);
} else {
if((state_val_31300 === (11))){
var inst_31262 = (state_31299[(7)]);
var inst_31273 = (state_31299[(2)]);
var state_31299__$1 = state_31299;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31299__$1,(8),inst_31273,inst_31262);
} else {
if((state_val_31300 === (9))){
var state_31299__$1 = state_31299;
var statearr_31325_34807 = state_31299__$1;
(statearr_31325_34807[(2)] = tc);

(statearr_31325_34807[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31300 === (5))){
var inst_31266 = cljs.core.async.close_BANG_(tc);
var inst_31267 = cljs.core.async.close_BANG_(fc);
var state_31299__$1 = (function (){var statearr_31326 = state_31299;
(statearr_31326[(8)] = inst_31266);

return statearr_31326;
})();
var statearr_31328_34808 = state_31299__$1;
(statearr_31328_34808[(2)] = inst_31267);

(statearr_31328_34808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31300 === (14))){
var inst_31281 = (state_31299[(2)]);
var state_31299__$1 = state_31299;
var statearr_31329_34809 = state_31299__$1;
(statearr_31329_34809[(2)] = inst_31281);

(statearr_31329_34809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31300 === (10))){
var state_31299__$1 = state_31299;
var statearr_31330_34810 = state_31299__$1;
(statearr_31330_34810[(2)] = fc);

(statearr_31330_34810[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31300 === (8))){
var inst_31275 = (state_31299[(2)]);
var state_31299__$1 = state_31299;
if(cljs.core.truth_(inst_31275)){
var statearr_31331_34811 = state_31299__$1;
(statearr_31331_34811[(1)] = (12));

} else {
var statearr_31332_34812 = state_31299__$1;
(statearr_31332_34812[(1)] = (13));

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
var cljs$core$async$state_machine__29622__auto__ = null;
var cljs$core$async$state_machine__29622__auto____0 = (function (){
var statearr_31338 = [null,null,null,null,null,null,null,null,null];
(statearr_31338[(0)] = cljs$core$async$state_machine__29622__auto__);

(statearr_31338[(1)] = (1));

return statearr_31338;
});
var cljs$core$async$state_machine__29622__auto____1 = (function (state_31299){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_31299);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e31340){var ex__29625__auto__ = e31340;
var statearr_31341_34816 = state_31299;
(statearr_31341_34816[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_31299[(4)]))){
var statearr_31342_34817 = state_31299;
(statearr_31342_34817[(1)] = cljs.core.first((state_31299[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34818 = state_31299;
state_31299 = G__34818;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$state_machine__29622__auto__ = function(state_31299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29622__auto____1.call(this,state_31299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29622__auto____0;
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29622__auto____1;
return cljs$core$async$state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_31343 = f__30326__auto__();
(statearr_31343[(6)] = c__30325__auto___34786);

return statearr_31343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
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
var c__30325__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_31366){
var state_val_31367 = (state_31366[(1)]);
if((state_val_31367 === (7))){
var inst_31362 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31387_34821 = state_31366__$1;
(statearr_31387_34821[(2)] = inst_31362);

(statearr_31387_34821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (1))){
var inst_31344 = init;
var inst_31345 = inst_31344;
var state_31366__$1 = (function (){var statearr_31392 = state_31366;
(statearr_31392[(7)] = inst_31345);

return statearr_31392;
})();
var statearr_31394_34826 = state_31366__$1;
(statearr_31394_34826[(2)] = null);

(statearr_31394_34826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (4))){
var inst_31348 = (state_31366[(8)]);
var inst_31348__$1 = (state_31366[(2)]);
var inst_31349 = (inst_31348__$1 == null);
var state_31366__$1 = (function (){var statearr_31397 = state_31366;
(statearr_31397[(8)] = inst_31348__$1);

return statearr_31397;
})();
if(cljs.core.truth_(inst_31349)){
var statearr_31398_34829 = state_31366__$1;
(statearr_31398_34829[(1)] = (5));

} else {
var statearr_31399_34830 = state_31366__$1;
(statearr_31399_34830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (6))){
var inst_31352 = (state_31366[(9)]);
var inst_31345 = (state_31366[(7)]);
var inst_31348 = (state_31366[(8)]);
var inst_31352__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31345,inst_31348) : f.call(null,inst_31345,inst_31348));
var inst_31353 = cljs.core.reduced_QMARK_(inst_31352__$1);
var state_31366__$1 = (function (){var statearr_31401 = state_31366;
(statearr_31401[(9)] = inst_31352__$1);

return statearr_31401;
})();
if(inst_31353){
var statearr_31402_34832 = state_31366__$1;
(statearr_31402_34832[(1)] = (8));

} else {
var statearr_31403_34833 = state_31366__$1;
(statearr_31403_34833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (3))){
var inst_31364 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31366__$1,inst_31364);
} else {
if((state_val_31367 === (2))){
var state_31366__$1 = state_31366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31366__$1,(4),ch);
} else {
if((state_val_31367 === (9))){
var inst_31352 = (state_31366[(9)]);
var inst_31345 = inst_31352;
var state_31366__$1 = (function (){var statearr_31406 = state_31366;
(statearr_31406[(7)] = inst_31345);

return statearr_31406;
})();
var statearr_31407_34834 = state_31366__$1;
(statearr_31407_34834[(2)] = null);

(statearr_31407_34834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (5))){
var inst_31345 = (state_31366[(7)]);
var state_31366__$1 = state_31366;
var statearr_31412_34835 = state_31366__$1;
(statearr_31412_34835[(2)] = inst_31345);

(statearr_31412_34835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (10))){
var inst_31360 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31413_34838 = state_31366__$1;
(statearr_31413_34838[(2)] = inst_31360);

(statearr_31413_34838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (8))){
var inst_31352 = (state_31366[(9)]);
var inst_31355 = cljs.core.deref(inst_31352);
var state_31366__$1 = state_31366;
var statearr_31414_34841 = state_31366__$1;
(statearr_31414_34841[(2)] = inst_31355);

(statearr_31414_34841[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29622__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29622__auto____0 = (function (){
var statearr_31420 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31420[(0)] = cljs$core$async$reduce_$_state_machine__29622__auto__);

(statearr_31420[(1)] = (1));

return statearr_31420;
});
var cljs$core$async$reduce_$_state_machine__29622__auto____1 = (function (state_31366){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_31366);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e31427){var ex__29625__auto__ = e31427;
var statearr_31428_34847 = state_31366;
(statearr_31428_34847[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_31366[(4)]))){
var statearr_31430_34849 = state_31366;
(statearr_31430_34849[(1)] = cljs.core.first((state_31366[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34850 = state_31366;
state_31366 = G__34850;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29622__auto__ = function(state_31366){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29622__auto____1.call(this,state_31366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29622__auto____0;
cljs$core$async$reduce_$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29622__auto____1;
return cljs$core$async$reduce_$_state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_31431 = f__30326__auto__();
(statearr_31431[(6)] = c__30325__auto__);

return statearr_31431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
}));

return c__30325__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30325__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_31451){
var state_val_31452 = (state_31451[(1)]);
if((state_val_31452 === (1))){
var inst_31445 = cljs.core.async.reduce(f__$1,init,ch);
var state_31451__$1 = state_31451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31451__$1,(2),inst_31445);
} else {
if((state_val_31452 === (2))){
var inst_31447 = (state_31451[(2)]);
var inst_31448 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31447) : f__$1.call(null,inst_31447));
var state_31451__$1 = state_31451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31451__$1,inst_31448);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29622__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29622__auto____0 = (function (){
var statearr_31464 = [null,null,null,null,null,null,null];
(statearr_31464[(0)] = cljs$core$async$transduce_$_state_machine__29622__auto__);

(statearr_31464[(1)] = (1));

return statearr_31464;
});
var cljs$core$async$transduce_$_state_machine__29622__auto____1 = (function (state_31451){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_31451);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e31469){var ex__29625__auto__ = e31469;
var statearr_31472_34861 = state_31451;
(statearr_31472_34861[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_31451[(4)]))){
var statearr_31477_34862 = state_31451;
(statearr_31477_34862[(1)] = cljs.core.first((state_31451[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34864 = state_31451;
state_31451 = G__34864;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29622__auto__ = function(state_31451){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29622__auto____1.call(this,state_31451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29622__auto____0;
cljs$core$async$transduce_$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29622__auto____1;
return cljs$core$async$transduce_$_state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_31478 = f__30326__auto__();
(statearr_31478[(6)] = c__30325__auto__);

return statearr_31478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
}));

return c__30325__auto__;
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
var G__31487 = arguments.length;
switch (G__31487) {
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
var c__30325__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_31522){
var state_val_31523 = (state_31522[(1)]);
if((state_val_31523 === (7))){
var inst_31502 = (state_31522[(2)]);
var state_31522__$1 = state_31522;
var statearr_31526_34870 = state_31522__$1;
(statearr_31526_34870[(2)] = inst_31502);

(statearr_31526_34870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (1))){
var inst_31490 = cljs.core.seq(coll);
var inst_31491 = inst_31490;
var state_31522__$1 = (function (){var statearr_31527 = state_31522;
(statearr_31527[(7)] = inst_31491);

return statearr_31527;
})();
var statearr_31528_34871 = state_31522__$1;
(statearr_31528_34871[(2)] = null);

(statearr_31528_34871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (4))){
var inst_31491 = (state_31522[(7)]);
var inst_31500 = cljs.core.first(inst_31491);
var state_31522__$1 = state_31522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31522__$1,(7),ch,inst_31500);
} else {
if((state_val_31523 === (13))){
var inst_31514 = (state_31522[(2)]);
var state_31522__$1 = state_31522;
var statearr_31529_34872 = state_31522__$1;
(statearr_31529_34872[(2)] = inst_31514);

(statearr_31529_34872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (6))){
var inst_31505 = (state_31522[(2)]);
var state_31522__$1 = state_31522;
if(cljs.core.truth_(inst_31505)){
var statearr_31532_34873 = state_31522__$1;
(statearr_31532_34873[(1)] = (8));

} else {
var statearr_31533_34874 = state_31522__$1;
(statearr_31533_34874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (3))){
var inst_31518 = (state_31522[(2)]);
var state_31522__$1 = state_31522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31522__$1,inst_31518);
} else {
if((state_val_31523 === (12))){
var state_31522__$1 = state_31522;
var statearr_31534_34875 = state_31522__$1;
(statearr_31534_34875[(2)] = null);

(statearr_31534_34875[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (2))){
var inst_31491 = (state_31522[(7)]);
var state_31522__$1 = state_31522;
if(cljs.core.truth_(inst_31491)){
var statearr_31535_34876 = state_31522__$1;
(statearr_31535_34876[(1)] = (4));

} else {
var statearr_31537_34877 = state_31522__$1;
(statearr_31537_34877[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (11))){
var inst_31511 = cljs.core.async.close_BANG_(ch);
var state_31522__$1 = state_31522;
var statearr_31544_34878 = state_31522__$1;
(statearr_31544_34878[(2)] = inst_31511);

(statearr_31544_34878[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (9))){
var state_31522__$1 = state_31522;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31545_34879 = state_31522__$1;
(statearr_31545_34879[(1)] = (11));

} else {
var statearr_31547_34880 = state_31522__$1;
(statearr_31547_34880[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (5))){
var inst_31491 = (state_31522[(7)]);
var state_31522__$1 = state_31522;
var statearr_31548_34881 = state_31522__$1;
(statearr_31548_34881[(2)] = inst_31491);

(statearr_31548_34881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (10))){
var inst_31516 = (state_31522[(2)]);
var state_31522__$1 = state_31522;
var statearr_31549_34882 = state_31522__$1;
(statearr_31549_34882[(2)] = inst_31516);

(statearr_31549_34882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (8))){
var inst_31491 = (state_31522[(7)]);
var inst_31507 = cljs.core.next(inst_31491);
var inst_31491__$1 = inst_31507;
var state_31522__$1 = (function (){var statearr_31550 = state_31522;
(statearr_31550[(7)] = inst_31491__$1);

return statearr_31550;
})();
var statearr_31551_34883 = state_31522__$1;
(statearr_31551_34883[(2)] = null);

(statearr_31551_34883[(1)] = (2));


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
var cljs$core$async$state_machine__29622__auto__ = null;
var cljs$core$async$state_machine__29622__auto____0 = (function (){
var statearr_31552 = [null,null,null,null,null,null,null,null];
(statearr_31552[(0)] = cljs$core$async$state_machine__29622__auto__);

(statearr_31552[(1)] = (1));

return statearr_31552;
});
var cljs$core$async$state_machine__29622__auto____1 = (function (state_31522){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_31522);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e31553){var ex__29625__auto__ = e31553;
var statearr_31554_34886 = state_31522;
(statearr_31554_34886[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_31522[(4)]))){
var statearr_31555_34887 = state_31522;
(statearr_31555_34887[(1)] = cljs.core.first((state_31522[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34888 = state_31522;
state_31522 = G__34888;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$state_machine__29622__auto__ = function(state_31522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29622__auto____1.call(this,state_31522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29622__auto____0;
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29622__auto____1;
return cljs$core$async$state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_31562 = f__30326__auto__();
(statearr_31562[(6)] = c__30325__auto__);

return statearr_31562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
}));

return c__30325__auto__;
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
var G__31566 = arguments.length;
switch (G__31566) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34890 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34890(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34895 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34895(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34896 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34896(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34899 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34899(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31604 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31604 = (function (ch,cs,meta31605){
this.ch = ch;
this.cs = cs;
this.meta31605 = meta31605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31606,meta31605__$1){
var self__ = this;
var _31606__$1 = this;
return (new cljs.core.async.t_cljs$core$async31604(self__.ch,self__.cs,meta31605__$1));
}));

(cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31606){
var self__ = this;
var _31606__$1 = this;
return self__.meta31605;
}));

(cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31604.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31605","meta31605",-1331199561,null)], null);
}));

(cljs.core.async.t_cljs$core$async31604.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31604");

(cljs.core.async.t_cljs$core$async31604.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31604");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31604.
 */
cljs.core.async.__GT_t_cljs$core$async31604 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31604(ch__$1,cs__$1,meta31605){
return (new cljs.core.async.t_cljs$core$async31604(ch__$1,cs__$1,meta31605));
});

}

return (new cljs.core.async.t_cljs$core$async31604(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30325__auto___34904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_31787){
var state_val_31788 = (state_31787[(1)]);
if((state_val_31788 === (7))){
var inst_31776 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31789_34906 = state_31787__$1;
(statearr_31789_34906[(2)] = inst_31776);

(statearr_31789_34906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (20))){
var inst_31666 = (state_31787[(7)]);
var inst_31680 = cljs.core.first(inst_31666);
var inst_31681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31680,(0),null);
var inst_31682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31680,(1),null);
var state_31787__$1 = (function (){var statearr_31791 = state_31787;
(statearr_31791[(8)] = inst_31681);

return statearr_31791;
})();
if(cljs.core.truth_(inst_31682)){
var statearr_31794_34908 = state_31787__$1;
(statearr_31794_34908[(1)] = (22));

} else {
var statearr_31796_34910 = state_31787__$1;
(statearr_31796_34910[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (27))){
var inst_31633 = (state_31787[(9)]);
var inst_31713 = (state_31787[(10)]);
var inst_31718 = (state_31787[(11)]);
var inst_31711 = (state_31787[(12)]);
var inst_31718__$1 = cljs.core._nth(inst_31711,inst_31713);
var inst_31719 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31718__$1,inst_31633,done);
var state_31787__$1 = (function (){var statearr_31805 = state_31787;
(statearr_31805[(11)] = inst_31718__$1);

return statearr_31805;
})();
if(cljs.core.truth_(inst_31719)){
var statearr_31808_34911 = state_31787__$1;
(statearr_31808_34911[(1)] = (30));

} else {
var statearr_31810_34912 = state_31787__$1;
(statearr_31810_34912[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (1))){
var state_31787__$1 = state_31787;
var statearr_31811_34917 = state_31787__$1;
(statearr_31811_34917[(2)] = null);

(statearr_31811_34917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (24))){
var inst_31666 = (state_31787[(7)]);
var inst_31687 = (state_31787[(2)]);
var inst_31688 = cljs.core.next(inst_31666);
var inst_31644 = inst_31688;
var inst_31645 = null;
var inst_31646 = (0);
var inst_31647 = (0);
var state_31787__$1 = (function (){var statearr_31817 = state_31787;
(statearr_31817[(13)] = inst_31645);

(statearr_31817[(14)] = inst_31687);

(statearr_31817[(15)] = inst_31644);

(statearr_31817[(16)] = inst_31647);

(statearr_31817[(17)] = inst_31646);

return statearr_31817;
})();
var statearr_31820_34926 = state_31787__$1;
(statearr_31820_34926[(2)] = null);

(statearr_31820_34926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (39))){
var state_31787__$1 = state_31787;
var statearr_31826_34927 = state_31787__$1;
(statearr_31826_34927[(2)] = null);

(statearr_31826_34927[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (4))){
var inst_31633 = (state_31787[(9)]);
var inst_31633__$1 = (state_31787[(2)]);
var inst_31636 = (inst_31633__$1 == null);
var state_31787__$1 = (function (){var statearr_31828 = state_31787;
(statearr_31828[(9)] = inst_31633__$1);

return statearr_31828;
})();
if(cljs.core.truth_(inst_31636)){
var statearr_31831_34929 = state_31787__$1;
(statearr_31831_34929[(1)] = (5));

} else {
var statearr_31832_34930 = state_31787__$1;
(statearr_31832_34930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (15))){
var inst_31645 = (state_31787[(13)]);
var inst_31644 = (state_31787[(15)]);
var inst_31647 = (state_31787[(16)]);
var inst_31646 = (state_31787[(17)]);
var inst_31662 = (state_31787[(2)]);
var inst_31663 = (inst_31647 + (1));
var tmp31822 = inst_31645;
var tmp31823 = inst_31644;
var tmp31824 = inst_31646;
var inst_31644__$1 = tmp31823;
var inst_31645__$1 = tmp31822;
var inst_31646__$1 = tmp31824;
var inst_31647__$1 = inst_31663;
var state_31787__$1 = (function (){var statearr_31835 = state_31787;
(statearr_31835[(13)] = inst_31645__$1);

(statearr_31835[(15)] = inst_31644__$1);

(statearr_31835[(16)] = inst_31647__$1);

(statearr_31835[(18)] = inst_31662);

(statearr_31835[(17)] = inst_31646__$1);

return statearr_31835;
})();
var statearr_31838_34931 = state_31787__$1;
(statearr_31838_34931[(2)] = null);

(statearr_31838_34931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (21))){
var inst_31691 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31844_34933 = state_31787__$1;
(statearr_31844_34933[(2)] = inst_31691);

(statearr_31844_34933[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (31))){
var inst_31718 = (state_31787[(11)]);
var inst_31722 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31718);
var state_31787__$1 = state_31787;
var statearr_31846_34934 = state_31787__$1;
(statearr_31846_34934[(2)] = inst_31722);

(statearr_31846_34934[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (32))){
var inst_31710 = (state_31787[(19)]);
var inst_31713 = (state_31787[(10)]);
var inst_31712 = (state_31787[(20)]);
var inst_31711 = (state_31787[(12)]);
var inst_31724 = (state_31787[(2)]);
var inst_31725 = (inst_31713 + (1));
var tmp31841 = inst_31710;
var tmp31842 = inst_31712;
var tmp31843 = inst_31711;
var inst_31710__$1 = tmp31841;
var inst_31711__$1 = tmp31843;
var inst_31712__$1 = tmp31842;
var inst_31713__$1 = inst_31725;
var state_31787__$1 = (function (){var statearr_31850 = state_31787;
(statearr_31850[(19)] = inst_31710__$1);

(statearr_31850[(10)] = inst_31713__$1);

(statearr_31850[(21)] = inst_31724);

(statearr_31850[(20)] = inst_31712__$1);

(statearr_31850[(12)] = inst_31711__$1);

return statearr_31850;
})();
var statearr_31855_34941 = state_31787__$1;
(statearr_31855_34941[(2)] = null);

(statearr_31855_34941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (40))){
var inst_31740 = (state_31787[(22)]);
var inst_31744 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31740);
var state_31787__$1 = state_31787;
var statearr_31857_34942 = state_31787__$1;
(statearr_31857_34942[(2)] = inst_31744);

(statearr_31857_34942[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (33))){
var inst_31730 = (state_31787[(23)]);
var inst_31733 = cljs.core.chunked_seq_QMARK_(inst_31730);
var state_31787__$1 = state_31787;
if(inst_31733){
var statearr_31870_34946 = state_31787__$1;
(statearr_31870_34946[(1)] = (36));

} else {
var statearr_31871_34947 = state_31787__$1;
(statearr_31871_34947[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (13))){
var inst_31656 = (state_31787[(24)]);
var inst_31659 = cljs.core.async.close_BANG_(inst_31656);
var state_31787__$1 = state_31787;
var statearr_31873_34949 = state_31787__$1;
(statearr_31873_34949[(2)] = inst_31659);

(statearr_31873_34949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (22))){
var inst_31681 = (state_31787[(8)]);
var inst_31684 = cljs.core.async.close_BANG_(inst_31681);
var state_31787__$1 = state_31787;
var statearr_31882_34954 = state_31787__$1;
(statearr_31882_34954[(2)] = inst_31684);

(statearr_31882_34954[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (36))){
var inst_31730 = (state_31787[(23)]);
var inst_31735 = cljs.core.chunk_first(inst_31730);
var inst_31736 = cljs.core.chunk_rest(inst_31730);
var inst_31737 = cljs.core.count(inst_31735);
var inst_31710 = inst_31736;
var inst_31711 = inst_31735;
var inst_31712 = inst_31737;
var inst_31713 = (0);
var state_31787__$1 = (function (){var statearr_31883 = state_31787;
(statearr_31883[(19)] = inst_31710);

(statearr_31883[(10)] = inst_31713);

(statearr_31883[(20)] = inst_31712);

(statearr_31883[(12)] = inst_31711);

return statearr_31883;
})();
var statearr_31885_34957 = state_31787__$1;
(statearr_31885_34957[(2)] = null);

(statearr_31885_34957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (41))){
var inst_31730 = (state_31787[(23)]);
var inst_31746 = (state_31787[(2)]);
var inst_31747 = cljs.core.next(inst_31730);
var inst_31710 = inst_31747;
var inst_31711 = null;
var inst_31712 = (0);
var inst_31713 = (0);
var state_31787__$1 = (function (){var statearr_31888 = state_31787;
(statearr_31888[(19)] = inst_31710);

(statearr_31888[(10)] = inst_31713);

(statearr_31888[(20)] = inst_31712);

(statearr_31888[(25)] = inst_31746);

(statearr_31888[(12)] = inst_31711);

return statearr_31888;
})();
var statearr_31893_34961 = state_31787__$1;
(statearr_31893_34961[(2)] = null);

(statearr_31893_34961[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (43))){
var state_31787__$1 = state_31787;
var statearr_31895_34962 = state_31787__$1;
(statearr_31895_34962[(2)] = null);

(statearr_31895_34962[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (29))){
var inst_31757 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31897_34963 = state_31787__$1;
(statearr_31897_34963[(2)] = inst_31757);

(statearr_31897_34963[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (44))){
var inst_31773 = (state_31787[(2)]);
var state_31787__$1 = (function (){var statearr_31903 = state_31787;
(statearr_31903[(26)] = inst_31773);

return statearr_31903;
})();
var statearr_31904_34964 = state_31787__$1;
(statearr_31904_34964[(2)] = null);

(statearr_31904_34964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (6))){
var inst_31701 = (state_31787[(27)]);
var inst_31700 = cljs.core.deref(cs);
var inst_31701__$1 = cljs.core.keys(inst_31700);
var inst_31703 = cljs.core.count(inst_31701__$1);
var inst_31704 = cljs.core.reset_BANG_(dctr,inst_31703);
var inst_31709 = cljs.core.seq(inst_31701__$1);
var inst_31710 = inst_31709;
var inst_31711 = null;
var inst_31712 = (0);
var inst_31713 = (0);
var state_31787__$1 = (function (){var statearr_31906 = state_31787;
(statearr_31906[(19)] = inst_31710);

(statearr_31906[(28)] = inst_31704);

(statearr_31906[(10)] = inst_31713);

(statearr_31906[(20)] = inst_31712);

(statearr_31906[(12)] = inst_31711);

(statearr_31906[(27)] = inst_31701__$1);

return statearr_31906;
})();
var statearr_31910_34972 = state_31787__$1;
(statearr_31910_34972[(2)] = null);

(statearr_31910_34972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (28))){
var inst_31710 = (state_31787[(19)]);
var inst_31730 = (state_31787[(23)]);
var inst_31730__$1 = cljs.core.seq(inst_31710);
var state_31787__$1 = (function (){var statearr_31912 = state_31787;
(statearr_31912[(23)] = inst_31730__$1);

return statearr_31912;
})();
if(inst_31730__$1){
var statearr_31914_34977 = state_31787__$1;
(statearr_31914_34977[(1)] = (33));

} else {
var statearr_31915_34978 = state_31787__$1;
(statearr_31915_34978[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (25))){
var inst_31713 = (state_31787[(10)]);
var inst_31712 = (state_31787[(20)]);
var inst_31715 = (inst_31713 < inst_31712);
var inst_31716 = inst_31715;
var state_31787__$1 = state_31787;
if(cljs.core.truth_(inst_31716)){
var statearr_31920_34982 = state_31787__$1;
(statearr_31920_34982[(1)] = (27));

} else {
var statearr_31923_34983 = state_31787__$1;
(statearr_31923_34983[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (34))){
var state_31787__$1 = state_31787;
var statearr_31925_34990 = state_31787__$1;
(statearr_31925_34990[(2)] = null);

(statearr_31925_34990[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (17))){
var state_31787__$1 = state_31787;
var statearr_31929_34991 = state_31787__$1;
(statearr_31929_34991[(2)] = null);

(statearr_31929_34991[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (3))){
var inst_31778 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31787__$1,inst_31778);
} else {
if((state_val_31788 === (12))){
var inst_31696 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31933_34996 = state_31787__$1;
(statearr_31933_34996[(2)] = inst_31696);

(statearr_31933_34996[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (2))){
var state_31787__$1 = state_31787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31787__$1,(4),ch);
} else {
if((state_val_31788 === (23))){
var state_31787__$1 = state_31787;
var statearr_31940_34997 = state_31787__$1;
(statearr_31940_34997[(2)] = null);

(statearr_31940_34997[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (35))){
var inst_31754 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31941_34998 = state_31787__$1;
(statearr_31941_34998[(2)] = inst_31754);

(statearr_31941_34998[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (19))){
var inst_31666 = (state_31787[(7)]);
var inst_31672 = cljs.core.chunk_first(inst_31666);
var inst_31673 = cljs.core.chunk_rest(inst_31666);
var inst_31674 = cljs.core.count(inst_31672);
var inst_31644 = inst_31673;
var inst_31645 = inst_31672;
var inst_31646 = inst_31674;
var inst_31647 = (0);
var state_31787__$1 = (function (){var statearr_31943 = state_31787;
(statearr_31943[(13)] = inst_31645);

(statearr_31943[(15)] = inst_31644);

(statearr_31943[(16)] = inst_31647);

(statearr_31943[(17)] = inst_31646);

return statearr_31943;
})();
var statearr_31951_34999 = state_31787__$1;
(statearr_31951_34999[(2)] = null);

(statearr_31951_34999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (11))){
var inst_31644 = (state_31787[(15)]);
var inst_31666 = (state_31787[(7)]);
var inst_31666__$1 = cljs.core.seq(inst_31644);
var state_31787__$1 = (function (){var statearr_31958 = state_31787;
(statearr_31958[(7)] = inst_31666__$1);

return statearr_31958;
})();
if(inst_31666__$1){
var statearr_31963_35002 = state_31787__$1;
(statearr_31963_35002[(1)] = (16));

} else {
var statearr_31964_35003 = state_31787__$1;
(statearr_31964_35003[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (9))){
var inst_31698 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31968_35004 = state_31787__$1;
(statearr_31968_35004[(2)] = inst_31698);

(statearr_31968_35004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (5))){
var inst_31642 = cljs.core.deref(cs);
var inst_31643 = cljs.core.seq(inst_31642);
var inst_31644 = inst_31643;
var inst_31645 = null;
var inst_31646 = (0);
var inst_31647 = (0);
var state_31787__$1 = (function (){var statearr_31970 = state_31787;
(statearr_31970[(13)] = inst_31645);

(statearr_31970[(15)] = inst_31644);

(statearr_31970[(16)] = inst_31647);

(statearr_31970[(17)] = inst_31646);

return statearr_31970;
})();
var statearr_31971_35005 = state_31787__$1;
(statearr_31971_35005[(2)] = null);

(statearr_31971_35005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (14))){
var state_31787__$1 = state_31787;
var statearr_31974_35006 = state_31787__$1;
(statearr_31974_35006[(2)] = null);

(statearr_31974_35006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (45))){
var inst_31768 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31985_35007 = state_31787__$1;
(statearr_31985_35007[(2)] = inst_31768);

(statearr_31985_35007[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (26))){
var inst_31701 = (state_31787[(27)]);
var inst_31759 = (state_31787[(2)]);
var inst_31760 = cljs.core.seq(inst_31701);
var state_31787__$1 = (function (){var statearr_31987 = state_31787;
(statearr_31987[(29)] = inst_31759);

return statearr_31987;
})();
if(inst_31760){
var statearr_31988_35009 = state_31787__$1;
(statearr_31988_35009[(1)] = (42));

} else {
var statearr_31989_35010 = state_31787__$1;
(statearr_31989_35010[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (16))){
var inst_31666 = (state_31787[(7)]);
var inst_31669 = cljs.core.chunked_seq_QMARK_(inst_31666);
var state_31787__$1 = state_31787;
if(inst_31669){
var statearr_31993_35011 = state_31787__$1;
(statearr_31993_35011[(1)] = (19));

} else {
var statearr_31994_35012 = state_31787__$1;
(statearr_31994_35012[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (38))){
var inst_31750 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31999_35013 = state_31787__$1;
(statearr_31999_35013[(2)] = inst_31750);

(statearr_31999_35013[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (30))){
var state_31787__$1 = state_31787;
var statearr_32001_35014 = state_31787__$1;
(statearr_32001_35014[(2)] = null);

(statearr_32001_35014[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (10))){
var inst_31645 = (state_31787[(13)]);
var inst_31647 = (state_31787[(16)]);
var inst_31655 = cljs.core._nth(inst_31645,inst_31647);
var inst_31656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31655,(0),null);
var inst_31657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31655,(1),null);
var state_31787__$1 = (function (){var statearr_32004 = state_31787;
(statearr_32004[(24)] = inst_31656);

return statearr_32004;
})();
if(cljs.core.truth_(inst_31657)){
var statearr_32005_35019 = state_31787__$1;
(statearr_32005_35019[(1)] = (13));

} else {
var statearr_32007_35020 = state_31787__$1;
(statearr_32007_35020[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (18))){
var inst_31694 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_32008_35021 = state_31787__$1;
(statearr_32008_35021[(2)] = inst_31694);

(statearr_32008_35021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (42))){
var state_31787__$1 = state_31787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31787__$1,(45),dchan);
} else {
if((state_val_31788 === (37))){
var inst_31633 = (state_31787[(9)]);
var inst_31730 = (state_31787[(23)]);
var inst_31740 = (state_31787[(22)]);
var inst_31740__$1 = cljs.core.first(inst_31730);
var inst_31741 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31740__$1,inst_31633,done);
var state_31787__$1 = (function (){var statearr_32012 = state_31787;
(statearr_32012[(22)] = inst_31740__$1);

return statearr_32012;
})();
if(cljs.core.truth_(inst_31741)){
var statearr_32015_35022 = state_31787__$1;
(statearr_32015_35022[(1)] = (39));

} else {
var statearr_32018_35023 = state_31787__$1;
(statearr_32018_35023[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (8))){
var inst_31647 = (state_31787[(16)]);
var inst_31646 = (state_31787[(17)]);
var inst_31649 = (inst_31647 < inst_31646);
var inst_31650 = inst_31649;
var state_31787__$1 = state_31787;
if(cljs.core.truth_(inst_31650)){
var statearr_32020_35031 = state_31787__$1;
(statearr_32020_35031[(1)] = (10));

} else {
var statearr_32021_35032 = state_31787__$1;
(statearr_32021_35032[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29622__auto__ = null;
var cljs$core$async$mult_$_state_machine__29622__auto____0 = (function (){
var statearr_32037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32037[(0)] = cljs$core$async$mult_$_state_machine__29622__auto__);

(statearr_32037[(1)] = (1));

return statearr_32037;
});
var cljs$core$async$mult_$_state_machine__29622__auto____1 = (function (state_31787){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_31787);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e32046){var ex__29625__auto__ = e32046;
var statearr_32048_35033 = state_31787;
(statearr_32048_35033[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_31787[(4)]))){
var statearr_32050_35035 = state_31787;
(statearr_32050_35035[(1)] = cljs.core.first((state_31787[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35036 = state_31787;
state_31787 = G__35036;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29622__auto__ = function(state_31787){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29622__auto____1.call(this,state_31787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29622__auto____0;
cljs$core$async$mult_$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29622__auto____1;
return cljs$core$async$mult_$_state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_32060 = f__30326__auto__();
(statearr_32060[(6)] = c__30325__auto___34904);

return statearr_32060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
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
var G__32066 = arguments.length;
switch (G__32066) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35044 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35044(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35048 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35048(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35049 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35049(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35053 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35053(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35063 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35063(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35068 = arguments.length;
var i__5770__auto___35069 = (0);
while(true){
if((i__5770__auto___35069 < len__5769__auto___35068)){
args__5775__auto__.push((arguments[i__5770__auto___35069]));

var G__35070 = (i__5770__auto___35069 + (1));
i__5770__auto___35069 = G__35070;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32168){
var map__32169 = p__32168;
var map__32169__$1 = cljs.core.__destructure_map(map__32169);
var opts = map__32169__$1;
var statearr_32170_35087 = state;
(statearr_32170_35087[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32174_35088 = state;
(statearr_32174_35088[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_32178_35089 = state;
(statearr_32178_35089[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32158){
var G__32159 = cljs.core.first(seq32158);
var seq32158__$1 = cljs.core.next(seq32158);
var G__32160 = cljs.core.first(seq32158__$1);
var seq32158__$2 = cljs.core.next(seq32158__$1);
var G__32161 = cljs.core.first(seq32158__$2);
var seq32158__$3 = cljs.core.next(seq32158__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32159,G__32160,G__32161,seq32158__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32201 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32201 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32202){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32202 = meta32202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32203,meta32202__$1){
var self__ = this;
var _32203__$1 = this;
return (new cljs.core.async.t_cljs$core$async32201(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32202__$1));
}));

(cljs.core.async.t_cljs$core$async32201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32203){
var self__ = this;
var _32203__$1 = this;
return self__.meta32202;
}));

(cljs.core.async.t_cljs$core$async32201.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32201.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32201.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32201.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32201.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32201.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32201.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32201.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32202","meta32202",571478245,null)], null);
}));

(cljs.core.async.t_cljs$core$async32201.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32201");

(cljs.core.async.t_cljs$core$async32201.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32201");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32201.
 */
cljs.core.async.__GT_t_cljs$core$async32201 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32201(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32202){
return (new cljs.core.async.t_cljs$core$async32201(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32202));
});

}

return (new cljs.core.async.t_cljs$core$async32201(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30325__auto___35152 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_32318){
var state_val_32319 = (state_32318[(1)]);
if((state_val_32319 === (7))){
var inst_32269 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
if(cljs.core.truth_(inst_32269)){
var statearr_32323_35158 = state_32318__$1;
(statearr_32323_35158[(1)] = (8));

} else {
var statearr_32324_35159 = state_32318__$1;
(statearr_32324_35159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (20))){
var inst_32262 = (state_32318[(7)]);
var state_32318__$1 = state_32318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32318__$1,(23),out,inst_32262);
} else {
if((state_val_32319 === (1))){
var inst_32244 = calc_state();
var inst_32245 = cljs.core.__destructure_map(inst_32244);
var inst_32246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32245,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32245,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32245,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32250 = inst_32244;
var state_32318__$1 = (function (){var statearr_32329 = state_32318;
(statearr_32329[(8)] = inst_32248);

(statearr_32329[(9)] = inst_32247);

(statearr_32329[(10)] = inst_32246);

(statearr_32329[(11)] = inst_32250);

return statearr_32329;
})();
var statearr_32331_35165 = state_32318__$1;
(statearr_32331_35165[(2)] = null);

(statearr_32331_35165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (24))){
var inst_32253 = (state_32318[(12)]);
var inst_32250 = inst_32253;
var state_32318__$1 = (function (){var statearr_32335 = state_32318;
(statearr_32335[(11)] = inst_32250);

return statearr_32335;
})();
var statearr_32336_35172 = state_32318__$1;
(statearr_32336_35172[(2)] = null);

(statearr_32336_35172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (4))){
var inst_32262 = (state_32318[(7)]);
var inst_32264 = (state_32318[(13)]);
var inst_32261 = (state_32318[(2)]);
var inst_32262__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32261,(0),null);
var inst_32263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32261,(1),null);
var inst_32264__$1 = (inst_32262__$1 == null);
var state_32318__$1 = (function (){var statearr_32342 = state_32318;
(statearr_32342[(7)] = inst_32262__$1);

(statearr_32342[(14)] = inst_32263);

(statearr_32342[(13)] = inst_32264__$1);

return statearr_32342;
})();
if(cljs.core.truth_(inst_32264__$1)){
var statearr_32344_35183 = state_32318__$1;
(statearr_32344_35183[(1)] = (5));

} else {
var statearr_32345_35184 = state_32318__$1;
(statearr_32345_35184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (15))){
var inst_32254 = (state_32318[(15)]);
var inst_32288 = (state_32318[(16)]);
var inst_32288__$1 = cljs.core.empty_QMARK_(inst_32254);
var state_32318__$1 = (function (){var statearr_32346 = state_32318;
(statearr_32346[(16)] = inst_32288__$1);

return statearr_32346;
})();
if(inst_32288__$1){
var statearr_32347_35185 = state_32318__$1;
(statearr_32347_35185[(1)] = (17));

} else {
var statearr_32349_35189 = state_32318__$1;
(statearr_32349_35189[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (21))){
var inst_32253 = (state_32318[(12)]);
var inst_32250 = inst_32253;
var state_32318__$1 = (function (){var statearr_32354 = state_32318;
(statearr_32354[(11)] = inst_32250);

return statearr_32354;
})();
var statearr_32355_35194 = state_32318__$1;
(statearr_32355_35194[(2)] = null);

(statearr_32355_35194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (13))){
var inst_32277 = (state_32318[(2)]);
var inst_32278 = calc_state();
var inst_32250 = inst_32278;
var state_32318__$1 = (function (){var statearr_32364 = state_32318;
(statearr_32364[(17)] = inst_32277);

(statearr_32364[(11)] = inst_32250);

return statearr_32364;
})();
var statearr_32369_35200 = state_32318__$1;
(statearr_32369_35200[(2)] = null);

(statearr_32369_35200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (22))){
var inst_32311 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
var statearr_32374_35201 = state_32318__$1;
(statearr_32374_35201[(2)] = inst_32311);

(statearr_32374_35201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (6))){
var inst_32263 = (state_32318[(14)]);
var inst_32267 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32263,change);
var state_32318__$1 = state_32318;
var statearr_32379_35202 = state_32318__$1;
(statearr_32379_35202[(2)] = inst_32267);

(statearr_32379_35202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (25))){
var state_32318__$1 = state_32318;
var statearr_32383_35207 = state_32318__$1;
(statearr_32383_35207[(2)] = null);

(statearr_32383_35207[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (17))){
var inst_32255 = (state_32318[(18)]);
var inst_32263 = (state_32318[(14)]);
var inst_32290 = (inst_32255.cljs$core$IFn$_invoke$arity$1 ? inst_32255.cljs$core$IFn$_invoke$arity$1(inst_32263) : inst_32255.call(null,inst_32263));
var inst_32291 = cljs.core.not(inst_32290);
var state_32318__$1 = state_32318;
var statearr_32389_35208 = state_32318__$1;
(statearr_32389_35208[(2)] = inst_32291);

(statearr_32389_35208[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (3))){
var inst_32315 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32318__$1,inst_32315);
} else {
if((state_val_32319 === (12))){
var state_32318__$1 = state_32318;
var statearr_32394_35210 = state_32318__$1;
(statearr_32394_35210[(2)] = null);

(statearr_32394_35210[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (2))){
var inst_32253 = (state_32318[(12)]);
var inst_32250 = (state_32318[(11)]);
var inst_32253__$1 = cljs.core.__destructure_map(inst_32250);
var inst_32254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32253__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32253__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32253__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32318__$1 = (function (){var statearr_32403 = state_32318;
(statearr_32403[(12)] = inst_32253__$1);

(statearr_32403[(18)] = inst_32255);

(statearr_32403[(15)] = inst_32254);

return statearr_32403;
})();
return cljs.core.async.ioc_alts_BANG_(state_32318__$1,(4),inst_32256);
} else {
if((state_val_32319 === (23))){
var inst_32302 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
if(cljs.core.truth_(inst_32302)){
var statearr_32408_35215 = state_32318__$1;
(statearr_32408_35215[(1)] = (24));

} else {
var statearr_32409_35216 = state_32318__$1;
(statearr_32409_35216[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (19))){
var inst_32294 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
var statearr_32413_35217 = state_32318__$1;
(statearr_32413_35217[(2)] = inst_32294);

(statearr_32413_35217[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (11))){
var inst_32263 = (state_32318[(14)]);
var inst_32274 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32263);
var state_32318__$1 = state_32318;
var statearr_32418_35218 = state_32318__$1;
(statearr_32418_35218[(2)] = inst_32274);

(statearr_32418_35218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (9))){
var inst_32281 = (state_32318[(19)]);
var inst_32263 = (state_32318[(14)]);
var inst_32254 = (state_32318[(15)]);
var inst_32281__$1 = (inst_32254.cljs$core$IFn$_invoke$arity$1 ? inst_32254.cljs$core$IFn$_invoke$arity$1(inst_32263) : inst_32254.call(null,inst_32263));
var state_32318__$1 = (function (){var statearr_32419 = state_32318;
(statearr_32419[(19)] = inst_32281__$1);

return statearr_32419;
})();
if(cljs.core.truth_(inst_32281__$1)){
var statearr_32420_35221 = state_32318__$1;
(statearr_32420_35221[(1)] = (14));

} else {
var statearr_32421_35222 = state_32318__$1;
(statearr_32421_35222[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (5))){
var inst_32264 = (state_32318[(13)]);
var state_32318__$1 = state_32318;
var statearr_32424_35223 = state_32318__$1;
(statearr_32424_35223[(2)] = inst_32264);

(statearr_32424_35223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (14))){
var inst_32281 = (state_32318[(19)]);
var state_32318__$1 = state_32318;
var statearr_32430_35224 = state_32318__$1;
(statearr_32430_35224[(2)] = inst_32281);

(statearr_32430_35224[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (26))){
var inst_32307 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
var statearr_32435_35226 = state_32318__$1;
(statearr_32435_35226[(2)] = inst_32307);

(statearr_32435_35226[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (16))){
var inst_32296 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
if(cljs.core.truth_(inst_32296)){
var statearr_32440_35227 = state_32318__$1;
(statearr_32440_35227[(1)] = (20));

} else {
var statearr_32441_35229 = state_32318__$1;
(statearr_32441_35229[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (10))){
var inst_32313 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
var statearr_32442_35230 = state_32318__$1;
(statearr_32442_35230[(2)] = inst_32313);

(statearr_32442_35230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (18))){
var inst_32288 = (state_32318[(16)]);
var state_32318__$1 = state_32318;
var statearr_32449_35231 = state_32318__$1;
(statearr_32449_35231[(2)] = inst_32288);

(statearr_32449_35231[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (8))){
var inst_32262 = (state_32318[(7)]);
var inst_32272 = (inst_32262 == null);
var state_32318__$1 = state_32318;
if(cljs.core.truth_(inst_32272)){
var statearr_32456_35232 = state_32318__$1;
(statearr_32456_35232[(1)] = (11));

} else {
var statearr_32457_35233 = state_32318__$1;
(statearr_32457_35233[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__29622__auto__ = null;
var cljs$core$async$mix_$_state_machine__29622__auto____0 = (function (){
var statearr_32462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32462[(0)] = cljs$core$async$mix_$_state_machine__29622__auto__);

(statearr_32462[(1)] = (1));

return statearr_32462;
});
var cljs$core$async$mix_$_state_machine__29622__auto____1 = (function (state_32318){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_32318);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e32464){var ex__29625__auto__ = e32464;
var statearr_32466_35234 = state_32318;
(statearr_32466_35234[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_32318[(4)]))){
var statearr_32468_35235 = state_32318;
(statearr_32468_35235[(1)] = cljs.core.first((state_32318[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35236 = state_32318;
state_32318 = G__35236;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29622__auto__ = function(state_32318){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29622__auto____1.call(this,state_32318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29622__auto____0;
cljs$core$async$mix_$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29622__auto____1;
return cljs$core$async$mix_$_state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_32475 = f__30326__auto__();
(statearr_32475[(6)] = c__30325__auto___35152);

return statearr_32475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35237 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35237(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35246 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35246(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35250 = (function() {
var G__35251 = null;
var G__35251__1 = (function (p){
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
var G__35251__2 = (function (p,v){
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
G__35251 = function(p,v){
switch(arguments.length){
case 1:
return G__35251__1.call(this,p);
case 2:
return G__35251__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35251.cljs$core$IFn$_invoke$arity$1 = G__35251__1;
G__35251.cljs$core$IFn$_invoke$arity$2 = G__35251__2;
return G__35251;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32513 = arguments.length;
switch (G__32513) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35250(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35250(p,v);
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
var G__32547 = arguments.length;
switch (G__32547) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32539_SHARP_){
if(cljs.core.truth_((p1__32539_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32539_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32539_SHARP_.call(null,topic)))){
return p1__32539_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32539_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32562 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32562 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32563){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32563 = meta32563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32564,meta32563__$1){
var self__ = this;
var _32564__$1 = this;
return (new cljs.core.async.t_cljs$core$async32562(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32563__$1));
}));

(cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32564){
var self__ = this;
var _32564__$1 = this;
return self__.meta32563;
}));

(cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32563","meta32563",809685993,null)], null);
}));

(cljs.core.async.t_cljs$core$async32562.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32562");

(cljs.core.async.t_cljs$core$async32562.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32562");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32562.
 */
cljs.core.async.__GT_t_cljs$core$async32562 = (function cljs$core$async$__GT_t_cljs$core$async32562(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32563){
return (new cljs.core.async.t_cljs$core$async32562(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32563));
});

}

return (new cljs.core.async.t_cljs$core$async32562(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30325__auto___35268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_32749){
var state_val_32751 = (state_32749[(1)]);
if((state_val_32751 === (7))){
var inst_32730 = (state_32749[(2)]);
var state_32749__$1 = state_32749;
var statearr_32766_35274 = state_32749__$1;
(statearr_32766_35274[(2)] = inst_32730);

(statearr_32766_35274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (20))){
var state_32749__$1 = state_32749;
var statearr_32767_35275 = state_32749__$1;
(statearr_32767_35275[(2)] = null);

(statearr_32767_35275[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (1))){
var state_32749__$1 = state_32749;
var statearr_32771_35281 = state_32749__$1;
(statearr_32771_35281[(2)] = null);

(statearr_32771_35281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (24))){
var inst_32713 = (state_32749[(7)]);
var inst_32722 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32713);
var state_32749__$1 = state_32749;
var statearr_32773_35282 = state_32749__$1;
(statearr_32773_35282[(2)] = inst_32722);

(statearr_32773_35282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (4))){
var inst_32609 = (state_32749[(8)]);
var inst_32609__$1 = (state_32749[(2)]);
var inst_32610 = (inst_32609__$1 == null);
var state_32749__$1 = (function (){var statearr_32789 = state_32749;
(statearr_32789[(8)] = inst_32609__$1);

return statearr_32789;
})();
if(cljs.core.truth_(inst_32610)){
var statearr_32794_35288 = state_32749__$1;
(statearr_32794_35288[(1)] = (5));

} else {
var statearr_32799_35289 = state_32749__$1;
(statearr_32799_35289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (15))){
var inst_32707 = (state_32749[(2)]);
var state_32749__$1 = state_32749;
var statearr_32808_35290 = state_32749__$1;
(statearr_32808_35290[(2)] = inst_32707);

(statearr_32808_35290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (21))){
var inst_32727 = (state_32749[(2)]);
var state_32749__$1 = (function (){var statearr_32811 = state_32749;
(statearr_32811[(9)] = inst_32727);

return statearr_32811;
})();
var statearr_32812_35295 = state_32749__$1;
(statearr_32812_35295[(2)] = null);

(statearr_32812_35295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (13))){
var inst_32673 = (state_32749[(10)]);
var inst_32691 = cljs.core.chunked_seq_QMARK_(inst_32673);
var state_32749__$1 = state_32749;
if(inst_32691){
var statearr_32818_35300 = state_32749__$1;
(statearr_32818_35300[(1)] = (16));

} else {
var statearr_32819_35302 = state_32749__$1;
(statearr_32819_35302[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (22))){
var inst_32719 = (state_32749[(2)]);
var state_32749__$1 = state_32749;
if(cljs.core.truth_(inst_32719)){
var statearr_32824_35303 = state_32749__$1;
(statearr_32824_35303[(1)] = (23));

} else {
var statearr_32825_35304 = state_32749__$1;
(statearr_32825_35304[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (6))){
var inst_32609 = (state_32749[(8)]);
var inst_32713 = (state_32749[(7)]);
var inst_32715 = (state_32749[(11)]);
var inst_32713__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32609) : topic_fn.call(null,inst_32609));
var inst_32714 = cljs.core.deref(mults);
var inst_32715__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32714,inst_32713__$1);
var state_32749__$1 = (function (){var statearr_32829 = state_32749;
(statearr_32829[(7)] = inst_32713__$1);

(statearr_32829[(11)] = inst_32715__$1);

return statearr_32829;
})();
if(cljs.core.truth_(inst_32715__$1)){
var statearr_32831_35306 = state_32749__$1;
(statearr_32831_35306[(1)] = (19));

} else {
var statearr_32832_35307 = state_32749__$1;
(statearr_32832_35307[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (25))){
var inst_32724 = (state_32749[(2)]);
var state_32749__$1 = state_32749;
var statearr_32838_35308 = state_32749__$1;
(statearr_32838_35308[(2)] = inst_32724);

(statearr_32838_35308[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (17))){
var inst_32673 = (state_32749[(10)]);
var inst_32698 = cljs.core.first(inst_32673);
var inst_32699 = cljs.core.async.muxch_STAR_(inst_32698);
var inst_32700 = cljs.core.async.close_BANG_(inst_32699);
var inst_32701 = cljs.core.next(inst_32673);
var inst_32620 = inst_32701;
var inst_32621 = null;
var inst_32622 = (0);
var inst_32623 = (0);
var state_32749__$1 = (function (){var statearr_32843 = state_32749;
(statearr_32843[(12)] = inst_32621);

(statearr_32843[(13)] = inst_32620);

(statearr_32843[(14)] = inst_32700);

(statearr_32843[(15)] = inst_32623);

(statearr_32843[(16)] = inst_32622);

return statearr_32843;
})();
var statearr_32848_35320 = state_32749__$1;
(statearr_32848_35320[(2)] = null);

(statearr_32848_35320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (3))){
var inst_32732 = (state_32749[(2)]);
var state_32749__$1 = state_32749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32749__$1,inst_32732);
} else {
if((state_val_32751 === (12))){
var inst_32709 = (state_32749[(2)]);
var state_32749__$1 = state_32749;
var statearr_32849_35329 = state_32749__$1;
(statearr_32849_35329[(2)] = inst_32709);

(statearr_32849_35329[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (2))){
var state_32749__$1 = state_32749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32749__$1,(4),ch);
} else {
if((state_val_32751 === (23))){
var state_32749__$1 = state_32749;
var statearr_32851_35336 = state_32749__$1;
(statearr_32851_35336[(2)] = null);

(statearr_32851_35336[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (19))){
var inst_32609 = (state_32749[(8)]);
var inst_32715 = (state_32749[(11)]);
var inst_32717 = cljs.core.async.muxch_STAR_(inst_32715);
var state_32749__$1 = state_32749;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32749__$1,(22),inst_32717,inst_32609);
} else {
if((state_val_32751 === (11))){
var inst_32620 = (state_32749[(13)]);
var inst_32673 = (state_32749[(10)]);
var inst_32673__$1 = cljs.core.seq(inst_32620);
var state_32749__$1 = (function (){var statearr_32853 = state_32749;
(statearr_32853[(10)] = inst_32673__$1);

return statearr_32853;
})();
if(inst_32673__$1){
var statearr_32855_35349 = state_32749__$1;
(statearr_32855_35349[(1)] = (13));

} else {
var statearr_32856_35352 = state_32749__$1;
(statearr_32856_35352[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (9))){
var inst_32711 = (state_32749[(2)]);
var state_32749__$1 = state_32749;
var statearr_32858_35360 = state_32749__$1;
(statearr_32858_35360[(2)] = inst_32711);

(statearr_32858_35360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (5))){
var inst_32616 = cljs.core.deref(mults);
var inst_32617 = cljs.core.vals(inst_32616);
var inst_32618 = cljs.core.seq(inst_32617);
var inst_32620 = inst_32618;
var inst_32621 = null;
var inst_32622 = (0);
var inst_32623 = (0);
var state_32749__$1 = (function (){var statearr_32869 = state_32749;
(statearr_32869[(12)] = inst_32621);

(statearr_32869[(13)] = inst_32620);

(statearr_32869[(15)] = inst_32623);

(statearr_32869[(16)] = inst_32622);

return statearr_32869;
})();
var statearr_32871_35374 = state_32749__$1;
(statearr_32871_35374[(2)] = null);

(statearr_32871_35374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (14))){
var state_32749__$1 = state_32749;
var statearr_32886_35375 = state_32749__$1;
(statearr_32886_35375[(2)] = null);

(statearr_32886_35375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (16))){
var inst_32673 = (state_32749[(10)]);
var inst_32693 = cljs.core.chunk_first(inst_32673);
var inst_32694 = cljs.core.chunk_rest(inst_32673);
var inst_32695 = cljs.core.count(inst_32693);
var inst_32620 = inst_32694;
var inst_32621 = inst_32693;
var inst_32622 = inst_32695;
var inst_32623 = (0);
var state_32749__$1 = (function (){var statearr_32902 = state_32749;
(statearr_32902[(12)] = inst_32621);

(statearr_32902[(13)] = inst_32620);

(statearr_32902[(15)] = inst_32623);

(statearr_32902[(16)] = inst_32622);

return statearr_32902;
})();
var statearr_32903_35376 = state_32749__$1;
(statearr_32903_35376[(2)] = null);

(statearr_32903_35376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (10))){
var inst_32621 = (state_32749[(12)]);
var inst_32620 = (state_32749[(13)]);
var inst_32623 = (state_32749[(15)]);
var inst_32622 = (state_32749[(16)]);
var inst_32628 = cljs.core._nth(inst_32621,inst_32623);
var inst_32629 = cljs.core.async.muxch_STAR_(inst_32628);
var inst_32630 = cljs.core.async.close_BANG_(inst_32629);
var inst_32631 = (inst_32623 + (1));
var tmp32883 = inst_32621;
var tmp32884 = inst_32620;
var tmp32885 = inst_32622;
var inst_32620__$1 = tmp32884;
var inst_32621__$1 = tmp32883;
var inst_32622__$1 = tmp32885;
var inst_32623__$1 = inst_32631;
var state_32749__$1 = (function (){var statearr_32909 = state_32749;
(statearr_32909[(12)] = inst_32621__$1);

(statearr_32909[(13)] = inst_32620__$1);

(statearr_32909[(15)] = inst_32623__$1);

(statearr_32909[(17)] = inst_32630);

(statearr_32909[(16)] = inst_32622__$1);

return statearr_32909;
})();
var statearr_32913_35384 = state_32749__$1;
(statearr_32913_35384[(2)] = null);

(statearr_32913_35384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (18))){
var inst_32704 = (state_32749[(2)]);
var state_32749__$1 = state_32749;
var statearr_32917_35391 = state_32749__$1;
(statearr_32917_35391[(2)] = inst_32704);

(statearr_32917_35391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (8))){
var inst_32623 = (state_32749[(15)]);
var inst_32622 = (state_32749[(16)]);
var inst_32625 = (inst_32623 < inst_32622);
var inst_32626 = inst_32625;
var state_32749__$1 = state_32749;
if(cljs.core.truth_(inst_32626)){
var statearr_32920_35399 = state_32749__$1;
(statearr_32920_35399[(1)] = (10));

} else {
var statearr_32921_35404 = state_32749__$1;
(statearr_32921_35404[(1)] = (11));

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
var cljs$core$async$state_machine__29622__auto__ = null;
var cljs$core$async$state_machine__29622__auto____0 = (function (){
var statearr_32922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32922[(0)] = cljs$core$async$state_machine__29622__auto__);

(statearr_32922[(1)] = (1));

return statearr_32922;
});
var cljs$core$async$state_machine__29622__auto____1 = (function (state_32749){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_32749);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e32927){var ex__29625__auto__ = e32927;
var statearr_32929_35407 = state_32749;
(statearr_32929_35407[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_32749[(4)]))){
var statearr_32931_35408 = state_32749;
(statearr_32931_35408[(1)] = cljs.core.first((state_32749[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35409 = state_32749;
state_32749 = G__35409;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$state_machine__29622__auto__ = function(state_32749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29622__auto____1.call(this,state_32749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29622__auto____0;
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29622__auto____1;
return cljs$core$async$state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_32932 = f__30326__auto__();
(statearr_32932[(6)] = c__30325__auto___35268);

return statearr_32932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
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
var G__32936 = arguments.length;
switch (G__32936) {
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
var G__32950 = arguments.length;
switch (G__32950) {
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
var G__32959 = arguments.length;
switch (G__32959) {
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
var c__30325__auto___35463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_33016){
var state_val_33017 = (state_33016[(1)]);
if((state_val_33017 === (7))){
var state_33016__$1 = state_33016;
var statearr_33023_35469 = state_33016__$1;
(statearr_33023_35469[(2)] = null);

(statearr_33023_35469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (1))){
var state_33016__$1 = state_33016;
var statearr_33026_35473 = state_33016__$1;
(statearr_33026_35473[(2)] = null);

(statearr_33026_35473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (4))){
var inst_32966 = (state_33016[(7)]);
var inst_32965 = (state_33016[(8)]);
var inst_32968 = (inst_32966 < inst_32965);
var state_33016__$1 = state_33016;
if(cljs.core.truth_(inst_32968)){
var statearr_33027_35474 = state_33016__$1;
(statearr_33027_35474[(1)] = (6));

} else {
var statearr_33028_35475 = state_33016__$1;
(statearr_33028_35475[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (15))){
var inst_33001 = (state_33016[(9)]);
var inst_33007 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33001);
var state_33016__$1 = state_33016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33016__$1,(17),out,inst_33007);
} else {
if((state_val_33017 === (13))){
var inst_33001 = (state_33016[(9)]);
var inst_33001__$1 = (state_33016[(2)]);
var inst_33003 = cljs.core.some(cljs.core.nil_QMARK_,inst_33001__$1);
var state_33016__$1 = (function (){var statearr_33029 = state_33016;
(statearr_33029[(9)] = inst_33001__$1);

return statearr_33029;
})();
if(cljs.core.truth_(inst_33003)){
var statearr_33031_35479 = state_33016__$1;
(statearr_33031_35479[(1)] = (14));

} else {
var statearr_33032_35480 = state_33016__$1;
(statearr_33032_35480[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (6))){
var state_33016__$1 = state_33016;
var statearr_33034_35481 = state_33016__$1;
(statearr_33034_35481[(2)] = null);

(statearr_33034_35481[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (17))){
var inst_33009 = (state_33016[(2)]);
var state_33016__$1 = (function (){var statearr_33061 = state_33016;
(statearr_33061[(10)] = inst_33009);

return statearr_33061;
})();
var statearr_33064_35482 = state_33016__$1;
(statearr_33064_35482[(2)] = null);

(statearr_33064_35482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (3))){
var inst_33014 = (state_33016[(2)]);
var state_33016__$1 = state_33016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33016__$1,inst_33014);
} else {
if((state_val_33017 === (12))){
var _ = (function (){var statearr_33065 = state_33016;
(statearr_33065[(4)] = cljs.core.rest((state_33016[(4)])));

return statearr_33065;
})();
var state_33016__$1 = state_33016;
var ex33060 = (state_33016__$1[(2)]);
var statearr_33066_35483 = state_33016__$1;
(statearr_33066_35483[(5)] = ex33060);


if((ex33060 instanceof Object)){
var statearr_33067_35484 = state_33016__$1;
(statearr_33067_35484[(1)] = (11));

(statearr_33067_35484[(5)] = null);

} else {
throw ex33060;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (2))){
var inst_32964 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32965 = cnt;
var inst_32966 = (0);
var state_33016__$1 = (function (){var statearr_33075 = state_33016;
(statearr_33075[(11)] = inst_32964);

(statearr_33075[(7)] = inst_32966);

(statearr_33075[(8)] = inst_32965);

return statearr_33075;
})();
var statearr_33076_35489 = state_33016__$1;
(statearr_33076_35489[(2)] = null);

(statearr_33076_35489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (11))){
var inst_32976 = (state_33016[(2)]);
var inst_32977 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33016__$1 = (function (){var statearr_33081 = state_33016;
(statearr_33081[(12)] = inst_32976);

return statearr_33081;
})();
var statearr_33082_35492 = state_33016__$1;
(statearr_33082_35492[(2)] = inst_32977);

(statearr_33082_35492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (9))){
var inst_32966 = (state_33016[(7)]);
var _ = (function (){var statearr_33083 = state_33016;
(statearr_33083[(4)] = cljs.core.cons((12),(state_33016[(4)])));

return statearr_33083;
})();
var inst_32984 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32966) : chs__$1.call(null,inst_32966));
var inst_32986 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32966) : done.call(null,inst_32966));
var inst_32987 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32984,inst_32986);
var ___$1 = (function (){var statearr_33084 = state_33016;
(statearr_33084[(4)] = cljs.core.rest((state_33016[(4)])));

return statearr_33084;
})();
var state_33016__$1 = state_33016;
var statearr_33086_35493 = state_33016__$1;
(statearr_33086_35493[(2)] = inst_32987);

(statearr_33086_35493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (5))){
var inst_32999 = (state_33016[(2)]);
var state_33016__$1 = (function (){var statearr_33087 = state_33016;
(statearr_33087[(13)] = inst_32999);

return statearr_33087;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33016__$1,(13),dchan);
} else {
if((state_val_33017 === (14))){
var inst_33005 = cljs.core.async.close_BANG_(out);
var state_33016__$1 = state_33016;
var statearr_33088_35494 = state_33016__$1;
(statearr_33088_35494[(2)] = inst_33005);

(statearr_33088_35494[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (16))){
var inst_33012 = (state_33016[(2)]);
var state_33016__$1 = state_33016;
var statearr_33089_35495 = state_33016__$1;
(statearr_33089_35495[(2)] = inst_33012);

(statearr_33089_35495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (10))){
var inst_32966 = (state_33016[(7)]);
var inst_32990 = (state_33016[(2)]);
var inst_32992 = (inst_32966 + (1));
var inst_32966__$1 = inst_32992;
var state_33016__$1 = (function (){var statearr_33092 = state_33016;
(statearr_33092[(7)] = inst_32966__$1);

(statearr_33092[(14)] = inst_32990);

return statearr_33092;
})();
var statearr_33095_35496 = state_33016__$1;
(statearr_33095_35496[(2)] = null);

(statearr_33095_35496[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (8))){
var inst_32997 = (state_33016[(2)]);
var state_33016__$1 = state_33016;
var statearr_33097_35497 = state_33016__$1;
(statearr_33097_35497[(2)] = inst_32997);

(statearr_33097_35497[(1)] = (5));


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
var cljs$core$async$state_machine__29622__auto__ = null;
var cljs$core$async$state_machine__29622__auto____0 = (function (){
var statearr_33106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33106[(0)] = cljs$core$async$state_machine__29622__auto__);

(statearr_33106[(1)] = (1));

return statearr_33106;
});
var cljs$core$async$state_machine__29622__auto____1 = (function (state_33016){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_33016);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e33108){var ex__29625__auto__ = e33108;
var statearr_33110_35498 = state_33016;
(statearr_33110_35498[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_33016[(4)]))){
var statearr_33112_35499 = state_33016;
(statearr_33112_35499[(1)] = cljs.core.first((state_33016[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35500 = state_33016;
state_33016 = G__35500;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$state_machine__29622__auto__ = function(state_33016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29622__auto____1.call(this,state_33016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29622__auto____0;
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29622__auto____1;
return cljs$core$async$state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_33118 = f__30326__auto__();
(statearr_33118[(6)] = c__30325__auto___35463);

return statearr_33118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
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
var G__33135 = arguments.length;
switch (G__33135) {
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
var c__30325__auto___35507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_33175){
var state_val_33176 = (state_33175[(1)]);
if((state_val_33176 === (7))){
var inst_33148 = (state_33175[(7)]);
var inst_33149 = (state_33175[(8)]);
var inst_33148__$1 = (state_33175[(2)]);
var inst_33149__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33148__$1,(0),null);
var inst_33150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33148__$1,(1),null);
var inst_33151 = (inst_33149__$1 == null);
var state_33175__$1 = (function (){var statearr_33183 = state_33175;
(statearr_33183[(7)] = inst_33148__$1);

(statearr_33183[(8)] = inst_33149__$1);

(statearr_33183[(9)] = inst_33150);

return statearr_33183;
})();
if(cljs.core.truth_(inst_33151)){
var statearr_33185_35514 = state_33175__$1;
(statearr_33185_35514[(1)] = (8));

} else {
var statearr_33187_35515 = state_33175__$1;
(statearr_33187_35515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (1))){
var inst_33137 = cljs.core.vec(chs);
var inst_33138 = inst_33137;
var state_33175__$1 = (function (){var statearr_33188 = state_33175;
(statearr_33188[(10)] = inst_33138);

return statearr_33188;
})();
var statearr_33189_35516 = state_33175__$1;
(statearr_33189_35516[(2)] = null);

(statearr_33189_35516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (4))){
var inst_33138 = (state_33175[(10)]);
var state_33175__$1 = state_33175;
return cljs.core.async.ioc_alts_BANG_(state_33175__$1,(7),inst_33138);
} else {
if((state_val_33176 === (6))){
var inst_33169 = (state_33175[(2)]);
var state_33175__$1 = state_33175;
var statearr_33191_35520 = state_33175__$1;
(statearr_33191_35520[(2)] = inst_33169);

(statearr_33191_35520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (3))){
var inst_33172 = (state_33175[(2)]);
var state_33175__$1 = state_33175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33175__$1,inst_33172);
} else {
if((state_val_33176 === (2))){
var inst_33138 = (state_33175[(10)]);
var inst_33140 = cljs.core.count(inst_33138);
var inst_33141 = (inst_33140 > (0));
var state_33175__$1 = state_33175;
if(cljs.core.truth_(inst_33141)){
var statearr_33194_35524 = state_33175__$1;
(statearr_33194_35524[(1)] = (4));

} else {
var statearr_33196_35526 = state_33175__$1;
(statearr_33196_35526[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (11))){
var inst_33138 = (state_33175[(10)]);
var inst_33162 = (state_33175[(2)]);
var tmp33192 = inst_33138;
var inst_33138__$1 = tmp33192;
var state_33175__$1 = (function (){var statearr_33201 = state_33175;
(statearr_33201[(10)] = inst_33138__$1);

(statearr_33201[(11)] = inst_33162);

return statearr_33201;
})();
var statearr_33203_35528 = state_33175__$1;
(statearr_33203_35528[(2)] = null);

(statearr_33203_35528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (9))){
var inst_33149 = (state_33175[(8)]);
var state_33175__$1 = state_33175;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33175__$1,(11),out,inst_33149);
} else {
if((state_val_33176 === (5))){
var inst_33167 = cljs.core.async.close_BANG_(out);
var state_33175__$1 = state_33175;
var statearr_33210_35529 = state_33175__$1;
(statearr_33210_35529[(2)] = inst_33167);

(statearr_33210_35529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (10))){
var inst_33165 = (state_33175[(2)]);
var state_33175__$1 = state_33175;
var statearr_33213_35534 = state_33175__$1;
(statearr_33213_35534[(2)] = inst_33165);

(statearr_33213_35534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (8))){
var inst_33148 = (state_33175[(7)]);
var inst_33149 = (state_33175[(8)]);
var inst_33138 = (state_33175[(10)]);
var inst_33150 = (state_33175[(9)]);
var inst_33157 = (function (){var cs = inst_33138;
var vec__33144 = inst_33148;
var v = inst_33149;
var c = inst_33150;
return (function (p1__33128_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33128_SHARP_);
});
})();
var inst_33158 = cljs.core.filterv(inst_33157,inst_33138);
var inst_33138__$1 = inst_33158;
var state_33175__$1 = (function (){var statearr_33233 = state_33175;
(statearr_33233[(10)] = inst_33138__$1);

return statearr_33233;
})();
var statearr_33235_35538 = state_33175__$1;
(statearr_33235_35538[(2)] = null);

(statearr_33235_35538[(1)] = (2));


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
var cljs$core$async$state_machine__29622__auto__ = null;
var cljs$core$async$state_machine__29622__auto____0 = (function (){
var statearr_33250 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33250[(0)] = cljs$core$async$state_machine__29622__auto__);

(statearr_33250[(1)] = (1));

return statearr_33250;
});
var cljs$core$async$state_machine__29622__auto____1 = (function (state_33175){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_33175);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e33262){var ex__29625__auto__ = e33262;
var statearr_33263_35543 = state_33175;
(statearr_33263_35543[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_33175[(4)]))){
var statearr_33264_35546 = state_33175;
(statearr_33264_35546[(1)] = cljs.core.first((state_33175[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35548 = state_33175;
state_33175 = G__35548;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$state_machine__29622__auto__ = function(state_33175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29622__auto____1.call(this,state_33175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29622__auto____0;
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29622__auto____1;
return cljs$core$async$state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_33274 = f__30326__auto__();
(statearr_33274[(6)] = c__30325__auto___35507);

return statearr_33274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
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
var G__33286 = arguments.length;
switch (G__33286) {
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
var c__30325__auto___35556 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_33329){
var state_val_33330 = (state_33329[(1)]);
if((state_val_33330 === (7))){
var inst_33311 = (state_33329[(7)]);
var inst_33311__$1 = (state_33329[(2)]);
var inst_33312 = (inst_33311__$1 == null);
var inst_33313 = cljs.core.not(inst_33312);
var state_33329__$1 = (function (){var statearr_33332 = state_33329;
(statearr_33332[(7)] = inst_33311__$1);

return statearr_33332;
})();
if(inst_33313){
var statearr_33334_35557 = state_33329__$1;
(statearr_33334_35557[(1)] = (8));

} else {
var statearr_33338_35558 = state_33329__$1;
(statearr_33338_35558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (1))){
var inst_33302 = (0);
var state_33329__$1 = (function (){var statearr_33339 = state_33329;
(statearr_33339[(8)] = inst_33302);

return statearr_33339;
})();
var statearr_33340_35559 = state_33329__$1;
(statearr_33340_35559[(2)] = null);

(statearr_33340_35559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (4))){
var state_33329__$1 = state_33329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33329__$1,(7),ch);
} else {
if((state_val_33330 === (6))){
var inst_33324 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
var statearr_33341_35560 = state_33329__$1;
(statearr_33341_35560[(2)] = inst_33324);

(statearr_33341_35560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (3))){
var inst_33326 = (state_33329[(2)]);
var inst_33327 = cljs.core.async.close_BANG_(out);
var state_33329__$1 = (function (){var statearr_33344 = state_33329;
(statearr_33344[(9)] = inst_33326);

return statearr_33344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33329__$1,inst_33327);
} else {
if((state_val_33330 === (2))){
var inst_33302 = (state_33329[(8)]);
var inst_33308 = (inst_33302 < n);
var state_33329__$1 = state_33329;
if(cljs.core.truth_(inst_33308)){
var statearr_33355_35561 = state_33329__$1;
(statearr_33355_35561[(1)] = (4));

} else {
var statearr_33356_35562 = state_33329__$1;
(statearr_33356_35562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (11))){
var inst_33302 = (state_33329[(8)]);
var inst_33316 = (state_33329[(2)]);
var inst_33317 = (inst_33302 + (1));
var inst_33302__$1 = inst_33317;
var state_33329__$1 = (function (){var statearr_33364 = state_33329;
(statearr_33364[(8)] = inst_33302__$1);

(statearr_33364[(10)] = inst_33316);

return statearr_33364;
})();
var statearr_33371_35563 = state_33329__$1;
(statearr_33371_35563[(2)] = null);

(statearr_33371_35563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (9))){
var state_33329__$1 = state_33329;
var statearr_33372_35564 = state_33329__$1;
(statearr_33372_35564[(2)] = null);

(statearr_33372_35564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (5))){
var state_33329__$1 = state_33329;
var statearr_33373_35566 = state_33329__$1;
(statearr_33373_35566[(2)] = null);

(statearr_33373_35566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (10))){
var inst_33321 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
var statearr_33374_35567 = state_33329__$1;
(statearr_33374_35567[(2)] = inst_33321);

(statearr_33374_35567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (8))){
var inst_33311 = (state_33329[(7)]);
var state_33329__$1 = state_33329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33329__$1,(11),out,inst_33311);
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
var cljs$core$async$state_machine__29622__auto__ = null;
var cljs$core$async$state_machine__29622__auto____0 = (function (){
var statearr_33416 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33416[(0)] = cljs$core$async$state_machine__29622__auto__);

(statearr_33416[(1)] = (1));

return statearr_33416;
});
var cljs$core$async$state_machine__29622__auto____1 = (function (state_33329){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_33329);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e33418){var ex__29625__auto__ = e33418;
var statearr_33421_35569 = state_33329;
(statearr_33421_35569[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_33329[(4)]))){
var statearr_33423_35570 = state_33329;
(statearr_33423_35570[(1)] = cljs.core.first((state_33329[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35571 = state_33329;
state_33329 = G__35571;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$state_machine__29622__auto__ = function(state_33329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29622__auto____1.call(this,state_33329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29622__auto____0;
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29622__auto____1;
return cljs$core$async$state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_33427 = f__30326__auto__();
(statearr_33427[(6)] = c__30325__auto___35556);

return statearr_33427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33443 = (function (f,ch,meta33444){
this.f = f;
this.ch = ch;
this.meta33444 = meta33444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33445,meta33444__$1){
var self__ = this;
var _33445__$1 = this;
return (new cljs.core.async.t_cljs$core$async33443(self__.f,self__.ch,meta33444__$1));
}));

(cljs.core.async.t_cljs$core$async33443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33445){
var self__ = this;
var _33445__$1 = this;
return self__.meta33444;
}));

(cljs.core.async.t_cljs$core$async33443.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33443.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33443.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33458 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33458 = (function (f,ch,meta33444,_,fn1,meta33459){
this.f = f;
this.ch = ch;
this.meta33444 = meta33444;
this._ = _;
this.fn1 = fn1;
this.meta33459 = meta33459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33460,meta33459__$1){
var self__ = this;
var _33460__$1 = this;
return (new cljs.core.async.t_cljs$core$async33458(self__.f,self__.ch,self__.meta33444,self__._,self__.fn1,meta33459__$1));
}));

(cljs.core.async.t_cljs$core$async33458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33460){
var self__ = this;
var _33460__$1 = this;
return self__.meta33459;
}));

(cljs.core.async.t_cljs$core$async33458.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33458.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33458.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33458.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33437_SHARP_){
var G__33473 = (((p1__33437_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33437_SHARP_) : self__.f.call(null,p1__33437_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33473) : f1.call(null,G__33473));
});
}));

(cljs.core.async.t_cljs$core$async33458.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33444","meta33444",-1552741036,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33443","cljs.core.async/t_cljs$core$async33443",-1332921251,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33459","meta33459",1144694107,null)], null);
}));

(cljs.core.async.t_cljs$core$async33458.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33458.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33458");

(cljs.core.async.t_cljs$core$async33458.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33458");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33458.
 */
cljs.core.async.__GT_t_cljs$core$async33458 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33458(f__$1,ch__$1,meta33444__$1,___$2,fn1__$1,meta33459){
return (new cljs.core.async.t_cljs$core$async33458(f__$1,ch__$1,meta33444__$1,___$2,fn1__$1,meta33459));
});

}

return (new cljs.core.async.t_cljs$core$async33458(self__.f,self__.ch,self__.meta33444,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33475 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33475) : self__.f.call(null,G__33475));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33443.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33444","meta33444",-1552741036,null)], null);
}));

(cljs.core.async.t_cljs$core$async33443.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33443");

(cljs.core.async.t_cljs$core$async33443.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33443");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33443.
 */
cljs.core.async.__GT_t_cljs$core$async33443 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33443(f__$1,ch__$1,meta33444){
return (new cljs.core.async.t_cljs$core$async33443(f__$1,ch__$1,meta33444));
});

}

return (new cljs.core.async.t_cljs$core$async33443(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33477 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33477 = (function (f,ch,meta33478){
this.f = f;
this.ch = ch;
this.meta33478 = meta33478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33479,meta33478__$1){
var self__ = this;
var _33479__$1 = this;
return (new cljs.core.async.t_cljs$core$async33477(self__.f,self__.ch,meta33478__$1));
}));

(cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33479){
var self__ = this;
var _33479__$1 = this;
return self__.meta33478;
}));

(cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33477.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33478","meta33478",-869309637,null)], null);
}));

(cljs.core.async.t_cljs$core$async33477.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33477");

(cljs.core.async.t_cljs$core$async33477.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33477");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33477.
 */
cljs.core.async.__GT_t_cljs$core$async33477 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33477(f__$1,ch__$1,meta33478){
return (new cljs.core.async.t_cljs$core$async33477(f__$1,ch__$1,meta33478));
});

}

return (new cljs.core.async.t_cljs$core$async33477(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33491 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33491 = (function (p,ch,meta33492){
this.p = p;
this.ch = ch;
this.meta33492 = meta33492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33493,meta33492__$1){
var self__ = this;
var _33493__$1 = this;
return (new cljs.core.async.t_cljs$core$async33491(self__.p,self__.ch,meta33492__$1));
}));

(cljs.core.async.t_cljs$core$async33491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33493){
var self__ = this;
var _33493__$1 = this;
return self__.meta33492;
}));

(cljs.core.async.t_cljs$core$async33491.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33491.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33491.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33491.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33491.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33491.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33491.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33492","meta33492",-302871587,null)], null);
}));

(cljs.core.async.t_cljs$core$async33491.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33491");

(cljs.core.async.t_cljs$core$async33491.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33491");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33491.
 */
cljs.core.async.__GT_t_cljs$core$async33491 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33491(p__$1,ch__$1,meta33492){
return (new cljs.core.async.t_cljs$core$async33491(p__$1,ch__$1,meta33492));
});

}

return (new cljs.core.async.t_cljs$core$async33491(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33501 = arguments.length;
switch (G__33501) {
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
var c__30325__auto___35591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_33544){
var state_val_33545 = (state_33544[(1)]);
if((state_val_33545 === (7))){
var inst_33537 = (state_33544[(2)]);
var state_33544__$1 = state_33544;
var statearr_33552_35593 = state_33544__$1;
(statearr_33552_35593[(2)] = inst_33537);

(statearr_33552_35593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (1))){
var state_33544__$1 = state_33544;
var statearr_33553_35595 = state_33544__$1;
(statearr_33553_35595[(2)] = null);

(statearr_33553_35595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (4))){
var inst_33522 = (state_33544[(7)]);
var inst_33522__$1 = (state_33544[(2)]);
var inst_33523 = (inst_33522__$1 == null);
var state_33544__$1 = (function (){var statearr_33554 = state_33544;
(statearr_33554[(7)] = inst_33522__$1);

return statearr_33554;
})();
if(cljs.core.truth_(inst_33523)){
var statearr_33555_35596 = state_33544__$1;
(statearr_33555_35596[(1)] = (5));

} else {
var statearr_33556_35597 = state_33544__$1;
(statearr_33556_35597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (6))){
var inst_33522 = (state_33544[(7)]);
var inst_33528 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33522) : p.call(null,inst_33522));
var state_33544__$1 = state_33544;
if(cljs.core.truth_(inst_33528)){
var statearr_33558_35599 = state_33544__$1;
(statearr_33558_35599[(1)] = (8));

} else {
var statearr_33559_35600 = state_33544__$1;
(statearr_33559_35600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (3))){
var inst_33539 = (state_33544[(2)]);
var state_33544__$1 = state_33544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33544__$1,inst_33539);
} else {
if((state_val_33545 === (2))){
var state_33544__$1 = state_33544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33544__$1,(4),ch);
} else {
if((state_val_33545 === (11))){
var inst_33531 = (state_33544[(2)]);
var state_33544__$1 = state_33544;
var statearr_33572_35604 = state_33544__$1;
(statearr_33572_35604[(2)] = inst_33531);

(statearr_33572_35604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (9))){
var state_33544__$1 = state_33544;
var statearr_33574_35605 = state_33544__$1;
(statearr_33574_35605[(2)] = null);

(statearr_33574_35605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (5))){
var inst_33525 = cljs.core.async.close_BANG_(out);
var state_33544__$1 = state_33544;
var statearr_33575_35607 = state_33544__$1;
(statearr_33575_35607[(2)] = inst_33525);

(statearr_33575_35607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (10))){
var inst_33534 = (state_33544[(2)]);
var state_33544__$1 = (function (){var statearr_33577 = state_33544;
(statearr_33577[(8)] = inst_33534);

return statearr_33577;
})();
var statearr_33583_35612 = state_33544__$1;
(statearr_33583_35612[(2)] = null);

(statearr_33583_35612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33545 === (8))){
var inst_33522 = (state_33544[(7)]);
var state_33544__$1 = state_33544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33544__$1,(11),out,inst_33522);
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
var cljs$core$async$state_machine__29622__auto__ = null;
var cljs$core$async$state_machine__29622__auto____0 = (function (){
var statearr_33603 = [null,null,null,null,null,null,null,null,null];
(statearr_33603[(0)] = cljs$core$async$state_machine__29622__auto__);

(statearr_33603[(1)] = (1));

return statearr_33603;
});
var cljs$core$async$state_machine__29622__auto____1 = (function (state_33544){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_33544);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e33607){var ex__29625__auto__ = e33607;
var statearr_33613_35614 = state_33544;
(statearr_33613_35614[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_33544[(4)]))){
var statearr_33614_35616 = state_33544;
(statearr_33614_35616[(1)] = cljs.core.first((state_33544[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35619 = state_33544;
state_33544 = G__35619;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$state_machine__29622__auto__ = function(state_33544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29622__auto____1.call(this,state_33544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29622__auto____0;
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29622__auto____1;
return cljs$core$async$state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_33627 = f__30326__auto__();
(statearr_33627[(6)] = c__30325__auto___35591);

return statearr_33627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33642 = arguments.length;
switch (G__33642) {
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
var c__30325__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_33745){
var state_val_33746 = (state_33745[(1)]);
if((state_val_33746 === (7))){
var inst_33741 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33777_35627 = state_33745__$1;
(statearr_33777_35627[(2)] = inst_33741);

(statearr_33777_35627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (20))){
var inst_33708 = (state_33745[(7)]);
var inst_33719 = (state_33745[(2)]);
var inst_33720 = cljs.core.next(inst_33708);
var inst_33679 = inst_33720;
var inst_33680 = null;
var inst_33681 = (0);
var inst_33683 = (0);
var state_33745__$1 = (function (){var statearr_33785 = state_33745;
(statearr_33785[(8)] = inst_33681);

(statearr_33785[(9)] = inst_33679);

(statearr_33785[(10)] = inst_33719);

(statearr_33785[(11)] = inst_33680);

(statearr_33785[(12)] = inst_33683);

return statearr_33785;
})();
var statearr_33796_35629 = state_33745__$1;
(statearr_33796_35629[(2)] = null);

(statearr_33796_35629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (1))){
var state_33745__$1 = state_33745;
var statearr_33797_35631 = state_33745__$1;
(statearr_33797_35631[(2)] = null);

(statearr_33797_35631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (4))){
var inst_33668 = (state_33745[(13)]);
var inst_33668__$1 = (state_33745[(2)]);
var inst_33669 = (inst_33668__$1 == null);
var state_33745__$1 = (function (){var statearr_33799 = state_33745;
(statearr_33799[(13)] = inst_33668__$1);

return statearr_33799;
})();
if(cljs.core.truth_(inst_33669)){
var statearr_33801_35633 = state_33745__$1;
(statearr_33801_35633[(1)] = (5));

} else {
var statearr_33803_35634 = state_33745__$1;
(statearr_33803_35634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (15))){
var state_33745__$1 = state_33745;
var statearr_33809_35635 = state_33745__$1;
(statearr_33809_35635[(2)] = null);

(statearr_33809_35635[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (21))){
var state_33745__$1 = state_33745;
var statearr_33814_35636 = state_33745__$1;
(statearr_33814_35636[(2)] = null);

(statearr_33814_35636[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (13))){
var inst_33681 = (state_33745[(8)]);
var inst_33679 = (state_33745[(9)]);
var inst_33680 = (state_33745[(11)]);
var inst_33683 = (state_33745[(12)]);
var inst_33703 = (state_33745[(2)]);
var inst_33704 = (inst_33683 + (1));
var tmp33805 = inst_33681;
var tmp33806 = inst_33679;
var tmp33807 = inst_33680;
var inst_33679__$1 = tmp33806;
var inst_33680__$1 = tmp33807;
var inst_33681__$1 = tmp33805;
var inst_33683__$1 = inst_33704;
var state_33745__$1 = (function (){var statearr_33831 = state_33745;
(statearr_33831[(8)] = inst_33681__$1);

(statearr_33831[(9)] = inst_33679__$1);

(statearr_33831[(14)] = inst_33703);

(statearr_33831[(11)] = inst_33680__$1);

(statearr_33831[(12)] = inst_33683__$1);

return statearr_33831;
})();
var statearr_33833_35640 = state_33745__$1;
(statearr_33833_35640[(2)] = null);

(statearr_33833_35640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (22))){
var state_33745__$1 = state_33745;
var statearr_33834_35642 = state_33745__$1;
(statearr_33834_35642[(2)] = null);

(statearr_33834_35642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (6))){
var inst_33668 = (state_33745[(13)]);
var inst_33677 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33668) : f.call(null,inst_33668));
var inst_33678 = cljs.core.seq(inst_33677);
var inst_33679 = inst_33678;
var inst_33680 = null;
var inst_33681 = (0);
var inst_33683 = (0);
var state_33745__$1 = (function (){var statearr_33872 = state_33745;
(statearr_33872[(8)] = inst_33681);

(statearr_33872[(9)] = inst_33679);

(statearr_33872[(11)] = inst_33680);

(statearr_33872[(12)] = inst_33683);

return statearr_33872;
})();
var statearr_33874_35647 = state_33745__$1;
(statearr_33874_35647[(2)] = null);

(statearr_33874_35647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (17))){
var inst_33708 = (state_33745[(7)]);
var inst_33712 = cljs.core.chunk_first(inst_33708);
var inst_33713 = cljs.core.chunk_rest(inst_33708);
var inst_33714 = cljs.core.count(inst_33712);
var inst_33679 = inst_33713;
var inst_33680 = inst_33712;
var inst_33681 = inst_33714;
var inst_33683 = (0);
var state_33745__$1 = (function (){var statearr_33882 = state_33745;
(statearr_33882[(8)] = inst_33681);

(statearr_33882[(9)] = inst_33679);

(statearr_33882[(11)] = inst_33680);

(statearr_33882[(12)] = inst_33683);

return statearr_33882;
})();
var statearr_33883_35648 = state_33745__$1;
(statearr_33883_35648[(2)] = null);

(statearr_33883_35648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (3))){
var inst_33743 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33745__$1,inst_33743);
} else {
if((state_val_33746 === (12))){
var inst_33729 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33887_35651 = state_33745__$1;
(statearr_33887_35651[(2)] = inst_33729);

(statearr_33887_35651[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (2))){
var state_33745__$1 = state_33745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33745__$1,(4),in$);
} else {
if((state_val_33746 === (23))){
var inst_33739 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33893_35652 = state_33745__$1;
(statearr_33893_35652[(2)] = inst_33739);

(statearr_33893_35652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (19))){
var inst_33723 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33896_35653 = state_33745__$1;
(statearr_33896_35653[(2)] = inst_33723);

(statearr_33896_35653[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (11))){
var inst_33679 = (state_33745[(9)]);
var inst_33708 = (state_33745[(7)]);
var inst_33708__$1 = cljs.core.seq(inst_33679);
var state_33745__$1 = (function (){var statearr_33897 = state_33745;
(statearr_33897[(7)] = inst_33708__$1);

return statearr_33897;
})();
if(inst_33708__$1){
var statearr_33898_35656 = state_33745__$1;
(statearr_33898_35656[(1)] = (14));

} else {
var statearr_33899_35657 = state_33745__$1;
(statearr_33899_35657[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (9))){
var inst_33732 = (state_33745[(2)]);
var inst_33733 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33745__$1 = (function (){var statearr_33901 = state_33745;
(statearr_33901[(15)] = inst_33732);

return statearr_33901;
})();
if(cljs.core.truth_(inst_33733)){
var statearr_33902_35658 = state_33745__$1;
(statearr_33902_35658[(1)] = (21));

} else {
var statearr_33903_35659 = state_33745__$1;
(statearr_33903_35659[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (5))){
var inst_33671 = cljs.core.async.close_BANG_(out);
var state_33745__$1 = state_33745;
var statearr_33904_35661 = state_33745__$1;
(statearr_33904_35661[(2)] = inst_33671);

(statearr_33904_35661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (14))){
var inst_33708 = (state_33745[(7)]);
var inst_33710 = cljs.core.chunked_seq_QMARK_(inst_33708);
var state_33745__$1 = state_33745;
if(inst_33710){
var statearr_33909_35663 = state_33745__$1;
(statearr_33909_35663[(1)] = (17));

} else {
var statearr_33910_35664 = state_33745__$1;
(statearr_33910_35664[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (16))){
var inst_33727 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33912_35665 = state_33745__$1;
(statearr_33912_35665[(2)] = inst_33727);

(statearr_33912_35665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (10))){
var inst_33680 = (state_33745[(11)]);
var inst_33683 = (state_33745[(12)]);
var inst_33701 = cljs.core._nth(inst_33680,inst_33683);
var state_33745__$1 = state_33745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33745__$1,(13),out,inst_33701);
} else {
if((state_val_33746 === (18))){
var inst_33708 = (state_33745[(7)]);
var inst_33717 = cljs.core.first(inst_33708);
var state_33745__$1 = state_33745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33745__$1,(20),out,inst_33717);
} else {
if((state_val_33746 === (8))){
var inst_33681 = (state_33745[(8)]);
var inst_33683 = (state_33745[(12)]);
var inst_33688 = (inst_33683 < inst_33681);
var inst_33689 = inst_33688;
var state_33745__$1 = state_33745;
if(cljs.core.truth_(inst_33689)){
var statearr_33924_35666 = state_33745__$1;
(statearr_33924_35666[(1)] = (10));

} else {
var statearr_33925_35667 = state_33745__$1;
(statearr_33925_35667[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29622__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29622__auto____0 = (function (){
var statearr_33928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33928[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29622__auto__);

(statearr_33928[(1)] = (1));

return statearr_33928;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29622__auto____1 = (function (state_33745){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_33745);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e33929){var ex__29625__auto__ = e33929;
var statearr_33933_35668 = state_33745;
(statearr_33933_35668[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_33745[(4)]))){
var statearr_33934_35669 = state_33745;
(statearr_33934_35669[(1)] = cljs.core.first((state_33745[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35671 = state_33745;
state_33745 = G__35671;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29622__auto__ = function(state_33745){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29622__auto____1.call(this,state_33745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29622__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29622__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_33935 = f__30326__auto__();
(statearr_33935[(6)] = c__30325__auto__);

return statearr_33935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
}));

return c__30325__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33939 = arguments.length;
switch (G__33939) {
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
var G__33947 = arguments.length;
switch (G__33947) {
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
var G__33952 = arguments.length;
switch (G__33952) {
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
var c__30325__auto___35680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_33989){
var state_val_33993 = (state_33989[(1)]);
if((state_val_33993 === (7))){
var inst_33984 = (state_33989[(2)]);
var state_33989__$1 = state_33989;
var statearr_33996_35681 = state_33989__$1;
(statearr_33996_35681[(2)] = inst_33984);

(statearr_33996_35681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (1))){
var inst_33961 = null;
var state_33989__$1 = (function (){var statearr_33997 = state_33989;
(statearr_33997[(7)] = inst_33961);

return statearr_33997;
})();
var statearr_33998_35682 = state_33989__$1;
(statearr_33998_35682[(2)] = null);

(statearr_33998_35682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (4))){
var inst_33964 = (state_33989[(8)]);
var inst_33964__$1 = (state_33989[(2)]);
var inst_33965 = (inst_33964__$1 == null);
var inst_33966 = cljs.core.not(inst_33965);
var state_33989__$1 = (function (){var statearr_34005 = state_33989;
(statearr_34005[(8)] = inst_33964__$1);

return statearr_34005;
})();
if(inst_33966){
var statearr_34006_35684 = state_33989__$1;
(statearr_34006_35684[(1)] = (5));

} else {
var statearr_34007_35685 = state_33989__$1;
(statearr_34007_35685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (6))){
var state_33989__$1 = state_33989;
var statearr_34008_35686 = state_33989__$1;
(statearr_34008_35686[(2)] = null);

(statearr_34008_35686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (3))){
var inst_33986 = (state_33989[(2)]);
var inst_33987 = cljs.core.async.close_BANG_(out);
var state_33989__$1 = (function (){var statearr_34010 = state_33989;
(statearr_34010[(9)] = inst_33986);

return statearr_34010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33989__$1,inst_33987);
} else {
if((state_val_33993 === (2))){
var state_33989__$1 = state_33989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33989__$1,(4),ch);
} else {
if((state_val_33993 === (11))){
var inst_33964 = (state_33989[(8)]);
var inst_33974 = (state_33989[(2)]);
var inst_33961 = inst_33964;
var state_33989__$1 = (function (){var statearr_34011 = state_33989;
(statearr_34011[(10)] = inst_33974);

(statearr_34011[(7)] = inst_33961);

return statearr_34011;
})();
var statearr_34013_35690 = state_33989__$1;
(statearr_34013_35690[(2)] = null);

(statearr_34013_35690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (9))){
var inst_33964 = (state_33989[(8)]);
var state_33989__$1 = state_33989;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33989__$1,(11),out,inst_33964);
} else {
if((state_val_33993 === (5))){
var inst_33961 = (state_33989[(7)]);
var inst_33964 = (state_33989[(8)]);
var inst_33969 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33964,inst_33961);
var state_33989__$1 = state_33989;
if(inst_33969){
var statearr_34023_35691 = state_33989__$1;
(statearr_34023_35691[(1)] = (8));

} else {
var statearr_34024_35696 = state_33989__$1;
(statearr_34024_35696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (10))){
var inst_33977 = (state_33989[(2)]);
var state_33989__$1 = state_33989;
var statearr_34026_35698 = state_33989__$1;
(statearr_34026_35698[(2)] = inst_33977);

(statearr_34026_35698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (8))){
var inst_33961 = (state_33989[(7)]);
var tmp34021 = inst_33961;
var inst_33961__$1 = tmp34021;
var state_33989__$1 = (function (){var statearr_34028 = state_33989;
(statearr_34028[(7)] = inst_33961__$1);

return statearr_34028;
})();
var statearr_34032_35699 = state_33989__$1;
(statearr_34032_35699[(2)] = null);

(statearr_34032_35699[(1)] = (2));


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
var cljs$core$async$state_machine__29622__auto__ = null;
var cljs$core$async$state_machine__29622__auto____0 = (function (){
var statearr_34043 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34043[(0)] = cljs$core$async$state_machine__29622__auto__);

(statearr_34043[(1)] = (1));

return statearr_34043;
});
var cljs$core$async$state_machine__29622__auto____1 = (function (state_33989){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_33989);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e34044){var ex__29625__auto__ = e34044;
var statearr_34045_35702 = state_33989;
(statearr_34045_35702[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_33989[(4)]))){
var statearr_34046_35703 = state_33989;
(statearr_34046_35703[(1)] = cljs.core.first((state_33989[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35708 = state_33989;
state_33989 = G__35708;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$state_machine__29622__auto__ = function(state_33989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29622__auto____1.call(this,state_33989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29622__auto____0;
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29622__auto____1;
return cljs$core$async$state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_34053 = f__30326__auto__();
(statearr_34053[(6)] = c__30325__auto___35680);

return statearr_34053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34064 = arguments.length;
switch (G__34064) {
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
var c__30325__auto___35710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_34125){
var state_val_34126 = (state_34125[(1)]);
if((state_val_34126 === (7))){
var inst_34121 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34130_35711 = state_34125__$1;
(statearr_34130_35711[(2)] = inst_34121);

(statearr_34130_35711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (1))){
var inst_34077 = (new Array(n));
var inst_34078 = inst_34077;
var inst_34079 = (0);
var state_34125__$1 = (function (){var statearr_34132 = state_34125;
(statearr_34132[(7)] = inst_34079);

(statearr_34132[(8)] = inst_34078);

return statearr_34132;
})();
var statearr_34133_35712 = state_34125__$1;
(statearr_34133_35712[(2)] = null);

(statearr_34133_35712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (4))){
var inst_34084 = (state_34125[(9)]);
var inst_34084__$1 = (state_34125[(2)]);
var inst_34085 = (inst_34084__$1 == null);
var inst_34086 = cljs.core.not(inst_34085);
var state_34125__$1 = (function (){var statearr_34138 = state_34125;
(statearr_34138[(9)] = inst_34084__$1);

return statearr_34138;
})();
if(inst_34086){
var statearr_34139_35713 = state_34125__$1;
(statearr_34139_35713[(1)] = (5));

} else {
var statearr_34140_35714 = state_34125__$1;
(statearr_34140_35714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (15))){
var inst_34115 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34142_35715 = state_34125__$1;
(statearr_34142_35715[(2)] = inst_34115);

(statearr_34142_35715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (13))){
var state_34125__$1 = state_34125;
var statearr_34143_35716 = state_34125__$1;
(statearr_34143_35716[(2)] = null);

(statearr_34143_35716[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (6))){
var inst_34079 = (state_34125[(7)]);
var inst_34111 = (inst_34079 > (0));
var state_34125__$1 = state_34125;
if(cljs.core.truth_(inst_34111)){
var statearr_34144_35717 = state_34125__$1;
(statearr_34144_35717[(1)] = (12));

} else {
var statearr_34145_35718 = state_34125__$1;
(statearr_34145_35718[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (3))){
var inst_34123 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34125__$1,inst_34123);
} else {
if((state_val_34126 === (12))){
var inst_34078 = (state_34125[(8)]);
var inst_34113 = cljs.core.vec(inst_34078);
var state_34125__$1 = state_34125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34125__$1,(15),out,inst_34113);
} else {
if((state_val_34126 === (2))){
var state_34125__$1 = state_34125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34125__$1,(4),ch);
} else {
if((state_val_34126 === (11))){
var inst_34103 = (state_34125[(2)]);
var inst_34104 = (new Array(n));
var inst_34078 = inst_34104;
var inst_34079 = (0);
var state_34125__$1 = (function (){var statearr_34147 = state_34125;
(statearr_34147[(7)] = inst_34079);

(statearr_34147[(10)] = inst_34103);

(statearr_34147[(8)] = inst_34078);

return statearr_34147;
})();
var statearr_34149_35719 = state_34125__$1;
(statearr_34149_35719[(2)] = null);

(statearr_34149_35719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (9))){
var inst_34078 = (state_34125[(8)]);
var inst_34101 = cljs.core.vec(inst_34078);
var state_34125__$1 = state_34125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34125__$1,(11),out,inst_34101);
} else {
if((state_val_34126 === (5))){
var inst_34084 = (state_34125[(9)]);
var inst_34079 = (state_34125[(7)]);
var inst_34093 = (state_34125[(11)]);
var inst_34078 = (state_34125[(8)]);
var inst_34088 = (inst_34078[inst_34079] = inst_34084);
var inst_34093__$1 = (inst_34079 + (1));
var inst_34094 = (inst_34093__$1 < n);
var state_34125__$1 = (function (){var statearr_34156 = state_34125;
(statearr_34156[(12)] = inst_34088);

(statearr_34156[(11)] = inst_34093__$1);

return statearr_34156;
})();
if(cljs.core.truth_(inst_34094)){
var statearr_34158_35724 = state_34125__$1;
(statearr_34158_35724[(1)] = (8));

} else {
var statearr_34159_35725 = state_34125__$1;
(statearr_34159_35725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (14))){
var inst_34118 = (state_34125[(2)]);
var inst_34119 = cljs.core.async.close_BANG_(out);
var state_34125__$1 = (function (){var statearr_34161 = state_34125;
(statearr_34161[(13)] = inst_34118);

return statearr_34161;
})();
var statearr_34162_35728 = state_34125__$1;
(statearr_34162_35728[(2)] = inst_34119);

(statearr_34162_35728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (10))){
var inst_34107 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34166_35731 = state_34125__$1;
(statearr_34166_35731[(2)] = inst_34107);

(statearr_34166_35731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (8))){
var inst_34093 = (state_34125[(11)]);
var inst_34078 = (state_34125[(8)]);
var tmp34160 = inst_34078;
var inst_34078__$1 = tmp34160;
var inst_34079 = inst_34093;
var state_34125__$1 = (function (){var statearr_34174 = state_34125;
(statearr_34174[(7)] = inst_34079);

(statearr_34174[(8)] = inst_34078__$1);

return statearr_34174;
})();
var statearr_34176_35732 = state_34125__$1;
(statearr_34176_35732[(2)] = null);

(statearr_34176_35732[(1)] = (2));


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
var cljs$core$async$state_machine__29622__auto__ = null;
var cljs$core$async$state_machine__29622__auto____0 = (function (){
var statearr_34181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34181[(0)] = cljs$core$async$state_machine__29622__auto__);

(statearr_34181[(1)] = (1));

return statearr_34181;
});
var cljs$core$async$state_machine__29622__auto____1 = (function (state_34125){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_34125);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e34182){var ex__29625__auto__ = e34182;
var statearr_34183_35735 = state_34125;
(statearr_34183_35735[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_34125[(4)]))){
var statearr_34184_35736 = state_34125;
(statearr_34184_35736[(1)] = cljs.core.first((state_34125[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35737 = state_34125;
state_34125 = G__35737;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$state_machine__29622__auto__ = function(state_34125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29622__auto____1.call(this,state_34125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29622__auto____0;
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29622__auto____1;
return cljs$core$async$state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_34185 = f__30326__auto__();
(statearr_34185[(6)] = c__30325__auto___35710);

return statearr_34185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34190 = arguments.length;
switch (G__34190) {
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
var c__30325__auto___35742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_34241){
var state_val_34242 = (state_34241[(1)]);
if((state_val_34242 === (7))){
var inst_34237 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34245_35747 = state_34241__$1;
(statearr_34245_35747[(2)] = inst_34237);

(statearr_34245_35747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (1))){
var inst_34192 = [];
var inst_34193 = inst_34192;
var inst_34194 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34241__$1 = (function (){var statearr_34252 = state_34241;
(statearr_34252[(7)] = inst_34194);

(statearr_34252[(8)] = inst_34193);

return statearr_34252;
})();
var statearr_34253_35749 = state_34241__$1;
(statearr_34253_35749[(2)] = null);

(statearr_34253_35749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (4))){
var inst_34197 = (state_34241[(9)]);
var inst_34197__$1 = (state_34241[(2)]);
var inst_34198 = (inst_34197__$1 == null);
var inst_34199 = cljs.core.not(inst_34198);
var state_34241__$1 = (function (){var statearr_34258 = state_34241;
(statearr_34258[(9)] = inst_34197__$1);

return statearr_34258;
})();
if(inst_34199){
var statearr_34259_35750 = state_34241__$1;
(statearr_34259_35750[(1)] = (5));

} else {
var statearr_34260_35751 = state_34241__$1;
(statearr_34260_35751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (15))){
var inst_34193 = (state_34241[(8)]);
var inst_34228 = cljs.core.vec(inst_34193);
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34241__$1,(18),out,inst_34228);
} else {
if((state_val_34242 === (13))){
var inst_34223 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34265_35752 = state_34241__$1;
(statearr_34265_35752[(2)] = inst_34223);

(statearr_34265_35752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (6))){
var inst_34193 = (state_34241[(8)]);
var inst_34225 = inst_34193.length;
var inst_34226 = (inst_34225 > (0));
var state_34241__$1 = state_34241;
if(cljs.core.truth_(inst_34226)){
var statearr_34266_35753 = state_34241__$1;
(statearr_34266_35753[(1)] = (15));

} else {
var statearr_34267_35754 = state_34241__$1;
(statearr_34267_35754[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (17))){
var inst_34234 = (state_34241[(2)]);
var inst_34235 = cljs.core.async.close_BANG_(out);
var state_34241__$1 = (function (){var statearr_34268 = state_34241;
(statearr_34268[(10)] = inst_34234);

return statearr_34268;
})();
var statearr_34269_35756 = state_34241__$1;
(statearr_34269_35756[(2)] = inst_34235);

(statearr_34269_35756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (3))){
var inst_34239 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34241__$1,inst_34239);
} else {
if((state_val_34242 === (12))){
var inst_34193 = (state_34241[(8)]);
var inst_34212 = cljs.core.vec(inst_34193);
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34241__$1,(14),out,inst_34212);
} else {
if((state_val_34242 === (2))){
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34241__$1,(4),ch);
} else {
if((state_val_34242 === (11))){
var inst_34193 = (state_34241[(8)]);
var inst_34201 = (state_34241[(11)]);
var inst_34197 = (state_34241[(9)]);
var inst_34209 = inst_34193.push(inst_34197);
var tmp34276 = inst_34193;
var inst_34193__$1 = tmp34276;
var inst_34194 = inst_34201;
var state_34241__$1 = (function (){var statearr_34284 = state_34241;
(statearr_34284[(7)] = inst_34194);

(statearr_34284[(8)] = inst_34193__$1);

(statearr_34284[(12)] = inst_34209);

return statearr_34284;
})();
var statearr_34286_35757 = state_34241__$1;
(statearr_34286_35757[(2)] = null);

(statearr_34286_35757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (9))){
var inst_34194 = (state_34241[(7)]);
var inst_34205 = cljs.core.keyword_identical_QMARK_(inst_34194,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34241__$1 = state_34241;
var statearr_34287_35759 = state_34241__$1;
(statearr_34287_35759[(2)] = inst_34205);

(statearr_34287_35759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (5))){
var inst_34194 = (state_34241[(7)]);
var inst_34202 = (state_34241[(13)]);
var inst_34201 = (state_34241[(11)]);
var inst_34197 = (state_34241[(9)]);
var inst_34201__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34197) : f.call(null,inst_34197));
var inst_34202__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34201__$1,inst_34194);
var state_34241__$1 = (function (){var statearr_34289 = state_34241;
(statearr_34289[(13)] = inst_34202__$1);

(statearr_34289[(11)] = inst_34201__$1);

return statearr_34289;
})();
if(inst_34202__$1){
var statearr_34292_35763 = state_34241__$1;
(statearr_34292_35763[(1)] = (8));

} else {
var statearr_34294_35764 = state_34241__$1;
(statearr_34294_35764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (14))){
var inst_34201 = (state_34241[(11)]);
var inst_34197 = (state_34241[(9)]);
var inst_34214 = (state_34241[(2)]);
var inst_34219 = [];
var inst_34220 = inst_34219.push(inst_34197);
var inst_34193 = inst_34219;
var inst_34194 = inst_34201;
var state_34241__$1 = (function (){var statearr_34296 = state_34241;
(statearr_34296[(7)] = inst_34194);

(statearr_34296[(8)] = inst_34193);

(statearr_34296[(14)] = inst_34220);

(statearr_34296[(15)] = inst_34214);

return statearr_34296;
})();
var statearr_34298_35767 = state_34241__$1;
(statearr_34298_35767[(2)] = null);

(statearr_34298_35767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (16))){
var state_34241__$1 = state_34241;
var statearr_34299_35768 = state_34241__$1;
(statearr_34299_35768[(2)] = null);

(statearr_34299_35768[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (10))){
var inst_34207 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
if(cljs.core.truth_(inst_34207)){
var statearr_34300_35769 = state_34241__$1;
(statearr_34300_35769[(1)] = (11));

} else {
var statearr_34301_35770 = state_34241__$1;
(statearr_34301_35770[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (18))){
var inst_34230 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34302_35771 = state_34241__$1;
(statearr_34302_35771[(2)] = inst_34230);

(statearr_34302_35771[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (8))){
var inst_34202 = (state_34241[(13)]);
var state_34241__$1 = state_34241;
var statearr_34303_35775 = state_34241__$1;
(statearr_34303_35775[(2)] = inst_34202);

(statearr_34303_35775[(1)] = (10));


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
var cljs$core$async$state_machine__29622__auto__ = null;
var cljs$core$async$state_machine__29622__auto____0 = (function (){
var statearr_34309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34309[(0)] = cljs$core$async$state_machine__29622__auto__);

(statearr_34309[(1)] = (1));

return statearr_34309;
});
var cljs$core$async$state_machine__29622__auto____1 = (function (state_34241){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_34241);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e34315){var ex__29625__auto__ = e34315;
var statearr_34316_35780 = state_34241;
(statearr_34316_35780[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_34241[(4)]))){
var statearr_34318_35781 = state_34241;
(statearr_34318_35781[(1)] = cljs.core.first((state_34241[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35782 = state_34241;
state_34241 = G__35782;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
cljs$core$async$state_machine__29622__auto__ = function(state_34241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29622__auto____1.call(this,state_34241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29622__auto____0;
cljs$core$async$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29622__auto____1;
return cljs$core$async$state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_34320 = f__30326__auto__();
(statearr_34320[(6)] = c__30325__auto___35742);

return statearr_34320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
