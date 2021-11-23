const apiURL = 'https://api.themoviedb.org/3/movie/'
// const movie = Math.floor(Math.random()*899999+100000);
const movie = 157336

export function fetchMovie() {
    return (dispatch) => {
        fetch(`${apiURL}${movie}?api_key=${process.env.REACT_APP_TMDB_KEY}`)
        .then((resp) => resp.json())
        .then((movie) => dispatch({ type: 'SEARCH_MOVIES', payload: movie}));
    };
}

// I NEED TO MAKE A CONDITIONAL SOMEWHERE FOR THE INITIAL RANDOM MOVIE THAT IS DISPLAYED TO MAKE 
// SURE THAT ADULT FLAG IS FALSE