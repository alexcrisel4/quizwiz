class Api::SessionsController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if user.nil?
      render json: "Incorrect email or password"
    else
      login!(user)
      render json: current_user
    end
  end

  def destroy
    logout!
  end
end
