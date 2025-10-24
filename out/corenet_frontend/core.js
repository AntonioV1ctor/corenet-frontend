// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('corenet_frontend.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('dommy.core');
corenet_frontend.core.render_BANG_ = (function corenet_frontend$core$render_BANG_(){
return ajax.core.GET.call(null,"http://localhost:5000/api/v1/all-blogs",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return (document.getElementById("display").innerHTML = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (blog){
return ["<div class='corenet-home-div-blog-1'>","<h3>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"titulo","titulo",-1497104248).cljs$core$IFn$_invoke$arity$1(blog)),"</h3>","</div>"].join('');
}),new cljs.core.Keyword(null,"blogs","blogs",-1052263917).cljs$core$IFn$_invoke$arity$1(response))));
})], null));
});
corenet_frontend.core.click_handler = (function corenet_frontend$core$click_handler(e){
return ajax.core.POST.call(null,"http://localhost:5000/api/v1/create-post",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"titulo","titulo",-1497104248),"Hello World",new cljs.core.Keyword(null,"conteudo","conteudo",-1994664749),"Bobasdadsdf"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),corenet_frontend.core.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),corenet_frontend.core.error_handler], null));
});
dommy.core.listen_BANG_.call(null,document.getElementById("mybutton"),new cljs.core.Keyword(null,"click","click",1912301393),corenet_frontend.core.click_handler);
corenet_frontend.core.render_BANG_.call(null);

//# sourceMappingURL=core.js.map
