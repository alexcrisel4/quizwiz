class Question < ApplicationRecord
  validates :body, :quiz_id, :correct_answer, presence: true 


  belongs_to :quiz

  # has_many :answers, dependent: :destroy
end 