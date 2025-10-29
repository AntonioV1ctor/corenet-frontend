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
            (str "<form method='get' action='/public/blog.html' class='corenet-home-div-blog-1'>"
                 "<input type='hidden' value='"(:id blog)"' name='id'>"
                 "<button class='blog-title' type='submit'><h3>"(:titulo blog)"</h3></button>"
                 "</form>"))
      (:blogs response)))))}))





(defn render-title! []
  (GET "http://localhost:5000/api/v1/blog-id?id="(get-id)
       {:response-format :json
        :keywords? true
        :handler (fn [response]
                   (set! (.-innerHTML (.getElementById js/document "titulo"))
                         (apply str (map (fn [blog]
                                           (str "<h1>" (:titulo blog) "</h1>"))
                                         (:blog response)))))}))






(render-title!)
(render!)
(set! (.-renderTitle js/window) render-title!)
;;(def get-id-byURL (.-search js/location))
;;(def filter-id (new js/URLSearchParams get-id-byURL))