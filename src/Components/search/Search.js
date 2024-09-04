import SearchIcon from '../../resources/search-icon.svg';
import './Search.scss';

const Search = () => {
    return (
        <>
            <h1 className="search__title">Find out what the weather is like in other places!</h1>
            <div className="search__block">
                <input 
                type="text" name="Search" 
                className="search__input"
                placeholder="Look for some place, for example London"/>
                <button className="search__btn">
                        <img src={SearchIcon} alt="Search Btn" className="btn__icon" />
                </button>
            </div>
            <ul className="result__list">
                <button className="result">London, City of London, Greater London United Kingdom</button>
                <button className="result">London, Ontario, Canada</button>
                <button className="result">Londonderry, New Hampshire, United States of America</button>
            </ul>
        </>
    )
}

export default Search;