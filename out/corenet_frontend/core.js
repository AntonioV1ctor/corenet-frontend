// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('corenet_frontend.core');
goog.require('cljs.core');
goog.require('ajax.core');
corenet_frontend.core.api_url = "http://localhost:5000/api/v1";
corenet_frontend.core.get_id = (function corenet_frontend$core$get_id(){
corenet_frontend.core.param = (new URLSearchParams(location.search));

return corenet_frontend.core.param.get("id");
});
corenet_frontend.core.render_BANG_ = (function corenet_frontend$core$render_BANG_(){
return ajax.core.GET.call(null,"http://localhost:5000/api/v1/all-blogs",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return (document.getElementById("display").innerHTML = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (blog){
return ["<form method='get' action='/public/blog.html' class='corenet-home-div-blog-1'>","<input type='hidden' value='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(blog)),"' name='id'>","<button class='blog-title' type='submit'><h3>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"titulo","titulo",-1497104248).cljs$core$IFn$_invoke$arity$1(blog)),"</h3></button>","</form>"].join('');
}),new cljs.core.Keyword(null,"blogs","blogs",-1052263917).cljs$core$IFn$_invoke$arity$1(response))));
})], null));
});
corenet_frontend.core.render_title_BANG_ = (function corenet_frontend$core$render_title_BANG_(){
return ajax.core.GET.call(null,["http://localhost:5000/api/v1/blog-id?id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(corenet_frontend.core.get_id.call(null))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return (document.getElementById("titulo").innerHTML = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (blogs){
return ["<h1>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"titulo","titulo",-1497104248).cljs$core$IFn$_invoke$arity$1(blogs)),"</h1>"].join('');
}),new cljs.core.Keyword(null,"blog","blog",-302707364).cljs$core$IFn$_invoke$arity$1(response))));
})], null));
});
if(cljs.core.truth_(document.getElementById("titulo"))){
corenet_frontend.core.render_title_BANG_.call(null);
} else {
}
if(cljs.core.truth_(document.getElementById("display"))){
corenet_frontend.core.render_BANG_.call(null);
} else {
}

//# sourceMappingURL=core.js.map
