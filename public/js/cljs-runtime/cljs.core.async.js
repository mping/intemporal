goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28124 = arguments.length;
switch (G__28124) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28125 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28125 = (function (f,blockable,meta28126){
this.f = f;
this.blockable = blockable;
this.meta28126 = meta28126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28127,meta28126__$1){
var self__ = this;
var _28127__$1 = this;
return (new cljs.core.async.t_cljs$core$async28125(self__.f,self__.blockable,meta28126__$1));
}));

(cljs.core.async.t_cljs$core$async28125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28127){
var self__ = this;
var _28127__$1 = this;
return self__.meta28126;
}));

(cljs.core.async.t_cljs$core$async28125.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28125.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28126","meta28126",-779395752,null)], null);
}));

(cljs.core.async.t_cljs$core$async28125.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28125");

(cljs.core.async.t_cljs$core$async28125.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async28125");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28125.
 */
cljs.core.async.__GT_t_cljs$core$async28125 = (function cljs$core$async$__GT_t_cljs$core$async28125(f__$1,blockable__$1,meta28126){
return (new cljs.core.async.t_cljs$core$async28125(f__$1,blockable__$1,meta28126));
});

}

return (new cljs.core.async.t_cljs$core$async28125(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28158 = arguments.length;
switch (G__28158) {
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
var G__28169 = arguments.length;
switch (G__28169) {
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
var G__28182 = arguments.length;
switch (G__28182) {
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
var val_31165 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31165) : fn1.call(null,val_31165));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31165) : fn1.call(null,val_31165));
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
var G__28206 = arguments.length;
switch (G__28206) {
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
var n__5636__auto___31170 = n;
var x_31171 = (0);
while(true){
if((x_31171 < n__5636__auto___31170)){
(a[x_31171] = x_31171);

var G__31172 = (x_31171 + (1));
x_31171 = G__31172;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28242 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28242 = (function (flag,meta28243){
this.flag = flag;
this.meta28243 = meta28243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28244,meta28243__$1){
var self__ = this;
var _28244__$1 = this;
return (new cljs.core.async.t_cljs$core$async28242(self__.flag,meta28243__$1));
}));

(cljs.core.async.t_cljs$core$async28242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28244){
var self__ = this;
var _28244__$1 = this;
return self__.meta28243;
}));

(cljs.core.async.t_cljs$core$async28242.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28242.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28242.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28242.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28243","meta28243",1963879541,null)], null);
}));

(cljs.core.async.t_cljs$core$async28242.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28242");

(cljs.core.async.t_cljs$core$async28242.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async28242");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28242.
 */
cljs.core.async.__GT_t_cljs$core$async28242 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28242(flag__$1,meta28243){
return (new cljs.core.async.t_cljs$core$async28242(flag__$1,meta28243));
});

}

return (new cljs.core.async.t_cljs$core$async28242(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28255 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28255 = (function (flag,cb,meta28256){
this.flag = flag;
this.cb = cb;
this.meta28256 = meta28256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28257,meta28256__$1){
var self__ = this;
var _28257__$1 = this;
return (new cljs.core.async.t_cljs$core$async28255(self__.flag,self__.cb,meta28256__$1));
}));

(cljs.core.async.t_cljs$core$async28255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28257){
var self__ = this;
var _28257__$1 = this;
return self__.meta28256;
}));

(cljs.core.async.t_cljs$core$async28255.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28255.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28255.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28255.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28256","meta28256",1499843145,null)], null);
}));

(cljs.core.async.t_cljs$core$async28255.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28255");

(cljs.core.async.t_cljs$core$async28255.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async28255");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28255.
 */
cljs.core.async.__GT_t_cljs$core$async28255 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28255(flag__$1,cb__$1,meta28256){
return (new cljs.core.async.t_cljs$core$async28255(flag__$1,cb__$1,meta28256));
});

}

return (new cljs.core.async.t_cljs$core$async28255(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28285_SHARP_){
var G__28293 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28285_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28293) : fret.call(null,G__28293));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28286_SHARP_){
var G__28297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28286_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28297) : fret.call(null,G__28297));
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
var G__31179 = (i + (1));
i = G__31179;
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
var len__5769__auto___31181 = arguments.length;
var i__5770__auto___31182 = (0);
while(true){
if((i__5770__auto___31182 < len__5769__auto___31181)){
args__5775__auto__.push((arguments[i__5770__auto___31182]));

var G__31183 = (i__5770__auto___31182 + (1));
i__5770__auto___31182 = G__31183;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28326){
var map__28327 = p__28326;
var map__28327__$1 = cljs.core.__destructure_map(map__28327);
var opts = map__28327__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28312){
var G__28314 = cljs.core.first(seq28312);
var seq28312__$1 = cljs.core.next(seq28312);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28314,seq28312__$1);
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
var G__28353 = arguments.length;
switch (G__28353) {
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
var c__28047__auto___31193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_28393){
var state_val_28394 = (state_28393[(1)]);
if((state_val_28394 === (7))){
var inst_28387 = (state_28393[(2)]);
var state_28393__$1 = state_28393;
var statearr_28395_31194 = state_28393__$1;
(statearr_28395_31194[(2)] = inst_28387);

(statearr_28395_31194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28394 === (1))){
var state_28393__$1 = state_28393;
var statearr_28396_31195 = state_28393__$1;
(statearr_28396_31195[(2)] = null);

(statearr_28396_31195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28394 === (4))){
var inst_28368 = (state_28393[(7)]);
var inst_28368__$1 = (state_28393[(2)]);
var inst_28369 = (inst_28368__$1 == null);
var state_28393__$1 = (function (){var statearr_28402 = state_28393;
(statearr_28402[(7)] = inst_28368__$1);

return statearr_28402;
})();
if(cljs.core.truth_(inst_28369)){
var statearr_28403_31196 = state_28393__$1;
(statearr_28403_31196[(1)] = (5));

} else {
var statearr_28404_31197 = state_28393__$1;
(statearr_28404_31197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28394 === (13))){
var state_28393__$1 = state_28393;
var statearr_28405_31198 = state_28393__$1;
(statearr_28405_31198[(2)] = null);

(statearr_28405_31198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28394 === (6))){
var inst_28368 = (state_28393[(7)]);
var state_28393__$1 = state_28393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28393__$1,(11),to,inst_28368);
} else {
if((state_val_28394 === (3))){
var inst_28389 = (state_28393[(2)]);
var state_28393__$1 = state_28393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28393__$1,inst_28389);
} else {
if((state_val_28394 === (12))){
var state_28393__$1 = state_28393;
var statearr_28417_31199 = state_28393__$1;
(statearr_28417_31199[(2)] = null);

(statearr_28417_31199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28394 === (2))){
var state_28393__$1 = state_28393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28393__$1,(4),from);
} else {
if((state_val_28394 === (11))){
var inst_28379 = (state_28393[(2)]);
var state_28393__$1 = state_28393;
if(cljs.core.truth_(inst_28379)){
var statearr_28427_31200 = state_28393__$1;
(statearr_28427_31200[(1)] = (12));

} else {
var statearr_28429_31201 = state_28393__$1;
(statearr_28429_31201[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28394 === (9))){
var state_28393__$1 = state_28393;
var statearr_28431_31202 = state_28393__$1;
(statearr_28431_31202[(2)] = null);

(statearr_28431_31202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28394 === (5))){
var state_28393__$1 = state_28393;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28436_31203 = state_28393__$1;
(statearr_28436_31203[(1)] = (8));

} else {
var statearr_28438_31204 = state_28393__$1;
(statearr_28438_31204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28394 === (14))){
var inst_28385 = (state_28393[(2)]);
var state_28393__$1 = state_28393;
var statearr_28444_31206 = state_28393__$1;
(statearr_28444_31206[(2)] = inst_28385);

(statearr_28444_31206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28394 === (10))){
var inst_28376 = (state_28393[(2)]);
var state_28393__$1 = state_28393;
var statearr_28445_31207 = state_28393__$1;
(statearr_28445_31207[(2)] = inst_28376);

(statearr_28445_31207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28394 === (8))){
var inst_28372 = cljs.core.async.close_BANG_(to);
var state_28393__$1 = state_28393;
var statearr_28446_31210 = state_28393__$1;
(statearr_28446_31210[(2)] = inst_28372);

(statearr_28446_31210[(1)] = (10));


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
var cljs$core$async$state_machine__27338__auto__ = null;
var cljs$core$async$state_machine__27338__auto____0 = (function (){
var statearr_28456 = [null,null,null,null,null,null,null,null];
(statearr_28456[(0)] = cljs$core$async$state_machine__27338__auto__);

(statearr_28456[(1)] = (1));

return statearr_28456;
});
var cljs$core$async$state_machine__27338__auto____1 = (function (state_28393){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_28393);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e28458){var ex__27341__auto__ = e28458;
var statearr_28459_31213 = state_28393;
(statearr_28459_31213[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_28393[(4)]))){
var statearr_28464_31214 = state_28393;
(statearr_28464_31214[(1)] = cljs.core.first((state_28393[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31215 = state_28393;
state_28393 = G__31215;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$state_machine__27338__auto__ = function(state_28393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27338__auto____1.call(this,state_28393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27338__auto____0;
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27338__auto____1;
return cljs$core$async$state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_28472 = f__28048__auto__();
(statearr_28472[(6)] = c__28047__auto___31193);

return statearr_28472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
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
var process__$1 = (function (p__28492){
var vec__28494 = p__28492;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28494,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28494,(1),null);
var job = vec__28494;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28047__auto___31217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_28504){
var state_val_28505 = (state_28504[(1)]);
if((state_val_28505 === (1))){
var state_28504__$1 = state_28504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28504__$1,(2),res,v);
} else {
if((state_val_28505 === (2))){
var inst_28500 = (state_28504[(2)]);
var inst_28502 = cljs.core.async.close_BANG_(res);
var state_28504__$1 = (function (){var statearr_28510 = state_28504;
(statearr_28510[(7)] = inst_28500);

return statearr_28510;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28504__$1,inst_28502);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____0 = (function (){
var statearr_28512 = [null,null,null,null,null,null,null,null];
(statearr_28512[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__);

(statearr_28512[(1)] = (1));

return statearr_28512;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____1 = (function (state_28504){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_28504);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e28514){var ex__27341__auto__ = e28514;
var statearr_28515_31220 = state_28504;
(statearr_28515_31220[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_28504[(4)]))){
var statearr_28516_31221 = state_28504;
(statearr_28516_31221[(1)] = cljs.core.first((state_28504[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31222 = state_28504;
state_28504 = G__31222;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__ = function(state_28504){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____1.call(this,state_28504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_28521 = f__28048__auto__();
(statearr_28521[(6)] = c__28047__auto___31217);

return statearr_28521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__28523){
var vec__28526 = p__28523;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28526,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28526,(1),null);
var job = vec__28526;
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
var n__5636__auto___31224 = n;
var __31226 = (0);
while(true){
if((__31226 < n__5636__auto___31224)){
var G__28534_31227 = type;
var G__28534_31228__$1 = (((G__28534_31227 instanceof cljs.core.Keyword))?G__28534_31227.fqn:null);
switch (G__28534_31228__$1) {
case "compute":
var c__28047__auto___31230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31226,c__28047__auto___31230,G__28534_31227,G__28534_31228__$1,n__5636__auto___31224,jobs,results,process__$1,async){
return (function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = ((function (__31226,c__28047__auto___31230,G__28534_31227,G__28534_31228__$1,n__5636__auto___31224,jobs,results,process__$1,async){
return (function (state_28547){
var state_val_28548 = (state_28547[(1)]);
if((state_val_28548 === (1))){
var state_28547__$1 = state_28547;
var statearr_28558_31231 = state_28547__$1;
(statearr_28558_31231[(2)] = null);

(statearr_28558_31231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28548 === (2))){
var state_28547__$1 = state_28547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28547__$1,(4),jobs);
} else {
if((state_val_28548 === (3))){
var inst_28545 = (state_28547[(2)]);
var state_28547__$1 = state_28547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28547__$1,inst_28545);
} else {
if((state_val_28548 === (4))){
var inst_28537 = (state_28547[(2)]);
var inst_28538 = process__$1(inst_28537);
var state_28547__$1 = state_28547;
if(cljs.core.truth_(inst_28538)){
var statearr_28562_31232 = state_28547__$1;
(statearr_28562_31232[(1)] = (5));

} else {
var statearr_28563_31233 = state_28547__$1;
(statearr_28563_31233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28548 === (5))){
var state_28547__$1 = state_28547;
var statearr_28564_31234 = state_28547__$1;
(statearr_28564_31234[(2)] = null);

(statearr_28564_31234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28548 === (6))){
var state_28547__$1 = state_28547;
var statearr_28565_31235 = state_28547__$1;
(statearr_28565_31235[(2)] = null);

(statearr_28565_31235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28548 === (7))){
var inst_28543 = (state_28547[(2)]);
var state_28547__$1 = state_28547;
var statearr_28566_31236 = state_28547__$1;
(statearr_28566_31236[(2)] = inst_28543);

(statearr_28566_31236[(1)] = (3));


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
});})(__31226,c__28047__auto___31230,G__28534_31227,G__28534_31228__$1,n__5636__auto___31224,jobs,results,process__$1,async))
;
return ((function (__31226,switch__27337__auto__,c__28047__auto___31230,G__28534_31227,G__28534_31228__$1,n__5636__auto___31224,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____0 = (function (){
var statearr_28569 = [null,null,null,null,null,null,null];
(statearr_28569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__);

(statearr_28569[(1)] = (1));

return statearr_28569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____1 = (function (state_28547){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_28547);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e28572){var ex__27341__auto__ = e28572;
var statearr_28573_31240 = state_28547;
(statearr_28573_31240[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_28547[(4)]))){
var statearr_28575_31242 = state_28547;
(statearr_28575_31242[(1)] = cljs.core.first((state_28547[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31243 = state_28547;
state_28547 = G__31243;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__ = function(state_28547){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____1.call(this,state_28547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__;
})()
;})(__31226,switch__27337__auto__,c__28047__auto___31230,G__28534_31227,G__28534_31228__$1,n__5636__auto___31224,jobs,results,process__$1,async))
})();
var state__28049__auto__ = (function (){var statearr_28578 = f__28048__auto__();
(statearr_28578[(6)] = c__28047__auto___31230);

return statearr_28578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
});})(__31226,c__28047__auto___31230,G__28534_31227,G__28534_31228__$1,n__5636__auto___31224,jobs,results,process__$1,async))
);


break;
case "async":
var c__28047__auto___31244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31226,c__28047__auto___31244,G__28534_31227,G__28534_31228__$1,n__5636__auto___31224,jobs,results,process__$1,async){
return (function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = ((function (__31226,c__28047__auto___31244,G__28534_31227,G__28534_31228__$1,n__5636__auto___31224,jobs,results,process__$1,async){
return (function (state_28592){
var state_val_28593 = (state_28592[(1)]);
if((state_val_28593 === (1))){
var state_28592__$1 = state_28592;
var statearr_28594_31246 = state_28592__$1;
(statearr_28594_31246[(2)] = null);

(statearr_28594_31246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28593 === (2))){
var state_28592__$1 = state_28592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28592__$1,(4),jobs);
} else {
if((state_val_28593 === (3))){
var inst_28590 = (state_28592[(2)]);
var state_28592__$1 = state_28592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28592__$1,inst_28590);
} else {
if((state_val_28593 === (4))){
var inst_28582 = (state_28592[(2)]);
var inst_28583 = async(inst_28582);
var state_28592__$1 = state_28592;
if(cljs.core.truth_(inst_28583)){
var statearr_28599_31248 = state_28592__$1;
(statearr_28599_31248[(1)] = (5));

} else {
var statearr_28601_31249 = state_28592__$1;
(statearr_28601_31249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28593 === (5))){
var state_28592__$1 = state_28592;
var statearr_28604_31250 = state_28592__$1;
(statearr_28604_31250[(2)] = null);

(statearr_28604_31250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28593 === (6))){
var state_28592__$1 = state_28592;
var statearr_28606_31251 = state_28592__$1;
(statearr_28606_31251[(2)] = null);

(statearr_28606_31251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28593 === (7))){
var inst_28588 = (state_28592[(2)]);
var state_28592__$1 = state_28592;
var statearr_28607_31253 = state_28592__$1;
(statearr_28607_31253[(2)] = inst_28588);

(statearr_28607_31253[(1)] = (3));


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
});})(__31226,c__28047__auto___31244,G__28534_31227,G__28534_31228__$1,n__5636__auto___31224,jobs,results,process__$1,async))
;
return ((function (__31226,switch__27337__auto__,c__28047__auto___31244,G__28534_31227,G__28534_31228__$1,n__5636__auto___31224,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____0 = (function (){
var statearr_28610 = [null,null,null,null,null,null,null];
(statearr_28610[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__);

(statearr_28610[(1)] = (1));

return statearr_28610;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____1 = (function (state_28592){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_28592);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e28613){var ex__27341__auto__ = e28613;
var statearr_28614_31256 = state_28592;
(statearr_28614_31256[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_28592[(4)]))){
var statearr_28615_31257 = state_28592;
(statearr_28615_31257[(1)] = cljs.core.first((state_28592[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31259 = state_28592;
state_28592 = G__31259;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__ = function(state_28592){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____1.call(this,state_28592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__;
})()
;})(__31226,switch__27337__auto__,c__28047__auto___31244,G__28534_31227,G__28534_31228__$1,n__5636__auto___31224,jobs,results,process__$1,async))
})();
var state__28049__auto__ = (function (){var statearr_28617 = f__28048__auto__();
(statearr_28617[(6)] = c__28047__auto___31244);

return statearr_28617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
});})(__31226,c__28047__auto___31244,G__28534_31227,G__28534_31228__$1,n__5636__auto___31224,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28534_31228__$1)].join('')));

}

var G__31261 = (__31226 + (1));
__31226 = G__31261;
continue;
} else {
}
break;
}

var c__28047__auto___31262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_28648){
var state_val_28649 = (state_28648[(1)]);
if((state_val_28649 === (7))){
var inst_28644 = (state_28648[(2)]);
var state_28648__$1 = state_28648;
var statearr_28653_31264 = state_28648__$1;
(statearr_28653_31264[(2)] = inst_28644);

(statearr_28653_31264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (1))){
var state_28648__$1 = state_28648;
var statearr_28656_31265 = state_28648__$1;
(statearr_28656_31265[(2)] = null);

(statearr_28656_31265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (4))){
var inst_28624 = (state_28648[(7)]);
var inst_28624__$1 = (state_28648[(2)]);
var inst_28625 = (inst_28624__$1 == null);
var state_28648__$1 = (function (){var statearr_28658 = state_28648;
(statearr_28658[(7)] = inst_28624__$1);

return statearr_28658;
})();
if(cljs.core.truth_(inst_28625)){
var statearr_28661_31266 = state_28648__$1;
(statearr_28661_31266[(1)] = (5));

} else {
var statearr_28664_31267 = state_28648__$1;
(statearr_28664_31267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (6))){
var inst_28624 = (state_28648[(7)]);
var inst_28630 = (state_28648[(8)]);
var inst_28630__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28633 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28636 = [inst_28624,inst_28630__$1];
var inst_28637 = (new cljs.core.PersistentVector(null,2,(5),inst_28633,inst_28636,null));
var state_28648__$1 = (function (){var statearr_28666 = state_28648;
(statearr_28666[(8)] = inst_28630__$1);

return statearr_28666;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28648__$1,(8),jobs,inst_28637);
} else {
if((state_val_28649 === (3))){
var inst_28646 = (state_28648[(2)]);
var state_28648__$1 = state_28648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28648__$1,inst_28646);
} else {
if((state_val_28649 === (2))){
var state_28648__$1 = state_28648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28648__$1,(4),from);
} else {
if((state_val_28649 === (9))){
var inst_28641 = (state_28648[(2)]);
var state_28648__$1 = (function (){var statearr_28672 = state_28648;
(statearr_28672[(9)] = inst_28641);

return statearr_28672;
})();
var statearr_28673_31268 = state_28648__$1;
(statearr_28673_31268[(2)] = null);

(statearr_28673_31268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (5))){
var inst_28628 = cljs.core.async.close_BANG_(jobs);
var state_28648__$1 = state_28648;
var statearr_28675_31269 = state_28648__$1;
(statearr_28675_31269[(2)] = inst_28628);

(statearr_28675_31269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (8))){
var inst_28630 = (state_28648[(8)]);
var inst_28639 = (state_28648[(2)]);
var state_28648__$1 = (function (){var statearr_28678 = state_28648;
(statearr_28678[(10)] = inst_28639);

return statearr_28678;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28648__$1,(9),results,inst_28630);
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
var cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____0 = (function (){
var statearr_28681 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28681[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__);

(statearr_28681[(1)] = (1));

return statearr_28681;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____1 = (function (state_28648){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_28648);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e28684){var ex__27341__auto__ = e28684;
var statearr_28687_31270 = state_28648;
(statearr_28687_31270[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_28648[(4)]))){
var statearr_28688_31271 = state_28648;
(statearr_28688_31271[(1)] = cljs.core.first((state_28648[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31274 = state_28648;
state_28648 = G__31274;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__ = function(state_28648){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____1.call(this,state_28648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_28693 = f__28048__auto__();
(statearr_28693[(6)] = c__28047__auto___31262);

return statearr_28693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
}));


var c__28047__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_28743){
var state_val_28744 = (state_28743[(1)]);
if((state_val_28744 === (7))){
var inst_28737 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28752_31276 = state_28743__$1;
(statearr_28752_31276[(2)] = inst_28737);

(statearr_28752_31276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (20))){
var state_28743__$1 = state_28743;
var statearr_28753_31277 = state_28743__$1;
(statearr_28753_31277[(2)] = null);

(statearr_28753_31277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (1))){
var state_28743__$1 = state_28743;
var statearr_28755_31278 = state_28743__$1;
(statearr_28755_31278[(2)] = null);

(statearr_28755_31278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (4))){
var inst_28698 = (state_28743[(7)]);
var inst_28698__$1 = (state_28743[(2)]);
var inst_28702 = (inst_28698__$1 == null);
var state_28743__$1 = (function (){var statearr_28762 = state_28743;
(statearr_28762[(7)] = inst_28698__$1);

return statearr_28762;
})();
if(cljs.core.truth_(inst_28702)){
var statearr_28763_31279 = state_28743__$1;
(statearr_28763_31279[(1)] = (5));

} else {
var statearr_28767_31280 = state_28743__$1;
(statearr_28767_31280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (15))){
var inst_28715 = (state_28743[(8)]);
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28743__$1,(18),to,inst_28715);
} else {
if((state_val_28744 === (21))){
var inst_28732 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28772_31281 = state_28743__$1;
(statearr_28772_31281[(2)] = inst_28732);

(statearr_28772_31281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (13))){
var inst_28734 = (state_28743[(2)]);
var state_28743__$1 = (function (){var statearr_28775 = state_28743;
(statearr_28775[(9)] = inst_28734);

return statearr_28775;
})();
var statearr_28778_31282 = state_28743__$1;
(statearr_28778_31282[(2)] = null);

(statearr_28778_31282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (6))){
var inst_28698 = (state_28743[(7)]);
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28743__$1,(11),inst_28698);
} else {
if((state_val_28744 === (17))){
var inst_28726 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
if(cljs.core.truth_(inst_28726)){
var statearr_28786_31284 = state_28743__$1;
(statearr_28786_31284[(1)] = (19));

} else {
var statearr_28787_31285 = state_28743__$1;
(statearr_28787_31285[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (3))){
var inst_28739 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28743__$1,inst_28739);
} else {
if((state_val_28744 === (12))){
var inst_28711 = (state_28743[(10)]);
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28743__$1,(14),inst_28711);
} else {
if((state_val_28744 === (2))){
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28743__$1,(4),results);
} else {
if((state_val_28744 === (19))){
var state_28743__$1 = state_28743;
var statearr_28794_31289 = state_28743__$1;
(statearr_28794_31289[(2)] = null);

(statearr_28794_31289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (11))){
var inst_28711 = (state_28743[(2)]);
var state_28743__$1 = (function (){var statearr_28798 = state_28743;
(statearr_28798[(10)] = inst_28711);

return statearr_28798;
})();
var statearr_28800_31291 = state_28743__$1;
(statearr_28800_31291[(2)] = null);

(statearr_28800_31291[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (9))){
var state_28743__$1 = state_28743;
var statearr_28801_31293 = state_28743__$1;
(statearr_28801_31293[(2)] = null);

(statearr_28801_31293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (5))){
var state_28743__$1 = state_28743;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28804_31295 = state_28743__$1;
(statearr_28804_31295[(1)] = (8));

} else {
var statearr_28805_31297 = state_28743__$1;
(statearr_28805_31297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (14))){
var inst_28718 = (state_28743[(11)]);
var inst_28715 = (state_28743[(8)]);
var inst_28715__$1 = (state_28743[(2)]);
var inst_28716 = (inst_28715__$1 == null);
var inst_28718__$1 = cljs.core.not(inst_28716);
var state_28743__$1 = (function (){var statearr_28809 = state_28743;
(statearr_28809[(11)] = inst_28718__$1);

(statearr_28809[(8)] = inst_28715__$1);

return statearr_28809;
})();
if(inst_28718__$1){
var statearr_28810_31299 = state_28743__$1;
(statearr_28810_31299[(1)] = (15));

} else {
var statearr_28811_31300 = state_28743__$1;
(statearr_28811_31300[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (16))){
var inst_28718 = (state_28743[(11)]);
var state_28743__$1 = state_28743;
var statearr_28815_31301 = state_28743__$1;
(statearr_28815_31301[(2)] = inst_28718);

(statearr_28815_31301[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (10))){
var inst_28708 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28817_31303 = state_28743__$1;
(statearr_28817_31303[(2)] = inst_28708);

(statearr_28817_31303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (18))){
var inst_28722 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28820_31306 = state_28743__$1;
(statearr_28820_31306[(2)] = inst_28722);

(statearr_28820_31306[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (8))){
var inst_28705 = cljs.core.async.close_BANG_(to);
var state_28743__$1 = state_28743;
var statearr_28824_31308 = state_28743__$1;
(statearr_28824_31308[(2)] = inst_28705);

(statearr_28824_31308[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____0 = (function (){
var statearr_28826 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28826[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__);

(statearr_28826[(1)] = (1));

return statearr_28826;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____1 = (function (state_28743){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_28743);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e28827){var ex__27341__auto__ = e28827;
var statearr_28830_31311 = state_28743;
(statearr_28830_31311[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_28743[(4)]))){
var statearr_28833_31313 = state_28743;
(statearr_28833_31313[(1)] = cljs.core.first((state_28743[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31314 = state_28743;
state_28743 = G__31314;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__ = function(state_28743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____1.call(this,state_28743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_28837 = f__28048__auto__();
(statearr_28837[(6)] = c__28047__auto__);

return statearr_28837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
}));

return c__28047__auto__;
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
var G__28847 = arguments.length;
switch (G__28847) {
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
var G__28864 = arguments.length;
switch (G__28864) {
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
var G__28881 = arguments.length;
switch (G__28881) {
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
var c__28047__auto___31327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_28912){
var state_val_28913 = (state_28912[(1)]);
if((state_val_28913 === (7))){
var inst_28908 = (state_28912[(2)]);
var state_28912__$1 = state_28912;
var statearr_28921_31328 = state_28912__$1;
(statearr_28921_31328[(2)] = inst_28908);

(statearr_28921_31328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (1))){
var state_28912__$1 = state_28912;
var statearr_28923_31329 = state_28912__$1;
(statearr_28923_31329[(2)] = null);

(statearr_28923_31329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (4))){
var inst_28887 = (state_28912[(7)]);
var inst_28887__$1 = (state_28912[(2)]);
var inst_28888 = (inst_28887__$1 == null);
var state_28912__$1 = (function (){var statearr_28927 = state_28912;
(statearr_28927[(7)] = inst_28887__$1);

return statearr_28927;
})();
if(cljs.core.truth_(inst_28888)){
var statearr_28931_31330 = state_28912__$1;
(statearr_28931_31330[(1)] = (5));

} else {
var statearr_28932_31331 = state_28912__$1;
(statearr_28932_31331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (13))){
var state_28912__$1 = state_28912;
var statearr_28935_31332 = state_28912__$1;
(statearr_28935_31332[(2)] = null);

(statearr_28935_31332[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (6))){
var inst_28887 = (state_28912[(7)]);
var inst_28895 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28887) : p.call(null,inst_28887));
var state_28912__$1 = state_28912;
if(cljs.core.truth_(inst_28895)){
var statearr_28940_31334 = state_28912__$1;
(statearr_28940_31334[(1)] = (9));

} else {
var statearr_28941_31335 = state_28912__$1;
(statearr_28941_31335[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (3))){
var inst_28910 = (state_28912[(2)]);
var state_28912__$1 = state_28912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28912__$1,inst_28910);
} else {
if((state_val_28913 === (12))){
var state_28912__$1 = state_28912;
var statearr_28943_31336 = state_28912__$1;
(statearr_28943_31336[(2)] = null);

(statearr_28943_31336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (2))){
var state_28912__$1 = state_28912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28912__$1,(4),ch);
} else {
if((state_val_28913 === (11))){
var inst_28887 = (state_28912[(7)]);
var inst_28899 = (state_28912[(2)]);
var state_28912__$1 = state_28912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28912__$1,(8),inst_28899,inst_28887);
} else {
if((state_val_28913 === (9))){
var state_28912__$1 = state_28912;
var statearr_28954_31337 = state_28912__$1;
(statearr_28954_31337[(2)] = tc);

(statearr_28954_31337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (5))){
var inst_28891 = cljs.core.async.close_BANG_(tc);
var inst_28893 = cljs.core.async.close_BANG_(fc);
var state_28912__$1 = (function (){var statearr_28955 = state_28912;
(statearr_28955[(8)] = inst_28891);

return statearr_28955;
})();
var statearr_28959_31339 = state_28912__$1;
(statearr_28959_31339[(2)] = inst_28893);

(statearr_28959_31339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (14))){
var inst_28906 = (state_28912[(2)]);
var state_28912__$1 = state_28912;
var statearr_28963_31340 = state_28912__$1;
(statearr_28963_31340[(2)] = inst_28906);

(statearr_28963_31340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (10))){
var state_28912__$1 = state_28912;
var statearr_28966_31341 = state_28912__$1;
(statearr_28966_31341[(2)] = fc);

(statearr_28966_31341[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (8))){
var inst_28901 = (state_28912[(2)]);
var state_28912__$1 = state_28912;
if(cljs.core.truth_(inst_28901)){
var statearr_28971_31342 = state_28912__$1;
(statearr_28971_31342[(1)] = (12));

} else {
var statearr_28972_31344 = state_28912__$1;
(statearr_28972_31344[(1)] = (13));

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
var cljs$core$async$state_machine__27338__auto__ = null;
var cljs$core$async$state_machine__27338__auto____0 = (function (){
var statearr_28977 = [null,null,null,null,null,null,null,null,null];
(statearr_28977[(0)] = cljs$core$async$state_machine__27338__auto__);

(statearr_28977[(1)] = (1));

return statearr_28977;
});
var cljs$core$async$state_machine__27338__auto____1 = (function (state_28912){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_28912);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e28980){var ex__27341__auto__ = e28980;
var statearr_28982_31345 = state_28912;
(statearr_28982_31345[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_28912[(4)]))){
var statearr_28983_31346 = state_28912;
(statearr_28983_31346[(1)] = cljs.core.first((state_28912[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31347 = state_28912;
state_28912 = G__31347;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$state_machine__27338__auto__ = function(state_28912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27338__auto____1.call(this,state_28912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27338__auto____0;
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27338__auto____1;
return cljs$core$async$state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_28986 = f__28048__auto__();
(statearr_28986[(6)] = c__28047__auto___31327);

return statearr_28986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
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
var c__28047__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_29021){
var state_val_29023 = (state_29021[(1)]);
if((state_val_29023 === (7))){
var inst_29016 = (state_29021[(2)]);
var state_29021__$1 = state_29021;
var statearr_29030_31350 = state_29021__$1;
(statearr_29030_31350[(2)] = inst_29016);

(statearr_29030_31350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29023 === (1))){
var inst_28995 = init;
var inst_28997 = inst_28995;
var state_29021__$1 = (function (){var statearr_29033 = state_29021;
(statearr_29033[(7)] = inst_28997);

return statearr_29033;
})();
var statearr_29034_31351 = state_29021__$1;
(statearr_29034_31351[(2)] = null);

(statearr_29034_31351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29023 === (4))){
var inst_29002 = (state_29021[(8)]);
var inst_29002__$1 = (state_29021[(2)]);
var inst_29003 = (inst_29002__$1 == null);
var state_29021__$1 = (function (){var statearr_29036 = state_29021;
(statearr_29036[(8)] = inst_29002__$1);

return statearr_29036;
})();
if(cljs.core.truth_(inst_29003)){
var statearr_29040_31353 = state_29021__$1;
(statearr_29040_31353[(1)] = (5));

} else {
var statearr_29041_31354 = state_29021__$1;
(statearr_29041_31354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29023 === (6))){
var inst_28997 = (state_29021[(7)]);
var inst_29002 = (state_29021[(8)]);
var inst_29006 = (state_29021[(9)]);
var inst_29006__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_28997,inst_29002) : f.call(null,inst_28997,inst_29002));
var inst_29007 = cljs.core.reduced_QMARK_(inst_29006__$1);
var state_29021__$1 = (function (){var statearr_29047 = state_29021;
(statearr_29047[(9)] = inst_29006__$1);

return statearr_29047;
})();
if(inst_29007){
var statearr_29049_31355 = state_29021__$1;
(statearr_29049_31355[(1)] = (8));

} else {
var statearr_29050_31356 = state_29021__$1;
(statearr_29050_31356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29023 === (3))){
var inst_29018 = (state_29021[(2)]);
var state_29021__$1 = state_29021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29021__$1,inst_29018);
} else {
if((state_val_29023 === (2))){
var state_29021__$1 = state_29021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29021__$1,(4),ch);
} else {
if((state_val_29023 === (9))){
var inst_29006 = (state_29021[(9)]);
var inst_28997 = inst_29006;
var state_29021__$1 = (function (){var statearr_29053 = state_29021;
(statearr_29053[(7)] = inst_28997);

return statearr_29053;
})();
var statearr_29054_31357 = state_29021__$1;
(statearr_29054_31357[(2)] = null);

(statearr_29054_31357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29023 === (5))){
var inst_28997 = (state_29021[(7)]);
var state_29021__$1 = state_29021;
var statearr_29058_31358 = state_29021__$1;
(statearr_29058_31358[(2)] = inst_28997);

(statearr_29058_31358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29023 === (10))){
var inst_29014 = (state_29021[(2)]);
var state_29021__$1 = state_29021;
var statearr_29064_31359 = state_29021__$1;
(statearr_29064_31359[(2)] = inst_29014);

(statearr_29064_31359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29023 === (8))){
var inst_29006 = (state_29021[(9)]);
var inst_29009 = cljs.core.deref(inst_29006);
var state_29021__$1 = state_29021;
var statearr_29065_31361 = state_29021__$1;
(statearr_29065_31361[(2)] = inst_29009);

(statearr_29065_31361[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__27338__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27338__auto____0 = (function (){
var statearr_29068 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29068[(0)] = cljs$core$async$reduce_$_state_machine__27338__auto__);

(statearr_29068[(1)] = (1));

return statearr_29068;
});
var cljs$core$async$reduce_$_state_machine__27338__auto____1 = (function (state_29021){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_29021);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e29070){var ex__27341__auto__ = e29070;
var statearr_29071_31362 = state_29021;
(statearr_29071_31362[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_29021[(4)]))){
var statearr_29074_31363 = state_29021;
(statearr_29074_31363[(1)] = cljs.core.first((state_29021[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31364 = state_29021;
state_29021 = G__31364;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27338__auto__ = function(state_29021){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27338__auto____1.call(this,state_29021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27338__auto____0;
cljs$core$async$reduce_$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27338__auto____1;
return cljs$core$async$reduce_$_state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_29078 = f__28048__auto__();
(statearr_29078[(6)] = c__28047__auto__);

return statearr_29078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
}));

return c__28047__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28047__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_29088){
var state_val_29089 = (state_29088[(1)]);
if((state_val_29089 === (1))){
var inst_29083 = cljs.core.async.reduce(f__$1,init,ch);
var state_29088__$1 = state_29088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29088__$1,(2),inst_29083);
} else {
if((state_val_29089 === (2))){
var inst_29085 = (state_29088[(2)]);
var inst_29086 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29085) : f__$1.call(null,inst_29085));
var state_29088__$1 = state_29088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29088__$1,inst_29086);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27338__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27338__auto____0 = (function (){
var statearr_29091 = [null,null,null,null,null,null,null];
(statearr_29091[(0)] = cljs$core$async$transduce_$_state_machine__27338__auto__);

(statearr_29091[(1)] = (1));

return statearr_29091;
});
var cljs$core$async$transduce_$_state_machine__27338__auto____1 = (function (state_29088){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_29088);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e29092){var ex__27341__auto__ = e29092;
var statearr_29093_31366 = state_29088;
(statearr_29093_31366[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_29088[(4)]))){
var statearr_29094_31367 = state_29088;
(statearr_29094_31367[(1)] = cljs.core.first((state_29088[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31368 = state_29088;
state_29088 = G__31368;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27338__auto__ = function(state_29088){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27338__auto____1.call(this,state_29088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27338__auto____0;
cljs$core$async$transduce_$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27338__auto____1;
return cljs$core$async$transduce_$_state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_29099 = f__28048__auto__();
(statearr_29099[(6)] = c__28047__auto__);

return statearr_29099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
}));

return c__28047__auto__;
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
var G__29108 = arguments.length;
switch (G__29108) {
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
var c__28047__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_29148){
var state_val_29149 = (state_29148[(1)]);
if((state_val_29149 === (7))){
var inst_29127 = (state_29148[(2)]);
var state_29148__$1 = state_29148;
var statearr_29152_31370 = state_29148__$1;
(statearr_29152_31370[(2)] = inst_29127);

(statearr_29152_31370[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (1))){
var inst_29119 = cljs.core.seq(coll);
var inst_29120 = inst_29119;
var state_29148__$1 = (function (){var statearr_29155 = state_29148;
(statearr_29155[(7)] = inst_29120);

return statearr_29155;
})();
var statearr_29156_31371 = state_29148__$1;
(statearr_29156_31371[(2)] = null);

(statearr_29156_31371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (4))){
var inst_29120 = (state_29148[(7)]);
var inst_29125 = cljs.core.first(inst_29120);
var state_29148__$1 = state_29148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29148__$1,(7),ch,inst_29125);
} else {
if((state_val_29149 === (13))){
var inst_29142 = (state_29148[(2)]);
var state_29148__$1 = state_29148;
var statearr_29157_31373 = state_29148__$1;
(statearr_29157_31373[(2)] = inst_29142);

(statearr_29157_31373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (6))){
var inst_29130 = (state_29148[(2)]);
var state_29148__$1 = state_29148;
if(cljs.core.truth_(inst_29130)){
var statearr_29159_31376 = state_29148__$1;
(statearr_29159_31376[(1)] = (8));

} else {
var statearr_29160_31377 = state_29148__$1;
(statearr_29160_31377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (3))){
var inst_29146 = (state_29148[(2)]);
var state_29148__$1 = state_29148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29148__$1,inst_29146);
} else {
if((state_val_29149 === (12))){
var state_29148__$1 = state_29148;
var statearr_29162_31380 = state_29148__$1;
(statearr_29162_31380[(2)] = null);

(statearr_29162_31380[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (2))){
var inst_29120 = (state_29148[(7)]);
var state_29148__$1 = state_29148;
if(cljs.core.truth_(inst_29120)){
var statearr_29163_31381 = state_29148__$1;
(statearr_29163_31381[(1)] = (4));

} else {
var statearr_29167_31382 = state_29148__$1;
(statearr_29167_31382[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (11))){
var inst_29139 = cljs.core.async.close_BANG_(ch);
var state_29148__$1 = state_29148;
var statearr_29168_31383 = state_29148__$1;
(statearr_29168_31383[(2)] = inst_29139);

(statearr_29168_31383[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (9))){
var state_29148__$1 = state_29148;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29169_31384 = state_29148__$1;
(statearr_29169_31384[(1)] = (11));

} else {
var statearr_29171_31385 = state_29148__$1;
(statearr_29171_31385[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (5))){
var inst_29120 = (state_29148[(7)]);
var state_29148__$1 = state_29148;
var statearr_29172_31387 = state_29148__$1;
(statearr_29172_31387[(2)] = inst_29120);

(statearr_29172_31387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (10))){
var inst_29144 = (state_29148[(2)]);
var state_29148__$1 = state_29148;
var statearr_29173_31388 = state_29148__$1;
(statearr_29173_31388[(2)] = inst_29144);

(statearr_29173_31388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (8))){
var inst_29120 = (state_29148[(7)]);
var inst_29133 = cljs.core.next(inst_29120);
var inst_29120__$1 = inst_29133;
var state_29148__$1 = (function (){var statearr_29174 = state_29148;
(statearr_29174[(7)] = inst_29120__$1);

return statearr_29174;
})();
var statearr_29175_31389 = state_29148__$1;
(statearr_29175_31389[(2)] = null);

(statearr_29175_31389[(1)] = (2));


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
var cljs$core$async$state_machine__27338__auto__ = null;
var cljs$core$async$state_machine__27338__auto____0 = (function (){
var statearr_29176 = [null,null,null,null,null,null,null,null];
(statearr_29176[(0)] = cljs$core$async$state_machine__27338__auto__);

(statearr_29176[(1)] = (1));

return statearr_29176;
});
var cljs$core$async$state_machine__27338__auto____1 = (function (state_29148){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_29148);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e29177){var ex__27341__auto__ = e29177;
var statearr_29178_31393 = state_29148;
(statearr_29178_31393[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_29148[(4)]))){
var statearr_29179_31395 = state_29148;
(statearr_29179_31395[(1)] = cljs.core.first((state_29148[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31396 = state_29148;
state_29148 = G__31396;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$state_machine__27338__auto__ = function(state_29148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27338__auto____1.call(this,state_29148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27338__auto____0;
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27338__auto____1;
return cljs$core$async$state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_29182 = f__28048__auto__();
(statearr_29182[(6)] = c__28047__auto__);

return statearr_29182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
}));

return c__28047__auto__;
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
var G__29189 = arguments.length;
switch (G__29189) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_31400 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_31400(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_31406 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_31406(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_31407 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_31407(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_31411 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_31411(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29227 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29227 = (function (ch,cs,meta29228){
this.ch = ch;
this.cs = cs;
this.meta29228 = meta29228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29229,meta29228__$1){
var self__ = this;
var _29229__$1 = this;
return (new cljs.core.async.t_cljs$core$async29227(self__.ch,self__.cs,meta29228__$1));
}));

(cljs.core.async.t_cljs$core$async29227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29229){
var self__ = this;
var _29229__$1 = this;
return self__.meta29228;
}));

(cljs.core.async.t_cljs$core$async29227.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29227.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29227.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29227.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29227.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29227.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29228","meta29228",2103174614,null)], null);
}));

(cljs.core.async.t_cljs$core$async29227.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29227");

(cljs.core.async.t_cljs$core$async29227.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29227");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29227.
 */
cljs.core.async.__GT_t_cljs$core$async29227 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29227(ch__$1,cs__$1,meta29228){
return (new cljs.core.async.t_cljs$core$async29227(ch__$1,cs__$1,meta29228));
});

}

return (new cljs.core.async.t_cljs$core$async29227(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28047__auto___31420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_29405){
var state_val_29406 = (state_29405[(1)]);
if((state_val_29406 === (7))){
var inst_29395 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29413_31421 = state_29405__$1;
(statearr_29413_31421[(2)] = inst_29395);

(statearr_29413_31421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (20))){
var inst_29290 = (state_29405[(7)]);
var inst_29303 = cljs.core.first(inst_29290);
var inst_29304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29303,(0),null);
var inst_29305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29303,(1),null);
var state_29405__$1 = (function (){var statearr_29417 = state_29405;
(statearr_29417[(8)] = inst_29304);

return statearr_29417;
})();
if(cljs.core.truth_(inst_29305)){
var statearr_29418_31423 = state_29405__$1;
(statearr_29418_31423[(1)] = (22));

} else {
var statearr_29419_31424 = state_29405__$1;
(statearr_29419_31424[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (27))){
var inst_29336 = (state_29405[(9)]);
var inst_29344 = (state_29405[(10)]);
var inst_29256 = (state_29405[(11)]);
var inst_29338 = (state_29405[(12)]);
var inst_29344__$1 = cljs.core._nth(inst_29336,inst_29338);
var inst_29345 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29344__$1,inst_29256,done);
var state_29405__$1 = (function (){var statearr_29423 = state_29405;
(statearr_29423[(10)] = inst_29344__$1);

return statearr_29423;
})();
if(cljs.core.truth_(inst_29345)){
var statearr_29427_31425 = state_29405__$1;
(statearr_29427_31425[(1)] = (30));

} else {
var statearr_29428_31426 = state_29405__$1;
(statearr_29428_31426[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (1))){
var state_29405__$1 = state_29405;
var statearr_29429_31427 = state_29405__$1;
(statearr_29429_31427[(2)] = null);

(statearr_29429_31427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (24))){
var inst_29290 = (state_29405[(7)]);
var inst_29312 = (state_29405[(2)]);
var inst_29313 = cljs.core.next(inst_29290);
var inst_29266 = inst_29313;
var inst_29267 = null;
var inst_29268 = (0);
var inst_29269 = (0);
var state_29405__$1 = (function (){var statearr_29432 = state_29405;
(statearr_29432[(13)] = inst_29267);

(statearr_29432[(14)] = inst_29266);

(statearr_29432[(15)] = inst_29269);

(statearr_29432[(16)] = inst_29268);

(statearr_29432[(17)] = inst_29312);

return statearr_29432;
})();
var statearr_29433_31429 = state_29405__$1;
(statearr_29433_31429[(2)] = null);

(statearr_29433_31429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (39))){
var state_29405__$1 = state_29405;
var statearr_29439_31430 = state_29405__$1;
(statearr_29439_31430[(2)] = null);

(statearr_29439_31430[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (4))){
var inst_29256 = (state_29405[(11)]);
var inst_29256__$1 = (state_29405[(2)]);
var inst_29257 = (inst_29256__$1 == null);
var state_29405__$1 = (function (){var statearr_29441 = state_29405;
(statearr_29441[(11)] = inst_29256__$1);

return statearr_29441;
})();
if(cljs.core.truth_(inst_29257)){
var statearr_29442_31431 = state_29405__$1;
(statearr_29442_31431[(1)] = (5));

} else {
var statearr_29443_31432 = state_29405__$1;
(statearr_29443_31432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (15))){
var inst_29267 = (state_29405[(13)]);
var inst_29266 = (state_29405[(14)]);
var inst_29269 = (state_29405[(15)]);
var inst_29268 = (state_29405[(16)]);
var inst_29286 = (state_29405[(2)]);
var inst_29287 = (inst_29269 + (1));
var tmp29435 = inst_29267;
var tmp29436 = inst_29266;
var tmp29437 = inst_29268;
var inst_29266__$1 = tmp29436;
var inst_29267__$1 = tmp29435;
var inst_29268__$1 = tmp29437;
var inst_29269__$1 = inst_29287;
var state_29405__$1 = (function (){var statearr_29447 = state_29405;
(statearr_29447[(13)] = inst_29267__$1);

(statearr_29447[(14)] = inst_29266__$1);

(statearr_29447[(18)] = inst_29286);

(statearr_29447[(15)] = inst_29269__$1);

(statearr_29447[(16)] = inst_29268__$1);

return statearr_29447;
})();
var statearr_29450_31433 = state_29405__$1;
(statearr_29450_31433[(2)] = null);

(statearr_29450_31433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (21))){
var inst_29316 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29454_31434 = state_29405__$1;
(statearr_29454_31434[(2)] = inst_29316);

(statearr_29454_31434[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (31))){
var inst_29344 = (state_29405[(10)]);
var inst_29349 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29344);
var state_29405__$1 = state_29405;
var statearr_29467_31435 = state_29405__$1;
(statearr_29467_31435[(2)] = inst_29349);

(statearr_29467_31435[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (32))){
var inst_29336 = (state_29405[(9)]);
var inst_29335 = (state_29405[(19)]);
var inst_29337 = (state_29405[(20)]);
var inst_29338 = (state_29405[(12)]);
var inst_29352 = (state_29405[(2)]);
var inst_29353 = (inst_29338 + (1));
var tmp29451 = inst_29336;
var tmp29452 = inst_29335;
var tmp29453 = inst_29337;
var inst_29335__$1 = tmp29452;
var inst_29336__$1 = tmp29451;
var inst_29337__$1 = tmp29453;
var inst_29338__$1 = inst_29353;
var state_29405__$1 = (function (){var statearr_29470 = state_29405;
(statearr_29470[(9)] = inst_29336__$1);

(statearr_29470[(19)] = inst_29335__$1);

(statearr_29470[(21)] = inst_29352);

(statearr_29470[(20)] = inst_29337__$1);

(statearr_29470[(12)] = inst_29338__$1);

return statearr_29470;
})();
var statearr_29472_31436 = state_29405__$1;
(statearr_29472_31436[(2)] = null);

(statearr_29472_31436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (40))){
var inst_29366 = (state_29405[(22)]);
var inst_29372 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29366);
var state_29405__$1 = state_29405;
var statearr_29475_31438 = state_29405__$1;
(statearr_29475_31438[(2)] = inst_29372);

(statearr_29475_31438[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (33))){
var inst_29356 = (state_29405[(23)]);
var inst_29358 = cljs.core.chunked_seq_QMARK_(inst_29356);
var state_29405__$1 = state_29405;
if(inst_29358){
var statearr_29479_31439 = state_29405__$1;
(statearr_29479_31439[(1)] = (36));

} else {
var statearr_29480_31440 = state_29405__$1;
(statearr_29480_31440[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (13))){
var inst_29279 = (state_29405[(24)]);
var inst_29283 = cljs.core.async.close_BANG_(inst_29279);
var state_29405__$1 = state_29405;
var statearr_29483_31441 = state_29405__$1;
(statearr_29483_31441[(2)] = inst_29283);

(statearr_29483_31441[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (22))){
var inst_29304 = (state_29405[(8)]);
var inst_29309 = cljs.core.async.close_BANG_(inst_29304);
var state_29405__$1 = state_29405;
var statearr_29486_31442 = state_29405__$1;
(statearr_29486_31442[(2)] = inst_29309);

(statearr_29486_31442[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (36))){
var inst_29356 = (state_29405[(23)]);
var inst_29361 = cljs.core.chunk_first(inst_29356);
var inst_29362 = cljs.core.chunk_rest(inst_29356);
var inst_29363 = cljs.core.count(inst_29361);
var inst_29335 = inst_29362;
var inst_29336 = inst_29361;
var inst_29337 = inst_29363;
var inst_29338 = (0);
var state_29405__$1 = (function (){var statearr_29489 = state_29405;
(statearr_29489[(9)] = inst_29336);

(statearr_29489[(19)] = inst_29335);

(statearr_29489[(20)] = inst_29337);

(statearr_29489[(12)] = inst_29338);

return statearr_29489;
})();
var statearr_29492_31443 = state_29405__$1;
(statearr_29492_31443[(2)] = null);

(statearr_29492_31443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (41))){
var inst_29356 = (state_29405[(23)]);
var inst_29374 = (state_29405[(2)]);
var inst_29375 = cljs.core.next(inst_29356);
var inst_29335 = inst_29375;
var inst_29336 = null;
var inst_29337 = (0);
var inst_29338 = (0);
var state_29405__$1 = (function (){var statearr_29493 = state_29405;
(statearr_29493[(25)] = inst_29374);

(statearr_29493[(9)] = inst_29336);

(statearr_29493[(19)] = inst_29335);

(statearr_29493[(20)] = inst_29337);

(statearr_29493[(12)] = inst_29338);

return statearr_29493;
})();
var statearr_29496_31444 = state_29405__$1;
(statearr_29496_31444[(2)] = null);

(statearr_29496_31444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (43))){
var state_29405__$1 = state_29405;
var statearr_29499_31446 = state_29405__$1;
(statearr_29499_31446[(2)] = null);

(statearr_29499_31446[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (29))){
var inst_29383 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29502_31448 = state_29405__$1;
(statearr_29502_31448[(2)] = inst_29383);

(statearr_29502_31448[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (44))){
var inst_29392 = (state_29405[(2)]);
var state_29405__$1 = (function (){var statearr_29503 = state_29405;
(statearr_29503[(26)] = inst_29392);

return statearr_29503;
})();
var statearr_29505_31449 = state_29405__$1;
(statearr_29505_31449[(2)] = null);

(statearr_29505_31449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (6))){
var inst_29327 = (state_29405[(27)]);
var inst_29326 = cljs.core.deref(cs);
var inst_29327__$1 = cljs.core.keys(inst_29326);
var inst_29328 = cljs.core.count(inst_29327__$1);
var inst_29329 = cljs.core.reset_BANG_(dctr,inst_29328);
var inst_29334 = cljs.core.seq(inst_29327__$1);
var inst_29335 = inst_29334;
var inst_29336 = null;
var inst_29337 = (0);
var inst_29338 = (0);
var state_29405__$1 = (function (){var statearr_29510 = state_29405;
(statearr_29510[(27)] = inst_29327__$1);

(statearr_29510[(9)] = inst_29336);

(statearr_29510[(19)] = inst_29335);

(statearr_29510[(28)] = inst_29329);

(statearr_29510[(20)] = inst_29337);

(statearr_29510[(12)] = inst_29338);

return statearr_29510;
})();
var statearr_29513_31452 = state_29405__$1;
(statearr_29513_31452[(2)] = null);

(statearr_29513_31452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (28))){
var inst_29335 = (state_29405[(19)]);
var inst_29356 = (state_29405[(23)]);
var inst_29356__$1 = cljs.core.seq(inst_29335);
var state_29405__$1 = (function (){var statearr_29514 = state_29405;
(statearr_29514[(23)] = inst_29356__$1);

return statearr_29514;
})();
if(inst_29356__$1){
var statearr_29515_31455 = state_29405__$1;
(statearr_29515_31455[(1)] = (33));

} else {
var statearr_29516_31456 = state_29405__$1;
(statearr_29516_31456[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (25))){
var inst_29337 = (state_29405[(20)]);
var inst_29338 = (state_29405[(12)]);
var inst_29341 = (inst_29338 < inst_29337);
var inst_29342 = inst_29341;
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29342)){
var statearr_29520_31460 = state_29405__$1;
(statearr_29520_31460[(1)] = (27));

} else {
var statearr_29521_31462 = state_29405__$1;
(statearr_29521_31462[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (34))){
var state_29405__$1 = state_29405;
var statearr_29522_31463 = state_29405__$1;
(statearr_29522_31463[(2)] = null);

(statearr_29522_31463[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (17))){
var state_29405__$1 = state_29405;
var statearr_29524_31465 = state_29405__$1;
(statearr_29524_31465[(2)] = null);

(statearr_29524_31465[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (3))){
var inst_29397 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29405__$1,inst_29397);
} else {
if((state_val_29406 === (12))){
var inst_29321 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29528_31468 = state_29405__$1;
(statearr_29528_31468[(2)] = inst_29321);

(statearr_29528_31468[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (2))){
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29405__$1,(4),ch);
} else {
if((state_val_29406 === (23))){
var state_29405__$1 = state_29405;
var statearr_29533_31471 = state_29405__$1;
(statearr_29533_31471[(2)] = null);

(statearr_29533_31471[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (35))){
var inst_29381 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29535_31475 = state_29405__$1;
(statearr_29535_31475[(2)] = inst_29381);

(statearr_29535_31475[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (19))){
var inst_29290 = (state_29405[(7)]);
var inst_29294 = cljs.core.chunk_first(inst_29290);
var inst_29295 = cljs.core.chunk_rest(inst_29290);
var inst_29296 = cljs.core.count(inst_29294);
var inst_29266 = inst_29295;
var inst_29267 = inst_29294;
var inst_29268 = inst_29296;
var inst_29269 = (0);
var state_29405__$1 = (function (){var statearr_29540 = state_29405;
(statearr_29540[(13)] = inst_29267);

(statearr_29540[(14)] = inst_29266);

(statearr_29540[(15)] = inst_29269);

(statearr_29540[(16)] = inst_29268);

return statearr_29540;
})();
var statearr_29541_31478 = state_29405__$1;
(statearr_29541_31478[(2)] = null);

(statearr_29541_31478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (11))){
var inst_29290 = (state_29405[(7)]);
var inst_29266 = (state_29405[(14)]);
var inst_29290__$1 = cljs.core.seq(inst_29266);
var state_29405__$1 = (function (){var statearr_29542 = state_29405;
(statearr_29542[(7)] = inst_29290__$1);

return statearr_29542;
})();
if(inst_29290__$1){
var statearr_29544_31479 = state_29405__$1;
(statearr_29544_31479[(1)] = (16));

} else {
var statearr_29545_31480 = state_29405__$1;
(statearr_29545_31480[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (9))){
var inst_29323 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29547_31481 = state_29405__$1;
(statearr_29547_31481[(2)] = inst_29323);

(statearr_29547_31481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (5))){
var inst_29264 = cljs.core.deref(cs);
var inst_29265 = cljs.core.seq(inst_29264);
var inst_29266 = inst_29265;
var inst_29267 = null;
var inst_29268 = (0);
var inst_29269 = (0);
var state_29405__$1 = (function (){var statearr_29548 = state_29405;
(statearr_29548[(13)] = inst_29267);

(statearr_29548[(14)] = inst_29266);

(statearr_29548[(15)] = inst_29269);

(statearr_29548[(16)] = inst_29268);

return statearr_29548;
})();
var statearr_29551_31484 = state_29405__$1;
(statearr_29551_31484[(2)] = null);

(statearr_29551_31484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (14))){
var state_29405__$1 = state_29405;
var statearr_29554_31485 = state_29405__$1;
(statearr_29554_31485[(2)] = null);

(statearr_29554_31485[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (45))){
var inst_29389 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29555_31488 = state_29405__$1;
(statearr_29555_31488[(2)] = inst_29389);

(statearr_29555_31488[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (26))){
var inst_29327 = (state_29405[(27)]);
var inst_29385 = (state_29405[(2)]);
var inst_29386 = cljs.core.seq(inst_29327);
var state_29405__$1 = (function (){var statearr_29558 = state_29405;
(statearr_29558[(29)] = inst_29385);

return statearr_29558;
})();
if(inst_29386){
var statearr_29559_31492 = state_29405__$1;
(statearr_29559_31492[(1)] = (42));

} else {
var statearr_29560_31493 = state_29405__$1;
(statearr_29560_31493[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (16))){
var inst_29290 = (state_29405[(7)]);
var inst_29292 = cljs.core.chunked_seq_QMARK_(inst_29290);
var state_29405__$1 = state_29405;
if(inst_29292){
var statearr_29562_31496 = state_29405__$1;
(statearr_29562_31496[(1)] = (19));

} else {
var statearr_29563_31497 = state_29405__$1;
(statearr_29563_31497[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (38))){
var inst_29378 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29565_31499 = state_29405__$1;
(statearr_29565_31499[(2)] = inst_29378);

(statearr_29565_31499[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (30))){
var state_29405__$1 = state_29405;
var statearr_29566_31500 = state_29405__$1;
(statearr_29566_31500[(2)] = null);

(statearr_29566_31500[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (10))){
var inst_29267 = (state_29405[(13)]);
var inst_29269 = (state_29405[(15)]);
var inst_29278 = cljs.core._nth(inst_29267,inst_29269);
var inst_29279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29278,(0),null);
var inst_29280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29278,(1),null);
var state_29405__$1 = (function (){var statearr_29570 = state_29405;
(statearr_29570[(24)] = inst_29279);

return statearr_29570;
})();
if(cljs.core.truth_(inst_29280)){
var statearr_29571_31504 = state_29405__$1;
(statearr_29571_31504[(1)] = (13));

} else {
var statearr_29572_31505 = state_29405__$1;
(statearr_29572_31505[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (18))){
var inst_29319 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29574_31506 = state_29405__$1;
(statearr_29574_31506[(2)] = inst_29319);

(statearr_29574_31506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (42))){
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29405__$1,(45),dchan);
} else {
if((state_val_29406 === (37))){
var inst_29356 = (state_29405[(23)]);
var inst_29366 = (state_29405[(22)]);
var inst_29256 = (state_29405[(11)]);
var inst_29366__$1 = cljs.core.first(inst_29356);
var inst_29369 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29366__$1,inst_29256,done);
var state_29405__$1 = (function (){var statearr_29577 = state_29405;
(statearr_29577[(22)] = inst_29366__$1);

return statearr_29577;
})();
if(cljs.core.truth_(inst_29369)){
var statearr_29578_31507 = state_29405__$1;
(statearr_29578_31507[(1)] = (39));

} else {
var statearr_29579_31508 = state_29405__$1;
(statearr_29579_31508[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (8))){
var inst_29269 = (state_29405[(15)]);
var inst_29268 = (state_29405[(16)]);
var inst_29271 = (inst_29269 < inst_29268);
var inst_29272 = inst_29271;
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29272)){
var statearr_29582_31509 = state_29405__$1;
(statearr_29582_31509[(1)] = (10));

} else {
var statearr_29583_31511 = state_29405__$1;
(statearr_29583_31511[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__27338__auto__ = null;
var cljs$core$async$mult_$_state_machine__27338__auto____0 = (function (){
var statearr_29588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29588[(0)] = cljs$core$async$mult_$_state_machine__27338__auto__);

(statearr_29588[(1)] = (1));

return statearr_29588;
});
var cljs$core$async$mult_$_state_machine__27338__auto____1 = (function (state_29405){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_29405);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e29589){var ex__27341__auto__ = e29589;
var statearr_29590_31515 = state_29405;
(statearr_29590_31515[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_29405[(4)]))){
var statearr_29593_31516 = state_29405;
(statearr_29593_31516[(1)] = cljs.core.first((state_29405[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31517 = state_29405;
state_29405 = G__31517;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27338__auto__ = function(state_29405){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27338__auto____1.call(this,state_29405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27338__auto____0;
cljs$core$async$mult_$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27338__auto____1;
return cljs$core$async$mult_$_state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_29596 = f__28048__auto__();
(statearr_29596[(6)] = c__28047__auto___31420);

return statearr_29596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
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
var G__29600 = arguments.length;
switch (G__29600) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_31520 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_31520(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_31525 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_31525(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_31527 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_31527(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_31529 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_31529(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_31531 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_31531(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31534 = arguments.length;
var i__5770__auto___31535 = (0);
while(true){
if((i__5770__auto___31535 < len__5769__auto___31534)){
args__5775__auto__.push((arguments[i__5770__auto___31535]));

var G__31536 = (i__5770__auto___31535 + (1));
i__5770__auto___31535 = G__31536;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29646){
var map__29647 = p__29646;
var map__29647__$1 = cljs.core.__destructure_map(map__29647);
var opts = map__29647__$1;
var statearr_29648_31537 = state;
(statearr_29648_31537[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_29649_31538 = state;
(statearr_29649_31538[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_29650_31541 = state;
(statearr_29650_31541[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29636){
var G__29637 = cljs.core.first(seq29636);
var seq29636__$1 = cljs.core.next(seq29636);
var G__29638 = cljs.core.first(seq29636__$1);
var seq29636__$2 = cljs.core.next(seq29636__$1);
var G__29639 = cljs.core.first(seq29636__$2);
var seq29636__$3 = cljs.core.next(seq29636__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29637,G__29638,G__29639,seq29636__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29667 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29667 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29668){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29668 = meta29668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29669,meta29668__$1){
var self__ = this;
var _29669__$1 = this;
return (new cljs.core.async.t_cljs$core$async29667(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29668__$1));
}));

(cljs.core.async.t_cljs$core$async29667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29669){
var self__ = this;
var _29669__$1 = this;
return self__.meta29668;
}));

(cljs.core.async.t_cljs$core$async29667.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29667.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async29667.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29667.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29667.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29667.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29667.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29667.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29668","meta29668",-402949341,null)], null);
}));

(cljs.core.async.t_cljs$core$async29667.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29667");

(cljs.core.async.t_cljs$core$async29667.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29667");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29667.
 */
cljs.core.async.__GT_t_cljs$core$async29667 = (function cljs$core$async$mix_$___GT_t_cljs$core$async29667(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29668){
return (new cljs.core.async.t_cljs$core$async29667(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29668));
});

}

return (new cljs.core.async.t_cljs$core$async29667(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28047__auto___31555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_29765){
var state_val_29766 = (state_29765[(1)]);
if((state_val_29766 === (7))){
var inst_29722 = (state_29765[(2)]);
var state_29765__$1 = state_29765;
if(cljs.core.truth_(inst_29722)){
var statearr_29768_31557 = state_29765__$1;
(statearr_29768_31557[(1)] = (8));

} else {
var statearr_29769_31558 = state_29765__$1;
(statearr_29769_31558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (20))){
var inst_29713 = (state_29765[(7)]);
var state_29765__$1 = state_29765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29765__$1,(23),out,inst_29713);
} else {
if((state_val_29766 === (1))){
var inst_29693 = calc_state();
var inst_29694 = cljs.core.__destructure_map(inst_29693);
var inst_29696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29694,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29694,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29694,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29699 = inst_29693;
var state_29765__$1 = (function (){var statearr_29772 = state_29765;
(statearr_29772[(8)] = inst_29698);

(statearr_29772[(9)] = inst_29696);

(statearr_29772[(10)] = inst_29697);

(statearr_29772[(11)] = inst_29699);

return statearr_29772;
})();
var statearr_29773_31559 = state_29765__$1;
(statearr_29773_31559[(2)] = null);

(statearr_29773_31559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (24))){
var inst_29702 = (state_29765[(12)]);
var inst_29699 = inst_29702;
var state_29765__$1 = (function (){var statearr_29775 = state_29765;
(statearr_29775[(11)] = inst_29699);

return statearr_29775;
})();
var statearr_29776_31560 = state_29765__$1;
(statearr_29776_31560[(2)] = null);

(statearr_29776_31560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (4))){
var inst_29713 = (state_29765[(7)]);
var inst_29717 = (state_29765[(13)]);
var inst_29712 = (state_29765[(2)]);
var inst_29713__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29712,(0),null);
var inst_29716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29712,(1),null);
var inst_29717__$1 = (inst_29713__$1 == null);
var state_29765__$1 = (function (){var statearr_29777 = state_29765;
(statearr_29777[(7)] = inst_29713__$1);

(statearr_29777[(13)] = inst_29717__$1);

(statearr_29777[(14)] = inst_29716);

return statearr_29777;
})();
if(cljs.core.truth_(inst_29717__$1)){
var statearr_29779_31562 = state_29765__$1;
(statearr_29779_31562[(1)] = (5));

} else {
var statearr_29780_31563 = state_29765__$1;
(statearr_29780_31563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (15))){
var inst_29737 = (state_29765[(15)]);
var inst_29703 = (state_29765[(16)]);
var inst_29737__$1 = cljs.core.empty_QMARK_(inst_29703);
var state_29765__$1 = (function (){var statearr_29781 = state_29765;
(statearr_29781[(15)] = inst_29737__$1);

return statearr_29781;
})();
if(inst_29737__$1){
var statearr_29782_31565 = state_29765__$1;
(statearr_29782_31565[(1)] = (17));

} else {
var statearr_29783_31567 = state_29765__$1;
(statearr_29783_31567[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (21))){
var inst_29702 = (state_29765[(12)]);
var inst_29699 = inst_29702;
var state_29765__$1 = (function (){var statearr_29784 = state_29765;
(statearr_29784[(11)] = inst_29699);

return statearr_29784;
})();
var statearr_29785_31569 = state_29765__$1;
(statearr_29785_31569[(2)] = null);

(statearr_29785_31569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (13))){
var inst_29730 = (state_29765[(2)]);
var inst_29731 = calc_state();
var inst_29699 = inst_29731;
var state_29765__$1 = (function (){var statearr_29787 = state_29765;
(statearr_29787[(17)] = inst_29730);

(statearr_29787[(11)] = inst_29699);

return statearr_29787;
})();
var statearr_29789_31570 = state_29765__$1;
(statearr_29789_31570[(2)] = null);

(statearr_29789_31570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (22))){
var inst_29757 = (state_29765[(2)]);
var state_29765__$1 = state_29765;
var statearr_29792_31572 = state_29765__$1;
(statearr_29792_31572[(2)] = inst_29757);

(statearr_29792_31572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (6))){
var inst_29716 = (state_29765[(14)]);
var inst_29720 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29716,change);
var state_29765__$1 = state_29765;
var statearr_29795_31573 = state_29765__$1;
(statearr_29795_31573[(2)] = inst_29720);

(statearr_29795_31573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (25))){
var state_29765__$1 = state_29765;
var statearr_29796_31576 = state_29765__$1;
(statearr_29796_31576[(2)] = null);

(statearr_29796_31576[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (17))){
var inst_29716 = (state_29765[(14)]);
var inst_29704 = (state_29765[(18)]);
var inst_29739 = (inst_29704.cljs$core$IFn$_invoke$arity$1 ? inst_29704.cljs$core$IFn$_invoke$arity$1(inst_29716) : inst_29704.call(null,inst_29716));
var inst_29740 = cljs.core.not(inst_29739);
var state_29765__$1 = state_29765;
var statearr_29798_31579 = state_29765__$1;
(statearr_29798_31579[(2)] = inst_29740);

(statearr_29798_31579[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (3))){
var inst_29761 = (state_29765[(2)]);
var state_29765__$1 = state_29765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29765__$1,inst_29761);
} else {
if((state_val_29766 === (12))){
var state_29765__$1 = state_29765;
var statearr_29800_31580 = state_29765__$1;
(statearr_29800_31580[(2)] = null);

(statearr_29800_31580[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (2))){
var inst_29702 = (state_29765[(12)]);
var inst_29699 = (state_29765[(11)]);
var inst_29702__$1 = cljs.core.__destructure_map(inst_29699);
var inst_29703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29702__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29702__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29702__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29765__$1 = (function (){var statearr_29803 = state_29765;
(statearr_29803[(16)] = inst_29703);

(statearr_29803[(12)] = inst_29702__$1);

(statearr_29803[(18)] = inst_29704);

return statearr_29803;
})();
return cljs.core.async.ioc_alts_BANG_(state_29765__$1,(4),inst_29705);
} else {
if((state_val_29766 === (23))){
var inst_29748 = (state_29765[(2)]);
var state_29765__$1 = state_29765;
if(cljs.core.truth_(inst_29748)){
var statearr_29804_31583 = state_29765__$1;
(statearr_29804_31583[(1)] = (24));

} else {
var statearr_29805_31584 = state_29765__$1;
(statearr_29805_31584[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (19))){
var inst_29743 = (state_29765[(2)]);
var state_29765__$1 = state_29765;
var statearr_29811_31585 = state_29765__$1;
(statearr_29811_31585[(2)] = inst_29743);

(statearr_29811_31585[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (11))){
var inst_29716 = (state_29765[(14)]);
var inst_29727 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_29716);
var state_29765__$1 = state_29765;
var statearr_29814_31586 = state_29765__$1;
(statearr_29814_31586[(2)] = inst_29727);

(statearr_29814_31586[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (9))){
var inst_29703 = (state_29765[(16)]);
var inst_29716 = (state_29765[(14)]);
var inst_29734 = (state_29765[(19)]);
var inst_29734__$1 = (inst_29703.cljs$core$IFn$_invoke$arity$1 ? inst_29703.cljs$core$IFn$_invoke$arity$1(inst_29716) : inst_29703.call(null,inst_29716));
var state_29765__$1 = (function (){var statearr_29815 = state_29765;
(statearr_29815[(19)] = inst_29734__$1);

return statearr_29815;
})();
if(cljs.core.truth_(inst_29734__$1)){
var statearr_29816_31587 = state_29765__$1;
(statearr_29816_31587[(1)] = (14));

} else {
var statearr_29817_31588 = state_29765__$1;
(statearr_29817_31588[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (5))){
var inst_29717 = (state_29765[(13)]);
var state_29765__$1 = state_29765;
var statearr_29819_31589 = state_29765__$1;
(statearr_29819_31589[(2)] = inst_29717);

(statearr_29819_31589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (14))){
var inst_29734 = (state_29765[(19)]);
var state_29765__$1 = state_29765;
var statearr_29820_31590 = state_29765__$1;
(statearr_29820_31590[(2)] = inst_29734);

(statearr_29820_31590[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (26))){
var inst_29753 = (state_29765[(2)]);
var state_29765__$1 = state_29765;
var statearr_29821_31591 = state_29765__$1;
(statearr_29821_31591[(2)] = inst_29753);

(statearr_29821_31591[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (16))){
var inst_29745 = (state_29765[(2)]);
var state_29765__$1 = state_29765;
if(cljs.core.truth_(inst_29745)){
var statearr_29825_31594 = state_29765__$1;
(statearr_29825_31594[(1)] = (20));

} else {
var statearr_29826_31595 = state_29765__$1;
(statearr_29826_31595[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (10))){
var inst_29759 = (state_29765[(2)]);
var state_29765__$1 = state_29765;
var statearr_29838_31597 = state_29765__$1;
(statearr_29838_31597[(2)] = inst_29759);

(statearr_29838_31597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (18))){
var inst_29737 = (state_29765[(15)]);
var state_29765__$1 = state_29765;
var statearr_29841_31598 = state_29765__$1;
(statearr_29841_31598[(2)] = inst_29737);

(statearr_29841_31598[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29766 === (8))){
var inst_29713 = (state_29765[(7)]);
var inst_29724 = (inst_29713 == null);
var state_29765__$1 = state_29765;
if(cljs.core.truth_(inst_29724)){
var statearr_29843_31600 = state_29765__$1;
(statearr_29843_31600[(1)] = (11));

} else {
var statearr_29844_31602 = state_29765__$1;
(statearr_29844_31602[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__27338__auto__ = null;
var cljs$core$async$mix_$_state_machine__27338__auto____0 = (function (){
var statearr_29850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29850[(0)] = cljs$core$async$mix_$_state_machine__27338__auto__);

(statearr_29850[(1)] = (1));

return statearr_29850;
});
var cljs$core$async$mix_$_state_machine__27338__auto____1 = (function (state_29765){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_29765);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e29852){var ex__27341__auto__ = e29852;
var statearr_29854_31603 = state_29765;
(statearr_29854_31603[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_29765[(4)]))){
var statearr_29857_31605 = state_29765;
(statearr_29857_31605[(1)] = cljs.core.first((state_29765[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31610 = state_29765;
state_29765 = G__31610;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27338__auto__ = function(state_29765){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27338__auto____1.call(this,state_29765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27338__auto____0;
cljs$core$async$mix_$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27338__auto____1;
return cljs$core$async$mix_$_state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_29863 = f__28048__auto__();
(statearr_29863[(6)] = c__28047__auto___31555);

return statearr_29863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_31611 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_31611(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_31613 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_31613(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_31616 = (function() {
var G__31617 = null;
var G__31617__1 = (function (p){
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
var G__31617__2 = (function (p,v){
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
G__31617 = function(p,v){
switch(arguments.length){
case 1:
return G__31617__1.call(this,p);
case 2:
return G__31617__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31617.cljs$core$IFn$_invoke$arity$1 = G__31617__1;
G__31617.cljs$core$IFn$_invoke$arity$2 = G__31617__2;
return G__31617;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29932 = arguments.length;
switch (G__29932) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_31616(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_31616(p,v);
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
var G__29940 = arguments.length;
switch (G__29940) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__29936_SHARP_){
if(cljs.core.truth_((p1__29936_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29936_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__29936_SHARP_.call(null,topic)))){
return p1__29936_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__29936_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29943 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29943 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29944){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29944 = meta29944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29945,meta29944__$1){
var self__ = this;
var _29945__$1 = this;
return (new cljs.core.async.t_cljs$core$async29943(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29944__$1));
}));

(cljs.core.async.t_cljs$core$async29943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29945){
var self__ = this;
var _29945__$1 = this;
return self__.meta29944;
}));

(cljs.core.async.t_cljs$core$async29943.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29943.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29943.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29943.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async29943.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async29943.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async29943.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async29943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29944","meta29944",14530469,null)], null);
}));

(cljs.core.async.t_cljs$core$async29943.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29943");

(cljs.core.async.t_cljs$core$async29943.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29943");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29943.
 */
cljs.core.async.__GT_t_cljs$core$async29943 = (function cljs$core$async$__GT_t_cljs$core$async29943(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29944){
return (new cljs.core.async.t_cljs$core$async29943(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29944));
});

}

return (new cljs.core.async.t_cljs$core$async29943(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28047__auto___31629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_30059){
var state_val_30060 = (state_30059[(1)]);
if((state_val_30060 === (7))){
var inst_30055 = (state_30059[(2)]);
var state_30059__$1 = state_30059;
var statearr_30066_31631 = state_30059__$1;
(statearr_30066_31631[(2)] = inst_30055);

(statearr_30066_31631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (20))){
var state_30059__$1 = state_30059;
var statearr_30067_31632 = state_30059__$1;
(statearr_30067_31632[(2)] = null);

(statearr_30067_31632[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (1))){
var state_30059__$1 = state_30059;
var statearr_30069_31633 = state_30059__$1;
(statearr_30069_31633[(2)] = null);

(statearr_30069_31633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (24))){
var inst_30036 = (state_30059[(7)]);
var inst_30047 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30036);
var state_30059__$1 = state_30059;
var statearr_30071_31634 = state_30059__$1;
(statearr_30071_31634[(2)] = inst_30047);

(statearr_30071_31634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (4))){
var inst_29980 = (state_30059[(8)]);
var inst_29980__$1 = (state_30059[(2)]);
var inst_29981 = (inst_29980__$1 == null);
var state_30059__$1 = (function (){var statearr_30072 = state_30059;
(statearr_30072[(8)] = inst_29980__$1);

return statearr_30072;
})();
if(cljs.core.truth_(inst_29981)){
var statearr_30073_31636 = state_30059__$1;
(statearr_30073_31636[(1)] = (5));

} else {
var statearr_30074_31637 = state_30059__$1;
(statearr_30074_31637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (15))){
var inst_30028 = (state_30059[(2)]);
var state_30059__$1 = state_30059;
var statearr_30076_31638 = state_30059__$1;
(statearr_30076_31638[(2)] = inst_30028);

(statearr_30076_31638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (21))){
var inst_30052 = (state_30059[(2)]);
var state_30059__$1 = (function (){var statearr_30077 = state_30059;
(statearr_30077[(9)] = inst_30052);

return statearr_30077;
})();
var statearr_30079_31640 = state_30059__$1;
(statearr_30079_31640[(2)] = null);

(statearr_30079_31640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (13))){
var inst_30009 = (state_30059[(10)]);
var inst_30012 = cljs.core.chunked_seq_QMARK_(inst_30009);
var state_30059__$1 = state_30059;
if(inst_30012){
var statearr_30080_31641 = state_30059__$1;
(statearr_30080_31641[(1)] = (16));

} else {
var statearr_30081_31642 = state_30059__$1;
(statearr_30081_31642[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (22))){
var inst_30044 = (state_30059[(2)]);
var state_30059__$1 = state_30059;
if(cljs.core.truth_(inst_30044)){
var statearr_30082_31644 = state_30059__$1;
(statearr_30082_31644[(1)] = (23));

} else {
var statearr_30083_31645 = state_30059__$1;
(statearr_30083_31645[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (6))){
var inst_29980 = (state_30059[(8)]);
var inst_30036 = (state_30059[(7)]);
var inst_30038 = (state_30059[(11)]);
var inst_30036__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_29980) : topic_fn.call(null,inst_29980));
var inst_30037 = cljs.core.deref(mults);
var inst_30038__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30037,inst_30036__$1);
var state_30059__$1 = (function (){var statearr_30086 = state_30059;
(statearr_30086[(7)] = inst_30036__$1);

(statearr_30086[(11)] = inst_30038__$1);

return statearr_30086;
})();
if(cljs.core.truth_(inst_30038__$1)){
var statearr_30087_31646 = state_30059__$1;
(statearr_30087_31646[(1)] = (19));

} else {
var statearr_30088_31647 = state_30059__$1;
(statearr_30088_31647[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (25))){
var inst_30049 = (state_30059[(2)]);
var state_30059__$1 = state_30059;
var statearr_30090_31649 = state_30059__$1;
(statearr_30090_31649[(2)] = inst_30049);

(statearr_30090_31649[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (17))){
var inst_30009 = (state_30059[(10)]);
var inst_30019 = cljs.core.first(inst_30009);
var inst_30020 = cljs.core.async.muxch_STAR_(inst_30019);
var inst_30021 = cljs.core.async.close_BANG_(inst_30020);
var inst_30022 = cljs.core.next(inst_30009);
var inst_29991 = inst_30022;
var inst_29992 = null;
var inst_29993 = (0);
var inst_29994 = (0);
var state_30059__$1 = (function (){var statearr_30092 = state_30059;
(statearr_30092[(12)] = inst_29994);

(statearr_30092[(13)] = inst_29991);

(statearr_30092[(14)] = inst_30021);

(statearr_30092[(15)] = inst_29992);

(statearr_30092[(16)] = inst_29993);

return statearr_30092;
})();
var statearr_30093_31650 = state_30059__$1;
(statearr_30093_31650[(2)] = null);

(statearr_30093_31650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (3))){
var inst_30057 = (state_30059[(2)]);
var state_30059__$1 = state_30059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30059__$1,inst_30057);
} else {
if((state_val_30060 === (12))){
var inst_30031 = (state_30059[(2)]);
var state_30059__$1 = state_30059;
var statearr_30095_31652 = state_30059__$1;
(statearr_30095_31652[(2)] = inst_30031);

(statearr_30095_31652[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (2))){
var state_30059__$1 = state_30059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30059__$1,(4),ch);
} else {
if((state_val_30060 === (23))){
var state_30059__$1 = state_30059;
var statearr_30097_31653 = state_30059__$1;
(statearr_30097_31653[(2)] = null);

(statearr_30097_31653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (19))){
var inst_29980 = (state_30059[(8)]);
var inst_30038 = (state_30059[(11)]);
var inst_30042 = cljs.core.async.muxch_STAR_(inst_30038);
var state_30059__$1 = state_30059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30059__$1,(22),inst_30042,inst_29980);
} else {
if((state_val_30060 === (11))){
var inst_29991 = (state_30059[(13)]);
var inst_30009 = (state_30059[(10)]);
var inst_30009__$1 = cljs.core.seq(inst_29991);
var state_30059__$1 = (function (){var statearr_30099 = state_30059;
(statearr_30099[(10)] = inst_30009__$1);

return statearr_30099;
})();
if(inst_30009__$1){
var statearr_30100_31655 = state_30059__$1;
(statearr_30100_31655[(1)] = (13));

} else {
var statearr_30101_31656 = state_30059__$1;
(statearr_30101_31656[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (9))){
var inst_30033 = (state_30059[(2)]);
var state_30059__$1 = state_30059;
var statearr_30102_31657 = state_30059__$1;
(statearr_30102_31657[(2)] = inst_30033);

(statearr_30102_31657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (5))){
var inst_29988 = cljs.core.deref(mults);
var inst_29989 = cljs.core.vals(inst_29988);
var inst_29990 = cljs.core.seq(inst_29989);
var inst_29991 = inst_29990;
var inst_29992 = null;
var inst_29993 = (0);
var inst_29994 = (0);
var state_30059__$1 = (function (){var statearr_30104 = state_30059;
(statearr_30104[(12)] = inst_29994);

(statearr_30104[(13)] = inst_29991);

(statearr_30104[(15)] = inst_29992);

(statearr_30104[(16)] = inst_29993);

return statearr_30104;
})();
var statearr_30105_31659 = state_30059__$1;
(statearr_30105_31659[(2)] = null);

(statearr_30105_31659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (14))){
var state_30059__$1 = state_30059;
var statearr_30110_31660 = state_30059__$1;
(statearr_30110_31660[(2)] = null);

(statearr_30110_31660[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (16))){
var inst_30009 = (state_30059[(10)]);
var inst_30014 = cljs.core.chunk_first(inst_30009);
var inst_30015 = cljs.core.chunk_rest(inst_30009);
var inst_30016 = cljs.core.count(inst_30014);
var inst_29991 = inst_30015;
var inst_29992 = inst_30014;
var inst_29993 = inst_30016;
var inst_29994 = (0);
var state_30059__$1 = (function (){var statearr_30112 = state_30059;
(statearr_30112[(12)] = inst_29994);

(statearr_30112[(13)] = inst_29991);

(statearr_30112[(15)] = inst_29992);

(statearr_30112[(16)] = inst_29993);

return statearr_30112;
})();
var statearr_30113_31661 = state_30059__$1;
(statearr_30113_31661[(2)] = null);

(statearr_30113_31661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (10))){
var inst_29994 = (state_30059[(12)]);
var inst_29991 = (state_30059[(13)]);
var inst_29992 = (state_30059[(15)]);
var inst_29993 = (state_30059[(16)]);
var inst_30001 = cljs.core._nth(inst_29992,inst_29994);
var inst_30002 = cljs.core.async.muxch_STAR_(inst_30001);
var inst_30003 = cljs.core.async.close_BANG_(inst_30002);
var inst_30006 = (inst_29994 + (1));
var tmp30107 = inst_29991;
var tmp30108 = inst_29992;
var tmp30109 = inst_29993;
var inst_29991__$1 = tmp30107;
var inst_29992__$1 = tmp30108;
var inst_29993__$1 = tmp30109;
var inst_29994__$1 = inst_30006;
var state_30059__$1 = (function (){var statearr_30116 = state_30059;
(statearr_30116[(12)] = inst_29994__$1);

(statearr_30116[(13)] = inst_29991__$1);

(statearr_30116[(15)] = inst_29992__$1);

(statearr_30116[(17)] = inst_30003);

(statearr_30116[(16)] = inst_29993__$1);

return statearr_30116;
})();
var statearr_30117_31667 = state_30059__$1;
(statearr_30117_31667[(2)] = null);

(statearr_30117_31667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (18))){
var inst_30025 = (state_30059[(2)]);
var state_30059__$1 = state_30059;
var statearr_30120_31669 = state_30059__$1;
(statearr_30120_31669[(2)] = inst_30025);

(statearr_30120_31669[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30060 === (8))){
var inst_29994 = (state_30059[(12)]);
var inst_29993 = (state_30059[(16)]);
var inst_29996 = (inst_29994 < inst_29993);
var inst_29997 = inst_29996;
var state_30059__$1 = state_30059;
if(cljs.core.truth_(inst_29997)){
var statearr_30125_31670 = state_30059__$1;
(statearr_30125_31670[(1)] = (10));

} else {
var statearr_30126_31671 = state_30059__$1;
(statearr_30126_31671[(1)] = (11));

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
var cljs$core$async$state_machine__27338__auto__ = null;
var cljs$core$async$state_machine__27338__auto____0 = (function (){
var statearr_30127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30127[(0)] = cljs$core$async$state_machine__27338__auto__);

(statearr_30127[(1)] = (1));

return statearr_30127;
});
var cljs$core$async$state_machine__27338__auto____1 = (function (state_30059){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_30059);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e30128){var ex__27341__auto__ = e30128;
var statearr_30129_31676 = state_30059;
(statearr_30129_31676[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_30059[(4)]))){
var statearr_30131_31679 = state_30059;
(statearr_30131_31679[(1)] = cljs.core.first((state_30059[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31680 = state_30059;
state_30059 = G__31680;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$state_machine__27338__auto__ = function(state_30059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27338__auto____1.call(this,state_30059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27338__auto____0;
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27338__auto____1;
return cljs$core$async$state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_30132 = f__28048__auto__();
(statearr_30132[(6)] = c__28047__auto___31629);

return statearr_30132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
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
var G__30134 = arguments.length;
switch (G__30134) {
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
var G__30136 = arguments.length;
switch (G__30136) {
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
var G__30156 = arguments.length;
switch (G__30156) {
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
var c__28047__auto___31701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_30211){
var state_val_30212 = (state_30211[(1)]);
if((state_val_30212 === (7))){
var state_30211__$1 = state_30211;
var statearr_30214_31702 = state_30211__$1;
(statearr_30214_31702[(2)] = null);

(statearr_30214_31702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (1))){
var state_30211__$1 = state_30211;
var statearr_30215_31703 = state_30211__$1;
(statearr_30215_31703[(2)] = null);

(statearr_30215_31703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (4))){
var inst_30169 = (state_30211[(7)]);
var inst_30168 = (state_30211[(8)]);
var inst_30171 = (inst_30169 < inst_30168);
var state_30211__$1 = state_30211;
if(cljs.core.truth_(inst_30171)){
var statearr_30216_31707 = state_30211__$1;
(statearr_30216_31707[(1)] = (6));

} else {
var statearr_30217_31709 = state_30211__$1;
(statearr_30217_31709[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (15))){
var inst_30196 = (state_30211[(9)]);
var inst_30201 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30196);
var state_30211__$1 = state_30211;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30211__$1,(17),out,inst_30201);
} else {
if((state_val_30212 === (13))){
var inst_30196 = (state_30211[(9)]);
var inst_30196__$1 = (state_30211[(2)]);
var inst_30197 = cljs.core.some(cljs.core.nil_QMARK_,inst_30196__$1);
var state_30211__$1 = (function (){var statearr_30220 = state_30211;
(statearr_30220[(9)] = inst_30196__$1);

return statearr_30220;
})();
if(cljs.core.truth_(inst_30197)){
var statearr_30222_31715 = state_30211__$1;
(statearr_30222_31715[(1)] = (14));

} else {
var statearr_30224_31716 = state_30211__$1;
(statearr_30224_31716[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (6))){
var state_30211__$1 = state_30211;
var statearr_30226_31719 = state_30211__$1;
(statearr_30226_31719[(2)] = null);

(statearr_30226_31719[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (17))){
var inst_30203 = (state_30211[(2)]);
var state_30211__$1 = (function (){var statearr_30231 = state_30211;
(statearr_30231[(10)] = inst_30203);

return statearr_30231;
})();
var statearr_30233_31720 = state_30211__$1;
(statearr_30233_31720[(2)] = null);

(statearr_30233_31720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (3))){
var inst_30208 = (state_30211[(2)]);
var state_30211__$1 = state_30211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30211__$1,inst_30208);
} else {
if((state_val_30212 === (12))){
var _ = (function (){var statearr_30235 = state_30211;
(statearr_30235[(4)] = cljs.core.rest((state_30211[(4)])));

return statearr_30235;
})();
var state_30211__$1 = state_30211;
var ex30228 = (state_30211__$1[(2)]);
var statearr_30236_31721 = state_30211__$1;
(statearr_30236_31721[(5)] = ex30228);


if((ex30228 instanceof Object)){
var statearr_30237_31722 = state_30211__$1;
(statearr_30237_31722[(1)] = (11));

(statearr_30237_31722[(5)] = null);

} else {
throw ex30228;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (2))){
var inst_30167 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30168 = cnt;
var inst_30169 = (0);
var state_30211__$1 = (function (){var statearr_30243 = state_30211;
(statearr_30243[(7)] = inst_30169);

(statearr_30243[(8)] = inst_30168);

(statearr_30243[(11)] = inst_30167);

return statearr_30243;
})();
var statearr_30244_31725 = state_30211__$1;
(statearr_30244_31725[(2)] = null);

(statearr_30244_31725[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (11))){
var inst_30175 = (state_30211[(2)]);
var inst_30176 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30211__$1 = (function (){var statearr_30245 = state_30211;
(statearr_30245[(12)] = inst_30175);

return statearr_30245;
})();
var statearr_30246_31726 = state_30211__$1;
(statearr_30246_31726[(2)] = inst_30176);

(statearr_30246_31726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (9))){
var inst_30169 = (state_30211[(7)]);
var _ = (function (){var statearr_30249 = state_30211;
(statearr_30249[(4)] = cljs.core.cons((12),(state_30211[(4)])));

return statearr_30249;
})();
var inst_30182 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30169) : chs__$1.call(null,inst_30169));
var inst_30183 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30169) : done.call(null,inst_30169));
var inst_30184 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30182,inst_30183);
var ___$1 = (function (){var statearr_30251 = state_30211;
(statearr_30251[(4)] = cljs.core.rest((state_30211[(4)])));

return statearr_30251;
})();
var state_30211__$1 = state_30211;
var statearr_30252_31727 = state_30211__$1;
(statearr_30252_31727[(2)] = inst_30184);

(statearr_30252_31727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (5))){
var inst_30194 = (state_30211[(2)]);
var state_30211__$1 = (function (){var statearr_30253 = state_30211;
(statearr_30253[(13)] = inst_30194);

return statearr_30253;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30211__$1,(13),dchan);
} else {
if((state_val_30212 === (14))){
var inst_30199 = cljs.core.async.close_BANG_(out);
var state_30211__$1 = state_30211;
var statearr_30254_31732 = state_30211__$1;
(statearr_30254_31732[(2)] = inst_30199);

(statearr_30254_31732[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (16))){
var inst_30206 = (state_30211[(2)]);
var state_30211__$1 = state_30211;
var statearr_30255_31734 = state_30211__$1;
(statearr_30255_31734[(2)] = inst_30206);

(statearr_30255_31734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (10))){
var inst_30169 = (state_30211[(7)]);
var inst_30187 = (state_30211[(2)]);
var inst_30188 = (inst_30169 + (1));
var inst_30169__$1 = inst_30188;
var state_30211__$1 = (function (){var statearr_30257 = state_30211;
(statearr_30257[(7)] = inst_30169__$1);

(statearr_30257[(14)] = inst_30187);

return statearr_30257;
})();
var statearr_30258_31740 = state_30211__$1;
(statearr_30258_31740[(2)] = null);

(statearr_30258_31740[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30212 === (8))){
var inst_30192 = (state_30211[(2)]);
var state_30211__$1 = state_30211;
var statearr_30259_31742 = state_30211__$1;
(statearr_30259_31742[(2)] = inst_30192);

(statearr_30259_31742[(1)] = (5));


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
var cljs$core$async$state_machine__27338__auto__ = null;
var cljs$core$async$state_machine__27338__auto____0 = (function (){
var statearr_30260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30260[(0)] = cljs$core$async$state_machine__27338__auto__);

(statearr_30260[(1)] = (1));

return statearr_30260;
});
var cljs$core$async$state_machine__27338__auto____1 = (function (state_30211){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_30211);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e30261){var ex__27341__auto__ = e30261;
var statearr_30262_31744 = state_30211;
(statearr_30262_31744[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_30211[(4)]))){
var statearr_30263_31745 = state_30211;
(statearr_30263_31745[(1)] = cljs.core.first((state_30211[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31746 = state_30211;
state_30211 = G__31746;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$state_machine__27338__auto__ = function(state_30211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27338__auto____1.call(this,state_30211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27338__auto____0;
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27338__auto____1;
return cljs$core$async$state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_30265 = f__28048__auto__();
(statearr_30265[(6)] = c__28047__auto___31701);

return statearr_30265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
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
var G__30269 = arguments.length;
switch (G__30269) {
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
var c__28047__auto___31753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_30310){
var state_val_30311 = (state_30310[(1)]);
if((state_val_30311 === (7))){
var inst_30287 = (state_30310[(7)]);
var inst_30286 = (state_30310[(8)]);
var inst_30286__$1 = (state_30310[(2)]);
var inst_30287__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30286__$1,(0),null);
var inst_30288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30286__$1,(1),null);
var inst_30289 = (inst_30287__$1 == null);
var state_30310__$1 = (function (){var statearr_30316 = state_30310;
(statearr_30316[(7)] = inst_30287__$1);

(statearr_30316[(9)] = inst_30288);

(statearr_30316[(8)] = inst_30286__$1);

return statearr_30316;
})();
if(cljs.core.truth_(inst_30289)){
var statearr_30318_31758 = state_30310__$1;
(statearr_30318_31758[(1)] = (8));

} else {
var statearr_30319_31759 = state_30310__$1;
(statearr_30319_31759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (1))){
var inst_30272 = cljs.core.vec(chs);
var inst_30273 = inst_30272;
var state_30310__$1 = (function (){var statearr_30320 = state_30310;
(statearr_30320[(10)] = inst_30273);

return statearr_30320;
})();
var statearr_30321_31760 = state_30310__$1;
(statearr_30321_31760[(2)] = null);

(statearr_30321_31760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (4))){
var inst_30273 = (state_30310[(10)]);
var state_30310__$1 = state_30310;
return cljs.core.async.ioc_alts_BANG_(state_30310__$1,(7),inst_30273);
} else {
if((state_val_30311 === (6))){
var inst_30303 = (state_30310[(2)]);
var state_30310__$1 = state_30310;
var statearr_30324_31761 = state_30310__$1;
(statearr_30324_31761[(2)] = inst_30303);

(statearr_30324_31761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (3))){
var inst_30305 = (state_30310[(2)]);
var state_30310__$1 = state_30310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30310__$1,inst_30305);
} else {
if((state_val_30311 === (2))){
var inst_30273 = (state_30310[(10)]);
var inst_30275 = cljs.core.count(inst_30273);
var inst_30276 = (inst_30275 > (0));
var state_30310__$1 = state_30310;
if(cljs.core.truth_(inst_30276)){
var statearr_30329_31763 = state_30310__$1;
(statearr_30329_31763[(1)] = (4));

} else {
var statearr_30330_31764 = state_30310__$1;
(statearr_30330_31764[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (11))){
var inst_30273 = (state_30310[(10)]);
var inst_30296 = (state_30310[(2)]);
var tmp30325 = inst_30273;
var inst_30273__$1 = tmp30325;
var state_30310__$1 = (function (){var statearr_30331 = state_30310;
(statearr_30331[(10)] = inst_30273__$1);

(statearr_30331[(11)] = inst_30296);

return statearr_30331;
})();
var statearr_30332_31765 = state_30310__$1;
(statearr_30332_31765[(2)] = null);

(statearr_30332_31765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (9))){
var inst_30287 = (state_30310[(7)]);
var state_30310__$1 = state_30310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30310__$1,(11),out,inst_30287);
} else {
if((state_val_30311 === (5))){
var inst_30301 = cljs.core.async.close_BANG_(out);
var state_30310__$1 = state_30310;
var statearr_30338_31770 = state_30310__$1;
(statearr_30338_31770[(2)] = inst_30301);

(statearr_30338_31770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (10))){
var inst_30299 = (state_30310[(2)]);
var state_30310__$1 = state_30310;
var statearr_30342_31771 = state_30310__$1;
(statearr_30342_31771[(2)] = inst_30299);

(statearr_30342_31771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30311 === (8))){
var inst_30287 = (state_30310[(7)]);
var inst_30288 = (state_30310[(9)]);
var inst_30273 = (state_30310[(10)]);
var inst_30286 = (state_30310[(8)]);
var inst_30291 = (function (){var cs = inst_30273;
var vec__30281 = inst_30286;
var v = inst_30287;
var c = inst_30288;
return (function (p1__30266_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30266_SHARP_);
});
})();
var inst_30292 = cljs.core.filterv(inst_30291,inst_30273);
var inst_30273__$1 = inst_30292;
var state_30310__$1 = (function (){var statearr_30344 = state_30310;
(statearr_30344[(10)] = inst_30273__$1);

return statearr_30344;
})();
var statearr_30345_31773 = state_30310__$1;
(statearr_30345_31773[(2)] = null);

(statearr_30345_31773[(1)] = (2));


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
var cljs$core$async$state_machine__27338__auto__ = null;
var cljs$core$async$state_machine__27338__auto____0 = (function (){
var statearr_30347 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30347[(0)] = cljs$core$async$state_machine__27338__auto__);

(statearr_30347[(1)] = (1));

return statearr_30347;
});
var cljs$core$async$state_machine__27338__auto____1 = (function (state_30310){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_30310);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e30349){var ex__27341__auto__ = e30349;
var statearr_30350_31775 = state_30310;
(statearr_30350_31775[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_30310[(4)]))){
var statearr_30352_31776 = state_30310;
(statearr_30352_31776[(1)] = cljs.core.first((state_30310[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31777 = state_30310;
state_30310 = G__31777;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$state_machine__27338__auto__ = function(state_30310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27338__auto____1.call(this,state_30310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27338__auto____0;
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27338__auto____1;
return cljs$core$async$state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_30356 = f__28048__auto__();
(statearr_30356[(6)] = c__28047__auto___31753);

return statearr_30356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
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
var G__30369 = arguments.length;
switch (G__30369) {
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
var c__28047__auto___31784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_30407){
var state_val_30408 = (state_30407[(1)]);
if((state_val_30408 === (7))){
var inst_30386 = (state_30407[(7)]);
var inst_30386__$1 = (state_30407[(2)]);
var inst_30387 = (inst_30386__$1 == null);
var inst_30388 = cljs.core.not(inst_30387);
var state_30407__$1 = (function (){var statearr_30414 = state_30407;
(statearr_30414[(7)] = inst_30386__$1);

return statearr_30414;
})();
if(inst_30388){
var statearr_30415_31786 = state_30407__$1;
(statearr_30415_31786[(1)] = (8));

} else {
var statearr_30416_31789 = state_30407__$1;
(statearr_30416_31789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (1))){
var inst_30380 = (0);
var state_30407__$1 = (function (){var statearr_30417 = state_30407;
(statearr_30417[(8)] = inst_30380);

return statearr_30417;
})();
var statearr_30418_31790 = state_30407__$1;
(statearr_30418_31790[(2)] = null);

(statearr_30418_31790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (4))){
var state_30407__$1 = state_30407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30407__$1,(7),ch);
} else {
if((state_val_30408 === (6))){
var inst_30402 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
var statearr_30420_31794 = state_30407__$1;
(statearr_30420_31794[(2)] = inst_30402);

(statearr_30420_31794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (3))){
var inst_30404 = (state_30407[(2)]);
var inst_30405 = cljs.core.async.close_BANG_(out);
var state_30407__$1 = (function (){var statearr_30423 = state_30407;
(statearr_30423[(9)] = inst_30404);

return statearr_30423;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30407__$1,inst_30405);
} else {
if((state_val_30408 === (2))){
var inst_30380 = (state_30407[(8)]);
var inst_30382 = (inst_30380 < n);
var state_30407__$1 = state_30407;
if(cljs.core.truth_(inst_30382)){
var statearr_30427_31797 = state_30407__$1;
(statearr_30427_31797[(1)] = (4));

} else {
var statearr_30429_31798 = state_30407__$1;
(statearr_30429_31798[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (11))){
var inst_30380 = (state_30407[(8)]);
var inst_30393 = (state_30407[(2)]);
var inst_30394 = (inst_30380 + (1));
var inst_30380__$1 = inst_30394;
var state_30407__$1 = (function (){var statearr_30430 = state_30407;
(statearr_30430[(8)] = inst_30380__$1);

(statearr_30430[(10)] = inst_30393);

return statearr_30430;
})();
var statearr_30431_31801 = state_30407__$1;
(statearr_30431_31801[(2)] = null);

(statearr_30431_31801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (9))){
var state_30407__$1 = state_30407;
var statearr_30432_31803 = state_30407__$1;
(statearr_30432_31803[(2)] = null);

(statearr_30432_31803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (5))){
var state_30407__$1 = state_30407;
var statearr_30436_31805 = state_30407__$1;
(statearr_30436_31805[(2)] = null);

(statearr_30436_31805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (10))){
var inst_30398 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
var statearr_30438_31806 = state_30407__$1;
(statearr_30438_31806[(2)] = inst_30398);

(statearr_30438_31806[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (8))){
var inst_30386 = (state_30407[(7)]);
var state_30407__$1 = state_30407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30407__$1,(11),out,inst_30386);
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
var cljs$core$async$state_machine__27338__auto__ = null;
var cljs$core$async$state_machine__27338__auto____0 = (function (){
var statearr_30441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30441[(0)] = cljs$core$async$state_machine__27338__auto__);

(statearr_30441[(1)] = (1));

return statearr_30441;
});
var cljs$core$async$state_machine__27338__auto____1 = (function (state_30407){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_30407);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e30442){var ex__27341__auto__ = e30442;
var statearr_30443_31817 = state_30407;
(statearr_30443_31817[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_30407[(4)]))){
var statearr_30445_31818 = state_30407;
(statearr_30445_31818[(1)] = cljs.core.first((state_30407[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31819 = state_30407;
state_30407 = G__31819;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$state_machine__27338__auto__ = function(state_30407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27338__auto____1.call(this,state_30407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27338__auto____0;
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27338__auto____1;
return cljs$core$async$state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_30448 = f__28048__auto__();
(statearr_30448[(6)] = c__28047__auto___31784);

return statearr_30448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30452 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30452 = (function (f,ch,meta30453){
this.f = f;
this.ch = ch;
this.meta30453 = meta30453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30454,meta30453__$1){
var self__ = this;
var _30454__$1 = this;
return (new cljs.core.async.t_cljs$core$async30452(self__.f,self__.ch,meta30453__$1));
}));

(cljs.core.async.t_cljs$core$async30452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30454){
var self__ = this;
var _30454__$1 = this;
return self__.meta30453;
}));

(cljs.core.async.t_cljs$core$async30452.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30452.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30452.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30452.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30452.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30460 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30460 = (function (f,ch,meta30453,_,fn1,meta30461){
this.f = f;
this.ch = ch;
this.meta30453 = meta30453;
this._ = _;
this.fn1 = fn1;
this.meta30461 = meta30461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30462,meta30461__$1){
var self__ = this;
var _30462__$1 = this;
return (new cljs.core.async.t_cljs$core$async30460(self__.f,self__.ch,self__.meta30453,self__._,self__.fn1,meta30461__$1));
}));

(cljs.core.async.t_cljs$core$async30460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30462){
var self__ = this;
var _30462__$1 = this;
return self__.meta30461;
}));

(cljs.core.async.t_cljs$core$async30460.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async30460.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__30450_SHARP_){
var G__30474 = (((p1__30450_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__30450_SHARP_) : self__.f.call(null,p1__30450_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__30474) : f1.call(null,G__30474));
});
}));

(cljs.core.async.t_cljs$core$async30460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30453","meta30453",-1807050780,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30452","cljs.core.async/t_cljs$core$async30452",-160348682,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30461","meta30461",13375770,null)], null);
}));

(cljs.core.async.t_cljs$core$async30460.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30460");

(cljs.core.async.t_cljs$core$async30460.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30460");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30460.
 */
cljs.core.async.__GT_t_cljs$core$async30460 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30460(f__$1,ch__$1,meta30453__$1,___$2,fn1__$1,meta30461){
return (new cljs.core.async.t_cljs$core$async30460(f__$1,ch__$1,meta30453__$1,___$2,fn1__$1,meta30461));
});

}

return (new cljs.core.async.t_cljs$core$async30460(self__.f,self__.ch,self__.meta30453,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__30483 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30483) : self__.f.call(null,G__30483));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async30452.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30452.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async30452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30453","meta30453",-1807050780,null)], null);
}));

(cljs.core.async.t_cljs$core$async30452.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30452");

(cljs.core.async.t_cljs$core$async30452.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30452");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30452.
 */
cljs.core.async.__GT_t_cljs$core$async30452 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30452(f__$1,ch__$1,meta30453){
return (new cljs.core.async.t_cljs$core$async30452(f__$1,ch__$1,meta30453));
});

}

return (new cljs.core.async.t_cljs$core$async30452(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30489 = (function (f,ch,meta30490){
this.f = f;
this.ch = ch;
this.meta30490 = meta30490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30491,meta30490__$1){
var self__ = this;
var _30491__$1 = this;
return (new cljs.core.async.t_cljs$core$async30489(self__.f,self__.ch,meta30490__$1));
}));

(cljs.core.async.t_cljs$core$async30489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30491){
var self__ = this;
var _30491__$1 = this;
return self__.meta30490;
}));

(cljs.core.async.t_cljs$core$async30489.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30489.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30489.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30489.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30489.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30489.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async30489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30490","meta30490",-528214907,null)], null);
}));

(cljs.core.async.t_cljs$core$async30489.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30489");

(cljs.core.async.t_cljs$core$async30489.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30489");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30489.
 */
cljs.core.async.__GT_t_cljs$core$async30489 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30489(f__$1,ch__$1,meta30490){
return (new cljs.core.async.t_cljs$core$async30489(f__$1,ch__$1,meta30490));
});

}

return (new cljs.core.async.t_cljs$core$async30489(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30511 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30511 = (function (p,ch,meta30512){
this.p = p;
this.ch = ch;
this.meta30512 = meta30512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30513,meta30512__$1){
var self__ = this;
var _30513__$1 = this;
return (new cljs.core.async.t_cljs$core$async30511(self__.p,self__.ch,meta30512__$1));
}));

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30513){
var self__ = this;
var _30513__$1 = this;
return self__.meta30512;
}));

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30511.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async30511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30512","meta30512",2090621203,null)], null);
}));

(cljs.core.async.t_cljs$core$async30511.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30511");

(cljs.core.async.t_cljs$core$async30511.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30511");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30511.
 */
cljs.core.async.__GT_t_cljs$core$async30511 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30511(p__$1,ch__$1,meta30512){
return (new cljs.core.async.t_cljs$core$async30511(p__$1,ch__$1,meta30512));
});

}

return (new cljs.core.async.t_cljs$core$async30511(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30533 = arguments.length;
switch (G__30533) {
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
var c__28047__auto___31867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_30557){
var state_val_30558 = (state_30557[(1)]);
if((state_val_30558 === (7))){
var inst_30553 = (state_30557[(2)]);
var state_30557__$1 = state_30557;
var statearr_30562_31868 = state_30557__$1;
(statearr_30562_31868[(2)] = inst_30553);

(statearr_30562_31868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30558 === (1))){
var state_30557__$1 = state_30557;
var statearr_30565_31870 = state_30557__$1;
(statearr_30565_31870[(2)] = null);

(statearr_30565_31870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30558 === (4))){
var inst_30537 = (state_30557[(7)]);
var inst_30537__$1 = (state_30557[(2)]);
var inst_30539 = (inst_30537__$1 == null);
var state_30557__$1 = (function (){var statearr_30566 = state_30557;
(statearr_30566[(7)] = inst_30537__$1);

return statearr_30566;
})();
if(cljs.core.truth_(inst_30539)){
var statearr_30569_31872 = state_30557__$1;
(statearr_30569_31872[(1)] = (5));

} else {
var statearr_30571_31873 = state_30557__$1;
(statearr_30571_31873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30558 === (6))){
var inst_30537 = (state_30557[(7)]);
var inst_30544 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30537) : p.call(null,inst_30537));
var state_30557__$1 = state_30557;
if(cljs.core.truth_(inst_30544)){
var statearr_30572_31878 = state_30557__$1;
(statearr_30572_31878[(1)] = (8));

} else {
var statearr_30573_31880 = state_30557__$1;
(statearr_30573_31880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30558 === (3))){
var inst_30555 = (state_30557[(2)]);
var state_30557__$1 = state_30557;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30557__$1,inst_30555);
} else {
if((state_val_30558 === (2))){
var state_30557__$1 = state_30557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30557__$1,(4),ch);
} else {
if((state_val_30558 === (11))){
var inst_30547 = (state_30557[(2)]);
var state_30557__$1 = state_30557;
var statearr_30577_31885 = state_30557__$1;
(statearr_30577_31885[(2)] = inst_30547);

(statearr_30577_31885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30558 === (9))){
var state_30557__$1 = state_30557;
var statearr_30579_31886 = state_30557__$1;
(statearr_30579_31886[(2)] = null);

(statearr_30579_31886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30558 === (5))){
var inst_30542 = cljs.core.async.close_BANG_(out);
var state_30557__$1 = state_30557;
var statearr_30581_31888 = state_30557__$1;
(statearr_30581_31888[(2)] = inst_30542);

(statearr_30581_31888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30558 === (10))){
var inst_30550 = (state_30557[(2)]);
var state_30557__$1 = (function (){var statearr_30585 = state_30557;
(statearr_30585[(8)] = inst_30550);

return statearr_30585;
})();
var statearr_30586_31892 = state_30557__$1;
(statearr_30586_31892[(2)] = null);

(statearr_30586_31892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30558 === (8))){
var inst_30537 = (state_30557[(7)]);
var state_30557__$1 = state_30557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30557__$1,(11),out,inst_30537);
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
var cljs$core$async$state_machine__27338__auto__ = null;
var cljs$core$async$state_machine__27338__auto____0 = (function (){
var statearr_30587 = [null,null,null,null,null,null,null,null,null];
(statearr_30587[(0)] = cljs$core$async$state_machine__27338__auto__);

(statearr_30587[(1)] = (1));

return statearr_30587;
});
var cljs$core$async$state_machine__27338__auto____1 = (function (state_30557){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_30557);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e30589){var ex__27341__auto__ = e30589;
var statearr_30590_31895 = state_30557;
(statearr_30590_31895[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_30557[(4)]))){
var statearr_30591_31896 = state_30557;
(statearr_30591_31896[(1)] = cljs.core.first((state_30557[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31897 = state_30557;
state_30557 = G__31897;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$state_machine__27338__auto__ = function(state_30557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27338__auto____1.call(this,state_30557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27338__auto____0;
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27338__auto____1;
return cljs$core$async$state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_30594 = f__28048__auto__();
(statearr_30594[(6)] = c__28047__auto___31867);

return statearr_30594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30600 = arguments.length;
switch (G__30600) {
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
var c__28047__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_30667){
var state_val_30668 = (state_30667[(1)]);
if((state_val_30668 === (7))){
var inst_30663 = (state_30667[(2)]);
var state_30667__$1 = state_30667;
var statearr_30670_31904 = state_30667__$1;
(statearr_30670_31904[(2)] = inst_30663);

(statearr_30670_31904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (20))){
var inst_30633 = (state_30667[(7)]);
var inst_30644 = (state_30667[(2)]);
var inst_30645 = cljs.core.next(inst_30633);
var inst_30618 = inst_30645;
var inst_30619 = null;
var inst_30620 = (0);
var inst_30621 = (0);
var state_30667__$1 = (function (){var statearr_30671 = state_30667;
(statearr_30671[(8)] = inst_30619);

(statearr_30671[(9)] = inst_30644);

(statearr_30671[(10)] = inst_30621);

(statearr_30671[(11)] = inst_30618);

(statearr_30671[(12)] = inst_30620);

return statearr_30671;
})();
var statearr_30672_31905 = state_30667__$1;
(statearr_30672_31905[(2)] = null);

(statearr_30672_31905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (1))){
var state_30667__$1 = state_30667;
var statearr_30673_31906 = state_30667__$1;
(statearr_30673_31906[(2)] = null);

(statearr_30673_31906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (4))){
var inst_30607 = (state_30667[(13)]);
var inst_30607__$1 = (state_30667[(2)]);
var inst_30608 = (inst_30607__$1 == null);
var state_30667__$1 = (function (){var statearr_30676 = state_30667;
(statearr_30676[(13)] = inst_30607__$1);

return statearr_30676;
})();
if(cljs.core.truth_(inst_30608)){
var statearr_30677_31907 = state_30667__$1;
(statearr_30677_31907[(1)] = (5));

} else {
var statearr_30678_31908 = state_30667__$1;
(statearr_30678_31908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (15))){
var state_30667__$1 = state_30667;
var statearr_30685_31909 = state_30667__$1;
(statearr_30685_31909[(2)] = null);

(statearr_30685_31909[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (21))){
var state_30667__$1 = state_30667;
var statearr_30687_31910 = state_30667__$1;
(statearr_30687_31910[(2)] = null);

(statearr_30687_31910[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (13))){
var inst_30619 = (state_30667[(8)]);
var inst_30621 = (state_30667[(10)]);
var inst_30618 = (state_30667[(11)]);
var inst_30620 = (state_30667[(12)]);
var inst_30629 = (state_30667[(2)]);
var inst_30630 = (inst_30621 + (1));
var tmp30681 = inst_30619;
var tmp30682 = inst_30618;
var tmp30683 = inst_30620;
var inst_30618__$1 = tmp30682;
var inst_30619__$1 = tmp30681;
var inst_30620__$1 = tmp30683;
var inst_30621__$1 = inst_30630;
var state_30667__$1 = (function (){var statearr_30691 = state_30667;
(statearr_30691[(8)] = inst_30619__$1);

(statearr_30691[(14)] = inst_30629);

(statearr_30691[(10)] = inst_30621__$1);

(statearr_30691[(11)] = inst_30618__$1);

(statearr_30691[(12)] = inst_30620__$1);

return statearr_30691;
})();
var statearr_30692_31911 = state_30667__$1;
(statearr_30692_31911[(2)] = null);

(statearr_30692_31911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (22))){
var state_30667__$1 = state_30667;
var statearr_30694_31912 = state_30667__$1;
(statearr_30694_31912[(2)] = null);

(statearr_30694_31912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (6))){
var inst_30607 = (state_30667[(13)]);
var inst_30616 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30607) : f.call(null,inst_30607));
var inst_30617 = cljs.core.seq(inst_30616);
var inst_30618 = inst_30617;
var inst_30619 = null;
var inst_30620 = (0);
var inst_30621 = (0);
var state_30667__$1 = (function (){var statearr_30698 = state_30667;
(statearr_30698[(8)] = inst_30619);

(statearr_30698[(10)] = inst_30621);

(statearr_30698[(11)] = inst_30618);

(statearr_30698[(12)] = inst_30620);

return statearr_30698;
})();
var statearr_30700_31913 = state_30667__$1;
(statearr_30700_31913[(2)] = null);

(statearr_30700_31913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (17))){
var inst_30633 = (state_30667[(7)]);
var inst_30637 = cljs.core.chunk_first(inst_30633);
var inst_30638 = cljs.core.chunk_rest(inst_30633);
var inst_30639 = cljs.core.count(inst_30637);
var inst_30618 = inst_30638;
var inst_30619 = inst_30637;
var inst_30620 = inst_30639;
var inst_30621 = (0);
var state_30667__$1 = (function (){var statearr_30701 = state_30667;
(statearr_30701[(8)] = inst_30619);

(statearr_30701[(10)] = inst_30621);

(statearr_30701[(11)] = inst_30618);

(statearr_30701[(12)] = inst_30620);

return statearr_30701;
})();
var statearr_30702_31916 = state_30667__$1;
(statearr_30702_31916[(2)] = null);

(statearr_30702_31916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (3))){
var inst_30665 = (state_30667[(2)]);
var state_30667__$1 = state_30667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30667__$1,inst_30665);
} else {
if((state_val_30668 === (12))){
var inst_30653 = (state_30667[(2)]);
var state_30667__$1 = state_30667;
var statearr_30706_31918 = state_30667__$1;
(statearr_30706_31918[(2)] = inst_30653);

(statearr_30706_31918[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (2))){
var state_30667__$1 = state_30667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30667__$1,(4),in$);
} else {
if((state_val_30668 === (23))){
var inst_30661 = (state_30667[(2)]);
var state_30667__$1 = state_30667;
var statearr_30708_31920 = state_30667__$1;
(statearr_30708_31920[(2)] = inst_30661);

(statearr_30708_31920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (19))){
var inst_30648 = (state_30667[(2)]);
var state_30667__$1 = state_30667;
var statearr_30713_31921 = state_30667__$1;
(statearr_30713_31921[(2)] = inst_30648);

(statearr_30713_31921[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (11))){
var inst_30633 = (state_30667[(7)]);
var inst_30618 = (state_30667[(11)]);
var inst_30633__$1 = cljs.core.seq(inst_30618);
var state_30667__$1 = (function (){var statearr_30714 = state_30667;
(statearr_30714[(7)] = inst_30633__$1);

return statearr_30714;
})();
if(inst_30633__$1){
var statearr_30716_31924 = state_30667__$1;
(statearr_30716_31924[(1)] = (14));

} else {
var statearr_30717_31925 = state_30667__$1;
(statearr_30717_31925[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (9))){
var inst_30655 = (state_30667[(2)]);
var inst_30656 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_30667__$1 = (function (){var statearr_30722 = state_30667;
(statearr_30722[(15)] = inst_30655);

return statearr_30722;
})();
if(cljs.core.truth_(inst_30656)){
var statearr_30723_31927 = state_30667__$1;
(statearr_30723_31927[(1)] = (21));

} else {
var statearr_30724_31928 = state_30667__$1;
(statearr_30724_31928[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (5))){
var inst_30610 = cljs.core.async.close_BANG_(out);
var state_30667__$1 = state_30667;
var statearr_30726_31929 = state_30667__$1;
(statearr_30726_31929[(2)] = inst_30610);

(statearr_30726_31929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (14))){
var inst_30633 = (state_30667[(7)]);
var inst_30635 = cljs.core.chunked_seq_QMARK_(inst_30633);
var state_30667__$1 = state_30667;
if(inst_30635){
var statearr_30728_31930 = state_30667__$1;
(statearr_30728_31930[(1)] = (17));

} else {
var statearr_30730_31931 = state_30667__$1;
(statearr_30730_31931[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (16))){
var inst_30651 = (state_30667[(2)]);
var state_30667__$1 = state_30667;
var statearr_30732_31932 = state_30667__$1;
(statearr_30732_31932[(2)] = inst_30651);

(statearr_30732_31932[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (10))){
var inst_30619 = (state_30667[(8)]);
var inst_30621 = (state_30667[(10)]);
var inst_30627 = cljs.core._nth(inst_30619,inst_30621);
var state_30667__$1 = state_30667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30667__$1,(13),out,inst_30627);
} else {
if((state_val_30668 === (18))){
var inst_30633 = (state_30667[(7)]);
var inst_30642 = cljs.core.first(inst_30633);
var state_30667__$1 = state_30667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30667__$1,(20),out,inst_30642);
} else {
if((state_val_30668 === (8))){
var inst_30621 = (state_30667[(10)]);
var inst_30620 = (state_30667[(12)]);
var inst_30623 = (inst_30621 < inst_30620);
var inst_30624 = inst_30623;
var state_30667__$1 = state_30667;
if(cljs.core.truth_(inst_30624)){
var statearr_30741_31938 = state_30667__$1;
(statearr_30741_31938[(1)] = (10));

} else {
var statearr_30743_31939 = state_30667__$1;
(statearr_30743_31939[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__27338__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27338__auto____0 = (function (){
var statearr_30747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30747[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27338__auto__);

(statearr_30747[(1)] = (1));

return statearr_30747;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27338__auto____1 = (function (state_30667){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_30667);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e30749){var ex__27341__auto__ = e30749;
var statearr_30752_31940 = state_30667;
(statearr_30752_31940[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_30667[(4)]))){
var statearr_30753_31941 = state_30667;
(statearr_30753_31941[(1)] = cljs.core.first((state_30667[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31942 = state_30667;
state_30667 = G__31942;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27338__auto__ = function(state_30667){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27338__auto____1.call(this,state_30667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27338__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27338__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_30760 = f__28048__auto__();
(statearr_30760[(6)] = c__28047__auto__);

return statearr_30760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
}));

return c__28047__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30772 = arguments.length;
switch (G__30772) {
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
var G__30786 = arguments.length;
switch (G__30786) {
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
var G__30794 = arguments.length;
switch (G__30794) {
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
var c__28047__auto___31964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_30835){
var state_val_30836 = (state_30835[(1)]);
if((state_val_30836 === (7))){
var inst_30828 = (state_30835[(2)]);
var state_30835__$1 = state_30835;
var statearr_30846_31967 = state_30835__$1;
(statearr_30846_31967[(2)] = inst_30828);

(statearr_30846_31967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30836 === (1))){
var inst_30809 = null;
var state_30835__$1 = (function (){var statearr_30847 = state_30835;
(statearr_30847[(7)] = inst_30809);

return statearr_30847;
})();
var statearr_30848_31968 = state_30835__$1;
(statearr_30848_31968[(2)] = null);

(statearr_30848_31968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30836 === (4))){
var inst_30812 = (state_30835[(8)]);
var inst_30812__$1 = (state_30835[(2)]);
var inst_30813 = (inst_30812__$1 == null);
var inst_30814 = cljs.core.not(inst_30813);
var state_30835__$1 = (function (){var statearr_30854 = state_30835;
(statearr_30854[(8)] = inst_30812__$1);

return statearr_30854;
})();
if(inst_30814){
var statearr_30855_31970 = state_30835__$1;
(statearr_30855_31970[(1)] = (5));

} else {
var statearr_30856_31971 = state_30835__$1;
(statearr_30856_31971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30836 === (6))){
var state_30835__$1 = state_30835;
var statearr_30858_31973 = state_30835__$1;
(statearr_30858_31973[(2)] = null);

(statearr_30858_31973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30836 === (3))){
var inst_30831 = (state_30835[(2)]);
var inst_30832 = cljs.core.async.close_BANG_(out);
var state_30835__$1 = (function (){var statearr_30859 = state_30835;
(statearr_30859[(9)] = inst_30831);

return statearr_30859;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30835__$1,inst_30832);
} else {
if((state_val_30836 === (2))){
var state_30835__$1 = state_30835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30835__$1,(4),ch);
} else {
if((state_val_30836 === (11))){
var inst_30812 = (state_30835[(8)]);
var inst_30822 = (state_30835[(2)]);
var inst_30809 = inst_30812;
var state_30835__$1 = (function (){var statearr_30863 = state_30835;
(statearr_30863[(10)] = inst_30822);

(statearr_30863[(7)] = inst_30809);

return statearr_30863;
})();
var statearr_30866_31982 = state_30835__$1;
(statearr_30866_31982[(2)] = null);

(statearr_30866_31982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30836 === (9))){
var inst_30812 = (state_30835[(8)]);
var state_30835__$1 = state_30835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30835__$1,(11),out,inst_30812);
} else {
if((state_val_30836 === (5))){
var inst_30812 = (state_30835[(8)]);
var inst_30809 = (state_30835[(7)]);
var inst_30816 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30812,inst_30809);
var state_30835__$1 = state_30835;
if(inst_30816){
var statearr_30874_31990 = state_30835__$1;
(statearr_30874_31990[(1)] = (8));

} else {
var statearr_30876_31992 = state_30835__$1;
(statearr_30876_31992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30836 === (10))){
var inst_30825 = (state_30835[(2)]);
var state_30835__$1 = state_30835;
var statearr_30879_31996 = state_30835__$1;
(statearr_30879_31996[(2)] = inst_30825);

(statearr_30879_31996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30836 === (8))){
var inst_30809 = (state_30835[(7)]);
var tmp30869 = inst_30809;
var inst_30809__$1 = tmp30869;
var state_30835__$1 = (function (){var statearr_30881 = state_30835;
(statearr_30881[(7)] = inst_30809__$1);

return statearr_30881;
})();
var statearr_30884_31998 = state_30835__$1;
(statearr_30884_31998[(2)] = null);

(statearr_30884_31998[(1)] = (2));


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
var cljs$core$async$state_machine__27338__auto__ = null;
var cljs$core$async$state_machine__27338__auto____0 = (function (){
var statearr_30890 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30890[(0)] = cljs$core$async$state_machine__27338__auto__);

(statearr_30890[(1)] = (1));

return statearr_30890;
});
var cljs$core$async$state_machine__27338__auto____1 = (function (state_30835){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_30835);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e30891){var ex__27341__auto__ = e30891;
var statearr_30892_32006 = state_30835;
(statearr_30892_32006[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_30835[(4)]))){
var statearr_30895_32008 = state_30835;
(statearr_30895_32008[(1)] = cljs.core.first((state_30835[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32012 = state_30835;
state_30835 = G__32012;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$state_machine__27338__auto__ = function(state_30835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27338__auto____1.call(this,state_30835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27338__auto____0;
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27338__auto____1;
return cljs$core$async$state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_30896 = f__28048__auto__();
(statearr_30896[(6)] = c__28047__auto___31964);

return statearr_30896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30903 = arguments.length;
switch (G__30903) {
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
var c__28047__auto___32025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_30951){
var state_val_30952 = (state_30951[(1)]);
if((state_val_30952 === (7))){
var inst_30944 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
var statearr_30957_32028 = state_30951__$1;
(statearr_30957_32028[(2)] = inst_30944);

(statearr_30957_32028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (1))){
var inst_30909 = (new Array(n));
var inst_30910 = inst_30909;
var inst_30911 = (0);
var state_30951__$1 = (function (){var statearr_30961 = state_30951;
(statearr_30961[(7)] = inst_30910);

(statearr_30961[(8)] = inst_30911);

return statearr_30961;
})();
var statearr_30962_32034 = state_30951__$1;
(statearr_30962_32034[(2)] = null);

(statearr_30962_32034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (4))){
var inst_30914 = (state_30951[(9)]);
var inst_30914__$1 = (state_30951[(2)]);
var inst_30915 = (inst_30914__$1 == null);
var inst_30916 = cljs.core.not(inst_30915);
var state_30951__$1 = (function (){var statearr_30966 = state_30951;
(statearr_30966[(9)] = inst_30914__$1);

return statearr_30966;
})();
if(inst_30916){
var statearr_30970_32040 = state_30951__$1;
(statearr_30970_32040[(1)] = (5));

} else {
var statearr_30971_32041 = state_30951__$1;
(statearr_30971_32041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (15))){
var inst_30938 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
var statearr_30973_32046 = state_30951__$1;
(statearr_30973_32046[(2)] = inst_30938);

(statearr_30973_32046[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (13))){
var state_30951__$1 = state_30951;
var statearr_30976_32049 = state_30951__$1;
(statearr_30976_32049[(2)] = null);

(statearr_30976_32049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (6))){
var inst_30911 = (state_30951[(8)]);
var inst_30934 = (inst_30911 > (0));
var state_30951__$1 = state_30951;
if(cljs.core.truth_(inst_30934)){
var statearr_30981_32053 = state_30951__$1;
(statearr_30981_32053[(1)] = (12));

} else {
var statearr_30983_32055 = state_30951__$1;
(statearr_30983_32055[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (3))){
var inst_30947 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30951__$1,inst_30947);
} else {
if((state_val_30952 === (12))){
var inst_30910 = (state_30951[(7)]);
var inst_30936 = cljs.core.vec(inst_30910);
var state_30951__$1 = state_30951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30951__$1,(15),out,inst_30936);
} else {
if((state_val_30952 === (2))){
var state_30951__$1 = state_30951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30951__$1,(4),ch);
} else {
if((state_val_30952 === (11))){
var inst_30927 = (state_30951[(2)]);
var inst_30929 = (new Array(n));
var inst_30910 = inst_30929;
var inst_30911 = (0);
var state_30951__$1 = (function (){var statearr_30988 = state_30951;
(statearr_30988[(7)] = inst_30910);

(statearr_30988[(10)] = inst_30927);

(statearr_30988[(8)] = inst_30911);

return statearr_30988;
})();
var statearr_30989_32058 = state_30951__$1;
(statearr_30989_32058[(2)] = null);

(statearr_30989_32058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (9))){
var inst_30910 = (state_30951[(7)]);
var inst_30925 = cljs.core.vec(inst_30910);
var state_30951__$1 = state_30951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30951__$1,(11),out,inst_30925);
} else {
if((state_val_30952 === (5))){
var inst_30914 = (state_30951[(9)]);
var inst_30910 = (state_30951[(7)]);
var inst_30911 = (state_30951[(8)]);
var inst_30919 = (state_30951[(11)]);
var inst_30918 = (inst_30910[inst_30911] = inst_30914);
var inst_30919__$1 = (inst_30911 + (1));
var inst_30921 = (inst_30919__$1 < n);
var state_30951__$1 = (function (){var statearr_30992 = state_30951;
(statearr_30992[(11)] = inst_30919__$1);

(statearr_30992[(12)] = inst_30918);

return statearr_30992;
})();
if(cljs.core.truth_(inst_30921)){
var statearr_30993_32059 = state_30951__$1;
(statearr_30993_32059[(1)] = (8));

} else {
var statearr_30994_32060 = state_30951__$1;
(statearr_30994_32060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (14))){
var inst_30941 = (state_30951[(2)]);
var inst_30942 = cljs.core.async.close_BANG_(out);
var state_30951__$1 = (function (){var statearr_30998 = state_30951;
(statearr_30998[(13)] = inst_30941);

return statearr_30998;
})();
var statearr_31000_32062 = state_30951__$1;
(statearr_31000_32062[(2)] = inst_30942);

(statearr_31000_32062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (10))){
var inst_30932 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
var statearr_31002_32064 = state_30951__$1;
(statearr_31002_32064[(2)] = inst_30932);

(statearr_31002_32064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (8))){
var inst_30910 = (state_30951[(7)]);
var inst_30919 = (state_30951[(11)]);
var tmp30995 = inst_30910;
var inst_30910__$1 = tmp30995;
var inst_30911 = inst_30919;
var state_30951__$1 = (function (){var statearr_31005 = state_30951;
(statearr_31005[(7)] = inst_30910__$1);

(statearr_31005[(8)] = inst_30911);

return statearr_31005;
})();
var statearr_31006_32065 = state_30951__$1;
(statearr_31006_32065[(2)] = null);

(statearr_31006_32065[(1)] = (2));


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
var cljs$core$async$state_machine__27338__auto__ = null;
var cljs$core$async$state_machine__27338__auto____0 = (function (){
var statearr_31010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31010[(0)] = cljs$core$async$state_machine__27338__auto__);

(statearr_31010[(1)] = (1));

return statearr_31010;
});
var cljs$core$async$state_machine__27338__auto____1 = (function (state_30951){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_30951);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e31011){var ex__27341__auto__ = e31011;
var statearr_31013_32068 = state_30951;
(statearr_31013_32068[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_30951[(4)]))){
var statearr_31015_32069 = state_30951;
(statearr_31015_32069[(1)] = cljs.core.first((state_30951[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32071 = state_30951;
state_30951 = G__32071;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$state_machine__27338__auto__ = function(state_30951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27338__auto____1.call(this,state_30951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27338__auto____0;
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27338__auto____1;
return cljs$core$async$state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_31018 = f__28048__auto__();
(statearr_31018[(6)] = c__28047__auto___32025);

return statearr_31018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31029 = arguments.length;
switch (G__31029) {
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
var c__28047__auto___32074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28048__auto__ = (function (){var switch__27337__auto__ = (function (state_31081){
var state_val_31082 = (state_31081[(1)]);
if((state_val_31082 === (7))){
var inst_31076 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31085_32075 = state_31081__$1;
(statearr_31085_32075[(2)] = inst_31076);

(statearr_31085_32075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (1))){
var inst_31035 = [];
var inst_31036 = inst_31035;
var inst_31037 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31081__$1 = (function (){var statearr_31087 = state_31081;
(statearr_31087[(7)] = inst_31036);

(statearr_31087[(8)] = inst_31037);

return statearr_31087;
})();
var statearr_31088_32076 = state_31081__$1;
(statearr_31088_32076[(2)] = null);

(statearr_31088_32076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (4))){
var inst_31040 = (state_31081[(9)]);
var inst_31040__$1 = (state_31081[(2)]);
var inst_31041 = (inst_31040__$1 == null);
var inst_31042 = cljs.core.not(inst_31041);
var state_31081__$1 = (function (){var statearr_31090 = state_31081;
(statearr_31090[(9)] = inst_31040__$1);

return statearr_31090;
})();
if(inst_31042){
var statearr_31091_32078 = state_31081__$1;
(statearr_31091_32078[(1)] = (5));

} else {
var statearr_31092_32080 = state_31081__$1;
(statearr_31092_32080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (15))){
var inst_31036 = (state_31081[(7)]);
var inst_31068 = cljs.core.vec(inst_31036);
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31081__$1,(18),out,inst_31068);
} else {
if((state_val_31082 === (13))){
var inst_31063 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31095_32082 = state_31081__$1;
(statearr_31095_32082[(2)] = inst_31063);

(statearr_31095_32082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (6))){
var inst_31036 = (state_31081[(7)]);
var inst_31065 = inst_31036.length;
var inst_31066 = (inst_31065 > (0));
var state_31081__$1 = state_31081;
if(cljs.core.truth_(inst_31066)){
var statearr_31096_32083 = state_31081__$1;
(statearr_31096_32083[(1)] = (15));

} else {
var statearr_31097_32084 = state_31081__$1;
(statearr_31097_32084[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (17))){
var inst_31073 = (state_31081[(2)]);
var inst_31074 = cljs.core.async.close_BANG_(out);
var state_31081__$1 = (function (){var statearr_31099 = state_31081;
(statearr_31099[(10)] = inst_31073);

return statearr_31099;
})();
var statearr_31100_32085 = state_31081__$1;
(statearr_31100_32085[(2)] = inst_31074);

(statearr_31100_32085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (3))){
var inst_31078 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31081__$1,inst_31078);
} else {
if((state_val_31082 === (12))){
var inst_31036 = (state_31081[(7)]);
var inst_31056 = cljs.core.vec(inst_31036);
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31081__$1,(14),out,inst_31056);
} else {
if((state_val_31082 === (2))){
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31081__$1,(4),ch);
} else {
if((state_val_31082 === (11))){
var inst_31044 = (state_31081[(11)]);
var inst_31036 = (state_31081[(7)]);
var inst_31040 = (state_31081[(9)]);
var inst_31052 = inst_31036.push(inst_31040);
var tmp31101 = inst_31036;
var inst_31036__$1 = tmp31101;
var inst_31037 = inst_31044;
var state_31081__$1 = (function (){var statearr_31105 = state_31081;
(statearr_31105[(12)] = inst_31052);

(statearr_31105[(7)] = inst_31036__$1);

(statearr_31105[(8)] = inst_31037);

return statearr_31105;
})();
var statearr_31106_32087 = state_31081__$1;
(statearr_31106_32087[(2)] = null);

(statearr_31106_32087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (9))){
var inst_31037 = (state_31081[(8)]);
var inst_31048 = cljs.core.keyword_identical_QMARK_(inst_31037,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_31081__$1 = state_31081;
var statearr_31110_32088 = state_31081__$1;
(statearr_31110_32088[(2)] = inst_31048);

(statearr_31110_32088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (5))){
var inst_31044 = (state_31081[(11)]);
var inst_31045 = (state_31081[(13)]);
var inst_31040 = (state_31081[(9)]);
var inst_31037 = (state_31081[(8)]);
var inst_31044__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31040) : f.call(null,inst_31040));
var inst_31045__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31044__$1,inst_31037);
var state_31081__$1 = (function (){var statearr_31115 = state_31081;
(statearr_31115[(11)] = inst_31044__$1);

(statearr_31115[(13)] = inst_31045__$1);

return statearr_31115;
})();
if(inst_31045__$1){
var statearr_31116_32090 = state_31081__$1;
(statearr_31116_32090[(1)] = (8));

} else {
var statearr_31117_32093 = state_31081__$1;
(statearr_31117_32093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (14))){
var inst_31044 = (state_31081[(11)]);
var inst_31040 = (state_31081[(9)]);
var inst_31058 = (state_31081[(2)]);
var inst_31059 = [];
var inst_31060 = inst_31059.push(inst_31040);
var inst_31036 = inst_31059;
var inst_31037 = inst_31044;
var state_31081__$1 = (function (){var statearr_31121 = state_31081;
(statearr_31121[(14)] = inst_31058);

(statearr_31121[(15)] = inst_31060);

(statearr_31121[(7)] = inst_31036);

(statearr_31121[(8)] = inst_31037);

return statearr_31121;
})();
var statearr_31122_32095 = state_31081__$1;
(statearr_31122_32095[(2)] = null);

(statearr_31122_32095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (16))){
var state_31081__$1 = state_31081;
var statearr_31123_32096 = state_31081__$1;
(statearr_31123_32096[(2)] = null);

(statearr_31123_32096[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (10))){
var inst_31050 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
if(cljs.core.truth_(inst_31050)){
var statearr_31124_32098 = state_31081__$1;
(statearr_31124_32098[(1)] = (11));

} else {
var statearr_31127_32099 = state_31081__$1;
(statearr_31127_32099[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (18))){
var inst_31070 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31128_32100 = state_31081__$1;
(statearr_31128_32100[(2)] = inst_31070);

(statearr_31128_32100[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (8))){
var inst_31045 = (state_31081[(13)]);
var state_31081__$1 = state_31081;
var statearr_31130_32101 = state_31081__$1;
(statearr_31130_32101[(2)] = inst_31045);

(statearr_31130_32101[(1)] = (10));


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
var cljs$core$async$state_machine__27338__auto__ = null;
var cljs$core$async$state_machine__27338__auto____0 = (function (){
var statearr_31133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31133[(0)] = cljs$core$async$state_machine__27338__auto__);

(statearr_31133[(1)] = (1));

return statearr_31133;
});
var cljs$core$async$state_machine__27338__auto____1 = (function (state_31081){
while(true){
var ret_value__27339__auto__ = (function (){try{while(true){
var result__27340__auto__ = switch__27337__auto__(state_31081);
if(cljs.core.keyword_identical_QMARK_(result__27340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27340__auto__;
}
break;
}
}catch (e31134){var ex__27341__auto__ = e31134;
var statearr_31135_32102 = state_31081;
(statearr_31135_32102[(2)] = ex__27341__auto__);


if(cljs.core.seq((state_31081[(4)]))){
var statearr_31138_32103 = state_31081;
(statearr_31138_32103[(1)] = cljs.core.first((state_31081[(4)])));

} else {
throw ex__27341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32104 = state_31081;
state_31081 = G__32104;
continue;
} else {
return ret_value__27339__auto__;
}
break;
}
});
cljs$core$async$state_machine__27338__auto__ = function(state_31081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27338__auto____1.call(this,state_31081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27338__auto____0;
cljs$core$async$state_machine__27338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27338__auto____1;
return cljs$core$async$state_machine__27338__auto__;
})()
})();
var state__28049__auto__ = (function (){var statearr_31140 = f__28048__auto__();
(statearr_31140[(6)] = c__28047__auto___32074);

return statearr_31140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28049__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
