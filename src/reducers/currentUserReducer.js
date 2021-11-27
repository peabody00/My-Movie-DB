export const currentUserReducer = (currentUser = null, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            localStorage.setItem('user_id', action.userData.user.id)
            localStorage.setItem('jwt', action.userData.jwt)
            return { ...action.userData.user }
        case 'CLEAR_CURRENT_USER':
            localStorage.clear()
            return null
        default:
        return currentUser
    }
}
