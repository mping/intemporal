goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36113 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36113(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36118 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36118(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34455 = coll;
var G__34456 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34455,G__34456) : shadow.dom.lazy_native_coll_seq.call(null,G__34455,G__34456));
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
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
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
var G__34516 = arguments.length;
switch (G__34516) {
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
var G__34528 = arguments.length;
switch (G__34528) {
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
var G__34550 = arguments.length;
switch (G__34550) {
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
var G__34575 = arguments.length;
switch (G__34575) {
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
var G__34603 = arguments.length;
switch (G__34603) {
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
var G__34638 = arguments.length;
switch (G__34638) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34681){if((e34681 instanceof Object)){
var e = e34681;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34681;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34709 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34710 = null;
var count__34711 = (0);
var i__34712 = (0);
while(true){
if((i__34712 < count__34711)){
var el = chunk__34710.cljs$core$IIndexed$_nth$arity$2(null,i__34712);
var handler_36158__$1 = ((function (seq__34709,chunk__34710,count__34711,i__34712,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34709,chunk__34710,count__34711,i__34712,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36158__$1);


var G__36159 = seq__34709;
var G__36160 = chunk__34710;
var G__36161 = count__34711;
var G__36162 = (i__34712 + (1));
seq__34709 = G__36159;
chunk__34710 = G__36160;
count__34711 = G__36161;
i__34712 = G__36162;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34709);
if(temp__5804__auto__){
var seq__34709__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34709__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34709__$1);
var G__36163 = cljs.core.chunk_rest(seq__34709__$1);
var G__36164 = c__5568__auto__;
var G__36165 = cljs.core.count(c__5568__auto__);
var G__36166 = (0);
seq__34709 = G__36163;
chunk__34710 = G__36164;
count__34711 = G__36165;
i__34712 = G__36166;
continue;
} else {
var el = cljs.core.first(seq__34709__$1);
var handler_36168__$1 = ((function (seq__34709,chunk__34710,count__34711,i__34712,el,seq__34709__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34709,chunk__34710,count__34711,i__34712,el,seq__34709__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36168__$1);


var G__36170 = cljs.core.next(seq__34709__$1);
var G__36171 = null;
var G__36172 = (0);
var G__36173 = (0);
seq__34709 = G__36170;
chunk__34710 = G__36171;
count__34711 = G__36172;
i__34712 = G__36173;
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
var G__34736 = arguments.length;
switch (G__34736) {
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
var seq__34752 = cljs.core.seq(events);
var chunk__34753 = null;
var count__34754 = (0);
var i__34755 = (0);
while(true){
if((i__34755 < count__34754)){
var vec__34770 = chunk__34753.cljs$core$IIndexed$_nth$arity$2(null,i__34755);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34770,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34770,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36176 = seq__34752;
var G__36177 = chunk__34753;
var G__36178 = count__34754;
var G__36179 = (i__34755 + (1));
seq__34752 = G__36176;
chunk__34753 = G__36177;
count__34754 = G__36178;
i__34755 = G__36179;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34752);
if(temp__5804__auto__){
var seq__34752__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34752__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34752__$1);
var G__36181 = cljs.core.chunk_rest(seq__34752__$1);
var G__36182 = c__5568__auto__;
var G__36183 = cljs.core.count(c__5568__auto__);
var G__36184 = (0);
seq__34752 = G__36181;
chunk__34753 = G__36182;
count__34754 = G__36183;
i__34755 = G__36184;
continue;
} else {
var vec__34783 = cljs.core.first(seq__34752__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34783,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34783,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36185 = cljs.core.next(seq__34752__$1);
var G__36186 = null;
var G__36187 = (0);
var G__36188 = (0);
seq__34752 = G__36185;
chunk__34753 = G__36186;
count__34754 = G__36187;
i__34755 = G__36188;
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
var seq__34791 = cljs.core.seq(styles);
var chunk__34792 = null;
var count__34793 = (0);
var i__34794 = (0);
while(true){
if((i__34794 < count__34793)){
var vec__34813 = chunk__34792.cljs$core$IIndexed$_nth$arity$2(null,i__34794);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34813,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34813,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36195 = seq__34791;
var G__36196 = chunk__34792;
var G__36197 = count__34793;
var G__36198 = (i__34794 + (1));
seq__34791 = G__36195;
chunk__34792 = G__36196;
count__34793 = G__36197;
i__34794 = G__36198;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34791);
if(temp__5804__auto__){
var seq__34791__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34791__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34791__$1);
var G__36202 = cljs.core.chunk_rest(seq__34791__$1);
var G__36203 = c__5568__auto__;
var G__36204 = cljs.core.count(c__5568__auto__);
var G__36205 = (0);
seq__34791 = G__36202;
chunk__34792 = G__36203;
count__34793 = G__36204;
i__34794 = G__36205;
continue;
} else {
var vec__34822 = cljs.core.first(seq__34791__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34822,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34822,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36206 = cljs.core.next(seq__34791__$1);
var G__36207 = null;
var G__36208 = (0);
var G__36209 = (0);
seq__34791 = G__36206;
chunk__34792 = G__36207;
count__34793 = G__36208;
i__34794 = G__36209;
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
var G__34837_36210 = key;
var G__34837_36211__$1 = (((G__34837_36210 instanceof cljs.core.Keyword))?G__34837_36210.fqn:null);
switch (G__34837_36211__$1) {
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
var ks_36214 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_36214,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_36214,"aria-");
}
})())){
el.setAttribute(ks_36214,value);
} else {
(el[ks_36214] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34897){
var map__34898 = p__34897;
var map__34898__$1 = cljs.core.__destructure_map(map__34898);
var props = map__34898__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34898__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34900 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34900,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34900,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34900,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34903 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34903,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34903;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34907 = arguments.length;
switch (G__34907) {
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34940){
var vec__34943 = p__34940;
var seq__34944 = cljs.core.seq(vec__34943);
var first__34945 = cljs.core.first(seq__34944);
var seq__34944__$1 = cljs.core.next(seq__34944);
var nn = first__34945;
var first__34945__$1 = cljs.core.first(seq__34944__$1);
var seq__34944__$2 = cljs.core.next(seq__34944__$1);
var np = first__34945__$1;
var nc = seq__34944__$2;
var node = vec__34943;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34955 = nn;
var G__34956 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34955,G__34956) : create_fn.call(null,G__34955,G__34956));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34959 = nn;
var G__34960 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34959,G__34960) : create_fn.call(null,G__34959,G__34960));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34969 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969,(1),null);
var seq__34973_36235 = cljs.core.seq(node_children);
var chunk__34974_36236 = null;
var count__34975_36237 = (0);
var i__34976_36238 = (0);
while(true){
if((i__34976_36238 < count__34975_36237)){
var child_struct_36239 = chunk__34974_36236.cljs$core$IIndexed$_nth$arity$2(null,i__34976_36238);
var children_36240 = shadow.dom.dom_node(child_struct_36239);
if(cljs.core.seq_QMARK_(children_36240)){
var seq__35057_36243 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36240));
var chunk__35059_36244 = null;
var count__35060_36245 = (0);
var i__35061_36246 = (0);
while(true){
if((i__35061_36246 < count__35060_36245)){
var child_36249 = chunk__35059_36244.cljs$core$IIndexed$_nth$arity$2(null,i__35061_36246);
if(cljs.core.truth_(child_36249)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36249);


var G__36250 = seq__35057_36243;
var G__36251 = chunk__35059_36244;
var G__36252 = count__35060_36245;
var G__36253 = (i__35061_36246 + (1));
seq__35057_36243 = G__36250;
chunk__35059_36244 = G__36251;
count__35060_36245 = G__36252;
i__35061_36246 = G__36253;
continue;
} else {
var G__36255 = seq__35057_36243;
var G__36256 = chunk__35059_36244;
var G__36257 = count__35060_36245;
var G__36258 = (i__35061_36246 + (1));
seq__35057_36243 = G__36255;
chunk__35059_36244 = G__36256;
count__35060_36245 = G__36257;
i__35061_36246 = G__36258;
continue;
}
} else {
var temp__5804__auto___36262 = cljs.core.seq(seq__35057_36243);
if(temp__5804__auto___36262){
var seq__35057_36263__$1 = temp__5804__auto___36262;
if(cljs.core.chunked_seq_QMARK_(seq__35057_36263__$1)){
var c__5568__auto___36264 = cljs.core.chunk_first(seq__35057_36263__$1);
var G__36265 = cljs.core.chunk_rest(seq__35057_36263__$1);
var G__36266 = c__5568__auto___36264;
var G__36267 = cljs.core.count(c__5568__auto___36264);
var G__36268 = (0);
seq__35057_36243 = G__36265;
chunk__35059_36244 = G__36266;
count__35060_36245 = G__36267;
i__35061_36246 = G__36268;
continue;
} else {
var child_36269 = cljs.core.first(seq__35057_36263__$1);
if(cljs.core.truth_(child_36269)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36269);


var G__36270 = cljs.core.next(seq__35057_36263__$1);
var G__36271 = null;
var G__36272 = (0);
var G__36273 = (0);
seq__35057_36243 = G__36270;
chunk__35059_36244 = G__36271;
count__35060_36245 = G__36272;
i__35061_36246 = G__36273;
continue;
} else {
var G__36274 = cljs.core.next(seq__35057_36263__$1);
var G__36275 = null;
var G__36276 = (0);
var G__36277 = (0);
seq__35057_36243 = G__36274;
chunk__35059_36244 = G__36275;
count__35060_36245 = G__36276;
i__35061_36246 = G__36277;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36240);
}


var G__36278 = seq__34973_36235;
var G__36279 = chunk__34974_36236;
var G__36280 = count__34975_36237;
var G__36281 = (i__34976_36238 + (1));
seq__34973_36235 = G__36278;
chunk__34974_36236 = G__36279;
count__34975_36237 = G__36280;
i__34976_36238 = G__36281;
continue;
} else {
var temp__5804__auto___36282 = cljs.core.seq(seq__34973_36235);
if(temp__5804__auto___36282){
var seq__34973_36283__$1 = temp__5804__auto___36282;
if(cljs.core.chunked_seq_QMARK_(seq__34973_36283__$1)){
var c__5568__auto___36287 = cljs.core.chunk_first(seq__34973_36283__$1);
var G__36288 = cljs.core.chunk_rest(seq__34973_36283__$1);
var G__36289 = c__5568__auto___36287;
var G__36290 = cljs.core.count(c__5568__auto___36287);
var G__36291 = (0);
seq__34973_36235 = G__36288;
chunk__34974_36236 = G__36289;
count__34975_36237 = G__36290;
i__34976_36238 = G__36291;
continue;
} else {
var child_struct_36292 = cljs.core.first(seq__34973_36283__$1);
var children_36293 = shadow.dom.dom_node(child_struct_36292);
if(cljs.core.seq_QMARK_(children_36293)){
var seq__35127_36294 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36293));
var chunk__35130_36295 = null;
var count__35131_36296 = (0);
var i__35132_36297 = (0);
while(true){
if((i__35132_36297 < count__35131_36296)){
var child_36298 = chunk__35130_36295.cljs$core$IIndexed$_nth$arity$2(null,i__35132_36297);
if(cljs.core.truth_(child_36298)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36298);


var G__36299 = seq__35127_36294;
var G__36300 = chunk__35130_36295;
var G__36301 = count__35131_36296;
var G__36302 = (i__35132_36297 + (1));
seq__35127_36294 = G__36299;
chunk__35130_36295 = G__36300;
count__35131_36296 = G__36301;
i__35132_36297 = G__36302;
continue;
} else {
var G__36303 = seq__35127_36294;
var G__36304 = chunk__35130_36295;
var G__36305 = count__35131_36296;
var G__36306 = (i__35132_36297 + (1));
seq__35127_36294 = G__36303;
chunk__35130_36295 = G__36304;
count__35131_36296 = G__36305;
i__35132_36297 = G__36306;
continue;
}
} else {
var temp__5804__auto___36307__$1 = cljs.core.seq(seq__35127_36294);
if(temp__5804__auto___36307__$1){
var seq__35127_36308__$1 = temp__5804__auto___36307__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35127_36308__$1)){
var c__5568__auto___36310 = cljs.core.chunk_first(seq__35127_36308__$1);
var G__36312 = cljs.core.chunk_rest(seq__35127_36308__$1);
var G__36313 = c__5568__auto___36310;
var G__36314 = cljs.core.count(c__5568__auto___36310);
var G__36315 = (0);
seq__35127_36294 = G__36312;
chunk__35130_36295 = G__36313;
count__35131_36296 = G__36314;
i__35132_36297 = G__36315;
continue;
} else {
var child_36316 = cljs.core.first(seq__35127_36308__$1);
if(cljs.core.truth_(child_36316)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36316);


var G__36318 = cljs.core.next(seq__35127_36308__$1);
var G__36319 = null;
var G__36320 = (0);
var G__36321 = (0);
seq__35127_36294 = G__36318;
chunk__35130_36295 = G__36319;
count__35131_36296 = G__36320;
i__35132_36297 = G__36321;
continue;
} else {
var G__36322 = cljs.core.next(seq__35127_36308__$1);
var G__36323 = null;
var G__36324 = (0);
var G__36325 = (0);
seq__35127_36294 = G__36322;
chunk__35130_36295 = G__36323;
count__35131_36296 = G__36324;
i__35132_36297 = G__36325;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36293);
}


var G__36328 = cljs.core.next(seq__34973_36283__$1);
var G__36329 = null;
var G__36330 = (0);
var G__36331 = (0);
seq__34973_36235 = G__36328;
chunk__34974_36236 = G__36329;
count__34975_36237 = G__36330;
i__34976_36238 = G__36331;
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
var seq__35242 = cljs.core.seq(node);
var chunk__35243 = null;
var count__35244 = (0);
var i__35245 = (0);
while(true){
if((i__35245 < count__35244)){
var n = chunk__35243.cljs$core$IIndexed$_nth$arity$2(null,i__35245);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36342 = seq__35242;
var G__36343 = chunk__35243;
var G__36344 = count__35244;
var G__36345 = (i__35245 + (1));
seq__35242 = G__36342;
chunk__35243 = G__36343;
count__35244 = G__36344;
i__35245 = G__36345;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35242);
if(temp__5804__auto__){
var seq__35242__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35242__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35242__$1);
var G__36349 = cljs.core.chunk_rest(seq__35242__$1);
var G__36350 = c__5568__auto__;
var G__36351 = cljs.core.count(c__5568__auto__);
var G__36352 = (0);
seq__35242 = G__36349;
chunk__35243 = G__36350;
count__35244 = G__36351;
i__35245 = G__36352;
continue;
} else {
var n = cljs.core.first(seq__35242__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36353 = cljs.core.next(seq__35242__$1);
var G__36354 = null;
var G__36355 = (0);
var G__36356 = (0);
seq__35242 = G__36353;
chunk__35243 = G__36354;
count__35244 = G__36355;
i__35245 = G__36356;
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
var G__35267 = arguments.length;
switch (G__35267) {
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
var G__35305 = arguments.length;
switch (G__35305) {
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
var G__35383 = arguments.length;
switch (G__35383) {
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
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___36362 = arguments.length;
var i__5770__auto___36363 = (0);
while(true){
if((i__5770__auto___36363 < len__5769__auto___36362)){
args__5775__auto__.push((arguments[i__5770__auto___36363]));

var G__36364 = (i__5770__auto___36363 + (1));
i__5770__auto___36363 = G__36364;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35485_36365 = cljs.core.seq(nodes);
var chunk__35486_36366 = null;
var count__35487_36367 = (0);
var i__35488_36368 = (0);
while(true){
if((i__35488_36368 < count__35487_36367)){
var node_36369 = chunk__35486_36366.cljs$core$IIndexed$_nth$arity$2(null,i__35488_36368);
fragment.appendChild(shadow.dom._to_dom(node_36369));


var G__36371 = seq__35485_36365;
var G__36372 = chunk__35486_36366;
var G__36373 = count__35487_36367;
var G__36374 = (i__35488_36368 + (1));
seq__35485_36365 = G__36371;
chunk__35486_36366 = G__36372;
count__35487_36367 = G__36373;
i__35488_36368 = G__36374;
continue;
} else {
var temp__5804__auto___36376 = cljs.core.seq(seq__35485_36365);
if(temp__5804__auto___36376){
var seq__35485_36377__$1 = temp__5804__auto___36376;
if(cljs.core.chunked_seq_QMARK_(seq__35485_36377__$1)){
var c__5568__auto___36379 = cljs.core.chunk_first(seq__35485_36377__$1);
var G__36380 = cljs.core.chunk_rest(seq__35485_36377__$1);
var G__36381 = c__5568__auto___36379;
var G__36382 = cljs.core.count(c__5568__auto___36379);
var G__36383 = (0);
seq__35485_36365 = G__36380;
chunk__35486_36366 = G__36381;
count__35487_36367 = G__36382;
i__35488_36368 = G__36383;
continue;
} else {
var node_36386 = cljs.core.first(seq__35485_36377__$1);
fragment.appendChild(shadow.dom._to_dom(node_36386));


var G__36387 = cljs.core.next(seq__35485_36377__$1);
var G__36388 = null;
var G__36389 = (0);
var G__36390 = (0);
seq__35485_36365 = G__36387;
chunk__35486_36366 = G__36388;
count__35487_36367 = G__36389;
i__35488_36368 = G__36390;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35478){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35478));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35503_36392 = cljs.core.seq(scripts);
var chunk__35504_36393 = null;
var count__35505_36394 = (0);
var i__35506_36395 = (0);
while(true){
if((i__35506_36395 < count__35505_36394)){
var vec__35521_36396 = chunk__35504_36393.cljs$core$IIndexed$_nth$arity$2(null,i__35506_36395);
var script_tag_36397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35521_36396,(0),null);
var script_body_36398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35521_36396,(1),null);
eval(script_body_36398);


var G__36399 = seq__35503_36392;
var G__36400 = chunk__35504_36393;
var G__36401 = count__35505_36394;
var G__36402 = (i__35506_36395 + (1));
seq__35503_36392 = G__36399;
chunk__35504_36393 = G__36400;
count__35505_36394 = G__36401;
i__35506_36395 = G__36402;
continue;
} else {
var temp__5804__auto___36404 = cljs.core.seq(seq__35503_36392);
if(temp__5804__auto___36404){
var seq__35503_36405__$1 = temp__5804__auto___36404;
if(cljs.core.chunked_seq_QMARK_(seq__35503_36405__$1)){
var c__5568__auto___36406 = cljs.core.chunk_first(seq__35503_36405__$1);
var G__36407 = cljs.core.chunk_rest(seq__35503_36405__$1);
var G__36408 = c__5568__auto___36406;
var G__36409 = cljs.core.count(c__5568__auto___36406);
var G__36410 = (0);
seq__35503_36392 = G__36407;
chunk__35504_36393 = G__36408;
count__35505_36394 = G__36409;
i__35506_36395 = G__36410;
continue;
} else {
var vec__35535_36411 = cljs.core.first(seq__35503_36405__$1);
var script_tag_36412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35535_36411,(0),null);
var script_body_36413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35535_36411,(1),null);
eval(script_body_36413);


var G__36414 = cljs.core.next(seq__35503_36405__$1);
var G__36415 = null;
var G__36416 = (0);
var G__36417 = (0);
seq__35503_36392 = G__36414;
chunk__35504_36393 = G__36415;
count__35505_36394 = G__36416;
i__35506_36395 = G__36417;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35539){
var vec__35540 = p__35539;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35540,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35540,(1),null);
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
var G__35568 = arguments.length;
switch (G__35568) {
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
var seq__35583 = cljs.core.seq(style_keys);
var chunk__35584 = null;
var count__35585 = (0);
var i__35586 = (0);
while(true){
if((i__35586 < count__35585)){
var it = chunk__35584.cljs$core$IIndexed$_nth$arity$2(null,i__35586);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36423 = seq__35583;
var G__36424 = chunk__35584;
var G__36425 = count__35585;
var G__36426 = (i__35586 + (1));
seq__35583 = G__36423;
chunk__35584 = G__36424;
count__35585 = G__36425;
i__35586 = G__36426;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35583);
if(temp__5804__auto__){
var seq__35583__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35583__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35583__$1);
var G__36430 = cljs.core.chunk_rest(seq__35583__$1);
var G__36431 = c__5568__auto__;
var G__36432 = cljs.core.count(c__5568__auto__);
var G__36433 = (0);
seq__35583 = G__36430;
chunk__35584 = G__36431;
count__35585 = G__36432;
i__35586 = G__36433;
continue;
} else {
var it = cljs.core.first(seq__35583__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36434 = cljs.core.next(seq__35583__$1);
var G__36435 = null;
var G__36436 = (0);
var G__36437 = (0);
seq__35583 = G__36434;
chunk__35584 = G__36435;
count__35585 = G__36436;
i__35586 = G__36437;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35609,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35632 = k35609;
var G__35632__$1 = (((G__35632 instanceof cljs.core.Keyword))?G__35632.fqn:null);
switch (G__35632__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35609,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35641){
var vec__35643 = p__35641;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35643,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35643,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35608){
var self__ = this;
var G__35608__$1 = this;
return (new cljs.core.RecordIter((0),G__35608__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35610,other35611){
var self__ = this;
var this35610__$1 = this;
return (((!((other35611 == null)))) && ((((this35610__$1.constructor === other35611.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35610__$1.x,other35611.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35610__$1.y,other35611.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35610__$1.__extmap,other35611.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35609){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35687 = k35609;
var G__35687__$1 = (((G__35687 instanceof cljs.core.Keyword))?G__35687.fqn:null);
switch (G__35687__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35609);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35608){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35692 = cljs.core.keyword_identical_QMARK_;
var expr__35693 = k__5352__auto__;
if(cljs.core.truth_((pred__35692.cljs$core$IFn$_invoke$arity$2 ? pred__35692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35693) : pred__35692.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35693)))){
return (new shadow.dom.Coordinate(G__35608,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35692.cljs$core$IFn$_invoke$arity$2 ? pred__35692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35693) : pred__35692.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35693)))){
return (new shadow.dom.Coordinate(self__.x,G__35608,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35608),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35608){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35608,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35615){
var extmap__5385__auto__ = (function (){var G__35723 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35615,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35615)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35723);
} else {
return G__35723;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35615),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35615),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35744,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35755 = k35744;
var G__35755__$1 = (((G__35755 instanceof cljs.core.Keyword))?G__35755.fqn:null);
switch (G__35755__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35744,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35758){
var vec__35760 = p__35758;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35760,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35760,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35743){
var self__ = this;
var G__35743__$1 = this;
return (new cljs.core.RecordIter((0),G__35743__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35745,other35746){
var self__ = this;
var this35745__$1 = this;
return (((!((other35746 == null)))) && ((((this35745__$1.constructor === other35746.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35745__$1.w,other35746.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35745__$1.h,other35746.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35745__$1.__extmap,other35746.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35744){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35795 = k35744;
var G__35795__$1 = (((G__35795 instanceof cljs.core.Keyword))?G__35795.fqn:null);
switch (G__35795__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35744);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35743){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35798 = cljs.core.keyword_identical_QMARK_;
var expr__35799 = k__5352__auto__;
if(cljs.core.truth_((pred__35798.cljs$core$IFn$_invoke$arity$2 ? pred__35798.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35799) : pred__35798.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35799)))){
return (new shadow.dom.Size(G__35743,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35798.cljs$core$IFn$_invoke$arity$2 ? pred__35798.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35799) : pred__35798.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35799)))){
return (new shadow.dom.Size(self__.w,G__35743,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35743),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35743){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35743,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35748){
var extmap__5385__auto__ = (function (){var G__35810 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35748,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35748)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35810);
} else {
return G__35810;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35748),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35748),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__36481 = (i + (1));
var G__36482 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36481;
ret = G__36482;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35838){
var vec__35839 = p__35838;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35839,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35839,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35847 = arguments.length;
switch (G__35847) {
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
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
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
var G__36494 = ps;
var G__36495 = (i + (1));
el__$1 = G__36494;
i = G__36495;
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
var vec__35875 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35875,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35875,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35875,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35886_36496 = cljs.core.seq(props);
var chunk__35887_36497 = null;
var count__35888_36498 = (0);
var i__35889_36499 = (0);
while(true){
if((i__35889_36499 < count__35888_36498)){
var vec__35919_36500 = chunk__35887_36497.cljs$core$IIndexed$_nth$arity$2(null,i__35889_36499);
var k_36501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35919_36500,(0),null);
var v_36502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35919_36500,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_36501);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36501),v_36502);


var G__36503 = seq__35886_36496;
var G__36504 = chunk__35887_36497;
var G__36505 = count__35888_36498;
var G__36506 = (i__35889_36499 + (1));
seq__35886_36496 = G__36503;
chunk__35887_36497 = G__36504;
count__35888_36498 = G__36505;
i__35889_36499 = G__36506;
continue;
} else {
var temp__5804__auto___36507 = cljs.core.seq(seq__35886_36496);
if(temp__5804__auto___36507){
var seq__35886_36508__$1 = temp__5804__auto___36507;
if(cljs.core.chunked_seq_QMARK_(seq__35886_36508__$1)){
var c__5568__auto___36509 = cljs.core.chunk_first(seq__35886_36508__$1);
var G__36510 = cljs.core.chunk_rest(seq__35886_36508__$1);
var G__36511 = c__5568__auto___36509;
var G__36512 = cljs.core.count(c__5568__auto___36509);
var G__36513 = (0);
seq__35886_36496 = G__36510;
chunk__35887_36497 = G__36511;
count__35888_36498 = G__36512;
i__35889_36499 = G__36513;
continue;
} else {
var vec__35925_36514 = cljs.core.first(seq__35886_36508__$1);
var k_36515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35925_36514,(0),null);
var v_36516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35925_36514,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_36515);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36515),v_36516);


var G__36517 = cljs.core.next(seq__35886_36508__$1);
var G__36518 = null;
var G__36519 = (0);
var G__36520 = (0);
seq__35886_36496 = G__36517;
chunk__35887_36497 = G__36518;
count__35888_36498 = G__36519;
i__35889_36499 = G__36520;
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
var vec__35937 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35937,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35937,(1),null);
var seq__35940_36521 = cljs.core.seq(node_children);
var chunk__35942_36522 = null;
var count__35943_36523 = (0);
var i__35944_36524 = (0);
while(true){
if((i__35944_36524 < count__35943_36523)){
var child_struct_36525 = chunk__35942_36522.cljs$core$IIndexed$_nth$arity$2(null,i__35944_36524);
if((!((child_struct_36525 == null)))){
if(typeof child_struct_36525 === 'string'){
var text_36526 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36526),child_struct_36525].join(''));
} else {
var children_36527 = shadow.dom.svg_node(child_struct_36525);
if(cljs.core.seq_QMARK_(children_36527)){
var seq__35979_36528 = cljs.core.seq(children_36527);
var chunk__35981_36529 = null;
var count__35982_36530 = (0);
var i__35983_36531 = (0);
while(true){
if((i__35983_36531 < count__35982_36530)){
var child_36532 = chunk__35981_36529.cljs$core$IIndexed$_nth$arity$2(null,i__35983_36531);
if(cljs.core.truth_(child_36532)){
node.appendChild(child_36532);


var G__36533 = seq__35979_36528;
var G__36534 = chunk__35981_36529;
var G__36535 = count__35982_36530;
var G__36536 = (i__35983_36531 + (1));
seq__35979_36528 = G__36533;
chunk__35981_36529 = G__36534;
count__35982_36530 = G__36535;
i__35983_36531 = G__36536;
continue;
} else {
var G__36537 = seq__35979_36528;
var G__36538 = chunk__35981_36529;
var G__36539 = count__35982_36530;
var G__36540 = (i__35983_36531 + (1));
seq__35979_36528 = G__36537;
chunk__35981_36529 = G__36538;
count__35982_36530 = G__36539;
i__35983_36531 = G__36540;
continue;
}
} else {
var temp__5804__auto___36541 = cljs.core.seq(seq__35979_36528);
if(temp__5804__auto___36541){
var seq__35979_36542__$1 = temp__5804__auto___36541;
if(cljs.core.chunked_seq_QMARK_(seq__35979_36542__$1)){
var c__5568__auto___36544 = cljs.core.chunk_first(seq__35979_36542__$1);
var G__36545 = cljs.core.chunk_rest(seq__35979_36542__$1);
var G__36546 = c__5568__auto___36544;
var G__36547 = cljs.core.count(c__5568__auto___36544);
var G__36548 = (0);
seq__35979_36528 = G__36545;
chunk__35981_36529 = G__36546;
count__35982_36530 = G__36547;
i__35983_36531 = G__36548;
continue;
} else {
var child_36549 = cljs.core.first(seq__35979_36542__$1);
if(cljs.core.truth_(child_36549)){
node.appendChild(child_36549);


var G__36550 = cljs.core.next(seq__35979_36542__$1);
var G__36551 = null;
var G__36552 = (0);
var G__36553 = (0);
seq__35979_36528 = G__36550;
chunk__35981_36529 = G__36551;
count__35982_36530 = G__36552;
i__35983_36531 = G__36553;
continue;
} else {
var G__36554 = cljs.core.next(seq__35979_36542__$1);
var G__36555 = null;
var G__36556 = (0);
var G__36557 = (0);
seq__35979_36528 = G__36554;
chunk__35981_36529 = G__36555;
count__35982_36530 = G__36556;
i__35983_36531 = G__36557;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36527);
}
}


var G__36558 = seq__35940_36521;
var G__36559 = chunk__35942_36522;
var G__36560 = count__35943_36523;
var G__36561 = (i__35944_36524 + (1));
seq__35940_36521 = G__36558;
chunk__35942_36522 = G__36559;
count__35943_36523 = G__36560;
i__35944_36524 = G__36561;
continue;
} else {
var G__36562 = seq__35940_36521;
var G__36563 = chunk__35942_36522;
var G__36564 = count__35943_36523;
var G__36565 = (i__35944_36524 + (1));
seq__35940_36521 = G__36562;
chunk__35942_36522 = G__36563;
count__35943_36523 = G__36564;
i__35944_36524 = G__36565;
continue;
}
} else {
var temp__5804__auto___36567 = cljs.core.seq(seq__35940_36521);
if(temp__5804__auto___36567){
var seq__35940_36568__$1 = temp__5804__auto___36567;
if(cljs.core.chunked_seq_QMARK_(seq__35940_36568__$1)){
var c__5568__auto___36569 = cljs.core.chunk_first(seq__35940_36568__$1);
var G__36570 = cljs.core.chunk_rest(seq__35940_36568__$1);
var G__36571 = c__5568__auto___36569;
var G__36572 = cljs.core.count(c__5568__auto___36569);
var G__36573 = (0);
seq__35940_36521 = G__36570;
chunk__35942_36522 = G__36571;
count__35943_36523 = G__36572;
i__35944_36524 = G__36573;
continue;
} else {
var child_struct_36574 = cljs.core.first(seq__35940_36568__$1);
if((!((child_struct_36574 == null)))){
if(typeof child_struct_36574 === 'string'){
var text_36575 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36575),child_struct_36574].join(''));
} else {
var children_36577 = shadow.dom.svg_node(child_struct_36574);
if(cljs.core.seq_QMARK_(children_36577)){
var seq__35996_36578 = cljs.core.seq(children_36577);
var chunk__35998_36579 = null;
var count__35999_36580 = (0);
var i__36000_36581 = (0);
while(true){
if((i__36000_36581 < count__35999_36580)){
var child_36582 = chunk__35998_36579.cljs$core$IIndexed$_nth$arity$2(null,i__36000_36581);
if(cljs.core.truth_(child_36582)){
node.appendChild(child_36582);


var G__36583 = seq__35996_36578;
var G__36584 = chunk__35998_36579;
var G__36585 = count__35999_36580;
var G__36586 = (i__36000_36581 + (1));
seq__35996_36578 = G__36583;
chunk__35998_36579 = G__36584;
count__35999_36580 = G__36585;
i__36000_36581 = G__36586;
continue;
} else {
var G__36588 = seq__35996_36578;
var G__36589 = chunk__35998_36579;
var G__36590 = count__35999_36580;
var G__36591 = (i__36000_36581 + (1));
seq__35996_36578 = G__36588;
chunk__35998_36579 = G__36589;
count__35999_36580 = G__36590;
i__36000_36581 = G__36591;
continue;
}
} else {
var temp__5804__auto___36592__$1 = cljs.core.seq(seq__35996_36578);
if(temp__5804__auto___36592__$1){
var seq__35996_36593__$1 = temp__5804__auto___36592__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35996_36593__$1)){
var c__5568__auto___36599 = cljs.core.chunk_first(seq__35996_36593__$1);
var G__36600 = cljs.core.chunk_rest(seq__35996_36593__$1);
var G__36601 = c__5568__auto___36599;
var G__36602 = cljs.core.count(c__5568__auto___36599);
var G__36603 = (0);
seq__35996_36578 = G__36600;
chunk__35998_36579 = G__36601;
count__35999_36580 = G__36602;
i__36000_36581 = G__36603;
continue;
} else {
var child_36604 = cljs.core.first(seq__35996_36593__$1);
if(cljs.core.truth_(child_36604)){
node.appendChild(child_36604);


var G__36605 = cljs.core.next(seq__35996_36593__$1);
var G__36606 = null;
var G__36607 = (0);
var G__36608 = (0);
seq__35996_36578 = G__36605;
chunk__35998_36579 = G__36606;
count__35999_36580 = G__36607;
i__36000_36581 = G__36608;
continue;
} else {
var G__36609 = cljs.core.next(seq__35996_36593__$1);
var G__36610 = null;
var G__36611 = (0);
var G__36612 = (0);
seq__35996_36578 = G__36609;
chunk__35998_36579 = G__36610;
count__35999_36580 = G__36611;
i__36000_36581 = G__36612;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36577);
}
}


var G__36613 = cljs.core.next(seq__35940_36568__$1);
var G__36614 = null;
var G__36615 = (0);
var G__36616 = (0);
seq__35940_36521 = G__36613;
chunk__35942_36522 = G__36614;
count__35943_36523 = G__36615;
i__35944_36524 = G__36616;
continue;
} else {
var G__36617 = cljs.core.next(seq__35940_36568__$1);
var G__36618 = null;
var G__36619 = (0);
var G__36620 = (0);
seq__35940_36521 = G__36617;
chunk__35942_36522 = G__36618;
count__35943_36523 = G__36619;
i__35944_36524 = G__36620;
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
var args__5775__auto__ = [];
var len__5769__auto___36637 = arguments.length;
var i__5770__auto___36638 = (0);
while(true){
if((i__5770__auto___36638 < len__5769__auto___36637)){
args__5775__auto__.push((arguments[i__5770__auto___36638]));

var G__36639 = (i__5770__auto___36638 + (1));
i__5770__auto___36638 = G__36639;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36012){
var G__36013 = cljs.core.first(seq36012);
var seq36012__$1 = cljs.core.next(seq36012);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36013,seq36012__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36033 = arguments.length;
switch (G__36033) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__30325__auto___36644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30326__auto__ = (function (){var switch__29621__auto__ = (function (state_36052){
var state_val_36053 = (state_36052[(1)]);
if((state_val_36053 === (1))){
var state_36052__$1 = state_36052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36052__$1,(2),once_or_cleanup);
} else {
if((state_val_36053 === (2))){
var inst_36046 = (state_36052[(2)]);
var inst_36049 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36052__$1 = (function (){var statearr_36064 = state_36052;
(statearr_36064[(7)] = inst_36046);

return statearr_36064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36052__$1,inst_36049);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29622__auto__ = null;
var shadow$dom$state_machine__29622__auto____0 = (function (){
var statearr_36067 = [null,null,null,null,null,null,null,null];
(statearr_36067[(0)] = shadow$dom$state_machine__29622__auto__);

(statearr_36067[(1)] = (1));

return statearr_36067;
});
var shadow$dom$state_machine__29622__auto____1 = (function (state_36052){
while(true){
var ret_value__29623__auto__ = (function (){try{while(true){
var result__29624__auto__ = switch__29621__auto__(state_36052);
if(cljs.core.keyword_identical_QMARK_(result__29624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29624__auto__;
}
break;
}
}catch (e36070){var ex__29625__auto__ = e36070;
var statearr_36071_36646 = state_36052;
(statearr_36071_36646[(2)] = ex__29625__auto__);


if(cljs.core.seq((state_36052[(4)]))){
var statearr_36073_36647 = state_36052;
(statearr_36073_36647[(1)] = cljs.core.first((state_36052[(4)])));

} else {
throw ex__29625__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36648 = state_36052;
state_36052 = G__36648;
continue;
} else {
return ret_value__29623__auto__;
}
break;
}
});
shadow$dom$state_machine__29622__auto__ = function(state_36052){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29622__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29622__auto____1.call(this,state_36052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29622__auto____0;
shadow$dom$state_machine__29622__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29622__auto____1;
return shadow$dom$state_machine__29622__auto__;
})()
})();
var state__30327__auto__ = (function (){var statearr_36080 = f__30326__auto__();
(statearr_36080[(6)] = c__30325__auto___36644);

return statearr_36080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30327__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
