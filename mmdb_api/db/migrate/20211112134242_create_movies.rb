class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.integer :movieID
      t.string :title
      t.string :tagline
      t.string :overview
      t.string :poster_path
      t.text[] :production_companies
      t.text[] :genres
      t.string :release_date
      t.real :vote_average
      t.integer :runtime
      t.integer :revenue
      t.string :backdrop

      t.timestamps
    end
  end
end
