Rails.application.routes.draw do
  resources :forest

  root 'forest#index'

end
