Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
        resources :todo_items, only: [:index, :create, :destroy, :update]
        end
    end
end
