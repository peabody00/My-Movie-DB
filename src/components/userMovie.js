import React, { Component } from "react"
import { connect } from 'react-redux'
import { fetchUserMovie } from '../actions/userMovieActions'

class UserMovie extends Component {

    render() {
        return (
        <div>
            User Movie
        </div>
        )
    }
}
export default connect(null, { fetchUserMovie })(UserMovie)