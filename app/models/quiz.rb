class Quiz < ApplicationRecord
  validates :user_id, :title, :subject, presence: true

  belongs_to :user 

  has_many :questions
end 