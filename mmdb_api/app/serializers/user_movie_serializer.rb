class UserMovieSerializer < ActiveModel::Serializer
  attributes :id, :user_rating, :like_dislike, :watched, :watch_list, :user_id, :movie_id
end
