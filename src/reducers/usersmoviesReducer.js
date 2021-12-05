const initialState = {
    user_rating: 0,
    like_dislike: '',
    watched: false,
    watch_list: false,
    user_id: 0,
    movie_id: 0
}

export const usersmoviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_USERSMOVIE':
            return action.payload
        case 'UPDATE_USERMOVIE':
            return action.userMovieData
        case 'DEFAULT_USERMOVIE':
            return initialState
        default: 
            return state
    }    
}