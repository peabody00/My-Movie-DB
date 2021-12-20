export function setCurrentUser(userData) {
    return {type: "SET_CURRENT_USER", userData: userData}
}

export function reloginUser(userData) {
    return {type: "RELOGIN_USER", userData: userData}
}


export function updateUserStore(userData) {
    return {type: "UPDATE_CURRENT_USER_STORE", userData: userData}
}

export function userLogin(loginData) {
        return (dispatch) => {
        fetch(`http://localhost:3000/login`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
            },
            body: JSON.stringify( loginData )
        })
        .then(resp => resp.json())
        .then(userData => {
            if (userData.message) {
                alert(userData.message)
            } else {
                alert(`User ${userData.user.username} successfully logged in`)
                dispatch(setCurrentUser(userData))
            }
        })
        .catch(error => {
            alert(`Error: ${error}`)
        })
    }
}

export function userCreate(loginData) {
    return (dispatch) => {
        fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
            },
            body: JSON.stringify( loginData )
        })
        .then(resp => resp.json())
        .then(userData => {
            if (userData.error) {
                alert(userData.error)
            } else {
                alert(`User ${userData.user.username} successfully created and logged in`)
                dispatch(setCurrentUser(userData))
            }
        })
        .catch(error => {
            alert(`Error: ${error}`)
        })
    }

}

export const clearCurrentUser = () => {
    return {type: "CLEAR_CURRENT_USER"}
}



