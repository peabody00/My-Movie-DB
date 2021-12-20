export const currentUserReducer = (currentUser = null, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            localStorage.setItem('user_id', action.userData.user.id)
            localStorage.setItem('username', action.userData.user.username)
            localStorage.setItem('jwt', action.userData.jwt)
            return { ...action.userData.user }
        case 'RELOGIN_USER':
            localStorage.setItem('user_id', action.userData.user.user.id)
            localStorage.setItem('username', action.userData.user.user.username)
            localStorage.setItem('jwt', action.userData.user.jwt)
            return { ...action.userData.user.user }
        case 'CLEAR_CURRENT_USER':
            localStorage.clear()
            return null
        case 'UPDATE_CURRENT_USER_STORE':
            let user = {
                ...currentUser,
                movies: currentUser.movies.push(action.userData)
            }
            return user
        default:
        return currentUser
    }
}
