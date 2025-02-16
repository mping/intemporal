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
cljs.core.async.t_cljs$core$async29583 = (function (f,blockable,meta29584){
this.f = f;
this.blockable = blockable;
this.meta29584 = meta29584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29585,meta29584__$1){
var self__ = this;
var _29585__$1 = this;
return (new cljs.core.async.t_cljs$core$async29583(self__.f,self__.blockable,meta29584__$1));
}));

(cljs.core.async.t_cljs$core$async29583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29585){
var self__ = this;
var _29585__$1 = this;
return self__.meta29584;
}));

(cljs.core.async.t_cljs$core$async29583.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29583.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29583.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29583.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29584","meta29584",-1186707079,null)], null);
}));

(cljs.core.async.t_cljs$core$async29583.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29583");

(cljs.core.async.t_cljs$core$async29583.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async29583");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29583.
 */
cljs.core.async.__GT_t_cljs$core$async29583 = (function cljs$core$async$__GT_t_cljs$core$async29583(f,blockable,meta29584){
return (new cljs.core.async.t_cljs$core$async29583(f,blockable,meta29584));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29579 = arguments.length;
switch (G__29579) {
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
return (new cljs.core.async.t_cljs$core$async29583(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29618 = arguments.length;
switch (G__29618) {
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
var G__29633 = arguments.length;
switch (G__29633) {
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
var G__29663 = arguments.length;
switch (G__29663) {
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
var val_34231 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34231) : fn1.call(null, val_34231));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34231) : fn1.call(null, val_34231));
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
var G__29670 = arguments.length;
switch (G__29670) {
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
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
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
var n__5593__auto___34255 = n;
var x_34256 = (0);
while(true){
if((x_34256 < n__5593__auto___34255)){
(a[x_34256] = x_34256);

var G__34257 = (x_34256 + (1));
x_34256 = G__34257;
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
cljs.core.async.t_cljs$core$async29704 = (function (flag,meta29705){
this.flag = flag;
this.meta29705 = meta29705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29706,meta29705__$1){
var self__ = this;
var _29706__$1 = this;
return (new cljs.core.async.t_cljs$core$async29704(self__.flag,meta29705__$1));
}));

(cljs.core.async.t_cljs$core$async29704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29706){
var self__ = this;
var _29706__$1 = this;
return self__.meta29705;
}));

(cljs.core.async.t_cljs$core$async29704.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29704.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29704.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29704.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29705","meta29705",-285680820,null)], null);
}));

(cljs.core.async.t_cljs$core$async29704.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29704");

(cljs.core.async.t_cljs$core$async29704.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async29704");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29704.
 */
cljs.core.async.__GT_t_cljs$core$async29704 = (function cljs$core$async$__GT_t_cljs$core$async29704(flag,meta29705){
return (new cljs.core.async.t_cljs$core$async29704(flag,meta29705));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async29704(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29737 = (function (flag,cb,meta29738){
this.flag = flag;
this.cb = cb;
this.meta29738 = meta29738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29739,meta29738__$1){
var self__ = this;
var _29739__$1 = this;
return (new cljs.core.async.t_cljs$core$async29737(self__.flag,self__.cb,meta29738__$1));
}));

(cljs.core.async.t_cljs$core$async29737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29739){
var self__ = this;
var _29739__$1 = this;
return self__.meta29738;
}));

(cljs.core.async.t_cljs$core$async29737.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29737.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29737.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29737.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29738","meta29738",1099078600,null)], null);
}));

(cljs.core.async.t_cljs$core$async29737.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29737");

(cljs.core.async.t_cljs$core$async29737.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async29737");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29737.
 */
cljs.core.async.__GT_t_cljs$core$async29737 = (function cljs$core$async$__GT_t_cljs$core$async29737(flag,cb,meta29738){
return (new cljs.core.async.t_cljs$core$async29737(flag,cb,meta29738));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async29737(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29772_SHARP_){
var G__29789 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29772_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29789) : fret.call(null, G__29789));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29773_SHARP_){
var G__29790 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29773_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29790) : fret.call(null, G__29790));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34292 = (i + (1));
i = G__34292;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
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
var args__5732__auto__ = [];
var len__5726__auto___34297 = arguments.length;
var i__5727__auto___34298 = (0);
while(true){
if((i__5727__auto___34298 < len__5726__auto___34297)){
args__5732__auto__.push((arguments[i__5727__auto___34298]));

var G__34299 = (i__5727__auto___34298 + (1));
i__5727__auto___34298 = G__34299;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29804){
var map__29805 = p__29804;
var map__29805__$1 = cljs.core.__destructure_map(map__29805);
var opts = map__29805__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29799){
var G__29800 = cljs.core.first(seq29799);
var seq29799__$1 = cljs.core.next(seq29799);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29800,seq29799__$1);
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
var G__29812 = arguments.length;
switch (G__29812) {
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
var c__29484__auto___34318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_29880){
var state_val_29885 = (state_29880[(1)]);
if((state_val_29885 === (7))){
var inst_29872 = (state_29880[(2)]);
var state_29880__$1 = state_29880;
var statearr_29895_34320 = state_29880__$1;
(statearr_29895_34320[(2)] = inst_29872);

(statearr_29895_34320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (1))){
var state_29880__$1 = state_29880;
var statearr_29896_34323 = state_29880__$1;
(statearr_29896_34323[(2)] = null);

(statearr_29896_34323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (4))){
var inst_29849 = (state_29880[(7)]);
var inst_29849__$1 = (state_29880[(2)]);
var inst_29850 = (inst_29849__$1 == null);
var state_29880__$1 = (function (){var statearr_29904 = state_29880;
(statearr_29904[(7)] = inst_29849__$1);

return statearr_29904;
})();
if(cljs.core.truth_(inst_29850)){
var statearr_29905_34325 = state_29880__$1;
(statearr_29905_34325[(1)] = (5));

} else {
var statearr_29908_34326 = state_29880__$1;
(statearr_29908_34326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (13))){
var state_29880__$1 = state_29880;
var statearr_29911_34328 = state_29880__$1;
(statearr_29911_34328[(2)] = null);

(statearr_29911_34328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (6))){
var inst_29849 = (state_29880[(7)]);
var state_29880__$1 = state_29880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29880__$1,(11),to,inst_29849);
} else {
if((state_val_29885 === (3))){
var inst_29877 = (state_29880[(2)]);
var state_29880__$1 = state_29880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29880__$1,inst_29877);
} else {
if((state_val_29885 === (12))){
var state_29880__$1 = state_29880;
var statearr_29928_34329 = state_29880__$1;
(statearr_29928_34329[(2)] = null);

(statearr_29928_34329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (2))){
var state_29880__$1 = state_29880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29880__$1,(4),from);
} else {
if((state_val_29885 === (11))){
var inst_29865 = (state_29880[(2)]);
var state_29880__$1 = state_29880;
if(cljs.core.truth_(inst_29865)){
var statearr_29935_34332 = state_29880__$1;
(statearr_29935_34332[(1)] = (12));

} else {
var statearr_29937_34333 = state_29880__$1;
(statearr_29937_34333[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (9))){
var state_29880__$1 = state_29880;
var statearr_29938_34337 = state_29880__$1;
(statearr_29938_34337[(2)] = null);

(statearr_29938_34337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (5))){
var state_29880__$1 = state_29880;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29939_34338 = state_29880__$1;
(statearr_29939_34338[(1)] = (8));

} else {
var statearr_29940_34339 = state_29880__$1;
(statearr_29940_34339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (14))){
var inst_29870 = (state_29880[(2)]);
var state_29880__$1 = state_29880;
var statearr_29943_34340 = state_29880__$1;
(statearr_29943_34340[(2)] = inst_29870);

(statearr_29943_34340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (10))){
var inst_29862 = (state_29880[(2)]);
var state_29880__$1 = state_29880;
var statearr_29949_34341 = state_29880__$1;
(statearr_29949_34341[(2)] = inst_29862);

(statearr_29949_34341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (8))){
var inst_29853 = cljs.core.async.close_BANG_(to);
var state_29880__$1 = state_29880;
var statearr_29950_34342 = state_29880__$1;
(statearr_29950_34342[(2)] = inst_29853);

(statearr_29950_34342[(1)] = (10));


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
var cljs$core$async$state_machine__28507__auto__ = null;
var cljs$core$async$state_machine__28507__auto____0 = (function (){
var statearr_29951 = [null,null,null,null,null,null,null,null];
(statearr_29951[(0)] = cljs$core$async$state_machine__28507__auto__);

(statearr_29951[(1)] = (1));

return statearr_29951;
});
var cljs$core$async$state_machine__28507__auto____1 = (function (state_29880){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_29880);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e29953){var ex__28510__auto__ = e29953;
var statearr_29954_34346 = state_29880;
(statearr_29954_34346[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_29880[(4)]))){
var statearr_29955_34347 = state_29880;
(statearr_29955_34347[(1)] = cljs.core.first((state_29880[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34348 = state_29880;
state_29880 = G__34348;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$state_machine__28507__auto__ = function(state_29880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28507__auto____1.call(this,state_29880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28507__auto____0;
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28507__auto____1;
return cljs$core$async$state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_29956 = f__29485__auto__();
(statearr_29956[(6)] = c__29484__auto___34318);

return statearr_29956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
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
var process__$1 = (function (p__29978){
var vec__29979 = p__29978;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29979,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29979,(1),null);
var job = vec__29979;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29484__auto___34350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_29998){
var state_val_29999 = (state_29998[(1)]);
if((state_val_29999 === (1))){
var state_29998__$1 = state_29998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29998__$1,(2),res,v);
} else {
if((state_val_29999 === (2))){
var inst_29993 = (state_29998[(2)]);
var inst_29995 = cljs.core.async.close_BANG_(res);
var state_29998__$1 = (function (){var statearr_30008 = state_29998;
(statearr_30008[(7)] = inst_29993);

return statearr_30008;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29998__$1,inst_29995);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____0 = (function (){
var statearr_30016 = [null,null,null,null,null,null,null,null];
(statearr_30016[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__);

(statearr_30016[(1)] = (1));

return statearr_30016;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____1 = (function (state_29998){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_29998);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e30019){var ex__28510__auto__ = e30019;
var statearr_30020_34360 = state_29998;
(statearr_30020_34360[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_29998[(4)]))){
var statearr_30021_34363 = state_29998;
(statearr_30021_34363[(1)] = cljs.core.first((state_29998[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34364 = state_29998;
state_29998 = G__34364;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__ = function(state_29998){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____1.call(this,state_29998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_30022 = f__29485__auto__();
(statearr_30022[(6)] = c__29484__auto___34350);

return statearr_30022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30026){
var vec__30027 = p__30026;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30027,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30027,(1),null);
var job = vec__30027;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___34367 = n;
var __34368 = (0);
while(true){
if((__34368 < n__5593__auto___34367)){
var G__30038_34369 = type;
var G__30038_34370__$1 = (((G__30038_34369 instanceof cljs.core.Keyword))?G__30038_34369.fqn:null);
switch (G__30038_34370__$1) {
case "compute":
var c__29484__auto___34373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34368,c__29484__auto___34373,G__30038_34369,G__30038_34370__$1,n__5593__auto___34367,jobs,results,process__$1,async){
return (function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = ((function (__34368,c__29484__auto___34373,G__30038_34369,G__30038_34370__$1,n__5593__auto___34367,jobs,results,process__$1,async){
return (function (state_30053){
var state_val_30054 = (state_30053[(1)]);
if((state_val_30054 === (1))){
var state_30053__$1 = state_30053;
var statearr_30061_34375 = state_30053__$1;
(statearr_30061_34375[(2)] = null);

(statearr_30061_34375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30054 === (2))){
var state_30053__$1 = state_30053;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30053__$1,(4),jobs);
} else {
if((state_val_30054 === (3))){
var inst_30051 = (state_30053[(2)]);
var state_30053__$1 = state_30053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30053__$1,inst_30051);
} else {
if((state_val_30054 === (4))){
var inst_30042 = (state_30053[(2)]);
var inst_30043 = process__$1(inst_30042);
var state_30053__$1 = state_30053;
if(cljs.core.truth_(inst_30043)){
var statearr_30068_34379 = state_30053__$1;
(statearr_30068_34379[(1)] = (5));

} else {
var statearr_30075_34381 = state_30053__$1;
(statearr_30075_34381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30054 === (5))){
var state_30053__$1 = state_30053;
var statearr_30076_34383 = state_30053__$1;
(statearr_30076_34383[(2)] = null);

(statearr_30076_34383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30054 === (6))){
var state_30053__$1 = state_30053;
var statearr_30077_34385 = state_30053__$1;
(statearr_30077_34385[(2)] = null);

(statearr_30077_34385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30054 === (7))){
var inst_30049 = (state_30053[(2)]);
var state_30053__$1 = state_30053;
var statearr_30081_34386 = state_30053__$1;
(statearr_30081_34386[(2)] = inst_30049);

(statearr_30081_34386[(1)] = (3));


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
});})(__34368,c__29484__auto___34373,G__30038_34369,G__30038_34370__$1,n__5593__auto___34367,jobs,results,process__$1,async))
;
return ((function (__34368,switch__28506__auto__,c__29484__auto___34373,G__30038_34369,G__30038_34370__$1,n__5593__auto___34367,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____0 = (function (){
var statearr_30083 = [null,null,null,null,null,null,null];
(statearr_30083[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__);

(statearr_30083[(1)] = (1));

return statearr_30083;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____1 = (function (state_30053){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_30053);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e30096){var ex__28510__auto__ = e30096;
var statearr_30099_34392 = state_30053;
(statearr_30099_34392[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_30053[(4)]))){
var statearr_30108_34394 = state_30053;
(statearr_30108_34394[(1)] = cljs.core.first((state_30053[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34397 = state_30053;
state_30053 = G__34397;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__ = function(state_30053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____1.call(this,state_30053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__;
})()
;})(__34368,switch__28506__auto__,c__29484__auto___34373,G__30038_34369,G__30038_34370__$1,n__5593__auto___34367,jobs,results,process__$1,async))
})();
var state__29486__auto__ = (function (){var statearr_30111 = f__29485__auto__();
(statearr_30111[(6)] = c__29484__auto___34373);

return statearr_30111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
});})(__34368,c__29484__auto___34373,G__30038_34369,G__30038_34370__$1,n__5593__auto___34367,jobs,results,process__$1,async))
);


break;
case "async":
var c__29484__auto___34400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34368,c__29484__auto___34400,G__30038_34369,G__30038_34370__$1,n__5593__auto___34367,jobs,results,process__$1,async){
return (function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = ((function (__34368,c__29484__auto___34400,G__30038_34369,G__30038_34370__$1,n__5593__auto___34367,jobs,results,process__$1,async){
return (function (state_30151){
var state_val_30152 = (state_30151[(1)]);
if((state_val_30152 === (1))){
var state_30151__$1 = state_30151;
var statearr_30166_34405 = state_30151__$1;
(statearr_30166_34405[(2)] = null);

(statearr_30166_34405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (2))){
var state_30151__$1 = state_30151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30151__$1,(4),jobs);
} else {
if((state_val_30152 === (3))){
var inst_30149 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30151__$1,inst_30149);
} else {
if((state_val_30152 === (4))){
var inst_30116 = (state_30151[(2)]);
var inst_30117 = async(inst_30116);
var state_30151__$1 = state_30151;
if(cljs.core.truth_(inst_30117)){
var statearr_30173_34408 = state_30151__$1;
(statearr_30173_34408[(1)] = (5));

} else {
var statearr_30176_34410 = state_30151__$1;
(statearr_30176_34410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (5))){
var state_30151__$1 = state_30151;
var statearr_30183_34414 = state_30151__$1;
(statearr_30183_34414[(2)] = null);

(statearr_30183_34414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (6))){
var state_30151__$1 = state_30151;
var statearr_30191_34417 = state_30151__$1;
(statearr_30191_34417[(2)] = null);

(statearr_30191_34417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (7))){
var inst_30134 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30202_34421 = state_30151__$1;
(statearr_30202_34421[(2)] = inst_30134);

(statearr_30202_34421[(1)] = (3));


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
});})(__34368,c__29484__auto___34400,G__30038_34369,G__30038_34370__$1,n__5593__auto___34367,jobs,results,process__$1,async))
;
return ((function (__34368,switch__28506__auto__,c__29484__auto___34400,G__30038_34369,G__30038_34370__$1,n__5593__auto___34367,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____0 = (function (){
var statearr_30217 = [null,null,null,null,null,null,null];
(statearr_30217[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__);

(statearr_30217[(1)] = (1));

return statearr_30217;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____1 = (function (state_30151){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_30151);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e30225){var ex__28510__auto__ = e30225;
var statearr_30227_34429 = state_30151;
(statearr_30227_34429[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_30151[(4)]))){
var statearr_30231_34431 = state_30151;
(statearr_30231_34431[(1)] = cljs.core.first((state_30151[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34432 = state_30151;
state_30151 = G__34432;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__ = function(state_30151){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____1.call(this,state_30151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__;
})()
;})(__34368,switch__28506__auto__,c__29484__auto___34400,G__30038_34369,G__30038_34370__$1,n__5593__auto___34367,jobs,results,process__$1,async))
})();
var state__29486__auto__ = (function (){var statearr_30255 = f__29485__auto__();
(statearr_30255[(6)] = c__29484__auto___34400);

return statearr_30255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
});})(__34368,c__29484__auto___34400,G__30038_34369,G__30038_34370__$1,n__5593__auto___34367,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30038_34370__$1)].join('')));

}

var G__34433 = (__34368 + (1));
__34368 = G__34433;
continue;
} else {
}
break;
}

var c__29484__auto___34434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_30330){
var state_val_30333 = (state_30330[(1)]);
if((state_val_30333 === (7))){
var inst_30325 = (state_30330[(2)]);
var state_30330__$1 = state_30330;
var statearr_30350_34437 = state_30330__$1;
(statearr_30350_34437[(2)] = inst_30325);

(statearr_30350_34437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30333 === (1))){
var state_30330__$1 = state_30330;
var statearr_30351_34438 = state_30330__$1;
(statearr_30351_34438[(2)] = null);

(statearr_30351_34438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30333 === (4))){
var inst_30281 = (state_30330[(7)]);
var inst_30281__$1 = (state_30330[(2)]);
var inst_30283 = (inst_30281__$1 == null);
var state_30330__$1 = (function (){var statearr_30354 = state_30330;
(statearr_30354[(7)] = inst_30281__$1);

return statearr_30354;
})();
if(cljs.core.truth_(inst_30283)){
var statearr_30355_34441 = state_30330__$1;
(statearr_30355_34441[(1)] = (5));

} else {
var statearr_30356_34442 = state_30330__$1;
(statearr_30356_34442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30333 === (6))){
var inst_30281 = (state_30330[(7)]);
var inst_30294 = (state_30330[(8)]);
var inst_30294__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30309 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30312 = [inst_30281,inst_30294__$1];
var inst_30313 = (new cljs.core.PersistentVector(null,2,(5),inst_30309,inst_30312,null));
var state_30330__$1 = (function (){var statearr_30367 = state_30330;
(statearr_30367[(8)] = inst_30294__$1);

return statearr_30367;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30330__$1,(8),jobs,inst_30313);
} else {
if((state_val_30333 === (3))){
var inst_30327 = (state_30330[(2)]);
var state_30330__$1 = state_30330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30330__$1,inst_30327);
} else {
if((state_val_30333 === (2))){
var state_30330__$1 = state_30330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30330__$1,(4),from);
} else {
if((state_val_30333 === (9))){
var inst_30322 = (state_30330[(2)]);
var state_30330__$1 = (function (){var statearr_30374 = state_30330;
(statearr_30374[(9)] = inst_30322);

return statearr_30374;
})();
var statearr_30376_34450 = state_30330__$1;
(statearr_30376_34450[(2)] = null);

(statearr_30376_34450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30333 === (5))){
var inst_30285 = cljs.core.async.close_BANG_(jobs);
var state_30330__$1 = state_30330;
var statearr_30378_34451 = state_30330__$1;
(statearr_30378_34451[(2)] = inst_30285);

(statearr_30378_34451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30333 === (8))){
var inst_30294 = (state_30330[(8)]);
var inst_30315 = (state_30330[(2)]);
var state_30330__$1 = (function (){var statearr_30383 = state_30330;
(statearr_30383[(10)] = inst_30315);

return statearr_30383;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30330__$1,(9),results,inst_30294);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____0 = (function (){
var statearr_30391 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30391[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__);

(statearr_30391[(1)] = (1));

return statearr_30391;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____1 = (function (state_30330){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_30330);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e30396){var ex__28510__auto__ = e30396;
var statearr_30398_34460 = state_30330;
(statearr_30398_34460[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_30330[(4)]))){
var statearr_30404_34461 = state_30330;
(statearr_30404_34461[(1)] = cljs.core.first((state_30330[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34462 = state_30330;
state_30330 = G__34462;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__ = function(state_30330){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____1.call(this,state_30330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_30414 = f__29485__auto__();
(statearr_30414[(6)] = c__29484__auto___34434);

return statearr_30414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
}));


var c__29484__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_30476){
var state_val_30477 = (state_30476[(1)]);
if((state_val_30477 === (7))){
var inst_30472 = (state_30476[(2)]);
var state_30476__$1 = state_30476;
var statearr_30486_34464 = state_30476__$1;
(statearr_30486_34464[(2)] = inst_30472);

(statearr_30486_34464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (20))){
var state_30476__$1 = state_30476;
var statearr_30492_34469 = state_30476__$1;
(statearr_30492_34469[(2)] = null);

(statearr_30492_34469[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (1))){
var state_30476__$1 = state_30476;
var statearr_30494_34476 = state_30476__$1;
(statearr_30494_34476[(2)] = null);

(statearr_30494_34476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (4))){
var inst_30427 = (state_30476[(7)]);
var inst_30427__$1 = (state_30476[(2)]);
var inst_30433 = (inst_30427__$1 == null);
var state_30476__$1 = (function (){var statearr_30499 = state_30476;
(statearr_30499[(7)] = inst_30427__$1);

return statearr_30499;
})();
if(cljs.core.truth_(inst_30433)){
var statearr_30500_34479 = state_30476__$1;
(statearr_30500_34479[(1)] = (5));

} else {
var statearr_30502_34480 = state_30476__$1;
(statearr_30502_34480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (15))){
var inst_30453 = (state_30476[(8)]);
var state_30476__$1 = state_30476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30476__$1,(18),to,inst_30453);
} else {
if((state_val_30477 === (21))){
var inst_30467 = (state_30476[(2)]);
var state_30476__$1 = state_30476;
var statearr_30509_34488 = state_30476__$1;
(statearr_30509_34488[(2)] = inst_30467);

(statearr_30509_34488[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (13))){
var inst_30469 = (state_30476[(2)]);
var state_30476__$1 = (function (){var statearr_30516 = state_30476;
(statearr_30516[(9)] = inst_30469);

return statearr_30516;
})();
var statearr_30518_34492 = state_30476__$1;
(statearr_30518_34492[(2)] = null);

(statearr_30518_34492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (6))){
var inst_30427 = (state_30476[(7)]);
var state_30476__$1 = state_30476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30476__$1,(11),inst_30427);
} else {
if((state_val_30477 === (17))){
var inst_30462 = (state_30476[(2)]);
var state_30476__$1 = state_30476;
if(cljs.core.truth_(inst_30462)){
var statearr_30522_34496 = state_30476__$1;
(statearr_30522_34496[(1)] = (19));

} else {
var statearr_30526_34497 = state_30476__$1;
(statearr_30526_34497[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (3))){
var inst_30474 = (state_30476[(2)]);
var state_30476__$1 = state_30476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30476__$1,inst_30474);
} else {
if((state_val_30477 === (12))){
var inst_30444 = (state_30476[(10)]);
var state_30476__$1 = state_30476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30476__$1,(14),inst_30444);
} else {
if((state_val_30477 === (2))){
var state_30476__$1 = state_30476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30476__$1,(4),results);
} else {
if((state_val_30477 === (19))){
var state_30476__$1 = state_30476;
var statearr_30537_34502 = state_30476__$1;
(statearr_30537_34502[(2)] = null);

(statearr_30537_34502[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (11))){
var inst_30444 = (state_30476[(2)]);
var state_30476__$1 = (function (){var statearr_30541 = state_30476;
(statearr_30541[(10)] = inst_30444);

return statearr_30541;
})();
var statearr_30542_34509 = state_30476__$1;
(statearr_30542_34509[(2)] = null);

(statearr_30542_34509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (9))){
var state_30476__$1 = state_30476;
var statearr_30545_34511 = state_30476__$1;
(statearr_30545_34511[(2)] = null);

(statearr_30545_34511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (5))){
var state_30476__$1 = state_30476;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30550_34522 = state_30476__$1;
(statearr_30550_34522[(1)] = (8));

} else {
var statearr_30552_34523 = state_30476__$1;
(statearr_30552_34523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (14))){
var inst_30453 = (state_30476[(8)]);
var inst_30456 = (state_30476[(11)]);
var inst_30453__$1 = (state_30476[(2)]);
var inst_30455 = (inst_30453__$1 == null);
var inst_30456__$1 = cljs.core.not(inst_30455);
var state_30476__$1 = (function (){var statearr_30559 = state_30476;
(statearr_30559[(8)] = inst_30453__$1);

(statearr_30559[(11)] = inst_30456__$1);

return statearr_30559;
})();
if(inst_30456__$1){
var statearr_30564_34526 = state_30476__$1;
(statearr_30564_34526[(1)] = (15));

} else {
var statearr_30567_34527 = state_30476__$1;
(statearr_30567_34527[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (16))){
var inst_30456 = (state_30476[(11)]);
var state_30476__$1 = state_30476;
var statearr_30573_34530 = state_30476__$1;
(statearr_30573_34530[(2)] = inst_30456);

(statearr_30573_34530[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (10))){
var inst_30440 = (state_30476[(2)]);
var state_30476__$1 = state_30476;
var statearr_30574_34534 = state_30476__$1;
(statearr_30574_34534[(2)] = inst_30440);

(statearr_30574_34534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (18))){
var inst_30459 = (state_30476[(2)]);
var state_30476__$1 = state_30476;
var statearr_30577_34535 = state_30476__$1;
(statearr_30577_34535[(2)] = inst_30459);

(statearr_30577_34535[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (8))){
var inst_30437 = cljs.core.async.close_BANG_(to);
var state_30476__$1 = state_30476;
var statearr_30580_34536 = state_30476__$1;
(statearr_30580_34536[(2)] = inst_30437);

(statearr_30580_34536[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____0 = (function (){
var statearr_30588 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__);

(statearr_30588[(1)] = (1));

return statearr_30588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____1 = (function (state_30476){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_30476);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e30591){var ex__28510__auto__ = e30591;
var statearr_30594_34540 = state_30476;
(statearr_30594_34540[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_30476[(4)]))){
var statearr_30595_34541 = state_30476;
(statearr_30595_34541[(1)] = cljs.core.first((state_30476[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34542 = state_30476;
state_30476 = G__34542;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__ = function(state_30476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____1.call(this,state_30476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_30602 = f__29485__auto__();
(statearr_30602[(6)] = c__29484__auto__);

return statearr_30602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
}));

return c__29484__auto__;
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
var G__30625 = arguments.length;
switch (G__30625) {
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
var G__30647 = arguments.length;
switch (G__30647) {
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
var G__30693 = arguments.length;
switch (G__30693) {
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
var c__29484__auto___34568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_30738){
var state_val_30739 = (state_30738[(1)]);
if((state_val_30739 === (7))){
var inst_30732 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
var statearr_30743_34571 = state_30738__$1;
(statearr_30743_34571[(2)] = inst_30732);

(statearr_30743_34571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (1))){
var state_30738__$1 = state_30738;
var statearr_30752_34572 = state_30738__$1;
(statearr_30752_34572[(2)] = null);

(statearr_30752_34572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (4))){
var inst_30705 = (state_30738[(7)]);
var inst_30705__$1 = (state_30738[(2)]);
var inst_30708 = (inst_30705__$1 == null);
var state_30738__$1 = (function (){var statearr_30760 = state_30738;
(statearr_30760[(7)] = inst_30705__$1);

return statearr_30760;
})();
if(cljs.core.truth_(inst_30708)){
var statearr_30761_34574 = state_30738__$1;
(statearr_30761_34574[(1)] = (5));

} else {
var statearr_30765_34576 = state_30738__$1;
(statearr_30765_34576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (13))){
var state_30738__$1 = state_30738;
var statearr_30766_34577 = state_30738__$1;
(statearr_30766_34577[(2)] = null);

(statearr_30766_34577[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (6))){
var inst_30705 = (state_30738[(7)]);
var inst_30716 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30705) : p.call(null, inst_30705));
var state_30738__$1 = state_30738;
if(cljs.core.truth_(inst_30716)){
var statearr_30773_34580 = state_30738__$1;
(statearr_30773_34580[(1)] = (9));

} else {
var statearr_30774_34581 = state_30738__$1;
(statearr_30774_34581[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (3))){
var inst_30734 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30738__$1,inst_30734);
} else {
if((state_val_30739 === (12))){
var state_30738__$1 = state_30738;
var statearr_30785_34582 = state_30738__$1;
(statearr_30785_34582[(2)] = null);

(statearr_30785_34582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (2))){
var state_30738__$1 = state_30738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30738__$1,(4),ch);
} else {
if((state_val_30739 === (11))){
var inst_30705 = (state_30738[(7)]);
var inst_30720 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30738__$1,(8),inst_30720,inst_30705);
} else {
if((state_val_30739 === (9))){
var state_30738__$1 = state_30738;
var statearr_30792_34586 = state_30738__$1;
(statearr_30792_34586[(2)] = tc);

(statearr_30792_34586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (5))){
var inst_30711 = cljs.core.async.close_BANG_(tc);
var inst_30712 = cljs.core.async.close_BANG_(fc);
var state_30738__$1 = (function (){var statearr_30794 = state_30738;
(statearr_30794[(8)] = inst_30711);

return statearr_30794;
})();
var statearr_30801_34590 = state_30738__$1;
(statearr_30801_34590[(2)] = inst_30712);

(statearr_30801_34590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (14))){
var inst_30730 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
var statearr_30811_34592 = state_30738__$1;
(statearr_30811_34592[(2)] = inst_30730);

(statearr_30811_34592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (10))){
var state_30738__$1 = state_30738;
var statearr_30818_34596 = state_30738__$1;
(statearr_30818_34596[(2)] = fc);

(statearr_30818_34596[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (8))){
var inst_30722 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
if(cljs.core.truth_(inst_30722)){
var statearr_30820_34599 = state_30738__$1;
(statearr_30820_34599[(1)] = (12));

} else {
var statearr_30822_34601 = state_30738__$1;
(statearr_30822_34601[(1)] = (13));

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
var cljs$core$async$state_machine__28507__auto__ = null;
var cljs$core$async$state_machine__28507__auto____0 = (function (){
var statearr_30833 = [null,null,null,null,null,null,null,null,null];
(statearr_30833[(0)] = cljs$core$async$state_machine__28507__auto__);

(statearr_30833[(1)] = (1));

return statearr_30833;
});
var cljs$core$async$state_machine__28507__auto____1 = (function (state_30738){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_30738);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e30837){var ex__28510__auto__ = e30837;
var statearr_30841_34616 = state_30738;
(statearr_30841_34616[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_30738[(4)]))){
var statearr_30847_34618 = state_30738;
(statearr_30847_34618[(1)] = cljs.core.first((state_30738[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34622 = state_30738;
state_30738 = G__34622;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$state_machine__28507__auto__ = function(state_30738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28507__auto____1.call(this,state_30738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28507__auto____0;
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28507__auto____1;
return cljs$core$async$state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_30860 = f__29485__auto__();
(statearr_30860[(6)] = c__29484__auto___34568);

return statearr_30860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
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
var c__29484__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_30910){
var state_val_30911 = (state_30910[(1)]);
if((state_val_30911 === (7))){
var inst_30902 = (state_30910[(2)]);
var state_30910__$1 = state_30910;
var statearr_30919_34640 = state_30910__$1;
(statearr_30919_34640[(2)] = inst_30902);

(statearr_30919_34640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (1))){
var inst_30875 = init;
var inst_30882 = inst_30875;
var state_30910__$1 = (function (){var statearr_30921 = state_30910;
(statearr_30921[(7)] = inst_30882);

return statearr_30921;
})();
var statearr_30925_34642 = state_30910__$1;
(statearr_30925_34642[(2)] = null);

(statearr_30925_34642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (4))){
var inst_30886 = (state_30910[(8)]);
var inst_30886__$1 = (state_30910[(2)]);
var inst_30888 = (inst_30886__$1 == null);
var state_30910__$1 = (function (){var statearr_30932 = state_30910;
(statearr_30932[(8)] = inst_30886__$1);

return statearr_30932;
})();
if(cljs.core.truth_(inst_30888)){
var statearr_30936_34648 = state_30910__$1;
(statearr_30936_34648[(1)] = (5));

} else {
var statearr_30939_34649 = state_30910__$1;
(statearr_30939_34649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (6))){
var inst_30886 = (state_30910[(8)]);
var inst_30882 = (state_30910[(7)]);
var inst_30891 = (state_30910[(9)]);
var inst_30891__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30882,inst_30886) : f.call(null, inst_30882,inst_30886));
var inst_30892 = cljs.core.reduced_QMARK_(inst_30891__$1);
var state_30910__$1 = (function (){var statearr_30950 = state_30910;
(statearr_30950[(9)] = inst_30891__$1);

return statearr_30950;
})();
if(inst_30892){
var statearr_30954_34654 = state_30910__$1;
(statearr_30954_34654[(1)] = (8));

} else {
var statearr_30955_34657 = state_30910__$1;
(statearr_30955_34657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (3))){
var inst_30904 = (state_30910[(2)]);
var state_30910__$1 = state_30910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30910__$1,inst_30904);
} else {
if((state_val_30911 === (2))){
var state_30910__$1 = state_30910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30910__$1,(4),ch);
} else {
if((state_val_30911 === (9))){
var inst_30891 = (state_30910[(9)]);
var inst_30882 = inst_30891;
var state_30910__$1 = (function (){var statearr_30960 = state_30910;
(statearr_30960[(7)] = inst_30882);

return statearr_30960;
})();
var statearr_30963_34662 = state_30910__$1;
(statearr_30963_34662[(2)] = null);

(statearr_30963_34662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (5))){
var inst_30882 = (state_30910[(7)]);
var state_30910__$1 = state_30910;
var statearr_30968_34664 = state_30910__$1;
(statearr_30968_34664[(2)] = inst_30882);

(statearr_30968_34664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (10))){
var inst_30900 = (state_30910[(2)]);
var state_30910__$1 = state_30910;
var statearr_30971_34667 = state_30910__$1;
(statearr_30971_34667[(2)] = inst_30900);

(statearr_30971_34667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (8))){
var inst_30891 = (state_30910[(9)]);
var inst_30896 = cljs.core.deref(inst_30891);
var state_30910__$1 = state_30910;
var statearr_30975_34670 = state_30910__$1;
(statearr_30975_34670[(2)] = inst_30896);

(statearr_30975_34670[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28507__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28507__auto____0 = (function (){
var statearr_30984 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30984[(0)] = cljs$core$async$reduce_$_state_machine__28507__auto__);

(statearr_30984[(1)] = (1));

return statearr_30984;
});
var cljs$core$async$reduce_$_state_machine__28507__auto____1 = (function (state_30910){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_30910);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e30989){var ex__28510__auto__ = e30989;
var statearr_30993_34679 = state_30910;
(statearr_30993_34679[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_30910[(4)]))){
var statearr_30997_34680 = state_30910;
(statearr_30997_34680[(1)] = cljs.core.first((state_30910[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34684 = state_30910;
state_30910 = G__34684;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28507__auto__ = function(state_30910){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28507__auto____1.call(this,state_30910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28507__auto____0;
cljs$core$async$reduce_$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28507__auto____1;
return cljs$core$async$reduce_$_state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_31001 = f__29485__auto__();
(statearr_31001[(6)] = c__29484__auto__);

return statearr_31001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
}));

return c__29484__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__29484__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_31028){
var state_val_31029 = (state_31028[(1)]);
if((state_val_31029 === (1))){
var inst_31023 = cljs.core.async.reduce(f__$1,init,ch);
var state_31028__$1 = state_31028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31028__$1,(2),inst_31023);
} else {
if((state_val_31029 === (2))){
var inst_31025 = (state_31028[(2)]);
var inst_31026 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31025) : f__$1.call(null, inst_31025));
var state_31028__$1 = state_31028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31028__$1,inst_31026);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28507__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28507__auto____0 = (function (){
var statearr_31052 = [null,null,null,null,null,null,null];
(statearr_31052[(0)] = cljs$core$async$transduce_$_state_machine__28507__auto__);

(statearr_31052[(1)] = (1));

return statearr_31052;
});
var cljs$core$async$transduce_$_state_machine__28507__auto____1 = (function (state_31028){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_31028);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e31056){var ex__28510__auto__ = e31056;
var statearr_31058_34688 = state_31028;
(statearr_31058_34688[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_31028[(4)]))){
var statearr_31059_34689 = state_31028;
(statearr_31059_34689[(1)] = cljs.core.first((state_31028[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34690 = state_31028;
state_31028 = G__34690;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28507__auto__ = function(state_31028){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28507__auto____1.call(this,state_31028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28507__auto____0;
cljs$core$async$transduce_$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28507__auto____1;
return cljs$core$async$transduce_$_state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_31061 = f__29485__auto__();
(statearr_31061[(6)] = c__29484__auto__);

return statearr_31061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
}));

return c__29484__auto__;
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
var G__31073 = arguments.length;
switch (G__31073) {
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
var c__29484__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_31118){
var state_val_31120 = (state_31118[(1)]);
if((state_val_31120 === (7))){
var inst_31095 = (state_31118[(2)]);
var state_31118__$1 = state_31118;
var statearr_31125_34694 = state_31118__$1;
(statearr_31125_34694[(2)] = inst_31095);

(statearr_31125_34694[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (1))){
var inst_31084 = cljs.core.seq(coll);
var inst_31086 = inst_31084;
var state_31118__$1 = (function (){var statearr_31128 = state_31118;
(statearr_31128[(7)] = inst_31086);

return statearr_31128;
})();
var statearr_31129_34695 = state_31118__$1;
(statearr_31129_34695[(2)] = null);

(statearr_31129_34695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (4))){
var inst_31086 = (state_31118[(7)]);
var inst_31093 = cljs.core.first(inst_31086);
var state_31118__$1 = state_31118;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31118__$1,(7),ch,inst_31093);
} else {
if((state_val_31120 === (13))){
var inst_31110 = (state_31118[(2)]);
var state_31118__$1 = state_31118;
var statearr_31138_34698 = state_31118__$1;
(statearr_31138_34698[(2)] = inst_31110);

(statearr_31138_34698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (6))){
var inst_31098 = (state_31118[(2)]);
var state_31118__$1 = state_31118;
if(cljs.core.truth_(inst_31098)){
var statearr_31141_34699 = state_31118__$1;
(statearr_31141_34699[(1)] = (8));

} else {
var statearr_31143_34700 = state_31118__$1;
(statearr_31143_34700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (3))){
var inst_31114 = (state_31118[(2)]);
var state_31118__$1 = state_31118;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31118__$1,inst_31114);
} else {
if((state_val_31120 === (12))){
var state_31118__$1 = state_31118;
var statearr_31150_34707 = state_31118__$1;
(statearr_31150_34707[(2)] = null);

(statearr_31150_34707[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (2))){
var inst_31086 = (state_31118[(7)]);
var state_31118__$1 = state_31118;
if(cljs.core.truth_(inst_31086)){
var statearr_31155_34711 = state_31118__$1;
(statearr_31155_34711[(1)] = (4));

} else {
var statearr_31157_34712 = state_31118__$1;
(statearr_31157_34712[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (11))){
var inst_31107 = cljs.core.async.close_BANG_(ch);
var state_31118__$1 = state_31118;
var statearr_31163_34715 = state_31118__$1;
(statearr_31163_34715[(2)] = inst_31107);

(statearr_31163_34715[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (9))){
var state_31118__$1 = state_31118;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31172_34716 = state_31118__$1;
(statearr_31172_34716[(1)] = (11));

} else {
var statearr_31176_34717 = state_31118__$1;
(statearr_31176_34717[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (5))){
var inst_31086 = (state_31118[(7)]);
var state_31118__$1 = state_31118;
var statearr_31184_34718 = state_31118__$1;
(statearr_31184_34718[(2)] = inst_31086);

(statearr_31184_34718[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (10))){
var inst_31112 = (state_31118[(2)]);
var state_31118__$1 = state_31118;
var statearr_31192_34719 = state_31118__$1;
(statearr_31192_34719[(2)] = inst_31112);

(statearr_31192_34719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (8))){
var inst_31086 = (state_31118[(7)]);
var inst_31101 = cljs.core.next(inst_31086);
var inst_31086__$1 = inst_31101;
var state_31118__$1 = (function (){var statearr_31196 = state_31118;
(statearr_31196[(7)] = inst_31086__$1);

return statearr_31196;
})();
var statearr_31197_34722 = state_31118__$1;
(statearr_31197_34722[(2)] = null);

(statearr_31197_34722[(1)] = (2));


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
var cljs$core$async$state_machine__28507__auto__ = null;
var cljs$core$async$state_machine__28507__auto____0 = (function (){
var statearr_31203 = [null,null,null,null,null,null,null,null];
(statearr_31203[(0)] = cljs$core$async$state_machine__28507__auto__);

(statearr_31203[(1)] = (1));

return statearr_31203;
});
var cljs$core$async$state_machine__28507__auto____1 = (function (state_31118){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_31118);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e31206){var ex__28510__auto__ = e31206;
var statearr_31207_34725 = state_31118;
(statearr_31207_34725[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_31118[(4)]))){
var statearr_31211_34726 = state_31118;
(statearr_31211_34726[(1)] = cljs.core.first((state_31118[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34727 = state_31118;
state_31118 = G__34727;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$state_machine__28507__auto__ = function(state_31118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28507__auto____1.call(this,state_31118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28507__auto____0;
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28507__auto____1;
return cljs$core$async$state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_31220 = f__29485__auto__();
(statearr_31220[(6)] = c__29484__auto__);

return statearr_31220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
}));

return c__29484__auto__;
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
var G__31235 = arguments.length;
switch (G__31235) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34736 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34736(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34743 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34743(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34760 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34760(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34766 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34766(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31358 = (function (ch,cs,meta31359){
this.ch = ch;
this.cs = cs;
this.meta31359 = meta31359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31360,meta31359__$1){
var self__ = this;
var _31360__$1 = this;
return (new cljs.core.async.t_cljs$core$async31358(self__.ch,self__.cs,meta31359__$1));
}));

(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31360){
var self__ = this;
var _31360__$1 = this;
return self__.meta31359;
}));

(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31359","meta31359",1291521572,null)], null);
}));

(cljs.core.async.t_cljs$core$async31358.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31358");

(cljs.core.async.t_cljs$core$async31358.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31358");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31358.
 */
cljs.core.async.__GT_t_cljs$core$async31358 = (function cljs$core$async$__GT_t_cljs$core$async31358(ch,cs,meta31359){
return (new cljs.core.async.t_cljs$core$async31358(ch,cs,meta31359));
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
var m = (new cljs.core.async.t_cljs$core$async31358(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29484__auto___34805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_31570){
var state_val_31572 = (state_31570[(1)]);
if((state_val_31572 === (7))){
var inst_31559 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31596_34806 = state_31570__$1;
(statearr_31596_34806[(2)] = inst_31559);

(statearr_31596_34806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (20))){
var inst_31441 = (state_31570[(7)]);
var inst_31460 = cljs.core.first(inst_31441);
var inst_31462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31460,(0),null);
var inst_31463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31460,(1),null);
var state_31570__$1 = (function (){var statearr_31600 = state_31570;
(statearr_31600[(8)] = inst_31462);

return statearr_31600;
})();
if(cljs.core.truth_(inst_31463)){
var statearr_31603_34807 = state_31570__$1;
(statearr_31603_34807[(1)] = (22));

} else {
var statearr_31606_34808 = state_31570__$1;
(statearr_31606_34808[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (27))){
var inst_31500 = (state_31570[(9)]);
var inst_31393 = (state_31570[(10)]);
var inst_31491 = (state_31570[(11)]);
var inst_31493 = (state_31570[(12)]);
var inst_31500__$1 = cljs.core._nth(inst_31491,inst_31493);
var inst_31501 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31500__$1,inst_31393,done);
var state_31570__$1 = (function (){var statearr_31612 = state_31570;
(statearr_31612[(9)] = inst_31500__$1);

return statearr_31612;
})();
if(cljs.core.truth_(inst_31501)){
var statearr_31613_34812 = state_31570__$1;
(statearr_31613_34812[(1)] = (30));

} else {
var statearr_31614_34813 = state_31570__$1;
(statearr_31614_34813[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (1))){
var state_31570__$1 = state_31570;
var statearr_31615_34814 = state_31570__$1;
(statearr_31615_34814[(2)] = null);

(statearr_31615_34814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (24))){
var inst_31441 = (state_31570[(7)]);
var inst_31468 = (state_31570[(2)]);
var inst_31469 = cljs.core.next(inst_31441);
var inst_31409 = inst_31469;
var inst_31410 = null;
var inst_31411 = (0);
var inst_31412 = (0);
var state_31570__$1 = (function (){var statearr_31616 = state_31570;
(statearr_31616[(13)] = inst_31409);

(statearr_31616[(14)] = inst_31410);

(statearr_31616[(15)] = inst_31468);

(statearr_31616[(16)] = inst_31412);

(statearr_31616[(17)] = inst_31411);

return statearr_31616;
})();
var statearr_31619_34820 = state_31570__$1;
(statearr_31619_34820[(2)] = null);

(statearr_31619_34820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (39))){
var state_31570__$1 = state_31570;
var statearr_31636_34821 = state_31570__$1;
(statearr_31636_34821[(2)] = null);

(statearr_31636_34821[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (4))){
var inst_31393 = (state_31570[(10)]);
var inst_31393__$1 = (state_31570[(2)]);
var inst_31398 = (inst_31393__$1 == null);
var state_31570__$1 = (function (){var statearr_31638 = state_31570;
(statearr_31638[(10)] = inst_31393__$1);

return statearr_31638;
})();
if(cljs.core.truth_(inst_31398)){
var statearr_31644_34822 = state_31570__$1;
(statearr_31644_34822[(1)] = (5));

} else {
var statearr_31645_34823 = state_31570__$1;
(statearr_31645_34823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (15))){
var inst_31409 = (state_31570[(13)]);
var inst_31410 = (state_31570[(14)]);
var inst_31412 = (state_31570[(16)]);
var inst_31411 = (state_31570[(17)]);
var inst_31434 = (state_31570[(2)]);
var inst_31436 = (inst_31412 + (1));
var tmp31625 = inst_31409;
var tmp31626 = inst_31410;
var tmp31627 = inst_31411;
var inst_31409__$1 = tmp31625;
var inst_31410__$1 = tmp31626;
var inst_31411__$1 = tmp31627;
var inst_31412__$1 = inst_31436;
var state_31570__$1 = (function (){var statearr_31650 = state_31570;
(statearr_31650[(13)] = inst_31409__$1);

(statearr_31650[(18)] = inst_31434);

(statearr_31650[(14)] = inst_31410__$1);

(statearr_31650[(16)] = inst_31412__$1);

(statearr_31650[(17)] = inst_31411__$1);

return statearr_31650;
})();
var statearr_31652_34826 = state_31570__$1;
(statearr_31652_34826[(2)] = null);

(statearr_31652_34826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (21))){
var inst_31472 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31656_34827 = state_31570__$1;
(statearr_31656_34827[(2)] = inst_31472);

(statearr_31656_34827[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (31))){
var inst_31500 = (state_31570[(9)]);
var inst_31504 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_31500);
var state_31570__$1 = state_31570;
var statearr_31657_34828 = state_31570__$1;
(statearr_31657_34828[(2)] = inst_31504);

(statearr_31657_34828[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (32))){
var inst_31491 = (state_31570[(11)]);
var inst_31492 = (state_31570[(19)]);
var inst_31490 = (state_31570[(20)]);
var inst_31493 = (state_31570[(12)]);
var inst_31506 = (state_31570[(2)]);
var inst_31509 = (inst_31493 + (1));
var tmp31653 = inst_31491;
var tmp31654 = inst_31492;
var tmp31655 = inst_31490;
var inst_31490__$1 = tmp31655;
var inst_31491__$1 = tmp31653;
var inst_31492__$1 = tmp31654;
var inst_31493__$1 = inst_31509;
var state_31570__$1 = (function (){var statearr_31658 = state_31570;
(statearr_31658[(11)] = inst_31491__$1);

(statearr_31658[(19)] = inst_31492__$1);

(statearr_31658[(20)] = inst_31490__$1);

(statearr_31658[(21)] = inst_31506);

(statearr_31658[(12)] = inst_31493__$1);

return statearr_31658;
})();
var statearr_31670_34836 = state_31570__$1;
(statearr_31670_34836[(2)] = null);

(statearr_31670_34836[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (40))){
var inst_31529 = (state_31570[(22)]);
var inst_31533 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_31529);
var state_31570__$1 = state_31570;
var statearr_31673_34840 = state_31570__$1;
(statearr_31673_34840[(2)] = inst_31533);

(statearr_31673_34840[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (33))){
var inst_31512 = (state_31570[(23)]);
var inst_31516 = cljs.core.chunked_seq_QMARK_(inst_31512);
var state_31570__$1 = state_31570;
if(inst_31516){
var statearr_31676_34841 = state_31570__$1;
(statearr_31676_34841[(1)] = (36));

} else {
var statearr_31678_34842 = state_31570__$1;
(statearr_31678_34842[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (13))){
var inst_31426 = (state_31570[(24)]);
var inst_31430 = cljs.core.async.close_BANG_(inst_31426);
var state_31570__$1 = state_31570;
var statearr_31680_34844 = state_31570__$1;
(statearr_31680_34844[(2)] = inst_31430);

(statearr_31680_34844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (22))){
var inst_31462 = (state_31570[(8)]);
var inst_31465 = cljs.core.async.close_BANG_(inst_31462);
var state_31570__$1 = state_31570;
var statearr_31687_34846 = state_31570__$1;
(statearr_31687_34846[(2)] = inst_31465);

(statearr_31687_34846[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (36))){
var inst_31512 = (state_31570[(23)]);
var inst_31520 = cljs.core.chunk_first(inst_31512);
var inst_31522 = cljs.core.chunk_rest(inst_31512);
var inst_31523 = cljs.core.count(inst_31520);
var inst_31490 = inst_31522;
var inst_31491 = inst_31520;
var inst_31492 = inst_31523;
var inst_31493 = (0);
var state_31570__$1 = (function (){var statearr_31688 = state_31570;
(statearr_31688[(11)] = inst_31491);

(statearr_31688[(19)] = inst_31492);

(statearr_31688[(20)] = inst_31490);

(statearr_31688[(12)] = inst_31493);

return statearr_31688;
})();
var statearr_31689_34848 = state_31570__$1;
(statearr_31689_34848[(2)] = null);

(statearr_31689_34848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (41))){
var inst_31512 = (state_31570[(23)]);
var inst_31535 = (state_31570[(2)]);
var inst_31538 = cljs.core.next(inst_31512);
var inst_31490 = inst_31538;
var inst_31491 = null;
var inst_31492 = (0);
var inst_31493 = (0);
var state_31570__$1 = (function (){var statearr_31691 = state_31570;
(statearr_31691[(25)] = inst_31535);

(statearr_31691[(11)] = inst_31491);

(statearr_31691[(19)] = inst_31492);

(statearr_31691[(20)] = inst_31490);

(statearr_31691[(12)] = inst_31493);

return statearr_31691;
})();
var statearr_31697_34855 = state_31570__$1;
(statearr_31697_34855[(2)] = null);

(statearr_31697_34855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (43))){
var state_31570__$1 = state_31570;
var statearr_31699_34856 = state_31570__$1;
(statearr_31699_34856[(2)] = null);

(statearr_31699_34856[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (29))){
var inst_31546 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31702_34858 = state_31570__$1;
(statearr_31702_34858[(2)] = inst_31546);

(statearr_31702_34858[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (44))){
var inst_31555 = (state_31570[(2)]);
var state_31570__$1 = (function (){var statearr_31706 = state_31570;
(statearr_31706[(26)] = inst_31555);

return statearr_31706;
})();
var statearr_31708_34862 = state_31570__$1;
(statearr_31708_34862[(2)] = null);

(statearr_31708_34862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (6))){
var inst_31482 = (state_31570[(27)]);
var inst_31481 = cljs.core.deref(cs);
var inst_31482__$1 = cljs.core.keys(inst_31481);
var inst_31483 = cljs.core.count(inst_31482__$1);
var inst_31484 = cljs.core.reset_BANG_(dctr,inst_31483);
var inst_31489 = cljs.core.seq(inst_31482__$1);
var inst_31490 = inst_31489;
var inst_31491 = null;
var inst_31492 = (0);
var inst_31493 = (0);
var state_31570__$1 = (function (){var statearr_31710 = state_31570;
(statearr_31710[(28)] = inst_31484);

(statearr_31710[(11)] = inst_31491);

(statearr_31710[(19)] = inst_31492);

(statearr_31710[(20)] = inst_31490);

(statearr_31710[(12)] = inst_31493);

(statearr_31710[(27)] = inst_31482__$1);

return statearr_31710;
})();
var statearr_31712_34865 = state_31570__$1;
(statearr_31712_34865[(2)] = null);

(statearr_31712_34865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (28))){
var inst_31512 = (state_31570[(23)]);
var inst_31490 = (state_31570[(20)]);
var inst_31512__$1 = cljs.core.seq(inst_31490);
var state_31570__$1 = (function (){var statearr_31716 = state_31570;
(statearr_31716[(23)] = inst_31512__$1);

return statearr_31716;
})();
if(inst_31512__$1){
var statearr_31717_34868 = state_31570__$1;
(statearr_31717_34868[(1)] = (33));

} else {
var statearr_31718_34869 = state_31570__$1;
(statearr_31718_34869[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (25))){
var inst_31492 = (state_31570[(19)]);
var inst_31493 = (state_31570[(12)]);
var inst_31497 = (inst_31493 < inst_31492);
var inst_31498 = inst_31497;
var state_31570__$1 = state_31570;
if(cljs.core.truth_(inst_31498)){
var statearr_31724_34870 = state_31570__$1;
(statearr_31724_34870[(1)] = (27));

} else {
var statearr_31725_34871 = state_31570__$1;
(statearr_31725_34871[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (34))){
var state_31570__$1 = state_31570;
var statearr_31729_34872 = state_31570__$1;
(statearr_31729_34872[(2)] = null);

(statearr_31729_34872[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (17))){
var state_31570__$1 = state_31570;
var statearr_31730_34874 = state_31570__$1;
(statearr_31730_34874[(2)] = null);

(statearr_31730_34874[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (3))){
var inst_31562 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31570__$1,inst_31562);
} else {
if((state_val_31572 === (12))){
var inst_31477 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31732_34876 = state_31570__$1;
(statearr_31732_34876[(2)] = inst_31477);

(statearr_31732_34876[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (2))){
var state_31570__$1 = state_31570;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31570__$1,(4),ch);
} else {
if((state_val_31572 === (23))){
var state_31570__$1 = state_31570;
var statearr_31737_34878 = state_31570__$1;
(statearr_31737_34878[(2)] = null);

(statearr_31737_34878[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (35))){
var inst_31544 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31740_34880 = state_31570__$1;
(statearr_31740_34880[(2)] = inst_31544);

(statearr_31740_34880[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (19))){
var inst_31441 = (state_31570[(7)]);
var inst_31447 = cljs.core.chunk_first(inst_31441);
var inst_31449 = cljs.core.chunk_rest(inst_31441);
var inst_31452 = cljs.core.count(inst_31447);
var inst_31409 = inst_31449;
var inst_31410 = inst_31447;
var inst_31411 = inst_31452;
var inst_31412 = (0);
var state_31570__$1 = (function (){var statearr_31744 = state_31570;
(statearr_31744[(13)] = inst_31409);

(statearr_31744[(14)] = inst_31410);

(statearr_31744[(16)] = inst_31412);

(statearr_31744[(17)] = inst_31411);

return statearr_31744;
})();
var statearr_31745_34882 = state_31570__$1;
(statearr_31745_34882[(2)] = null);

(statearr_31745_34882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (11))){
var inst_31409 = (state_31570[(13)]);
var inst_31441 = (state_31570[(7)]);
var inst_31441__$1 = cljs.core.seq(inst_31409);
var state_31570__$1 = (function (){var statearr_31748 = state_31570;
(statearr_31748[(7)] = inst_31441__$1);

return statearr_31748;
})();
if(inst_31441__$1){
var statearr_31749_34884 = state_31570__$1;
(statearr_31749_34884[(1)] = (16));

} else {
var statearr_31750_34886 = state_31570__$1;
(statearr_31750_34886[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (9))){
var inst_31479 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31754_34888 = state_31570__$1;
(statearr_31754_34888[(2)] = inst_31479);

(statearr_31754_34888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (5))){
var inst_31407 = cljs.core.deref(cs);
var inst_31408 = cljs.core.seq(inst_31407);
var inst_31409 = inst_31408;
var inst_31410 = null;
var inst_31411 = (0);
var inst_31412 = (0);
var state_31570__$1 = (function (){var statearr_31755 = state_31570;
(statearr_31755[(13)] = inst_31409);

(statearr_31755[(14)] = inst_31410);

(statearr_31755[(16)] = inst_31412);

(statearr_31755[(17)] = inst_31411);

return statearr_31755;
})();
var statearr_31758_34890 = state_31570__$1;
(statearr_31758_34890[(2)] = null);

(statearr_31758_34890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (14))){
var state_31570__$1 = state_31570;
var statearr_31760_34892 = state_31570__$1;
(statearr_31760_34892[(2)] = null);

(statearr_31760_34892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (45))){
var inst_31552 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31762_34894 = state_31570__$1;
(statearr_31762_34894[(2)] = inst_31552);

(statearr_31762_34894[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (26))){
var inst_31482 = (state_31570[(27)]);
var inst_31548 = (state_31570[(2)]);
var inst_31549 = cljs.core.seq(inst_31482);
var state_31570__$1 = (function (){var statearr_31765 = state_31570;
(statearr_31765[(29)] = inst_31548);

return statearr_31765;
})();
if(inst_31549){
var statearr_31766_34896 = state_31570__$1;
(statearr_31766_34896[(1)] = (42));

} else {
var statearr_31768_34898 = state_31570__$1;
(statearr_31768_34898[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (16))){
var inst_31441 = (state_31570[(7)]);
var inst_31445 = cljs.core.chunked_seq_QMARK_(inst_31441);
var state_31570__$1 = state_31570;
if(inst_31445){
var statearr_31781_34902 = state_31570__$1;
(statearr_31781_34902[(1)] = (19));

} else {
var statearr_31782_34903 = state_31570__$1;
(statearr_31782_34903[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (38))){
var inst_31541 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31785_34905 = state_31570__$1;
(statearr_31785_34905[(2)] = inst_31541);

(statearr_31785_34905[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (30))){
var state_31570__$1 = state_31570;
var statearr_31787_34907 = state_31570__$1;
(statearr_31787_34907[(2)] = null);

(statearr_31787_34907[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (10))){
var inst_31410 = (state_31570[(14)]);
var inst_31412 = (state_31570[(16)]);
var inst_31424 = cljs.core._nth(inst_31410,inst_31412);
var inst_31426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31424,(0),null);
var inst_31428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31424,(1),null);
var state_31570__$1 = (function (){var statearr_31789 = state_31570;
(statearr_31789[(24)] = inst_31426);

return statearr_31789;
})();
if(cljs.core.truth_(inst_31428)){
var statearr_31790_34909 = state_31570__$1;
(statearr_31790_34909[(1)] = (13));

} else {
var statearr_31791_34911 = state_31570__$1;
(statearr_31791_34911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (18))){
var inst_31475 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31793_34912 = state_31570__$1;
(statearr_31793_34912[(2)] = inst_31475);

(statearr_31793_34912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (42))){
var state_31570__$1 = state_31570;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31570__$1,(45),dchan);
} else {
if((state_val_31572 === (37))){
var inst_31393 = (state_31570[(10)]);
var inst_31512 = (state_31570[(23)]);
var inst_31529 = (state_31570[(22)]);
var inst_31529__$1 = cljs.core.first(inst_31512);
var inst_31530 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31529__$1,inst_31393,done);
var state_31570__$1 = (function (){var statearr_31796 = state_31570;
(statearr_31796[(22)] = inst_31529__$1);

return statearr_31796;
})();
if(cljs.core.truth_(inst_31530)){
var statearr_31799_34916 = state_31570__$1;
(statearr_31799_34916[(1)] = (39));

} else {
var statearr_31800_34917 = state_31570__$1;
(statearr_31800_34917[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (8))){
var inst_31412 = (state_31570[(16)]);
var inst_31411 = (state_31570[(17)]);
var inst_31415 = (inst_31412 < inst_31411);
var inst_31416 = inst_31415;
var state_31570__$1 = state_31570;
if(cljs.core.truth_(inst_31416)){
var statearr_31801_34920 = state_31570__$1;
(statearr_31801_34920[(1)] = (10));

} else {
var statearr_31802_34921 = state_31570__$1;
(statearr_31802_34921[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28507__auto__ = null;
var cljs$core$async$mult_$_state_machine__28507__auto____0 = (function (){
var statearr_31808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31808[(0)] = cljs$core$async$mult_$_state_machine__28507__auto__);

(statearr_31808[(1)] = (1));

return statearr_31808;
});
var cljs$core$async$mult_$_state_machine__28507__auto____1 = (function (state_31570){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_31570);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e31809){var ex__28510__auto__ = e31809;
var statearr_31810_34926 = state_31570;
(statearr_31810_34926[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_31570[(4)]))){
var statearr_31811_34927 = state_31570;
(statearr_31811_34927[(1)] = cljs.core.first((state_31570[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34929 = state_31570;
state_31570 = G__34929;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28507__auto__ = function(state_31570){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28507__auto____1.call(this,state_31570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28507__auto____0;
cljs$core$async$mult_$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28507__auto____1;
return cljs$core$async$mult_$_state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_31816 = f__29485__auto__();
(statearr_31816[(6)] = c__29484__auto___34805);

return statearr_31816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
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
var G__31830 = arguments.length;
switch (G__31830) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_34937 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34937(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34940 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34940(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34943 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34943(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34950 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34950(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34952 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34952(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___34956 = arguments.length;
var i__5727__auto___34958 = (0);
while(true){
if((i__5727__auto___34958 < len__5726__auto___34956)){
args__5732__auto__.push((arguments[i__5727__auto___34958]));

var G__34959 = (i__5727__auto___34958 + (1));
i__5727__auto___34958 = G__34959;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31906){
var map__31907 = p__31906;
var map__31907__$1 = cljs.core.__destructure_map(map__31907);
var opts = map__31907__$1;
var statearr_31908_34966 = state;
(statearr_31908_34966[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31909_34967 = state;
(statearr_31909_34967[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_31910_34968 = state;
(statearr_31910_34968[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31899){
var G__31900 = cljs.core.first(seq31899);
var seq31899__$1 = cljs.core.next(seq31899);
var G__31901 = cljs.core.first(seq31899__$1);
var seq31899__$2 = cljs.core.next(seq31899__$1);
var G__31902 = cljs.core.first(seq31899__$2);
var seq31899__$3 = cljs.core.next(seq31899__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31900,G__31901,G__31902,seq31899__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31925 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31926){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31926 = meta31926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31927,meta31926__$1){
var self__ = this;
var _31927__$1 = this;
return (new cljs.core.async.t_cljs$core$async31925(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31926__$1));
}));

(cljs.core.async.t_cljs$core$async31925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31927){
var self__ = this;
var _31927__$1 = this;
return self__.meta31926;
}));

(cljs.core.async.t_cljs$core$async31925.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31925.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31925.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31925.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async31925.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async31925.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async31925.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async31925.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async31925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31926","meta31926",-1747325301,null)], null);
}));

(cljs.core.async.t_cljs$core$async31925.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31925");

(cljs.core.async.t_cljs$core$async31925.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31925");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31925.
 */
cljs.core.async.__GT_t_cljs$core$async31925 = (function cljs$core$async$__GT_t_cljs$core$async31925(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31926){
return (new cljs.core.async.t_cljs$core$async31925(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31926));
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
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
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
var m = (new cljs.core.async.t_cljs$core$async31925(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__29484__auto___34999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_32022){
var state_val_32023 = (state_32022[(1)]);
if((state_val_32023 === (7))){
var inst_31979 = (state_32022[(2)]);
var state_32022__$1 = state_32022;
if(cljs.core.truth_(inst_31979)){
var statearr_32032_35001 = state_32022__$1;
(statearr_32032_35001[(1)] = (8));

} else {
var statearr_32033_35002 = state_32022__$1;
(statearr_32033_35002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (20))){
var inst_31971 = (state_32022[(7)]);
var state_32022__$1 = state_32022;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32022__$1,(23),out,inst_31971);
} else {
if((state_val_32023 === (1))){
var inst_31952 = calc_state();
var inst_31953 = cljs.core.__destructure_map(inst_31952);
var inst_31954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31953,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31953,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31953,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31957 = inst_31952;
var state_32022__$1 = (function (){var statearr_32035 = state_32022;
(statearr_32035[(8)] = inst_31954);

(statearr_32035[(9)] = inst_31955);

(statearr_32035[(10)] = inst_31956);

(statearr_32035[(11)] = inst_31957);

return statearr_32035;
})();
var statearr_32036_35006 = state_32022__$1;
(statearr_32036_35006[(2)] = null);

(statearr_32036_35006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (24))){
var inst_31960 = (state_32022[(12)]);
var inst_31957 = inst_31960;
var state_32022__$1 = (function (){var statearr_32038 = state_32022;
(statearr_32038[(11)] = inst_31957);

return statearr_32038;
})();
var statearr_32039_35007 = state_32022__$1;
(statearr_32039_35007[(2)] = null);

(statearr_32039_35007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (4))){
var inst_31974 = (state_32022[(13)]);
var inst_31971 = (state_32022[(7)]);
var inst_31970 = (state_32022[(2)]);
var inst_31971__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31970,(0),null);
var inst_31973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31970,(1),null);
var inst_31974__$1 = (inst_31971__$1 == null);
var state_32022__$1 = (function (){var statearr_32041 = state_32022;
(statearr_32041[(13)] = inst_31974__$1);

(statearr_32041[(7)] = inst_31971__$1);

(statearr_32041[(14)] = inst_31973);

return statearr_32041;
})();
if(cljs.core.truth_(inst_31974__$1)){
var statearr_32043_35014 = state_32022__$1;
(statearr_32043_35014[(1)] = (5));

} else {
var statearr_32045_35015 = state_32022__$1;
(statearr_32045_35015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (15))){
var inst_31962 = (state_32022[(15)]);
var inst_31995 = (state_32022[(16)]);
var inst_31995__$1 = cljs.core.empty_QMARK_(inst_31962);
var state_32022__$1 = (function (){var statearr_32046 = state_32022;
(statearr_32046[(16)] = inst_31995__$1);

return statearr_32046;
})();
if(inst_31995__$1){
var statearr_32048_35017 = state_32022__$1;
(statearr_32048_35017[(1)] = (17));

} else {
var statearr_32050_35018 = state_32022__$1;
(statearr_32050_35018[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (21))){
var inst_31960 = (state_32022[(12)]);
var inst_31957 = inst_31960;
var state_32022__$1 = (function (){var statearr_32051 = state_32022;
(statearr_32051[(11)] = inst_31957);

return statearr_32051;
})();
var statearr_32052_35020 = state_32022__$1;
(statearr_32052_35020[(2)] = null);

(statearr_32052_35020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (13))){
var inst_31988 = (state_32022[(2)]);
var inst_31989 = calc_state();
var inst_31957 = inst_31989;
var state_32022__$1 = (function (){var statearr_32055 = state_32022;
(statearr_32055[(17)] = inst_31988);

(statearr_32055[(11)] = inst_31957);

return statearr_32055;
})();
var statearr_32056_35022 = state_32022__$1;
(statearr_32056_35022[(2)] = null);

(statearr_32056_35022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (22))){
var inst_32015 = (state_32022[(2)]);
var state_32022__$1 = state_32022;
var statearr_32061_35024 = state_32022__$1;
(statearr_32061_35024[(2)] = inst_32015);

(statearr_32061_35024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (6))){
var inst_31973 = (state_32022[(14)]);
var inst_31977 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31973,change);
var state_32022__$1 = state_32022;
var statearr_32064_35027 = state_32022__$1;
(statearr_32064_35027[(2)] = inst_31977);

(statearr_32064_35027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (25))){
var state_32022__$1 = state_32022;
var statearr_32065_35030 = state_32022__$1;
(statearr_32065_35030[(2)] = null);

(statearr_32065_35030[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (17))){
var inst_31963 = (state_32022[(18)]);
var inst_31973 = (state_32022[(14)]);
var inst_31997 = (inst_31963.cljs$core$IFn$_invoke$arity$1 ? inst_31963.cljs$core$IFn$_invoke$arity$1(inst_31973) : inst_31963.call(null, inst_31973));
var inst_31998 = cljs.core.not(inst_31997);
var state_32022__$1 = state_32022;
var statearr_32068_35034 = state_32022__$1;
(statearr_32068_35034[(2)] = inst_31998);

(statearr_32068_35034[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (3))){
var inst_32019 = (state_32022[(2)]);
var state_32022__$1 = state_32022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32022__$1,inst_32019);
} else {
if((state_val_32023 === (12))){
var state_32022__$1 = state_32022;
var statearr_32072_35035 = state_32022__$1;
(statearr_32072_35035[(2)] = null);

(statearr_32072_35035[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (2))){
var inst_31960 = (state_32022[(12)]);
var inst_31957 = (state_32022[(11)]);
var inst_31960__$1 = cljs.core.__destructure_map(inst_31957);
var inst_31962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31960__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31960__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31960__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32022__$1 = (function (){var statearr_32075 = state_32022;
(statearr_32075[(18)] = inst_31963);

(statearr_32075[(12)] = inst_31960__$1);

(statearr_32075[(15)] = inst_31962);

return statearr_32075;
})();
return cljs.core.async.ioc_alts_BANG_(state_32022__$1,(4),inst_31964);
} else {
if((state_val_32023 === (23))){
var inst_32006 = (state_32022[(2)]);
var state_32022__$1 = state_32022;
if(cljs.core.truth_(inst_32006)){
var statearr_32079_35039 = state_32022__$1;
(statearr_32079_35039[(1)] = (24));

} else {
var statearr_32080_35040 = state_32022__$1;
(statearr_32080_35040[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (19))){
var inst_32001 = (state_32022[(2)]);
var state_32022__$1 = state_32022;
var statearr_32081_35042 = state_32022__$1;
(statearr_32081_35042[(2)] = inst_32001);

(statearr_32081_35042[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (11))){
var inst_31973 = (state_32022[(14)]);
var inst_31984 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31973);
var state_32022__$1 = state_32022;
var statearr_32084_35044 = state_32022__$1;
(statearr_32084_35044[(2)] = inst_31984);

(statearr_32084_35044[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (9))){
var inst_31962 = (state_32022[(15)]);
var inst_31992 = (state_32022[(19)]);
var inst_31973 = (state_32022[(14)]);
var inst_31992__$1 = (inst_31962.cljs$core$IFn$_invoke$arity$1 ? inst_31962.cljs$core$IFn$_invoke$arity$1(inst_31973) : inst_31962.call(null, inst_31973));
var state_32022__$1 = (function (){var statearr_32086 = state_32022;
(statearr_32086[(19)] = inst_31992__$1);

return statearr_32086;
})();
if(cljs.core.truth_(inst_31992__$1)){
var statearr_32087_35049 = state_32022__$1;
(statearr_32087_35049[(1)] = (14));

} else {
var statearr_32088_35051 = state_32022__$1;
(statearr_32088_35051[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (5))){
var inst_31974 = (state_32022[(13)]);
var state_32022__$1 = state_32022;
var statearr_32091_35052 = state_32022__$1;
(statearr_32091_35052[(2)] = inst_31974);

(statearr_32091_35052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (14))){
var inst_31992 = (state_32022[(19)]);
var state_32022__$1 = state_32022;
var statearr_32096_35053 = state_32022__$1;
(statearr_32096_35053[(2)] = inst_31992);

(statearr_32096_35053[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (26))){
var inst_32011 = (state_32022[(2)]);
var state_32022__$1 = state_32022;
var statearr_32100_35054 = state_32022__$1;
(statearr_32100_35054[(2)] = inst_32011);

(statearr_32100_35054[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (16))){
var inst_32003 = (state_32022[(2)]);
var state_32022__$1 = state_32022;
if(cljs.core.truth_(inst_32003)){
var statearr_32102_35055 = state_32022__$1;
(statearr_32102_35055[(1)] = (20));

} else {
var statearr_32103_35056 = state_32022__$1;
(statearr_32103_35056[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (10))){
var inst_32017 = (state_32022[(2)]);
var state_32022__$1 = state_32022;
var statearr_32104_35057 = state_32022__$1;
(statearr_32104_35057[(2)] = inst_32017);

(statearr_32104_35057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (18))){
var inst_31995 = (state_32022[(16)]);
var state_32022__$1 = state_32022;
var statearr_32110_35058 = state_32022__$1;
(statearr_32110_35058[(2)] = inst_31995);

(statearr_32110_35058[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (8))){
var inst_31971 = (state_32022[(7)]);
var inst_31982 = (inst_31971 == null);
var state_32022__$1 = state_32022;
if(cljs.core.truth_(inst_31982)){
var statearr_32114_35060 = state_32022__$1;
(statearr_32114_35060[(1)] = (11));

} else {
var statearr_32115_35061 = state_32022__$1;
(statearr_32115_35061[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__28507__auto__ = null;
var cljs$core$async$mix_$_state_machine__28507__auto____0 = (function (){
var statearr_32117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32117[(0)] = cljs$core$async$mix_$_state_machine__28507__auto__);

(statearr_32117[(1)] = (1));

return statearr_32117;
});
var cljs$core$async$mix_$_state_machine__28507__auto____1 = (function (state_32022){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_32022);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e32123){var ex__28510__auto__ = e32123;
var statearr_32124_35064 = state_32022;
(statearr_32124_35064[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_32022[(4)]))){
var statearr_32125_35065 = state_32022;
(statearr_32125_35065[(1)] = cljs.core.first((state_32022[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35068 = state_32022;
state_32022 = G__35068;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28507__auto__ = function(state_32022){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28507__auto____1.call(this,state_32022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28507__auto____0;
cljs$core$async$mix_$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28507__auto____1;
return cljs$core$async$mix_$_state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_32129 = f__29485__auto__();
(statearr_32129[(6)] = c__29484__auto___34999);

return statearr_32129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35071 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35071(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35076 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35076(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35082 = (function() {
var G__35083 = null;
var G__35083__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35083__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35083 = function(p,v){
switch(arguments.length){
case 1:
return G__35083__1.call(this,p);
case 2:
return G__35083__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35083.cljs$core$IFn$_invoke$arity$1 = G__35083__1;
G__35083.cljs$core$IFn$_invoke$arity$2 = G__35083__2;
return G__35083;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32185 = arguments.length;
switch (G__32185) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35082(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35082(p,v);
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
cljs.core.async.t_cljs$core$async32216 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32217){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32217 = meta32217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32218,meta32217__$1){
var self__ = this;
var _32218__$1 = this;
return (new cljs.core.async.t_cljs$core$async32216(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32217__$1));
}));

(cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32218){
var self__ = this;
var _32218__$1 = this;
return self__.meta32217;
}));

(cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32217","meta32217",-277366093,null)], null);
}));

(cljs.core.async.t_cljs$core$async32216.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32216");

(cljs.core.async.t_cljs$core$async32216.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32216");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32216.
 */
cljs.core.async.__GT_t_cljs$core$async32216 = (function cljs$core$async$__GT_t_cljs$core$async32216(ch,topic_fn,buf_fn,mults,ensure_mult,meta32217){
return (new cljs.core.async.t_cljs$core$async32216(ch,topic_fn,buf_fn,mults,ensure_mult,meta32217));
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
var G__32208 = arguments.length;
switch (G__32208) {
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
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32202_SHARP_){
if(cljs.core.truth_((p1__32202_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32202_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32202_SHARP_.call(null, topic)))){
return p1__32202_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32202_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async32216(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__29484__auto___35118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_32323){
var state_val_32324 = (state_32323[(1)]);
if((state_val_32324 === (7))){
var inst_32319 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
var statearr_32328_35120 = state_32323__$1;
(statearr_32328_35120[(2)] = inst_32319);

(statearr_32328_35120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (20))){
var state_32323__$1 = state_32323;
var statearr_32330_35121 = state_32323__$1;
(statearr_32330_35121[(2)] = null);

(statearr_32330_35121[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (1))){
var state_32323__$1 = state_32323;
var statearr_32333_35123 = state_32323__$1;
(statearr_32333_35123[(2)] = null);

(statearr_32333_35123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (24))){
var inst_32302 = (state_32323[(7)]);
var inst_32311 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32302);
var state_32323__$1 = state_32323;
var statearr_32335_35125 = state_32323__$1;
(statearr_32335_35125[(2)] = inst_32311);

(statearr_32335_35125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (4))){
var inst_32248 = (state_32323[(8)]);
var inst_32248__$1 = (state_32323[(2)]);
var inst_32249 = (inst_32248__$1 == null);
var state_32323__$1 = (function (){var statearr_32337 = state_32323;
(statearr_32337[(8)] = inst_32248__$1);

return statearr_32337;
})();
if(cljs.core.truth_(inst_32249)){
var statearr_32338_35127 = state_32323__$1;
(statearr_32338_35127[(1)] = (5));

} else {
var statearr_32339_35128 = state_32323__$1;
(statearr_32339_35128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (15))){
var inst_32296 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
var statearr_32343_35130 = state_32323__$1;
(statearr_32343_35130[(2)] = inst_32296);

(statearr_32343_35130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (21))){
var inst_32316 = (state_32323[(2)]);
var state_32323__$1 = (function (){var statearr_32344 = state_32323;
(statearr_32344[(9)] = inst_32316);

return statearr_32344;
})();
var statearr_32345_35131 = state_32323__$1;
(statearr_32345_35131[(2)] = null);

(statearr_32345_35131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (13))){
var inst_32274 = (state_32323[(10)]);
var inst_32279 = cljs.core.chunked_seq_QMARK_(inst_32274);
var state_32323__$1 = state_32323;
if(inst_32279){
var statearr_32349_35134 = state_32323__$1;
(statearr_32349_35134[(1)] = (16));

} else {
var statearr_32351_35136 = state_32323__$1;
(statearr_32351_35136[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (22))){
var inst_32308 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
if(cljs.core.truth_(inst_32308)){
var statearr_32352_35140 = state_32323__$1;
(statearr_32352_35140[(1)] = (23));

} else {
var statearr_32353_35141 = state_32323__$1;
(statearr_32353_35141[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (6))){
var inst_32248 = (state_32323[(8)]);
var inst_32302 = (state_32323[(7)]);
var inst_32304 = (state_32323[(11)]);
var inst_32302__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32248) : topic_fn.call(null, inst_32248));
var inst_32303 = cljs.core.deref(mults);
var inst_32304__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32303,inst_32302__$1);
var state_32323__$1 = (function (){var statearr_32359 = state_32323;
(statearr_32359[(7)] = inst_32302__$1);

(statearr_32359[(11)] = inst_32304__$1);

return statearr_32359;
})();
if(cljs.core.truth_(inst_32304__$1)){
var statearr_32361_35143 = state_32323__$1;
(statearr_32361_35143[(1)] = (19));

} else {
var statearr_32362_35146 = state_32323__$1;
(statearr_32362_35146[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (25))){
var inst_32313 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
var statearr_32364_35149 = state_32323__$1;
(statearr_32364_35149[(2)] = inst_32313);

(statearr_32364_35149[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (17))){
var inst_32274 = (state_32323[(10)]);
var inst_32287 = cljs.core.first(inst_32274);
var inst_32288 = cljs.core.async.muxch_STAR_(inst_32287);
var inst_32289 = cljs.core.async.close_BANG_(inst_32288);
var inst_32290 = cljs.core.next(inst_32274);
var inst_32259 = inst_32290;
var inst_32260 = null;
var inst_32261 = (0);
var inst_32262 = (0);
var state_32323__$1 = (function (){var statearr_32366 = state_32323;
(statearr_32366[(12)] = inst_32262);

(statearr_32366[(13)] = inst_32260);

(statearr_32366[(14)] = inst_32289);

(statearr_32366[(15)] = inst_32259);

(statearr_32366[(16)] = inst_32261);

return statearr_32366;
})();
var statearr_32368_35152 = state_32323__$1;
(statearr_32368_35152[(2)] = null);

(statearr_32368_35152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (3))){
var inst_32321 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32323__$1,inst_32321);
} else {
if((state_val_32324 === (12))){
var inst_32298 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
var statearr_32371_35154 = state_32323__$1;
(statearr_32371_35154[(2)] = inst_32298);

(statearr_32371_35154[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (2))){
var state_32323__$1 = state_32323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32323__$1,(4),ch);
} else {
if((state_val_32324 === (23))){
var state_32323__$1 = state_32323;
var statearr_32372_35158 = state_32323__$1;
(statearr_32372_35158[(2)] = null);

(statearr_32372_35158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (19))){
var inst_32248 = (state_32323[(8)]);
var inst_32304 = (state_32323[(11)]);
var inst_32306 = cljs.core.async.muxch_STAR_(inst_32304);
var state_32323__$1 = state_32323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32323__$1,(22),inst_32306,inst_32248);
} else {
if((state_val_32324 === (11))){
var inst_32274 = (state_32323[(10)]);
var inst_32259 = (state_32323[(15)]);
var inst_32274__$1 = cljs.core.seq(inst_32259);
var state_32323__$1 = (function (){var statearr_32375 = state_32323;
(statearr_32375[(10)] = inst_32274__$1);

return statearr_32375;
})();
if(inst_32274__$1){
var statearr_32379_35164 = state_32323__$1;
(statearr_32379_35164[(1)] = (13));

} else {
var statearr_32381_35166 = state_32323__$1;
(statearr_32381_35166[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (9))){
var inst_32300 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
var statearr_32394_35168 = state_32323__$1;
(statearr_32394_35168[(2)] = inst_32300);

(statearr_32394_35168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (5))){
var inst_32256 = cljs.core.deref(mults);
var inst_32257 = cljs.core.vals(inst_32256);
var inst_32258 = cljs.core.seq(inst_32257);
var inst_32259 = inst_32258;
var inst_32260 = null;
var inst_32261 = (0);
var inst_32262 = (0);
var state_32323__$1 = (function (){var statearr_32396 = state_32323;
(statearr_32396[(12)] = inst_32262);

(statearr_32396[(13)] = inst_32260);

(statearr_32396[(15)] = inst_32259);

(statearr_32396[(16)] = inst_32261);

return statearr_32396;
})();
var statearr_32397_35172 = state_32323__$1;
(statearr_32397_35172[(2)] = null);

(statearr_32397_35172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (14))){
var state_32323__$1 = state_32323;
var statearr_32406_35175 = state_32323__$1;
(statearr_32406_35175[(2)] = null);

(statearr_32406_35175[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (16))){
var inst_32274 = (state_32323[(10)]);
var inst_32281 = cljs.core.chunk_first(inst_32274);
var inst_32282 = cljs.core.chunk_rest(inst_32274);
var inst_32284 = cljs.core.count(inst_32281);
var inst_32259 = inst_32282;
var inst_32260 = inst_32281;
var inst_32261 = inst_32284;
var inst_32262 = (0);
var state_32323__$1 = (function (){var statearr_32414 = state_32323;
(statearr_32414[(12)] = inst_32262);

(statearr_32414[(13)] = inst_32260);

(statearr_32414[(15)] = inst_32259);

(statearr_32414[(16)] = inst_32261);

return statearr_32414;
})();
var statearr_32416_35177 = state_32323__$1;
(statearr_32416_35177[(2)] = null);

(statearr_32416_35177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (10))){
var inst_32262 = (state_32323[(12)]);
var inst_32260 = (state_32323[(13)]);
var inst_32259 = (state_32323[(15)]);
var inst_32261 = (state_32323[(16)]);
var inst_32267 = cljs.core._nth(inst_32260,inst_32262);
var inst_32268 = cljs.core.async.muxch_STAR_(inst_32267);
var inst_32269 = cljs.core.async.close_BANG_(inst_32268);
var inst_32270 = (inst_32262 + (1));
var tmp32402 = inst_32260;
var tmp32403 = inst_32259;
var tmp32404 = inst_32261;
var inst_32259__$1 = tmp32403;
var inst_32260__$1 = tmp32402;
var inst_32261__$1 = tmp32404;
var inst_32262__$1 = inst_32270;
var state_32323__$1 = (function (){var statearr_32424 = state_32323;
(statearr_32424[(12)] = inst_32262__$1);

(statearr_32424[(17)] = inst_32269);

(statearr_32424[(13)] = inst_32260__$1);

(statearr_32424[(15)] = inst_32259__$1);

(statearr_32424[(16)] = inst_32261__$1);

return statearr_32424;
})();
var statearr_32428_35185 = state_32323__$1;
(statearr_32428_35185[(2)] = null);

(statearr_32428_35185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (18))){
var inst_32293 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
var statearr_32432_35188 = state_32323__$1;
(statearr_32432_35188[(2)] = inst_32293);

(statearr_32432_35188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (8))){
var inst_32262 = (state_32323[(12)]);
var inst_32261 = (state_32323[(16)]);
var inst_32264 = (inst_32262 < inst_32261);
var inst_32265 = inst_32264;
var state_32323__$1 = state_32323;
if(cljs.core.truth_(inst_32265)){
var statearr_32436_35189 = state_32323__$1;
(statearr_32436_35189[(1)] = (10));

} else {
var statearr_32437_35191 = state_32323__$1;
(statearr_32437_35191[(1)] = (11));

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
var cljs$core$async$state_machine__28507__auto__ = null;
var cljs$core$async$state_machine__28507__auto____0 = (function (){
var statearr_32443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32443[(0)] = cljs$core$async$state_machine__28507__auto__);

(statearr_32443[(1)] = (1));

return statearr_32443;
});
var cljs$core$async$state_machine__28507__auto____1 = (function (state_32323){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_32323);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e32445){var ex__28510__auto__ = e32445;
var statearr_32446_35195 = state_32323;
(statearr_32446_35195[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_32323[(4)]))){
var statearr_32450_35197 = state_32323;
(statearr_32450_35197[(1)] = cljs.core.first((state_32323[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35198 = state_32323;
state_32323 = G__35198;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$state_machine__28507__auto__ = function(state_32323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28507__auto____1.call(this,state_32323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28507__auto____0;
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28507__auto____1;
return cljs$core$async$state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_32460 = f__29485__auto__();
(statearr_32460[(6)] = c__29484__auto___35118);

return statearr_32460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
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
var G__32472 = arguments.length;
switch (G__32472) {
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
var G__32485 = arguments.length;
switch (G__32485) {
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
var G__32501 = arguments.length;
switch (G__32501) {
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
var c__29484__auto___35220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_32618){
var state_val_32619 = (state_32618[(1)]);
if((state_val_32619 === (7))){
var state_32618__$1 = state_32618;
var statearr_32635_35222 = state_32618__$1;
(statearr_32635_35222[(2)] = null);

(statearr_32635_35222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (1))){
var state_32618__$1 = state_32618;
var statearr_32637_35224 = state_32618__$1;
(statearr_32637_35224[(2)] = null);

(statearr_32637_35224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (4))){
var inst_32528 = (state_32618[(7)]);
var inst_32529 = (state_32618[(8)]);
var inst_32531 = (inst_32529 < inst_32528);
var state_32618__$1 = state_32618;
if(cljs.core.truth_(inst_32531)){
var statearr_32639_35228 = state_32618__$1;
(statearr_32639_35228[(1)] = (6));

} else {
var statearr_32640_35230 = state_32618__$1;
(statearr_32640_35230[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (15))){
var inst_32593 = (state_32618[(9)]);
var inst_32599 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32593);
var state_32618__$1 = state_32618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32618__$1,(17),out,inst_32599);
} else {
if((state_val_32619 === (13))){
var inst_32593 = (state_32618[(9)]);
var inst_32593__$1 = (state_32618[(2)]);
var inst_32594 = cljs.core.some(cljs.core.nil_QMARK_,inst_32593__$1);
var state_32618__$1 = (function (){var statearr_32643 = state_32618;
(statearr_32643[(9)] = inst_32593__$1);

return statearr_32643;
})();
if(cljs.core.truth_(inst_32594)){
var statearr_32645_35234 = state_32618__$1;
(statearr_32645_35234[(1)] = (14));

} else {
var statearr_32646_35235 = state_32618__$1;
(statearr_32646_35235[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (6))){
var state_32618__$1 = state_32618;
var statearr_32648_35238 = state_32618__$1;
(statearr_32648_35238[(2)] = null);

(statearr_32648_35238[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (17))){
var inst_32601 = (state_32618[(2)]);
var state_32618__$1 = (function (){var statearr_32653 = state_32618;
(statearr_32653[(10)] = inst_32601);

return statearr_32653;
})();
var statearr_32654_35243 = state_32618__$1;
(statearr_32654_35243[(2)] = null);

(statearr_32654_35243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (3))){
var inst_32606 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32618__$1,inst_32606);
} else {
if((state_val_32619 === (12))){
var _ = (function (){var statearr_32656 = state_32618;
(statearr_32656[(4)] = cljs.core.rest((state_32618[(4)])));

return statearr_32656;
})();
var state_32618__$1 = state_32618;
var ex32651 = (state_32618__$1[(2)]);
var statearr_32657_35247 = state_32618__$1;
(statearr_32657_35247[(5)] = ex32651);


if((ex32651 instanceof Object)){
var statearr_32659_35248 = state_32618__$1;
(statearr_32659_35248[(1)] = (11));

(statearr_32659_35248[(5)] = null);

} else {
throw ex32651;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (2))){
var inst_32526 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32528 = cnt;
var inst_32529 = (0);
var state_32618__$1 = (function (){var statearr_32661 = state_32618;
(statearr_32661[(11)] = inst_32526);

(statearr_32661[(7)] = inst_32528);

(statearr_32661[(8)] = inst_32529);

return statearr_32661;
})();
var statearr_32663_35251 = state_32618__$1;
(statearr_32663_35251[(2)] = null);

(statearr_32663_35251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (11))){
var inst_32550 = (state_32618[(2)]);
var inst_32557 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32618__$1 = (function (){var statearr_32664 = state_32618;
(statearr_32664[(12)] = inst_32550);

return statearr_32664;
})();
var statearr_32665_35253 = state_32618__$1;
(statearr_32665_35253[(2)] = inst_32557);

(statearr_32665_35253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (9))){
var inst_32529 = (state_32618[(8)]);
var _ = (function (){var statearr_32667 = state_32618;
(statearr_32667[(4)] = cljs.core.cons((12),(state_32618[(4)])));

return statearr_32667;
})();
var inst_32573 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32529) : chs__$1.call(null, inst_32529));
var inst_32577 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32529) : done.call(null, inst_32529));
var inst_32578 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32573,inst_32577);
var ___$1 = (function (){var statearr_32671 = state_32618;
(statearr_32671[(4)] = cljs.core.rest((state_32618[(4)])));

return statearr_32671;
})();
var state_32618__$1 = state_32618;
var statearr_32673_35259 = state_32618__$1;
(statearr_32673_35259[(2)] = inst_32578);

(statearr_32673_35259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (5))){
var inst_32591 = (state_32618[(2)]);
var state_32618__$1 = (function (){var statearr_32674 = state_32618;
(statearr_32674[(13)] = inst_32591);

return statearr_32674;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32618__$1,(13),dchan);
} else {
if((state_val_32619 === (14))){
var inst_32597 = cljs.core.async.close_BANG_(out);
var state_32618__$1 = state_32618;
var statearr_32676_35261 = state_32618__$1;
(statearr_32676_35261[(2)] = inst_32597);

(statearr_32676_35261[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (16))){
var inst_32604 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32679_35263 = state_32618__$1;
(statearr_32679_35263[(2)] = inst_32604);

(statearr_32679_35263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (10))){
var inst_32529 = (state_32618[(8)]);
var inst_32582 = (state_32618[(2)]);
var inst_32585 = (inst_32529 + (1));
var inst_32529__$1 = inst_32585;
var state_32618__$1 = (function (){var statearr_32682 = state_32618;
(statearr_32682[(14)] = inst_32582);

(statearr_32682[(8)] = inst_32529__$1);

return statearr_32682;
})();
var statearr_32684_35267 = state_32618__$1;
(statearr_32684_35267[(2)] = null);

(statearr_32684_35267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (8))){
var inst_32589 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32685_35272 = state_32618__$1;
(statearr_32685_35272[(2)] = inst_32589);

(statearr_32685_35272[(1)] = (5));


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
var cljs$core$async$state_machine__28507__auto__ = null;
var cljs$core$async$state_machine__28507__auto____0 = (function (){
var statearr_32687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32687[(0)] = cljs$core$async$state_machine__28507__auto__);

(statearr_32687[(1)] = (1));

return statearr_32687;
});
var cljs$core$async$state_machine__28507__auto____1 = (function (state_32618){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_32618);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e32688){var ex__28510__auto__ = e32688;
var statearr_32689_35281 = state_32618;
(statearr_32689_35281[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_32618[(4)]))){
var statearr_32690_35283 = state_32618;
(statearr_32690_35283[(1)] = cljs.core.first((state_32618[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35286 = state_32618;
state_32618 = G__35286;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$state_machine__28507__auto__ = function(state_32618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28507__auto____1.call(this,state_32618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28507__auto____0;
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28507__auto____1;
return cljs$core$async$state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_32692 = f__29485__auto__();
(statearr_32692[(6)] = c__29484__auto___35220);

return statearr_32692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
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
var G__32697 = arguments.length;
switch (G__32697) {
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
var c__29484__auto___35292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_32741){
var state_val_32742 = (state_32741[(1)]);
if((state_val_32742 === (7))){
var inst_32719 = (state_32741[(7)]);
var inst_32718 = (state_32741[(8)]);
var inst_32718__$1 = (state_32741[(2)]);
var inst_32719__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32718__$1,(0),null);
var inst_32720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32718__$1,(1),null);
var inst_32721 = (inst_32719__$1 == null);
var state_32741__$1 = (function (){var statearr_32754 = state_32741;
(statearr_32754[(7)] = inst_32719__$1);

(statearr_32754[(9)] = inst_32720);

(statearr_32754[(8)] = inst_32718__$1);

return statearr_32754;
})();
if(cljs.core.truth_(inst_32721)){
var statearr_32755_35300 = state_32741__$1;
(statearr_32755_35300[(1)] = (8));

} else {
var statearr_32761_35302 = state_32741__$1;
(statearr_32761_35302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (1))){
var inst_32704 = cljs.core.vec(chs);
var inst_32706 = inst_32704;
var state_32741__$1 = (function (){var statearr_32762 = state_32741;
(statearr_32762[(10)] = inst_32706);

return statearr_32762;
})();
var statearr_32764_35304 = state_32741__$1;
(statearr_32764_35304[(2)] = null);

(statearr_32764_35304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (4))){
var inst_32706 = (state_32741[(10)]);
var state_32741__$1 = state_32741;
return cljs.core.async.ioc_alts_BANG_(state_32741__$1,(7),inst_32706);
} else {
if((state_val_32742 === (6))){
var inst_32736 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
var statearr_32769_35316 = state_32741__$1;
(statearr_32769_35316[(2)] = inst_32736);

(statearr_32769_35316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (3))){
var inst_32738 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32741__$1,inst_32738);
} else {
if((state_val_32742 === (2))){
var inst_32706 = (state_32741[(10)]);
var inst_32709 = cljs.core.count(inst_32706);
var inst_32711 = (inst_32709 > (0));
var state_32741__$1 = state_32741;
if(cljs.core.truth_(inst_32711)){
var statearr_32773_35324 = state_32741__$1;
(statearr_32773_35324[(1)] = (4));

} else {
var statearr_32774_35327 = state_32741__$1;
(statearr_32774_35327[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (11))){
var inst_32706 = (state_32741[(10)]);
var inst_32729 = (state_32741[(2)]);
var tmp32771 = inst_32706;
var inst_32706__$1 = tmp32771;
var state_32741__$1 = (function (){var statearr_32775 = state_32741;
(statearr_32775[(11)] = inst_32729);

(statearr_32775[(10)] = inst_32706__$1);

return statearr_32775;
})();
var statearr_32777_35333 = state_32741__$1;
(statearr_32777_35333[(2)] = null);

(statearr_32777_35333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (9))){
var inst_32719 = (state_32741[(7)]);
var state_32741__$1 = state_32741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32741__$1,(11),out,inst_32719);
} else {
if((state_val_32742 === (5))){
var inst_32734 = cljs.core.async.close_BANG_(out);
var state_32741__$1 = state_32741;
var statearr_32785_35335 = state_32741__$1;
(statearr_32785_35335[(2)] = inst_32734);

(statearr_32785_35335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (10))){
var inst_32732 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
var statearr_32789_35336 = state_32741__$1;
(statearr_32789_35336[(2)] = inst_32732);

(statearr_32789_35336[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (8))){
var inst_32719 = (state_32741[(7)]);
var inst_32720 = (state_32741[(9)]);
var inst_32718 = (state_32741[(8)]);
var inst_32706 = (state_32741[(10)]);
var inst_32724 = (function (){var cs = inst_32706;
var vec__32714 = inst_32718;
var v = inst_32719;
var c = inst_32720;
return (function (p1__32694_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32694_SHARP_);
});
})();
var inst_32725 = cljs.core.filterv(inst_32724,inst_32706);
var inst_32706__$1 = inst_32725;
var state_32741__$1 = (function (){var statearr_32791 = state_32741;
(statearr_32791[(10)] = inst_32706__$1);

return statearr_32791;
})();
var statearr_32792_35343 = state_32741__$1;
(statearr_32792_35343[(2)] = null);

(statearr_32792_35343[(1)] = (2));


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
var cljs$core$async$state_machine__28507__auto__ = null;
var cljs$core$async$state_machine__28507__auto____0 = (function (){
var statearr_32798 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32798[(0)] = cljs$core$async$state_machine__28507__auto__);

(statearr_32798[(1)] = (1));

return statearr_32798;
});
var cljs$core$async$state_machine__28507__auto____1 = (function (state_32741){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_32741);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e32799){var ex__28510__auto__ = e32799;
var statearr_32800_35346 = state_32741;
(statearr_32800_35346[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_32741[(4)]))){
var statearr_32802_35349 = state_32741;
(statearr_32802_35349[(1)] = cljs.core.first((state_32741[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35350 = state_32741;
state_32741 = G__35350;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$state_machine__28507__auto__ = function(state_32741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28507__auto____1.call(this,state_32741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28507__auto____0;
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28507__auto____1;
return cljs$core$async$state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_32803 = f__29485__auto__();
(statearr_32803[(6)] = c__29484__auto___35292);

return statearr_32803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
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
var G__32825 = arguments.length;
switch (G__32825) {
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
var c__29484__auto___35373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_32858){
var state_val_32860 = (state_32858[(1)]);
if((state_val_32860 === (7))){
var inst_32836 = (state_32858[(7)]);
var inst_32836__$1 = (state_32858[(2)]);
var inst_32837 = (inst_32836__$1 == null);
var inst_32838 = cljs.core.not(inst_32837);
var state_32858__$1 = (function (){var statearr_32864 = state_32858;
(statearr_32864[(7)] = inst_32836__$1);

return statearr_32864;
})();
if(inst_32838){
var statearr_32866_35375 = state_32858__$1;
(statearr_32866_35375[(1)] = (8));

} else {
var statearr_32867_35377 = state_32858__$1;
(statearr_32867_35377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (1))){
var inst_32829 = (0);
var state_32858__$1 = (function (){var statearr_32868 = state_32858;
(statearr_32868[(8)] = inst_32829);

return statearr_32868;
})();
var statearr_32870_35380 = state_32858__$1;
(statearr_32870_35380[(2)] = null);

(statearr_32870_35380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (4))){
var state_32858__$1 = state_32858;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32858__$1,(7),ch);
} else {
if((state_val_32860 === (6))){
var inst_32852 = (state_32858[(2)]);
var state_32858__$1 = state_32858;
var statearr_32874_35382 = state_32858__$1;
(statearr_32874_35382[(2)] = inst_32852);

(statearr_32874_35382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (3))){
var inst_32854 = (state_32858[(2)]);
var inst_32855 = cljs.core.async.close_BANG_(out);
var state_32858__$1 = (function (){var statearr_32876 = state_32858;
(statearr_32876[(9)] = inst_32854);

return statearr_32876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32858__$1,inst_32855);
} else {
if((state_val_32860 === (2))){
var inst_32829 = (state_32858[(8)]);
var inst_32831 = (inst_32829 < n);
var state_32858__$1 = state_32858;
if(cljs.core.truth_(inst_32831)){
var statearr_32880_35386 = state_32858__$1;
(statearr_32880_35386[(1)] = (4));

} else {
var statearr_32881_35388 = state_32858__$1;
(statearr_32881_35388[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (11))){
var inst_32829 = (state_32858[(8)]);
var inst_32844 = (state_32858[(2)]);
var inst_32845 = (inst_32829 + (1));
var inst_32829__$1 = inst_32845;
var state_32858__$1 = (function (){var statearr_32885 = state_32858;
(statearr_32885[(10)] = inst_32844);

(statearr_32885[(8)] = inst_32829__$1);

return statearr_32885;
})();
var statearr_32886_35390 = state_32858__$1;
(statearr_32886_35390[(2)] = null);

(statearr_32886_35390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (9))){
var state_32858__$1 = state_32858;
var statearr_32887_35393 = state_32858__$1;
(statearr_32887_35393[(2)] = null);

(statearr_32887_35393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (5))){
var state_32858__$1 = state_32858;
var statearr_32889_35396 = state_32858__$1;
(statearr_32889_35396[(2)] = null);

(statearr_32889_35396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (10))){
var inst_32849 = (state_32858[(2)]);
var state_32858__$1 = state_32858;
var statearr_32892_35397 = state_32858__$1;
(statearr_32892_35397[(2)] = inst_32849);

(statearr_32892_35397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (8))){
var inst_32836 = (state_32858[(7)]);
var state_32858__$1 = state_32858;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32858__$1,(11),out,inst_32836);
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
var cljs$core$async$state_machine__28507__auto__ = null;
var cljs$core$async$state_machine__28507__auto____0 = (function (){
var statearr_32896 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32896[(0)] = cljs$core$async$state_machine__28507__auto__);

(statearr_32896[(1)] = (1));

return statearr_32896;
});
var cljs$core$async$state_machine__28507__auto____1 = (function (state_32858){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_32858);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e32897){var ex__28510__auto__ = e32897;
var statearr_32898_35415 = state_32858;
(statearr_32898_35415[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_32858[(4)]))){
var statearr_32902_35417 = state_32858;
(statearr_32902_35417[(1)] = cljs.core.first((state_32858[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35422 = state_32858;
state_32858 = G__35422;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$state_machine__28507__auto__ = function(state_32858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28507__auto____1.call(this,state_32858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28507__auto____0;
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28507__auto____1;
return cljs$core$async$state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_32909 = f__29485__auto__();
(statearr_32909[(6)] = c__29484__auto___35373);

return statearr_32909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
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
cljs.core.async.t_cljs$core$async32930 = (function (f,ch,meta32917,_,fn1,meta32931){
this.f = f;
this.ch = ch;
this.meta32917 = meta32917;
this._ = _;
this.fn1 = fn1;
this.meta32931 = meta32931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32932,meta32931__$1){
var self__ = this;
var _32932__$1 = this;
return (new cljs.core.async.t_cljs$core$async32930(self__.f,self__.ch,self__.meta32917,self__._,self__.fn1,meta32931__$1));
}));

(cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32932){
var self__ = this;
var _32932__$1 = this;
return self__.meta32931;
}));

(cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32911_SHARP_){
var G__32946 = (((p1__32911_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32911_SHARP_) : self__.f.call(null, p1__32911_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32946) : f1.call(null, G__32946));
});
}));

(cljs.core.async.t_cljs$core$async32930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32917","meta32917",-226826401,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32916","cljs.core.async/t_cljs$core$async32916",-2087051112,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32931","meta32931",-1767650568,null)], null);
}));

(cljs.core.async.t_cljs$core$async32930.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32930");

(cljs.core.async.t_cljs$core$async32930.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32930");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32930.
 */
cljs.core.async.__GT_t_cljs$core$async32930 = (function cljs$core$async$__GT_t_cljs$core$async32930(f,ch,meta32917,_,fn1,meta32931){
return (new cljs.core.async.t_cljs$core$async32930(f,ch,meta32917,_,fn1,meta32931));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32916 = (function (f,ch,meta32917){
this.f = f;
this.ch = ch;
this.meta32917 = meta32917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32918,meta32917__$1){
var self__ = this;
var _32918__$1 = this;
return (new cljs.core.async.t_cljs$core$async32916(self__.f,self__.ch,meta32917__$1));
}));

(cljs.core.async.t_cljs$core$async32916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32918){
var self__ = this;
var _32918__$1 = this;
return self__.meta32917;
}));

(cljs.core.async.t_cljs$core$async32916.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32916.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32916.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32916.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32916.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async32930(self__.f,self__.ch,self__.meta32917,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32956 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32956) : self__.f.call(null, G__32956));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32916.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32916.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32917","meta32917",-226826401,null)], null);
}));

(cljs.core.async.t_cljs$core$async32916.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32916.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32916");

(cljs.core.async.t_cljs$core$async32916.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32916");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32916.
 */
cljs.core.async.__GT_t_cljs$core$async32916 = (function cljs$core$async$__GT_t_cljs$core$async32916(f,ch,meta32917){
return (new cljs.core.async.t_cljs$core$async32916(f,ch,meta32917));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32916(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32976 = (function (f,ch,meta32977){
this.f = f;
this.ch = ch;
this.meta32977 = meta32977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32978,meta32977__$1){
var self__ = this;
var _32978__$1 = this;
return (new cljs.core.async.t_cljs$core$async32976(self__.f,self__.ch,meta32977__$1));
}));

(cljs.core.async.t_cljs$core$async32976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32978){
var self__ = this;
var _32978__$1 = this;
return self__.meta32977;
}));

(cljs.core.async.t_cljs$core$async32976.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32976.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32976.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32976.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32976.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32976.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32977","meta32977",1954082639,null)], null);
}));

(cljs.core.async.t_cljs$core$async32976.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32976");

(cljs.core.async.t_cljs$core$async32976.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32976");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32976.
 */
cljs.core.async.__GT_t_cljs$core$async32976 = (function cljs$core$async$__GT_t_cljs$core$async32976(f,ch,meta32977){
return (new cljs.core.async.t_cljs$core$async32976(f,ch,meta32977));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32976(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33010 = (function (p,ch,meta33011){
this.p = p;
this.ch = ch;
this.meta33011 = meta33011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33012,meta33011__$1){
var self__ = this;
var _33012__$1 = this;
return (new cljs.core.async.t_cljs$core$async33010(self__.p,self__.ch,meta33011__$1));
}));

(cljs.core.async.t_cljs$core$async33010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33012){
var self__ = this;
var _33012__$1 = this;
return self__.meta33011;
}));

(cljs.core.async.t_cljs$core$async33010.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33010.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33010.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33010.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33010.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33010.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33010.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33011","meta33011",780797377,null)], null);
}));

(cljs.core.async.t_cljs$core$async33010.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33010");

(cljs.core.async.t_cljs$core$async33010.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33010");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33010.
 */
cljs.core.async.__GT_t_cljs$core$async33010 = (function cljs$core$async$__GT_t_cljs$core$async33010(p,ch,meta33011){
return (new cljs.core.async.t_cljs$core$async33010(p,ch,meta33011));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async33010(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33035 = arguments.length;
switch (G__33035) {
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
var c__29484__auto___35447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_33073){
var state_val_33074 = (state_33073[(1)]);
if((state_val_33074 === (7))){
var inst_33069 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
var statearr_33081_35448 = state_33073__$1;
(statearr_33081_35448[(2)] = inst_33069);

(statearr_33081_35448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (1))){
var state_33073__$1 = state_33073;
var statearr_33086_35449 = state_33073__$1;
(statearr_33086_35449[(2)] = null);

(statearr_33086_35449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (4))){
var inst_33053 = (state_33073[(7)]);
var inst_33053__$1 = (state_33073[(2)]);
var inst_33054 = (inst_33053__$1 == null);
var state_33073__$1 = (function (){var statearr_33089 = state_33073;
(statearr_33089[(7)] = inst_33053__$1);

return statearr_33089;
})();
if(cljs.core.truth_(inst_33054)){
var statearr_33090_35450 = state_33073__$1;
(statearr_33090_35450[(1)] = (5));

} else {
var statearr_33093_35451 = state_33073__$1;
(statearr_33093_35451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (6))){
var inst_33053 = (state_33073[(7)]);
var inst_33060 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33053) : p.call(null, inst_33053));
var state_33073__$1 = state_33073;
if(cljs.core.truth_(inst_33060)){
var statearr_33097_35454 = state_33073__$1;
(statearr_33097_35454[(1)] = (8));

} else {
var statearr_33098_35455 = state_33073__$1;
(statearr_33098_35455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (3))){
var inst_33071 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33073__$1,inst_33071);
} else {
if((state_val_33074 === (2))){
var state_33073__$1 = state_33073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33073__$1,(4),ch);
} else {
if((state_val_33074 === (11))){
var inst_33063 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
var statearr_33107_35457 = state_33073__$1;
(statearr_33107_35457[(2)] = inst_33063);

(statearr_33107_35457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (9))){
var state_33073__$1 = state_33073;
var statearr_33114_35458 = state_33073__$1;
(statearr_33114_35458[(2)] = null);

(statearr_33114_35458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (5))){
var inst_33058 = cljs.core.async.close_BANG_(out);
var state_33073__$1 = state_33073;
var statearr_33117_35459 = state_33073__$1;
(statearr_33117_35459[(2)] = inst_33058);

(statearr_33117_35459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (10))){
var inst_33066 = (state_33073[(2)]);
var state_33073__$1 = (function (){var statearr_33119 = state_33073;
(statearr_33119[(8)] = inst_33066);

return statearr_33119;
})();
var statearr_33120_35460 = state_33073__$1;
(statearr_33120_35460[(2)] = null);

(statearr_33120_35460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (8))){
var inst_33053 = (state_33073[(7)]);
var state_33073__$1 = state_33073;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33073__$1,(11),out,inst_33053);
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
var cljs$core$async$state_machine__28507__auto__ = null;
var cljs$core$async$state_machine__28507__auto____0 = (function (){
var statearr_33128 = [null,null,null,null,null,null,null,null,null];
(statearr_33128[(0)] = cljs$core$async$state_machine__28507__auto__);

(statearr_33128[(1)] = (1));

return statearr_33128;
});
var cljs$core$async$state_machine__28507__auto____1 = (function (state_33073){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_33073);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e33131){var ex__28510__auto__ = e33131;
var statearr_33134_35467 = state_33073;
(statearr_33134_35467[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_33073[(4)]))){
var statearr_33135_35468 = state_33073;
(statearr_33135_35468[(1)] = cljs.core.first((state_33073[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35471 = state_33073;
state_33073 = G__35471;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$state_machine__28507__auto__ = function(state_33073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28507__auto____1.call(this,state_33073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28507__auto____0;
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28507__auto____1;
return cljs$core$async$state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_33148 = f__29485__auto__();
(statearr_33148[(6)] = c__29484__auto___35447);

return statearr_33148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33154 = arguments.length;
switch (G__33154) {
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
var c__29484__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_33238){
var state_val_33239 = (state_33238[(1)]);
if((state_val_33239 === (7))){
var inst_33234 = (state_33238[(2)]);
var state_33238__$1 = state_33238;
var statearr_33240_35474 = state_33238__$1;
(statearr_33240_35474[(2)] = inst_33234);

(statearr_33240_35474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33239 === (20))){
var inst_33204 = (state_33238[(7)]);
var inst_33215 = (state_33238[(2)]);
var inst_33216 = cljs.core.next(inst_33204);
var inst_33183 = inst_33216;
var inst_33184 = null;
var inst_33185 = (0);
var inst_33186 = (0);
var state_33238__$1 = (function (){var statearr_33242 = state_33238;
(statearr_33242[(8)] = inst_33183);

(statearr_33242[(9)] = inst_33215);

(statearr_33242[(10)] = inst_33186);

(statearr_33242[(11)] = inst_33184);

(statearr_33242[(12)] = inst_33185);

return statearr_33242;
})();
var statearr_33243_35478 = state_33238__$1;
(statearr_33243_35478[(2)] = null);

(statearr_33243_35478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33239 === (1))){
var state_33238__$1 = state_33238;
var statearr_33244_35479 = state_33238__$1;
(statearr_33244_35479[(2)] = null);

(statearr_33244_35479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33239 === (4))){
var inst_33171 = (state_33238[(13)]);
var inst_33171__$1 = (state_33238[(2)]);
var inst_33172 = (inst_33171__$1 == null);
var state_33238__$1 = (function (){var statearr_33245 = state_33238;
(statearr_33245[(13)] = inst_33171__$1);

return statearr_33245;
})();
if(cljs.core.truth_(inst_33172)){
var statearr_33246_35482 = state_33238__$1;
(statearr_33246_35482[(1)] = (5));

} else {
var statearr_33247_35485 = state_33238__$1;
(statearr_33247_35485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33239 === (15))){
var state_33238__$1 = state_33238;
var statearr_33257_35486 = state_33238__$1;
(statearr_33257_35486[(2)] = null);

(statearr_33257_35486[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33239 === (21))){
var state_33238__$1 = state_33238;
var statearr_33259_35490 = state_33238__$1;
(statearr_33259_35490[(2)] = null);

(statearr_33259_35490[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33239 === (13))){
var inst_33183 = (state_33238[(8)]);
var inst_33186 = (state_33238[(10)]);
var inst_33184 = (state_33238[(11)]);
var inst_33185 = (state_33238[(12)]);
var inst_33199 = (state_33238[(2)]);
var inst_33201 = (inst_33186 + (1));
var tmp33252 = inst_33183;
var tmp33253 = inst_33184;
var tmp33254 = inst_33185;
var inst_33183__$1 = tmp33252;
var inst_33184__$1 = tmp33253;
var inst_33185__$1 = tmp33254;
var inst_33186__$1 = inst_33201;
var state_33238__$1 = (function (){var statearr_33262 = state_33238;
(statearr_33262[(8)] = inst_33183__$1);

(statearr_33262[(10)] = inst_33186__$1);

(statearr_33262[(11)] = inst_33184__$1);

(statearr_33262[(14)] = inst_33199);

(statearr_33262[(12)] = inst_33185__$1);

return statearr_33262;
})();
var statearr_33263_35499 = state_33238__$1;
(statearr_33263_35499[(2)] = null);

(statearr_33263_35499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33239 === (22))){
var state_33238__$1 = state_33238;
var statearr_33265_35501 = state_33238__$1;
(statearr_33265_35501[(2)] = null);

(statearr_33265_35501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33239 === (6))){
var inst_33171 = (state_33238[(13)]);
var inst_33181 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33171) : f.call(null, inst_33171));
var inst_33182 = cljs.core.seq(inst_33181);
var inst_33183 = inst_33182;
var inst_33184 = null;
var inst_33185 = (0);
var inst_33186 = (0);
var state_33238__$1 = (function (){var statearr_33267 = state_33238;
(statearr_33267[(8)] = inst_33183);

(statearr_33267[(10)] = inst_33186);

(statearr_33267[(11)] = inst_33184);

(statearr_33267[(12)] = inst_33185);

return statearr_33267;
})();
var statearr_33268_35505 = state_33238__$1;
(statearr_33268_35505[(2)] = null);

(statearr_33268_35505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33239 === (17))){
var inst_33204 = (state_33238[(7)]);
var inst_33208 = cljs.core.chunk_first(inst_33204);
var inst_33209 = cljs.core.chunk_rest(inst_33204);
var inst_33210 = cljs.core.count(inst_33208);
var inst_33183 = inst_33209;
var inst_33184 = inst_33208;
var inst_33185 = inst_33210;
var inst_33186 = (0);
var state_33238__$1 = (function (){var statearr_33269 = state_33238;
(statearr_33269[(8)] = inst_33183);

(statearr_33269[(10)] = inst_33186);

(statearr_33269[(11)] = inst_33184);

(statearr_33269[(12)] = inst_33185);

return statearr_33269;
})();
var statearr_33274_35508 = state_33238__$1;
(statearr_33274_35508[(2)] = null);

(statearr_33274_35508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33239 === (3))){
var inst_33236 = (state_33238[(2)]);
var state_33238__$1 = state_33238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33238__$1,inst_33236);
} else {
if((state_val_33239 === (12))){
var inst_33224 = (state_33238[(2)]);
var state_33238__$1 = state_33238;
var statearr_33276_35510 = state_33238__$1;
(statearr_33276_35510[(2)] = inst_33224);

(statearr_33276_35510[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33239 === (2))){
var state_33238__$1 = state_33238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33238__$1,(4),in$);
} else {
if((state_val_33239 === (23))){
var inst_33232 = (state_33238[(2)]);
var state_33238__$1 = state_33238;
var statearr_33277_35513 = state_33238__$1;
(statearr_33277_35513[(2)] = inst_33232);

(statearr_33277_35513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33239 === (19))){
var inst_33219 = (state_33238[(2)]);
var state_33238__$1 = state_33238;
var statearr_33278_35515 = state_33238__$1;
(statearr_33278_35515[(2)] = inst_33219);

(statearr_33278_35515[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33239 === (11))){
var inst_33183 = (state_33238[(8)]);
var inst_33204 = (state_33238[(7)]);
var inst_33204__$1 = cljs.core.seq(inst_33183);
var state_33238__$1 = (function (){var statearr_33279 = state_33238;
(statearr_33279[(7)] = inst_33204__$1);

return statearr_33279;
})();
if(inst_33204__$1){
var statearr_33281_35518 = state_33238__$1;
(statearr_33281_35518[(1)] = (14));

} else {
var statearr_33286_35519 = state_33238__$1;
(statearr_33286_35519[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33239 === (9))){
var inst_33226 = (state_33238[(2)]);
var inst_33227 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33238__$1 = (function (){var statearr_33287 = state_33238;
(statearr_33287[(15)] = inst_33226);

return statearr_33287;
})();
if(cljs.core.truth_(inst_33227)){
var statearr_33288_35521 = state_33238__$1;
(statearr_33288_35521[(1)] = (21));

} else {
var statearr_33289_35522 = state_33238__$1;
(statearr_33289_35522[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33239 === (5))){
var inst_33174 = cljs.core.async.close_BANG_(out);
var state_33238__$1 = state_33238;
var statearr_33292_35523 = state_33238__$1;
(statearr_33292_35523[(2)] = inst_33174);

(statearr_33292_35523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33239 === (14))){
var inst_33204 = (state_33238[(7)]);
var inst_33206 = cljs.core.chunked_seq_QMARK_(inst_33204);
var state_33238__$1 = state_33238;
if(inst_33206){
var statearr_33293_35524 = state_33238__$1;
(statearr_33293_35524[(1)] = (17));

} else {
var statearr_33295_35525 = state_33238__$1;
(statearr_33295_35525[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33239 === (16))){
var inst_33222 = (state_33238[(2)]);
var state_33238__$1 = state_33238;
var statearr_33297_35527 = state_33238__$1;
(statearr_33297_35527[(2)] = inst_33222);

(statearr_33297_35527[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33239 === (10))){
var inst_33186 = (state_33238[(10)]);
var inst_33184 = (state_33238[(11)]);
var inst_33191 = cljs.core._nth(inst_33184,inst_33186);
var state_33238__$1 = state_33238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33238__$1,(13),out,inst_33191);
} else {
if((state_val_33239 === (18))){
var inst_33204 = (state_33238[(7)]);
var inst_33213 = cljs.core.first(inst_33204);
var state_33238__$1 = state_33238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33238__$1,(20),out,inst_33213);
} else {
if((state_val_33239 === (8))){
var inst_33186 = (state_33238[(10)]);
var inst_33185 = (state_33238[(12)]);
var inst_33188 = (inst_33186 < inst_33185);
var inst_33189 = inst_33188;
var state_33238__$1 = state_33238;
if(cljs.core.truth_(inst_33189)){
var statearr_33301_35531 = state_33238__$1;
(statearr_33301_35531[(1)] = (10));

} else {
var statearr_33302_35532 = state_33238__$1;
(statearr_33302_35532[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28507__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28507__auto____0 = (function (){
var statearr_33308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33308[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28507__auto__);

(statearr_33308[(1)] = (1));

return statearr_33308;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28507__auto____1 = (function (state_33238){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_33238);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e33309){var ex__28510__auto__ = e33309;
var statearr_33310_35536 = state_33238;
(statearr_33310_35536[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_33238[(4)]))){
var statearr_33311_35537 = state_33238;
(statearr_33311_35537[(1)] = cljs.core.first((state_33238[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35538 = state_33238;
state_33238 = G__35538;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28507__auto__ = function(state_33238){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28507__auto____1.call(this,state_33238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28507__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28507__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_33318 = f__29485__auto__();
(statearr_33318[(6)] = c__29484__auto__);

return statearr_33318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
}));

return c__29484__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33324 = arguments.length;
switch (G__33324) {
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
var G__33330 = arguments.length;
switch (G__33330) {
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
var G__33339 = arguments.length;
switch (G__33339) {
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
var c__29484__auto___35550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_33372){
var state_val_33373 = (state_33372[(1)]);
if((state_val_33373 === (7))){
var inst_33366 = (state_33372[(2)]);
var state_33372__$1 = state_33372;
var statearr_33377_35553 = state_33372__$1;
(statearr_33377_35553[(2)] = inst_33366);

(statearr_33377_35553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33373 === (1))){
var inst_33347 = null;
var state_33372__$1 = (function (){var statearr_33379 = state_33372;
(statearr_33379[(7)] = inst_33347);

return statearr_33379;
})();
var statearr_33380_35555 = state_33372__$1;
(statearr_33380_35555[(2)] = null);

(statearr_33380_35555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33373 === (4))){
var inst_33350 = (state_33372[(8)]);
var inst_33350__$1 = (state_33372[(2)]);
var inst_33351 = (inst_33350__$1 == null);
var inst_33352 = cljs.core.not(inst_33351);
var state_33372__$1 = (function (){var statearr_33382 = state_33372;
(statearr_33382[(8)] = inst_33350__$1);

return statearr_33382;
})();
if(inst_33352){
var statearr_33384_35558 = state_33372__$1;
(statearr_33384_35558[(1)] = (5));

} else {
var statearr_33385_35559 = state_33372__$1;
(statearr_33385_35559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33373 === (6))){
var state_33372__$1 = state_33372;
var statearr_33386_35560 = state_33372__$1;
(statearr_33386_35560[(2)] = null);

(statearr_33386_35560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33373 === (3))){
var inst_33368 = (state_33372[(2)]);
var inst_33369 = cljs.core.async.close_BANG_(out);
var state_33372__$1 = (function (){var statearr_33387 = state_33372;
(statearr_33387[(9)] = inst_33368);

return statearr_33387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33372__$1,inst_33369);
} else {
if((state_val_33373 === (2))){
var state_33372__$1 = state_33372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33372__$1,(4),ch);
} else {
if((state_val_33373 === (11))){
var inst_33350 = (state_33372[(8)]);
var inst_33360 = (state_33372[(2)]);
var inst_33347 = inst_33350;
var state_33372__$1 = (function (){var statearr_33389 = state_33372;
(statearr_33389[(7)] = inst_33347);

(statearr_33389[(10)] = inst_33360);

return statearr_33389;
})();
var statearr_33390_35561 = state_33372__$1;
(statearr_33390_35561[(2)] = null);

(statearr_33390_35561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33373 === (9))){
var inst_33350 = (state_33372[(8)]);
var state_33372__$1 = state_33372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33372__$1,(11),out,inst_33350);
} else {
if((state_val_33373 === (5))){
var inst_33350 = (state_33372[(8)]);
var inst_33347 = (state_33372[(7)]);
var inst_33354 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33350,inst_33347);
var state_33372__$1 = state_33372;
if(inst_33354){
var statearr_33392_35562 = state_33372__$1;
(statearr_33392_35562[(1)] = (8));

} else {
var statearr_33393_35564 = state_33372__$1;
(statearr_33393_35564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33373 === (10))){
var inst_33363 = (state_33372[(2)]);
var state_33372__$1 = state_33372;
var statearr_33395_35566 = state_33372__$1;
(statearr_33395_35566[(2)] = inst_33363);

(statearr_33395_35566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33373 === (8))){
var inst_33347 = (state_33372[(7)]);
var tmp33391 = inst_33347;
var inst_33347__$1 = tmp33391;
var state_33372__$1 = (function (){var statearr_33402 = state_33372;
(statearr_33402[(7)] = inst_33347__$1);

return statearr_33402;
})();
var statearr_33403_35569 = state_33372__$1;
(statearr_33403_35569[(2)] = null);

(statearr_33403_35569[(1)] = (2));


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
var cljs$core$async$state_machine__28507__auto__ = null;
var cljs$core$async$state_machine__28507__auto____0 = (function (){
var statearr_33410 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33410[(0)] = cljs$core$async$state_machine__28507__auto__);

(statearr_33410[(1)] = (1));

return statearr_33410;
});
var cljs$core$async$state_machine__28507__auto____1 = (function (state_33372){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_33372);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e33411){var ex__28510__auto__ = e33411;
var statearr_33412_35572 = state_33372;
(statearr_33412_35572[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_33372[(4)]))){
var statearr_33413_35573 = state_33372;
(statearr_33413_35573[(1)] = cljs.core.first((state_33372[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35574 = state_33372;
state_33372 = G__35574;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$state_machine__28507__auto__ = function(state_33372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28507__auto____1.call(this,state_33372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28507__auto____0;
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28507__auto____1;
return cljs$core$async$state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_33417 = f__29485__auto__();
(statearr_33417[(6)] = c__29484__auto___35550);

return statearr_33417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33433 = arguments.length;
switch (G__33433) {
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
var c__29484__auto___35580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_33487){
var state_val_33488 = (state_33487[(1)]);
if((state_val_33488 === (7))){
var inst_33481 = (state_33487[(2)]);
var state_33487__$1 = state_33487;
var statearr_33493_35582 = state_33487__$1;
(statearr_33493_35582[(2)] = inst_33481);

(statearr_33493_35582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (1))){
var inst_33440 = (new Array(n));
var inst_33441 = inst_33440;
var inst_33442 = (0);
var state_33487__$1 = (function (){var statearr_33497 = state_33487;
(statearr_33497[(7)] = inst_33442);

(statearr_33497[(8)] = inst_33441);

return statearr_33497;
})();
var statearr_33503_35586 = state_33487__$1;
(statearr_33503_35586[(2)] = null);

(statearr_33503_35586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (4))){
var inst_33447 = (state_33487[(9)]);
var inst_33447__$1 = (state_33487[(2)]);
var inst_33448 = (inst_33447__$1 == null);
var inst_33449 = cljs.core.not(inst_33448);
var state_33487__$1 = (function (){var statearr_33514 = state_33487;
(statearr_33514[(9)] = inst_33447__$1);

return statearr_33514;
})();
if(inst_33449){
var statearr_33515_35590 = state_33487__$1;
(statearr_33515_35590[(1)] = (5));

} else {
var statearr_33517_35591 = state_33487__$1;
(statearr_33517_35591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (15))){
var inst_33475 = (state_33487[(2)]);
var state_33487__$1 = state_33487;
var statearr_33529_35596 = state_33487__$1;
(statearr_33529_35596[(2)] = inst_33475);

(statearr_33529_35596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (13))){
var state_33487__$1 = state_33487;
var statearr_33540_35600 = state_33487__$1;
(statearr_33540_35600[(2)] = null);

(statearr_33540_35600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (6))){
var inst_33442 = (state_33487[(7)]);
var inst_33471 = (inst_33442 > (0));
var state_33487__$1 = state_33487;
if(cljs.core.truth_(inst_33471)){
var statearr_33554_35601 = state_33487__$1;
(statearr_33554_35601[(1)] = (12));

} else {
var statearr_33555_35602 = state_33487__$1;
(statearr_33555_35602[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (3))){
var inst_33483 = (state_33487[(2)]);
var state_33487__$1 = state_33487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33487__$1,inst_33483);
} else {
if((state_val_33488 === (12))){
var inst_33441 = (state_33487[(8)]);
var inst_33473 = cljs.core.vec(inst_33441);
var state_33487__$1 = state_33487;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33487__$1,(15),out,inst_33473);
} else {
if((state_val_33488 === (2))){
var state_33487__$1 = state_33487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33487__$1,(4),ch);
} else {
if((state_val_33488 === (11))){
var inst_33464 = (state_33487[(2)]);
var inst_33466 = (new Array(n));
var inst_33441 = inst_33466;
var inst_33442 = (0);
var state_33487__$1 = (function (){var statearr_33577 = state_33487;
(statearr_33577[(7)] = inst_33442);

(statearr_33577[(8)] = inst_33441);

(statearr_33577[(10)] = inst_33464);

return statearr_33577;
})();
var statearr_33585_35609 = state_33487__$1;
(statearr_33585_35609[(2)] = null);

(statearr_33585_35609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (9))){
var inst_33441 = (state_33487[(8)]);
var inst_33461 = cljs.core.vec(inst_33441);
var state_33487__$1 = state_33487;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33487__$1,(11),out,inst_33461);
} else {
if((state_val_33488 === (5))){
var inst_33442 = (state_33487[(7)]);
var inst_33454 = (state_33487[(11)]);
var inst_33447 = (state_33487[(9)]);
var inst_33441 = (state_33487[(8)]);
var inst_33453 = (inst_33441[inst_33442] = inst_33447);
var inst_33454__$1 = (inst_33442 + (1));
var inst_33455 = (inst_33454__$1 < n);
var state_33487__$1 = (function (){var statearr_33597 = state_33487;
(statearr_33597[(11)] = inst_33454__$1);

(statearr_33597[(12)] = inst_33453);

return statearr_33597;
})();
if(cljs.core.truth_(inst_33455)){
var statearr_33606_35618 = state_33487__$1;
(statearr_33606_35618[(1)] = (8));

} else {
var statearr_33618_35619 = state_33487__$1;
(statearr_33618_35619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (14))){
var inst_33478 = (state_33487[(2)]);
var inst_33479 = cljs.core.async.close_BANG_(out);
var state_33487__$1 = (function (){var statearr_33620 = state_33487;
(statearr_33620[(13)] = inst_33478);

return statearr_33620;
})();
var statearr_33622_35625 = state_33487__$1;
(statearr_33622_35625[(2)] = inst_33479);

(statearr_33622_35625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (10))){
var inst_33469 = (state_33487[(2)]);
var state_33487__$1 = state_33487;
var statearr_33623_35628 = state_33487__$1;
(statearr_33623_35628[(2)] = inst_33469);

(statearr_33623_35628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33488 === (8))){
var inst_33454 = (state_33487[(11)]);
var inst_33441 = (state_33487[(8)]);
var tmp33619 = inst_33441;
var inst_33441__$1 = tmp33619;
var inst_33442 = inst_33454;
var state_33487__$1 = (function (){var statearr_33645 = state_33487;
(statearr_33645[(7)] = inst_33442);

(statearr_33645[(8)] = inst_33441__$1);

return statearr_33645;
})();
var statearr_33646_35633 = state_33487__$1;
(statearr_33646_35633[(2)] = null);

(statearr_33646_35633[(1)] = (2));


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
var cljs$core$async$state_machine__28507__auto__ = null;
var cljs$core$async$state_machine__28507__auto____0 = (function (){
var statearr_33648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33648[(0)] = cljs$core$async$state_machine__28507__auto__);

(statearr_33648[(1)] = (1));

return statearr_33648;
});
var cljs$core$async$state_machine__28507__auto____1 = (function (state_33487){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_33487);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e33659){var ex__28510__auto__ = e33659;
var statearr_33663_35640 = state_33487;
(statearr_33663_35640[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_33487[(4)]))){
var statearr_33674_35641 = state_33487;
(statearr_33674_35641[(1)] = cljs.core.first((state_33487[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35642 = state_33487;
state_33487 = G__35642;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$state_machine__28507__auto__ = function(state_33487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28507__auto____1.call(this,state_33487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28507__auto____0;
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28507__auto____1;
return cljs$core$async$state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_33676 = f__29485__auto__();
(statearr_33676[(6)] = c__29484__auto___35580);

return statearr_33676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33703 = arguments.length;
switch (G__33703) {
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
var c__29484__auto___35649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_33815){
var state_val_33816 = (state_33815[(1)]);
if((state_val_33816 === (7))){
var inst_33811 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
var statearr_33822_35651 = state_33815__$1;
(statearr_33822_35651[(2)] = inst_33811);

(statearr_33822_35651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (1))){
var inst_33732 = [];
var inst_33733 = inst_33732;
var inst_33734 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33815__$1 = (function (){var statearr_33837 = state_33815;
(statearr_33837[(7)] = inst_33734);

(statearr_33837[(8)] = inst_33733);

return statearr_33837;
})();
var statearr_33855_35653 = state_33815__$1;
(statearr_33855_35653[(2)] = null);

(statearr_33855_35653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (4))){
var inst_33738 = (state_33815[(9)]);
var inst_33738__$1 = (state_33815[(2)]);
var inst_33739 = (inst_33738__$1 == null);
var inst_33740 = cljs.core.not(inst_33739);
var state_33815__$1 = (function (){var statearr_33856 = state_33815;
(statearr_33856[(9)] = inst_33738__$1);

return statearr_33856;
})();
if(inst_33740){
var statearr_33857_35656 = state_33815__$1;
(statearr_33857_35656[(1)] = (5));

} else {
var statearr_33859_35657 = state_33815__$1;
(statearr_33859_35657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (15))){
var inst_33733 = (state_33815[(8)]);
var inst_33803 = cljs.core.vec(inst_33733);
var state_33815__$1 = state_33815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33815__$1,(18),out,inst_33803);
} else {
if((state_val_33816 === (13))){
var inst_33773 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
var statearr_33860_35659 = state_33815__$1;
(statearr_33860_35659[(2)] = inst_33773);

(statearr_33860_35659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (6))){
var inst_33733 = (state_33815[(8)]);
var inst_33777 = inst_33733.length;
var inst_33779 = (inst_33777 > (0));
var state_33815__$1 = state_33815;
if(cljs.core.truth_(inst_33779)){
var statearr_33876_35662 = state_33815__$1;
(statearr_33876_35662[(1)] = (15));

} else {
var statearr_33877_35663 = state_33815__$1;
(statearr_33877_35663[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (17))){
var inst_33808 = (state_33815[(2)]);
var inst_33809 = cljs.core.async.close_BANG_(out);
var state_33815__$1 = (function (){var statearr_33896 = state_33815;
(statearr_33896[(10)] = inst_33808);

return statearr_33896;
})();
var statearr_33897_35665 = state_33815__$1;
(statearr_33897_35665[(2)] = inst_33809);

(statearr_33897_35665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (3))){
var inst_33813 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33815__$1,inst_33813);
} else {
if((state_val_33816 === (12))){
var inst_33733 = (state_33815[(8)]);
var inst_33753 = cljs.core.vec(inst_33733);
var state_33815__$1 = state_33815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33815__$1,(14),out,inst_33753);
} else {
if((state_val_33816 === (2))){
var state_33815__$1 = state_33815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33815__$1,(4),ch);
} else {
if((state_val_33816 === (11))){
var inst_33738 = (state_33815[(9)]);
var inst_33733 = (state_33815[(8)]);
var inst_33742 = (state_33815[(11)]);
var inst_33750 = inst_33733.push(inst_33738);
var tmp33898 = inst_33733;
var inst_33733__$1 = tmp33898;
var inst_33734 = inst_33742;
var state_33815__$1 = (function (){var statearr_33909 = state_33815;
(statearr_33909[(7)] = inst_33734);

(statearr_33909[(8)] = inst_33733__$1);

(statearr_33909[(12)] = inst_33750);

return statearr_33909;
})();
var statearr_33910_35673 = state_33815__$1;
(statearr_33910_35673[(2)] = null);

(statearr_33910_35673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (9))){
var inst_33734 = (state_33815[(7)]);
var inst_33746 = cljs.core.keyword_identical_QMARK_(inst_33734,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33815__$1 = state_33815;
var statearr_33927_35674 = state_33815__$1;
(statearr_33927_35674[(2)] = inst_33746);

(statearr_33927_35674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (5))){
var inst_33738 = (state_33815[(9)]);
var inst_33734 = (state_33815[(7)]);
var inst_33743 = (state_33815[(13)]);
var inst_33742 = (state_33815[(11)]);
var inst_33742__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33738) : f.call(null, inst_33738));
var inst_33743__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33742__$1,inst_33734);
var state_33815__$1 = (function (){var statearr_33932 = state_33815;
(statearr_33932[(13)] = inst_33743__$1);

(statearr_33932[(11)] = inst_33742__$1);

return statearr_33932;
})();
if(inst_33743__$1){
var statearr_33933_35677 = state_33815__$1;
(statearr_33933_35677[(1)] = (8));

} else {
var statearr_33934_35679 = state_33815__$1;
(statearr_33934_35679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (14))){
var inst_33738 = (state_33815[(9)]);
var inst_33742 = (state_33815[(11)]);
var inst_33755 = (state_33815[(2)]);
var inst_33769 = [];
var inst_33770 = inst_33769.push(inst_33738);
var inst_33733 = inst_33769;
var inst_33734 = inst_33742;
var state_33815__$1 = (function (){var statearr_33935 = state_33815;
(statearr_33935[(14)] = inst_33770);

(statearr_33935[(7)] = inst_33734);

(statearr_33935[(8)] = inst_33733);

(statearr_33935[(15)] = inst_33755);

return statearr_33935;
})();
var statearr_33938_35681 = state_33815__$1;
(statearr_33938_35681[(2)] = null);

(statearr_33938_35681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (16))){
var state_33815__$1 = state_33815;
var statearr_33939_35683 = state_33815__$1;
(statearr_33939_35683[(2)] = null);

(statearr_33939_35683[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (10))){
var inst_33748 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
if(cljs.core.truth_(inst_33748)){
var statearr_33944_35687 = state_33815__$1;
(statearr_33944_35687[(1)] = (11));

} else {
var statearr_33945_35688 = state_33815__$1;
(statearr_33945_35688[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (18))){
var inst_33805 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
var statearr_33946_35690 = state_33815__$1;
(statearr_33946_35690[(2)] = inst_33805);

(statearr_33946_35690[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (8))){
var inst_33743 = (state_33815[(13)]);
var state_33815__$1 = state_33815;
var statearr_33950_35691 = state_33815__$1;
(statearr_33950_35691[(2)] = inst_33743);

(statearr_33950_35691[(1)] = (10));


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
var cljs$core$async$state_machine__28507__auto__ = null;
var cljs$core$async$state_machine__28507__auto____0 = (function (){
var statearr_33957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33957[(0)] = cljs$core$async$state_machine__28507__auto__);

(statearr_33957[(1)] = (1));

return statearr_33957;
});
var cljs$core$async$state_machine__28507__auto____1 = (function (state_33815){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_33815);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e33961){var ex__28510__auto__ = e33961;
var statearr_33962_35695 = state_33815;
(statearr_33962_35695[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_33815[(4)]))){
var statearr_33968_35700 = state_33815;
(statearr_33968_35700[(1)] = cljs.core.first((state_33815[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35702 = state_33815;
state_33815 = G__35702;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
cljs$core$async$state_machine__28507__auto__ = function(state_33815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28507__auto____1.call(this,state_33815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28507__auto____0;
cljs$core$async$state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28507__auto____1;
return cljs$core$async$state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_33979 = f__29485__auto__();
(statearr_33979[(6)] = c__29484__auto___35649);

return statearr_33979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
