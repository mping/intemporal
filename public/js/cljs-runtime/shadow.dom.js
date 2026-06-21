goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_28615 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_28615(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_28627 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_28627(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__26790 = coll;
var G__26791 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__26790,G__26791) : shadow.dom.lazy_native_coll_seq.call(null,G__26790,G__26791));
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
var G__26801 = arguments.length;
switch (G__26801) {
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
var G__26803 = arguments.length;
switch (G__26803) {
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
var G__26809 = arguments.length;
switch (G__26809) {
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
var G__26813 = arguments.length;
switch (G__26813) {
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
var G__26821 = arguments.length;
switch (G__26821) {
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
var G__26826 = arguments.length;
switch (G__26826) {
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
}catch (e26841){if((e26841 instanceof Object)){
var e = e26841;
return console.log("didnt support attachEvent",el,e);
} else {
throw e26841;

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
var seq__26847 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__26848 = null;
var count__26849 = (0);
var i__26850 = (0);
while(true){
if((i__26850 < count__26849)){
var el = chunk__26848.cljs$core$IIndexed$_nth$arity$2(null,i__26850);
var handler_28698__$1 = ((function (seq__26847,chunk__26848,count__26849,i__26850,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__26847,chunk__26848,count__26849,i__26850,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_28698__$1);


var G__28704 = seq__26847;
var G__28705 = chunk__26848;
var G__28706 = count__26849;
var G__28707 = (i__26850 + (1));
seq__26847 = G__28704;
chunk__26848 = G__28705;
count__26849 = G__28706;
i__26850 = G__28707;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26847);
if(temp__5825__auto__){
var seq__26847__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26847__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26847__$1);
var G__28708 = cljs.core.chunk_rest(seq__26847__$1);
var G__28709 = c__5548__auto__;
var G__28710 = cljs.core.count(c__5548__auto__);
var G__28711 = (0);
seq__26847 = G__28708;
chunk__26848 = G__28709;
count__26849 = G__28710;
i__26850 = G__28711;
continue;
} else {
var el = cljs.core.first(seq__26847__$1);
var handler_28714__$1 = ((function (seq__26847,chunk__26848,count__26849,i__26850,el,seq__26847__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__26847,chunk__26848,count__26849,i__26850,el,seq__26847__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_28714__$1);


var G__28719 = cljs.core.next(seq__26847__$1);
var G__28720 = null;
var G__28721 = (0);
var G__28722 = (0);
seq__26847 = G__28719;
chunk__26848 = G__28720;
count__26849 = G__28721;
i__26850 = G__28722;
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
var G__26885 = arguments.length;
switch (G__26885) {
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
var seq__26912 = cljs.core.seq(events);
var chunk__26913 = null;
var count__26914 = (0);
var i__26915 = (0);
while(true){
if((i__26915 < count__26914)){
var vec__26958 = chunk__26913.cljs$core$IIndexed$_nth$arity$2(null,i__26915);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26958,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26958,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__28726 = seq__26912;
var G__28727 = chunk__26913;
var G__28728 = count__26914;
var G__28729 = (i__26915 + (1));
seq__26912 = G__28726;
chunk__26913 = G__28727;
count__26914 = G__28728;
i__26915 = G__28729;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26912);
if(temp__5825__auto__){
var seq__26912__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26912__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26912__$1);
var G__28730 = cljs.core.chunk_rest(seq__26912__$1);
var G__28731 = c__5548__auto__;
var G__28732 = cljs.core.count(c__5548__auto__);
var G__28733 = (0);
seq__26912 = G__28730;
chunk__26913 = G__28731;
count__26914 = G__28732;
i__26915 = G__28733;
continue;
} else {
var vec__26970 = cljs.core.first(seq__26912__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26970,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26970,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__28734 = cljs.core.next(seq__26912__$1);
var G__28735 = null;
var G__28736 = (0);
var G__28737 = (0);
seq__26912 = G__28734;
chunk__26913 = G__28735;
count__26914 = G__28736;
i__26915 = G__28737;
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
var seq__26987 = cljs.core.seq(styles);
var chunk__26988 = null;
var count__26989 = (0);
var i__26990 = (0);
while(true){
if((i__26990 < count__26989)){
var vec__27015 = chunk__26988.cljs$core$IIndexed$_nth$arity$2(null,i__26990);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27015,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27015,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__28738 = seq__26987;
var G__28739 = chunk__26988;
var G__28740 = count__26989;
var G__28741 = (i__26990 + (1));
seq__26987 = G__28738;
chunk__26988 = G__28739;
count__26989 = G__28740;
i__26990 = G__28741;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26987);
if(temp__5825__auto__){
var seq__26987__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26987__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26987__$1);
var G__28742 = cljs.core.chunk_rest(seq__26987__$1);
var G__28743 = c__5548__auto__;
var G__28744 = cljs.core.count(c__5548__auto__);
var G__28745 = (0);
seq__26987 = G__28742;
chunk__26988 = G__28743;
count__26989 = G__28744;
i__26990 = G__28745;
continue;
} else {
var vec__27046 = cljs.core.first(seq__26987__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27046,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27046,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__28746 = cljs.core.next(seq__26987__$1);
var G__28747 = null;
var G__28748 = (0);
var G__28749 = (0);
seq__26987 = G__28746;
chunk__26988 = G__28747;
count__26989 = G__28748;
i__26990 = G__28749;
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
var G__27073_28750 = key;
var G__27073_28751__$1 = (((G__27073_28750 instanceof cljs.core.Keyword))?G__27073_28750.fqn:null);
switch (G__27073_28751__$1) {
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
var ks_28761 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_28761,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_28761,"aria-");
}
})())){
el.setAttribute(ks_28761,value);
} else {
(el[ks_28761] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__27165){
var map__27168 = p__27165;
var map__27168__$1 = cljs.core.__destructure_map(map__27168);
var props = map__27168__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27168__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__27171 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27171,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27171,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27171,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__27192 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__27192,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__27192;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__27217 = arguments.length;
switch (G__27217) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__27225){
var vec__27227 = p__27225;
var seq__27228 = cljs.core.seq(vec__27227);
var first__27229 = cljs.core.first(seq__27228);
var seq__27228__$1 = cljs.core.next(seq__27228);
var nn = first__27229;
var first__27229__$1 = cljs.core.first(seq__27228__$1);
var seq__27228__$2 = cljs.core.next(seq__27228__$1);
var np = first__27229__$1;
var nc = seq__27228__$2;
var node = vec__27227;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__27247 = nn;
var G__27248 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__27247,G__27248) : create_fn.call(null,G__27247,G__27248));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__27250 = nn;
var G__27251 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__27250,G__27251) : create_fn.call(null,G__27250,G__27251));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__27264 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27264,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27264,(1),null);
var seq__27268_28807 = cljs.core.seq(node_children);
var chunk__27269_28808 = null;
var count__27270_28809 = (0);
var i__27271_28810 = (0);
while(true){
if((i__27271_28810 < count__27270_28809)){
var child_struct_28812 = chunk__27269_28808.cljs$core$IIndexed$_nth$arity$2(null,i__27271_28810);
var children_28814 = shadow.dom.dom_node(child_struct_28812);
if(cljs.core.seq_QMARK_(children_28814)){
var seq__27349_28815 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_28814));
var chunk__27351_28816 = null;
var count__27352_28817 = (0);
var i__27353_28818 = (0);
while(true){
if((i__27353_28818 < count__27352_28817)){
var child_28822 = chunk__27351_28816.cljs$core$IIndexed$_nth$arity$2(null,i__27353_28818);
if(cljs.core.truth_(child_28822)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28822);


var G__28824 = seq__27349_28815;
var G__28825 = chunk__27351_28816;
var G__28826 = count__27352_28817;
var G__28827 = (i__27353_28818 + (1));
seq__27349_28815 = G__28824;
chunk__27351_28816 = G__28825;
count__27352_28817 = G__28826;
i__27353_28818 = G__28827;
continue;
} else {
var G__28829 = seq__27349_28815;
var G__28830 = chunk__27351_28816;
var G__28831 = count__27352_28817;
var G__28832 = (i__27353_28818 + (1));
seq__27349_28815 = G__28829;
chunk__27351_28816 = G__28830;
count__27352_28817 = G__28831;
i__27353_28818 = G__28832;
continue;
}
} else {
var temp__5825__auto___28834 = cljs.core.seq(seq__27349_28815);
if(temp__5825__auto___28834){
var seq__27349_28836__$1 = temp__5825__auto___28834;
if(cljs.core.chunked_seq_QMARK_(seq__27349_28836__$1)){
var c__5548__auto___28845 = cljs.core.chunk_first(seq__27349_28836__$1);
var G__28846 = cljs.core.chunk_rest(seq__27349_28836__$1);
var G__28847 = c__5548__auto___28845;
var G__28848 = cljs.core.count(c__5548__auto___28845);
var G__28849 = (0);
seq__27349_28815 = G__28846;
chunk__27351_28816 = G__28847;
count__27352_28817 = G__28848;
i__27353_28818 = G__28849;
continue;
} else {
var child_28850 = cljs.core.first(seq__27349_28836__$1);
if(cljs.core.truth_(child_28850)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28850);


var G__28851 = cljs.core.next(seq__27349_28836__$1);
var G__28852 = null;
var G__28853 = (0);
var G__28854 = (0);
seq__27349_28815 = G__28851;
chunk__27351_28816 = G__28852;
count__27352_28817 = G__28853;
i__27353_28818 = G__28854;
continue;
} else {
var G__28855 = cljs.core.next(seq__27349_28836__$1);
var G__28856 = null;
var G__28857 = (0);
var G__28858 = (0);
seq__27349_28815 = G__28855;
chunk__27351_28816 = G__28856;
count__27352_28817 = G__28857;
i__27353_28818 = G__28858;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_28814);
}


var G__28859 = seq__27268_28807;
var G__28860 = chunk__27269_28808;
var G__28861 = count__27270_28809;
var G__28862 = (i__27271_28810 + (1));
seq__27268_28807 = G__28859;
chunk__27269_28808 = G__28860;
count__27270_28809 = G__28861;
i__27271_28810 = G__28862;
continue;
} else {
var temp__5825__auto___28866 = cljs.core.seq(seq__27268_28807);
if(temp__5825__auto___28866){
var seq__27268_28867__$1 = temp__5825__auto___28866;
if(cljs.core.chunked_seq_QMARK_(seq__27268_28867__$1)){
var c__5548__auto___28868 = cljs.core.chunk_first(seq__27268_28867__$1);
var G__28869 = cljs.core.chunk_rest(seq__27268_28867__$1);
var G__28870 = c__5548__auto___28868;
var G__28871 = cljs.core.count(c__5548__auto___28868);
var G__28872 = (0);
seq__27268_28807 = G__28869;
chunk__27269_28808 = G__28870;
count__27270_28809 = G__28871;
i__27271_28810 = G__28872;
continue;
} else {
var child_struct_28874 = cljs.core.first(seq__27268_28867__$1);
var children_28875 = shadow.dom.dom_node(child_struct_28874);
if(cljs.core.seq_QMARK_(children_28875)){
var seq__27380_28876 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_28875));
var chunk__27382_28877 = null;
var count__27383_28878 = (0);
var i__27384_28879 = (0);
while(true){
if((i__27384_28879 < count__27383_28878)){
var child_28880 = chunk__27382_28877.cljs$core$IIndexed$_nth$arity$2(null,i__27384_28879);
if(cljs.core.truth_(child_28880)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28880);


var G__28881 = seq__27380_28876;
var G__28882 = chunk__27382_28877;
var G__28883 = count__27383_28878;
var G__28884 = (i__27384_28879 + (1));
seq__27380_28876 = G__28881;
chunk__27382_28877 = G__28882;
count__27383_28878 = G__28883;
i__27384_28879 = G__28884;
continue;
} else {
var G__28885 = seq__27380_28876;
var G__28886 = chunk__27382_28877;
var G__28887 = count__27383_28878;
var G__28888 = (i__27384_28879 + (1));
seq__27380_28876 = G__28885;
chunk__27382_28877 = G__28886;
count__27383_28878 = G__28887;
i__27384_28879 = G__28888;
continue;
}
} else {
var temp__5825__auto___28889__$1 = cljs.core.seq(seq__27380_28876);
if(temp__5825__auto___28889__$1){
var seq__27380_28890__$1 = temp__5825__auto___28889__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27380_28890__$1)){
var c__5548__auto___28891 = cljs.core.chunk_first(seq__27380_28890__$1);
var G__28894 = cljs.core.chunk_rest(seq__27380_28890__$1);
var G__28895 = c__5548__auto___28891;
var G__28896 = cljs.core.count(c__5548__auto___28891);
var G__28897 = (0);
seq__27380_28876 = G__28894;
chunk__27382_28877 = G__28895;
count__27383_28878 = G__28896;
i__27384_28879 = G__28897;
continue;
} else {
var child_28898 = cljs.core.first(seq__27380_28890__$1);
if(cljs.core.truth_(child_28898)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28898);


var G__28901 = cljs.core.next(seq__27380_28890__$1);
var G__28902 = null;
var G__28903 = (0);
var G__28904 = (0);
seq__27380_28876 = G__28901;
chunk__27382_28877 = G__28902;
count__27383_28878 = G__28903;
i__27384_28879 = G__28904;
continue;
} else {
var G__28905 = cljs.core.next(seq__27380_28890__$1);
var G__28906 = null;
var G__28907 = (0);
var G__28908 = (0);
seq__27380_28876 = G__28905;
chunk__27382_28877 = G__28906;
count__27383_28878 = G__28907;
i__27384_28879 = G__28908;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_28875);
}


var G__28909 = cljs.core.next(seq__27268_28867__$1);
var G__28910 = null;
var G__28911 = (0);
var G__28912 = (0);
seq__27268_28807 = G__28909;
chunk__27269_28808 = G__28910;
count__27270_28809 = G__28911;
i__27271_28810 = G__28912;
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
var seq__27417 = cljs.core.seq(node);
var chunk__27418 = null;
var count__27419 = (0);
var i__27420 = (0);
while(true){
if((i__27420 < count__27419)){
var n = chunk__27418.cljs$core$IIndexed$_nth$arity$2(null,i__27420);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__28938 = seq__27417;
var G__28939 = chunk__27418;
var G__28940 = count__27419;
var G__28941 = (i__27420 + (1));
seq__27417 = G__28938;
chunk__27418 = G__28939;
count__27419 = G__28940;
i__27420 = G__28941;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27417);
if(temp__5825__auto__){
var seq__27417__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27417__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__27417__$1);
var G__28948 = cljs.core.chunk_rest(seq__27417__$1);
var G__28950 = c__5548__auto__;
var G__28951 = cljs.core.count(c__5548__auto__);
var G__28952 = (0);
seq__27417 = G__28948;
chunk__27418 = G__28950;
count__27419 = G__28951;
i__27420 = G__28952;
continue;
} else {
var n = cljs.core.first(seq__27417__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__28958 = cljs.core.next(seq__27417__$1);
var G__28959 = null;
var G__28960 = (0);
var G__28961 = (0);
seq__27417 = G__28958;
chunk__27418 = G__28959;
count__27419 = G__28960;
i__27420 = G__28961;
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
var G__27443 = arguments.length;
switch (G__27443) {
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
var G__27450 = arguments.length;
switch (G__27450) {
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
var G__27487 = arguments.length;
switch (G__27487) {
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
var len__5749__auto___28995 = arguments.length;
var i__5750__auto___28996 = (0);
while(true){
if((i__5750__auto___28996 < len__5749__auto___28995)){
args__5755__auto__.push((arguments[i__5750__auto___28996]));

var G__28997 = (i__5750__auto___28996 + (1));
i__5750__auto___28996 = G__28997;
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
var seq__27529_28998 = cljs.core.seq(nodes);
var chunk__27530_28999 = null;
var count__27531_29000 = (0);
var i__27532_29001 = (0);
while(true){
if((i__27532_29001 < count__27531_29000)){
var node_29002 = chunk__27530_28999.cljs$core$IIndexed$_nth$arity$2(null,i__27532_29001);
fragment.appendChild(shadow.dom._to_dom(node_29002));


var G__29004 = seq__27529_28998;
var G__29005 = chunk__27530_28999;
var G__29006 = count__27531_29000;
var G__29007 = (i__27532_29001 + (1));
seq__27529_28998 = G__29004;
chunk__27530_28999 = G__29005;
count__27531_29000 = G__29006;
i__27532_29001 = G__29007;
continue;
} else {
var temp__5825__auto___29008 = cljs.core.seq(seq__27529_28998);
if(temp__5825__auto___29008){
var seq__27529_29009__$1 = temp__5825__auto___29008;
if(cljs.core.chunked_seq_QMARK_(seq__27529_29009__$1)){
var c__5548__auto___29010 = cljs.core.chunk_first(seq__27529_29009__$1);
var G__29011 = cljs.core.chunk_rest(seq__27529_29009__$1);
var G__29012 = c__5548__auto___29010;
var G__29013 = cljs.core.count(c__5548__auto___29010);
var G__29014 = (0);
seq__27529_28998 = G__29011;
chunk__27530_28999 = G__29012;
count__27531_29000 = G__29013;
i__27532_29001 = G__29014;
continue;
} else {
var node_29015 = cljs.core.first(seq__27529_29009__$1);
fragment.appendChild(shadow.dom._to_dom(node_29015));


var G__29016 = cljs.core.next(seq__27529_29009__$1);
var G__29017 = null;
var G__29018 = (0);
var G__29019 = (0);
seq__27529_28998 = G__29016;
chunk__27530_28999 = G__29017;
count__27531_29000 = G__29018;
i__27532_29001 = G__29019;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq27510){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27510));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__27585_29020 = cljs.core.seq(scripts);
var chunk__27586_29021 = null;
var count__27587_29022 = (0);
var i__27588_29023 = (0);
while(true){
if((i__27588_29023 < count__27587_29022)){
var vec__27616_29025 = chunk__27586_29021.cljs$core$IIndexed$_nth$arity$2(null,i__27588_29023);
var script_tag_29026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27616_29025,(0),null);
var script_body_29027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27616_29025,(1),null);
eval(script_body_29027);


var G__29029 = seq__27585_29020;
var G__29030 = chunk__27586_29021;
var G__29031 = count__27587_29022;
var G__29032 = (i__27588_29023 + (1));
seq__27585_29020 = G__29029;
chunk__27586_29021 = G__29030;
count__27587_29022 = G__29031;
i__27588_29023 = G__29032;
continue;
} else {
var temp__5825__auto___29033 = cljs.core.seq(seq__27585_29020);
if(temp__5825__auto___29033){
var seq__27585_29034__$1 = temp__5825__auto___29033;
if(cljs.core.chunked_seq_QMARK_(seq__27585_29034__$1)){
var c__5548__auto___29035 = cljs.core.chunk_first(seq__27585_29034__$1);
var G__29036 = cljs.core.chunk_rest(seq__27585_29034__$1);
var G__29037 = c__5548__auto___29035;
var G__29038 = cljs.core.count(c__5548__auto___29035);
var G__29039 = (0);
seq__27585_29020 = G__29036;
chunk__27586_29021 = G__29037;
count__27587_29022 = G__29038;
i__27588_29023 = G__29039;
continue;
} else {
var vec__27624_29041 = cljs.core.first(seq__27585_29034__$1);
var script_tag_29042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27624_29041,(0),null);
var script_body_29043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27624_29041,(1),null);
eval(script_body_29043);


var G__29044 = cljs.core.next(seq__27585_29034__$1);
var G__29045 = null;
var G__29046 = (0);
var G__29047 = (0);
seq__27585_29020 = G__29044;
chunk__27586_29021 = G__29045;
count__27587_29022 = G__29046;
i__27588_29023 = G__29047;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__27628){
var vec__27633 = p__27628;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27633,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27633,(1),null);
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
var G__27648 = arguments.length;
switch (G__27648) {
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
var seq__27682 = cljs.core.seq(style_keys);
var chunk__27683 = null;
var count__27684 = (0);
var i__27685 = (0);
while(true){
if((i__27685 < count__27684)){
var it = chunk__27683.cljs$core$IIndexed$_nth$arity$2(null,i__27685);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29063 = seq__27682;
var G__29064 = chunk__27683;
var G__29065 = count__27684;
var G__29066 = (i__27685 + (1));
seq__27682 = G__29063;
chunk__27683 = G__29064;
count__27684 = G__29065;
i__27685 = G__29066;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27682);
if(temp__5825__auto__){
var seq__27682__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27682__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__27682__$1);
var G__29071 = cljs.core.chunk_rest(seq__27682__$1);
var G__29072 = c__5548__auto__;
var G__29073 = cljs.core.count(c__5548__auto__);
var G__29074 = (0);
seq__27682 = G__29071;
chunk__27683 = G__29072;
count__27684 = G__29073;
i__27685 = G__29074;
continue;
} else {
var it = cljs.core.first(seq__27682__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29077 = cljs.core.next(seq__27682__$1);
var G__29078 = null;
var G__29079 = (0);
var G__29080 = (0);
seq__27682 = G__29077;
chunk__27683 = G__29078;
count__27684 = G__29079;
i__27685 = G__29080;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k27695,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__27720 = k27695;
var G__27720__$1 = (((G__27720 instanceof cljs.core.Keyword))?G__27720.fqn:null);
switch (G__27720__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27695,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__27724){
var vec__27725 = p__27724;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27725,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27725,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27694){
var self__ = this;
var G__27694__$1 = this;
return (new cljs.core.RecordIter((0),G__27694__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27697,other27698){
var self__ = this;
var this27697__$1 = this;
return (((!((other27698 == null)))) && ((((this27697__$1.constructor === other27698.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27697__$1.x,other27698.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27697__$1.y,other27698.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27697__$1.__extmap,other27698.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k27695){
var self__ = this;
var this__5330__auto____$1 = this;
var G__27755 = k27695;
var G__27755__$1 = (((G__27755 instanceof cljs.core.Keyword))?G__27755.fqn:null);
switch (G__27755__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k27695);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__27694){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__27761 = cljs.core.keyword_identical_QMARK_;
var expr__27762 = k__5332__auto__;
if(cljs.core.truth_((pred__27761.cljs$core$IFn$_invoke$arity$2 ? pred__27761.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__27762) : pred__27761.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__27762)))){
return (new shadow.dom.Coordinate(G__27694,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27761.cljs$core$IFn$_invoke$arity$2 ? pred__27761.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__27762) : pred__27761.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__27762)))){
return (new shadow.dom.Coordinate(self__.x,G__27694,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__27694),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__27694){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__27694,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__27708){
var extmap__5365__auto__ = (function (){var G__27780 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27708,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__27708)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27780);
} else {
return G__27780;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__27708),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__27708),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k27796,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__27805 = k27796;
var G__27805__$1 = (((G__27805 instanceof cljs.core.Keyword))?G__27805.fqn:null);
switch (G__27805__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27796,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__27809){
var vec__27810 = p__27809;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27810,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27810,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27795){
var self__ = this;
var G__27795__$1 = this;
return (new cljs.core.RecordIter((0),G__27795__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27797,other27798){
var self__ = this;
var this27797__$1 = this;
return (((!((other27798 == null)))) && ((((this27797__$1.constructor === other27798.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27797__$1.w,other27798.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27797__$1.h,other27798.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27797__$1.__extmap,other27798.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k27796){
var self__ = this;
var this__5330__auto____$1 = this;
var G__27853 = k27796;
var G__27853__$1 = (((G__27853 instanceof cljs.core.Keyword))?G__27853.fqn:null);
switch (G__27853__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k27796);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__27795){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__27856 = cljs.core.keyword_identical_QMARK_;
var expr__27857 = k__5332__auto__;
if(cljs.core.truth_((pred__27856.cljs$core$IFn$_invoke$arity$2 ? pred__27856.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__27857) : pred__27856.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__27857)))){
return (new shadow.dom.Size(G__27795,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27856.cljs$core$IFn$_invoke$arity$2 ? pred__27856.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__27857) : pred__27856.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__27857)))){
return (new shadow.dom.Size(self__.w,G__27795,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__27795),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__27795){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__27795,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__27801){
var extmap__5365__auto__ = (function (){var G__27871 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27801,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__27801)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27871);
} else {
return G__27871;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__27801),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__27801),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__29181 = (i + (1));
var G__29182 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__29181;
ret = G__29182;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27920){
var vec__27921 = p__27920;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27921,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27921,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__27941 = arguments.length;
switch (G__27941) {
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
var G__29192 = ps;
var G__29193 = (i + (1));
el__$1 = G__29192;
i = G__29193;
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
var vec__28088 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28088,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28088,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28088,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__28094_29205 = cljs.core.seq(props);
var chunk__28095_29206 = null;
var count__28096_29207 = (0);
var i__28097_29208 = (0);
while(true){
if((i__28097_29208 < count__28096_29207)){
var vec__28157_29209 = chunk__28095_29206.cljs$core$IIndexed$_nth$arity$2(null,i__28097_29208);
var k_29210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28157_29209,(0),null);
var v_29211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28157_29209,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_29210);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29210),v_29211);


var G__29212 = seq__28094_29205;
var G__29213 = chunk__28095_29206;
var G__29214 = count__28096_29207;
var G__29215 = (i__28097_29208 + (1));
seq__28094_29205 = G__29212;
chunk__28095_29206 = G__29213;
count__28096_29207 = G__29214;
i__28097_29208 = G__29215;
continue;
} else {
var temp__5825__auto___29220 = cljs.core.seq(seq__28094_29205);
if(temp__5825__auto___29220){
var seq__28094_29221__$1 = temp__5825__auto___29220;
if(cljs.core.chunked_seq_QMARK_(seq__28094_29221__$1)){
var c__5548__auto___29222 = cljs.core.chunk_first(seq__28094_29221__$1);
var G__29227 = cljs.core.chunk_rest(seq__28094_29221__$1);
var G__29228 = c__5548__auto___29222;
var G__29229 = cljs.core.count(c__5548__auto___29222);
var G__29230 = (0);
seq__28094_29205 = G__29227;
chunk__28095_29206 = G__29228;
count__28096_29207 = G__29229;
i__28097_29208 = G__29230;
continue;
} else {
var vec__28174_29235 = cljs.core.first(seq__28094_29221__$1);
var k_29236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28174_29235,(0),null);
var v_29237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28174_29235,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_29236);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29236),v_29237);


var G__29238 = cljs.core.next(seq__28094_29221__$1);
var G__29239 = null;
var G__29240 = (0);
var G__29241 = (0);
seq__28094_29205 = G__29238;
chunk__28095_29206 = G__29239;
count__28096_29207 = G__29240;
i__28097_29208 = G__29241;
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
var vec__28209 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28209,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28209,(1),null);
var seq__28213_29242 = cljs.core.seq(node_children);
var chunk__28215_29243 = null;
var count__28216_29244 = (0);
var i__28217_29245 = (0);
while(true){
if((i__28217_29245 < count__28216_29244)){
var child_struct_29246 = chunk__28215_29243.cljs$core$IIndexed$_nth$arity$2(null,i__28217_29245);
if((!((child_struct_29246 == null)))){
if(typeof child_struct_29246 === 'string'){
var text_29247 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29247),child_struct_29246].join(''));
} else {
var children_29248 = shadow.dom.svg_node(child_struct_29246);
if(cljs.core.seq_QMARK_(children_29248)){
var seq__28384_29249 = cljs.core.seq(children_29248);
var chunk__28386_29250 = null;
var count__28387_29251 = (0);
var i__28388_29252 = (0);
while(true){
if((i__28388_29252 < count__28387_29251)){
var child_29253 = chunk__28386_29250.cljs$core$IIndexed$_nth$arity$2(null,i__28388_29252);
if(cljs.core.truth_(child_29253)){
node.appendChild(child_29253);


var G__29254 = seq__28384_29249;
var G__29255 = chunk__28386_29250;
var G__29256 = count__28387_29251;
var G__29257 = (i__28388_29252 + (1));
seq__28384_29249 = G__29254;
chunk__28386_29250 = G__29255;
count__28387_29251 = G__29256;
i__28388_29252 = G__29257;
continue;
} else {
var G__29258 = seq__28384_29249;
var G__29259 = chunk__28386_29250;
var G__29260 = count__28387_29251;
var G__29261 = (i__28388_29252 + (1));
seq__28384_29249 = G__29258;
chunk__28386_29250 = G__29259;
count__28387_29251 = G__29260;
i__28388_29252 = G__29261;
continue;
}
} else {
var temp__5825__auto___29266 = cljs.core.seq(seq__28384_29249);
if(temp__5825__auto___29266){
var seq__28384_29267__$1 = temp__5825__auto___29266;
if(cljs.core.chunked_seq_QMARK_(seq__28384_29267__$1)){
var c__5548__auto___29268 = cljs.core.chunk_first(seq__28384_29267__$1);
var G__29269 = cljs.core.chunk_rest(seq__28384_29267__$1);
var G__29270 = c__5548__auto___29268;
var G__29271 = cljs.core.count(c__5548__auto___29268);
var G__29272 = (0);
seq__28384_29249 = G__29269;
chunk__28386_29250 = G__29270;
count__28387_29251 = G__29271;
i__28388_29252 = G__29272;
continue;
} else {
var child_29278 = cljs.core.first(seq__28384_29267__$1);
if(cljs.core.truth_(child_29278)){
node.appendChild(child_29278);


var G__29279 = cljs.core.next(seq__28384_29267__$1);
var G__29280 = null;
var G__29281 = (0);
var G__29282 = (0);
seq__28384_29249 = G__29279;
chunk__28386_29250 = G__29280;
count__28387_29251 = G__29281;
i__28388_29252 = G__29282;
continue;
} else {
var G__29283 = cljs.core.next(seq__28384_29267__$1);
var G__29284 = null;
var G__29285 = (0);
var G__29286 = (0);
seq__28384_29249 = G__29283;
chunk__28386_29250 = G__29284;
count__28387_29251 = G__29285;
i__28388_29252 = G__29286;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29248);
}
}


var G__29287 = seq__28213_29242;
var G__29288 = chunk__28215_29243;
var G__29289 = count__28216_29244;
var G__29290 = (i__28217_29245 + (1));
seq__28213_29242 = G__29287;
chunk__28215_29243 = G__29288;
count__28216_29244 = G__29289;
i__28217_29245 = G__29290;
continue;
} else {
var G__29291 = seq__28213_29242;
var G__29292 = chunk__28215_29243;
var G__29293 = count__28216_29244;
var G__29294 = (i__28217_29245 + (1));
seq__28213_29242 = G__29291;
chunk__28215_29243 = G__29292;
count__28216_29244 = G__29293;
i__28217_29245 = G__29294;
continue;
}
} else {
var temp__5825__auto___29295 = cljs.core.seq(seq__28213_29242);
if(temp__5825__auto___29295){
var seq__28213_29296__$1 = temp__5825__auto___29295;
if(cljs.core.chunked_seq_QMARK_(seq__28213_29296__$1)){
var c__5548__auto___29297 = cljs.core.chunk_first(seq__28213_29296__$1);
var G__29298 = cljs.core.chunk_rest(seq__28213_29296__$1);
var G__29299 = c__5548__auto___29297;
var G__29300 = cljs.core.count(c__5548__auto___29297);
var G__29301 = (0);
seq__28213_29242 = G__29298;
chunk__28215_29243 = G__29299;
count__28216_29244 = G__29300;
i__28217_29245 = G__29301;
continue;
} else {
var child_struct_29302 = cljs.core.first(seq__28213_29296__$1);
if((!((child_struct_29302 == null)))){
if(typeof child_struct_29302 === 'string'){
var text_29307 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29307),child_struct_29302].join(''));
} else {
var children_29308 = shadow.dom.svg_node(child_struct_29302);
if(cljs.core.seq_QMARK_(children_29308)){
var seq__28435_29309 = cljs.core.seq(children_29308);
var chunk__28437_29310 = null;
var count__28438_29311 = (0);
var i__28439_29312 = (0);
while(true){
if((i__28439_29312 < count__28438_29311)){
var child_29313 = chunk__28437_29310.cljs$core$IIndexed$_nth$arity$2(null,i__28439_29312);
if(cljs.core.truth_(child_29313)){
node.appendChild(child_29313);


var G__29314 = seq__28435_29309;
var G__29315 = chunk__28437_29310;
var G__29316 = count__28438_29311;
var G__29317 = (i__28439_29312 + (1));
seq__28435_29309 = G__29314;
chunk__28437_29310 = G__29315;
count__28438_29311 = G__29316;
i__28439_29312 = G__29317;
continue;
} else {
var G__29318 = seq__28435_29309;
var G__29319 = chunk__28437_29310;
var G__29320 = count__28438_29311;
var G__29321 = (i__28439_29312 + (1));
seq__28435_29309 = G__29318;
chunk__28437_29310 = G__29319;
count__28438_29311 = G__29320;
i__28439_29312 = G__29321;
continue;
}
} else {
var temp__5825__auto___29322__$1 = cljs.core.seq(seq__28435_29309);
if(temp__5825__auto___29322__$1){
var seq__28435_29323__$1 = temp__5825__auto___29322__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28435_29323__$1)){
var c__5548__auto___29328 = cljs.core.chunk_first(seq__28435_29323__$1);
var G__29329 = cljs.core.chunk_rest(seq__28435_29323__$1);
var G__29330 = c__5548__auto___29328;
var G__29331 = cljs.core.count(c__5548__auto___29328);
var G__29332 = (0);
seq__28435_29309 = G__29329;
chunk__28437_29310 = G__29330;
count__28438_29311 = G__29331;
i__28439_29312 = G__29332;
continue;
} else {
var child_29333 = cljs.core.first(seq__28435_29323__$1);
if(cljs.core.truth_(child_29333)){
node.appendChild(child_29333);


var G__29334 = cljs.core.next(seq__28435_29323__$1);
var G__29335 = null;
var G__29336 = (0);
var G__29337 = (0);
seq__28435_29309 = G__29334;
chunk__28437_29310 = G__29335;
count__28438_29311 = G__29336;
i__28439_29312 = G__29337;
continue;
} else {
var G__29338 = cljs.core.next(seq__28435_29323__$1);
var G__29339 = null;
var G__29340 = (0);
var G__29341 = (0);
seq__28435_29309 = G__29338;
chunk__28437_29310 = G__29339;
count__28438_29311 = G__29340;
i__28439_29312 = G__29341;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29308);
}
}


var G__29342 = cljs.core.next(seq__28213_29296__$1);
var G__29343 = null;
var G__29344 = (0);
var G__29345 = (0);
seq__28213_29242 = G__29342;
chunk__28215_29243 = G__29343;
count__28216_29244 = G__29344;
i__28217_29245 = G__29345;
continue;
} else {
var G__29346 = cljs.core.next(seq__28213_29296__$1);
var G__29347 = null;
var G__29348 = (0);
var G__29349 = (0);
seq__28213_29242 = G__29346;
chunk__28215_29243 = G__29347;
count__28216_29244 = G__29348;
i__28217_29245 = G__29349;
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
var len__5749__auto___29361 = arguments.length;
var i__5750__auto___29362 = (0);
while(true){
if((i__5750__auto___29362 < len__5749__auto___29361)){
args__5755__auto__.push((arguments[i__5750__auto___29362]));

var G__29363 = (i__5750__auto___29362 + (1));
i__5750__auto___29362 = G__29363;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq28542){
var G__28543 = cljs.core.first(seq28542);
var seq28542__$1 = cljs.core.next(seq28542);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28543,seq28542__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
