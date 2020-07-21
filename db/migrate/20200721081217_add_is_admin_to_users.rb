class AddIsAdminToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :is_admin, :boolean, default: false
    add_column :users, :social_id, :string
    add_column :users, :login_with, :string
    add_column :users, :device_id, :string
    add_column :users, :device_tpe, :string
    add_column :users, :remote_image_url, :string
    add_reference :users, :user_role, foreign_key: true
  end
end



