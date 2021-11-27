import './App.css';
import MovieCard from './components/movieCard'
import Search from './components/search'
import UserLogin from './components/userLogin'

// USE CODE IN LOG TO ADD API KEY TO FETCH
// console.log(process.env.REACT_APP_TMDB_KEY)

function App() {
  
  return (
    <div className="App">
      <UserLogin />
      <Search />
      <MovieCard />
    </div>
  );

  
}
// let suggests = new Bloodhound({
//   datumTokenizer: function(datum) {
//     return Bloodhound.tokenizers.whitespace(datum.value);
//   },
//   queryTokenizer: Bloodhound.tokenizers.whitespace,
//   remote: {
//     url: `https://api.themoviedb.org/3/search/movie?query=%QUERY&api_key=${process.env.REACT_APP_TMDB_KEY}`,
//     filter: function(movies) {
//       // Map the remote source JSON array to a JavaScript object array
//       return $.map(movies.results, function(movie) {
//         return {
//           value: movie.original_title, // search original title
//           id: movie.id // get ID of movie simultaniously
//         };
//       });
//     } // end filter
//   } // end remote
// }); // end new Bloodhound

// suggests.initialize(); // initialise bloodhound suggestion engine

// $('.typeahead').typeahead({
//   hint: true,
//   highlight: true,
//   minLength: 2
// }, {source: suggests.ttAdapter()}).on('typeahead:selected', function(obj, datum) {
//   this.fetchMovieID(datum.id)
// }.bind(this)); // END Instantiate the Typeahead UI



export default App;
