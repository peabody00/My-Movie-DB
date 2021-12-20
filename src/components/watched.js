import React, { Component } from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMovie } from '../actions/movieActions'

class Watched extends Component {
    
displayMovies(user) {
    console.log(user)
    const watchedList = user.user_movies.filter(watchedMovie => watchedMovie.watched === true)
    // const test = watchedList.sort((a,b) => (a.updated_at > b.updated_at) ? 1 : ((b.updated_at > a.updated_at) ? -1 : 0))
    // console.log(test)
    return watchedList.map(usermovie => {
        const movie = user.movies.find(singleMovie => singleMovie.id === usermovie.movie_id)
        // console.log(movie)
        return (
            <div key={movie.movieID}
                onClick={() => this.props.fetchMovie(movie.movieID)} >
                <Link to="/movie">{movie.title} - {movie.release_date}</Link>
            </div>
        )
    })
}

// sortList = () => {
//     watchedList.sort((a,b) => (a.updated_at > b.updated_at) ? 1 : ((b.updated_at > a.updated_at) ? -1 : 0))
// }
    render() {
        return(
            <div>
            <h3>My Watched List</h3>
            {/* <button onClick={() => this.sortList}>Sort</button> */}
            {this.props.user ? (this.displayMovies(this.props.user)):(null)}
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
