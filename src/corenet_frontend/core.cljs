(ns corenet_frontend.core
  (:require 
  [ajax.core :refer [GET POST]]))

;;(def all-blogs (fetch/get "http://localhost:5000/api/v1/all-blogs"))

;; (GET "http://localhost:5000/api/v1/all-blogs"
;;   {:handler (fn [response]
;;               (println "Sucesso:" response))
;;    :error-handler (fn [error]
;;                     (println "Erro:" error))})



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

(render!)
;;"<p>" (:conteudo blog) "</p>"