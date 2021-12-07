class CreateUserMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :user_movies do |t|
      t.integer :user_rating
      t.boolean :like_dislike
      t.boolean :watched
      t.boolean :watch_list
      t.integer :user_id
      t.integer :movie_id

      t.timestamps
    end
  end
end
