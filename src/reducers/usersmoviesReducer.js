export const usersmoviesReducer = (state = {
    user_rating: 0,
    like_dislike: '',
    watched: false,
    watch_list: false,
    user_id: 0,
    movie_id: 0
}, action) => {
    switch(action.type) {
        case 'GET_USERSMOVIE':
            return action.payload
        case 'UPDATE_USERMOVIE':
        default: 
            return state
    }    
}