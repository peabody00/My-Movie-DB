class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :movieID
      t.string :title
      t.string :tagline
      t.string :overview
      t.string :poster_path
      t.string :production_companies
      t.string :genres
      t.string :release_date
      t.string :vote_average
      t.integer :runtime
      t.integer :revenue
      t.string :backdrop

      t.timestamps
    end
  end
end
