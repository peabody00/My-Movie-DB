import React, { Component } from "react"
import { connect } from 'react-redux'
import { fetchMovie } from "../actions/movieActions"
const TMDBLogo = "./src/tmdb.svg"

class Search extends Component {
    constructor() {
        super()
        this.state = {
            title: ''
        }
    }
    
    componentDidMount() {
        this.props.fetchMovie()
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
        <div className="col-xs-12 search-container nopadding">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-lg-5">
                    <a
                    href="https://www.themoviedb.org/?language=en-US"
                    title="Powered by TMDb"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <img src={TMDBLogo} alt="The Movie Database" />
                    </a>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-7">
                    <form className="searchbox">
                    <input
                        ref="search suggestion"
                        type="text"
                        value={this.state.title}
                        className="searchbox__input typeahead form-control"
                        placeholder="Search Movie Title..."
                        onChange={this.handleChange}
                        name="title"
                        id="q"
                    />
                    </form>
                    <button onClick={fetchMovie}>
                        Search
                    </button>
                </div>
            </div>
        </div>
        );
    }

    


}
export default connect(null, { fetchMovie })(Search)