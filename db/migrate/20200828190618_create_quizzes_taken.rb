class CreateQuizzesTaken < ActiveRecord::Migration[5.2]
  def change
    create_table :quizzes_taken do |t|
      t.integer :quiz_id
      t.integer :user_id
    end
  end
end
