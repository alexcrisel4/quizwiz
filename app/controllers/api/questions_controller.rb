class Api::QuestionsController < ApplicationController 
  def create 
    @question = Question.new(question_params)
    if(@question.save)
      render :show
    else 
      render json: @question.errors.full_messages
    end
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

  

  def destroy 
    @question = Question.find(params[:id])
    @question.destroy
   
  end 

  def question_params
    params.require(:question).permit(:id, :body, :question_one, :question_two, :question_three, :question_four, :correct_answer)
  end
end