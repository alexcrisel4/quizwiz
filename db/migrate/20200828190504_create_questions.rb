class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.text :body
      t.integer :quiz_id
    end
  end
end
