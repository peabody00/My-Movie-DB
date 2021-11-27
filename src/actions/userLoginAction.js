import { setCurrentUser } from './setCurrentUser'

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