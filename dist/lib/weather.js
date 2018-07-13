'use strict';

const axios = require('axios');
require('dotenv').config();

const appid = process.env.WEATHER_API_KEY ? process.env.WEATHER_API_KEY : 'appid';

const weather = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/',
    timeout: 1000,
    params: { appid }
});

module.exports = weather;