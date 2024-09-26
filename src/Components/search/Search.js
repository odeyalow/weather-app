import SearchIcon from '../../resources/search-icon.svg';
import { Component } from 'react';
import WeatherService from '../../services/WeatherService';

import './Search.scss';

class Search extends Component {
    state = {
        userSearchInput:this.props.userSearchInput,
        isResultsVisible:false,
        searchResults: []
    }

    componentDidMount() {
        if (this.props.userSearchInput.length > 0) {
            this.updateResults();
        }
    }

    weatherService = new WeatherService();

    updateResults = (userSearchInput) => {
        if (userSearchInput.length <= 0) {
            return null;
        }
        this.weatherService
        .getSearchResults(userSearchInput)
        .then(searchResults => this.setState({searchResults}));
    }
    
    render() {
        const results = this.state.searchResults.map(result => {
            return (
                <button 
                className="result"
                key={result.id}
                onClick={() => {
                    this.props.onResultSelect(result.name);
                    const searchInput = document.querySelector('.search__input');
                    searchInput.value = `${result.name}, ${result.region}, ${result.country}`;
                }}>{result.name}, {result.region}, {result.country}</button>
            )
        })
        const content = results.length > 0 ? results : null,
        isNoContent = results.length <= 0 && this.props.userSearchInput.length > 0 
        ? <div className="result no__hover">No matched results found</div> 
        : null;
        
        return (
            <>
                <h1 className="search__title">Find out what the weather is like in other places!</h1>
                <div className="search__block">
                    <input 
                    type="text" name="Search" 
                    className="search__input"
                    placeholder="Look for some place, for example London"
                    onChange={e => {
                        this.props.onSearchInput(e.target.value);
                        this.updateResults(e.target.value);
                        this.setState({isResultsVisible:true});
                    }}/>
                    <button 
                    className={this.state.searchResults.length <= 0 ? "search__btn disabled" : "search__btn"}
                    onClick={() => {
                        this.props.onSearch(this.props.userSearchInput);
                        this.setState({isResultsVisible:false});
                    }}
                    disabled={this.state.searchResults.length <= 0 ? true : false}>
                            <img src={SearchIcon} alt="Search Btn" className="btn__icon" />
                    </button>
                </div>
                <ul className="result__list">
                    {this.state.isResultsVisible ? content : null}
                    {isNoContent}
                </ul>
            </>
        )
    }
}

export default Search;