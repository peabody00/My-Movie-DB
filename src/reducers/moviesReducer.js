export const moviesReducer = (state = [], action) => {
    switch(action.type) {
        case 'SEARCH_MOVIES':
            return action.payload;
        // case 'RANDOM_MOVIE':
        //     if (action.payload.adult===false)
        //         return action.payload
        //     else

        default: 
            return state
    }    
}