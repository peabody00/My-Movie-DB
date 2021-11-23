export const usersmoviesReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_USERSMOVIES':
            return action.payload
        default: 
            return state
    }    
}