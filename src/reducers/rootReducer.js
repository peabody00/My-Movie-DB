import { combineReducers } from "redux"
import { moviesReducer } from "./moviesReducer"
import { usersmoviesReducer } from "./usersmoviesReducer"
import { currentUserReducer } from "./currentUserReducer"


const rootReducer = combineReducers({
    movies: moviesReducer,
    usersmovies: usersmoviesReducer,
    user: currentUserReducer
})

export default rootReducer
