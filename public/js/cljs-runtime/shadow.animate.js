goog.provide('shadow.animate');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

var shadow$animate$Animation$_animate_from$dyn_43550 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.animate._animate_from[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.animate._animate_from["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
});
/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_from$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_from$dyn_43550(this$);
}
});

var shadow$animate$Animation$_animate_to$dyn_43553 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.animate._animate_to[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.animate._animate_to["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_to$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_to$dyn_43553(this$);
}
});

var shadow$animate$Animation$_animate_toggles$dyn_43555 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.animate._animate_toggles["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_toggles$dyn_43555(this$);
}
});

var shadow$animate$Animation$_animate_timings$dyn_43556 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.animate._animate_timings["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
});
/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_timings$dyn_43556(this$);
}
});

var shadow$animate$Animation$_animate_delays$dyn_43561 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.animate._animate_delays["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
});
/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_delays$dyn_43561(this$);
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43276){
var vec__43277 = p__43276;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43277,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43277,(1),null);
return [cljs.core.name(attr)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),(function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__5000__auto__ = delay;
if(cljs.core.truth_(and__5000__auto__)){
return (delay > (0));
} else {
return and__5000__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})()].join('');
}),timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

var shadow$animate$IAnimator$get_duration$dyn_43568 = (function (animator){
var x__5350__auto__ = (((animator == null))?null:animator);
var m__5351__auto__ = (shadow.animate.get_duration[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5351__auto__.call(null, animator));
} else {
var m__5349__auto__ = (shadow.animate.get_duration["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5349__auto__.call(null, animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
});
shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
return shadow$animate$IAnimator$get_duration$dyn_43568(animator);
}
});

var shadow$animate$IAnimator$init_BANG_$dyn_43572 = (function (animator){
var x__5350__auto__ = (((animator == null))?null:animator);
var m__5351__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5351__auto__.call(null, animator));
} else {
var m__5349__auto__ = (shadow.animate.init_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5349__auto__.call(null, animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
});
/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$init_BANG_$dyn_43572(animator);
}
});

var shadow$animate$IAnimator$start_BANG_$dyn_43574 = (function (animator){
var x__5350__auto__ = (((animator == null))?null:animator);
var m__5351__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5351__auto__.call(null, animator));
} else {
var m__5349__auto__ = (shadow.animate.start_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5349__auto__.call(null, animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
});
/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$start_BANG_$dyn_43574(animator);
}
});

var shadow$animate$IAnimator$finish_BANG_$dyn_43578 = (function (animator){
var x__5350__auto__ = (((animator == null))?null:animator);
var m__5351__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5351__auto__.call(null, animator));
} else {
var m__5349__auto__ = (shadow.animate.finish_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5349__auto__.call(null, animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
});
/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$finish_BANG_$dyn_43578(animator);
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
(shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5593__auto__ = self__.items.length;
var i__26367__auto__ = (0);
while(true){
if((i__26367__auto__ < n__5593__auto__)){
var map__43317_43580 = (self__.items[i__26367__auto__]);
var map__43317_43581__$1 = cljs.core.__destructure_map(map__43317_43580);
var el_43582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43317_43581__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_43583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43317_43581__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_43582,from_43583);

var G__43584 = (i__26367__auto__ + (1));
i__26367__auto__ = G__43584;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5593__auto__ = self__.items.length;
var i__26367__auto__ = (0);
while(true){
if((i__26367__auto__ < n__5593__auto__)){
var map__43319_43586 = (self__.items[i__26367__auto__]);
var map__43319_43587__$1 = cljs.core.__destructure_map(map__43319_43586);
var el_43588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43319_43587__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_43589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43319_43587__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_43590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43319_43587__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_43589["transition"] = transition_43590);

goog.style.setStyle(el_43588,to_43589);

var G__43591 = (i__26367__auto__ + (1));
i__26367__auto__ = G__43591;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5593__auto__ = self__.items.length;
var i__26367__auto__ = (0);
while(true){
if((i__26367__auto__ < n__5593__auto__)){
var map__43324_43593 = (self__.items[i__26367__auto__]);
var map__43324_43594__$1 = cljs.core.__destructure_map(map__43324_43593);
var el_43595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43324_43594__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_43596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43324_43594__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_43596["transition"] = null);

goog.style.setStyle(el_43595,toggles_43596);

var G__43599 = (i__26367__auto__ + (1));
i__26367__auto__ = G__43599;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
}));

(shadow.animate.Animator.cljs$lang$type = true);

(shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator");

(shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.animate/Animator");
}));

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
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
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k43326,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__43331 = k43326;
var G__43331__$1 = (((G__43331 instanceof cljs.core.Keyword))?G__43331.fqn:null);
switch (G__43331__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43326,else__5303__auto__);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__43334){
var vec__43335 = p__43334;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43335,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43335,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43325){
var self__ = this;
var G__43325__$1 = this;
return (new cljs.core.RecordIter((0),G__43325__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43327,other43328){
var self__ = this;
var this43327__$1 = this;
return (((!((other43328 == null)))) && ((((this43327__$1.constructor === other43328.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43327__$1.el,other43328.el)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43327__$1.from,other43328.from)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43327__$1.to,other43328.to)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43327__$1.toggles,other43328.toggles)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43327__$1.transition,other43328.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43327__$1.__extmap,other43328.__extmap)))))))))))))));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k43326){
var self__ = this;
var this__5307__auto____$1 = this;
var G__43355 = k43326;
var G__43355__$1 = (((G__43355 instanceof cljs.core.Keyword))?G__43355.fqn:null);
switch (G__43355__$1) {
case "el":
case "from":
case "to":
case "toggles":
case "transition":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k43326);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__43325){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__43356 = cljs.core.keyword_identical_QMARK_;
var expr__43357 = k__5309__auto__;
if(cljs.core.truth_((pred__43356.cljs$core$IFn$_invoke$arity$2 ? pred__43356.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"el","el",-1618201118),expr__43357) : pred__43356.call(null, new cljs.core.Keyword(null,"el","el",-1618201118),expr__43357)))){
return (new shadow.animate.AnimationStep(G__43325,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43356.cljs$core$IFn$_invoke$arity$2 ? pred__43356.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from","from",1815293044),expr__43357) : pred__43356.call(null, new cljs.core.Keyword(null,"from","from",1815293044),expr__43357)))){
return (new shadow.animate.AnimationStep(self__.el,G__43325,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43356.cljs$core$IFn$_invoke$arity$2 ? pred__43356.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007),expr__43357) : pred__43356.call(null, new cljs.core.Keyword(null,"to","to",192099007),expr__43357)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__43325,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43356.cljs$core$IFn$_invoke$arity$2 ? pred__43356.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__43357) : pred__43356.call(null, new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__43357)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__43325,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43356.cljs$core$IFn$_invoke$arity$2 ? pred__43356.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transition","transition",765692007),expr__43357) : pred__43356.call(null, new cljs.core.Keyword(null,"transition","transition",765692007),expr__43357)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__43325,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__43325),null));
}
}
}
}
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"el","el",-1618201118),self__.el,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"from","from",1815293044),self__.from,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"to","to",192099007),self__.to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition,null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__43325){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__43325,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
}));

(shadow.animate.AnimationStep.cljs$lang$type = true);

(shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
}));

(shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.animate/AnimationStep");
}));

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__43329){
var extmap__5342__auto__ = (function (){var G__43362 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43329,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0));
if(cljs.core.record_QMARK_(G__43329)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43362);
} else {
return G__43362;
}
})();
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__43329),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__43329),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__43329),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__43329),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__43329),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$animate$setup_$_iter__43367(s__43368){
return (new cljs.core.LazySeq(null,(function (){
var s__43368__$1 = s__43368;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__43368__$1);
if(temp__5804__auto__){
var s__43368__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43368__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__43368__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__43370 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__43369 = (0);
while(true){
if((i__43369 < size__5479__auto__)){
var vec__43372 = cljs.core._nth(c__5478__auto__,i__43369);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43372,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43372,(1),null);
cljs.core.chunk_append(b__43370,(function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__43640 = (i__43369 + (1));
i__43369 = G__43640;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43370),shadow$animate$setup_$_iter__43367(cljs.core.chunk_rest(s__43368__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43370),null);
}
} else {
var vec__43380 = cljs.core.first(s__43368__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43380,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43380,(1),null);
return cljs.core.cons((function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__43367(cljs.core.rest(s__43368__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__29484__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29485__auto__ = (function (){var switch__28506__auto__ = (function (state_43391){
var state_val_43392 = (state_43391[(1)]);
if((state_val_43392 === (1))){
var inst_43385 = shadow.animate.get_duration(animator);
var inst_43386 = cljs.core.async.timeout(inst_43385);
var state_43391__$1 = state_43391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43391__$1,(2),inst_43386);
} else {
if((state_val_43392 === (2))){
var inst_43388 = (state_43391[(2)]);
var inst_43389 = shadow.animate.finish_BANG_(animator);
var state_43391__$1 = (function (){var statearr_43393 = state_43391;
(statearr_43393[(7)] = inst_43388);

(statearr_43393[(8)] = inst_43389);

return statearr_43393;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43391__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});
return (function() {
var shadow$animate$continue_BANG__$_state_machine__28507__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__28507__auto____0 = (function (){
var statearr_43394 = [null,null,null,null,null,null,null,null,null];
(statearr_43394[(0)] = shadow$animate$continue_BANG__$_state_machine__28507__auto__);

(statearr_43394[(1)] = (1));

return statearr_43394;
});
var shadow$animate$continue_BANG__$_state_machine__28507__auto____1 = (function (state_43391){
while(true){
var ret_value__28508__auto__ = (function (){try{while(true){
var result__28509__auto__ = switch__28506__auto__(state_43391);
if(cljs.core.keyword_identical_QMARK_(result__28509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28509__auto__;
}
break;
}
}catch (e43396){var ex__28510__auto__ = e43396;
var statearr_43397_43641 = state_43391;
(statearr_43397_43641[(2)] = ex__28510__auto__);


if(cljs.core.seq((state_43391[(4)]))){
var statearr_43398_43642 = state_43391;
(statearr_43398_43642[(1)] = cljs.core.first((state_43391[(4)])));

} else {
throw ex__28510__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43645 = state_43391;
state_43391 = G__43645;
continue;
} else {
return ret_value__28508__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__28507__auto__ = function(state_43391){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__28507__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__28507__auto____1.call(this,state_43391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$animate$continue_BANG__$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__28507__auto____0;
shadow$animate$continue_BANG__$_state_machine__28507__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__28507__auto____1;
return shadow$animate$continue_BANG__$_state_machine__28507__auto__;
})()
})();
var state__29486__auto__ = (function (){var statearr_43399 = f__29485__auto__();
(statearr_43399[(6)] = c__29484__auto__);

return statearr_43399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29486__auto__);
}));

return c__29484__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
animator.shadow$animate$IAnimator$init_BANG_$arity$1(null, );

return shadow.animate.continue_BANG_(animator);
});

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate43414 = (function (attr,from,to,timing,delay,meta43415){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta43415 = meta43415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate43414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43416,meta43415__$1){
var self__ = this;
var _43416__$1 = this;
return (new shadow.animate.t_shadow$animate43414(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta43415__$1));
}));

(shadow.animate.t_shadow$animate43414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43416){
var self__ = this;
var _43416__$1 = this;
return self__.meta43415;
}));

(shadow.animate.t_shadow$animate43414.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate43414.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate43414.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate43414.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate43414.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
}));

(shadow.animate.t_shadow$animate43414.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
}));

(shadow.animate.t_shadow$animate43414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta43415","meta43415",-439100552,null)], null);
}));

(shadow.animate.t_shadow$animate43414.cljs$lang$type = true);

(shadow.animate.t_shadow$animate43414.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate43414");

(shadow.animate.t_shadow$animate43414.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.animate/t_shadow$animate43414");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate43414.
 */
shadow.animate.__GT_t_shadow$animate43414 = (function shadow$animate$__GT_t_shadow$animate43414(attr,from,to,timing,delay,meta43415){
return (new shadow.animate.t_shadow$animate43414(attr,from,to,timing,delay,meta43415));
});


/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__43406 = arguments.length;
switch (G__43406) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
return (new shadow.animate.t_shadow$animate43414(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.transition.cljs$lang$maxFixedArity = 5);


/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate43430 = (function (attr,from,to,meta43431){
this.attr = attr;
this.from = from;
this.to = to;
this.meta43431 = meta43431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate43430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43432,meta43431__$1){
var self__ = this;
var _43432__$1 = this;
return (new shadow.animate.t_shadow$animate43430(self__.attr,self__.from,self__.to,meta43431__$1));
}));

(shadow.animate.t_shadow$animate43430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43432){
var self__ = this;
var _43432__$1 = this;
return self__.meta43431;
}));

(shadow.animate.t_shadow$animate43430.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate43430.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate43430.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate43430.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate43430.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate43430.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate43430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta43431","meta43431",-1488222991,null)], null);
}));

(shadow.animate.t_shadow$animate43430.cljs$lang$type = true);

(shadow.animate.t_shadow$animate43430.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate43430");

(shadow.animate.t_shadow$animate43430.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.animate/t_shadow$animate43430");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate43430.
 */
shadow.animate.__GT_t_shadow$animate43430 = (function shadow$animate$__GT_t_shadow$animate43430(attr,from,to,meta43431){
return (new shadow.animate.t_shadow$animate43430(attr,from,to,meta43431));
});


shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
return (new shadow.animate.t_shadow$animate43430(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate43450 = (function (attrs,meta43451){
this.attrs = attrs;
this.meta43451 = meta43451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate43450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43452,meta43451__$1){
var self__ = this;
var _43452__$1 = this;
return (new shadow.animate.t_shadow$animate43450(self__.attrs,meta43451__$1));
}));

(shadow.animate.t_shadow$animate43450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43452){
var self__ = this;
var _43452__$1 = this;
return self__.meta43451;
}));

(shadow.animate.t_shadow$animate43450.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate43450.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate43450.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
}));

(shadow.animate.t_shadow$animate43450.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate43450.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate43450.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate43450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43451","meta43451",-1595753773,null)], null);
}));

(shadow.animate.t_shadow$animate43450.cljs$lang$type = true);

(shadow.animate.t_shadow$animate43450.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate43450");

(shadow.animate.t_shadow$animate43450.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.animate/t_shadow$animate43450");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate43450.
 */
shadow.animate.__GT_t_shadow$animate43450 = (function shadow$animate$__GT_t_shadow$animate43450(attrs,meta43451){
return (new shadow.animate.t_shadow$animate43450(attrs,meta43451));
});


/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__43446 = arguments.length;
switch (G__43446) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
return (new shadow.animate.t_shadow$animate43450(attrs,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
}));

(shadow.animate.set_attr.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate43469 = (function (attr,meta43470){
this.attr = attr;
this.meta43470 = meta43470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate43469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43471,meta43470__$1){
var self__ = this;
var _43471__$1 = this;
return (new shadow.animate.t_shadow$animate43469(self__.attr,meta43470__$1));
}));

(shadow.animate.t_shadow$animate43469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43471){
var self__ = this;
var _43471__$1 = this;
return self__.meta43470;
}));

(shadow.animate.t_shadow$animate43469.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate43469.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate43469.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate43469.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
}));

(shadow.animate.t_shadow$animate43469.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate43469.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate43469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta43470","meta43470",-1710173050,null)], null);
}));

(shadow.animate.t_shadow$animate43469.cljs$lang$type = true);

(shadow.animate.t_shadow$animate43469.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate43469");

(shadow.animate.t_shadow$animate43469.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.animate/t_shadow$animate43469");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate43469.
 */
shadow.animate.__GT_t_shadow$animate43469 = (function shadow$animate$__GT_t_shadow$animate43469(attr,meta43470){
return (new shadow.animate.t_shadow$animate43469(attr,meta43470));
});


/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
return (new shadow.animate.t_shadow$animate43469(attr,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate43494 = (function (transitions,to,from,toggles,timings,delays,temp__5802__auto__,meta43495){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5802__auto__ = temp__5802__auto__;
this.meta43495 = meta43495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate43494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43496,meta43495__$1){
var self__ = this;
var _43496__$1 = this;
return (new shadow.animate.t_shadow$animate43494(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5802__auto__,meta43495__$1));
}));

(shadow.animate.t_shadow$animate43494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43496){
var self__ = this;
var _43496__$1 = this;
return self__.meta43495;
}));

(shadow.animate.t_shadow$animate43494.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate43494.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
}));

(shadow.animate.t_shadow$animate43494.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
}));

(shadow.animate.t_shadow$animate43494.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
}));

(shadow.animate.t_shadow$animate43494.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
}));

(shadow.animate.t_shadow$animate43494.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
}));

(shadow.animate.t_shadow$animate43494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"meta43495","meta43495",-547171422,null)], null);
}));

(shadow.animate.t_shadow$animate43494.cljs$lang$type = true);

(shadow.animate.t_shadow$animate43494.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate43494");

(shadow.animate.t_shadow$animate43494.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.animate/t_shadow$animate43494");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate43494.
 */
shadow.animate.__GT_t_shadow$animate43494 = (function shadow$animate$__GT_t_shadow$animate43494(transitions,to,from,toggles,timings,delays,temp__5802__auto__,meta43495){
return (new shadow.animate.t_shadow$animate43494(transitions,to,from,toggles,timings,delays,temp__5802__auto__,meta43495));
});



/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate43504 = (function (transitions,to,from,toggles,timings,delays,temp__5802__auto__,meta43505){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5802__auto__ = temp__5802__auto__;
this.meta43505 = meta43505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate43504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43506,meta43505__$1){
var self__ = this;
var _43506__$1 = this;
return (new shadow.animate.t_shadow$animate43504(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5802__auto__,meta43505__$1));
}));

(shadow.animate.t_shadow$animate43504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43506){
var self__ = this;
var _43506__$1 = this;
return self__.meta43505;
}));

(shadow.animate.t_shadow$animate43504.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate43504.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
}));

(shadow.animate.t_shadow$animate43504.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
}));

(shadow.animate.t_shadow$animate43504.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
}));

(shadow.animate.t_shadow$animate43504.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
}));

(shadow.animate.t_shadow$animate43504.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
}));

(shadow.animate.t_shadow$animate43504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),cljs.core.with_meta(new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"meta43505","meta43505",1636929153,null)], null);
}));

(shadow.animate.t_shadow$animate43504.cljs$lang$type = true);

(shadow.animate.t_shadow$animate43504.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate43504");

(shadow.animate.t_shadow$animate43504.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.animate/t_shadow$animate43504");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate43504.
 */
shadow.animate.__GT_t_shadow$animate43504 = (function shadow$animate$__GT_t_shadow$animate43504(transitions,to,from,toggles,timings,delays,temp__5802__auto__,meta43505){
return (new shadow.animate.t_shadow$animate43504(transitions,to,from,toggles,timings,delays,temp__5802__auto__,meta43505));
});


shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__5732__auto__ = [];
var len__5726__auto___43668 = arguments.length;
var i__5727__auto___43669 = (0);
while(true){
if((i__5727__auto___43669 < len__5726__auto___43668)){
args__5732__auto__.push((arguments[i__5727__auto___43669]));

var G__43671 = (i__5727__auto___43669 + (1));
i__5727__auto___43669 = G__43671;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5802__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var adef = temp__5802__auto__;
var G__43681 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__43682 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__43683 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__43684 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__43685 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__43686 = cljs.core.rest(transitions__$1);
to = G__43681;
from = G__43682;
toggles = G__43683;
timings = G__43684;
delays = G__43685;
transitions__$1 = G__43686;
continue;
} else {
return (new shadow.animate.t_shadow$animate43504(transitions__$1,to,from,toggles,timings,delays,temp__5802__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
}));

(shadow.animate.combine.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.animate.combine.cljs$lang$applyTo = (function (seq43483){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43483));
}));

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__43518 = arguments.length;
switch (G__43518) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
}));

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
}));

(shadow.animate.fade_in.cljs$lang$maxFixedArity = 1);

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__43520 = arguments.length;
switch (G__43520) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
}));

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
}));

(shadow.animate.fade_out.cljs$lang$maxFixedArity = 1);

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate43527 = (function (from,to,timing,delay,meta43528){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta43528 = meta43528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate43527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43529,meta43528__$1){
var self__ = this;
var _43529__$1 = this;
return (new shadow.animate.t_shadow$animate43527(self__.from,self__.to,self__.timing,self__.delay,meta43528__$1));
}));

(shadow.animate.t_shadow$animate43527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43529){
var self__ = this;
var _43529__$1 = this;
return self__.meta43528;
}));

(shadow.animate.t_shadow$animate43527.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate43527.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate43527.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate43527.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate43527.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate43527.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate43527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta43528","meta43528",871702512,null)], null);
}));

(shadow.animate.t_shadow$animate43527.cljs$lang$type = true);

(shadow.animate.t_shadow$animate43527.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate43527");

(shadow.animate.t_shadow$animate43527.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.animate/t_shadow$animate43527");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate43527.
 */
shadow.animate.__GT_t_shadow$animate43527 = (function shadow$animate$__GT_t_shadow$animate43527(from,to,timing,delay,meta43528){
return (new shadow.animate.t_shadow$animate43527(from,to,timing,delay,meta43528));
});


shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__43526 = arguments.length;
switch (G__43526) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
return (new shadow.animate.t_shadow$animate43527(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_y.cljs$lang$maxFixedArity = 4);


/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate43539 = (function (from,to,timing,delay,meta43540){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta43540 = meta43540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate43539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43541,meta43540__$1){
var self__ = this;
var _43541__$1 = this;
return (new shadow.animate.t_shadow$animate43539(self__.from,self__.to,self__.timing,self__.delay,meta43540__$1));
}));

(shadow.animate.t_shadow$animate43539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43541){
var self__ = this;
var _43541__$1 = this;
return self__.meta43540;
}));

(shadow.animate.t_shadow$animate43539.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate43539.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate43539.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate43539.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate43539.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate43539.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate43539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta43540","meta43540",-1191098994,null)], null);
}));

(shadow.animate.t_shadow$animate43539.cljs$lang$type = true);

(shadow.animate.t_shadow$animate43539.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate43539");

(shadow.animate.t_shadow$animate43539.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.animate/t_shadow$animate43539");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate43539.
 */
shadow.animate.__GT_t_shadow$animate43539 = (function shadow$animate$__GT_t_shadow$animate43539(from,to,timing,delay,meta43540){
return (new shadow.animate.t_shadow$animate43539(from,to,timing,delay,meta43540));
});


shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__43535 = arguments.length;
switch (G__43535) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
return (new shadow.animate.t_shadow$animate43539(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_x.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.animate.js.map
