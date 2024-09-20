class WeatherService {
    _apiBase = 'http://api.weatherapi.com/v1/';
    _apiKey = '4c4a9fdc9c04461191890932242009';
    
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

    getLocalTime = (location) => {
        return this.getData(`${this._apiBase}current.json?key=${this._apiKey}&q=${location}&aqi=no`);
    }

    getSearchResults = (searchValue) => {
        return this.getData(`${this._apiBase}search.json?key=${this._apiKey}&q=${searchValue}&aqi=no`);
    }

    getAstronomy = async (location, currentDate) => {
        const result = await this.getData(`${this._apiBase}astronomy.json?key=${this._apiKey}&q=${location}&dt=${currentDate}`);
        return this._transformAstronomy(result.astronomy.astro);
    }

    getThreeDaysForecast = async (location) => {
        const result = await this.getData(`${this._apiBase}forecast.json?key=${this._apiKey}&q=${location}&days=4&aqi=no&alerts=no`);
        return result.forecast.forecastday.map(this._transformTenDaysForecast);
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
    _transformTenDaysForecast = (forecast) => {
        return {
            minTemperature: Math.round(forecast.day.mintemp_c),
            maxTemperature: Math.round(forecast.day.maxtemp_c),
            conditionText: forecast.day.condition.text,
            conditionIcon: forecast.day.condition.icon,
            hours: forecast.hour
        }
    }
}

export default WeatherService;