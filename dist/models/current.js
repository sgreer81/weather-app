'use strict';

const weather = require('../lib/weather');
const { cityIdByName } = require('../lib/cities');

const formatData = data => {};

/**
 * Get the current weather for a city
 *
 * @param {string} cityName
 *
 * @return {Promise}
 */
const currentByCityName = async cityName => {
    const id = cityIdByName(cityName);
    try {
        const response = await weather.get('/weather', {
            params: { id, units: 'imperial' }
        });
        return response.data;
    } catch (e) {
        console.error(e);
        return false;
    }
};

module.exports = {
    currentByCityName
};