Rails.application.routes.draw do
 
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/delete_account", to: "users#destroy"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/makes", to: "makes#index"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
