import './App.css';
import MovieCard from './components/movieCard'
import Search from './components/search'
import UserLogin from './components/userLogin'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import Navbar from './components/navbar'
import { Fragment } from 'react'
import AutoSearch from './components/autosearch';
import UserCreate from './components/userCreate'
import { setCurrentUser } from './actions/userLoginAction'
import { connect } from 'react-redux'
import React, { Component } from "react"

class App extends Component {

  componentDidMount() {
    let token = localStorage.getItem('jwt')
    let userID = localStorage.getItem('user_id')
    if (token) {
      fetch(`http://localhost:3000/users/${userID}`, {
        headers: { "Authentication": `Bearer ${token}` }
      })
      .then(response => response.json())
      .then(result => {
        this.props.setCurrentUser({
        user: result
        })
      })
    }
  }

  render() {  
    return (
      <Fragment>
        <div className="App">
          <Navbar />
          <Switch>
            {/* <Route exact path='/' component={ Search } /> */}
            {/* <Route exact path='/' component={ AutoSearch } /> */}
            <Route exact path='/login' render={(props) => <UserLogin {...props} />} />
            <Route exact path='/users' render={(props) => <UserCreate {...props} />} />
            <Route exact path='/movie' component={ MovieCard } />
          </Switch>
        </div>
      </Fragment>
    )
  }  
}

export default withRouter(connect(null, { setCurrentUser })(App));
