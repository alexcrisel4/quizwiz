class Api::QuizzesController < ApplicationController 
  def create 
    @quiz = Quiz.new(quiz_params)
    if(@quiz.save)
      render :show
    else 
      render json: @quiz.errors.full_messages
    end
  end 

  def show 
    @quiz = Quiz.find(params[:id])
  end 

  def update 
    @quiz = Quiz.find(params[:id])
    if(@quiz.update(quiz_params))
      render :show 
    else  
      render json: @quiz.errors.full_messages 
    end
  end 

  def index 
    @quizzes = Quiz.all 
  end 

  def destroy 
    @quiz = Quiz.find(params[:id])
    @quiz.destroy
    redirect_to :index
  end 

  def quiz_params
    params.require(:quiz).permit(:id, :title, :subject)
  end 

end