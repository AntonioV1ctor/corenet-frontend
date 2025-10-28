(ns corenet_frontend.core
  (:require 
  [ajax.core :refer [GET POST]]))


(defn render! []
  (GET "http://localhost:5000/api/v1/all-blogs"
    {:response-format :json
     :keywords? true  
     :handler (fn [response]
        (set! (.-innerHTML (.getElementById js/document "display"))
          (apply str
          (map (fn [blog]
            (str "<form method='get' action='http://localhost:5000/api/v1/blog-id' class='corenet-home-div-blog-1'>"
                 "<input type='hidden' value='"(:id blog)"' name='id'>"
                 "<button class='blog-title' type='submit'><h3>"(:titulo blog)"</h3></button>"
                 "</form>"))
      (:blogs response)))))}))

(render!)
;;"<p>" (:conteudo blog) "</p>"