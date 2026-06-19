goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_28679 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_28679(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_28685 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_28685(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__26781 = coll;
var G__26782 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__26781,G__26782) : shadow.dom.lazy_native_coll_seq.call(null,G__26781,G__26782));
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
var G__26810 = arguments.length;
switch (G__26810) {
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
var G__26814 = arguments.length;
switch (G__26814) {
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
var G__26822 = arguments.length;
switch (G__26822) {
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
var G__26837 = arguments.length;
switch (G__26837) {
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
var G__26847 = arguments.length;
switch (G__26847) {
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
var G__26864 = arguments.length;
switch (G__26864) {
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
}catch (e26873){if((e26873 instanceof Object)){
var e = e26873;
return console.log("didnt support attachEvent",el,e);
} else {
throw e26873;

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
var seq__26904 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__26905 = null;
var count__26906 = (0);
var i__26907 = (0);
while(true){
if((i__26907 < count__26906)){
var el = chunk__26905.cljs$core$IIndexed$_nth$arity$2(null,i__26907);
var handler_28719__$1 = ((function (seq__26904,chunk__26905,count__26906,i__26907,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__26904,chunk__26905,count__26906,i__26907,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_28719__$1);


var G__28720 = seq__26904;
var G__28721 = chunk__26905;
var G__28722 = count__26906;
var G__28723 = (i__26907 + (1));
seq__26904 = G__28720;
chunk__26905 = G__28721;
count__26906 = G__28722;
i__26907 = G__28723;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26904);
if(temp__5825__auto__){
var seq__26904__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26904__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26904__$1);
var G__28724 = cljs.core.chunk_rest(seq__26904__$1);
var G__28725 = c__5548__auto__;
var G__28726 = cljs.core.count(c__5548__auto__);
var G__28727 = (0);
seq__26904 = G__28724;
chunk__26905 = G__28725;
count__26906 = G__28726;
i__26907 = G__28727;
continue;
} else {
var el = cljs.core.first(seq__26904__$1);
var handler_28728__$1 = ((function (seq__26904,chunk__26905,count__26906,i__26907,el,seq__26904__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__26904,chunk__26905,count__26906,i__26907,el,seq__26904__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_28728__$1);


var G__28729 = cljs.core.next(seq__26904__$1);
var G__28730 = null;
var G__28731 = (0);
var G__28732 = (0);
seq__26904 = G__28729;
chunk__26905 = G__28730;
count__26906 = G__28731;
i__26907 = G__28732;
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
var G__26960 = arguments.length;
switch (G__26960) {
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
var seq__26981 = cljs.core.seq(events);
var chunk__26982 = null;
var count__26983 = (0);
var i__26984 = (0);
while(true){
if((i__26984 < count__26983)){
var vec__27044 = chunk__26982.cljs$core$IIndexed$_nth$arity$2(null,i__26984);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27044,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27044,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__28753 = seq__26981;
var G__28754 = chunk__26982;
var G__28755 = count__26983;
var G__28756 = (i__26984 + (1));
seq__26981 = G__28753;
chunk__26982 = G__28754;
count__26983 = G__28755;
i__26984 = G__28756;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26981);
if(temp__5825__auto__){
var seq__26981__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26981__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26981__$1);
var G__28759 = cljs.core.chunk_rest(seq__26981__$1);
var G__28760 = c__5548__auto__;
var G__28761 = cljs.core.count(c__5548__auto__);
var G__28762 = (0);
seq__26981 = G__28759;
chunk__26982 = G__28760;
count__26983 = G__28761;
i__26984 = G__28762;
continue;
} else {
var vec__27051 = cljs.core.first(seq__26981__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27051,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27051,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__28763 = cljs.core.next(seq__26981__$1);
var G__28764 = null;
var G__28765 = (0);
var G__28766 = (0);
seq__26981 = G__28763;
chunk__26982 = G__28764;
count__26983 = G__28765;
i__26984 = G__28766;
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
var seq__27064 = cljs.core.seq(styles);
var chunk__27065 = null;
var count__27066 = (0);
var i__27067 = (0);
while(true){
if((i__27067 < count__27066)){
var vec__27092 = chunk__27065.cljs$core$IIndexed$_nth$arity$2(null,i__27067);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27092,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27092,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__28771 = seq__27064;
var G__28772 = chunk__27065;
var G__28773 = count__27066;
var G__28774 = (i__27067 + (1));
seq__27064 = G__28771;
chunk__27065 = G__28772;
count__27066 = G__28773;
i__27067 = G__28774;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27064);
if(temp__5825__auto__){
var seq__27064__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27064__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__27064__$1);
var G__28776 = cljs.core.chunk_rest(seq__27064__$1);
var G__28777 = c__5548__auto__;
var G__28778 = cljs.core.count(c__5548__auto__);
var G__28779 = (0);
seq__27064 = G__28776;
chunk__27065 = G__28777;
count__27066 = G__28778;
i__27067 = G__28779;
continue;
} else {
var vec__27108 = cljs.core.first(seq__27064__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27108,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27108,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__28786 = cljs.core.next(seq__27064__$1);
var G__28787 = null;
var G__28788 = (0);
var G__28789 = (0);
seq__27064 = G__28786;
chunk__27065 = G__28787;
count__27066 = G__28788;
i__27067 = G__28789;
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
var G__27148_28793 = key;
var G__27148_28794__$1 = (((G__27148_28793 instanceof cljs.core.Keyword))?G__27148_28793.fqn:null);
switch (G__27148_28794__$1) {
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
var ks_28817 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_28817,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_28817,"aria-");
}
})())){
el.setAttribute(ks_28817,value);
} else {
(el[ks_28817] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__27213){
var map__27216 = p__27213;
var map__27216__$1 = cljs.core.__destructure_map(map__27216);
var props = map__27216__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27216__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__27228 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27228,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27228,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27228,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__27238 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__27238,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__27238;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__27240 = arguments.length;
switch (G__27240) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__27250){
var vec__27254 = p__27250;
var seq__27255 = cljs.core.seq(vec__27254);
var first__27256 = cljs.core.first(seq__27255);
var seq__27255__$1 = cljs.core.next(seq__27255);
var nn = first__27256;
var first__27256__$1 = cljs.core.first(seq__27255__$1);
var seq__27255__$2 = cljs.core.next(seq__27255__$1);
var np = first__27256__$1;
var nc = seq__27255__$2;
var node = vec__27254;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__27265 = nn;
var G__27266 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__27265,G__27266) : create_fn.call(null,G__27265,G__27266));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__27270 = nn;
var G__27271 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__27270,G__27271) : create_fn.call(null,G__27270,G__27271));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__27274 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27274,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27274,(1),null);
var seq__27278_28839 = cljs.core.seq(node_children);
var chunk__27279_28840 = null;
var count__27280_28841 = (0);
var i__27281_28842 = (0);
while(true){
if((i__27281_28842 < count__27280_28841)){
var child_struct_28843 = chunk__27279_28840.cljs$core$IIndexed$_nth$arity$2(null,i__27281_28842);
var children_28844 = shadow.dom.dom_node(child_struct_28843);
if(cljs.core.seq_QMARK_(children_28844)){
var seq__27360_28845 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_28844));
var chunk__27362_28846 = null;
var count__27363_28847 = (0);
var i__27364_28848 = (0);
while(true){
if((i__27364_28848 < count__27363_28847)){
var child_28849 = chunk__27362_28846.cljs$core$IIndexed$_nth$arity$2(null,i__27364_28848);
if(cljs.core.truth_(child_28849)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28849);


var G__28850 = seq__27360_28845;
var G__28851 = chunk__27362_28846;
var G__28852 = count__27363_28847;
var G__28853 = (i__27364_28848 + (1));
seq__27360_28845 = G__28850;
chunk__27362_28846 = G__28851;
count__27363_28847 = G__28852;
i__27364_28848 = G__28853;
continue;
} else {
var G__28854 = seq__27360_28845;
var G__28855 = chunk__27362_28846;
var G__28856 = count__27363_28847;
var G__28857 = (i__27364_28848 + (1));
seq__27360_28845 = G__28854;
chunk__27362_28846 = G__28855;
count__27363_28847 = G__28856;
i__27364_28848 = G__28857;
continue;
}
} else {
var temp__5825__auto___28866 = cljs.core.seq(seq__27360_28845);
if(temp__5825__auto___28866){
var seq__27360_28867__$1 = temp__5825__auto___28866;
if(cljs.core.chunked_seq_QMARK_(seq__27360_28867__$1)){
var c__5548__auto___28868 = cljs.core.chunk_first(seq__27360_28867__$1);
var G__28869 = cljs.core.chunk_rest(seq__27360_28867__$1);
var G__28870 = c__5548__auto___28868;
var G__28871 = cljs.core.count(c__5548__auto___28868);
var G__28872 = (0);
seq__27360_28845 = G__28869;
chunk__27362_28846 = G__28870;
count__27363_28847 = G__28871;
i__27364_28848 = G__28872;
continue;
} else {
var child_28874 = cljs.core.first(seq__27360_28867__$1);
if(cljs.core.truth_(child_28874)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28874);


var G__28877 = cljs.core.next(seq__27360_28867__$1);
var G__28878 = null;
var G__28879 = (0);
var G__28880 = (0);
seq__27360_28845 = G__28877;
chunk__27362_28846 = G__28878;
count__27363_28847 = G__28879;
i__27364_28848 = G__28880;
continue;
} else {
var G__28882 = cljs.core.next(seq__27360_28867__$1);
var G__28883 = null;
var G__28884 = (0);
var G__28885 = (0);
seq__27360_28845 = G__28882;
chunk__27362_28846 = G__28883;
count__27363_28847 = G__28884;
i__27364_28848 = G__28885;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_28844);
}


var G__28886 = seq__27278_28839;
var G__28887 = chunk__27279_28840;
var G__28888 = count__27280_28841;
var G__28889 = (i__27281_28842 + (1));
seq__27278_28839 = G__28886;
chunk__27279_28840 = G__28887;
count__27280_28841 = G__28888;
i__27281_28842 = G__28889;
continue;
} else {
var temp__5825__auto___28890 = cljs.core.seq(seq__27278_28839);
if(temp__5825__auto___28890){
var seq__27278_28892__$1 = temp__5825__auto___28890;
if(cljs.core.chunked_seq_QMARK_(seq__27278_28892__$1)){
var c__5548__auto___28893 = cljs.core.chunk_first(seq__27278_28892__$1);
var G__28894 = cljs.core.chunk_rest(seq__27278_28892__$1);
var G__28895 = c__5548__auto___28893;
var G__28896 = cljs.core.count(c__5548__auto___28893);
var G__28897 = (0);
seq__27278_28839 = G__28894;
chunk__27279_28840 = G__28895;
count__27280_28841 = G__28896;
i__27281_28842 = G__28897;
continue;
} else {
var child_struct_28898 = cljs.core.first(seq__27278_28892__$1);
var children_28899 = shadow.dom.dom_node(child_struct_28898);
if(cljs.core.seq_QMARK_(children_28899)){
var seq__27406_28900 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_28899));
var chunk__27408_28901 = null;
var count__27409_28902 = (0);
var i__27410_28904 = (0);
while(true){
if((i__27410_28904 < count__27409_28902)){
var child_28906 = chunk__27408_28901.cljs$core$IIndexed$_nth$arity$2(null,i__27410_28904);
if(cljs.core.truth_(child_28906)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28906);


var G__28907 = seq__27406_28900;
var G__28908 = chunk__27408_28901;
var G__28909 = count__27409_28902;
var G__28910 = (i__27410_28904 + (1));
seq__27406_28900 = G__28907;
chunk__27408_28901 = G__28908;
count__27409_28902 = G__28909;
i__27410_28904 = G__28910;
continue;
} else {
var G__28911 = seq__27406_28900;
var G__28912 = chunk__27408_28901;
var G__28913 = count__27409_28902;
var G__28914 = (i__27410_28904 + (1));
seq__27406_28900 = G__28911;
chunk__27408_28901 = G__28912;
count__27409_28902 = G__28913;
i__27410_28904 = G__28914;
continue;
}
} else {
var temp__5825__auto___28915__$1 = cljs.core.seq(seq__27406_28900);
if(temp__5825__auto___28915__$1){
var seq__27406_28916__$1 = temp__5825__auto___28915__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27406_28916__$1)){
var c__5548__auto___28918 = cljs.core.chunk_first(seq__27406_28916__$1);
var G__28919 = cljs.core.chunk_rest(seq__27406_28916__$1);
var G__28920 = c__5548__auto___28918;
var G__28921 = cljs.core.count(c__5548__auto___28918);
var G__28922 = (0);
seq__27406_28900 = G__28919;
chunk__27408_28901 = G__28920;
count__27409_28902 = G__28921;
i__27410_28904 = G__28922;
continue;
} else {
var child_28926 = cljs.core.first(seq__27406_28916__$1);
if(cljs.core.truth_(child_28926)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28926);


var G__28929 = cljs.core.next(seq__27406_28916__$1);
var G__28930 = null;
var G__28931 = (0);
var G__28932 = (0);
seq__27406_28900 = G__28929;
chunk__27408_28901 = G__28930;
count__27409_28902 = G__28931;
i__27410_28904 = G__28932;
continue;
} else {
var G__28933 = cljs.core.next(seq__27406_28916__$1);
var G__28934 = null;
var G__28935 = (0);
var G__28936 = (0);
seq__27406_28900 = G__28933;
chunk__27408_28901 = G__28934;
count__27409_28902 = G__28935;
i__27410_28904 = G__28936;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_28899);
}


var G__28939 = cljs.core.next(seq__27278_28892__$1);
var G__28940 = null;
var G__28941 = (0);
var G__28942 = (0);
seq__27278_28839 = G__28939;
chunk__27279_28840 = G__28940;
count__27280_28841 = G__28941;
i__27281_28842 = G__28942;
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
var seq__27493 = cljs.core.seq(node);
var chunk__27494 = null;
var count__27495 = (0);
var i__27496 = (0);
while(true){
if((i__27496 < count__27495)){
var n = chunk__27494.cljs$core$IIndexed$_nth$arity$2(null,i__27496);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__28949 = seq__27493;
var G__28950 = chunk__27494;
var G__28951 = count__27495;
var G__28952 = (i__27496 + (1));
seq__27493 = G__28949;
chunk__27494 = G__28950;
count__27495 = G__28951;
i__27496 = G__28952;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27493);
if(temp__5825__auto__){
var seq__27493__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27493__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__27493__$1);
var G__28954 = cljs.core.chunk_rest(seq__27493__$1);
var G__28955 = c__5548__auto__;
var G__28956 = cljs.core.count(c__5548__auto__);
var G__28957 = (0);
seq__27493 = G__28954;
chunk__27494 = G__28955;
count__27495 = G__28956;
i__27496 = G__28957;
continue;
} else {
var n = cljs.core.first(seq__27493__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__28960 = cljs.core.next(seq__27493__$1);
var G__28961 = null;
var G__28962 = (0);
var G__28963 = (0);
seq__27493 = G__28960;
chunk__27494 = G__28961;
count__27495 = G__28962;
i__27496 = G__28963;
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
var G__27536 = arguments.length;
switch (G__27536) {
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
var G__27544 = arguments.length;
switch (G__27544) {
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
var G__27577 = arguments.length;
switch (G__27577) {
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
var len__5749__auto___28997 = arguments.length;
var i__5750__auto___28998 = (0);
while(true){
if((i__5750__auto___28998 < len__5749__auto___28997)){
args__5755__auto__.push((arguments[i__5750__auto___28998]));

var G__28999 = (i__5750__auto___28998 + (1));
i__5750__auto___28998 = G__28999;
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
var seq__27597_29003 = cljs.core.seq(nodes);
var chunk__27598_29004 = null;
var count__27599_29005 = (0);
var i__27600_29006 = (0);
while(true){
if((i__27600_29006 < count__27599_29005)){
var node_29009 = chunk__27598_29004.cljs$core$IIndexed$_nth$arity$2(null,i__27600_29006);
fragment.appendChild(shadow.dom._to_dom(node_29009));


var G__29012 = seq__27597_29003;
var G__29013 = chunk__27598_29004;
var G__29014 = count__27599_29005;
var G__29015 = (i__27600_29006 + (1));
seq__27597_29003 = G__29012;
chunk__27598_29004 = G__29013;
count__27599_29005 = G__29014;
i__27600_29006 = G__29015;
continue;
} else {
var temp__5825__auto___29016 = cljs.core.seq(seq__27597_29003);
if(temp__5825__auto___29016){
var seq__27597_29017__$1 = temp__5825__auto___29016;
if(cljs.core.chunked_seq_QMARK_(seq__27597_29017__$1)){
var c__5548__auto___29021 = cljs.core.chunk_first(seq__27597_29017__$1);
var G__29022 = cljs.core.chunk_rest(seq__27597_29017__$1);
var G__29023 = c__5548__auto___29021;
var G__29024 = cljs.core.count(c__5548__auto___29021);
var G__29025 = (0);
seq__27597_29003 = G__29022;
chunk__27598_29004 = G__29023;
count__27599_29005 = G__29024;
i__27600_29006 = G__29025;
continue;
} else {
var node_29026 = cljs.core.first(seq__27597_29017__$1);
fragment.appendChild(shadow.dom._to_dom(node_29026));


var G__29028 = cljs.core.next(seq__27597_29017__$1);
var G__29029 = null;
var G__29030 = (0);
var G__29031 = (0);
seq__27597_29003 = G__29028;
chunk__27598_29004 = G__29029;
count__27599_29005 = G__29030;
i__27600_29006 = G__29031;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq27591){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27591));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__27616_29035 = cljs.core.seq(scripts);
var chunk__27617_29036 = null;
var count__27618_29037 = (0);
var i__27619_29038 = (0);
while(true){
if((i__27619_29038 < count__27618_29037)){
var vec__27629_29039 = chunk__27617_29036.cljs$core$IIndexed$_nth$arity$2(null,i__27619_29038);
var script_tag_29040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27629_29039,(0),null);
var script_body_29041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27629_29039,(1),null);
eval(script_body_29041);


var G__29042 = seq__27616_29035;
var G__29043 = chunk__27617_29036;
var G__29044 = count__27618_29037;
var G__29045 = (i__27619_29038 + (1));
seq__27616_29035 = G__29042;
chunk__27617_29036 = G__29043;
count__27618_29037 = G__29044;
i__27619_29038 = G__29045;
continue;
} else {
var temp__5825__auto___29046 = cljs.core.seq(seq__27616_29035);
if(temp__5825__auto___29046){
var seq__27616_29047__$1 = temp__5825__auto___29046;
if(cljs.core.chunked_seq_QMARK_(seq__27616_29047__$1)){
var c__5548__auto___29048 = cljs.core.chunk_first(seq__27616_29047__$1);
var G__29049 = cljs.core.chunk_rest(seq__27616_29047__$1);
var G__29050 = c__5548__auto___29048;
var G__29051 = cljs.core.count(c__5548__auto___29048);
var G__29052 = (0);
seq__27616_29035 = G__29049;
chunk__27617_29036 = G__29050;
count__27618_29037 = G__29051;
i__27619_29038 = G__29052;
continue;
} else {
var vec__27634_29053 = cljs.core.first(seq__27616_29047__$1);
var script_tag_29054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27634_29053,(0),null);
var script_body_29055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27634_29053,(1),null);
eval(script_body_29055);


var G__29058 = cljs.core.next(seq__27616_29047__$1);
var G__29059 = null;
var G__29060 = (0);
var G__29061 = (0);
seq__27616_29035 = G__29058;
chunk__27617_29036 = G__29059;
count__27618_29037 = G__29060;
i__27619_29038 = G__29061;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__27650){
var vec__27651 = p__27650;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27651,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27651,(1),null);
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
var G__27660 = arguments.length;
switch (G__27660) {
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
var seq__27678 = cljs.core.seq(style_keys);
var chunk__27679 = null;
var count__27680 = (0);
var i__27681 = (0);
while(true){
if((i__27681 < count__27680)){
var it = chunk__27679.cljs$core$IIndexed$_nth$arity$2(null,i__27681);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29076 = seq__27678;
var G__29077 = chunk__27679;
var G__29078 = count__27680;
var G__29079 = (i__27681 + (1));
seq__27678 = G__29076;
chunk__27679 = G__29077;
count__27680 = G__29078;
i__27681 = G__29079;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27678);
if(temp__5825__auto__){
var seq__27678__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27678__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__27678__$1);
var G__29080 = cljs.core.chunk_rest(seq__27678__$1);
var G__29081 = c__5548__auto__;
var G__29082 = cljs.core.count(c__5548__auto__);
var G__29083 = (0);
seq__27678 = G__29080;
chunk__27679 = G__29081;
count__27680 = G__29082;
i__27681 = G__29083;
continue;
} else {
var it = cljs.core.first(seq__27678__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29084 = cljs.core.next(seq__27678__$1);
var G__29085 = null;
var G__29086 = (0);
var G__29087 = (0);
seq__27678 = G__29084;
chunk__27679 = G__29085;
count__27680 = G__29086;
i__27681 = G__29087;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k27689,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__27699 = k27689;
var G__27699__$1 = (((G__27699 instanceof cljs.core.Keyword))?G__27699.fqn:null);
switch (G__27699__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27689,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__27705){
var vec__27706 = p__27705;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27706,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27706,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27688){
var self__ = this;
var G__27688__$1 = this;
return (new cljs.core.RecordIter((0),G__27688__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27690,other27691){
var self__ = this;
var this27690__$1 = this;
return (((!((other27691 == null)))) && ((((this27690__$1.constructor === other27691.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27690__$1.x,other27691.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27690__$1.y,other27691.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27690__$1.__extmap,other27691.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k27689){
var self__ = this;
var this__5330__auto____$1 = this;
var G__27726 = k27689;
var G__27726__$1 = (((G__27726 instanceof cljs.core.Keyword))?G__27726.fqn:null);
switch (G__27726__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k27689);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__27688){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__27729 = cljs.core.keyword_identical_QMARK_;
var expr__27730 = k__5332__auto__;
if(cljs.core.truth_((pred__27729.cljs$core$IFn$_invoke$arity$2 ? pred__27729.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__27730) : pred__27729.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__27730)))){
return (new shadow.dom.Coordinate(G__27688,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27729.cljs$core$IFn$_invoke$arity$2 ? pred__27729.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__27730) : pred__27729.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__27730)))){
return (new shadow.dom.Coordinate(self__.x,G__27688,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__27688),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__27688){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__27688,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__27695){
var extmap__5365__auto__ = (function (){var G__27750 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27695,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__27695)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27750);
} else {
return G__27750;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__27695),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__27695),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k27761,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__27777 = k27761;
var G__27777__$1 = (((G__27777 instanceof cljs.core.Keyword))?G__27777.fqn:null);
switch (G__27777__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27761,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__27782){
var vec__27784 = p__27782;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27784,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27784,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27760){
var self__ = this;
var G__27760__$1 = this;
return (new cljs.core.RecordIter((0),G__27760__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27762,other27763){
var self__ = this;
var this27762__$1 = this;
return (((!((other27763 == null)))) && ((((this27762__$1.constructor === other27763.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27762__$1.w,other27763.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27762__$1.h,other27763.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27762__$1.__extmap,other27763.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k27761){
var self__ = this;
var this__5330__auto____$1 = this;
var G__27813 = k27761;
var G__27813__$1 = (((G__27813 instanceof cljs.core.Keyword))?G__27813.fqn:null);
switch (G__27813__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k27761);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__27760){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__27828 = cljs.core.keyword_identical_QMARK_;
var expr__27829 = k__5332__auto__;
if(cljs.core.truth_((pred__27828.cljs$core$IFn$_invoke$arity$2 ? pred__27828.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__27829) : pred__27828.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__27829)))){
return (new shadow.dom.Size(G__27760,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27828.cljs$core$IFn$_invoke$arity$2 ? pred__27828.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__27829) : pred__27828.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__27829)))){
return (new shadow.dom.Size(self__.w,G__27760,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__27760),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__27760){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__27760,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__27764){
var extmap__5365__auto__ = (function (){var G__27859 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27764,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__27764)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27859);
} else {
return G__27859;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__27764),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__27764),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__29146 = (i + (1));
var G__29147 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__29146;
ret = G__29147;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27919){
var vec__27921 = p__27919;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27921,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27921,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__27943 = arguments.length;
switch (G__27943) {
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
var G__29155 = ps;
var G__29156 = (i + (1));
el__$1 = G__29155;
i = G__29156;
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
var vec__28157 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28157,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28157,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28157,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__28163_29170 = cljs.core.seq(props);
var chunk__28164_29171 = null;
var count__28165_29172 = (0);
var i__28166_29173 = (0);
while(true){
if((i__28166_29173 < count__28165_29172)){
var vec__28205_29174 = chunk__28164_29171.cljs$core$IIndexed$_nth$arity$2(null,i__28166_29173);
var k_29175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28205_29174,(0),null);
var v_29176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28205_29174,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_29175);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29175),v_29176);


var G__29177 = seq__28163_29170;
var G__29178 = chunk__28164_29171;
var G__29179 = count__28165_29172;
var G__29180 = (i__28166_29173 + (1));
seq__28163_29170 = G__29177;
chunk__28164_29171 = G__29178;
count__28165_29172 = G__29179;
i__28166_29173 = G__29180;
continue;
} else {
var temp__5825__auto___29181 = cljs.core.seq(seq__28163_29170);
if(temp__5825__auto___29181){
var seq__28163_29186__$1 = temp__5825__auto___29181;
if(cljs.core.chunked_seq_QMARK_(seq__28163_29186__$1)){
var c__5548__auto___29187 = cljs.core.chunk_first(seq__28163_29186__$1);
var G__29188 = cljs.core.chunk_rest(seq__28163_29186__$1);
var G__29189 = c__5548__auto___29187;
var G__29190 = cljs.core.count(c__5548__auto___29187);
var G__29191 = (0);
seq__28163_29170 = G__29188;
chunk__28164_29171 = G__29189;
count__28165_29172 = G__29190;
i__28166_29173 = G__29191;
continue;
} else {
var vec__28215_29192 = cljs.core.first(seq__28163_29186__$1);
var k_29193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28215_29192,(0),null);
var v_29194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28215_29192,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_29193);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29193),v_29194);


var G__29198 = cljs.core.next(seq__28163_29186__$1);
var G__29199 = null;
var G__29200 = (0);
var G__29201 = (0);
seq__28163_29170 = G__29198;
chunk__28164_29171 = G__29199;
count__28165_29172 = G__29200;
i__28166_29173 = G__29201;
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
var vec__28327 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28327,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28327,(1),null);
var seq__28332_29214 = cljs.core.seq(node_children);
var chunk__28334_29215 = null;
var count__28335_29216 = (0);
var i__28336_29217 = (0);
while(true){
if((i__28336_29217 < count__28335_29216)){
var child_struct_29218 = chunk__28334_29215.cljs$core$IIndexed$_nth$arity$2(null,i__28336_29217);
if((!((child_struct_29218 == null)))){
if(typeof child_struct_29218 === 'string'){
var text_29219 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29219),child_struct_29218].join(''));
} else {
var children_29220 = shadow.dom.svg_node(child_struct_29218);
if(cljs.core.seq_QMARK_(children_29220)){
var seq__28512_29221 = cljs.core.seq(children_29220);
var chunk__28514_29222 = null;
var count__28515_29223 = (0);
var i__28516_29224 = (0);
while(true){
if((i__28516_29224 < count__28515_29223)){
var child_29229 = chunk__28514_29222.cljs$core$IIndexed$_nth$arity$2(null,i__28516_29224);
if(cljs.core.truth_(child_29229)){
node.appendChild(child_29229);


var G__29230 = seq__28512_29221;
var G__29231 = chunk__28514_29222;
var G__29232 = count__28515_29223;
var G__29233 = (i__28516_29224 + (1));
seq__28512_29221 = G__29230;
chunk__28514_29222 = G__29231;
count__28515_29223 = G__29232;
i__28516_29224 = G__29233;
continue;
} else {
var G__29234 = seq__28512_29221;
var G__29235 = chunk__28514_29222;
var G__29236 = count__28515_29223;
var G__29237 = (i__28516_29224 + (1));
seq__28512_29221 = G__29234;
chunk__28514_29222 = G__29235;
count__28515_29223 = G__29236;
i__28516_29224 = G__29237;
continue;
}
} else {
var temp__5825__auto___29238 = cljs.core.seq(seq__28512_29221);
if(temp__5825__auto___29238){
var seq__28512_29239__$1 = temp__5825__auto___29238;
if(cljs.core.chunked_seq_QMARK_(seq__28512_29239__$1)){
var c__5548__auto___29240 = cljs.core.chunk_first(seq__28512_29239__$1);
var G__29250 = cljs.core.chunk_rest(seq__28512_29239__$1);
var G__29251 = c__5548__auto___29240;
var G__29252 = cljs.core.count(c__5548__auto___29240);
var G__29253 = (0);
seq__28512_29221 = G__29250;
chunk__28514_29222 = G__29251;
count__28515_29223 = G__29252;
i__28516_29224 = G__29253;
continue;
} else {
var child_29255 = cljs.core.first(seq__28512_29239__$1);
if(cljs.core.truth_(child_29255)){
node.appendChild(child_29255);


var G__29256 = cljs.core.next(seq__28512_29239__$1);
var G__29257 = null;
var G__29258 = (0);
var G__29259 = (0);
seq__28512_29221 = G__29256;
chunk__28514_29222 = G__29257;
count__28515_29223 = G__29258;
i__28516_29224 = G__29259;
continue;
} else {
var G__29260 = cljs.core.next(seq__28512_29239__$1);
var G__29261 = null;
var G__29262 = (0);
var G__29263 = (0);
seq__28512_29221 = G__29260;
chunk__28514_29222 = G__29261;
count__28515_29223 = G__29262;
i__28516_29224 = G__29263;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29220);
}
}


var G__29270 = seq__28332_29214;
var G__29271 = chunk__28334_29215;
var G__29272 = count__28335_29216;
var G__29273 = (i__28336_29217 + (1));
seq__28332_29214 = G__29270;
chunk__28334_29215 = G__29271;
count__28335_29216 = G__29272;
i__28336_29217 = G__29273;
continue;
} else {
var G__29274 = seq__28332_29214;
var G__29275 = chunk__28334_29215;
var G__29276 = count__28335_29216;
var G__29277 = (i__28336_29217 + (1));
seq__28332_29214 = G__29274;
chunk__28334_29215 = G__29275;
count__28335_29216 = G__29276;
i__28336_29217 = G__29277;
continue;
}
} else {
var temp__5825__auto___29278 = cljs.core.seq(seq__28332_29214);
if(temp__5825__auto___29278){
var seq__28332_29279__$1 = temp__5825__auto___29278;
if(cljs.core.chunked_seq_QMARK_(seq__28332_29279__$1)){
var c__5548__auto___29280 = cljs.core.chunk_first(seq__28332_29279__$1);
var G__29281 = cljs.core.chunk_rest(seq__28332_29279__$1);
var G__29282 = c__5548__auto___29280;
var G__29283 = cljs.core.count(c__5548__auto___29280);
var G__29284 = (0);
seq__28332_29214 = G__29281;
chunk__28334_29215 = G__29282;
count__28335_29216 = G__29283;
i__28336_29217 = G__29284;
continue;
} else {
var child_struct_29285 = cljs.core.first(seq__28332_29279__$1);
if((!((child_struct_29285 == null)))){
if(typeof child_struct_29285 === 'string'){
var text_29290 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29290),child_struct_29285].join(''));
} else {
var children_29295 = shadow.dom.svg_node(child_struct_29285);
if(cljs.core.seq_QMARK_(children_29295)){
var seq__28559_29300 = cljs.core.seq(children_29295);
var chunk__28561_29301 = null;
var count__28562_29302 = (0);
var i__28563_29303 = (0);
while(true){
if((i__28563_29303 < count__28562_29302)){
var child_29312 = chunk__28561_29301.cljs$core$IIndexed$_nth$arity$2(null,i__28563_29303);
if(cljs.core.truth_(child_29312)){
node.appendChild(child_29312);


var G__29313 = seq__28559_29300;
var G__29314 = chunk__28561_29301;
var G__29315 = count__28562_29302;
var G__29316 = (i__28563_29303 + (1));
seq__28559_29300 = G__29313;
chunk__28561_29301 = G__29314;
count__28562_29302 = G__29315;
i__28563_29303 = G__29316;
continue;
} else {
var G__29317 = seq__28559_29300;
var G__29318 = chunk__28561_29301;
var G__29319 = count__28562_29302;
var G__29320 = (i__28563_29303 + (1));
seq__28559_29300 = G__29317;
chunk__28561_29301 = G__29318;
count__28562_29302 = G__29319;
i__28563_29303 = G__29320;
continue;
}
} else {
var temp__5825__auto___29321__$1 = cljs.core.seq(seq__28559_29300);
if(temp__5825__auto___29321__$1){
var seq__28559_29326__$1 = temp__5825__auto___29321__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28559_29326__$1)){
var c__5548__auto___29331 = cljs.core.chunk_first(seq__28559_29326__$1);
var G__29338 = cljs.core.chunk_rest(seq__28559_29326__$1);
var G__29339 = c__5548__auto___29331;
var G__29340 = cljs.core.count(c__5548__auto___29331);
var G__29341 = (0);
seq__28559_29300 = G__29338;
chunk__28561_29301 = G__29339;
count__28562_29302 = G__29340;
i__28563_29303 = G__29341;
continue;
} else {
var child_29342 = cljs.core.first(seq__28559_29326__$1);
if(cljs.core.truth_(child_29342)){
node.appendChild(child_29342);


var G__29343 = cljs.core.next(seq__28559_29326__$1);
var G__29344 = null;
var G__29345 = (0);
var G__29346 = (0);
seq__28559_29300 = G__29343;
chunk__28561_29301 = G__29344;
count__28562_29302 = G__29345;
i__28563_29303 = G__29346;
continue;
} else {
var G__29347 = cljs.core.next(seq__28559_29326__$1);
var G__29348 = null;
var G__29349 = (0);
var G__29350 = (0);
seq__28559_29300 = G__29347;
chunk__28561_29301 = G__29348;
count__28562_29302 = G__29349;
i__28563_29303 = G__29350;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29295);
}
}


var G__29351 = cljs.core.next(seq__28332_29279__$1);
var G__29352 = null;
var G__29353 = (0);
var G__29354 = (0);
seq__28332_29214 = G__29351;
chunk__28334_29215 = G__29352;
count__28335_29216 = G__29353;
i__28336_29217 = G__29354;
continue;
} else {
var G__29361 = cljs.core.next(seq__28332_29279__$1);
var G__29362 = null;
var G__29363 = (0);
var G__29364 = (0);
seq__28332_29214 = G__29361;
chunk__28334_29215 = G__29362;
count__28335_29216 = G__29363;
i__28336_29217 = G__29364;
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
var len__5749__auto___29369 = arguments.length;
var i__5750__auto___29370 = (0);
while(true){
if((i__5750__auto___29370 < len__5749__auto___29369)){
args__5755__auto__.push((arguments[i__5750__auto___29370]));

var G__29371 = (i__5750__auto___29370 + (1));
i__5750__auto___29370 = G__29371;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq28627){
var G__28628 = cljs.core.first(seq28627);
var seq28627__$1 = cljs.core.next(seq28627);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28628,seq28627__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
