# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_23_145440) do

  create_table "movies", force: :cascade do |t|
    t.integer "movieID"
    t.string "title"
    t.string "tagline"
    t.string "overview"
    t.string "poster_path"
    t.string "production_companies"
    t.string "genres"
    t.string "release_date"
    t.string "vote_average"
    t.integer "runtime"
    t.integer "revenue"
    t.string "backdrop"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_movies", force: :cascade do |t|
    t.integer "user_rating"
    t.boolean "like_dislike"
    t.boolean "watched"
    t.boolean "watch_list"
    t.integer "user_id"
    t.integer "movie_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
