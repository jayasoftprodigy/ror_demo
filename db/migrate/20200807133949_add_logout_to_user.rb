class AddLogoutToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :logout, :boolean, default: false
  end
end
