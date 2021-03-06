class Api::QuestionsController < ApplicationController 
  def create 
    @question = Question.new(question_params)
    if(@question.save)
      render :show
    else 
      render json: @question.errors.full_messages
    end
  end 

  def quiz_questions 
    @questions = Question.where(quiz_id: params[:quiz_id])
    render :index
  end

  def show 
    @question = Question.find(params[:id])
  end 

  def update 
    @question = Question.find(params[:id])
    if(@question.update(question_params))
      render :show 
    else  
      render json: @question.errors.full_messages 
    end
  end 

  def index 
    @questions = Question.where(quiz_id: params[:quiz_id])
  end

  def destroy 
    @question = Question.find(params[:id])
    @question.destroy
   
  end 

  def question_params
    params.require(:question).permit(:id, :quiz_id, :body, :answer_one, :answer_two, :answer_three, :answer_four, :correct_answer)
  end
end