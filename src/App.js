import './App.css';
import MovieCard from './components/movieCard'
// import Search from './components/search'
import UserLogin from './components/userLogin'
import { Switch, Route, withRouter } from 'react-router-dom'
import Navbar from './components/navbar'
import { Fragment } from 'react'
// import AutoSearch from './components/autosearch';
import UserCreate from './components/userCreate'
import { setCurrentUser, reloginUser } from './actions/userLoginAction'
import { connect } from 'react-redux'
import React, { Component } from "react"
import Watched from './components/watched'
import Watchlist from './components/watchlist'

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
        this.props.reloginUser({
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
            <Route exact path='/watched' component={ Watched }  />
            <Route exact path='/watchlist' component={ Watchlist }  />
            <Route exact path='/login' render={(props) => <UserLogin {...props} />} />
            <Route exact path='/users' render={(props) => <UserCreate {...props} />} />
            <Route exact path='/movie' component={ MovieCard } />
          </Switch>
        </div>
      </Fragment>
    )
  }  
}

export default withRouter(connect(null, { setCurrentUser, reloginUser })(App));
