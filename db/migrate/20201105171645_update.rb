class Update < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :answer_one, :string
    add_column :questions, :answer_two, :string
    add_column :questions, :answer_three, :string
    add_column :questions, :answer_four, :string
    add_column :questions, :correct_answer, :integer 
  end
end
