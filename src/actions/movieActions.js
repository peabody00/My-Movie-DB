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

export function saveMovie(movie, token) {
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
            console.log(movieData)
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


// I NEED TO MAKE A CONDITIONAL SOMEWHERE FOR THE INITIAL RANDOM MOVIE THAT IS DISPLAYED TO MAKE 
// SURE THAT ADULT FLAG IS FALSE