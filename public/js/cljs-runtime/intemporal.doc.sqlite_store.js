goog.provide('intemporal.doc.sqlite_store');
var module$node_modules$serialize_error$index=shadow.js.require("module$node_modules$serialize_error$index", {});
intemporal.doc.sqlite_store.serialize = (function intemporal$doc$sqlite_store$serialize(var_args){
var G__32594 = arguments.length;
switch (G__32594) {
case 1:
return intemporal.doc.sqlite_store.serialize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return intemporal.doc.sqlite_store.serialize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(intemporal.doc.sqlite_store.serialize.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0));
}));

(intemporal.doc.sqlite_store.serialize.cljs$core$IFn$_invoke$arity$2 = (function (obj,etype){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613),etype)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("intemporal.workflow","failure","intemporal.workflow/failure",39732733),etype)))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([module$node_modules$serialize_error$index.serializeError(obj)], 0));
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0));
}
}));

(intemporal.doc.sqlite_store.serialize.cljs$lang$maxFixedArity = 2);

intemporal.doc.sqlite_store.deserialize = (function intemporal$doc$sqlite_store$deserialize(var_args){
var G__32596 = arguments.length;
switch (G__32596) {
case 1:
return intemporal.doc.sqlite_store.deserialize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return intemporal.doc.sqlite_store.deserialize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(intemporal.doc.sqlite_store.deserialize.cljs$core$IFn$_invoke$arity$1 = (function (s){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(s);
}));

(intemporal.doc.sqlite_store.deserialize.cljs$core$IFn$_invoke$arity$2 = (function (s,etype){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("intemporal.activity","failure","intemporal.activity/failure",523133613),etype)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("intemporal.workflow","failure","intemporal.workflow/failure",39732733),etype)))){
return module$node_modules$serialize_error$index.deserializeError(clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(s));
} else {
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(s);
}
}));

(intemporal.doc.sqlite_store.deserialize.cljs$lang$maxFixedArity = 2);

intemporal.doc.sqlite_store.persist_event = (function intemporal$doc$sqlite_store$persist_event(db,_wid,runid,p__32597){
var map__32598 = p__32597;
var map__32598__$1 = cljs.core.__destructure_map(map__32598);
var evt = map__32598__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32598__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32598__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32598__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var query = ["insert into events ","(runid, type, uid, payload, deleted, timestamp)","values (?, ?, ?, ?, ?, ?)"].join('');
return intemporal.doc.sqlite.execute_one_BANG_(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,cljs.core.str.cljs$core$IFn$_invoke$arity$1(runid),intemporal.doc.sqlite_store.serialize.cljs$core$IFn$_invoke$arity$1(type),uid,intemporal.doc.sqlite_store.serialize.cljs$core$IFn$_invoke$arity$2(payload,type),false,(new Date()).toUTCString()], null));
});
intemporal.doc.sqlite_store.event__GT_event_map = (function intemporal$doc$sqlite_store$event__GT_event_map(p__32599){
var map__32600 = p__32599;
var map__32600__$1 = cljs.core.__destructure_map(map__32600);
var dbevt = map__32600__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32600__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32600__$1,new cljs.core.Keyword(null,"_run","_run",1946677897));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32600__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32600__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32600__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var deleted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32600__$1,new cljs.core.Keyword(null,"deleted","deleted",-510100639));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32600__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
if((!((dbevt == null)))){
var etype = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type.substring((1)));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),etype,new cljs.core.Keyword(null,"uid","uid",-1447769400),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(uid),new cljs.core.Keyword(null,"payload","payload",-383036092),intemporal.doc.sqlite_store.deserialize.cljs$core$IFn$_invoke$arity$2(payload,etype),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(new Date(timestamp)),new cljs.core.Keyword(null,"deleted?","deleted?",-486602771),(!((((deleted == null)) || ((deleted === (0))))))], null);
} else {
return null;
}
});
intemporal.doc.sqlite_store.truncate = (function intemporal$doc$sqlite_store$truncate(db,table){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("metadata",cljs.core.name(table))){
return intemporal.doc.sqlite.execute_one_BANG_(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["delete from metadata"], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("events",cljs.core.name(table))){
return intemporal.doc.sqlite.execute_one_BANG_(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["delete from events"], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown table: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(table)].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
});
intemporal.doc.sqlite_store.resolve_SINGLEQUOTE_ = (function intemporal$doc$sqlite_store$resolve_SINGLEQUOTE_(s){
return s;
});
intemporal.doc.sqlite_store.make_sqlite_store = (function intemporal$doc$sqlite_store$make_sqlite_store(db){
if((typeof intemporal !== 'undefined') && (typeof intemporal.doc !== 'undefined') && (typeof intemporal.doc.sqlite_store !== 'undefined') && (typeof intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {intemporal.store.WorkflowStore}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601 = (function (db,meta32602){
this.db = db;
this.meta32602 = meta32602;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32603,meta32602__$1){
var self__ = this;
var _32603__$1 = this;
return (new intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601(self__.db,meta32602__$1));
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32603){
var self__ = this;
var _32603__$1 = this;
return self__.meta32602;
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.intemporal$store$WorkflowStore$ = cljs.core.PROTOCOL_SENTINEL);

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.intemporal$store$WorkflowStore$list_workflow_runs$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.parse_uuid,new cljs.core.Keyword(null,"runid","runid",715714469)),intemporal.doc.sqlite.execute_BANG_(self__.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select distinct runid from events"], null)));
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.intemporal$store$WorkflowStore$list_workflow_runs$arity$2 = (function (this$,wid){
var self__ = this;
var this$__$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.parse_uuid,new cljs.core.Keyword(null,"runid","runid",715714469)),intemporal.doc.sqlite.execute_BANG_(self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select distinct runid from events where uid=?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wid)], null)));
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.intemporal$store$WorkflowStore$save_workflow_definition$arity$3 = (function (this$,wid,fvar){
var self__ = this;
var this$__$1 = this;
return intemporal.doc.sqlite.execute_one_BANG_(self__.db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["insert into metadata(uid,var,type) values(?,?,?)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wid),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(fvar),"workflow"], null));
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.intemporal$store$WorkflowStore$clear$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
intemporal.doc.sqlite_store.truncate(self__.db,new cljs.core.Keyword(null,"metadata","metadata",1799301597));

return intemporal.doc.sqlite_store.truncate(self__.db,new cljs.core.Keyword(null,"events","events",1792552201));
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.intemporal$store$WorkflowStore$events__GT_table$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var all_events = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword(null,"payload","payload",-383036092),intemporal.doc.sqlite_store.deserialize.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(e)));
}),intemporal.doc.sqlite.execute_BANG_(self__.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select * from events order by runid asc, timestamp asc"], null)));
var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32604_32622 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32605_32623 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32606_32624 = true;
var _STAR_print_fn_STAR__temp_val__32607_32625 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32606_32624);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32607_32625);

try{cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1(all_events);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32605_32623);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32604_32622);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.intemporal$store$WorkflowStore$clear_events$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return intemporal.doc.sqlite_store.truncate(self__.db,new cljs.core.Keyword(null,"events","events",1792552201));
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.intemporal$store$WorkflowStore$save_activity_event$arity$6 = (function (this$,wid,runid,aid,etype,data){
var self__ = this;
var this$__$1 = this;
return intemporal.doc.sqlite_store.persist_event(self__.db,wid,runid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),etype,new cljs.core.Keyword(null,"uid","uid",-1447769400),aid,new cljs.core.Keyword(null,"payload","payload",-383036092),data], null));
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.intemporal$store$WorkflowStore$save_workflow_event$arity$5 = (function (this$,wid,runid,etype,data){
var self__ = this;
var this$__$1 = this;
return intemporal.doc.sqlite_store.persist_event(self__.db,wid,runid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),etype,new cljs.core.Keyword(null,"uid","uid",-1447769400),wid,new cljs.core.Keyword(null,"payload","payload",-383036092),data], null));
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.intemporal$store$WorkflowStore$find_workflow$arity$2 = (function (this$,runid){
var self__ = this;
var this$__$1 = this;
var temp__5804__auto__ = intemporal.doc.sqlite.execute_one_BANG_(self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select uid,type from events where runid=? order by timestamp asc limit 1",cljs.core.str.cljs$core$IFn$_invoke$arity$1(runid)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var map__32608 = temp__5804__auto__;
var map__32608__$1 = cljs.core.__destructure_map(map__32608);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32608__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32608__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var map__32609 = intemporal.doc.sqlite.execute_one_BANG_(self__.db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select var from metadata where type=? and uid=?","workflow",uid], null));
var map__32609__$1 = cljs.core.__destructure_map(map__32609);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32609__$1,new cljs.core.Keyword(null,"var","var",-769682797));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(uid),intemporal.doc.sqlite_store.resolve_SINGLEQUOTE_(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(var$))], null);
} else {
return null;
}
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.intemporal$store$WorkflowStore$expunge_events$arity$4 = (function (this$,wid,runid,evtid){
var self__ = this;
var this$__$1 = this;
return intemporal.doc.sqlite.execute_BANG_(self__.db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["update events set deleted=true where runid=? and id > ?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(runid),evtid], null));
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.intemporal$store$WorkflowStore$find_workflow_run$arity$2 = (function (this$,runid){
var self__ = this;
var this$__$1 = this;
var temp__5804__auto__ = intemporal.doc.sqlite.execute_one_BANG_(self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select uid,type from events where runid=? order by timestamp asc limit 1",cljs.core.str.cljs$core$IFn$_invoke$arity$1(runid)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var map__32610 = temp__5804__auto__;
var map__32610__$1 = cljs.core.__destructure_map(map__32610);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32610__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32610__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var map__32611 = intemporal.doc.sqlite.execute_one_BANG_(self__.db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select var from metadata where type=? and uid=?","workflow",uid], null));
var map__32611__$1 = cljs.core.__destructure_map(map__32611);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32611__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var events = intemporal.doc.sqlite.execute_BANG_(self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select * From events where runid=?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(runid)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"workflow","workflow",-640694607),intemporal.doc.sqlite_store.resolve_SINGLEQUOTE_(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(var$)),new cljs.core.Keyword(null,"workflow-events","workflow-events",-831300968),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(intemporal.doc.sqlite_store.event__GT_event_map,events)], null);
} else {
return null;
}
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.intemporal$store$WorkflowStore$find_workflow_run$arity$3 = (function (this$,runid,p__32612){
var self__ = this;
var map__32613 = p__32612;
var map__32613__$1 = cljs.core.__destructure_map(map__32613);
var all_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32613__$1,new cljs.core.Keyword(null,"all?","all?",1103779750),true);
var this$__$1 = this;
var temp__5804__auto__ = intemporal.doc.sqlite.execute_one_BANG_(self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select uid,type from events where runid=? order by timestamp asc limit 1",cljs.core.str.cljs$core$IFn$_invoke$arity$1(runid)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var map__32614 = temp__5804__auto__;
var map__32614__$1 = cljs.core.__destructure_map(map__32614);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32614__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32614__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var map__32615 = intemporal.doc.sqlite.execute_one_BANG_(self__.db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select var from metadata where type=? and uid=?","workflow",uid], null));
var map__32615__$1 = cljs.core.__destructure_map(map__32615);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32615__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var eventsq = (cljs.core.truth_(all_QMARK_)?"select * From events where runid=?":"select * From events where runid=? and (deleted is false or deleted is null)");
var events = intemporal.doc.sqlite.execute_BANG_(self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eventsq,cljs.core.str.cljs$core$IFn$_invoke$arity$1(runid)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"workflow","workflow",-640694607),intemporal.doc.sqlite_store.resolve_SINGLEQUOTE_(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(var$)),new cljs.core.Keyword(null,"workflow-events","workflow-events",-831300968),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(intemporal.doc.sqlite_store.event__GT_event_map,events)], null);
} else {
return null;
}
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.intemporal$store$WorkflowStore$registrations__GT_table$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32616_32640 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32617_32641 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32618_32642 = true;
var _STAR_print_fn_STAR__temp_val__32619_32643 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32618_32642);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32619_32643);

try{cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1(intemporal.doc.sqlite.execute_BANG_(self__.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["select * from metadata"], null)));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32617_32641);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32616_32640);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.intemporal$store$WorkflowStore$save_activity_definition$arity$3 = (function (this$,aid,fvar){
var self__ = this;
var this$__$1 = this;
return intemporal.doc.sqlite.execute_one_BANG_(self__.db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["insert into metadata(uid,var,type) values(?,?,?)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(aid),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(fvar),"activity"], null));
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.intemporal$store$WorkflowStore$id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return "sqlite-store";
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.intemporal$store$WorkflowStore$next_event$arity$3 = (function (this$,wid,runid){
var self__ = this;
var this$__$1 = this;
return intemporal.doc.sqlite_store.event__GT_event_map(intemporal.doc.sqlite.execute_one_BANG_(self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["select * from events where runid=? and (deleted is false or deleted is null) ","order by id asc limit 1"].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(runid)], null)));
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.prototype.intemporal$store$WorkflowStore$next_event$arity$4 = (function (this$,wid,runid,evtid){
var self__ = this;
var this$__$1 = this;
return intemporal.doc.sqlite_store.event__GT_event_map(intemporal.doc.sqlite.execute_one_BANG_(self__.db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["select * from events where runid=? and (deleted is false or deleted is null) ","and id > ? order by id asc limit 1"].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(runid),evtid], null)));
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta32602","meta32602",-70307808,null)], null);
}));

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.cljs$lang$type = true);

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.cljs$lang$ctorStr = "intemporal.doc.sqlite-store/t_intemporal$doc$sqlite_store32601");

(intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"intemporal.doc.sqlite-store/t_intemporal$doc$sqlite_store32601");
}));

/**
 * Positional factory function for intemporal.doc.sqlite-store/t_intemporal$doc$sqlite_store32601.
 */
intemporal.doc.sqlite_store.__GT_t_intemporal$doc$sqlite_store32601 = (function intemporal$doc$sqlite_store$make_sqlite_store_$___GT_t_intemporal$doc$sqlite_store32601(db__$1,meta32602){
return (new intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601(db__$1,meta32602));
});

}

return (new intemporal.doc.sqlite_store.t_intemporal$doc$sqlite_store32601(db,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=intemporal.doc.sqlite_store.js.map
