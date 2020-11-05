@questions.each do |question|
  json.set! question.id do
      json.extract! question, :id, :body, :answer_one, :answer_two, :answer_three, :answer_four
  end
end