class Users < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email
      t.string :name 
      t.string :password_digest 
      t.string :session_token 
      t.index([:email, :session_token], unique: true)
    end
  end
end
