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

    getCurrentForecast = async (location) => {
        const result = await this.getData(`${this._apiBase}current.json?key=${this._apiKey}&q=${location}&aqi=no`);
        return this._transformCurrentForecast(result.current);
    }

    getSearchResults = (searchValue) => {
        return this.getData(`${this._apiBase}search.json?key=${this._apiKey}&q=${searchValue}&aqi=no`);
    }

    getAstronomy = async (location, currentDate) => {
        const result = await this.getData(`${this._apiBase}astronomy.json?key=${this._apiKey}&q=${location}&dt=${currentDate}`);
        return this._transformAstronomy(result.astronomy.astro);
    }

    getTenDaysForecast = async (location) => {
        return this.getData(`${this._apiBase}forecast.json?key=${this._apiKey}q=${location}&days=10&aqi=no&alerts=no`);
    }

    _transformCurrentForecast = (weather) => {
        return {
            temperature:Math.round(weather.temp_c),
            conditionText:weather.condition.text,
            conditionIcon:weather.condition.icon,
            feelslike:Math.round(weather.feelslike_c),
            humidity:weather.humidity,
        }
    }
    _transformAstronomy = (astronomy) => {
        return {
            sunrise:astronomy.sunrise,
            sunset:astronomy.sunset
        }
    }
}

export default WeatherService;