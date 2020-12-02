Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do 
    resources :users, only: [:create, :show, :destroy, :update]
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:update, :destroy, :show]
    resources :quizzes do 
      resources :questions, only: [:create, :index] do 
        resources :answers 
      end 
    end 
  end
  get '/api/quizzes/:id/take_quiz', to: 'api/questions#quiz_questions', as: 'quiz_questions'
  root to: "static_pages#root"
end
