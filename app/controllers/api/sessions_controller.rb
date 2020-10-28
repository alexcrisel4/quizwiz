class Api::SessionsController < ApplicationController 
  protect_from_forgery with: :null_session
  def create
    user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if user.nil? 
      render json: "Incorrect email or password"
    else 
      login!(user)
      # redirect_to user_url
    end
  end

  def destroy 
    logout!
    # redirect_to new_session_url 
  end 


end