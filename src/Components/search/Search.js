import SearchIcon from '../../resources/search-icon.svg';
import { Component } from 'react';
import WeatherService from '../../services/WeatherService';

import './Search.scss';

class Search extends Component {
    state = {
        searchValue:this.props.searchValue,
        searchResults: []
    }

    weatherService = new WeatherService();

    updateResults = (searchValue) => {
        if (searchValue.length <= 0) {
            return null;
        }
        this.weatherService
        .getSearchResults(searchValue)
        .then(searchResults => this.setState({searchResults}));
    }
    
    render() {
        const results = this.state.searchResults.map(result => {
            return (
                <button 
                className="result"
                key={result.id}
                onClick={() => {
                    this.props.onResultSelect(result.name, result.region, result.country);
                }}>{result.name}, {result.region}, {result.country}</button>
            )
        })
        const content = results.length > 0 ? results : null,
        isNoContent = results.length <= 0 && this.props.searchValue.length > 0 ? <div className="result no__hover">No matched results found</div> : null;
        
        return (
            <>
                <h1 className="search__title">Find out what the weather is like in other places!</h1>
                <div className="search__block">
                    <input 
                    type="text" name="Search" 
                    className="search__input"
                    placeholder="Look for some place, for example London"
                    value={this.props.searchValue}
                    onChange={e => {
                        this.props.onSearch(e.target.value);
                        this.updateResults(e.target.value)
                    }}/>
                    <button className="search__btn">
                            <img src={SearchIcon} alt="Search Btn" className="btn__icon" />
                    </button>
                </div>
                <ul className="result__list">
                    {content}
                    {isNoContent}
                </ul>
            </>
        )
    }
}

export default Search;