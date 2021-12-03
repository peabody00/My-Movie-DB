import React, { Component } from "react"
import { connect } from 'react-redux'
import { fetchUserMovie } from '../actions/userMovieActions'
import { searchApiMovie } from '../actions/movieActions'
import { AiOutlineEye } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
import { RiFileList2Line } from 'react-icons/ri'
import { RiFileList2Fill } from 'react-icons/ri'
import { AiOutlineStar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { BsHandThumbsUp } from 'react-icons/bs'
import { BsHandThumbsUpFill } from 'react-icons/bs'
import { BsHandThumbsDown } from 'react-icons/bs'
import { BsHandThumbsDownFill } from 'react-icons/bs'
import { saveMovie } from '../actions/movieActions'



class UserMovie extends Component {
    // NEXT STEP CHECK MOVIE ALREADY EXISTS AND THAT MOVIE IS ALREADY ASSOCIATED WITH THE MOVIE, SEPARATE FUNCTIONS
    // if this movie is already in the db (rails API by checking movieID), return that movie, else return null, if it returns make an update
    constructor() {
        super();
        this.state = {
            foundMovie: {}
        }
    }

    foundMovie = () => {
        let movieID = this.props.movie.id
        fetch(`http://localhost:3000/find_movie/${movieID}`)
        .then((resp) => resp.json())
        .then((movie) => 
        this.setState({foundMovie: movie}))
    }
    //SYNC ISSUES
    watched = async () => {
        await this.foundMovie()
        if (this.state.foundMovie.id) {
            console.log("Stuff")
        } else {
        const token = localStorage.getItem('jwt')
        const data = {movie: { 
            ...this.props.movie,
            movieID: this.props.movie.id,
            user_movies_attributes:[
                { watched: true, user_id: this.props.user.id }
            ]}}

        this.props.saveMovie(data, token)
        }
    }

    watchList = () => {

    }

    setRating = () => {

    }

    setLikeDislike = () => {

    }

    checkMovie = () => {
        const data = {movieID: this.props.movie.id}
        this.props.searchApiMovie(data)        
    }

    render() {
        return (
        <div>
            <div>
                Watched: 
                {this.props.watched ? (
                        <span id="watch" onClick={this.watched}><AiFillEye /></span>
                ):(
                        <span id="watch" onClick={this.watched}><AiOutlineEye /></span>
                )}
            </div>
            <div>
                Add to Watchlist: 
                {this.props.watch_list ? (
                        <span id="watch" onClick={this.watchList}><RiFileList2Fill /></span>
                ):(
                        <span id="watch" onClick={this.watchList}><RiFileList2Line /></span>
                )}
            </div>
            <div>
                User Rating:
                {/* {this.props.rating ? (
                        <span id="watch" onClick={this.setRating}><AiFillStar /></span>
                ):(
                        <span id="watch" onClick={this.setRating}><AiOutlineStar id="1" onClick=/><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></span>
                )} */}
            </div>
            <div>
                Like/Dislike: 
                {this.props.like_dislike ? (
                        <span id="watch" onClick={this.setLikeDislike}><BsHandThumbsUp /> <BsHandThumbsDown /></span>
                ):(
                        <span id="watch" onClick={this.setLikeDislike}><BsHandThumbsUp /> <BsHandThumbsDown /></span>
                )}
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        usermovie: state.usersmovies,
        movie: state.movies,
        user: state.user
    }
}
export default connect(mapStateToProps, { saveMovie, searchApiMovie, searchApiMovie })(UserMovie)