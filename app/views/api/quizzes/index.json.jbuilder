@quizzes.each do |quiz|
  json.set! quiz.id do
    json.extract! quiz, :id, :title, :subject
    json.num_questions quiz.questions.length
  end
end
