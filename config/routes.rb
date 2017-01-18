Rails.application.routes.draw do
  resources :forest do
    get :create_random_integer, on: :collection
  end

  root 'forest#index'
end
