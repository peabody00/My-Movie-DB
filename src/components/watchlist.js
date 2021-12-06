import React, { Component } from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMovie } from '../actions/movieActions'

class Watchlist extends Component {
displayMovies(user) {
    const toWatchList = user.user_movies.filter(watchedMovie => watchedMovie.watch_list === true)
    return toWatchList.map(usermovie => {
        const movie = user.movies.find(singleMovie => singleMovie.id === usermovie.movie_id)
        return (
            <div
                onClick={() => this.props.fetchMovie(movie.movieID)} >
                <Link to="/movie">{movie.title}</Link>
            </div>
        )
    })
}
    render() {
        return(
            <div>
            <h3>To Watch List</h3>
            {this.displayMovies(this.props.user)}
            </div>
        )
    }
}

const mapStateToprops = (state) => {
    return{
        movie: state.movies,
        user: state.user
    }
}
export default connect(mapStateToprops, { fetchMovie })(Watchlist)