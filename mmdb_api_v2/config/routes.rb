Rails.application.routes.draw do
  resources :user_movies
  resources :movies
  resources :users
  post '/login', to: 'auth#create'

  resources :users do
    resources :usermovies
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
