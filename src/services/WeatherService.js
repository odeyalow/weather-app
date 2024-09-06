class WeatherService {
    _apiBase = 'http://api.weatherapi.com/v1/';
    _apiKey = '082daf8e28304095b85121007242408';
    
    getData = async (url) => {
        let result = await fetch(url);

        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`);
        }

        return await result.json();
    }

    getCurrentForecast = (location) => {
        return this.getData(`${this._apiBase}current.json?key=${this._apiKey}&q=${location}&aqi=no`);
    }

    getSearchResults = (searchValue) => {
        return this.getData(`${this._apiBase}search.json?key=${this._apiKey}&q=${searchValue}&aqi=no`);
    }

    getAstronomy = (location, currentDate) => {
        return this.getData(`${this._apiBase}astronomy.json?key=${this._apiKey}q=${location}&dt=${currentDate}`);
    }

    getTenDaysForecast = (location) => {
        return this.getData(`${this._apiBase}forecast.json?key=${this._apiKey}q=${location}&days=10&aqi=no&alerts=no`);
    }
}

export default WeatherService;