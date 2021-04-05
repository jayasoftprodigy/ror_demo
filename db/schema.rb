# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_07_133949) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "hstore"
  enable_extension "plpgsql"

  create_table "notifications", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.hstore "details", default: {}
    t.string "message"
    t.string "noti_type"
    t.integer "instance_id"
    t.string "title"
    t.boolean "seen"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_notifications_on_user_id"
  end

  create_table "user_roles", id: :serial, force: :cascade do |t|
    t.integer "role"
    t.string "role_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "name"
    t.string "image"
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_admin", default: false
    t.string "social_id"
    t.string "login_with"
    t.string "device_id"
    t.string "device_tpe"
    t.string "remote_image_url"
    t.integer "user_role_id"
    t.boolean "logout", default: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["user_role_id"], name: "index_users_on_user_role_id"
  end

  add_foreign_key "notifications", "users"
  add_foreign_key "users", "user_roles"
end
