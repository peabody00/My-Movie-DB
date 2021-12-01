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



class UserMovie extends Component {

    watched = () => {

    }

    render() {
        return (
        <div>
            Watched: <span id="watch" onClick={this.watched}><AiOutlineEye /></span>
            Add to Watchlist: <RiFileList2Line />
            User Rating: <AiOutlineStar />
            Like/Dislike: <BsHandThumbsUp /> <BsHandThumbsDown />

        </div>
        )
    }
}
export default connect(null, { fetchUserMovie })(UserMovie)