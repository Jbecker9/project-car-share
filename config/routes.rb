Rails.application.routes.draw do
 
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/delete_user/:user_id", to: "users#destroy"
  get "/users", to: "users#index"


  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/makes", to: "makes#index"

  get "/builds", to: "builds#index"
  post "/builds", to: "builds#create"
  patch "/builds/:id", to: "builds#update"
  delete "/builds/:id", to: "builds#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
