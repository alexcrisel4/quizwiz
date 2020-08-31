class Question < ApplicationRecord
  validates :body, :quiz_id, presence: true 


  belongs_to :quiz

  has_many :answers
end 