class Answer < ApplicationRecord
  validates :body, :question_id, :correct, presence: true 

  belongs_to :question
end