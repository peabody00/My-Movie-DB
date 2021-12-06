import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { clearCurrentUser } from "../actions/userLoginAction"
import { connect } from "react-redux"
import AutoSearch from "./autosearch"

class Navbar extends Component {

    render() {
        return(
            <div>
                <h2>My Movie DB</h2>
                <Link to="/">Home</Link>
                {this.props.user ? (                    
                    <div>
                        <p>
                        <button onClick={this.props.clearCurrentUser}>
                            Logout
                        </button>
                        </p>
                    <Link to="/watched">Watched Movie List</Link><br/>
                    <Link to="/watchlist">To Watch List</Link>
                    </div>
                ):(
                    <div> 
                        <div>
                            <Link to="/login">Login</Link>
                        </div>
                        <div>
                            <Link to="/users">Create Account</Link>
                        </div>
                    </div>                    
                )}
                <h3>Search for a Movie</h3>
                <h5>Powered by The Movie DB</h5>
                <AutoSearch />
            </div>
        )
    }
}

const mapStateToprops = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToprops, { clearCurrentUser })(Navbar)