class CreateUserRoles < ActiveRecord::Migration[5.0]
  def change
    create_table :user_roles do |t|
      t.integer :role
      t.string :role_type

      t.timestamps
    end
  end
end
