import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { clearCurrentUser } from "../actions/userLoginAction"
import { connect } from "react-redux"


class Navbar extends Component {

    render() {
        return(
            <ul>
                <li>
                <Link to="/login">Login</Link>
                </li>
                <li>
                <Link to="/users">Create Account</Link>
                </li>
                <li>
                    <button onClick={this.props.clearCurrentUser}>
                        Logout
                    </button>
                </li>
            </ul>
        )
    }
}

export default connect(null, { clearCurrentUser })(Navbar)