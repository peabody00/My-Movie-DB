Rails.application.routes.draw do
  resources :user_movies
  resources :movies
  resources :users
  post '/login', to: 'auth#create'
  get '/find_movie/:movieID', to: 'movies#find_movie'

  resources :users do
    resources :user_movies
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
