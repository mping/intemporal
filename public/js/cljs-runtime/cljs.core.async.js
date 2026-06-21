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
cljs.core.async.t_cljs$core$async30071 = (function (f,blockable,meta30072){
this.f = f;
this.blockable = blockable;
this.meta30072 = meta30072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30073,meta30072__$1){
var self__ = this;
var _30073__$1 = this;
return (new cljs.core.async.t_cljs$core$async30071(self__.f,self__.blockable,meta30072__$1));
}));

(cljs.core.async.t_cljs$core$async30071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30073){
var self__ = this;
var _30073__$1 = this;
return self__.meta30072;
}));

(cljs.core.async.t_cljs$core$async30071.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30071.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30072","meta30072",1804912815,null)], null);
}));

(cljs.core.async.t_cljs$core$async30071.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30071");

(cljs.core.async.t_cljs$core$async30071.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async30071");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30071.
 */
cljs.core.async.__GT_t_cljs$core$async30071 = (function cljs$core$async$__GT_t_cljs$core$async30071(f,blockable,meta30072){
return (new cljs.core.async.t_cljs$core$async30071(f,blockable,meta30072));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30068 = arguments.length;
switch (G__30068) {
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
return (new cljs.core.async.t_cljs$core$async30071(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30088 = arguments.length;
switch (G__30088) {
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
var G__30098 = arguments.length;
switch (G__30098) {
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
var G__30108 = arguments.length;
switch (G__30108) {
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
var val_33085 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33085) : fn1.call(null,val_33085));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33085) : fn1.call(null,val_33085));
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
var G__30126 = arguments.length;
switch (G__30126) {
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
var n__5616__auto___33094 = n;
var x_33095 = (0);
while(true){
if((x_33095 < n__5616__auto___33094)){
(a[x_33095] = x_33095);

var G__33096 = (x_33095 + (1));
x_33095 = G__33096;
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
cljs.core.async.t_cljs$core$async30134 = (function (flag,meta30135){
this.flag = flag;
this.meta30135 = meta30135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30136,meta30135__$1){
var self__ = this;
var _30136__$1 = this;
return (new cljs.core.async.t_cljs$core$async30134(self__.flag,meta30135__$1));
}));

(cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30136){
var self__ = this;
var _30136__$1 = this;
return self__.meta30135;
}));

(cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30134.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30135","meta30135",-108898427,null)], null);
}));

(cljs.core.async.t_cljs$core$async30134.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30134");

(cljs.core.async.t_cljs$core$async30134.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async30134");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30134.
 */
cljs.core.async.__GT_t_cljs$core$async30134 = (function cljs$core$async$__GT_t_cljs$core$async30134(flag,meta30135){
return (new cljs.core.async.t_cljs$core$async30134(flag,meta30135));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async30134(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30147 = (function (flag,cb,meta30148){
this.flag = flag;
this.cb = cb;
this.meta30148 = meta30148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30149,meta30148__$1){
var self__ = this;
var _30149__$1 = this;
return (new cljs.core.async.t_cljs$core$async30147(self__.flag,self__.cb,meta30148__$1));
}));

(cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30149){
var self__ = this;
var _30149__$1 = this;
return self__.meta30148;
}));

(cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30147.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30148","meta30148",-317995787,null)], null);
}));

(cljs.core.async.t_cljs$core$async30147.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30147");

(cljs.core.async.t_cljs$core$async30147.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async30147");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30147.
 */
cljs.core.async.__GT_t_cljs$core$async30147 = (function cljs$core$async$__GT_t_cljs$core$async30147(flag,cb,meta30148){
return (new cljs.core.async.t_cljs$core$async30147(flag,cb,meta30148));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async30147(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_33106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_33106)){
if((!(((port_33106.cljs$core$IFn$_invoke$arity$1 ? port_33106.cljs$core$IFn$_invoke$arity$1((1)) : port_33106.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__33107 = (i + (1));
i = G__33107;
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
return (function (p1__30163_SHARP_){
var G__30172 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30163_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30172) : fret.call(null,G__30172));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__30165_SHARP_){
var G__30177 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30165_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30177) : fret.call(null,G__30177));
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
var G__33116 = (i + (1));
i = G__33116;
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
var len__5749__auto___33119 = arguments.length;
var i__5750__auto___33120 = (0);
while(true){
if((i__5750__auto___33120 < len__5749__auto___33119)){
args__5755__auto__.push((arguments[i__5750__auto___33120]));

var G__33121 = (i__5750__auto___33120 + (1));
i__5750__auto___33120 = G__33121;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30188){
var map__30189 = p__30188;
var map__30189__$1 = cljs.core.__destructure_map(map__30189);
var opts = map__30189__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30183){
var G__30184 = cljs.core.first(seq30183);
var seq30183__$1 = cljs.core.next(seq30183);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30184,seq30183__$1);
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
var G__30199 = arguments.length;
switch (G__30199) {
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
var c__30003__auto___33126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = (function (state_30246){
var state_val_30249 = (state_30246[(1)]);
if((state_val_30249 === (7))){
var inst_30241 = (state_30246[(2)]);
var state_30246__$1 = state_30246;
var statearr_30258_33132 = state_30246__$1;
(statearr_30258_33132[(2)] = inst_30241);

(statearr_30258_33132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (1))){
var state_30246__$1 = state_30246;
var statearr_30259_33133 = state_30246__$1;
(statearr_30259_33133[(2)] = null);

(statearr_30259_33133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (4))){
var inst_30216 = (state_30246[(7)]);
var inst_30216__$1 = (state_30246[(2)]);
var inst_30218 = (inst_30216__$1 == null);
var state_30246__$1 = (function (){var statearr_30262 = state_30246;
(statearr_30262[(7)] = inst_30216__$1);

return statearr_30262;
})();
if(cljs.core.truth_(inst_30218)){
var statearr_30264_33134 = state_30246__$1;
(statearr_30264_33134[(1)] = (5));

} else {
var statearr_30266_33135 = state_30246__$1;
(statearr_30266_33135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (13))){
var state_30246__$1 = state_30246;
var statearr_30272_33137 = state_30246__$1;
(statearr_30272_33137[(2)] = null);

(statearr_30272_33137[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (6))){
var inst_30216 = (state_30246[(7)]);
var state_30246__$1 = state_30246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30246__$1,(11),to,inst_30216);
} else {
if((state_val_30249 === (3))){
var inst_30243 = (state_30246[(2)]);
var state_30246__$1 = state_30246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30246__$1,inst_30243);
} else {
if((state_val_30249 === (12))){
var state_30246__$1 = state_30246;
var statearr_30273_33139 = state_30246__$1;
(statearr_30273_33139[(2)] = null);

(statearr_30273_33139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (2))){
var state_30246__$1 = state_30246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30246__$1,(4),from);
} else {
if((state_val_30249 === (11))){
var inst_30234 = (state_30246[(2)]);
var state_30246__$1 = state_30246;
if(cljs.core.truth_(inst_30234)){
var statearr_30274_33141 = state_30246__$1;
(statearr_30274_33141[(1)] = (12));

} else {
var statearr_30275_33142 = state_30246__$1;
(statearr_30275_33142[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (9))){
var state_30246__$1 = state_30246;
var statearr_30276_33143 = state_30246__$1;
(statearr_30276_33143[(2)] = null);

(statearr_30276_33143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (5))){
var state_30246__$1 = state_30246;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30278_33146 = state_30246__$1;
(statearr_30278_33146[(1)] = (8));

} else {
var statearr_30279_33147 = state_30246__$1;
(statearr_30279_33147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (14))){
var inst_30239 = (state_30246[(2)]);
var state_30246__$1 = state_30246;
var statearr_30280_33148 = state_30246__$1;
(statearr_30280_33148[(2)] = inst_30239);

(statearr_30280_33148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (10))){
var inst_30231 = (state_30246[(2)]);
var state_30246__$1 = state_30246;
var statearr_30283_33149 = state_30246__$1;
(statearr_30283_33149[(2)] = inst_30231);

(statearr_30283_33149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30249 === (8))){
var inst_30226 = cljs.core.async.close_BANG_(to);
var state_30246__$1 = state_30246;
var statearr_30286_33150 = state_30246__$1;
(statearr_30286_33150[(2)] = inst_30226);

(statearr_30286_33150[(1)] = (10));


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
var cljs$core$async$state_machine__28700__auto__ = null;
var cljs$core$async$state_machine__28700__auto____0 = (function (){
var statearr_30289 = [null,null,null,null,null,null,null,null];
(statearr_30289[(0)] = cljs$core$async$state_machine__28700__auto__);

(statearr_30289[(1)] = (1));

return statearr_30289;
});
var cljs$core$async$state_machine__28700__auto____1 = (function (state_30246){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_30246);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e30290){var ex__28703__auto__ = e30290;
var statearr_30291_33151 = state_30246;
(statearr_30291_33151[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_30246[(4)]))){
var statearr_30292_33152 = state_30246;
(statearr_30292_33152[(1)] = cljs.core.first((state_30246[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33153 = state_30246;
state_30246 = G__33153;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$state_machine__28700__auto__ = function(state_30246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28700__auto____1.call(this,state_30246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28700__auto____0;
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28700__auto____1;
return cljs$core$async$state_machine__28700__auto__;
})()
})();
var state__30005__auto__ = (function (){var statearr_30318 = f__30004__auto__();
(statearr_30318[(6)] = c__30003__auto___33126);

return statearr_30318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
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
var process__$1 = (function (p__30332){
var vec__30333 = p__30332;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30333,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30333,(1),null);
var job = vec__30333;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30003__auto___33160 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = (function (state_30342){
var state_val_30343 = (state_30342[(1)]);
if((state_val_30343 === (1))){
var state_30342__$1 = state_30342;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30342__$1,(2),res,v);
} else {
if((state_val_30343 === (2))){
var inst_30339 = (state_30342[(2)]);
var inst_30340 = cljs.core.async.close_BANG_(res);
var state_30342__$1 = (function (){var statearr_30347 = state_30342;
(statearr_30347[(7)] = inst_30339);

return statearr_30347;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30342__$1,inst_30340);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____0 = (function (){
var statearr_30350 = [null,null,null,null,null,null,null,null];
(statearr_30350[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__);

(statearr_30350[(1)] = (1));

return statearr_30350;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____1 = (function (state_30342){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_30342);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e30353){var ex__28703__auto__ = e30353;
var statearr_30354_33162 = state_30342;
(statearr_30354_33162[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_30342[(4)]))){
var statearr_30355_33163 = state_30342;
(statearr_30355_33163[(1)] = cljs.core.first((state_30342[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33165 = state_30342;
state_30342 = G__33165;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__ = function(state_30342){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____1.call(this,state_30342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__;
})()
})();
var state__30005__auto__ = (function (){var statearr_30358 = f__30004__auto__();
(statearr_30358[(6)] = c__30003__auto___33160);

return statearr_30358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30364){
var vec__30365 = p__30364;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30365,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30365,(1),null);
var job = vec__30365;
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
var n__5616__auto___33168 = n;
var __33169 = (0);
while(true){
if((__33169 < n__5616__auto___33168)){
var G__30370_33170 = type;
var G__30370_33171__$1 = (((G__30370_33170 instanceof cljs.core.Keyword))?G__30370_33170.fqn:null);
switch (G__30370_33171__$1) {
case "compute":
var c__30003__auto___33173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33169,c__30003__auto___33173,G__30370_33170,G__30370_33171__$1,n__5616__auto___33168,jobs,results,process__$1,async){
return (function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = ((function (__33169,c__30003__auto___33173,G__30370_33170,G__30370_33171__$1,n__5616__auto___33168,jobs,results,process__$1,async){
return (function (state_30387){
var state_val_30388 = (state_30387[(1)]);
if((state_val_30388 === (1))){
var state_30387__$1 = state_30387;
var statearr_30394_33174 = state_30387__$1;
(statearr_30394_33174[(2)] = null);

(statearr_30394_33174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (2))){
var state_30387__$1 = state_30387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30387__$1,(4),jobs);
} else {
if((state_val_30388 === (3))){
var inst_30385 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30387__$1,inst_30385);
} else {
if((state_val_30388 === (4))){
var inst_30374 = (state_30387[(2)]);
var inst_30375 = process__$1(inst_30374);
var state_30387__$1 = state_30387;
if(cljs.core.truth_(inst_30375)){
var statearr_30396_33176 = state_30387__$1;
(statearr_30396_33176[(1)] = (5));

} else {
var statearr_30397_33178 = state_30387__$1;
(statearr_30397_33178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (5))){
var state_30387__$1 = state_30387;
var statearr_30398_33179 = state_30387__$1;
(statearr_30398_33179[(2)] = null);

(statearr_30398_33179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (6))){
var state_30387__$1 = state_30387;
var statearr_30399_33181 = state_30387__$1;
(statearr_30399_33181[(2)] = null);

(statearr_30399_33181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (7))){
var inst_30383 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30400_33182 = state_30387__$1;
(statearr_30400_33182[(2)] = inst_30383);

(statearr_30400_33182[(1)] = (3));


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
});})(__33169,c__30003__auto___33173,G__30370_33170,G__30370_33171__$1,n__5616__auto___33168,jobs,results,process__$1,async))
;
return ((function (__33169,switch__28699__auto__,c__30003__auto___33173,G__30370_33170,G__30370_33171__$1,n__5616__auto___33168,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____0 = (function (){
var statearr_30402 = [null,null,null,null,null,null,null];
(statearr_30402[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__);

(statearr_30402[(1)] = (1));

return statearr_30402;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____1 = (function (state_30387){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_30387);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e30406){var ex__28703__auto__ = e30406;
var statearr_30407_33185 = state_30387;
(statearr_30407_33185[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_30387[(4)]))){
var statearr_30408_33186 = state_30387;
(statearr_30408_33186[(1)] = cljs.core.first((state_30387[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33188 = state_30387;
state_30387 = G__33188;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__ = function(state_30387){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____1.call(this,state_30387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__;
})()
;})(__33169,switch__28699__auto__,c__30003__auto___33173,G__30370_33170,G__30370_33171__$1,n__5616__auto___33168,jobs,results,process__$1,async))
})();
var state__30005__auto__ = (function (){var statearr_30411 = f__30004__auto__();
(statearr_30411[(6)] = c__30003__auto___33173);

return statearr_30411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
});})(__33169,c__30003__auto___33173,G__30370_33170,G__30370_33171__$1,n__5616__auto___33168,jobs,results,process__$1,async))
);


break;
case "async":
var c__30003__auto___33189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33169,c__30003__auto___33189,G__30370_33170,G__30370_33171__$1,n__5616__auto___33168,jobs,results,process__$1,async){
return (function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = ((function (__33169,c__30003__auto___33189,G__30370_33170,G__30370_33171__$1,n__5616__auto___33168,jobs,results,process__$1,async){
return (function (state_30427){
var state_val_30428 = (state_30427[(1)]);
if((state_val_30428 === (1))){
var state_30427__$1 = state_30427;
var statearr_30429_33190 = state_30427__$1;
(statearr_30429_33190[(2)] = null);

(statearr_30429_33190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (2))){
var state_30427__$1 = state_30427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30427__$1,(4),jobs);
} else {
if((state_val_30428 === (3))){
var inst_30425 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30427__$1,inst_30425);
} else {
if((state_val_30428 === (4))){
var inst_30417 = (state_30427[(2)]);
var inst_30418 = async(inst_30417);
var state_30427__$1 = state_30427;
if(cljs.core.truth_(inst_30418)){
var statearr_30433_33193 = state_30427__$1;
(statearr_30433_33193[(1)] = (5));

} else {
var statearr_30434_33194 = state_30427__$1;
(statearr_30434_33194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (5))){
var state_30427__$1 = state_30427;
var statearr_30441_33196 = state_30427__$1;
(statearr_30441_33196[(2)] = null);

(statearr_30441_33196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (6))){
var state_30427__$1 = state_30427;
var statearr_30442_33197 = state_30427__$1;
(statearr_30442_33197[(2)] = null);

(statearr_30442_33197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (7))){
var inst_30423 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
var statearr_30444_33198 = state_30427__$1;
(statearr_30444_33198[(2)] = inst_30423);

(statearr_30444_33198[(1)] = (3));


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
});})(__33169,c__30003__auto___33189,G__30370_33170,G__30370_33171__$1,n__5616__auto___33168,jobs,results,process__$1,async))
;
return ((function (__33169,switch__28699__auto__,c__30003__auto___33189,G__30370_33170,G__30370_33171__$1,n__5616__auto___33168,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____0 = (function (){
var statearr_30446 = [null,null,null,null,null,null,null];
(statearr_30446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__);

(statearr_30446[(1)] = (1));

return statearr_30446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____1 = (function (state_30427){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_30427);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e30447){var ex__28703__auto__ = e30447;
var statearr_30450_33200 = state_30427;
(statearr_30450_33200[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_30427[(4)]))){
var statearr_30451_33201 = state_30427;
(statearr_30451_33201[(1)] = cljs.core.first((state_30427[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33202 = state_30427;
state_30427 = G__33202;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__ = function(state_30427){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____1.call(this,state_30427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__;
})()
;})(__33169,switch__28699__auto__,c__30003__auto___33189,G__30370_33170,G__30370_33171__$1,n__5616__auto___33168,jobs,results,process__$1,async))
})();
var state__30005__auto__ = (function (){var statearr_30455 = f__30004__auto__();
(statearr_30455[(6)] = c__30003__auto___33189);

return statearr_30455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
});})(__33169,c__30003__auto___33189,G__30370_33170,G__30370_33171__$1,n__5616__auto___33168,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30370_33171__$1)].join('')));

}

var G__33203 = (__33169 + (1));
__33169 = G__33203;
continue;
} else {
}
break;
}

var c__30003__auto___33205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = (function (state_30488){
var state_val_30490 = (state_30488[(1)]);
if((state_val_30490 === (7))){
var inst_30483 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
var statearr_30499_33206 = state_30488__$1;
(statearr_30499_33206[(2)] = inst_30483);

(statearr_30499_33206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (1))){
var state_30488__$1 = state_30488;
var statearr_30500_33207 = state_30488__$1;
(statearr_30500_33207[(2)] = null);

(statearr_30500_33207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (4))){
var inst_30462 = (state_30488[(7)]);
var inst_30462__$1 = (state_30488[(2)]);
var inst_30468 = (inst_30462__$1 == null);
var state_30488__$1 = (function (){var statearr_30503 = state_30488;
(statearr_30503[(7)] = inst_30462__$1);

return statearr_30503;
})();
if(cljs.core.truth_(inst_30468)){
var statearr_30504_33208 = state_30488__$1;
(statearr_30504_33208[(1)] = (5));

} else {
var statearr_30506_33210 = state_30488__$1;
(statearr_30506_33210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (6))){
var inst_30462 = (state_30488[(7)]);
var inst_30472 = (state_30488[(8)]);
var inst_30472__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30473 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30475 = [inst_30462,inst_30472__$1];
var inst_30476 = (new cljs.core.PersistentVector(null,2,(5),inst_30473,inst_30475,null));
var state_30488__$1 = (function (){var statearr_30507 = state_30488;
(statearr_30507[(8)] = inst_30472__$1);

return statearr_30507;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30488__$1,(8),jobs,inst_30476);
} else {
if((state_val_30490 === (3))){
var inst_30485 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30488__$1,inst_30485);
} else {
if((state_val_30490 === (2))){
var state_30488__$1 = state_30488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30488__$1,(4),from);
} else {
if((state_val_30490 === (9))){
var inst_30480 = (state_30488[(2)]);
var state_30488__$1 = (function (){var statearr_30511 = state_30488;
(statearr_30511[(9)] = inst_30480);

return statearr_30511;
})();
var statearr_30512_33214 = state_30488__$1;
(statearr_30512_33214[(2)] = null);

(statearr_30512_33214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (5))){
var inst_30470 = cljs.core.async.close_BANG_(jobs);
var state_30488__$1 = state_30488;
var statearr_30514_33215 = state_30488__$1;
(statearr_30514_33215[(2)] = inst_30470);

(statearr_30514_33215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (8))){
var inst_30472 = (state_30488[(8)]);
var inst_30478 = (state_30488[(2)]);
var state_30488__$1 = (function (){var statearr_30515 = state_30488;
(statearr_30515[(10)] = inst_30478);

return statearr_30515;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30488__$1,(9),results,inst_30472);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____0 = (function (){
var statearr_30520 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30520[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__);

(statearr_30520[(1)] = (1));

return statearr_30520;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____1 = (function (state_30488){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_30488);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e30524){var ex__28703__auto__ = e30524;
var statearr_30525_33218 = state_30488;
(statearr_30525_33218[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_30488[(4)]))){
var statearr_30526_33219 = state_30488;
(statearr_30526_33219[(1)] = cljs.core.first((state_30488[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33222 = state_30488;
state_30488 = G__33222;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__ = function(state_30488){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____1.call(this,state_30488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__;
})()
})();
var state__30005__auto__ = (function (){var statearr_30528 = f__30004__auto__();
(statearr_30528[(6)] = c__30003__auto___33205);

return statearr_30528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
}));


var c__30003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = (function (state_30572){
var state_val_30574 = (state_30572[(1)]);
if((state_val_30574 === (7))){
var inst_30567 = (state_30572[(2)]);
var state_30572__$1 = state_30572;
var statearr_30578_33224 = state_30572__$1;
(statearr_30578_33224[(2)] = inst_30567);

(statearr_30578_33224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (20))){
var state_30572__$1 = state_30572;
var statearr_30579_33225 = state_30572__$1;
(statearr_30579_33225[(2)] = null);

(statearr_30579_33225[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (1))){
var state_30572__$1 = state_30572;
var statearr_30581_33226 = state_30572__$1;
(statearr_30581_33226[(2)] = null);

(statearr_30581_33226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (4))){
var inst_30535 = (state_30572[(7)]);
var inst_30535__$1 = (state_30572[(2)]);
var inst_30536 = (inst_30535__$1 == null);
var state_30572__$1 = (function (){var statearr_30583 = state_30572;
(statearr_30583[(7)] = inst_30535__$1);

return statearr_30583;
})();
if(cljs.core.truth_(inst_30536)){
var statearr_30585_33227 = state_30572__$1;
(statearr_30585_33227[(1)] = (5));

} else {
var statearr_30586_33228 = state_30572__$1;
(statearr_30586_33228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (15))){
var inst_30548 = (state_30572[(8)]);
var state_30572__$1 = state_30572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30572__$1,(18),to,inst_30548);
} else {
if((state_val_30574 === (21))){
var inst_30562 = (state_30572[(2)]);
var state_30572__$1 = state_30572;
var statearr_30589_33229 = state_30572__$1;
(statearr_30589_33229[(2)] = inst_30562);

(statearr_30589_33229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (13))){
var inst_30564 = (state_30572[(2)]);
var state_30572__$1 = (function (){var statearr_30590 = state_30572;
(statearr_30590[(9)] = inst_30564);

return statearr_30590;
})();
var statearr_30591_33230 = state_30572__$1;
(statearr_30591_33230[(2)] = null);

(statearr_30591_33230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (6))){
var inst_30535 = (state_30572[(7)]);
var state_30572__$1 = state_30572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30572__$1,(11),inst_30535);
} else {
if((state_val_30574 === (17))){
var inst_30557 = (state_30572[(2)]);
var state_30572__$1 = state_30572;
if(cljs.core.truth_(inst_30557)){
var statearr_30592_33231 = state_30572__$1;
(statearr_30592_33231[(1)] = (19));

} else {
var statearr_30593_33232 = state_30572__$1;
(statearr_30593_33232[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (3))){
var inst_30569 = (state_30572[(2)]);
var state_30572__$1 = state_30572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30572__$1,inst_30569);
} else {
if((state_val_30574 === (12))){
var inst_30545 = (state_30572[(10)]);
var state_30572__$1 = state_30572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30572__$1,(14),inst_30545);
} else {
if((state_val_30574 === (2))){
var state_30572__$1 = state_30572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30572__$1,(4),results);
} else {
if((state_val_30574 === (19))){
var state_30572__$1 = state_30572;
var statearr_30597_33233 = state_30572__$1;
(statearr_30597_33233[(2)] = null);

(statearr_30597_33233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (11))){
var inst_30545 = (state_30572[(2)]);
var state_30572__$1 = (function (){var statearr_30598 = state_30572;
(statearr_30598[(10)] = inst_30545);

return statearr_30598;
})();
var statearr_30599_33235 = state_30572__$1;
(statearr_30599_33235[(2)] = null);

(statearr_30599_33235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (9))){
var state_30572__$1 = state_30572;
var statearr_30600_33236 = state_30572__$1;
(statearr_30600_33236[(2)] = null);

(statearr_30600_33236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (5))){
var state_30572__$1 = state_30572;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30601_33237 = state_30572__$1;
(statearr_30601_33237[(1)] = (8));

} else {
var statearr_30602_33238 = state_30572__$1;
(statearr_30602_33238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (14))){
var inst_30548 = (state_30572[(8)]);
var inst_30551 = (state_30572[(11)]);
var inst_30548__$1 = (state_30572[(2)]);
var inst_30550 = (inst_30548__$1 == null);
var inst_30551__$1 = cljs.core.not(inst_30550);
var state_30572__$1 = (function (){var statearr_30605 = state_30572;
(statearr_30605[(8)] = inst_30548__$1);

(statearr_30605[(11)] = inst_30551__$1);

return statearr_30605;
})();
if(inst_30551__$1){
var statearr_30606_33240 = state_30572__$1;
(statearr_30606_33240[(1)] = (15));

} else {
var statearr_30607_33241 = state_30572__$1;
(statearr_30607_33241[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (16))){
var inst_30551 = (state_30572[(11)]);
var state_30572__$1 = state_30572;
var statearr_30608_33242 = state_30572__$1;
(statearr_30608_33242[(2)] = inst_30551);

(statearr_30608_33242[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (10))){
var inst_30542 = (state_30572[(2)]);
var state_30572__$1 = state_30572;
var statearr_30609_33243 = state_30572__$1;
(statearr_30609_33243[(2)] = inst_30542);

(statearr_30609_33243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (18))){
var inst_30554 = (state_30572[(2)]);
var state_30572__$1 = state_30572;
var statearr_30610_33244 = state_30572__$1;
(statearr_30610_33244[(2)] = inst_30554);

(statearr_30610_33244[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (8))){
var inst_30539 = cljs.core.async.close_BANG_(to);
var state_30572__$1 = state_30572;
var statearr_30611_33245 = state_30572__$1;
(statearr_30611_33245[(2)] = inst_30539);

(statearr_30611_33245[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____0 = (function (){
var statearr_30616 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30616[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__);

(statearr_30616[(1)] = (1));

return statearr_30616;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____1 = (function (state_30572){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_30572);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e30617){var ex__28703__auto__ = e30617;
var statearr_30618_33247 = state_30572;
(statearr_30618_33247[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_30572[(4)]))){
var statearr_30619_33248 = state_30572;
(statearr_30619_33248[(1)] = cljs.core.first((state_30572[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33249 = state_30572;
state_30572 = G__33249;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__ = function(state_30572){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____1.call(this,state_30572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28700__auto__;
})()
})();
var state__30005__auto__ = (function (){var statearr_30621 = f__30004__auto__();
(statearr_30621[(6)] = c__30003__auto__);

return statearr_30621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
}));

return c__30003__auto__;
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
var G__30623 = arguments.length;
switch (G__30623) {
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
var G__30630 = arguments.length;
switch (G__30630) {
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
var G__30639 = arguments.length;
switch (G__30639) {
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
var c__30003__auto___33258 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = (function (state_30672){
var state_val_30673 = (state_30672[(1)]);
if((state_val_30673 === (7))){
var inst_30668 = (state_30672[(2)]);
var state_30672__$1 = state_30672;
var statearr_30676_33260 = state_30672__$1;
(statearr_30676_33260[(2)] = inst_30668);

(statearr_30676_33260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (1))){
var state_30672__$1 = state_30672;
var statearr_30677_33262 = state_30672__$1;
(statearr_30677_33262[(2)] = null);

(statearr_30677_33262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (4))){
var inst_30649 = (state_30672[(7)]);
var inst_30649__$1 = (state_30672[(2)]);
var inst_30650 = (inst_30649__$1 == null);
var state_30672__$1 = (function (){var statearr_30682 = state_30672;
(statearr_30682[(7)] = inst_30649__$1);

return statearr_30682;
})();
if(cljs.core.truth_(inst_30650)){
var statearr_30683_33263 = state_30672__$1;
(statearr_30683_33263[(1)] = (5));

} else {
var statearr_30685_33264 = state_30672__$1;
(statearr_30685_33264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (13))){
var state_30672__$1 = state_30672;
var statearr_30692_33265 = state_30672__$1;
(statearr_30692_33265[(2)] = null);

(statearr_30692_33265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (6))){
var inst_30649 = (state_30672[(7)]);
var inst_30655 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30649) : p.call(null,inst_30649));
var state_30672__$1 = state_30672;
if(cljs.core.truth_(inst_30655)){
var statearr_30696_33266 = state_30672__$1;
(statearr_30696_33266[(1)] = (9));

} else {
var statearr_30697_33267 = state_30672__$1;
(statearr_30697_33267[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (3))){
var inst_30670 = (state_30672[(2)]);
var state_30672__$1 = state_30672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30672__$1,inst_30670);
} else {
if((state_val_30673 === (12))){
var state_30672__$1 = state_30672;
var statearr_30698_33270 = state_30672__$1;
(statearr_30698_33270[(2)] = null);

(statearr_30698_33270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (2))){
var state_30672__$1 = state_30672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30672__$1,(4),ch);
} else {
if((state_val_30673 === (11))){
var inst_30649 = (state_30672[(7)]);
var inst_30659 = (state_30672[(2)]);
var state_30672__$1 = state_30672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30672__$1,(8),inst_30659,inst_30649);
} else {
if((state_val_30673 === (9))){
var state_30672__$1 = state_30672;
var statearr_30702_33274 = state_30672__$1;
(statearr_30702_33274[(2)] = tc);

(statearr_30702_33274[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (5))){
var inst_30652 = cljs.core.async.close_BANG_(tc);
var inst_30653 = cljs.core.async.close_BANG_(fc);
var state_30672__$1 = (function (){var statearr_30703 = state_30672;
(statearr_30703[(8)] = inst_30652);

return statearr_30703;
})();
var statearr_30704_33275 = state_30672__$1;
(statearr_30704_33275[(2)] = inst_30653);

(statearr_30704_33275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (14))){
var inst_30666 = (state_30672[(2)]);
var state_30672__$1 = state_30672;
var statearr_30705_33276 = state_30672__$1;
(statearr_30705_33276[(2)] = inst_30666);

(statearr_30705_33276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (10))){
var state_30672__$1 = state_30672;
var statearr_30706_33277 = state_30672__$1;
(statearr_30706_33277[(2)] = fc);

(statearr_30706_33277[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (8))){
var inst_30661 = (state_30672[(2)]);
var state_30672__$1 = state_30672;
if(cljs.core.truth_(inst_30661)){
var statearr_30707_33278 = state_30672__$1;
(statearr_30707_33278[(1)] = (12));

} else {
var statearr_30708_33279 = state_30672__$1;
(statearr_30708_33279[(1)] = (13));

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
var cljs$core$async$state_machine__28700__auto__ = null;
var cljs$core$async$state_machine__28700__auto____0 = (function (){
var statearr_30709 = [null,null,null,null,null,null,null,null,null];
(statearr_30709[(0)] = cljs$core$async$state_machine__28700__auto__);

(statearr_30709[(1)] = (1));

return statearr_30709;
});
var cljs$core$async$state_machine__28700__auto____1 = (function (state_30672){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_30672);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e30710){var ex__28703__auto__ = e30710;
var statearr_30711_33283 = state_30672;
(statearr_30711_33283[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_30672[(4)]))){
var statearr_30712_33284 = state_30672;
(statearr_30712_33284[(1)] = cljs.core.first((state_30672[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33285 = state_30672;
state_30672 = G__33285;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$state_machine__28700__auto__ = function(state_30672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28700__auto____1.call(this,state_30672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28700__auto____0;
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28700__auto____1;
return cljs$core$async$state_machine__28700__auto__;
})()
})();
var state__30005__auto__ = (function (){var statearr_30713 = f__30004__auto__();
(statearr_30713[(6)] = c__30003__auto___33258);

return statearr_30713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
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
var c__30003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = (function (state_30738){
var state_val_30739 = (state_30738[(1)]);
if((state_val_30739 === (7))){
var inst_30734 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
var statearr_30741_33286 = state_30738__$1;
(statearr_30741_33286[(2)] = inst_30734);

(statearr_30741_33286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (1))){
var inst_30717 = init;
var inst_30718 = inst_30717;
var state_30738__$1 = (function (){var statearr_30742 = state_30738;
(statearr_30742[(7)] = inst_30718);

return statearr_30742;
})();
var statearr_30743_33287 = state_30738__$1;
(statearr_30743_33287[(2)] = null);

(statearr_30743_33287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (4))){
var inst_30721 = (state_30738[(8)]);
var inst_30721__$1 = (state_30738[(2)]);
var inst_30722 = (inst_30721__$1 == null);
var state_30738__$1 = (function (){var statearr_30745 = state_30738;
(statearr_30745[(8)] = inst_30721__$1);

return statearr_30745;
})();
if(cljs.core.truth_(inst_30722)){
var statearr_30746_33290 = state_30738__$1;
(statearr_30746_33290[(1)] = (5));

} else {
var statearr_30747_33291 = state_30738__$1;
(statearr_30747_33291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (6))){
var inst_30718 = (state_30738[(7)]);
var inst_30721 = (state_30738[(8)]);
var inst_30725 = (state_30738[(9)]);
var inst_30725__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30718,inst_30721) : f.call(null,inst_30718,inst_30721));
var inst_30726 = cljs.core.reduced_QMARK_(inst_30725__$1);
var state_30738__$1 = (function (){var statearr_30748 = state_30738;
(statearr_30748[(9)] = inst_30725__$1);

return statearr_30748;
})();
if(inst_30726){
var statearr_30749_33295 = state_30738__$1;
(statearr_30749_33295[(1)] = (8));

} else {
var statearr_30750_33296 = state_30738__$1;
(statearr_30750_33296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (3))){
var inst_30736 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30738__$1,inst_30736);
} else {
if((state_val_30739 === (2))){
var state_30738__$1 = state_30738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30738__$1,(4),ch);
} else {
if((state_val_30739 === (9))){
var inst_30725 = (state_30738[(9)]);
var inst_30718 = inst_30725;
var state_30738__$1 = (function (){var statearr_30753 = state_30738;
(statearr_30753[(7)] = inst_30718);

return statearr_30753;
})();
var statearr_30754_33297 = state_30738__$1;
(statearr_30754_33297[(2)] = null);

(statearr_30754_33297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (5))){
var inst_30718 = (state_30738[(7)]);
var state_30738__$1 = state_30738;
var statearr_30756_33298 = state_30738__$1;
(statearr_30756_33298[(2)] = inst_30718);

(statearr_30756_33298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (10))){
var inst_30732 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
var statearr_30759_33300 = state_30738__$1;
(statearr_30759_33300[(2)] = inst_30732);

(statearr_30759_33300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (8))){
var inst_30725 = (state_30738[(9)]);
var inst_30728 = cljs.core.deref(inst_30725);
var state_30738__$1 = state_30738;
var statearr_30761_33303 = state_30738__$1;
(statearr_30761_33303[(2)] = inst_30728);

(statearr_30761_33303[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28700__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28700__auto____0 = (function (){
var statearr_30763 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30763[(0)] = cljs$core$async$reduce_$_state_machine__28700__auto__);

(statearr_30763[(1)] = (1));

return statearr_30763;
});
var cljs$core$async$reduce_$_state_machine__28700__auto____1 = (function (state_30738){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_30738);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e30764){var ex__28703__auto__ = e30764;
var statearr_30765_33307 = state_30738;
(statearr_30765_33307[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_30738[(4)]))){
var statearr_30770_33308 = state_30738;
(statearr_30770_33308[(1)] = cljs.core.first((state_30738[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33309 = state_30738;
state_30738 = G__33309;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28700__auto__ = function(state_30738){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28700__auto____1.call(this,state_30738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28700__auto____0;
cljs$core$async$reduce_$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28700__auto____1;
return cljs$core$async$reduce_$_state_machine__28700__auto__;
})()
})();
var state__30005__auto__ = (function (){var statearr_30774 = f__30004__auto__();
(statearr_30774[(6)] = c__30003__auto__);

return statearr_30774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
}));

return c__30003__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = (function (state_30788){
var state_val_30789 = (state_30788[(1)]);
if((state_val_30789 === (1))){
var inst_30782 = cljs.core.async.reduce(f__$1,init,ch);
var state_30788__$1 = state_30788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30788__$1,(2),inst_30782);
} else {
if((state_val_30789 === (2))){
var inst_30784 = (state_30788[(2)]);
var inst_30785 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30784) : f__$1.call(null,inst_30784));
var state_30788__$1 = state_30788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30788__$1,inst_30785);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28700__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28700__auto____0 = (function (){
var statearr_30794 = [null,null,null,null,null,null,null];
(statearr_30794[(0)] = cljs$core$async$transduce_$_state_machine__28700__auto__);

(statearr_30794[(1)] = (1));

return statearr_30794;
});
var cljs$core$async$transduce_$_state_machine__28700__auto____1 = (function (state_30788){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_30788);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e30795){var ex__28703__auto__ = e30795;
var statearr_30796_33313 = state_30788;
(statearr_30796_33313[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_30788[(4)]))){
var statearr_30797_33315 = state_30788;
(statearr_30797_33315[(1)] = cljs.core.first((state_30788[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33317 = state_30788;
state_30788 = G__33317;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28700__auto__ = function(state_30788){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28700__auto____1.call(this,state_30788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28700__auto____0;
cljs$core$async$transduce_$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28700__auto____1;
return cljs$core$async$transduce_$_state_machine__28700__auto__;
})()
})();
var state__30005__auto__ = (function (){var statearr_30798 = f__30004__auto__();
(statearr_30798[(6)] = c__30003__auto__);

return statearr_30798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
}));

return c__30003__auto__;
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
var G__30800 = arguments.length;
switch (G__30800) {
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
var c__30003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = (function (state_30825){
var state_val_30826 = (state_30825[(1)]);
if((state_val_30826 === (7))){
var inst_30807 = (state_30825[(2)]);
var state_30825__$1 = state_30825;
var statearr_30827_33320 = state_30825__$1;
(statearr_30827_33320[(2)] = inst_30807);

(statearr_30827_33320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (1))){
var inst_30801 = cljs.core.seq(coll);
var inst_30802 = inst_30801;
var state_30825__$1 = (function (){var statearr_30828 = state_30825;
(statearr_30828[(7)] = inst_30802);

return statearr_30828;
})();
var statearr_30829_33323 = state_30825__$1;
(statearr_30829_33323[(2)] = null);

(statearr_30829_33323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (4))){
var inst_30802 = (state_30825[(7)]);
var inst_30805 = cljs.core.first(inst_30802);
var state_30825__$1 = state_30825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30825__$1,(7),ch,inst_30805);
} else {
if((state_val_30826 === (13))){
var inst_30819 = (state_30825[(2)]);
var state_30825__$1 = state_30825;
var statearr_30830_33326 = state_30825__$1;
(statearr_30830_33326[(2)] = inst_30819);

(statearr_30830_33326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (6))){
var inst_30810 = (state_30825[(2)]);
var state_30825__$1 = state_30825;
if(cljs.core.truth_(inst_30810)){
var statearr_30831_33328 = state_30825__$1;
(statearr_30831_33328[(1)] = (8));

} else {
var statearr_30832_33329 = state_30825__$1;
(statearr_30832_33329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (3))){
var inst_30823 = (state_30825[(2)]);
var state_30825__$1 = state_30825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30825__$1,inst_30823);
} else {
if((state_val_30826 === (12))){
var state_30825__$1 = state_30825;
var statearr_30833_33330 = state_30825__$1;
(statearr_30833_33330[(2)] = null);

(statearr_30833_33330[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (2))){
var inst_30802 = (state_30825[(7)]);
var state_30825__$1 = state_30825;
if(cljs.core.truth_(inst_30802)){
var statearr_30834_33331 = state_30825__$1;
(statearr_30834_33331[(1)] = (4));

} else {
var statearr_30835_33333 = state_30825__$1;
(statearr_30835_33333[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (11))){
var inst_30816 = cljs.core.async.close_BANG_(ch);
var state_30825__$1 = state_30825;
var statearr_30836_33334 = state_30825__$1;
(statearr_30836_33334[(2)] = inst_30816);

(statearr_30836_33334[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (9))){
var state_30825__$1 = state_30825;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30837_33335 = state_30825__$1;
(statearr_30837_33335[(1)] = (11));

} else {
var statearr_30838_33336 = state_30825__$1;
(statearr_30838_33336[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (5))){
var inst_30802 = (state_30825[(7)]);
var state_30825__$1 = state_30825;
var statearr_30839_33337 = state_30825__$1;
(statearr_30839_33337[(2)] = inst_30802);

(statearr_30839_33337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (10))){
var inst_30821 = (state_30825[(2)]);
var state_30825__$1 = state_30825;
var statearr_30840_33339 = state_30825__$1;
(statearr_30840_33339[(2)] = inst_30821);

(statearr_30840_33339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30826 === (8))){
var inst_30802 = (state_30825[(7)]);
var inst_30812 = cljs.core.next(inst_30802);
var inst_30802__$1 = inst_30812;
var state_30825__$1 = (function (){var statearr_30841 = state_30825;
(statearr_30841[(7)] = inst_30802__$1);

return statearr_30841;
})();
var statearr_30842_33340 = state_30825__$1;
(statearr_30842_33340[(2)] = null);

(statearr_30842_33340[(1)] = (2));


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
var cljs$core$async$state_machine__28700__auto__ = null;
var cljs$core$async$state_machine__28700__auto____0 = (function (){
var statearr_30843 = [null,null,null,null,null,null,null,null];
(statearr_30843[(0)] = cljs$core$async$state_machine__28700__auto__);

(statearr_30843[(1)] = (1));

return statearr_30843;
});
var cljs$core$async$state_machine__28700__auto____1 = (function (state_30825){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_30825);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e30844){var ex__28703__auto__ = e30844;
var statearr_30845_33341 = state_30825;
(statearr_30845_33341[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_30825[(4)]))){
var statearr_30846_33342 = state_30825;
(statearr_30846_33342[(1)] = cljs.core.first((state_30825[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33344 = state_30825;
state_30825 = G__33344;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$state_machine__28700__auto__ = function(state_30825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28700__auto____1.call(this,state_30825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28700__auto____0;
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28700__auto____1;
return cljs$core$async$state_machine__28700__auto__;
})()
})();
var state__30005__auto__ = (function (){var statearr_30850 = f__30004__auto__();
(statearr_30850[(6)] = c__30003__auto__);

return statearr_30850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
}));

return c__30003__auto__;
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
var G__30852 = arguments.length;
switch (G__30852) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33352 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33352(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33354 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33354(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33357 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33357(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33361 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33361(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30856 = (function (ch,cs,meta30857){
this.ch = ch;
this.cs = cs;
this.meta30857 = meta30857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30858,meta30857__$1){
var self__ = this;
var _30858__$1 = this;
return (new cljs.core.async.t_cljs$core$async30856(self__.ch,self__.cs,meta30857__$1));
}));

(cljs.core.async.t_cljs$core$async30856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30858){
var self__ = this;
var _30858__$1 = this;
return self__.meta30857;
}));

(cljs.core.async.t_cljs$core$async30856.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30856.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30856.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30856.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30856.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30856.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30857","meta30857",181409478,null)], null);
}));

(cljs.core.async.t_cljs$core$async30856.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30856");

(cljs.core.async.t_cljs$core$async30856.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async30856");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30856.
 */
cljs.core.async.__GT_t_cljs$core$async30856 = (function cljs$core$async$__GT_t_cljs$core$async30856(ch,cs,meta30857){
return (new cljs.core.async.t_cljs$core$async30856(ch,cs,meta30857));
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
var m = (new cljs.core.async.t_cljs$core$async30856(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30003__auto___33370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = (function (state_31018){
var state_val_31019 = (state_31018[(1)]);
if((state_val_31019 === (7))){
var inst_31013 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
var statearr_31020_33372 = state_31018__$1;
(statearr_31020_33372[(2)] = inst_31013);

(statearr_31020_33372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (20))){
var inst_30898 = (state_31018[(7)]);
var inst_30910 = cljs.core.first(inst_30898);
var inst_30911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30910,(0),null);
var inst_30912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30910,(1),null);
var state_31018__$1 = (function (){var statearr_31021 = state_31018;
(statearr_31021[(8)] = inst_30911);

return statearr_31021;
})();
if(cljs.core.truth_(inst_30912)){
var statearr_31028_33375 = state_31018__$1;
(statearr_31028_33375[(1)] = (22));

} else {
var statearr_31029_33376 = state_31018__$1;
(statearr_31029_33376[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (27))){
var inst_30948 = (state_31018[(9)]);
var inst_30950 = (state_31018[(10)]);
var inst_30959 = (state_31018[(11)]);
var inst_30864 = (state_31018[(12)]);
var inst_30959__$1 = cljs.core._nth(inst_30948,inst_30950);
var inst_30960 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30959__$1,inst_30864,done);
var state_31018__$1 = (function (){var statearr_31030 = state_31018;
(statearr_31030[(11)] = inst_30959__$1);

return statearr_31030;
})();
if(cljs.core.truth_(inst_30960)){
var statearr_31031_33380 = state_31018__$1;
(statearr_31031_33380[(1)] = (30));

} else {
var statearr_31032_33381 = state_31018__$1;
(statearr_31032_33381[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (1))){
var state_31018__$1 = state_31018;
var statearr_31034_33382 = state_31018__$1;
(statearr_31034_33382[(2)] = null);

(statearr_31034_33382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (24))){
var inst_30898 = (state_31018[(7)]);
var inst_30917 = (state_31018[(2)]);
var inst_30918 = cljs.core.next(inst_30898);
var inst_30873 = inst_30918;
var inst_30874 = null;
var inst_30875 = (0);
var inst_30876 = (0);
var state_31018__$1 = (function (){var statearr_31037 = state_31018;
(statearr_31037[(13)] = inst_30917);

(statearr_31037[(14)] = inst_30873);

(statearr_31037[(15)] = inst_30874);

(statearr_31037[(16)] = inst_30875);

(statearr_31037[(17)] = inst_30876);

return statearr_31037;
})();
var statearr_31039_33383 = state_31018__$1;
(statearr_31039_33383[(2)] = null);

(statearr_31039_33383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (39))){
var state_31018__$1 = state_31018;
var statearr_31043_33384 = state_31018__$1;
(statearr_31043_33384[(2)] = null);

(statearr_31043_33384[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (4))){
var inst_30864 = (state_31018[(12)]);
var inst_30864__$1 = (state_31018[(2)]);
var inst_30865 = (inst_30864__$1 == null);
var state_31018__$1 = (function (){var statearr_31047 = state_31018;
(statearr_31047[(12)] = inst_30864__$1);

return statearr_31047;
})();
if(cljs.core.truth_(inst_30865)){
var statearr_31048_33387 = state_31018__$1;
(statearr_31048_33387[(1)] = (5));

} else {
var statearr_31049_33389 = state_31018__$1;
(statearr_31049_33389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (15))){
var inst_30876 = (state_31018[(17)]);
var inst_30873 = (state_31018[(14)]);
var inst_30874 = (state_31018[(15)]);
var inst_30875 = (state_31018[(16)]);
var inst_30894 = (state_31018[(2)]);
var inst_30895 = (inst_30876 + (1));
var tmp31040 = inst_30873;
var tmp31041 = inst_30874;
var tmp31042 = inst_30875;
var inst_30873__$1 = tmp31040;
var inst_30874__$1 = tmp31041;
var inst_30875__$1 = tmp31042;
var inst_30876__$1 = inst_30895;
var state_31018__$1 = (function (){var statearr_31051 = state_31018;
(statearr_31051[(18)] = inst_30894);

(statearr_31051[(14)] = inst_30873__$1);

(statearr_31051[(15)] = inst_30874__$1);

(statearr_31051[(16)] = inst_30875__$1);

(statearr_31051[(17)] = inst_30876__$1);

return statearr_31051;
})();
var statearr_31052_33391 = state_31018__$1;
(statearr_31052_33391[(2)] = null);

(statearr_31052_33391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (21))){
var inst_30921 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
var statearr_31056_33392 = state_31018__$1;
(statearr_31056_33392[(2)] = inst_30921);

(statearr_31056_33392[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (31))){
var inst_30959 = (state_31018[(11)]);
var inst_30963 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30959);
var state_31018__$1 = state_31018;
var statearr_31061_33393 = state_31018__$1;
(statearr_31061_33393[(2)] = inst_30963);

(statearr_31061_33393[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (32))){
var inst_30950 = (state_31018[(10)]);
var inst_30947 = (state_31018[(19)]);
var inst_30948 = (state_31018[(9)]);
var inst_30949 = (state_31018[(20)]);
var inst_30965 = (state_31018[(2)]);
var inst_30967 = (inst_30950 + (1));
var tmp31053 = inst_30947;
var tmp31054 = inst_30948;
var tmp31055 = inst_30949;
var inst_30947__$1 = tmp31053;
var inst_30948__$1 = tmp31054;
var inst_30949__$1 = tmp31055;
var inst_30950__$1 = inst_30967;
var state_31018__$1 = (function (){var statearr_31062 = state_31018;
(statearr_31062[(21)] = inst_30965);

(statearr_31062[(19)] = inst_30947__$1);

(statearr_31062[(9)] = inst_30948__$1);

(statearr_31062[(20)] = inst_30949__$1);

(statearr_31062[(10)] = inst_30950__$1);

return statearr_31062;
})();
var statearr_31063_33395 = state_31018__$1;
(statearr_31063_33395[(2)] = null);

(statearr_31063_33395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (40))){
var inst_30981 = (state_31018[(22)]);
var inst_30989 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30981);
var state_31018__$1 = state_31018;
var statearr_31065_33396 = state_31018__$1;
(statearr_31065_33396[(2)] = inst_30989);

(statearr_31065_33396[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (33))){
var inst_30971 = (state_31018[(23)]);
var inst_30973 = cljs.core.chunked_seq_QMARK_(inst_30971);
var state_31018__$1 = state_31018;
if(inst_30973){
var statearr_31066_33398 = state_31018__$1;
(statearr_31066_33398[(1)] = (36));

} else {
var statearr_31067_33399 = state_31018__$1;
(statearr_31067_33399[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (13))){
var inst_30888 = (state_31018[(24)]);
var inst_30891 = cljs.core.async.close_BANG_(inst_30888);
var state_31018__$1 = state_31018;
var statearr_31073_33403 = state_31018__$1;
(statearr_31073_33403[(2)] = inst_30891);

(statearr_31073_33403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (22))){
var inst_30911 = (state_31018[(8)]);
var inst_30914 = cljs.core.async.close_BANG_(inst_30911);
var state_31018__$1 = state_31018;
var statearr_31076_33404 = state_31018__$1;
(statearr_31076_33404[(2)] = inst_30914);

(statearr_31076_33404[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (36))){
var inst_30971 = (state_31018[(23)]);
var inst_30975 = cljs.core.chunk_first(inst_30971);
var inst_30976 = cljs.core.chunk_rest(inst_30971);
var inst_30977 = cljs.core.count(inst_30975);
var inst_30947 = inst_30976;
var inst_30948 = inst_30975;
var inst_30949 = inst_30977;
var inst_30950 = (0);
var state_31018__$1 = (function (){var statearr_31078 = state_31018;
(statearr_31078[(19)] = inst_30947);

(statearr_31078[(9)] = inst_30948);

(statearr_31078[(20)] = inst_30949);

(statearr_31078[(10)] = inst_30950);

return statearr_31078;
})();
var statearr_31079_33407 = state_31018__$1;
(statearr_31079_33407[(2)] = null);

(statearr_31079_33407[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (41))){
var inst_30971 = (state_31018[(23)]);
var inst_30991 = (state_31018[(2)]);
var inst_30992 = cljs.core.next(inst_30971);
var inst_30947 = inst_30992;
var inst_30948 = null;
var inst_30949 = (0);
var inst_30950 = (0);
var state_31018__$1 = (function (){var statearr_31080 = state_31018;
(statearr_31080[(25)] = inst_30991);

(statearr_31080[(19)] = inst_30947);

(statearr_31080[(9)] = inst_30948);

(statearr_31080[(20)] = inst_30949);

(statearr_31080[(10)] = inst_30950);

return statearr_31080;
})();
var statearr_31084_33411 = state_31018__$1;
(statearr_31084_33411[(2)] = null);

(statearr_31084_33411[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (43))){
var state_31018__$1 = state_31018;
var statearr_31085_33413 = state_31018__$1;
(statearr_31085_33413[(2)] = null);

(statearr_31085_33413[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (29))){
var inst_31000 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
var statearr_31090_33414 = state_31018__$1;
(statearr_31090_33414[(2)] = inst_31000);

(statearr_31090_33414[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (44))){
var inst_31010 = (state_31018[(2)]);
var state_31018__$1 = (function (){var statearr_31091 = state_31018;
(statearr_31091[(26)] = inst_31010);

return statearr_31091;
})();
var statearr_31092_33415 = state_31018__$1;
(statearr_31092_33415[(2)] = null);

(statearr_31092_33415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (6))){
var inst_30934 = (state_31018[(27)]);
var inst_30933 = cljs.core.deref(cs);
var inst_30934__$1 = cljs.core.keys(inst_30933);
var inst_30935 = cljs.core.count(inst_30934__$1);
var inst_30936 = cljs.core.reset_BANG_(dctr,inst_30935);
var inst_30946 = cljs.core.seq(inst_30934__$1);
var inst_30947 = inst_30946;
var inst_30948 = null;
var inst_30949 = (0);
var inst_30950 = (0);
var state_31018__$1 = (function (){var statearr_31093 = state_31018;
(statearr_31093[(27)] = inst_30934__$1);

(statearr_31093[(28)] = inst_30936);

(statearr_31093[(19)] = inst_30947);

(statearr_31093[(9)] = inst_30948);

(statearr_31093[(20)] = inst_30949);

(statearr_31093[(10)] = inst_30950);

return statearr_31093;
})();
var statearr_31096_33416 = state_31018__$1;
(statearr_31096_33416[(2)] = null);

(statearr_31096_33416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (28))){
var inst_30947 = (state_31018[(19)]);
var inst_30971 = (state_31018[(23)]);
var inst_30971__$1 = cljs.core.seq(inst_30947);
var state_31018__$1 = (function (){var statearr_31099 = state_31018;
(statearr_31099[(23)] = inst_30971__$1);

return statearr_31099;
})();
if(inst_30971__$1){
var statearr_31100_33417 = state_31018__$1;
(statearr_31100_33417[(1)] = (33));

} else {
var statearr_31101_33418 = state_31018__$1;
(statearr_31101_33418[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (25))){
var inst_30950 = (state_31018[(10)]);
var inst_30949 = (state_31018[(20)]);
var inst_30954 = (inst_30950 < inst_30949);
var inst_30955 = inst_30954;
var state_31018__$1 = state_31018;
if(cljs.core.truth_(inst_30955)){
var statearr_31103_33421 = state_31018__$1;
(statearr_31103_33421[(1)] = (27));

} else {
var statearr_31104_33422 = state_31018__$1;
(statearr_31104_33422[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (34))){
var state_31018__$1 = state_31018;
var statearr_31105_33424 = state_31018__$1;
(statearr_31105_33424[(2)] = null);

(statearr_31105_33424[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (17))){
var state_31018__$1 = state_31018;
var statearr_31109_33426 = state_31018__$1;
(statearr_31109_33426[(2)] = null);

(statearr_31109_33426[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (3))){
var inst_31015 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31018__$1,inst_31015);
} else {
if((state_val_31019 === (12))){
var inst_30926 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
var statearr_31111_33427 = state_31018__$1;
(statearr_31111_33427[(2)] = inst_30926);

(statearr_31111_33427[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (2))){
var state_31018__$1 = state_31018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31018__$1,(4),ch);
} else {
if((state_val_31019 === (23))){
var state_31018__$1 = state_31018;
var statearr_31112_33428 = state_31018__$1;
(statearr_31112_33428[(2)] = null);

(statearr_31112_33428[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (35))){
var inst_30998 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
var statearr_31113_33429 = state_31018__$1;
(statearr_31113_33429[(2)] = inst_30998);

(statearr_31113_33429[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (19))){
var inst_30898 = (state_31018[(7)]);
var inst_30902 = cljs.core.chunk_first(inst_30898);
var inst_30903 = cljs.core.chunk_rest(inst_30898);
var inst_30904 = cljs.core.count(inst_30902);
var inst_30873 = inst_30903;
var inst_30874 = inst_30902;
var inst_30875 = inst_30904;
var inst_30876 = (0);
var state_31018__$1 = (function (){var statearr_31118 = state_31018;
(statearr_31118[(14)] = inst_30873);

(statearr_31118[(15)] = inst_30874);

(statearr_31118[(16)] = inst_30875);

(statearr_31118[(17)] = inst_30876);

return statearr_31118;
})();
var statearr_31119_33430 = state_31018__$1;
(statearr_31119_33430[(2)] = null);

(statearr_31119_33430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (11))){
var inst_30873 = (state_31018[(14)]);
var inst_30898 = (state_31018[(7)]);
var inst_30898__$1 = cljs.core.seq(inst_30873);
var state_31018__$1 = (function (){var statearr_31132 = state_31018;
(statearr_31132[(7)] = inst_30898__$1);

return statearr_31132;
})();
if(inst_30898__$1){
var statearr_31133_33433 = state_31018__$1;
(statearr_31133_33433[(1)] = (16));

} else {
var statearr_31134_33434 = state_31018__$1;
(statearr_31134_33434[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (9))){
var inst_30928 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
var statearr_31135_33436 = state_31018__$1;
(statearr_31135_33436[(2)] = inst_30928);

(statearr_31135_33436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (5))){
var inst_30871 = cljs.core.deref(cs);
var inst_30872 = cljs.core.seq(inst_30871);
var inst_30873 = inst_30872;
var inst_30874 = null;
var inst_30875 = (0);
var inst_30876 = (0);
var state_31018__$1 = (function (){var statearr_31137 = state_31018;
(statearr_31137[(14)] = inst_30873);

(statearr_31137[(15)] = inst_30874);

(statearr_31137[(16)] = inst_30875);

(statearr_31137[(17)] = inst_30876);

return statearr_31137;
})();
var statearr_31138_33439 = state_31018__$1;
(statearr_31138_33439[(2)] = null);

(statearr_31138_33439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (14))){
var state_31018__$1 = state_31018;
var statearr_31141_33441 = state_31018__$1;
(statearr_31141_33441[(2)] = null);

(statearr_31141_33441[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (45))){
var inst_31006 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
var statearr_31144_33443 = state_31018__$1;
(statearr_31144_33443[(2)] = inst_31006);

(statearr_31144_33443[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (26))){
var inst_30934 = (state_31018[(27)]);
var inst_31002 = (state_31018[(2)]);
var inst_31003 = cljs.core.seq(inst_30934);
var state_31018__$1 = (function (){var statearr_31145 = state_31018;
(statearr_31145[(29)] = inst_31002);

return statearr_31145;
})();
if(inst_31003){
var statearr_31146_33444 = state_31018__$1;
(statearr_31146_33444[(1)] = (42));

} else {
var statearr_31147_33445 = state_31018__$1;
(statearr_31147_33445[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (16))){
var inst_30898 = (state_31018[(7)]);
var inst_30900 = cljs.core.chunked_seq_QMARK_(inst_30898);
var state_31018__$1 = state_31018;
if(inst_30900){
var statearr_31149_33446 = state_31018__$1;
(statearr_31149_33446[(1)] = (19));

} else {
var statearr_31150_33447 = state_31018__$1;
(statearr_31150_33447[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (38))){
var inst_30995 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
var statearr_31153_33448 = state_31018__$1;
(statearr_31153_33448[(2)] = inst_30995);

(statearr_31153_33448[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (30))){
var state_31018__$1 = state_31018;
var statearr_31156_33449 = state_31018__$1;
(statearr_31156_33449[(2)] = null);

(statearr_31156_33449[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (10))){
var inst_30874 = (state_31018[(15)]);
var inst_30876 = (state_31018[(17)]);
var inst_30887 = cljs.core._nth(inst_30874,inst_30876);
var inst_30888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30887,(0),null);
var inst_30889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30887,(1),null);
var state_31018__$1 = (function (){var statearr_31157 = state_31018;
(statearr_31157[(24)] = inst_30888);

return statearr_31157;
})();
if(cljs.core.truth_(inst_30889)){
var statearr_31158_33450 = state_31018__$1;
(statearr_31158_33450[(1)] = (13));

} else {
var statearr_31160_33451 = state_31018__$1;
(statearr_31160_33451[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (18))){
var inst_30924 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
var statearr_31161_33452 = state_31018__$1;
(statearr_31161_33452[(2)] = inst_30924);

(statearr_31161_33452[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (42))){
var state_31018__$1 = state_31018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31018__$1,(45),dchan);
} else {
if((state_val_31019 === (37))){
var inst_30971 = (state_31018[(23)]);
var inst_30981 = (state_31018[(22)]);
var inst_30864 = (state_31018[(12)]);
var inst_30981__$1 = cljs.core.first(inst_30971);
var inst_30983 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30981__$1,inst_30864,done);
var state_31018__$1 = (function (){var statearr_31166 = state_31018;
(statearr_31166[(22)] = inst_30981__$1);

return statearr_31166;
})();
if(cljs.core.truth_(inst_30983)){
var statearr_31167_33458 = state_31018__$1;
(statearr_31167_33458[(1)] = (39));

} else {
var statearr_31168_33459 = state_31018__$1;
(statearr_31168_33459[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (8))){
var inst_30876 = (state_31018[(17)]);
var inst_30875 = (state_31018[(16)]);
var inst_30878 = (inst_30876 < inst_30875);
var inst_30879 = inst_30878;
var state_31018__$1 = state_31018;
if(cljs.core.truth_(inst_30879)){
var statearr_31172_33463 = state_31018__$1;
(statearr_31172_33463[(1)] = (10));

} else {
var statearr_31173_33464 = state_31018__$1;
(statearr_31173_33464[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28700__auto__ = null;
var cljs$core$async$mult_$_state_machine__28700__auto____0 = (function (){
var statearr_31185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31185[(0)] = cljs$core$async$mult_$_state_machine__28700__auto__);

(statearr_31185[(1)] = (1));

return statearr_31185;
});
var cljs$core$async$mult_$_state_machine__28700__auto____1 = (function (state_31018){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_31018);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e31191){var ex__28703__auto__ = e31191;
var statearr_31194_33469 = state_31018;
(statearr_31194_33469[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_31018[(4)]))){
var statearr_31195_33470 = state_31018;
(statearr_31195_33470[(1)] = cljs.core.first((state_31018[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33471 = state_31018;
state_31018 = G__33471;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28700__auto__ = function(state_31018){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28700__auto____1.call(this,state_31018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28700__auto____0;
cljs$core$async$mult_$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28700__auto____1;
return cljs$core$async$mult_$_state_machine__28700__auto__;
})()
})();
var state__30005__auto__ = (function (){var statearr_31196 = f__30004__auto__();
(statearr_31196[(6)] = c__30003__auto___33370);

return statearr_31196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
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
var G__31201 = arguments.length;
switch (G__31201) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33478 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33478(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33485 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33485(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33496 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33496(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33500 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33500(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33505 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33505(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33507 = arguments.length;
var i__5750__auto___33508 = (0);
while(true){
if((i__5750__auto___33508 < len__5749__auto___33507)){
args__5755__auto__.push((arguments[i__5750__auto___33508]));

var G__33510 = (i__5750__auto___33508 + (1));
i__5750__auto___33508 = G__33510;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31251){
var map__31252 = p__31251;
var map__31252__$1 = cljs.core.__destructure_map(map__31252);
var opts = map__31252__$1;
var statearr_31253_33511 = state;
(statearr_31253_33511[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31257_33512 = state;
(statearr_31257_33512[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_31258_33513 = state;
(statearr_31258_33513[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31240){
var G__31241 = cljs.core.first(seq31240);
var seq31240__$1 = cljs.core.next(seq31240);
var G__31242 = cljs.core.first(seq31240__$1);
var seq31240__$2 = cljs.core.next(seq31240__$1);
var G__31243 = cljs.core.first(seq31240__$2);
var seq31240__$3 = cljs.core.next(seq31240__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31241,G__31242,G__31243,seq31240__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31272 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31273){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31273 = meta31273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31274,meta31273__$1){
var self__ = this;
var _31274__$1 = this;
return (new cljs.core.async.t_cljs$core$async31272(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31273__$1));
}));

(cljs.core.async.t_cljs$core$async31272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31274){
var self__ = this;
var _31274__$1 = this;
return self__.meta31273;
}));

(cljs.core.async.t_cljs$core$async31272.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31272.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31272.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31272.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31272.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31272.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31272.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31272.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31273","meta31273",-22504413,null)], null);
}));

(cljs.core.async.t_cljs$core$async31272.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31272");

(cljs.core.async.t_cljs$core$async31272.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31272");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31272.
 */
cljs.core.async.__GT_t_cljs$core$async31272 = (function cljs$core$async$__GT_t_cljs$core$async31272(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31273){
return (new cljs.core.async.t_cljs$core$async31272(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31273));
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
var m = (new cljs.core.async.t_cljs$core$async31272(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__30003__auto___33525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = (function (state_31360){
var state_val_31361 = (state_31360[(1)]);
if((state_val_31361 === (7))){
var inst_31316 = (state_31360[(2)]);
var state_31360__$1 = state_31360;
if(cljs.core.truth_(inst_31316)){
var statearr_31362_33527 = state_31360__$1;
(statearr_31362_33527[(1)] = (8));

} else {
var statearr_31363_33528 = state_31360__$1;
(statearr_31363_33528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (20))){
var inst_31309 = (state_31360[(7)]);
var state_31360__$1 = state_31360;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31360__$1,(23),out,inst_31309);
} else {
if((state_val_31361 === (1))){
var inst_31292 = calc_state();
var inst_31293 = cljs.core.__destructure_map(inst_31292);
var inst_31294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31293,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31293,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31293,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31297 = inst_31292;
var state_31360__$1 = (function (){var statearr_31366 = state_31360;
(statearr_31366[(8)] = inst_31294);

(statearr_31366[(9)] = inst_31295);

(statearr_31366[(10)] = inst_31296);

(statearr_31366[(11)] = inst_31297);

return statearr_31366;
})();
var statearr_31367_33532 = state_31360__$1;
(statearr_31367_33532[(2)] = null);

(statearr_31367_33532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (24))){
var inst_31300 = (state_31360[(12)]);
var inst_31297 = inst_31300;
var state_31360__$1 = (function (){var statearr_31368 = state_31360;
(statearr_31368[(11)] = inst_31297);

return statearr_31368;
})();
var statearr_31369_33535 = state_31360__$1;
(statearr_31369_33535[(2)] = null);

(statearr_31369_33535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (4))){
var inst_31309 = (state_31360[(7)]);
var inst_31311 = (state_31360[(13)]);
var inst_31308 = (state_31360[(2)]);
var inst_31309__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31308,(0),null);
var inst_31310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31308,(1),null);
var inst_31311__$1 = (inst_31309__$1 == null);
var state_31360__$1 = (function (){var statearr_31373 = state_31360;
(statearr_31373[(7)] = inst_31309__$1);

(statearr_31373[(14)] = inst_31310);

(statearr_31373[(13)] = inst_31311__$1);

return statearr_31373;
})();
if(cljs.core.truth_(inst_31311__$1)){
var statearr_31374_33540 = state_31360__$1;
(statearr_31374_33540[(1)] = (5));

} else {
var statearr_31375_33541 = state_31360__$1;
(statearr_31375_33541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (15))){
var inst_31301 = (state_31360[(15)]);
var inst_31334 = (state_31360[(16)]);
var inst_31334__$1 = cljs.core.empty_QMARK_(inst_31301);
var state_31360__$1 = (function (){var statearr_31376 = state_31360;
(statearr_31376[(16)] = inst_31334__$1);

return statearr_31376;
})();
if(inst_31334__$1){
var statearr_31377_33544 = state_31360__$1;
(statearr_31377_33544[(1)] = (17));

} else {
var statearr_31378_33545 = state_31360__$1;
(statearr_31378_33545[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (21))){
var inst_31300 = (state_31360[(12)]);
var inst_31297 = inst_31300;
var state_31360__$1 = (function (){var statearr_31382 = state_31360;
(statearr_31382[(11)] = inst_31297);

return statearr_31382;
})();
var statearr_31383_33553 = state_31360__$1;
(statearr_31383_33553[(2)] = null);

(statearr_31383_33553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (13))){
var inst_31327 = (state_31360[(2)]);
var inst_31328 = calc_state();
var inst_31297 = inst_31328;
var state_31360__$1 = (function (){var statearr_31384 = state_31360;
(statearr_31384[(17)] = inst_31327);

(statearr_31384[(11)] = inst_31297);

return statearr_31384;
})();
var statearr_31385_33562 = state_31360__$1;
(statearr_31385_33562[(2)] = null);

(statearr_31385_33562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (22))){
var inst_31354 = (state_31360[(2)]);
var state_31360__$1 = state_31360;
var statearr_31386_33567 = state_31360__$1;
(statearr_31386_33567[(2)] = inst_31354);

(statearr_31386_33567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (6))){
var inst_31310 = (state_31360[(14)]);
var inst_31314 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31310,change);
var state_31360__$1 = state_31360;
var statearr_31390_33570 = state_31360__$1;
(statearr_31390_33570[(2)] = inst_31314);

(statearr_31390_33570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (25))){
var state_31360__$1 = state_31360;
var statearr_31393_33571 = state_31360__$1;
(statearr_31393_33571[(2)] = null);

(statearr_31393_33571[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (17))){
var inst_31302 = (state_31360[(18)]);
var inst_31310 = (state_31360[(14)]);
var inst_31336 = (inst_31302.cljs$core$IFn$_invoke$arity$1 ? inst_31302.cljs$core$IFn$_invoke$arity$1(inst_31310) : inst_31302.call(null,inst_31310));
var inst_31337 = cljs.core.not(inst_31336);
var state_31360__$1 = state_31360;
var statearr_31396_33573 = state_31360__$1;
(statearr_31396_33573[(2)] = inst_31337);

(statearr_31396_33573[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (3))){
var inst_31358 = (state_31360[(2)]);
var state_31360__$1 = state_31360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31360__$1,inst_31358);
} else {
if((state_val_31361 === (12))){
var state_31360__$1 = state_31360;
var statearr_31397_33575 = state_31360__$1;
(statearr_31397_33575[(2)] = null);

(statearr_31397_33575[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (2))){
var inst_31297 = (state_31360[(11)]);
var inst_31300 = (state_31360[(12)]);
var inst_31300__$1 = cljs.core.__destructure_map(inst_31297);
var inst_31301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31300__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31300__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31300__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31360__$1 = (function (){var statearr_31399 = state_31360;
(statearr_31399[(12)] = inst_31300__$1);

(statearr_31399[(15)] = inst_31301);

(statearr_31399[(18)] = inst_31302);

return statearr_31399;
})();
return cljs.core.async.ioc_alts_BANG_(state_31360__$1,(4),inst_31303);
} else {
if((state_val_31361 === (23))){
var inst_31345 = (state_31360[(2)]);
var state_31360__$1 = state_31360;
if(cljs.core.truth_(inst_31345)){
var statearr_31402_33576 = state_31360__$1;
(statearr_31402_33576[(1)] = (24));

} else {
var statearr_31406_33577 = state_31360__$1;
(statearr_31406_33577[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (19))){
var inst_31340 = (state_31360[(2)]);
var state_31360__$1 = state_31360;
var statearr_31411_33578 = state_31360__$1;
(statearr_31411_33578[(2)] = inst_31340);

(statearr_31411_33578[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (11))){
var inst_31310 = (state_31360[(14)]);
var inst_31323 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31310);
var state_31360__$1 = state_31360;
var statearr_31413_33579 = state_31360__$1;
(statearr_31413_33579[(2)] = inst_31323);

(statearr_31413_33579[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (9))){
var inst_31301 = (state_31360[(15)]);
var inst_31310 = (state_31360[(14)]);
var inst_31331 = (state_31360[(19)]);
var inst_31331__$1 = (inst_31301.cljs$core$IFn$_invoke$arity$1 ? inst_31301.cljs$core$IFn$_invoke$arity$1(inst_31310) : inst_31301.call(null,inst_31310));
var state_31360__$1 = (function (){var statearr_31417 = state_31360;
(statearr_31417[(19)] = inst_31331__$1);

return statearr_31417;
})();
if(cljs.core.truth_(inst_31331__$1)){
var statearr_31420_33580 = state_31360__$1;
(statearr_31420_33580[(1)] = (14));

} else {
var statearr_31423_33581 = state_31360__$1;
(statearr_31423_33581[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (5))){
var inst_31311 = (state_31360[(13)]);
var state_31360__$1 = state_31360;
var statearr_31426_33582 = state_31360__$1;
(statearr_31426_33582[(2)] = inst_31311);

(statearr_31426_33582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (14))){
var inst_31331 = (state_31360[(19)]);
var state_31360__$1 = state_31360;
var statearr_31427_33583 = state_31360__$1;
(statearr_31427_33583[(2)] = inst_31331);

(statearr_31427_33583[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (26))){
var inst_31350 = (state_31360[(2)]);
var state_31360__$1 = state_31360;
var statearr_31428_33584 = state_31360__$1;
(statearr_31428_33584[(2)] = inst_31350);

(statearr_31428_33584[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (16))){
var inst_31342 = (state_31360[(2)]);
var state_31360__$1 = state_31360;
if(cljs.core.truth_(inst_31342)){
var statearr_31430_33585 = state_31360__$1;
(statearr_31430_33585[(1)] = (20));

} else {
var statearr_31434_33586 = state_31360__$1;
(statearr_31434_33586[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (10))){
var inst_31356 = (state_31360[(2)]);
var state_31360__$1 = state_31360;
var statearr_31435_33587 = state_31360__$1;
(statearr_31435_33587[(2)] = inst_31356);

(statearr_31435_33587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (18))){
var inst_31334 = (state_31360[(16)]);
var state_31360__$1 = state_31360;
var statearr_31454_33589 = state_31360__$1;
(statearr_31454_33589[(2)] = inst_31334);

(statearr_31454_33589[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (8))){
var inst_31309 = (state_31360[(7)]);
var inst_31321 = (inst_31309 == null);
var state_31360__$1 = state_31360;
if(cljs.core.truth_(inst_31321)){
var statearr_31456_33590 = state_31360__$1;
(statearr_31456_33590[(1)] = (11));

} else {
var statearr_31457_33591 = state_31360__$1;
(statearr_31457_33591[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__28700__auto__ = null;
var cljs$core$async$mix_$_state_machine__28700__auto____0 = (function (){
var statearr_31458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31458[(0)] = cljs$core$async$mix_$_state_machine__28700__auto__);

(statearr_31458[(1)] = (1));

return statearr_31458;
});
var cljs$core$async$mix_$_state_machine__28700__auto____1 = (function (state_31360){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_31360);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e31459){var ex__28703__auto__ = e31459;
var statearr_31460_33592 = state_31360;
(statearr_31460_33592[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_31360[(4)]))){
var statearr_31463_33594 = state_31360;
(statearr_31463_33594[(1)] = cljs.core.first((state_31360[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33596 = state_31360;
state_31360 = G__33596;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28700__auto__ = function(state_31360){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28700__auto____1.call(this,state_31360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28700__auto____0;
cljs$core$async$mix_$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28700__auto____1;
return cljs$core$async$mix_$_state_machine__28700__auto__;
})()
})();
var state__30005__auto__ = (function (){var statearr_31466 = f__30004__auto__();
(statearr_31466[(6)] = c__30003__auto___33525);

return statearr_31466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33599 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33599(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33603 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33603(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33604 = (function() {
var G__33605 = null;
var G__33605__1 = (function (p){
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
var G__33605__2 = (function (p,v){
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
G__33605 = function(p,v){
switch(arguments.length){
case 1:
return G__33605__1.call(this,p);
case 2:
return G__33605__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33605.cljs$core$IFn$_invoke$arity$1 = G__33605__1;
G__33605.cljs$core$IFn$_invoke$arity$2 = G__33605__2;
return G__33605;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31511 = arguments.length;
switch (G__31511) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33604(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33604(p,v);
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
cljs.core.async.t_cljs$core$async31553 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31554){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31554 = meta31554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31555,meta31554__$1){
var self__ = this;
var _31555__$1 = this;
return (new cljs.core.async.t_cljs$core$async31553(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31554__$1));
}));

(cljs.core.async.t_cljs$core$async31553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31555){
var self__ = this;
var _31555__$1 = this;
return self__.meta31554;
}));

(cljs.core.async.t_cljs$core$async31553.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31553.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31553.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31553.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31553.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async31553.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31553.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31554","meta31554",-1328428057,null)], null);
}));

(cljs.core.async.t_cljs$core$async31553.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31553");

(cljs.core.async.t_cljs$core$async31553.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31553");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31553.
 */
cljs.core.async.__GT_t_cljs$core$async31553 = (function cljs$core$async$__GT_t_cljs$core$async31553(ch,topic_fn,buf_fn,mults,ensure_mult,meta31554){
return (new cljs.core.async.t_cljs$core$async31553(ch,topic_fn,buf_fn,mults,ensure_mult,meta31554));
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
var G__31541 = arguments.length;
switch (G__31541) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31531_SHARP_){
if(cljs.core.truth_((p1__31531_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31531_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31531_SHARP_.call(null,topic)))){
return p1__31531_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31531_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async31553(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__30003__auto___33626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = (function (state_31673){
var state_val_31674 = (state_31673[(1)]);
if((state_val_31674 === (7))){
var inst_31668 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31678_33629 = state_31673__$1;
(statearr_31678_33629[(2)] = inst_31668);

(statearr_31678_33629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (20))){
var state_31673__$1 = state_31673;
var statearr_31681_33632 = state_31673__$1;
(statearr_31681_33632[(2)] = null);

(statearr_31681_33632[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (1))){
var state_31673__$1 = state_31673;
var statearr_31684_33633 = state_31673__$1;
(statearr_31684_33633[(2)] = null);

(statearr_31684_33633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (24))){
var inst_31650 = (state_31673[(7)]);
var inst_31659 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31650);
var state_31673__$1 = state_31673;
var statearr_31686_33635 = state_31673__$1;
(statearr_31686_33635[(2)] = inst_31659);

(statearr_31686_33635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (4))){
var inst_31589 = (state_31673[(8)]);
var inst_31589__$1 = (state_31673[(2)]);
var inst_31590 = (inst_31589__$1 == null);
var state_31673__$1 = (function (){var statearr_31689 = state_31673;
(statearr_31689[(8)] = inst_31589__$1);

return statearr_31689;
})();
if(cljs.core.truth_(inst_31590)){
var statearr_31692_33639 = state_31673__$1;
(statearr_31692_33639[(1)] = (5));

} else {
var statearr_31694_33640 = state_31673__$1;
(statearr_31694_33640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (15))){
var inst_31644 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31695_33641 = state_31673__$1;
(statearr_31695_33641[(2)] = inst_31644);

(statearr_31695_33641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (21))){
var inst_31664 = (state_31673[(2)]);
var state_31673__$1 = (function (){var statearr_31697 = state_31673;
(statearr_31697[(9)] = inst_31664);

return statearr_31697;
})();
var statearr_31698_33642 = state_31673__$1;
(statearr_31698_33642[(2)] = null);

(statearr_31698_33642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (13))){
var inst_31619 = (state_31673[(10)]);
var inst_31621 = cljs.core.chunked_seq_QMARK_(inst_31619);
var state_31673__$1 = state_31673;
if(inst_31621){
var statearr_31703_33648 = state_31673__$1;
(statearr_31703_33648[(1)] = (16));

} else {
var statearr_31704_33650 = state_31673__$1;
(statearr_31704_33650[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (22))){
var inst_31656 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
if(cljs.core.truth_(inst_31656)){
var statearr_31705_33652 = state_31673__$1;
(statearr_31705_33652[(1)] = (23));

} else {
var statearr_31706_33653 = state_31673__$1;
(statearr_31706_33653[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (6))){
var inst_31589 = (state_31673[(8)]);
var inst_31650 = (state_31673[(7)]);
var inst_31652 = (state_31673[(11)]);
var inst_31650__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31589) : topic_fn.call(null,inst_31589));
var inst_31651 = cljs.core.deref(mults);
var inst_31652__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31651,inst_31650__$1);
var state_31673__$1 = (function (){var statearr_31708 = state_31673;
(statearr_31708[(7)] = inst_31650__$1);

(statearr_31708[(11)] = inst_31652__$1);

return statearr_31708;
})();
if(cljs.core.truth_(inst_31652__$1)){
var statearr_31710_33654 = state_31673__$1;
(statearr_31710_33654[(1)] = (19));

} else {
var statearr_31712_33655 = state_31673__$1;
(statearr_31712_33655[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (25))){
var inst_31661 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31715_33656 = state_31673__$1;
(statearr_31715_33656[(2)] = inst_31661);

(statearr_31715_33656[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (17))){
var inst_31619 = (state_31673[(10)]);
var inst_31633 = cljs.core.first(inst_31619);
var inst_31634 = cljs.core.async.muxch_STAR_(inst_31633);
var inst_31635 = cljs.core.async.close_BANG_(inst_31634);
var inst_31638 = cljs.core.next(inst_31619);
var inst_31601 = inst_31638;
var inst_31602 = null;
var inst_31603 = (0);
var inst_31604 = (0);
var state_31673__$1 = (function (){var statearr_31721 = state_31673;
(statearr_31721[(12)] = inst_31635);

(statearr_31721[(13)] = inst_31601);

(statearr_31721[(14)] = inst_31602);

(statearr_31721[(15)] = inst_31603);

(statearr_31721[(16)] = inst_31604);

return statearr_31721;
})();
var statearr_31722_33658 = state_31673__$1;
(statearr_31722_33658[(2)] = null);

(statearr_31722_33658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (3))){
var inst_31670 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31673__$1,inst_31670);
} else {
if((state_val_31674 === (12))){
var inst_31646 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31725_33660 = state_31673__$1;
(statearr_31725_33660[(2)] = inst_31646);

(statearr_31725_33660[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (2))){
var state_31673__$1 = state_31673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31673__$1,(4),ch);
} else {
if((state_val_31674 === (23))){
var state_31673__$1 = state_31673;
var statearr_31732_33662 = state_31673__$1;
(statearr_31732_33662[(2)] = null);

(statearr_31732_33662[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (19))){
var inst_31652 = (state_31673[(11)]);
var inst_31589 = (state_31673[(8)]);
var inst_31654 = cljs.core.async.muxch_STAR_(inst_31652);
var state_31673__$1 = state_31673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31673__$1,(22),inst_31654,inst_31589);
} else {
if((state_val_31674 === (11))){
var inst_31601 = (state_31673[(13)]);
var inst_31619 = (state_31673[(10)]);
var inst_31619__$1 = cljs.core.seq(inst_31601);
var state_31673__$1 = (function (){var statearr_31734 = state_31673;
(statearr_31734[(10)] = inst_31619__$1);

return statearr_31734;
})();
if(inst_31619__$1){
var statearr_31735_33664 = state_31673__$1;
(statearr_31735_33664[(1)] = (13));

} else {
var statearr_31736_33665 = state_31673__$1;
(statearr_31736_33665[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (9))){
var inst_31648 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31738_33666 = state_31673__$1;
(statearr_31738_33666[(2)] = inst_31648);

(statearr_31738_33666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (5))){
var inst_31598 = cljs.core.deref(mults);
var inst_31599 = cljs.core.vals(inst_31598);
var inst_31600 = cljs.core.seq(inst_31599);
var inst_31601 = inst_31600;
var inst_31602 = null;
var inst_31603 = (0);
var inst_31604 = (0);
var state_31673__$1 = (function (){var statearr_31755 = state_31673;
(statearr_31755[(13)] = inst_31601);

(statearr_31755[(14)] = inst_31602);

(statearr_31755[(15)] = inst_31603);

(statearr_31755[(16)] = inst_31604);

return statearr_31755;
})();
var statearr_31765_33667 = state_31673__$1;
(statearr_31765_33667[(2)] = null);

(statearr_31765_33667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (14))){
var state_31673__$1 = state_31673;
var statearr_31781_33668 = state_31673__$1;
(statearr_31781_33668[(2)] = null);

(statearr_31781_33668[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (16))){
var inst_31619 = (state_31673[(10)]);
var inst_31623 = cljs.core.chunk_first(inst_31619);
var inst_31624 = cljs.core.chunk_rest(inst_31619);
var inst_31625 = cljs.core.count(inst_31623);
var inst_31601 = inst_31624;
var inst_31602 = inst_31623;
var inst_31603 = inst_31625;
var inst_31604 = (0);
var state_31673__$1 = (function (){var statearr_31788 = state_31673;
(statearr_31788[(13)] = inst_31601);

(statearr_31788[(14)] = inst_31602);

(statearr_31788[(15)] = inst_31603);

(statearr_31788[(16)] = inst_31604);

return statearr_31788;
})();
var statearr_31794_33672 = state_31673__$1;
(statearr_31794_33672[(2)] = null);

(statearr_31794_33672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (10))){
var inst_31602 = (state_31673[(14)]);
var inst_31604 = (state_31673[(16)]);
var inst_31601 = (state_31673[(13)]);
var inst_31603 = (state_31673[(15)]);
var inst_31612 = cljs.core._nth(inst_31602,inst_31604);
var inst_31613 = cljs.core.async.muxch_STAR_(inst_31612);
var inst_31614 = cljs.core.async.close_BANG_(inst_31613);
var inst_31616 = (inst_31604 + (1));
var tmp31778 = inst_31601;
var tmp31779 = inst_31602;
var tmp31780 = inst_31603;
var inst_31601__$1 = tmp31778;
var inst_31602__$1 = tmp31779;
var inst_31603__$1 = tmp31780;
var inst_31604__$1 = inst_31616;
var state_31673__$1 = (function (){var statearr_31795 = state_31673;
(statearr_31795[(17)] = inst_31614);

(statearr_31795[(13)] = inst_31601__$1);

(statearr_31795[(14)] = inst_31602__$1);

(statearr_31795[(15)] = inst_31603__$1);

(statearr_31795[(16)] = inst_31604__$1);

return statearr_31795;
})();
var statearr_31796_33674 = state_31673__$1;
(statearr_31796_33674[(2)] = null);

(statearr_31796_33674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (18))){
var inst_31641 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31797_33675 = state_31673__$1;
(statearr_31797_33675[(2)] = inst_31641);

(statearr_31797_33675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (8))){
var inst_31604 = (state_31673[(16)]);
var inst_31603 = (state_31673[(15)]);
var inst_31609 = (inst_31604 < inst_31603);
var inst_31610 = inst_31609;
var state_31673__$1 = state_31673;
if(cljs.core.truth_(inst_31610)){
var statearr_31800_33676 = state_31673__$1;
(statearr_31800_33676[(1)] = (10));

} else {
var statearr_31802_33677 = state_31673__$1;
(statearr_31802_33677[(1)] = (11));

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
var cljs$core$async$state_machine__28700__auto__ = null;
var cljs$core$async$state_machine__28700__auto____0 = (function (){
var statearr_31804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31804[(0)] = cljs$core$async$state_machine__28700__auto__);

(statearr_31804[(1)] = (1));

return statearr_31804;
});
var cljs$core$async$state_machine__28700__auto____1 = (function (state_31673){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_31673);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e31805){var ex__28703__auto__ = e31805;
var statearr_31807_33679 = state_31673;
(statearr_31807_33679[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_31673[(4)]))){
var statearr_31810_33680 = state_31673;
(statearr_31810_33680[(1)] = cljs.core.first((state_31673[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33681 = state_31673;
state_31673 = G__33681;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$state_machine__28700__auto__ = function(state_31673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28700__auto____1.call(this,state_31673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28700__auto____0;
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28700__auto____1;
return cljs$core$async$state_machine__28700__auto__;
})()
})();
var state__30005__auto__ = (function (){var statearr_31815 = f__30004__auto__();
(statearr_31815[(6)] = c__30003__auto___33626);

return statearr_31815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
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
var G__31817 = arguments.length;
switch (G__31817) {
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
var G__31835 = arguments.length;
switch (G__31835) {
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
var G__31842 = arguments.length;
switch (G__31842) {
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
var c__30003__auto___33691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = (function (state_31906){
var state_val_31907 = (state_31906[(1)]);
if((state_val_31907 === (7))){
var state_31906__$1 = state_31906;
var statearr_31909_33692 = state_31906__$1;
(statearr_31909_33692[(2)] = null);

(statearr_31909_33692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (1))){
var state_31906__$1 = state_31906;
var statearr_31914_33693 = state_31906__$1;
(statearr_31914_33693[(2)] = null);

(statearr_31914_33693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (4))){
var inst_31852 = (state_31906[(7)]);
var inst_31851 = (state_31906[(8)]);
var inst_31854 = (inst_31852 < inst_31851);
var state_31906__$1 = state_31906;
if(cljs.core.truth_(inst_31854)){
var statearr_31916_33694 = state_31906__$1;
(statearr_31916_33694[(1)] = (6));

} else {
var statearr_31917_33695 = state_31906__$1;
(statearr_31917_33695[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (15))){
var inst_31886 = (state_31906[(9)]);
var inst_31891 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31886);
var state_31906__$1 = state_31906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31906__$1,(17),out,inst_31891);
} else {
if((state_val_31907 === (13))){
var inst_31886 = (state_31906[(9)]);
var inst_31886__$1 = (state_31906[(2)]);
var inst_31887 = cljs.core.some(cljs.core.nil_QMARK_,inst_31886__$1);
var state_31906__$1 = (function (){var statearr_31918 = state_31906;
(statearr_31918[(9)] = inst_31886__$1);

return statearr_31918;
})();
if(cljs.core.truth_(inst_31887)){
var statearr_31919_33696 = state_31906__$1;
(statearr_31919_33696[(1)] = (14));

} else {
var statearr_31921_33697 = state_31906__$1;
(statearr_31921_33697[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (6))){
var state_31906__$1 = state_31906;
var statearr_31922_33698 = state_31906__$1;
(statearr_31922_33698[(2)] = null);

(statearr_31922_33698[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (17))){
var inst_31893 = (state_31906[(2)]);
var state_31906__$1 = (function (){var statearr_31926 = state_31906;
(statearr_31926[(10)] = inst_31893);

return statearr_31926;
})();
var statearr_31927_33699 = state_31906__$1;
(statearr_31927_33699[(2)] = null);

(statearr_31927_33699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (3))){
var inst_31898 = (state_31906[(2)]);
var state_31906__$1 = state_31906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31906__$1,inst_31898);
} else {
if((state_val_31907 === (12))){
var _ = (function (){var statearr_31930 = state_31906;
(statearr_31930[(4)] = cljs.core.rest((state_31906[(4)])));

return statearr_31930;
})();
var state_31906__$1 = state_31906;
var ex31923 = (state_31906__$1[(2)]);
var statearr_31932_33700 = state_31906__$1;
(statearr_31932_33700[(5)] = ex31923);


if((ex31923 instanceof Object)){
var statearr_31933_33701 = state_31906__$1;
(statearr_31933_33701[(1)] = (11));

(statearr_31933_33701[(5)] = null);

} else {
throw ex31923;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (2))){
var inst_31850 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31851 = cnt;
var inst_31852 = (0);
var state_31906__$1 = (function (){var statearr_31941 = state_31906;
(statearr_31941[(11)] = inst_31850);

(statearr_31941[(8)] = inst_31851);

(statearr_31941[(7)] = inst_31852);

return statearr_31941;
})();
var statearr_31942_33702 = state_31906__$1;
(statearr_31942_33702[(2)] = null);

(statearr_31942_33702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (11))){
var inst_31858 = (state_31906[(2)]);
var inst_31859 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31906__$1 = (function (){var statearr_31945 = state_31906;
(statearr_31945[(12)] = inst_31858);

return statearr_31945;
})();
var statearr_31948_33704 = state_31906__$1;
(statearr_31948_33704[(2)] = inst_31859);

(statearr_31948_33704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (9))){
var inst_31852 = (state_31906[(7)]);
var _ = (function (){var statearr_31949 = state_31906;
(statearr_31949[(4)] = cljs.core.cons((12),(state_31906[(4)])));

return statearr_31949;
})();
var inst_31867 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31852) : chs__$1.call(null,inst_31852));
var inst_31868 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31852) : done.call(null,inst_31852));
var inst_31869 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31867,inst_31868);
var ___$1 = (function (){var statearr_31954 = state_31906;
(statearr_31954[(4)] = cljs.core.rest((state_31906[(4)])));

return statearr_31954;
})();
var state_31906__$1 = state_31906;
var statearr_31955_33706 = state_31906__$1;
(statearr_31955_33706[(2)] = inst_31869);

(statearr_31955_33706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (5))){
var inst_31881 = (state_31906[(2)]);
var state_31906__$1 = (function (){var statearr_31956 = state_31906;
(statearr_31956[(13)] = inst_31881);

return statearr_31956;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31906__$1,(13),dchan);
} else {
if((state_val_31907 === (14))){
var inst_31889 = cljs.core.async.close_BANG_(out);
var state_31906__$1 = state_31906;
var statearr_31959_33708 = state_31906__$1;
(statearr_31959_33708[(2)] = inst_31889);

(statearr_31959_33708[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (16))){
var inst_31896 = (state_31906[(2)]);
var state_31906__$1 = state_31906;
var statearr_31960_33709 = state_31906__$1;
(statearr_31960_33709[(2)] = inst_31896);

(statearr_31960_33709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (10))){
var inst_31852 = (state_31906[(7)]);
var inst_31872 = (state_31906[(2)]);
var inst_31874 = (inst_31852 + (1));
var inst_31852__$1 = inst_31874;
var state_31906__$1 = (function (){var statearr_31962 = state_31906;
(statearr_31962[(14)] = inst_31872);

(statearr_31962[(7)] = inst_31852__$1);

return statearr_31962;
})();
var statearr_31967_33711 = state_31906__$1;
(statearr_31967_33711[(2)] = null);

(statearr_31967_33711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (8))){
var inst_31879 = (state_31906[(2)]);
var state_31906__$1 = state_31906;
var statearr_31968_33712 = state_31906__$1;
(statearr_31968_33712[(2)] = inst_31879);

(statearr_31968_33712[(1)] = (5));


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
var cljs$core$async$state_machine__28700__auto__ = null;
var cljs$core$async$state_machine__28700__auto____0 = (function (){
var statearr_31971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31971[(0)] = cljs$core$async$state_machine__28700__auto__);

(statearr_31971[(1)] = (1));

return statearr_31971;
});
var cljs$core$async$state_machine__28700__auto____1 = (function (state_31906){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_31906);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e31973){var ex__28703__auto__ = e31973;
var statearr_31974_33715 = state_31906;
(statearr_31974_33715[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_31906[(4)]))){
var statearr_31975_33716 = state_31906;
(statearr_31975_33716[(1)] = cljs.core.first((state_31906[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33717 = state_31906;
state_31906 = G__33717;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$state_machine__28700__auto__ = function(state_31906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28700__auto____1.call(this,state_31906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28700__auto____0;
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28700__auto____1;
return cljs$core$async$state_machine__28700__auto__;
})()
})();
var state__30005__auto__ = (function (){var statearr_31982 = f__30004__auto__();
(statearr_31982[(6)] = c__30003__auto___33691);

return statearr_31982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
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
var G__31987 = arguments.length;
switch (G__31987) {
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
var c__30003__auto___33720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = (function (state_32033){
var state_val_32034 = (state_32033[(1)]);
if((state_val_32034 === (7))){
var inst_32008 = (state_32033[(7)]);
var inst_32009 = (state_32033[(8)]);
var inst_32008__$1 = (state_32033[(2)]);
var inst_32009__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32008__$1,(0),null);
var inst_32010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32008__$1,(1),null);
var inst_32011 = (inst_32009__$1 == null);
var state_32033__$1 = (function (){var statearr_32049 = state_32033;
(statearr_32049[(7)] = inst_32008__$1);

(statearr_32049[(8)] = inst_32009__$1);

(statearr_32049[(9)] = inst_32010);

return statearr_32049;
})();
if(cljs.core.truth_(inst_32011)){
var statearr_32050_33722 = state_32033__$1;
(statearr_32050_33722[(1)] = (8));

} else {
var statearr_32054_33723 = state_32033__$1;
(statearr_32054_33723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (1))){
var inst_31996 = cljs.core.vec(chs);
var inst_31998 = inst_31996;
var state_32033__$1 = (function (){var statearr_32061 = state_32033;
(statearr_32061[(10)] = inst_31998);

return statearr_32061;
})();
var statearr_32062_33725 = state_32033__$1;
(statearr_32062_33725[(2)] = null);

(statearr_32062_33725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (4))){
var inst_31998 = (state_32033[(10)]);
var state_32033__$1 = state_32033;
return cljs.core.async.ioc_alts_BANG_(state_32033__$1,(7),inst_31998);
} else {
if((state_val_32034 === (6))){
var inst_32028 = (state_32033[(2)]);
var state_32033__$1 = state_32033;
var statearr_32066_33726 = state_32033__$1;
(statearr_32066_33726[(2)] = inst_32028);

(statearr_32066_33726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (3))){
var inst_32030 = (state_32033[(2)]);
var state_32033__$1 = state_32033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32033__$1,inst_32030);
} else {
if((state_val_32034 === (2))){
var inst_31998 = (state_32033[(10)]);
var inst_32000 = cljs.core.count(inst_31998);
var inst_32001 = (inst_32000 > (0));
var state_32033__$1 = state_32033;
if(cljs.core.truth_(inst_32001)){
var statearr_32084_33728 = state_32033__$1;
(statearr_32084_33728[(1)] = (4));

} else {
var statearr_32085_33729 = state_32033__$1;
(statearr_32085_33729[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (11))){
var inst_31998 = (state_32033[(10)]);
var inst_32020 = (state_32033[(2)]);
var tmp32069 = inst_31998;
var inst_31998__$1 = tmp32069;
var state_32033__$1 = (function (){var statearr_32089 = state_32033;
(statearr_32089[(11)] = inst_32020);

(statearr_32089[(10)] = inst_31998__$1);

return statearr_32089;
})();
var statearr_32090_33730 = state_32033__$1;
(statearr_32090_33730[(2)] = null);

(statearr_32090_33730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (9))){
var inst_32009 = (state_32033[(8)]);
var state_32033__$1 = state_32033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32033__$1,(11),out,inst_32009);
} else {
if((state_val_32034 === (5))){
var inst_32025 = cljs.core.async.close_BANG_(out);
var state_32033__$1 = state_32033;
var statearr_32096_33732 = state_32033__$1;
(statearr_32096_33732[(2)] = inst_32025);

(statearr_32096_33732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (10))){
var inst_32023 = (state_32033[(2)]);
var state_32033__$1 = state_32033;
var statearr_32097_33733 = state_32033__$1;
(statearr_32097_33733[(2)] = inst_32023);

(statearr_32097_33733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (8))){
var inst_31998 = (state_32033[(10)]);
var inst_32008 = (state_32033[(7)]);
var inst_32009 = (state_32033[(8)]);
var inst_32010 = (state_32033[(9)]);
var inst_32015 = (function (){var cs = inst_31998;
var vec__32004 = inst_32008;
var v = inst_32009;
var c = inst_32010;
return (function (p1__31984_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31984_SHARP_);
});
})();
var inst_32016 = cljs.core.filterv(inst_32015,inst_31998);
var inst_31998__$1 = inst_32016;
var state_32033__$1 = (function (){var statearr_32101 = state_32033;
(statearr_32101[(10)] = inst_31998__$1);

return statearr_32101;
})();
var statearr_32102_33741 = state_32033__$1;
(statearr_32102_33741[(2)] = null);

(statearr_32102_33741[(1)] = (2));


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
var cljs$core$async$state_machine__28700__auto__ = null;
var cljs$core$async$state_machine__28700__auto____0 = (function (){
var statearr_32105 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32105[(0)] = cljs$core$async$state_machine__28700__auto__);

(statearr_32105[(1)] = (1));

return statearr_32105;
});
var cljs$core$async$state_machine__28700__auto____1 = (function (state_32033){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_32033);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e32109){var ex__28703__auto__ = e32109;
var statearr_32112_33742 = state_32033;
(statearr_32112_33742[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_32033[(4)]))){
var statearr_32113_33743 = state_32033;
(statearr_32113_33743[(1)] = cljs.core.first((state_32033[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33745 = state_32033;
state_32033 = G__33745;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$state_machine__28700__auto__ = function(state_32033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28700__auto____1.call(this,state_32033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28700__auto____0;
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28700__auto____1;
return cljs$core$async$state_machine__28700__auto__;
})()
})();
var state__30005__auto__ = (function (){var statearr_32116 = f__30004__auto__();
(statearr_32116[(6)] = c__30003__auto___33720);

return statearr_32116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
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
var G__32126 = arguments.length;
switch (G__32126) {
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
var c__30003__auto___33752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = (function (state_32160){
var state_val_32162 = (state_32160[(1)]);
if((state_val_32162 === (7))){
var inst_32141 = (state_32160[(7)]);
var inst_32141__$1 = (state_32160[(2)]);
var inst_32142 = (inst_32141__$1 == null);
var inst_32143 = cljs.core.not(inst_32142);
var state_32160__$1 = (function (){var statearr_32167 = state_32160;
(statearr_32167[(7)] = inst_32141__$1);

return statearr_32167;
})();
if(inst_32143){
var statearr_32174_33757 = state_32160__$1;
(statearr_32174_33757[(1)] = (8));

} else {
var statearr_32177_33758 = state_32160__$1;
(statearr_32177_33758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (1))){
var inst_32136 = (0);
var state_32160__$1 = (function (){var statearr_32178 = state_32160;
(statearr_32178[(8)] = inst_32136);

return statearr_32178;
})();
var statearr_32181_33763 = state_32160__$1;
(statearr_32181_33763[(2)] = null);

(statearr_32181_33763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (4))){
var state_32160__$1 = state_32160;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32160__$1,(7),ch);
} else {
if((state_val_32162 === (6))){
var inst_32155 = (state_32160[(2)]);
var state_32160__$1 = state_32160;
var statearr_32183_33764 = state_32160__$1;
(statearr_32183_33764[(2)] = inst_32155);

(statearr_32183_33764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (3))){
var inst_32157 = (state_32160[(2)]);
var inst_32158 = cljs.core.async.close_BANG_(out);
var state_32160__$1 = (function (){var statearr_32186 = state_32160;
(statearr_32186[(9)] = inst_32157);

return statearr_32186;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32160__$1,inst_32158);
} else {
if((state_val_32162 === (2))){
var inst_32136 = (state_32160[(8)]);
var inst_32138 = (inst_32136 < n);
var state_32160__$1 = state_32160;
if(cljs.core.truth_(inst_32138)){
var statearr_32189_33766 = state_32160__$1;
(statearr_32189_33766[(1)] = (4));

} else {
var statearr_32190_33767 = state_32160__$1;
(statearr_32190_33767[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (11))){
var inst_32136 = (state_32160[(8)]);
var inst_32147 = (state_32160[(2)]);
var inst_32148 = (inst_32136 + (1));
var inst_32136__$1 = inst_32148;
var state_32160__$1 = (function (){var statearr_32194 = state_32160;
(statearr_32194[(10)] = inst_32147);

(statearr_32194[(8)] = inst_32136__$1);

return statearr_32194;
})();
var statearr_32196_33768 = state_32160__$1;
(statearr_32196_33768[(2)] = null);

(statearr_32196_33768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (9))){
var state_32160__$1 = state_32160;
var statearr_32199_33769 = state_32160__$1;
(statearr_32199_33769[(2)] = null);

(statearr_32199_33769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (5))){
var state_32160__$1 = state_32160;
var statearr_32201_33772 = state_32160__$1;
(statearr_32201_33772[(2)] = null);

(statearr_32201_33772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (10))){
var inst_32152 = (state_32160[(2)]);
var state_32160__$1 = state_32160;
var statearr_32203_33776 = state_32160__$1;
(statearr_32203_33776[(2)] = inst_32152);

(statearr_32203_33776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (8))){
var inst_32141 = (state_32160[(7)]);
var state_32160__$1 = state_32160;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32160__$1,(11),out,inst_32141);
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
var cljs$core$async$state_machine__28700__auto__ = null;
var cljs$core$async$state_machine__28700__auto____0 = (function (){
var statearr_32210 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32210[(0)] = cljs$core$async$state_machine__28700__auto__);

(statearr_32210[(1)] = (1));

return statearr_32210;
});
var cljs$core$async$state_machine__28700__auto____1 = (function (state_32160){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_32160);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e32212){var ex__28703__auto__ = e32212;
var statearr_32214_33781 = state_32160;
(statearr_32214_33781[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_32160[(4)]))){
var statearr_32215_33782 = state_32160;
(statearr_32215_33782[(1)] = cljs.core.first((state_32160[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33783 = state_32160;
state_32160 = G__33783;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$state_machine__28700__auto__ = function(state_32160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28700__auto____1.call(this,state_32160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28700__auto____0;
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28700__auto____1;
return cljs$core$async$state_machine__28700__auto__;
})()
})();
var state__30005__auto__ = (function (){var statearr_32224 = f__30004__auto__();
(statearr_32224[(6)] = c__30003__auto___33752);

return statearr_32224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
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
cljs.core.async.t_cljs$core$async32242 = (function (f,ch,meta32231,_,fn1,meta32243){
this.f = f;
this.ch = ch;
this.meta32231 = meta32231;
this._ = _;
this.fn1 = fn1;
this.meta32243 = meta32243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32244,meta32243__$1){
var self__ = this;
var _32244__$1 = this;
return (new cljs.core.async.t_cljs$core$async32242(self__.f,self__.ch,self__.meta32231,self__._,self__.fn1,meta32243__$1));
}));

(cljs.core.async.t_cljs$core$async32242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32244){
var self__ = this;
var _32244__$1 = this;
return self__.meta32243;
}));

(cljs.core.async.t_cljs$core$async32242.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32242.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32242.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32242.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32227_SHARP_){
var G__32248 = (((p1__32227_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32227_SHARP_) : self__.f.call(null,p1__32227_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32248) : f1.call(null,G__32248));
});
}));

(cljs.core.async.t_cljs$core$async32242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32231","meta32231",773773293,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32230","cljs.core.async/t_cljs$core$async32230",1688630195,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32243","meta32243",-303455196,null)], null);
}));

(cljs.core.async.t_cljs$core$async32242.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32242");

(cljs.core.async.t_cljs$core$async32242.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32242");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32242.
 */
cljs.core.async.__GT_t_cljs$core$async32242 = (function cljs$core$async$__GT_t_cljs$core$async32242(f,ch,meta32231,_,fn1,meta32243){
return (new cljs.core.async.t_cljs$core$async32242(f,ch,meta32231,_,fn1,meta32243));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32230 = (function (f,ch,meta32231){
this.f = f;
this.ch = ch;
this.meta32231 = meta32231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32232,meta32231__$1){
var self__ = this;
var _32232__$1 = this;
return (new cljs.core.async.t_cljs$core$async32230(self__.f,self__.ch,meta32231__$1));
}));

(cljs.core.async.t_cljs$core$async32230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32232){
var self__ = this;
var _32232__$1 = this;
return self__.meta32231;
}));

(cljs.core.async.t_cljs$core$async32230.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32230.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32230.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32230.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32230.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async32242(self__.f,self__.ch,self__.meta32231,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32255 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32255) : self__.f.call(null,G__32255));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32230.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32230.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32231","meta32231",773773293,null)], null);
}));

(cljs.core.async.t_cljs$core$async32230.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32230");

(cljs.core.async.t_cljs$core$async32230.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32230");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32230.
 */
cljs.core.async.__GT_t_cljs$core$async32230 = (function cljs$core$async$__GT_t_cljs$core$async32230(f,ch,meta32231){
return (new cljs.core.async.t_cljs$core$async32230(f,ch,meta32231));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32230(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32260 = (function (f,ch,meta32261){
this.f = f;
this.ch = ch;
this.meta32261 = meta32261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32262,meta32261__$1){
var self__ = this;
var _32262__$1 = this;
return (new cljs.core.async.t_cljs$core$async32260(self__.f,self__.ch,meta32261__$1));
}));

(cljs.core.async.t_cljs$core$async32260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32262){
var self__ = this;
var _32262__$1 = this;
return self__.meta32261;
}));

(cljs.core.async.t_cljs$core$async32260.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32260.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32260.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32260.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32260.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32260.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32261","meta32261",-118867702,null)], null);
}));

(cljs.core.async.t_cljs$core$async32260.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32260");

(cljs.core.async.t_cljs$core$async32260.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32260");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32260.
 */
cljs.core.async.__GT_t_cljs$core$async32260 = (function cljs$core$async$__GT_t_cljs$core$async32260(f,ch,meta32261){
return (new cljs.core.async.t_cljs$core$async32260(f,ch,meta32261));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32260(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32279 = (function (p,ch,meta32280){
this.p = p;
this.ch = ch;
this.meta32280 = meta32280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32281,meta32280__$1){
var self__ = this;
var _32281__$1 = this;
return (new cljs.core.async.t_cljs$core$async32279(self__.p,self__.ch,meta32280__$1));
}));

(cljs.core.async.t_cljs$core$async32279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32281){
var self__ = this;
var _32281__$1 = this;
return self__.meta32280;
}));

(cljs.core.async.t_cljs$core$async32279.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32279.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32279.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32279.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32279.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32279.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32279.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32280","meta32280",-1208329387,null)], null);
}));

(cljs.core.async.t_cljs$core$async32279.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32279");

(cljs.core.async.t_cljs$core$async32279.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32279");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32279.
 */
cljs.core.async.__GT_t_cljs$core$async32279 = (function cljs$core$async$__GT_t_cljs$core$async32279(p,ch,meta32280){
return (new cljs.core.async.t_cljs$core$async32279(p,ch,meta32280));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async32279(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32298 = arguments.length;
switch (G__32298) {
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
var c__30003__auto___33819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = (function (state_32323){
var state_val_32325 = (state_32323[(1)]);
if((state_val_32325 === (7))){
var inst_32319 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
var statearr_32327_33822 = state_32323__$1;
(statearr_32327_33822[(2)] = inst_32319);

(statearr_32327_33822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (1))){
var state_32323__$1 = state_32323;
var statearr_32329_33823 = state_32323__$1;
(statearr_32329_33823[(2)] = null);

(statearr_32329_33823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (4))){
var inst_32304 = (state_32323[(7)]);
var inst_32304__$1 = (state_32323[(2)]);
var inst_32305 = (inst_32304__$1 == null);
var state_32323__$1 = (function (){var statearr_32330 = state_32323;
(statearr_32330[(7)] = inst_32304__$1);

return statearr_32330;
})();
if(cljs.core.truth_(inst_32305)){
var statearr_32332_33825 = state_32323__$1;
(statearr_32332_33825[(1)] = (5));

} else {
var statearr_32333_33826 = state_32323__$1;
(statearr_32333_33826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (6))){
var inst_32304 = (state_32323[(7)]);
var inst_32309 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32304) : p.call(null,inst_32304));
var state_32323__$1 = state_32323;
if(cljs.core.truth_(inst_32309)){
var statearr_32335_33831 = state_32323__$1;
(statearr_32335_33831[(1)] = (8));

} else {
var statearr_32336_33832 = state_32323__$1;
(statearr_32336_33832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (3))){
var inst_32321 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32323__$1,inst_32321);
} else {
if((state_val_32325 === (2))){
var state_32323__$1 = state_32323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32323__$1,(4),ch);
} else {
if((state_val_32325 === (11))){
var inst_32313 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
var statearr_32337_33839 = state_32323__$1;
(statearr_32337_33839[(2)] = inst_32313);

(statearr_32337_33839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (9))){
var state_32323__$1 = state_32323;
var statearr_32339_33840 = state_32323__$1;
(statearr_32339_33840[(2)] = null);

(statearr_32339_33840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (5))){
var inst_32307 = cljs.core.async.close_BANG_(out);
var state_32323__$1 = state_32323;
var statearr_32348_33842 = state_32323__$1;
(statearr_32348_33842[(2)] = inst_32307);

(statearr_32348_33842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (10))){
var inst_32316 = (state_32323[(2)]);
var state_32323__$1 = (function (){var statearr_32349 = state_32323;
(statearr_32349[(8)] = inst_32316);

return statearr_32349;
})();
var statearr_32350_33850 = state_32323__$1;
(statearr_32350_33850[(2)] = null);

(statearr_32350_33850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32325 === (8))){
var inst_32304 = (state_32323[(7)]);
var state_32323__$1 = state_32323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32323__$1,(11),out,inst_32304);
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
var cljs$core$async$state_machine__28700__auto__ = null;
var cljs$core$async$state_machine__28700__auto____0 = (function (){
var statearr_32359 = [null,null,null,null,null,null,null,null,null];
(statearr_32359[(0)] = cljs$core$async$state_machine__28700__auto__);

(statearr_32359[(1)] = (1));

return statearr_32359;
});
var cljs$core$async$state_machine__28700__auto____1 = (function (state_32323){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_32323);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e32362){var ex__28703__auto__ = e32362;
var statearr_32364_33876 = state_32323;
(statearr_32364_33876[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_32323[(4)]))){
var statearr_32369_33879 = state_32323;
(statearr_32369_33879[(1)] = cljs.core.first((state_32323[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33882 = state_32323;
state_32323 = G__33882;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$state_machine__28700__auto__ = function(state_32323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28700__auto____1.call(this,state_32323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28700__auto____0;
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28700__auto____1;
return cljs$core$async$state_machine__28700__auto__;
})()
})();
var state__30005__auto__ = (function (){var statearr_32371 = f__30004__auto__();
(statearr_32371[(6)] = c__30003__auto___33819);

return statearr_32371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32376 = arguments.length;
switch (G__32376) {
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
var c__30003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = (function (state_32471){
var state_val_32472 = (state_32471[(1)]);
if((state_val_32472 === (7))){
var inst_32464 = (state_32471[(2)]);
var state_32471__$1 = state_32471;
var statearr_32487_33895 = state_32471__$1;
(statearr_32487_33895[(2)] = inst_32464);

(statearr_32487_33895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (20))){
var inst_32428 = (state_32471[(7)]);
var inst_32445 = (state_32471[(2)]);
var inst_32446 = cljs.core.next(inst_32428);
var inst_32403 = inst_32446;
var inst_32404 = null;
var inst_32405 = (0);
var inst_32406 = (0);
var state_32471__$1 = (function (){var statearr_32492 = state_32471;
(statearr_32492[(8)] = inst_32445);

(statearr_32492[(9)] = inst_32403);

(statearr_32492[(10)] = inst_32404);

(statearr_32492[(11)] = inst_32405);

(statearr_32492[(12)] = inst_32406);

return statearr_32492;
})();
var statearr_32498_33897 = state_32471__$1;
(statearr_32498_33897[(2)] = null);

(statearr_32498_33897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (1))){
var state_32471__$1 = state_32471;
var statearr_32500_33900 = state_32471__$1;
(statearr_32500_33900[(2)] = null);

(statearr_32500_33900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (4))){
var inst_32391 = (state_32471[(13)]);
var inst_32391__$1 = (state_32471[(2)]);
var inst_32392 = (inst_32391__$1 == null);
var state_32471__$1 = (function (){var statearr_32504 = state_32471;
(statearr_32504[(13)] = inst_32391__$1);

return statearr_32504;
})();
if(cljs.core.truth_(inst_32392)){
var statearr_32505_33903 = state_32471__$1;
(statearr_32505_33903[(1)] = (5));

} else {
var statearr_32507_33904 = state_32471__$1;
(statearr_32507_33904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (15))){
var state_32471__$1 = state_32471;
var statearr_32514_33905 = state_32471__$1;
(statearr_32514_33905[(2)] = null);

(statearr_32514_33905[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (21))){
var state_32471__$1 = state_32471;
var statearr_32517_33906 = state_32471__$1;
(statearr_32517_33906[(2)] = null);

(statearr_32517_33906[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (13))){
var inst_32406 = (state_32471[(12)]);
var inst_32403 = (state_32471[(9)]);
var inst_32404 = (state_32471[(10)]);
var inst_32405 = (state_32471[(11)]);
var inst_32415 = (state_32471[(2)]);
var inst_32416 = (inst_32406 + (1));
var tmp32510 = inst_32404;
var tmp32511 = inst_32405;
var tmp32512 = inst_32403;
var inst_32403__$1 = tmp32512;
var inst_32404__$1 = tmp32510;
var inst_32405__$1 = tmp32511;
var inst_32406__$1 = inst_32416;
var state_32471__$1 = (function (){var statearr_32521 = state_32471;
(statearr_32521[(14)] = inst_32415);

(statearr_32521[(9)] = inst_32403__$1);

(statearr_32521[(10)] = inst_32404__$1);

(statearr_32521[(11)] = inst_32405__$1);

(statearr_32521[(12)] = inst_32406__$1);

return statearr_32521;
})();
var statearr_32522_33911 = state_32471__$1;
(statearr_32522_33911[(2)] = null);

(statearr_32522_33911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (22))){
var state_32471__$1 = state_32471;
var statearr_32526_33912 = state_32471__$1;
(statearr_32526_33912[(2)] = null);

(statearr_32526_33912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (6))){
var inst_32391 = (state_32471[(13)]);
var inst_32401 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32391) : f.call(null,inst_32391));
var inst_32402 = cljs.core.seq(inst_32401);
var inst_32403 = inst_32402;
var inst_32404 = null;
var inst_32405 = (0);
var inst_32406 = (0);
var state_32471__$1 = (function (){var statearr_32532 = state_32471;
(statearr_32532[(9)] = inst_32403);

(statearr_32532[(10)] = inst_32404);

(statearr_32532[(11)] = inst_32405);

(statearr_32532[(12)] = inst_32406);

return statearr_32532;
})();
var statearr_32534_33917 = state_32471__$1;
(statearr_32534_33917[(2)] = null);

(statearr_32534_33917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (17))){
var inst_32428 = (state_32471[(7)]);
var inst_32435 = cljs.core.chunk_first(inst_32428);
var inst_32436 = cljs.core.chunk_rest(inst_32428);
var inst_32437 = cljs.core.count(inst_32435);
var inst_32403 = inst_32436;
var inst_32404 = inst_32435;
var inst_32405 = inst_32437;
var inst_32406 = (0);
var state_32471__$1 = (function (){var statearr_32537 = state_32471;
(statearr_32537[(9)] = inst_32403);

(statearr_32537[(10)] = inst_32404);

(statearr_32537[(11)] = inst_32405);

(statearr_32537[(12)] = inst_32406);

return statearr_32537;
})();
var statearr_32538_33921 = state_32471__$1;
(statearr_32538_33921[(2)] = null);

(statearr_32538_33921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (3))){
var inst_32466 = (state_32471[(2)]);
var state_32471__$1 = state_32471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32471__$1,inst_32466);
} else {
if((state_val_32472 === (12))){
var inst_32454 = (state_32471[(2)]);
var state_32471__$1 = state_32471;
var statearr_32539_33923 = state_32471__$1;
(statearr_32539_33923[(2)] = inst_32454);

(statearr_32539_33923[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (2))){
var state_32471__$1 = state_32471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32471__$1,(4),in$);
} else {
if((state_val_32472 === (23))){
var inst_32462 = (state_32471[(2)]);
var state_32471__$1 = state_32471;
var statearr_32543_33926 = state_32471__$1;
(statearr_32543_33926[(2)] = inst_32462);

(statearr_32543_33926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (19))){
var inst_32449 = (state_32471[(2)]);
var state_32471__$1 = state_32471;
var statearr_32545_33929 = state_32471__$1;
(statearr_32545_33929[(2)] = inst_32449);

(statearr_32545_33929[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (11))){
var inst_32403 = (state_32471[(9)]);
var inst_32428 = (state_32471[(7)]);
var inst_32428__$1 = cljs.core.seq(inst_32403);
var state_32471__$1 = (function (){var statearr_32547 = state_32471;
(statearr_32547[(7)] = inst_32428__$1);

return statearr_32547;
})();
if(inst_32428__$1){
var statearr_32548_33931 = state_32471__$1;
(statearr_32548_33931[(1)] = (14));

} else {
var statearr_32549_33932 = state_32471__$1;
(statearr_32549_33932[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (9))){
var inst_32456 = (state_32471[(2)]);
var inst_32457 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32471__$1 = (function (){var statearr_32550 = state_32471;
(statearr_32550[(15)] = inst_32456);

return statearr_32550;
})();
if(cljs.core.truth_(inst_32457)){
var statearr_32551_33936 = state_32471__$1;
(statearr_32551_33936[(1)] = (21));

} else {
var statearr_32552_33937 = state_32471__$1;
(statearr_32552_33937[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (5))){
var inst_32394 = cljs.core.async.close_BANG_(out);
var state_32471__$1 = state_32471;
var statearr_32553_33939 = state_32471__$1;
(statearr_32553_33939[(2)] = inst_32394);

(statearr_32553_33939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (14))){
var inst_32428 = (state_32471[(7)]);
var inst_32431 = cljs.core.chunked_seq_QMARK_(inst_32428);
var state_32471__$1 = state_32471;
if(inst_32431){
var statearr_32563_33940 = state_32471__$1;
(statearr_32563_33940[(1)] = (17));

} else {
var statearr_32564_33941 = state_32471__$1;
(statearr_32564_33941[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (16))){
var inst_32452 = (state_32471[(2)]);
var state_32471__$1 = state_32471;
var statearr_32565_33942 = state_32471__$1;
(statearr_32565_33942[(2)] = inst_32452);

(statearr_32565_33942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (10))){
var inst_32404 = (state_32471[(10)]);
var inst_32406 = (state_32471[(12)]);
var inst_32413 = cljs.core._nth(inst_32404,inst_32406);
var state_32471__$1 = state_32471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32471__$1,(13),out,inst_32413);
} else {
if((state_val_32472 === (18))){
var inst_32428 = (state_32471[(7)]);
var inst_32441 = cljs.core.first(inst_32428);
var state_32471__$1 = state_32471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32471__$1,(20),out,inst_32441);
} else {
if((state_val_32472 === (8))){
var inst_32406 = (state_32471[(12)]);
var inst_32405 = (state_32471[(11)]);
var inst_32408 = (inst_32406 < inst_32405);
var inst_32410 = inst_32408;
var state_32471__$1 = state_32471;
if(cljs.core.truth_(inst_32410)){
var statearr_32570_33946 = state_32471__$1;
(statearr_32570_33946[(1)] = (10));

} else {
var statearr_32571_33947 = state_32471__$1;
(statearr_32571_33947[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28700__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28700__auto____0 = (function (){
var statearr_32572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32572[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28700__auto__);

(statearr_32572[(1)] = (1));

return statearr_32572;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28700__auto____1 = (function (state_32471){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_32471);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e32573){var ex__28703__auto__ = e32573;
var statearr_32574_33952 = state_32471;
(statearr_32574_33952[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_32471[(4)]))){
var statearr_32575_33953 = state_32471;
(statearr_32575_33953[(1)] = cljs.core.first((state_32471[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33954 = state_32471;
state_32471 = G__33954;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28700__auto__ = function(state_32471){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28700__auto____1.call(this,state_32471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28700__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28700__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28700__auto__;
})()
})();
var state__30005__auto__ = (function (){var statearr_32577 = f__30004__auto__();
(statearr_32577[(6)] = c__30003__auto__);

return statearr_32577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
}));

return c__30003__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32580 = arguments.length;
switch (G__32580) {
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
var G__32599 = arguments.length;
switch (G__32599) {
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
var G__32603 = arguments.length;
switch (G__32603) {
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
var c__30003__auto___33966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = (function (state_32650){
var state_val_32651 = (state_32650[(1)]);
if((state_val_32651 === (7))){
var inst_32643 = (state_32650[(2)]);
var state_32650__$1 = state_32650;
var statearr_32656_33968 = state_32650__$1;
(statearr_32656_33968[(2)] = inst_32643);

(statearr_32656_33968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (1))){
var inst_32624 = null;
var state_32650__$1 = (function (){var statearr_32659 = state_32650;
(statearr_32659[(7)] = inst_32624);

return statearr_32659;
})();
var statearr_32661_33969 = state_32650__$1;
(statearr_32661_33969[(2)] = null);

(statearr_32661_33969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (4))){
var inst_32628 = (state_32650[(8)]);
var inst_32628__$1 = (state_32650[(2)]);
var inst_32629 = (inst_32628__$1 == null);
var inst_32630 = cljs.core.not(inst_32629);
var state_32650__$1 = (function (){var statearr_32669 = state_32650;
(statearr_32669[(8)] = inst_32628__$1);

return statearr_32669;
})();
if(inst_32630){
var statearr_32670_33970 = state_32650__$1;
(statearr_32670_33970[(1)] = (5));

} else {
var statearr_32671_33971 = state_32650__$1;
(statearr_32671_33971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (6))){
var state_32650__$1 = state_32650;
var statearr_32673_33976 = state_32650__$1;
(statearr_32673_33976[(2)] = null);

(statearr_32673_33976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (3))){
var inst_32645 = (state_32650[(2)]);
var inst_32646 = cljs.core.async.close_BANG_(out);
var state_32650__$1 = (function (){var statearr_32681 = state_32650;
(statearr_32681[(9)] = inst_32645);

return statearr_32681;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32650__$1,inst_32646);
} else {
if((state_val_32651 === (2))){
var state_32650__$1 = state_32650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32650__$1,(4),ch);
} else {
if((state_val_32651 === (11))){
var inst_32628 = (state_32650[(8)]);
var inst_32637 = (state_32650[(2)]);
var inst_32624 = inst_32628;
var state_32650__$1 = (function (){var statearr_32682 = state_32650;
(statearr_32682[(10)] = inst_32637);

(statearr_32682[(7)] = inst_32624);

return statearr_32682;
})();
var statearr_32683_33982 = state_32650__$1;
(statearr_32683_33982[(2)] = null);

(statearr_32683_33982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (9))){
var inst_32628 = (state_32650[(8)]);
var state_32650__$1 = state_32650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32650__$1,(11),out,inst_32628);
} else {
if((state_val_32651 === (5))){
var inst_32628 = (state_32650[(8)]);
var inst_32624 = (state_32650[(7)]);
var inst_32632 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32628,inst_32624);
var state_32650__$1 = state_32650;
if(inst_32632){
var statearr_32688_33984 = state_32650__$1;
(statearr_32688_33984[(1)] = (8));

} else {
var statearr_32691_33985 = state_32650__$1;
(statearr_32691_33985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (10))){
var inst_32640 = (state_32650[(2)]);
var state_32650__$1 = state_32650;
var statearr_32693_33986 = state_32650__$1;
(statearr_32693_33986[(2)] = inst_32640);

(statearr_32693_33986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (8))){
var inst_32624 = (state_32650[(7)]);
var tmp32686 = inst_32624;
var inst_32624__$1 = tmp32686;
var state_32650__$1 = (function (){var statearr_32697 = state_32650;
(statearr_32697[(7)] = inst_32624__$1);

return statearr_32697;
})();
var statearr_32701_33988 = state_32650__$1;
(statearr_32701_33988[(2)] = null);

(statearr_32701_33988[(1)] = (2));


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
var cljs$core$async$state_machine__28700__auto__ = null;
var cljs$core$async$state_machine__28700__auto____0 = (function (){
var statearr_32705 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32705[(0)] = cljs$core$async$state_machine__28700__auto__);

(statearr_32705[(1)] = (1));

return statearr_32705;
});
var cljs$core$async$state_machine__28700__auto____1 = (function (state_32650){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_32650);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e32708){var ex__28703__auto__ = e32708;
var statearr_32710_33989 = state_32650;
(statearr_32710_33989[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_32650[(4)]))){
var statearr_32711_33990 = state_32650;
(statearr_32711_33990[(1)] = cljs.core.first((state_32650[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33991 = state_32650;
state_32650 = G__33991;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$state_machine__28700__auto__ = function(state_32650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28700__auto____1.call(this,state_32650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28700__auto____0;
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28700__auto____1;
return cljs$core$async$state_machine__28700__auto__;
})()
})();
var state__30005__auto__ = (function (){var statearr_32717 = f__30004__auto__();
(statearr_32717[(6)] = c__30003__auto___33966);

return statearr_32717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32731 = arguments.length;
switch (G__32731) {
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
var c__30003__auto___33994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = (function (state_32784){
var state_val_32785 = (state_32784[(1)]);
if((state_val_32785 === (7))){
var inst_32779 = (state_32784[(2)]);
var state_32784__$1 = state_32784;
var statearr_32791_33996 = state_32784__$1;
(statearr_32791_33996[(2)] = inst_32779);

(statearr_32791_33996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (1))){
var inst_32738 = (new Array(n));
var inst_32739 = inst_32738;
var inst_32740 = (0);
var state_32784__$1 = (function (){var statearr_32799 = state_32784;
(statearr_32799[(7)] = inst_32739);

(statearr_32799[(8)] = inst_32740);

return statearr_32799;
})();
var statearr_32800_33997 = state_32784__$1;
(statearr_32800_33997[(2)] = null);

(statearr_32800_33997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (4))){
var inst_32744 = (state_32784[(9)]);
var inst_32744__$1 = (state_32784[(2)]);
var inst_32745 = (inst_32744__$1 == null);
var inst_32746 = cljs.core.not(inst_32745);
var state_32784__$1 = (function (){var statearr_32804 = state_32784;
(statearr_32804[(9)] = inst_32744__$1);

return statearr_32804;
})();
if(inst_32746){
var statearr_32805_33998 = state_32784__$1;
(statearr_32805_33998[(1)] = (5));

} else {
var statearr_32806_33999 = state_32784__$1;
(statearr_32806_33999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (15))){
var inst_32773 = (state_32784[(2)]);
var state_32784__$1 = state_32784;
var statearr_32808_34001 = state_32784__$1;
(statearr_32808_34001[(2)] = inst_32773);

(statearr_32808_34001[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (13))){
var state_32784__$1 = state_32784;
var statearr_32812_34002 = state_32784__$1;
(statearr_32812_34002[(2)] = null);

(statearr_32812_34002[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (6))){
var inst_32740 = (state_32784[(8)]);
var inst_32769 = (inst_32740 > (0));
var state_32784__$1 = state_32784;
if(cljs.core.truth_(inst_32769)){
var statearr_32817_34003 = state_32784__$1;
(statearr_32817_34003[(1)] = (12));

} else {
var statearr_32821_34004 = state_32784__$1;
(statearr_32821_34004[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (3))){
var inst_32782 = (state_32784[(2)]);
var state_32784__$1 = state_32784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32784__$1,inst_32782);
} else {
if((state_val_32785 === (12))){
var inst_32739 = (state_32784[(7)]);
var inst_32771 = cljs.core.vec(inst_32739);
var state_32784__$1 = state_32784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32784__$1,(15),out,inst_32771);
} else {
if((state_val_32785 === (2))){
var state_32784__$1 = state_32784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32784__$1,(4),ch);
} else {
if((state_val_32785 === (11))){
var inst_32762 = (state_32784[(2)]);
var inst_32763 = (new Array(n));
var inst_32739 = inst_32763;
var inst_32740 = (0);
var state_32784__$1 = (function (){var statearr_32834 = state_32784;
(statearr_32834[(10)] = inst_32762);

(statearr_32834[(7)] = inst_32739);

(statearr_32834[(8)] = inst_32740);

return statearr_32834;
})();
var statearr_32835_34005 = state_32784__$1;
(statearr_32835_34005[(2)] = null);

(statearr_32835_34005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (9))){
var inst_32739 = (state_32784[(7)]);
var inst_32760 = cljs.core.vec(inst_32739);
var state_32784__$1 = state_32784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32784__$1,(11),out,inst_32760);
} else {
if((state_val_32785 === (5))){
var inst_32739 = (state_32784[(7)]);
var inst_32740 = (state_32784[(8)]);
var inst_32744 = (state_32784[(9)]);
var inst_32752 = (state_32784[(11)]);
var inst_32749 = (inst_32739[inst_32740] = inst_32744);
var inst_32752__$1 = (inst_32740 + (1));
var inst_32753 = (inst_32752__$1 < n);
var state_32784__$1 = (function (){var statearr_32838 = state_32784;
(statearr_32838[(12)] = inst_32749);

(statearr_32838[(11)] = inst_32752__$1);

return statearr_32838;
})();
if(cljs.core.truth_(inst_32753)){
var statearr_32839_34007 = state_32784__$1;
(statearr_32839_34007[(1)] = (8));

} else {
var statearr_32840_34008 = state_32784__$1;
(statearr_32840_34008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (14))){
var inst_32776 = (state_32784[(2)]);
var inst_32777 = cljs.core.async.close_BANG_(out);
var state_32784__$1 = (function (){var statearr_32846 = state_32784;
(statearr_32846[(13)] = inst_32776);

return statearr_32846;
})();
var statearr_32847_34009 = state_32784__$1;
(statearr_32847_34009[(2)] = inst_32777);

(statearr_32847_34009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (10))){
var inst_32766 = (state_32784[(2)]);
var state_32784__$1 = state_32784;
var statearr_32849_34010 = state_32784__$1;
(statearr_32849_34010[(2)] = inst_32766);

(statearr_32849_34010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (8))){
var inst_32739 = (state_32784[(7)]);
var inst_32752 = (state_32784[(11)]);
var tmp32845 = inst_32739;
var inst_32739__$1 = tmp32845;
var inst_32740 = inst_32752;
var state_32784__$1 = (function (){var statearr_32851 = state_32784;
(statearr_32851[(7)] = inst_32739__$1);

(statearr_32851[(8)] = inst_32740);

return statearr_32851;
})();
var statearr_32852_34012 = state_32784__$1;
(statearr_32852_34012[(2)] = null);

(statearr_32852_34012[(1)] = (2));


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
var cljs$core$async$state_machine__28700__auto__ = null;
var cljs$core$async$state_machine__28700__auto____0 = (function (){
var statearr_32859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32859[(0)] = cljs$core$async$state_machine__28700__auto__);

(statearr_32859[(1)] = (1));

return statearr_32859;
});
var cljs$core$async$state_machine__28700__auto____1 = (function (state_32784){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_32784);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e32860){var ex__28703__auto__ = e32860;
var statearr_32861_34014 = state_32784;
(statearr_32861_34014[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_32784[(4)]))){
var statearr_32864_34015 = state_32784;
(statearr_32864_34015[(1)] = cljs.core.first((state_32784[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34016 = state_32784;
state_32784 = G__34016;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$state_machine__28700__auto__ = function(state_32784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28700__auto____1.call(this,state_32784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28700__auto____0;
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28700__auto____1;
return cljs$core$async$state_machine__28700__auto__;
})()
})();
var state__30005__auto__ = (function (){var statearr_32867 = f__30004__auto__();
(statearr_32867[(6)] = c__30003__auto___33994);

return statearr_32867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32876 = arguments.length;
switch (G__32876) {
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
var c__30003__auto___34019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30004__auto__ = (function (){var switch__28699__auto__ = (function (state_32933){
var state_val_32934 = (state_32933[(1)]);
if((state_val_32934 === (7))){
var inst_32929 = (state_32933[(2)]);
var state_32933__$1 = state_32933;
var statearr_32939_34021 = state_32933__$1;
(statearr_32939_34021[(2)] = inst_32929);

(statearr_32939_34021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (1))){
var inst_32881 = [];
var inst_32882 = inst_32881;
var inst_32883 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32933__$1 = (function (){var statearr_32941 = state_32933;
(statearr_32941[(7)] = inst_32882);

(statearr_32941[(8)] = inst_32883);

return statearr_32941;
})();
var statearr_32943_34026 = state_32933__$1;
(statearr_32943_34026[(2)] = null);

(statearr_32943_34026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (4))){
var inst_32888 = (state_32933[(9)]);
var inst_32888__$1 = (state_32933[(2)]);
var inst_32889 = (inst_32888__$1 == null);
var inst_32890 = cljs.core.not(inst_32889);
var state_32933__$1 = (function (){var statearr_32945 = state_32933;
(statearr_32945[(9)] = inst_32888__$1);

return statearr_32945;
})();
if(inst_32890){
var statearr_32947_34033 = state_32933__$1;
(statearr_32947_34033[(1)] = (5));

} else {
var statearr_32952_34034 = state_32933__$1;
(statearr_32952_34034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (15))){
var inst_32882 = (state_32933[(7)]);
var inst_32921 = cljs.core.vec(inst_32882);
var state_32933__$1 = state_32933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32933__$1,(18),out,inst_32921);
} else {
if((state_val_32934 === (13))){
var inst_32915 = (state_32933[(2)]);
var state_32933__$1 = state_32933;
var statearr_32960_34036 = state_32933__$1;
(statearr_32960_34036[(2)] = inst_32915);

(statearr_32960_34036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (6))){
var inst_32882 = (state_32933[(7)]);
var inst_32918 = inst_32882.length;
var inst_32919 = (inst_32918 > (0));
var state_32933__$1 = state_32933;
if(cljs.core.truth_(inst_32919)){
var statearr_32964_34037 = state_32933__$1;
(statearr_32964_34037[(1)] = (15));

} else {
var statearr_32967_34038 = state_32933__$1;
(statearr_32967_34038[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (17))){
var inst_32926 = (state_32933[(2)]);
var inst_32927 = cljs.core.async.close_BANG_(out);
var state_32933__$1 = (function (){var statearr_32970 = state_32933;
(statearr_32970[(10)] = inst_32926);

return statearr_32970;
})();
var statearr_32971_34039 = state_32933__$1;
(statearr_32971_34039[(2)] = inst_32927);

(statearr_32971_34039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (3))){
var inst_32931 = (state_32933[(2)]);
var state_32933__$1 = state_32933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32933__$1,inst_32931);
} else {
if((state_val_32934 === (12))){
var inst_32882 = (state_32933[(7)]);
var inst_32906 = cljs.core.vec(inst_32882);
var state_32933__$1 = state_32933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32933__$1,(14),out,inst_32906);
} else {
if((state_val_32934 === (2))){
var state_32933__$1 = state_32933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32933__$1,(4),ch);
} else {
if((state_val_32934 === (11))){
var inst_32882 = (state_32933[(7)]);
var inst_32888 = (state_32933[(9)]);
var inst_32892 = (state_32933[(11)]);
var inst_32901 = inst_32882.push(inst_32888);
var tmp32975 = inst_32882;
var inst_32882__$1 = tmp32975;
var inst_32883 = inst_32892;
var state_32933__$1 = (function (){var statearr_32981 = state_32933;
(statearr_32981[(12)] = inst_32901);

(statearr_32981[(7)] = inst_32882__$1);

(statearr_32981[(8)] = inst_32883);

return statearr_32981;
})();
var statearr_32983_34050 = state_32933__$1;
(statearr_32983_34050[(2)] = null);

(statearr_32983_34050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (9))){
var inst_32883 = (state_32933[(8)]);
var inst_32897 = cljs.core.keyword_identical_QMARK_(inst_32883,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32933__$1 = state_32933;
var statearr_32984_34051 = state_32933__$1;
(statearr_32984_34051[(2)] = inst_32897);

(statearr_32984_34051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (5))){
var inst_32888 = (state_32933[(9)]);
var inst_32892 = (state_32933[(11)]);
var inst_32883 = (state_32933[(8)]);
var inst_32894 = (state_32933[(13)]);
var inst_32892__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32888) : f.call(null,inst_32888));
var inst_32894__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32892__$1,inst_32883);
var state_32933__$1 = (function (){var statearr_32989 = state_32933;
(statearr_32989[(11)] = inst_32892__$1);

(statearr_32989[(13)] = inst_32894__$1);

return statearr_32989;
})();
if(inst_32894__$1){
var statearr_32990_34052 = state_32933__$1;
(statearr_32990_34052[(1)] = (8));

} else {
var statearr_32992_34053 = state_32933__$1;
(statearr_32992_34053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (14))){
var inst_32888 = (state_32933[(9)]);
var inst_32892 = (state_32933[(11)]);
var inst_32908 = (state_32933[(2)]);
var inst_32911 = [];
var inst_32912 = inst_32911.push(inst_32888);
var inst_32882 = inst_32911;
var inst_32883 = inst_32892;
var state_32933__$1 = (function (){var statearr_32996 = state_32933;
(statearr_32996[(14)] = inst_32908);

(statearr_32996[(15)] = inst_32912);

(statearr_32996[(7)] = inst_32882);

(statearr_32996[(8)] = inst_32883);

return statearr_32996;
})();
var statearr_32997_34054 = state_32933__$1;
(statearr_32997_34054[(2)] = null);

(statearr_32997_34054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (16))){
var state_32933__$1 = state_32933;
var statearr_32999_34056 = state_32933__$1;
(statearr_32999_34056[(2)] = null);

(statearr_32999_34056[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (10))){
var inst_32899 = (state_32933[(2)]);
var state_32933__$1 = state_32933;
if(cljs.core.truth_(inst_32899)){
var statearr_33004_34057 = state_32933__$1;
(statearr_33004_34057[(1)] = (11));

} else {
var statearr_33005_34058 = state_32933__$1;
(statearr_33005_34058[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (18))){
var inst_32923 = (state_32933[(2)]);
var state_32933__$1 = state_32933;
var statearr_33007_34059 = state_32933__$1;
(statearr_33007_34059[(2)] = inst_32923);

(statearr_33007_34059[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32934 === (8))){
var inst_32894 = (state_32933[(13)]);
var state_32933__$1 = state_32933;
var statearr_33008_34060 = state_32933__$1;
(statearr_33008_34060[(2)] = inst_32894);

(statearr_33008_34060[(1)] = (10));


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
var cljs$core$async$state_machine__28700__auto__ = null;
var cljs$core$async$state_machine__28700__auto____0 = (function (){
var statearr_33012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33012[(0)] = cljs$core$async$state_machine__28700__auto__);

(statearr_33012[(1)] = (1));

return statearr_33012;
});
var cljs$core$async$state_machine__28700__auto____1 = (function (state_32933){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__(state_32933);
if(cljs.core.keyword_identical_QMARK_(result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e33016){var ex__28703__auto__ = e33016;
var statearr_33018_34064 = state_32933;
(statearr_33018_34064[(2)] = ex__28703__auto__);


if(cljs.core.seq((state_32933[(4)]))){
var statearr_33020_34065 = state_32933;
(statearr_33020_34065[(1)] = cljs.core.first((state_32933[(4)])));

} else {
throw ex__28703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34066 = state_32933;
state_32933 = G__34066;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
cljs$core$async$state_machine__28700__auto__ = function(state_32933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28700__auto____1.call(this,state_32933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28700__auto____0;
cljs$core$async$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28700__auto____1;
return cljs$core$async$state_machine__28700__auto__;
})()
})();
var state__30005__auto__ = (function (){var statearr_33022 = f__30004__auto__();
(statearr_33022[(6)] = c__30003__auto___34019);

return statearr_33022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30005__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
