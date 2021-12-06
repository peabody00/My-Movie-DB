# My Movie Database

Welcome to My Movie Database, a simple website that allows people to search movies.  A user can signup for an account and save movies they have watched as well as create a list of movies they want to watch.  This simple webpage is my Module 5 React project for Flatiron School.  

## Installation

To run this application first clone the code from GitHub.  It also uses The Movie Database API as the movie search engine.  An API key is required to use the search.  [Here](https://developers.themoviedb.org/3/getting-started/introduction) is information on how to sign up for an API key.

After cloning the repository run `npm install` to install any required packages.

Navigate to the `/mmdb_api_v2/` folder.

Run `rails db:migrate` to create the tables and database.

If you want to use some starter data, run `rails db:seed`.

Run `rails s` from the prompt to start the local webserver.  The webserver is needed to create new users and save the watch list and to watch list.

Navigate back to `/my-movie-db/` project folder.  Run `npm start` to start web app.

## Usage

This is a simple website that allows users to to search movies.  The search bar works with the React Autosuggest to bring up search recommendations as the user types.  Once the movie has been found it can be clicked on to load movie data.  The site can be used without an account to search movies and read information about about the movies including date it was released, descirption, popularity, and so on.  If a user wants they can also create an account which gives them the added features of creating a watch list of movies they have seen or a list of movies that they want to watch.  There is a link to create a new user as well as a login for returning users.

## License

This program is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).