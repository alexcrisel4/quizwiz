# class Api::AnswersController < ApplicationController 
#   def create 
#     @answer = Answer.new(answer_params)
#     if(@answer.save)
#       render :show
#     else 
#       render json: @answer.errors.full_messages
#     end
#   end 

#   def show 
#     @answer = Answer.find(params[:id])
#   end 

#   def update 
#     @answer = Answer.find(params[:id])
#     if(@answer.update(answer_params))
#       render :show 
#     else  
#       render json: @answer.errors.full_messages 
#     end
#   end 


#   def destroy 
#     @answer = Answer.find(params[:id])
#     @answer.destroy
#   end 

#   def answer_params
#     params.require(:answer).permit(:id, :body, :correct)
#   end 

# end