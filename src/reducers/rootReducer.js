import { combineReducers } from "redux"
import { moviesReducer } from "./moviesReducer"
import { usersmoviesReducer } from "./usersmoviesReducer"
import { usersReducer } from "./usersReducer"


export const rootReducer = combineReducers({
    movies: moviesReducer,
    usersmovies: usersmoviesReducer,
    users: usersReducer
})

// I GET AN ERROR IF I DON'T HAVE THIS LINE
export default rootReducer
