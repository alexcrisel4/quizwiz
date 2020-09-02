Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do 
    resources :users, only: [:create, :show, :destroy, :update]
    resource :session, only: [:create, :destroy]
    resources :quizzes do 
      resources :questions do 
        resources :answers 
      end 
    end 
  end
end
