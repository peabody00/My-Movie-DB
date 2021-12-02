import React, { Component } from "react"
import { connect } from 'react-redux'
import { fetchUserMovie } from '../actions/userMovieActions'
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

    watched = () => {
        const token = localStorage.getItem('jwt')
        const data = {movie: { 
            ...this.props.movie,
            movieID: this.props.movie.id,
            user_movies_attributes:[
                { watched: true, user_id: this.props.user.id }
            ]}}

        this.props.saveMovie(data, token)
        

    }


    render() {
        return (
        <div>
            Watched: 
            {this.props.watched ? (
                    <span id="watch" onClick={this.watched}><AiFillEye /></span>
            ):(
                    <span id="watch" onClick={this.watched}><AiOutlineEye /></span>
            )}


            Add to Watchlist: <RiFileList2Line />
            User Rating: <AiOutlineStar />
            Like/Dislike: <BsHandThumbsUp /> <BsHandThumbsDown />

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
export default connect(mapStateToProps, { saveMovie })(UserMovie)