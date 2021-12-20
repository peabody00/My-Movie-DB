import { updateUserMovie } from './userMovieActions'
// import { updateUserStore } from './userLoginAction'

const apiURL = 'https://api.themoviedb.org/3/movie/'
// const movie = Math.floor(Math.random()*899999+100000);
// const movie = 157336

export function fetchMovie(movie) {
    return (dispatch) => {
        fetch(`${apiURL}${movie}?api_key=${process.env.REACT_APP_TMDB_KEY}`)
        .then((resp) => resp.json())
        .then((movie) => dispatch({ type: 'SEARCH_MOVIES', payload: movie}));
    };
}

export function saveMovie(movie, token, user_id) {
    return (dispatch) => {
        fetch(`http://localhost:3000/movies/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify( movie )
        })
        .then(resp => resp.json())
        .then(movieData => {
            let usermovie = movieData.user_movies.find(usermovie => usermovie.user_id === user_id)
            dispatch(updateUserMovie(usermovie))
            // dispatch([updateUserMovie(usermovie),updateUserStore(usermovie)])
        })
    }
}

export function searchApiMovie(movie) {
    return (dispatch) => {
        fetch(`http://localhost:3000/find_movie/${movie}`)
        .then((resp) => resp.json())
        .then((movie) => 
        console.log(movie)
        );
    };
}