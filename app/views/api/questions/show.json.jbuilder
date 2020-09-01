json.extract! @question, :id, :body

json.answers do 
  @question.answers.each do |answer|
    json.set! answer.id do 
      json.extract! answer, :id, :body
    end
  end
end