Rails.application.routes.draw do
 
  get "/me", to: "users#show"
  get "/show_user_builds", to: "users#show_user_builds"
  post "/signup", to: "users#create"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/featured_make", to: "makes#featured"
  get "/popular_makes", to: "makes#popular"
  get "match_makes", to: "makes#match"

  get "/fastest_builds", to: "builds#fastest"
  get "/highest_budgets", to: "builds#budget"

  resources :makes, only: [:index]

  resources :users, except: [:index, :show, :create, :update, :destroy] do
    resources :builds, only: [:index, :create, :update, :destroy]
  end
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
