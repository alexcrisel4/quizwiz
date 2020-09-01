json.extract! @user, :id, :name, :email

json.quizzes do
  @user.quizzes.each do |quiz|
    json.set! quiz.id do
      json.extract! quiz, :id, :title, :subject
    end
  end
end

json.quizzes_taken do
  @user.quizzes_taken.each do |quiz_id|
    json.set! quiz_id do 
      quiz = Quiz.find_by(id: quiz_id)
      json.extract! quiz, :id, :title, :subject 
    end
  end
end 