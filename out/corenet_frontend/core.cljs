(ns corenet_frontend.core
  (:require 
  [ajax.core :refer [GET POST]]
  [dommy.core :as dommy :refer-macros [sel1]]))


(defn render! []
  (GET "http://localhost:5000/api/v1/all-blogs"
    {:response-format :json
     :keywords? true  
     :handler (fn [response]
        (set! (.-innerHTML (.getElementById js/document "display"))
          (apply str
          (map (fn [blog]
            (str "<div class='corenet-home-div-blog-1'>"
                 "<h3>" (:titulo blog) "</h3>"
                 
                 "</div>"))
      (:blogs response)))))}))

(defn click-handler [e]
    (POST "http://localhost:5000/api/v1/create-post"
        {:params {:titulo "Hello World"
                  :conteudo    "Bobasdadsdf"}
         :handler handler
         :error-handler error-handler}))

(dommy/listen! (sel1 :#mybutton) :click click-handler)
;;(dommy/unlisten! (sel1 :#mybutton) :click click-handler)

(render!)
;;"<p>" (:conteudo blog) "</p>"