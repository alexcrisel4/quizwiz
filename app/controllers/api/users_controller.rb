class Api::UsersController < ApplicationController 
protect_from_forgery with: :null_session

  def create 
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else 
      render json: @user.errors.full_messages
    end
  end
  
  def show
    @user = User.find(params[:id])
    if @user 
      render :show
    else 
      render json: @user.errors.full_messages
    end
  end
  
  def user_params
    params.require(:user).permit(:name, :email, :password, :id)
  end 





end