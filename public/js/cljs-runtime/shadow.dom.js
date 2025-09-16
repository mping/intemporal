goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_31834 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_31834(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_31841 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_31841(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__30197 = coll;
var G__30198 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__30197,G__30198) : shadow.dom.lazy_native_coll_seq.call(null,G__30197,G__30198));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5025__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__30236 = arguments.length;
switch (G__30236) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__30242 = arguments.length;
switch (G__30242) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__30251 = arguments.length;
switch (G__30251) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__30271 = arguments.length;
switch (G__30271) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__30298 = arguments.length;
switch (G__30298) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__30313 = arguments.length;
switch (G__30313) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e30325){if((e30325 instanceof Object)){
var e = e30325;
return console.log("didnt support attachEvent",el,e);
} else {
throw e30325;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__30339 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__30340 = null;
var count__30341 = (0);
var i__30342 = (0);
while(true){
if((i__30342 < count__30341)){
var el = chunk__30340.cljs$core$IIndexed$_nth$arity$2(null,i__30342);
var handler_31894__$1 = ((function (seq__30339,chunk__30340,count__30341,i__30342,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30339,chunk__30340,count__30341,i__30342,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_31894__$1);


var G__31901 = seq__30339;
var G__31902 = chunk__30340;
var G__31903 = count__30341;
var G__31904 = (i__30342 + (1));
seq__30339 = G__31901;
chunk__30340 = G__31902;
count__30341 = G__31903;
i__30342 = G__31904;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__30339);
if(temp__5825__auto__){
var seq__30339__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30339__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__30339__$1);
var G__31912 = cljs.core.chunk_rest(seq__30339__$1);
var G__31913 = c__5548__auto__;
var G__31914 = cljs.core.count(c__5548__auto__);
var G__31915 = (0);
seq__30339 = G__31912;
chunk__30340 = G__31913;
count__30341 = G__31914;
i__30342 = G__31915;
continue;
} else {
var el = cljs.core.first(seq__30339__$1);
var handler_31918__$1 = ((function (seq__30339,chunk__30340,count__30341,i__30342,el,seq__30339__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30339,chunk__30340,count__30341,i__30342,el,seq__30339__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_31918__$1);


var G__31921 = cljs.core.next(seq__30339__$1);
var G__31922 = null;
var G__31923 = (0);
var G__31924 = (0);
seq__30339 = G__31921;
chunk__30340 = G__31922;
count__30341 = G__31923;
i__30342 = G__31924;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__30378 = arguments.length;
switch (G__30378) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__30412 = cljs.core.seq(events);
var chunk__30413 = null;
var count__30414 = (0);
var i__30415 = (0);
while(true){
if((i__30415 < count__30414)){
var vec__30454 = chunk__30413.cljs$core$IIndexed$_nth$arity$2(null,i__30415);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30454,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30454,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__31933 = seq__30412;
var G__31934 = chunk__30413;
var G__31935 = count__30414;
var G__31936 = (i__30415 + (1));
seq__30412 = G__31933;
chunk__30413 = G__31934;
count__30414 = G__31935;
i__30415 = G__31936;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__30412);
if(temp__5825__auto__){
var seq__30412__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30412__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__30412__$1);
var G__31938 = cljs.core.chunk_rest(seq__30412__$1);
var G__31939 = c__5548__auto__;
var G__31940 = cljs.core.count(c__5548__auto__);
var G__31941 = (0);
seq__30412 = G__31938;
chunk__30413 = G__31939;
count__30414 = G__31940;
i__30415 = G__31941;
continue;
} else {
var vec__30467 = cljs.core.first(seq__30412__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30467,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30467,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__31943 = cljs.core.next(seq__30412__$1);
var G__31944 = null;
var G__31945 = (0);
var G__31946 = (0);
seq__30412 = G__31943;
chunk__30413 = G__31944;
count__30414 = G__31945;
i__30415 = G__31946;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__30502 = cljs.core.seq(styles);
var chunk__30503 = null;
var count__30504 = (0);
var i__30505 = (0);
while(true){
if((i__30505 < count__30504)){
var vec__30534 = chunk__30503.cljs$core$IIndexed$_nth$arity$2(null,i__30505);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30534,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30534,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__31949 = seq__30502;
var G__31950 = chunk__30503;
var G__31951 = count__30504;
var G__31952 = (i__30505 + (1));
seq__30502 = G__31949;
chunk__30503 = G__31950;
count__30504 = G__31951;
i__30505 = G__31952;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__30502);
if(temp__5825__auto__){
var seq__30502__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30502__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__30502__$1);
var G__31955 = cljs.core.chunk_rest(seq__30502__$1);
var G__31956 = c__5548__auto__;
var G__31957 = cljs.core.count(c__5548__auto__);
var G__31958 = (0);
seq__30502 = G__31955;
chunk__30503 = G__31956;
count__30504 = G__31957;
i__30505 = G__31958;
continue;
} else {
var vec__30547 = cljs.core.first(seq__30502__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30547,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30547,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__31960 = cljs.core.next(seq__30502__$1);
var G__31961 = null;
var G__31962 = (0);
var G__31963 = (0);
seq__30502 = G__31960;
chunk__30503 = G__31961;
count__30504 = G__31962;
i__30505 = G__31963;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__30558_31964 = key;
var G__30558_31965__$1 = (((G__30558_31964 instanceof cljs.core.Keyword))?G__30558_31964.fqn:null);
switch (G__30558_31965__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_31975 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_31975,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_31975,"aria-");
}
})())){
el.setAttribute(ks_31975,value);
} else {
(el[ks_31975] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__30642){
var map__30650 = p__30642;
var map__30650__$1 = cljs.core.__destructure_map(map__30650);
var props = map__30650__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30650__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__30657 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30657,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30657,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30657,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__30669 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__30669,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__30669;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__30674 = arguments.length;
switch (G__30674) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__30704){
var vec__30706 = p__30704;
var seq__30707 = cljs.core.seq(vec__30706);
var first__30708 = cljs.core.first(seq__30707);
var seq__30707__$1 = cljs.core.next(seq__30707);
var nn = first__30708;
var first__30708__$1 = cljs.core.first(seq__30707__$1);
var seq__30707__$2 = cljs.core.next(seq__30707__$1);
var np = first__30708__$1;
var nc = seq__30707__$2;
var node = vec__30706;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30721 = nn;
var G__30722 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__30721,G__30722) : create_fn.call(null,G__30721,G__30722));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30724 = nn;
var G__30725 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__30724,G__30725) : create_fn.call(null,G__30724,G__30725));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__30731 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30731,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30731,(1),null);
var seq__30734_32021 = cljs.core.seq(node_children);
var chunk__30735_32022 = null;
var count__30736_32023 = (0);
var i__30737_32024 = (0);
while(true){
if((i__30737_32024 < count__30736_32023)){
var child_struct_32025 = chunk__30735_32022.cljs$core$IIndexed$_nth$arity$2(null,i__30737_32024);
var children_32026 = shadow.dom.dom_node(child_struct_32025);
if(cljs.core.seq_QMARK_(children_32026)){
var seq__30866_32027 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32026));
var chunk__30872_32028 = null;
var count__30873_32029 = (0);
var i__30874_32030 = (0);
while(true){
if((i__30874_32030 < count__30873_32029)){
var child_32032 = chunk__30872_32028.cljs$core$IIndexed$_nth$arity$2(null,i__30874_32030);
if(cljs.core.truth_(child_32032)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32032);


var G__32033 = seq__30866_32027;
var G__32034 = chunk__30872_32028;
var G__32035 = count__30873_32029;
var G__32036 = (i__30874_32030 + (1));
seq__30866_32027 = G__32033;
chunk__30872_32028 = G__32034;
count__30873_32029 = G__32035;
i__30874_32030 = G__32036;
continue;
} else {
var G__32038 = seq__30866_32027;
var G__32039 = chunk__30872_32028;
var G__32040 = count__30873_32029;
var G__32041 = (i__30874_32030 + (1));
seq__30866_32027 = G__32038;
chunk__30872_32028 = G__32039;
count__30873_32029 = G__32040;
i__30874_32030 = G__32041;
continue;
}
} else {
var temp__5825__auto___32042 = cljs.core.seq(seq__30866_32027);
if(temp__5825__auto___32042){
var seq__30866_32043__$1 = temp__5825__auto___32042;
if(cljs.core.chunked_seq_QMARK_(seq__30866_32043__$1)){
var c__5548__auto___32044 = cljs.core.chunk_first(seq__30866_32043__$1);
var G__32045 = cljs.core.chunk_rest(seq__30866_32043__$1);
var G__32046 = c__5548__auto___32044;
var G__32047 = cljs.core.count(c__5548__auto___32044);
var G__32048 = (0);
seq__30866_32027 = G__32045;
chunk__30872_32028 = G__32046;
count__30873_32029 = G__32047;
i__30874_32030 = G__32048;
continue;
} else {
var child_32051 = cljs.core.first(seq__30866_32043__$1);
if(cljs.core.truth_(child_32051)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32051);


var G__32053 = cljs.core.next(seq__30866_32043__$1);
var G__32054 = null;
var G__32055 = (0);
var G__32056 = (0);
seq__30866_32027 = G__32053;
chunk__30872_32028 = G__32054;
count__30873_32029 = G__32055;
i__30874_32030 = G__32056;
continue;
} else {
var G__32057 = cljs.core.next(seq__30866_32043__$1);
var G__32058 = null;
var G__32059 = (0);
var G__32060 = (0);
seq__30866_32027 = G__32057;
chunk__30872_32028 = G__32058;
count__30873_32029 = G__32059;
i__30874_32030 = G__32060;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32026);
}


var G__32063 = seq__30734_32021;
var G__32064 = chunk__30735_32022;
var G__32065 = count__30736_32023;
var G__32066 = (i__30737_32024 + (1));
seq__30734_32021 = G__32063;
chunk__30735_32022 = G__32064;
count__30736_32023 = G__32065;
i__30737_32024 = G__32066;
continue;
} else {
var temp__5825__auto___32067 = cljs.core.seq(seq__30734_32021);
if(temp__5825__auto___32067){
var seq__30734_32068__$1 = temp__5825__auto___32067;
if(cljs.core.chunked_seq_QMARK_(seq__30734_32068__$1)){
var c__5548__auto___32069 = cljs.core.chunk_first(seq__30734_32068__$1);
var G__32071 = cljs.core.chunk_rest(seq__30734_32068__$1);
var G__32072 = c__5548__auto___32069;
var G__32073 = cljs.core.count(c__5548__auto___32069);
var G__32074 = (0);
seq__30734_32021 = G__32071;
chunk__30735_32022 = G__32072;
count__30736_32023 = G__32073;
i__30737_32024 = G__32074;
continue;
} else {
var child_struct_32075 = cljs.core.first(seq__30734_32068__$1);
var children_32076 = shadow.dom.dom_node(child_struct_32075);
if(cljs.core.seq_QMARK_(children_32076)){
var seq__30917_32078 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32076));
var chunk__30919_32079 = null;
var count__30920_32080 = (0);
var i__30921_32081 = (0);
while(true){
if((i__30921_32081 < count__30920_32080)){
var child_32083 = chunk__30919_32079.cljs$core$IIndexed$_nth$arity$2(null,i__30921_32081);
if(cljs.core.truth_(child_32083)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32083);


var G__32084 = seq__30917_32078;
var G__32085 = chunk__30919_32079;
var G__32086 = count__30920_32080;
var G__32087 = (i__30921_32081 + (1));
seq__30917_32078 = G__32084;
chunk__30919_32079 = G__32085;
count__30920_32080 = G__32086;
i__30921_32081 = G__32087;
continue;
} else {
var G__32088 = seq__30917_32078;
var G__32089 = chunk__30919_32079;
var G__32090 = count__30920_32080;
var G__32091 = (i__30921_32081 + (1));
seq__30917_32078 = G__32088;
chunk__30919_32079 = G__32089;
count__30920_32080 = G__32090;
i__30921_32081 = G__32091;
continue;
}
} else {
var temp__5825__auto___32092__$1 = cljs.core.seq(seq__30917_32078);
if(temp__5825__auto___32092__$1){
var seq__30917_32095__$1 = temp__5825__auto___32092__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30917_32095__$1)){
var c__5548__auto___32096 = cljs.core.chunk_first(seq__30917_32095__$1);
var G__32097 = cljs.core.chunk_rest(seq__30917_32095__$1);
var G__32098 = c__5548__auto___32096;
var G__32099 = cljs.core.count(c__5548__auto___32096);
var G__32100 = (0);
seq__30917_32078 = G__32097;
chunk__30919_32079 = G__32098;
count__30920_32080 = G__32099;
i__30921_32081 = G__32100;
continue;
} else {
var child_32102 = cljs.core.first(seq__30917_32095__$1);
if(cljs.core.truth_(child_32102)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32102);


var G__32105 = cljs.core.next(seq__30917_32095__$1);
var G__32106 = null;
var G__32107 = (0);
var G__32108 = (0);
seq__30917_32078 = G__32105;
chunk__30919_32079 = G__32106;
count__30920_32080 = G__32107;
i__30921_32081 = G__32108;
continue;
} else {
var G__32109 = cljs.core.next(seq__30917_32095__$1);
var G__32110 = null;
var G__32111 = (0);
var G__32112 = (0);
seq__30917_32078 = G__32109;
chunk__30919_32079 = G__32110;
count__30920_32080 = G__32111;
i__30921_32081 = G__32112;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32076);
}


var G__32114 = cljs.core.next(seq__30734_32068__$1);
var G__32115 = null;
var G__32116 = (0);
var G__32117 = (0);
seq__30734_32021 = G__32114;
chunk__30735_32022 = G__32115;
count__30736_32023 = G__32116;
i__30737_32024 = G__32117;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__31052 = cljs.core.seq(node);
var chunk__31053 = null;
var count__31054 = (0);
var i__31055 = (0);
while(true){
if((i__31055 < count__31054)){
var n = chunk__31053.cljs$core$IIndexed$_nth$arity$2(null,i__31055);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__32132 = seq__31052;
var G__32133 = chunk__31053;
var G__32134 = count__31054;
var G__32135 = (i__31055 + (1));
seq__31052 = G__32132;
chunk__31053 = G__32133;
count__31054 = G__32134;
i__31055 = G__32135;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__31052);
if(temp__5825__auto__){
var seq__31052__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31052__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__31052__$1);
var G__32136 = cljs.core.chunk_rest(seq__31052__$1);
var G__32137 = c__5548__auto__;
var G__32138 = cljs.core.count(c__5548__auto__);
var G__32139 = (0);
seq__31052 = G__32136;
chunk__31053 = G__32137;
count__31054 = G__32138;
i__31055 = G__32139;
continue;
} else {
var n = cljs.core.first(seq__31052__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__32143 = cljs.core.next(seq__31052__$1);
var G__32144 = null;
var G__32145 = (0);
var G__32146 = (0);
seq__31052 = G__32143;
chunk__31053 = G__32144;
count__31054 = G__32145;
i__31055 = G__32146;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__31109 = arguments.length;
switch (G__31109) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__31123 = arguments.length;
switch (G__31123) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__31150 = arguments.length;
switch (G__31150) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5025__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32181 = arguments.length;
var i__5750__auto___32182 = (0);
while(true){
if((i__5750__auto___32182 < len__5749__auto___32181)){
args__5755__auto__.push((arguments[i__5750__auto___32182]));

var G__32185 = (i__5750__auto___32182 + (1));
i__5750__auto___32182 = G__32185;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__31208_32192 = cljs.core.seq(nodes);
var chunk__31209_32193 = null;
var count__31210_32194 = (0);
var i__31211_32195 = (0);
while(true){
if((i__31211_32195 < count__31210_32194)){
var node_32198 = chunk__31209_32193.cljs$core$IIndexed$_nth$arity$2(null,i__31211_32195);
fragment.appendChild(shadow.dom._to_dom(node_32198));


var G__32200 = seq__31208_32192;
var G__32201 = chunk__31209_32193;
var G__32202 = count__31210_32194;
var G__32203 = (i__31211_32195 + (1));
seq__31208_32192 = G__32200;
chunk__31209_32193 = G__32201;
count__31210_32194 = G__32202;
i__31211_32195 = G__32203;
continue;
} else {
var temp__5825__auto___32204 = cljs.core.seq(seq__31208_32192);
if(temp__5825__auto___32204){
var seq__31208_32205__$1 = temp__5825__auto___32204;
if(cljs.core.chunked_seq_QMARK_(seq__31208_32205__$1)){
var c__5548__auto___32208 = cljs.core.chunk_first(seq__31208_32205__$1);
var G__32209 = cljs.core.chunk_rest(seq__31208_32205__$1);
var G__32210 = c__5548__auto___32208;
var G__32211 = cljs.core.count(c__5548__auto___32208);
var G__32212 = (0);
seq__31208_32192 = G__32209;
chunk__31209_32193 = G__32210;
count__31210_32194 = G__32211;
i__31211_32195 = G__32212;
continue;
} else {
var node_32215 = cljs.core.first(seq__31208_32205__$1);
fragment.appendChild(shadow.dom._to_dom(node_32215));


var G__32216 = cljs.core.next(seq__31208_32205__$1);
var G__32217 = null;
var G__32218 = (0);
var G__32219 = (0);
seq__31208_32192 = G__32216;
chunk__31209_32193 = G__32217;
count__31210_32194 = G__32218;
i__31211_32195 = G__32219;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq31202){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31202));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__31237_32229 = cljs.core.seq(scripts);
var chunk__31239_32230 = null;
var count__31240_32231 = (0);
var i__31241_32232 = (0);
while(true){
if((i__31241_32232 < count__31240_32231)){
var vec__31263_32240 = chunk__31239_32230.cljs$core$IIndexed$_nth$arity$2(null,i__31241_32232);
var script_tag_32242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31263_32240,(0),null);
var script_body_32243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31263_32240,(1),null);
eval(script_body_32243);


var G__32250 = seq__31237_32229;
var G__32251 = chunk__31239_32230;
var G__32252 = count__31240_32231;
var G__32253 = (i__31241_32232 + (1));
seq__31237_32229 = G__32250;
chunk__31239_32230 = G__32251;
count__31240_32231 = G__32252;
i__31241_32232 = G__32253;
continue;
} else {
var temp__5825__auto___32254 = cljs.core.seq(seq__31237_32229);
if(temp__5825__auto___32254){
var seq__31237_32256__$1 = temp__5825__auto___32254;
if(cljs.core.chunked_seq_QMARK_(seq__31237_32256__$1)){
var c__5548__auto___32258 = cljs.core.chunk_first(seq__31237_32256__$1);
var G__32259 = cljs.core.chunk_rest(seq__31237_32256__$1);
var G__32260 = c__5548__auto___32258;
var G__32261 = cljs.core.count(c__5548__auto___32258);
var G__32262 = (0);
seq__31237_32229 = G__32259;
chunk__31239_32230 = G__32260;
count__31240_32231 = G__32261;
i__31241_32232 = G__32262;
continue;
} else {
var vec__31274_32263 = cljs.core.first(seq__31237_32256__$1);
var script_tag_32264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31274_32263,(0),null);
var script_body_32265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31274_32263,(1),null);
eval(script_body_32265);


var G__32267 = cljs.core.next(seq__31237_32256__$1);
var G__32268 = null;
var G__32269 = (0);
var G__32270 = (0);
seq__31237_32229 = G__32267;
chunk__31239_32230 = G__32268;
count__31240_32231 = G__32269;
i__31241_32232 = G__32270;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__31280){
var vec__31282 = p__31280;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31282,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31282,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__31308 = arguments.length;
switch (G__31308) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__31349 = cljs.core.seq(style_keys);
var chunk__31350 = null;
var count__31351 = (0);
var i__31352 = (0);
while(true){
if((i__31352 < count__31351)){
var it = chunk__31350.cljs$core$IIndexed$_nth$arity$2(null,i__31352);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__32283 = seq__31349;
var G__32284 = chunk__31350;
var G__32285 = count__31351;
var G__32286 = (i__31352 + (1));
seq__31349 = G__32283;
chunk__31350 = G__32284;
count__31351 = G__32285;
i__31352 = G__32286;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__31349);
if(temp__5825__auto__){
var seq__31349__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31349__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__31349__$1);
var G__32288 = cljs.core.chunk_rest(seq__31349__$1);
var G__32289 = c__5548__auto__;
var G__32290 = cljs.core.count(c__5548__auto__);
var G__32291 = (0);
seq__31349 = G__32288;
chunk__31350 = G__32289;
count__31351 = G__32290;
i__31352 = G__32291;
continue;
} else {
var it = cljs.core.first(seq__31349__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__32293 = cljs.core.next(seq__31349__$1);
var G__32294 = null;
var G__32295 = (0);
var G__32296 = (0);
seq__31349 = G__32293;
chunk__31350 = G__32294;
count__31351 = G__32295;
i__31352 = G__32296;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k31390,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__31438 = k31390;
var G__31438__$1 = (((G__31438 instanceof cljs.core.Keyword))?G__31438.fqn:null);
switch (G__31438__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31390,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__31441){
var vec__31442 = p__31441;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31442,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31442,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31389){
var self__ = this;
var G__31389__$1 = this;
return (new cljs.core.RecordIter((0),G__31389__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31394,other31395){
var self__ = this;
var this31394__$1 = this;
return (((!((other31395 == null)))) && ((((this31394__$1.constructor === other31395.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31394__$1.x,other31395.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31394__$1.y,other31395.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31394__$1.__extmap,other31395.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k31390){
var self__ = this;
var this__5330__auto____$1 = this;
var G__31480 = k31390;
var G__31480__$1 = (((G__31480 instanceof cljs.core.Keyword))?G__31480.fqn:null);
switch (G__31480__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k31390);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__31389){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__31484 = cljs.core.keyword_identical_QMARK_;
var expr__31485 = k__5332__auto__;
if(cljs.core.truth_((pred__31484.cljs$core$IFn$_invoke$arity$2 ? pred__31484.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__31485) : pred__31484.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__31485)))){
return (new shadow.dom.Coordinate(G__31389,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31484.cljs$core$IFn$_invoke$arity$2 ? pred__31484.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__31485) : pred__31484.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__31485)))){
return (new shadow.dom.Coordinate(self__.x,G__31389,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__31389),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__31389){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__31389,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__31421){
var extmap__5365__auto__ = (function (){var G__31497 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31421,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__31421)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31497);
} else {
return G__31497;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__31421),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__31421),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k31508,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__31514 = k31508;
var G__31514__$1 = (((G__31514 instanceof cljs.core.Keyword))?G__31514.fqn:null);
switch (G__31514__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31508,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__31517){
var vec__31519 = p__31517;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31519,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31519,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Size{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31507){
var self__ = this;
var G__31507__$1 = this;
return (new cljs.core.RecordIter((0),G__31507__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31509,other31510){
var self__ = this;
var this31509__$1 = this;
return (((!((other31510 == null)))) && ((((this31509__$1.constructor === other31510.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31509__$1.w,other31510.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31509__$1.h,other31510.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31509__$1.__extmap,other31510.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k31508){
var self__ = this;
var this__5330__auto____$1 = this;
var G__31538 = k31508;
var G__31538__$1 = (((G__31538 instanceof cljs.core.Keyword))?G__31538.fqn:null);
switch (G__31538__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k31508);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__31507){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__31541 = cljs.core.keyword_identical_QMARK_;
var expr__31542 = k__5332__auto__;
if(cljs.core.truth_((pred__31541.cljs$core$IFn$_invoke$arity$2 ? pred__31541.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__31542) : pred__31541.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__31542)))){
return (new shadow.dom.Size(G__31507,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31541.cljs$core$IFn$_invoke$arity$2 ? pred__31541.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__31542) : pred__31541.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__31542)))){
return (new shadow.dom.Size(self__.w,G__31507,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__31507),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__31507){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__31507,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__31512){
var extmap__5365__auto__ = (function (){var G__31552 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31512,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__31512)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31552);
} else {
return G__31552;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__31512),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__31512),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5613__auto__ = opts;
var l__5614__auto__ = a__5613__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5614__auto__)){
var G__32405 = (i + (1));
var G__32406 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__32405;
ret = G__32406;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31582){
var vec__31583 = p__31582;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31583,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31583,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__31589 = arguments.length;
switch (G__31589) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__32422 = ps;
var G__32423 = (i + (1));
el__$1 = G__32422;
i = G__32423;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__31628 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31628,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31628,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31628,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__31632_32433 = cljs.core.seq(props);
var chunk__31633_32434 = null;
var count__31634_32435 = (0);
var i__31635_32436 = (0);
while(true){
if((i__31635_32436 < count__31634_32435)){
var vec__31657_32438 = chunk__31633_32434.cljs$core$IIndexed$_nth$arity$2(null,i__31635_32436);
var k_32439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31657_32438,(0),null);
var v_32440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31657_32438,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_32439);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_32439),v_32440);


var G__32449 = seq__31632_32433;
var G__32450 = chunk__31633_32434;
var G__32451 = count__31634_32435;
var G__32452 = (i__31635_32436 + (1));
seq__31632_32433 = G__32449;
chunk__31633_32434 = G__32450;
count__31634_32435 = G__32451;
i__31635_32436 = G__32452;
continue;
} else {
var temp__5825__auto___32457 = cljs.core.seq(seq__31632_32433);
if(temp__5825__auto___32457){
var seq__31632_32463__$1 = temp__5825__auto___32457;
if(cljs.core.chunked_seq_QMARK_(seq__31632_32463__$1)){
var c__5548__auto___32474 = cljs.core.chunk_first(seq__31632_32463__$1);
var G__32475 = cljs.core.chunk_rest(seq__31632_32463__$1);
var G__32476 = c__5548__auto___32474;
var G__32477 = cljs.core.count(c__5548__auto___32474);
var G__32478 = (0);
seq__31632_32433 = G__32475;
chunk__31633_32434 = G__32476;
count__31634_32435 = G__32477;
i__31635_32436 = G__32478;
continue;
} else {
var vec__31665_32481 = cljs.core.first(seq__31632_32463__$1);
var k_32482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31665_32481,(0),null);
var v_32483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31665_32481,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_32482);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_32482),v_32483);


var G__32487 = cljs.core.next(seq__31632_32463__$1);
var G__32488 = null;
var G__32489 = (0);
var G__32490 = (0);
seq__31632_32433 = G__32487;
chunk__31633_32434 = G__32488;
count__31634_32435 = G__32489;
i__31635_32436 = G__32490;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__31685 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31685,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31685,(1),null);
var seq__31688_32495 = cljs.core.seq(node_children);
var chunk__31690_32496 = null;
var count__31691_32497 = (0);
var i__31692_32498 = (0);
while(true){
if((i__31692_32498 < count__31691_32497)){
var child_struct_32500 = chunk__31690_32496.cljs$core$IIndexed$_nth$arity$2(null,i__31692_32498);
if((!((child_struct_32500 == null)))){
if(typeof child_struct_32500 === 'string'){
var text_32502 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_32502),child_struct_32500].join(''));
} else {
var children_32503 = shadow.dom.svg_node(child_struct_32500);
if(cljs.core.seq_QMARK_(children_32503)){
var seq__31752_32504 = cljs.core.seq(children_32503);
var chunk__31754_32505 = null;
var count__31755_32506 = (0);
var i__31756_32507 = (0);
while(true){
if((i__31756_32507 < count__31755_32506)){
var child_32510 = chunk__31754_32505.cljs$core$IIndexed$_nth$arity$2(null,i__31756_32507);
if(cljs.core.truth_(child_32510)){
node.appendChild(child_32510);


var G__32512 = seq__31752_32504;
var G__32513 = chunk__31754_32505;
var G__32514 = count__31755_32506;
var G__32515 = (i__31756_32507 + (1));
seq__31752_32504 = G__32512;
chunk__31754_32505 = G__32513;
count__31755_32506 = G__32514;
i__31756_32507 = G__32515;
continue;
} else {
var G__32516 = seq__31752_32504;
var G__32517 = chunk__31754_32505;
var G__32518 = count__31755_32506;
var G__32519 = (i__31756_32507 + (1));
seq__31752_32504 = G__32516;
chunk__31754_32505 = G__32517;
count__31755_32506 = G__32518;
i__31756_32507 = G__32519;
continue;
}
} else {
var temp__5825__auto___32521 = cljs.core.seq(seq__31752_32504);
if(temp__5825__auto___32521){
var seq__31752_32523__$1 = temp__5825__auto___32521;
if(cljs.core.chunked_seq_QMARK_(seq__31752_32523__$1)){
var c__5548__auto___32527 = cljs.core.chunk_first(seq__31752_32523__$1);
var G__32529 = cljs.core.chunk_rest(seq__31752_32523__$1);
var G__32530 = c__5548__auto___32527;
var G__32531 = cljs.core.count(c__5548__auto___32527);
var G__32532 = (0);
seq__31752_32504 = G__32529;
chunk__31754_32505 = G__32530;
count__31755_32506 = G__32531;
i__31756_32507 = G__32532;
continue;
} else {
var child_32533 = cljs.core.first(seq__31752_32523__$1);
if(cljs.core.truth_(child_32533)){
node.appendChild(child_32533);


var G__32534 = cljs.core.next(seq__31752_32523__$1);
var G__32535 = null;
var G__32536 = (0);
var G__32537 = (0);
seq__31752_32504 = G__32534;
chunk__31754_32505 = G__32535;
count__31755_32506 = G__32536;
i__31756_32507 = G__32537;
continue;
} else {
var G__32539 = cljs.core.next(seq__31752_32523__$1);
var G__32540 = null;
var G__32541 = (0);
var G__32542 = (0);
seq__31752_32504 = G__32539;
chunk__31754_32505 = G__32540;
count__31755_32506 = G__32541;
i__31756_32507 = G__32542;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_32503);
}
}


var G__32545 = seq__31688_32495;
var G__32546 = chunk__31690_32496;
var G__32547 = count__31691_32497;
var G__32548 = (i__31692_32498 + (1));
seq__31688_32495 = G__32545;
chunk__31690_32496 = G__32546;
count__31691_32497 = G__32547;
i__31692_32498 = G__32548;
continue;
} else {
var G__32549 = seq__31688_32495;
var G__32550 = chunk__31690_32496;
var G__32551 = count__31691_32497;
var G__32552 = (i__31692_32498 + (1));
seq__31688_32495 = G__32549;
chunk__31690_32496 = G__32550;
count__31691_32497 = G__32551;
i__31692_32498 = G__32552;
continue;
}
} else {
var temp__5825__auto___32553 = cljs.core.seq(seq__31688_32495);
if(temp__5825__auto___32553){
var seq__31688_32554__$1 = temp__5825__auto___32553;
if(cljs.core.chunked_seq_QMARK_(seq__31688_32554__$1)){
var c__5548__auto___32555 = cljs.core.chunk_first(seq__31688_32554__$1);
var G__32557 = cljs.core.chunk_rest(seq__31688_32554__$1);
var G__32558 = c__5548__auto___32555;
var G__32559 = cljs.core.count(c__5548__auto___32555);
var G__32560 = (0);
seq__31688_32495 = G__32557;
chunk__31690_32496 = G__32558;
count__31691_32497 = G__32559;
i__31692_32498 = G__32560;
continue;
} else {
var child_struct_32562 = cljs.core.first(seq__31688_32554__$1);
if((!((child_struct_32562 == null)))){
if(typeof child_struct_32562 === 'string'){
var text_32565 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_32565),child_struct_32562].join(''));
} else {
var children_32566 = shadow.dom.svg_node(child_struct_32562);
if(cljs.core.seq_QMARK_(children_32566)){
var seq__31776_32567 = cljs.core.seq(children_32566);
var chunk__31778_32568 = null;
var count__31779_32569 = (0);
var i__31780_32570 = (0);
while(true){
if((i__31780_32570 < count__31779_32569)){
var child_32572 = chunk__31778_32568.cljs$core$IIndexed$_nth$arity$2(null,i__31780_32570);
if(cljs.core.truth_(child_32572)){
node.appendChild(child_32572);


var G__32573 = seq__31776_32567;
var G__32574 = chunk__31778_32568;
var G__32575 = count__31779_32569;
var G__32576 = (i__31780_32570 + (1));
seq__31776_32567 = G__32573;
chunk__31778_32568 = G__32574;
count__31779_32569 = G__32575;
i__31780_32570 = G__32576;
continue;
} else {
var G__32579 = seq__31776_32567;
var G__32581 = chunk__31778_32568;
var G__32582 = count__31779_32569;
var G__32583 = (i__31780_32570 + (1));
seq__31776_32567 = G__32579;
chunk__31778_32568 = G__32581;
count__31779_32569 = G__32582;
i__31780_32570 = G__32583;
continue;
}
} else {
var temp__5825__auto___32585__$1 = cljs.core.seq(seq__31776_32567);
if(temp__5825__auto___32585__$1){
var seq__31776_32586__$1 = temp__5825__auto___32585__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31776_32586__$1)){
var c__5548__auto___32587 = cljs.core.chunk_first(seq__31776_32586__$1);
var G__32589 = cljs.core.chunk_rest(seq__31776_32586__$1);
var G__32590 = c__5548__auto___32587;
var G__32591 = cljs.core.count(c__5548__auto___32587);
var G__32592 = (0);
seq__31776_32567 = G__32589;
chunk__31778_32568 = G__32590;
count__31779_32569 = G__32591;
i__31780_32570 = G__32592;
continue;
} else {
var child_32594 = cljs.core.first(seq__31776_32586__$1);
if(cljs.core.truth_(child_32594)){
node.appendChild(child_32594);


var G__32595 = cljs.core.next(seq__31776_32586__$1);
var G__32596 = null;
var G__32597 = (0);
var G__32598 = (0);
seq__31776_32567 = G__32595;
chunk__31778_32568 = G__32596;
count__31779_32569 = G__32597;
i__31780_32570 = G__32598;
continue;
} else {
var G__32600 = cljs.core.next(seq__31776_32586__$1);
var G__32601 = null;
var G__32602 = (0);
var G__32603 = (0);
seq__31776_32567 = G__32600;
chunk__31778_32568 = G__32601;
count__31779_32569 = G__32602;
i__31780_32570 = G__32603;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_32566);
}
}


var G__32609 = cljs.core.next(seq__31688_32554__$1);
var G__32610 = null;
var G__32611 = (0);
var G__32612 = (0);
seq__31688_32495 = G__32609;
chunk__31690_32496 = G__32610;
count__31691_32497 = G__32611;
i__31692_32498 = G__32612;
continue;
} else {
var G__32613 = cljs.core.next(seq__31688_32554__$1);
var G__32614 = null;
var G__32615 = (0);
var G__32616 = (0);
seq__31688_32495 = G__32613;
chunk__31690_32496 = G__32614;
count__31691_32497 = G__32615;
i__31692_32498 = G__32616;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32631 = arguments.length;
var i__5750__auto___32632 = (0);
while(true){
if((i__5750__auto___32632 < len__5749__auto___32631)){
args__5755__auto__.push((arguments[i__5750__auto___32632]));

var G__32636 = (i__5750__auto___32632 + (1));
i__5750__auto___32632 = G__32636;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq31810){
var G__31811 = cljs.core.first(seq31810);
var seq31810__$1 = cljs.core.next(seq31810);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31811,seq31810__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
