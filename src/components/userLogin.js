import React, { Component } from "react"
import { userLogin } from '../actions/userLoginAction'
import { connect } from 'react-redux'

class UserLogin extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.userLogin({user: this.state})
    }

    render() {
        return (
            <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form
            onSubmit={this.handleSubmit}>
                <label>
                <p>Username</p>
                <input type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange} />
                </label>
                <label>
                <p>Password</p>
                <input type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange} />
                </label>
                <div>
                <button type="submit">Submit</button>
                </div>
            </form>
            </div>
        )
    }
    
}
export default connect(null, { userLogin })(UserLogin)