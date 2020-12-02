class AddScoreToQuizzesTaken < ActiveRecord::Migration[5.2]
  def change
    add_column :quizzes_taken, :score, :integer
  end
end
