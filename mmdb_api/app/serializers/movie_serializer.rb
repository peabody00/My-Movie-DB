class MovieSerializer < ActiveModel::Serializer
  attributes :id, :movieID, :title, :tagline, :overview, :poster_path, :production_companies, :genres, :release_date, :vote_average, :runtime, :revenue, :backdrop
end
