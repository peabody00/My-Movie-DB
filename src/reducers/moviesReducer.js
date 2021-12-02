export const moviesReducer = (state = {
    movieID: 862,
    title: "Toy Story",
    tagline: "",
    overview: "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
    poster_path: "/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    production_companies: [{name: "Pixar"}],
    genres: [{id: 16, name:"Animation"}, {id: 12, name: "Adventure"}, {id: 10751, name:"Family"}, {id: 35, name:"Comedy"}],
    release_date: "1995-10-30",
    vote_average: 8,
    runtime: 81,
    backdrop: "/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg"
}, action) => {
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