'use strict';

const { currentByCityName } = require('../models/current');
const currentView = require('../views/current');
const propFactory = require('../lib/propFactory');
const { cityList } = require('../lib/cities');

module.exports = async (req, res) => {
    const cityName = req.params.city ? req.params.city : 'New York';
    const city = await currentByCityName(cityName);

    console.log('cityName', cityName);

    const currentWeather = {
        city: city.name,
        overview: city['weather'][0]['main'],
        description: city['weather'][0]['description'],
        currentTemp: city.main.temp,
        humidity: city.main.humidity
    };

    const cities = cityList();

    const props = propFactory('current', currentWeather, cities);

    // console.log(props)

    const view = currentView(props);

    res.send(view);
};