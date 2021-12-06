import React, { Component } from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMovie } from '../actions/movieActions'

class Watched extends Component {
displayMovies(user) {
    const watchedList = user.user_movies.filter(watchedMovie => watchedMovie.watched === true)
    return watchedList.map(usermovie => {
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
            <h3>My Watched List</h3>
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
export default connect(mapStateToprops, { fetchMovie })(Watched)
