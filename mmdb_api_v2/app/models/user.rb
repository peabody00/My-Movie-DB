class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }
    has_many :user_movies
    has_many :movies, through: :user_movies
end
