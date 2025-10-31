
(ns corenet_frontend.core
  (:require 
  [ajax.core :refer [GET POST]]))


(def api-url "https://apicorenet.eu-central-1.arkain.site/api/v1")


(defn get-id []
  (def param (new js/URLSearchParams (.-search js/location)))
  (.get param "id"))

(defn render! []
  (GET "https://apicorenet.eu-central-1.arkain.site/api/v1/all-blogs"
    {:response-format :json
     :keywords? true  
     :handler (fn [response]
        (set! (.-innerHTML (.getElementById js/document "display"))
          (apply str
          (map (fn [blog]
           (str "<form method='get' action='public/blog.html' class='corenet-home-div-blog-1'>"
                 "<input type='hidden' value='"(:id blog)"' name='id'>"
                 "<button class='blog-title' type='submit'><h3>"(:titulo blog)"</h3></button>"
                 "</form>"))
      (:blogs response)))))}))


(defn render-title! []
  (GET (str "https://apicorenet.eu-central-1.arkain.site/api/v1/blog-id?id=" (get-id))
       {:response-format :json
        :keywords? true
        :handler (fn [response]
                   (set! (.-innerHTML (.getElementById js/document "titulo"))
                        (str "<h1>" (get-in response [:blogs :titulo]) "</h1>")))}))

(defn render-content! []
  (GET (str "https://apicorenet.eu-central-1.arkain.site/api/v1/blog-id?id=" (get-id))
       {:response-format :json
        :keywords? true
        :handler (fn [response]
                   (set! (.-innerHTML (.getElementById js/document "conteudo"))
                        (str "<h3>" (get-in response [:blogs :conteudo]) "</h3>")))}))


(defn get-form-titulo-value []
  (def titulo (.getElementById js/document "titulo"))
     (.-value titulo))

(defn get-form-conteudo-value []
  (def conteudo (.getElementById js/document "conteudo"))
  (.-value conteudo))


(defn create-blog! []
  (POST (str "https://apicorenet.eu-central-1.arkain.site/api/v1/create-post?titulo="(str (get-form-titulo-value))"&conteudo=" (str (get-form-conteudo-value)))
       {:response-format :json
        :keywords? true}))


(defn wait-press-but []
  (def button (.getElementById js/document "create-post-button"))
  (.addEventListener button "click"
                    (fn [_]
                      (create-blog!)
                      (println "Post criado com sucesso!"))))


(when (.getElementById js/document "titulo")
  (render-title!))

(when (.getElementById js/document "conteudo")
  (render-content!))

(when (.getElementById js/document "display")
  (render!))

(when (.getElementById js/document "create-post-button")
  (wait-press-but))

;;(def get-id-byURL (.-search js/location))
;;(def filter-id (new js/URLSearchParams get-id-byURL))


;;(create-blog!)
;;(get-form-titulo-value)
;;(get-form-conteudo-value)

;;(.-value titulo)
