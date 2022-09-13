Rails.application.routes.draw do
 
  get "/me", to: "users#show"
  post "/signup", to: "users#create"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  resources :makes, only: [:index, :create] do
    resources :builds, only: [:create, :update]
  end

  resources :builds, only: [:index, :destroy]
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
