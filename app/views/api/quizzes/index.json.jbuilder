@quizzes.each do |quiz|
  json.set! quiz.id do
      json.extract! quiz, :id, :title, :subject
  end
end