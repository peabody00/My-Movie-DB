import React, { Component } from "react"
import { connect } from 'react-redux'
import UserMovie from "./userMovie"
import NumberFormat from 'react-number-format'

const posterURL = 'https://image.tmdb.org/t/p/w500'
const backdropURL = 'https://image.tmdb.org/t/p/original'

class MovieCard extends Component {
        
    componentDidMount() {
        document.body.style.backgroundImage = `url(${backdropURL}${this.props.backdrop})`
    }

    render() {
        return (
            <div classname="col-xs-12 cardcont nopadding">
                <div classname="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
                    <h1>{this.props.title}</h1>
                    <span classname="tagline">{this.props.tagline}</span>
                    <p>{this.props.overview}</p>
                    <div classname="additonal-details">
                        <span classname="genre-list">genres</span>
                        <span classname="production-list">production list</span>
                        <div classname="row nopadding release-details">
                            <div className="col-xs-6"> Original Release: <span className="meta-data">{this.props.release_date}</span></div>
                            <div className="col-xs-6"> Running Time: <span className="meta-data">{this.props.runtime} mins</span> </div>
                            <div className="col-xs-6"> Box Office: <span className="meta-data"><NumberFormat value={this.props.revenue} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span></div>
                            <div className="col-xs-6"> Vote Average: <span className="meta-data">{this.props.vote_average}/10</span></div>
                        </div>
                    </div>
                </div>
                    <div classname="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
                        <img id="postertest" classname="poster" src={`${posterURL}${this.props.poster}`} alt={`${this.props.title}`}/>
                    </div>
                    <UserMovie />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        title: state.movies.original_title,
        tagline: state.movies.tagline,
        overview: state.movies.overview,
        poster: state.movies.poster_path,
        production_companies: state.movies.production_companies,
        genres: state.movies.genres,
        release_date: state.movies.release_date,
        vote_average: state.movies.vote_average,
        runtime: state.movies.runtime,
        revenue: state.movies.revenue,
        backdrop: state.movies.backdrop_path
    }
}
export default connect(mapStateToProps)(MovieCard)