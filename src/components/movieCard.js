import React, { Component } from "react"
import { connect } from 'react-redux'
import UserMovie from "./userMovie"
import NumberFormat from 'react-number-format'

const posterURL = 'https://image.tmdb.org/t/p/w500'
const backdropURL = 'https://image.tmdb.org/t/p/original'

class MovieCard extends Component {
        
    componentDidUpdate() {
        document.body.style.backgroundImage = `url(${backdropURL}${this.props.backdrop})`
    }

    render() {
        return (
            <div className="col-xs-12 cardcont nopadding">
                <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
                    <h1>{this.props.title}</h1>
                    <span className="tagline">{this.props.tagline}</span>
                    <p>{this.props.overview}</p>
                    <div className="additonal-details">
                        <span className="genre-list">{nestedDataToString(this.props.genres)}</span>
                        <span className="production-list">{nestedDataToString(this.props.production_companies)}</span>
                        <div className="row nopadding release-details">
                            <div className="col-xs-6"> Original Release: <span className="meta-data">{this.props.release_date}</span></div>
                            <div className="col-xs-6"> Running Time: <span className="meta-data">{this.props.runtime} mins</span> </div>
                            <div className="col-xs-6"> Box Office: <span className="meta-data"><NumberFormat value={this.props.revenue} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span></div>
                            <div className="col-xs-6"> Vote Average: <span className="meta-data">{this.props.vote_average}/10</span></div>
                        </div>
                    </div>
                </div>
                    <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
                        <img id="postertest" className="poster" src={`${posterURL}${this.props.poster}`} alt={`${this.props.title}`}/>
                    </div>
                <div>
                    <UserMovie />
                </div>
            </div>
            
        )
    }
}

function nestedDataToString(nestedData) {
    let nestedArray = [],
        resultString;
    if(nestedData !== undefined){
        nestedData.forEach(function(item){
            nestedArray.push(item.name);
        });
    }
    resultString = nestedArray.join(', '); // array to string
    return resultString;
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