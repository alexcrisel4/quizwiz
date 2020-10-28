class Api::UsersController < ApplicationController 
protect_from_forgery with: :null_session

  def create 
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      # redirect_to user_url
    else 
      render json: @user.errors.full_messages
    end
  end
  
  # def show
  #   @user = User.find_by(params[:user][:id])
  # end
  
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end 





end