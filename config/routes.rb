Rails.application.routes.draw do
  # get 'web_app/main'
  root to: 'web_app#main'

  namespace :api do
    namespace :v1 do
        resources :todo_items, only: [:index, :create, :destroy, :update]
    end
  end
end
