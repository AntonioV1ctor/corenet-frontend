(ns corenet_frontend.core
  (:require 
  [ajax.core :refer [GET POST]]))


(def api-url "http://localhost:5000/api/v1")


(defn get-id []
  (def param (new js/URLSearchParams (.-search js/location)))
  (.get param "id"))

(defn render! []
  (GET "http://localhost:5000/api/v1/all-blogs"
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
  (GET (str "http://localhost:5000/api/v1/blog-id?id=" (get-id))
       {:response-format :json
        :keywords? true
        :handler (fn [response]
                   (set! (.-innerHTML (.getElementById js/document "titulo"))
                         (str "<h1>" (get-in response [:blogs :titulo]) "</h1>")))}))

(defn render-content! []
  (GET (str "http://localhost:5000/api/v1/blog-id?id=" (get-id))
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
  (print (.-fetch "https://test.com"))
)


(when (.getElementById js/document "titulo")
  (render-title!))

(when (.getElementById js/document "conteudo")
  (render-content!))

(when (.getElementById js/document "display")
  (render!))

;;(def get-id-byURL (.-search js/location))
;;(def filter-id (new js/URLSearchParams get-id-byURL))
;;(get-form-titulo-value)
;;(get-form-conteudo-value)
;;(.-value titulo)
