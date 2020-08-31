class UsersController < ApplicationController 
  before_action :require_current_user!, except: [:create, :new]

  def create 
    @user = User.new(params[:user])
    if @user.save
      login!(@user)
      redirect_to user_url
    else 
      render json: @user.errors.full_messages
    end
  end
  
  # def show
  #   @user = User.find_by(params[:user][:id])
  # end
  
  





end