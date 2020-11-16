json.extract! @quiz, :id, :title, :subject

json.questions do
  @quiz.questions.each do |question|
    json.set! question.id do
      json.extract! question, :id, :body
    end
  end
end
