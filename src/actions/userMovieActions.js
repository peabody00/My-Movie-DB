export function defaultUserMovie() {
    return {type: 'DEFAULT_USERMOVIE'}
}

export function updateUserMovie(userMovieData) {
    return {type: 'UPDATE_USERMOVIE', userMovieData: userMovieData}
}

export function userMovieUpdate(userMovieData) {
        return (dispatch) => {
        fetch(`http://localhost:3000/users/${userMovieData.user_movie.userID}/user_movies/${userMovieData.user_movie.id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
            },
            body: JSON.stringify( userMovieData )
        })
        .then(resp => resp.json())
        .then(data=>  {
            dispatch(updateUserMovie(data))})
        .catch(error => {
            alert(`Error: ${error}`)
        })
    }
}

const getUserMovie = () => {
    return {type: 'GET_USERSMOVIE', }
}

export function fetchUserMovie(userID, movieID) {
    return (dispatch) => {
        fetch(`http://localhost:3000/users/${userID}/usermovie`)
        .then(resp => resp.json())
        .then(userMovieData => {
            console.log(userMovieData)
        })
    }
}