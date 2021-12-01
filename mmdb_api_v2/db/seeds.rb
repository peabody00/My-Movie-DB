# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'frogers', password: 'password')
Movie.create(
    movieID: 862,
    title: "Toy Story",
    tagline: "",
    overview: "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
    poster_path: "/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    production_companies: "Pixar",
    genres: "Animation, Adventure, Family, Comedy",
    release_date: "1995-10-30",
    vote_average: 8,
    runtime: 81,
    backdrop: "/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg")
UserMovie.create(user_rating: 5, like_dislike: "like", watched: true, watch_list: false, user_id: 1, movie_id: 1)
