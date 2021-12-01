import './App.css';
import MovieCard from './components/movieCard'
import Search from './components/search'
import UserLogin from './components/userLogin'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import Navbar from './components/navbar'
import { Fragment } from 'react'
import AutoSearch from './components/autosearch';
import UserCreate from './components/userCreate'

// USE CODE IN LOG TO ADD API KEY TO FETCH
// console.log(process.env.REACT_APP_TMDB_KEY)

function App() {
  
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
  );

  
}

export default withRouter(App);
