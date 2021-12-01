export function fetchUserMovie(userID, movieID) {
    return (dispatch) => {
        fetch()
        .then((resp) => resp.json())
        .then((movie) => dispatch({ type: 'SEARCH_MOVIES', payload: movie}));
    }; 
}