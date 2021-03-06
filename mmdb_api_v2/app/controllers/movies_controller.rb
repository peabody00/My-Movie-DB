class MoviesController < ApplicationController
  before_action :set_movie, only: [:show, :update, :destroy]
  skip_before_action :authorized, only: [:index, :create, :find_movie]

  # GET /movies
  def index
    @movies = Movie.all
    # byebug
    # @movies = Movie.find_by(moveID: movie_params)

    render json: @movies
  end

  def find_movie
    @movie = Movie.find_by(movieID: params[:movieID].to_i)
    if @movie
      render json: @movie
      # include: [:user_movies]
    else
      render json: {message: "Movie not found."}
    end
  end

  # GET /movies/1
  def show
    render json: @movie
  end

  # POST /movies
  def create
    @movie = Movie.find_by(movieID: params[:movieID].to_i)
    if @movie
      # create or update the association
      render json: {message: "Movie already created"}
    else
      @movie = Movie.new(movie_params)
      if @movie.save
        render json: @movie, include: [:user_movies], status: :created, location: @movie
      else
        render json: @movie.errors, status: :unprocessable_entity
      end
    end      
  end

  # PATCH/PUT /movies/1
  def update
    if @movie.update(movie_params)
      render json: @movie
    else
      render json: @movie.errors, status: :unprocessable_entity
    end
  end

  # DELETE /movies/1
  def destroy
    @movie.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_movie
      @movie = Movie.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def movie_params
      params.require(:movie).permit(:movieID, :title, :tagline, :overview, :poster_path, :production_companies, :genres, :release_date, :vote_average, :runtime, :revenue, :backdrop, :user_movies_attributes => [:watched, :user_id, :like_dislike, :user_rating, :watch_list])
    end
end
