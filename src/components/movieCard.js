import React, { Component } from "react"
import { connect } from 'react-redux'
import UserMovie from "./userMovie"
import NumberFormat from 'react-number-format'
import { updateUserMovie } from '../actions/userMovieActions'
import { defaultUserMovie } from '../actions/userMovieActions'

const posterURL = 'https://image.tmdb.org/t/p/w500'
const backdropURL = 'https://image.tmdb.org/t/p/original'

class MovieCard extends Component {
        
    // componentDidMount() {
    //     document.body.style.backgroundImage = `url(${backdropURL}${this.props.movie.backdrop})`
    // }

    componentDidUpdate() {
        if (this.props.user) {
            if (this.props.user.movies) {
                let movieSearch = this.props.user.movies.find(movie => movie.movieID === this.props.movie.id)
                if (movieSearch) {
                    let userMovieSearch = this.props.user.user_movies.find(usermovie => usermovie.movie_id === movieSearch.id)
                        if (userMovieSearch) {
                        this.props.updateUserMovie(userMovieSearch)
                        }
                } else {
                    this.props.defaultUserMovie()
                }
            }
        }
    }

    render() {
        return (
            <div className="col-xs-12 cardcont nopadding">
                <div>
                {this.props.user ? (
                    <UserMovie />
                ):(
                    null
                )}
                    
                </div>
                <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
                    <h1>{this.props.movie.title}</h1>
                    <span className="tagline"><h3>{this.props.movie.tagline}</h3></span>
                    <p><i>{this.props.movie.overview}</i></p>
                    <div className="additonal-details">
                        <div className="genre-list"><strong>Genres:</strong> {nestedDataToString(this.props.movie.genres)}</div>
                        <div className="production-list"><strong>Production Companies:</strong> {nestedDataToString(this.props.movie.production_companies)}</div>
                        <div className="row nopadding release-details">
                            <div className="col-xs-6"> <strong>Original Release:</strong> <span className="meta-data">{this.props.movie.release_date}</span></div>
                            <div className="col-xs-6"> <strong>Running Time:</strong> <span className="meta-data">{this.props.movie.runtime} mins</span> </div>
                            <div className="col-xs-6"> <strong>Box Office:</strong> <span className="meta-data"><NumberFormat value={this.props.movie.revenue} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span></div>
                            <div className="col-xs-6"> <strong>Vote Average:</strong> <span className="meta-data">{this.props.movie.vote_average}/10</span></div>
                        </div>
                    </div>
                </div>
                    <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
                        <img id="postertest" className="poster" src={`${posterURL}${this.props.movie.poster_path}`} alt={`${this.props.movie.title}`}/>
                    </div>
            </div>
            
        )
    }
}
// Is it possible to put this logic into the reducer?
function nestedDataToString(nestedData) {
    let nestedArray = [],
        resultString
    if(nestedData !== undefined){
        nestedData.forEach(function(item){
            nestedArray.push(item.name)
        })
    }
    resultString = nestedArray.join(', ')
    return resultString
}

const mapStateToprops = (state) => {
    return{
        movie: state.movies,
        user: state.user
    }
}
export default connect(mapStateToprops, { updateUserMovie, defaultUserMovie })(MovieCard)