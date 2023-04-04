goog.provide('intemporal.doc.sqlite');
intemporal.doc.sqlite.run = (function intemporal$doc$sqlite$run(var_args){
var G__33319 = arguments.length;
switch (G__33319) {
case 2:
return intemporal.doc.sqlite.run.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return intemporal.doc.sqlite.run.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(intemporal.doc.sqlite.run.cljs$core$IFn$_invoke$arity$2 = (function (db,stmt){
return db.run(stmt);
}));

(intemporal.doc.sqlite.run.cljs$core$IFn$_invoke$arity$3 = (function (db,stmt,argv){
return db.run(stmt,cljs.core.clj__GT_js(argv));
}));

(intemporal.doc.sqlite.run.cljs$lang$maxFixedArity = 3);

intemporal.doc.sqlite.exec = (function intemporal$doc$sqlite$exec(db,stmt){
return db.exec(stmt);
});
intemporal.doc.sqlite.execute_BANG_ = (function intemporal$doc$sqlite$execute_BANG_(db,stmt_PLUS_params){
var stmt = cljs.core.first(stmt_PLUS_params);
var params = (function (){var or__5045__auto__ = cljs.core.rest(stmt_PLUS_params);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var s = db.prepare(stmt);
var _ = s.bind(cljs.core.clj__GT_js(params));
try{var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5802__auto__ = s.step();
if(cljs.core.truth_(temp__5802__auto__)){
var ___$1 = temp__5802__auto__;
var G__33484 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,clojure.walk.keywordize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(s.getAsObject())));
res = G__33484;
continue;
} else {
return res;
}
break;
}
}finally {s.free();
}});
intemporal.doc.sqlite.execute_one_BANG_ = (function intemporal$doc$sqlite$execute_one_BANG_(db,stmt_PLUS_params){
var stmt = cljs.core.first(stmt_PLUS_params);
var params = (function (){var or__5045__auto__ = cljs.core.rest(stmt_PLUS_params);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var s = db.prepare(stmt);
var _ = s.bind(cljs.core.clj__GT_js(params));
try{var temp__5804__auto__ = s.step();
if(cljs.core.truth_(temp__5804__auto__)){
var ___$1 = temp__5804__auto__;
return clojure.walk.keywordize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(s.getAsObject()));
} else {
return null;
}
}finally {s.free();
}});
intemporal.doc.sqlite.migrate = (function intemporal$doc$sqlite$migrate(db,scripts){
return Promise.all(cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33354_SHARP_){
return window.fetch(p1__33354_SHARP_);
}),scripts))).then((function (proms){
return Promise.all(cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33359_SHARP_){
return p1__33359_SHARP_.text();
}),proms)));
})).then((function (texts){
var seq__33365 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,scripts,texts));
var chunk__33366 = null;
var count__33367 = (0);
var i__33368 = (0);
while(true){
if((i__33368 < count__33367)){
var vec__33439 = chunk__33366.cljs$core$IIndexed$_nth$arity$2(null,i__33368);
var resource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33439,(0),null);
var script = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33439,(1),null);
console.info("Running script",resource);

intemporal.doc.sqlite.run.cljs$core$IFn$_invoke$arity$2(db,script);


var G__33499 = seq__33365;
var G__33500 = chunk__33366;
var G__33501 = count__33367;
var G__33502 = (i__33368 + (1));
seq__33365 = G__33499;
chunk__33366 = G__33500;
count__33367 = G__33501;
i__33368 = G__33502;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33365);
if(temp__5804__auto__){
var seq__33365__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33365__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33365__$1);
var G__33505 = cljs.core.chunk_rest(seq__33365__$1);
var G__33506 = c__5568__auto__;
var G__33507 = cljs.core.count(c__5568__auto__);
var G__33508 = (0);
seq__33365 = G__33505;
chunk__33366 = G__33506;
count__33367 = G__33507;
i__33368 = G__33508;
continue;
} else {
var vec__33449 = cljs.core.first(seq__33365__$1);
var resource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33449,(0),null);
var script = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33449,(1),null);
console.info("Running script",resource);

intemporal.doc.sqlite.run.cljs$core$IFn$_invoke$arity$2(db,script);


var G__33510 = cljs.core.next(seq__33365__$1);
var G__33511 = null;
var G__33512 = (0);
var G__33513 = (0);
seq__33365 = G__33510;
chunk__33366 = G__33511;
count__33367 = G__33512;
i__33368 = G__33513;
continue;
}
} else {
return null;
}
}
break;
}
}));
});
intemporal.doc.sqlite.bootstrap = (function intemporal$doc$sqlite$bootstrap(SQL){
var db = (new SQL.Database());
var scripts = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["resources/migrations/20220916152129-metadata.up.sql","resources/migrations/20220916152135-events.up.sql"], null);
return intemporal.doc.sqlite.migrate(db,scripts).then((function (_){
return db;
}));
});
intemporal.doc.sqlite.init = (function intemporal$doc$sqlite$init(callback){
var cfg = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["locateFile",(function (f){
return ["https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('');
})], null));
return window.initSqlJs(cfg).then(intemporal.doc.sqlite.bootstrap).then(callback);
});

//# sourceMappingURL=intemporal.doc.sqlite.js.map
