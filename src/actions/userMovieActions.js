// export function fetchUserMovie(userID, movieID) {
//     return (dispatch) => {
//         fetch()
//         .then((resp) => resp.json())
//         .then((movie) => dispatch({ type: 'SEARCH_MOVIES', payload: movie}));
//     };
// }

const updateUserMovie = (userMovieData) => {
    return {type: 'UPDATE_USERMOVIE', userMovieData: userMovieData}
}

export function userMovieUpdate(loginData) {
    //     return (dispatch) => {
    //     fetch(`http://localhost:3000/${userID}/usermovie`, {
    //         method: 'POST',
    //         headers: {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json'
    //         },
    //         body: JSON.stringify( loginData )
    //     })
    //     .then(resp => resp.json())
    //     .then(userData => {
    //         if (userData.message) {
    //             alert(userData.message)
    //         } else {
    //             alert(`User ${userData.user.username} successfully logged in`)
    //             dispatch(setCurrentUser(userData))
    //         }
    //     })
    //     .catch(error => {
    //         alert(`Error: ${error}`)
    //     })
    // }
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