import axios from 'axios';

const API_KEY = "455ad2511d0c0b473cd9bb206e6975c2";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    /**
     * Action function always returns an action
     * and action always has a type
     */
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('request', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}