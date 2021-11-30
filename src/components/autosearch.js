// server.autosuggest.js
import React from 'react'
import Autosuggest from 'react-autosuggest'
import '../autosuggest.css'
import { fetchMovie } from '../actions/movieActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class AutoSearch extends React.Component {
    constructor() {
        super();

        //Define state for value and suggestion collection
        this.state = {
            value: '',
            suggestions: []
        };
    }

    // Filter logic
    getSuggestions = async (value) => {
        const inputValue = value.trim().toLowerCase();
        // let response = await fetch("http://www.omdbapi.com/?s=" + inputValue + "&apikey=a591bb53");
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_TMDB_KEY}&query=${inputValue}&language=en-US&page=1&include_adult=false`);
        let data = await response.json()
        return data;
    };

    // Trigger suggestions
    getSuggestionValue = suggestion => suggestion.title;

    // Render Each Option
    renderSuggestion = suggestion => (
        <span className="sugg-option">
            {/* <span className="icon-wrap"><img src={suggestion.Poster} alt=""/></span> */}
            <span className="name">
                <div id={suggestion.id}
                onClick={() => this.props.fetchMovie(suggestion.id)} >
                    <Link to="/movie">{suggestion.title}</Link>
                </div>
            </span>
        </span>
    );

    // OnChange event handler
    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Suggestion rerender when user types
    onSuggestionsFetchRequested = ({ value }) => {
        this.getSuggestions(value)
            .then(data => {
                console.log(data.results)
                this.setState({
                    suggestions: data.results
                });
            })
    };

    // Triggered on clear
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;

        // Option props
        const inputProps = {
            placeholder: 'Type movie name',
            value,
            onChange: this.onChange
        };

        // Adding AutoSuggest component
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default connect(null, { fetchMovie })(AutoSearch)