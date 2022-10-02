Rails.application.routes.draw do
 
  get "/me", to: "users#show"
  post "/signup", to: "users#create"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/non_user_makes", to: "makes#show"
  get "/featured_make", to: "makes#featured"
  get "/popular_makes", to: "makes#popular"

  resources :builds, only: [:create]

  resources :makes, only: [:index, :create, :destroy] do
    resources :builds, only: [:index, :create, :update, :destroy]
  end
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
