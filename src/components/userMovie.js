import React, { Component } from "react"
import { connect } from 'react-redux'
// import { fetchUserMovie } from '../actions/userMovieActions'
import { searchApiMovie } from '../actions/movieActions'
import { AiOutlineEye } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
import { RiFileList2Line } from 'react-icons/ri'
import { RiFileList2Fill } from 'react-icons/ri'
// import { AiOutlineStar } from 'react-icons/ai'
// import { AiFillStar } from 'react-icons/ai'
// import { BsHandThumbsUp } from 'react-icons/bs'
// import { BsHandThumbsUpFill } from 'react-icons/bs'
// import { BsHandThumbsDown } from 'react-icons/bs'
// import { BsHandThumbsDownFill } from 'react-icons/bs'
import { saveMovie } from '../actions/movieActions'
import { userMovieUpdate } from '../actions/userMovieActions'



class UserMovie extends Component {
    constructor() {
        super();
        this.state = {
            foundMovie: {}
        }
    }

    onClickEverything = (flag) => {
        if (flag === 'watched') {
            if (this.props.usermovie.user_id !== 0) {
                this.updateUserMovie()
            } else {
                this.createUserMovie()
            }
        } else {
            if (this.props.usermovie.user_id !== 0) {
                this.updateUserMovieList()
            } else {
                this.createUserMovieList()
            }

        }        
    }
            
    createUserMovie = () => {
        const token = localStorage.getItem('jwt')
        const data = {movie: { 
            ...this.props.movie,
            movieID: this.props.movie.id,
            user_movies_attributes:[
                { watched: true, user_id: this.props.user.id }
            ]}}
        this.props.saveMovie(data, token, this.props.user.id)    
    }

    updateUserMovie = () => {
        let value = !this.props.usermovie.watched
        let data = {user_movie: {
            watched: value,
            userID: this.props.usermovie.user_id,
            id: this.props.usermovie.id
        }}
        this.props.userMovieUpdate(data)
    }

    createUserMovieList = (flag) => {
        const token = localStorage.getItem('jwt')
        const data = {movie: { 
            ...this.props.movie,
            movieID: this.props.movie.id,
            user_movies_attributes:[
                { watch_list: true, user_id: this.props.user.id }
            ]}}
        this.props.saveMovie(data, token, this.props.user.id)    
    }

    updateUserMovieList = (flag) => {
        let value = !this.props.usermovie.watch_list
        let data = {user_movie: {
            watch_list: value,
            userID: this.props.usermovie.user_id,
            id: this.props.usermovie.id
        }}
        this.props.userMovieUpdate(data)
    }

    // componentDidMount() {
    //     this.checkUserMovie(this.props.user)
    // }

    render() {
        return (
        <div>
            <div>
                Watched: 
                {this.props.usermovie.watched ? (
                        <span id="watch" onClick={() => this.onClickEverything('watched')}><AiFillEye /></span>
                ):(
                        <span id="watch" onClick={() => this.onClickEverything('watched')}><AiOutlineEye /></span>
                )}
            </div>
            <div>
                Add to Watchlist: 
                {this.props.usermovie.watch_list ? (
                        <span id="watchlist" onClick={() => this.onClickEverything('watchlist')}><RiFileList2Fill /></span>
                ):(
                        <span id="watchlist" onClick={() => this.onClickEverything('watchlist')}><RiFileList2Line /></span>
                )}
            </div>
            {/* <div>
                User Rating:
                {this.props.rating ? (
                        <span id="watch" onClick={this.setRating}><AiFillStar /></span>
                ):(
                        <span id="watch" onClick={this.setRating}><AiOutlineStar id="1" onClick=/><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></span>
                )}
            </div> */}
            {/* <div>
                Like/Dislike: 
                {this.props.like_dislike ? (
                        <span id="watch" onClick={this.setLikeDislike}><BsHandThumbsUp /> <BsHandThumbsDown /></span>
                ):(
                        <span id="watch" onClick={this.setLikeDislike}><BsHandThumbsUp /> <BsHandThumbsDown /></span>
                )}
            </div> */}
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
export default connect(mapStateToProps, { saveMovie, searchApiMovie, userMovieUpdate })(UserMovie)