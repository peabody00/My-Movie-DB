import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { clearCurrentUser } from "../actions/userLoginAction"
import { connect } from "react-redux"
import AutoSearch from "./autosearch"

class Navbar extends Component {

    render() {
        return(
            <div>
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
                <AutoSearch />
            </div>
        )
    }
}

export default connect(null, { clearCurrentUser })(Navbar)