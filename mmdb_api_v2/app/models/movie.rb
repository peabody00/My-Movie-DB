class Movie < ApplicationRecord
    has_many :user_movies
    accepts_nested_attributes_for :user_movies
end
