Rails.application.routes.draw do
  resources :forest, :tweets

  root 'forest#index'
end
