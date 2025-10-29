// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__2036){
var map__2037 = p__2036;
var map__2037__$1 = cljs.core.__destructure_map.call(null,map__2037);
var m = map__2037__$1;
var n = cljs.core.get.call(null,map__2037__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__2037__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__2038_2066 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__2039_2067 = null;
var count__2040_2068 = (0);
var i__2041_2069 = (0);
while(true){
if((i__2041_2069 < count__2040_2068)){
var f_2070 = cljs.core._nth.call(null,chunk__2039_2067,i__2041_2069);
cljs.core.println.call(null,"  ",f_2070);


var G__2071 = seq__2038_2066;
var G__2072 = chunk__2039_2067;
var G__2073 = count__2040_2068;
var G__2074 = (i__2041_2069 + (1));
seq__2038_2066 = G__2071;
chunk__2039_2067 = G__2072;
count__2040_2068 = G__2073;
i__2041_2069 = G__2074;
continue;
} else {
var temp__5804__auto___2075 = cljs.core.seq.call(null,seq__2038_2066);
if(temp__5804__auto___2075){
var seq__2038_2076__$1 = temp__5804__auto___2075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2038_2076__$1)){
var c__5548__auto___2077 = cljs.core.chunk_first.call(null,seq__2038_2076__$1);
var G__2078 = cljs.core.chunk_rest.call(null,seq__2038_2076__$1);
var G__2079 = c__5548__auto___2077;
var G__2080 = cljs.core.count.call(null,c__5548__auto___2077);
var G__2081 = (0);
seq__2038_2066 = G__2078;
chunk__2039_2067 = G__2079;
count__2040_2068 = G__2080;
i__2041_2069 = G__2081;
continue;
} else {
var f_2082 = cljs.core.first.call(null,seq__2038_2076__$1);
cljs.core.println.call(null,"  ",f_2082);


var G__2083 = cljs.core.next.call(null,seq__2038_2076__$1);
var G__2084 = null;
var G__2085 = (0);
var G__2086 = (0);
seq__2038_2066 = G__2083;
chunk__2039_2067 = G__2084;
count__2040_2068 = G__2085;
i__2041_2069 = G__2086;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_2087 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_2087);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_2087)))?cljs.core.second.call(null,arglists_2087):arglists_2087));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__2042_2088 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__2043_2089 = null;
var count__2044_2090 = (0);
var i__2045_2091 = (0);
while(true){
if((i__2045_2091 < count__2044_2090)){
var vec__2054_2092 = cljs.core._nth.call(null,chunk__2043_2089,i__2045_2091);
var name_2093 = cljs.core.nth.call(null,vec__2054_2092,(0),null);
var map__2057_2094 = cljs.core.nth.call(null,vec__2054_2092,(1),null);
var map__2057_2095__$1 = cljs.core.__destructure_map.call(null,map__2057_2094);
var doc_2096 = cljs.core.get.call(null,map__2057_2095__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2097 = cljs.core.get.call(null,map__2057_2095__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2093);

cljs.core.println.call(null," ",arglists_2097);

if(cljs.core.truth_(doc_2096)){
cljs.core.println.call(null," ",doc_2096);
} else {
}


var G__2098 = seq__2042_2088;
var G__2099 = chunk__2043_2089;
var G__2100 = count__2044_2090;
var G__2101 = (i__2045_2091 + (1));
seq__2042_2088 = G__2098;
chunk__2043_2089 = G__2099;
count__2044_2090 = G__2100;
i__2045_2091 = G__2101;
continue;
} else {
var temp__5804__auto___2102 = cljs.core.seq.call(null,seq__2042_2088);
if(temp__5804__auto___2102){
var seq__2042_2103__$1 = temp__5804__auto___2102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2042_2103__$1)){
var c__5548__auto___2104 = cljs.core.chunk_first.call(null,seq__2042_2103__$1);
var G__2105 = cljs.core.chunk_rest.call(null,seq__2042_2103__$1);
var G__2106 = c__5548__auto___2104;
var G__2107 = cljs.core.count.call(null,c__5548__auto___2104);
var G__2108 = (0);
seq__2042_2088 = G__2105;
chunk__2043_2089 = G__2106;
count__2044_2090 = G__2107;
i__2045_2091 = G__2108;
continue;
} else {
var vec__2058_2109 = cljs.core.first.call(null,seq__2042_2103__$1);
var name_2110 = cljs.core.nth.call(null,vec__2058_2109,(0),null);
var map__2061_2111 = cljs.core.nth.call(null,vec__2058_2109,(1),null);
var map__2061_2112__$1 = cljs.core.__destructure_map.call(null,map__2061_2111);
var doc_2113 = cljs.core.get.call(null,map__2061_2112__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2114 = cljs.core.get.call(null,map__2061_2112__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2110);

cljs.core.println.call(null," ",arglists_2114);

if(cljs.core.truth_(doc_2113)){
cljs.core.println.call(null," ",doc_2113);
} else {
}


var G__2115 = cljs.core.next.call(null,seq__2042_2103__$1);
var G__2116 = null;
var G__2117 = (0);
var G__2118 = (0);
seq__2042_2088 = G__2115;
chunk__2043_2089 = G__2116;
count__2044_2090 = G__2117;
i__2045_2091 = G__2118;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__2062 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__2063 = null;
var count__2064 = (0);
var i__2065 = (0);
while(true){
if((i__2065 < count__2064)){
var role = cljs.core._nth.call(null,chunk__2063,i__2065);
var temp__5804__auto___2119__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___2119__$1)){
var spec_2120 = temp__5804__auto___2119__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_2120));
} else {
}


var G__2121 = seq__2062;
var G__2122 = chunk__2063;
var G__2123 = count__2064;
var G__2124 = (i__2065 + (1));
seq__2062 = G__2121;
chunk__2063 = G__2122;
count__2064 = G__2123;
i__2065 = G__2124;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__2062);
if(temp__5804__auto____$1){
var seq__2062__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2062__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__2062__$1);
var G__2125 = cljs.core.chunk_rest.call(null,seq__2062__$1);
var G__2126 = c__5548__auto__;
var G__2127 = cljs.core.count.call(null,c__5548__auto__);
var G__2128 = (0);
seq__2062 = G__2125;
chunk__2063 = G__2126;
count__2064 = G__2127;
i__2065 = G__2128;
continue;
} else {
var role = cljs.core.first.call(null,seq__2062__$1);
var temp__5804__auto___2129__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___2129__$2)){
var spec_2130 = temp__5804__auto___2129__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_2130));
} else {
}


var G__2131 = cljs.core.next.call(null,seq__2062__$1);
var G__2132 = null;
var G__2133 = (0);
var G__2134 = (0);
seq__2062 = G__2131;
chunk__2063 = G__2132;
count__2064 = G__2133;
i__2065 = G__2134;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map.call(null,o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__2137 = datafied_throwable;
var map__2137__$1 = cljs.core.__destructure_map.call(null,map__2137);
var via = cljs.core.get.call(null,map__2137__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__2137__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__2137__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__2138 = cljs.core.last.call(null,via);
var map__2138__$1 = cljs.core.__destructure_map.call(null,map__2138);
var type = cljs.core.get.call(null,map__2138__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__2138__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__2138__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__2139 = data;
var map__2139__$1 = cljs.core.__destructure_map.call(null,map__2139);
var problems = cljs.core.get.call(null,map__2139__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__2139__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__2139__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__2140 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__2140__$1 = cljs.core.__destructure_map.call(null,map__2140);
var top_data = map__2140__$1;
var source = cljs.core.get.call(null,map__2140__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__2141 = phase;
var G__2141__$1 = (((G__2141 instanceof cljs.core.Keyword))?G__2141.fqn:null);
switch (G__2141__$1) {
case "read-source":
var map__2142 = data;
var map__2142__$1 = cljs.core.__destructure_map.call(null,map__2142);
var line = cljs.core.get.call(null,map__2142__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__2142__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__2143 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__2143__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__2143,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__2143);
var G__2143__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__2143__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__2143__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__2143__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__2143__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__2144 = top_data;
var G__2144__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__2144,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__2144);
var G__2144__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__2144__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__2144__$1);
var G__2144__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__2144__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__2144__$2);
var G__2144__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__2144__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__2144__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__2144__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__2144__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__2145 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__2145,(0),null);
var method = cljs.core.nth.call(null,vec__2145,(1),null);
var file = cljs.core.nth.call(null,vec__2145,(2),null);
var line = cljs.core.nth.call(null,vec__2145,(3),null);
var G__2148 = top_data;
var G__2148__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__2148,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__2148);
var G__2148__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__2148__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__2148__$1);
var G__2148__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.call(null,G__2148__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__2148__$2);
var G__2148__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__2148__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__2148__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__2148__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__2148__$4;
}

break;
case "execution":
var vec__2149 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__2149,(0),null);
var method = cljs.core.nth.call(null,vec__2149,(1),null);
var file = cljs.core.nth.call(null,vec__2149,(2),null);
var line = cljs.core.nth.call(null,vec__2149,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__2136_SHARP_){
var or__5025__auto__ = (p1__2136_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__2136_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line;
}
})();
var G__2152 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__2152__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__2152,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__2152);
var G__2152__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__2152__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__2152__$1);
var G__2152__$3 = (cljs.core.truth_((function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
}
})())?cljs.core.assoc.call(null,G__2152__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__2152__$2);
var G__2152__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__2152__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__2152__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__2152__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__2152__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2141__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__2156){
var map__2157 = p__2156;
var map__2157__$1 = cljs.core.__destructure_map.call(null,map__2157);
var triage_data = map__2157__$1;
var phase = cljs.core.get.call(null,map__2157__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__2157__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__2157__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__2157__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__2157__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__2157__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__2157__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__2157__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = source;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = line;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5025__auto__ = class$;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__2158 = phase;
var G__2158__$1 = (((G__2158 instanceof cljs.core.Keyword))?G__2158.fqn:null);
switch (G__2158__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__2159_2168 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__2160_2169 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__2161_2170 = true;
var _STAR_print_fn_STAR__temp_val__2162_2171 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__2161_2170);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__2162_2171);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__2154_SHARP_){
return cljs.core.dissoc.call(null,p1__2154_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__2160_2169);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__2159_2168);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__2163_2172 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__2164_2173 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__2165_2174 = true;
var _STAR_print_fn_STAR__temp_val__2166_2175 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__2165_2174);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__2166_2175);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__2155_SHARP_){
return cljs.core.dissoc.call(null,p1__2155_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__2164_2173);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__2163_2172);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2158__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
