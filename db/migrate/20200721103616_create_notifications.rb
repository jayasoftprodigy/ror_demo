class CreateNotifications < ActiveRecord::Migration[5.0]
  def change
    create_table :notifications do |t|
      t.references :user, foreign_key: true
      t.hstore :details, default: {}
      t.string :message
      t.string :noti_type
      t.integer :instance_id
      t.string :title
      t.boolean :seen

      t.timestamps
    end
  end
end
