import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userCreate } from '../actions/userLoginAction'

class UserCreate extends Component {
    constructor(props) {
        super()
        this.state = {
            username: '',
            password: '',
            confirm: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    clearForm = () => {
        this.setState({
            username: '',
            password: '',
            confirm: ''
        })
        

    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.password === this.state.confirm  && this.state.password.length > 4) {
            this.props.userCreate({user: this.state})
            this.props.history.push('/')
        } else {
            alert("The passwords do not match or is not greater than 4 characters.")
        }
    }


    render () {
        return(
            <div className="login-wrapper">
            <h1>Please Create Account</h1>
            <form onSubmit={this.handleSubmit}>
                <label>
                <p>Username</p>
                <input type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}/>
                </label>
                <label>
                <p>Password</p>
                <input type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange} />
                </label>
                <label>
                <p>Re-Type Password</p>
                <input type="password"
                name="confirm"
                value={this.state.confirm}
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

export default connect(null, { userCreate })(UserCreate)