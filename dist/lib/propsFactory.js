'use strict';

module.exports = (view = '', currentWeather = {}, cities = []) => {
    return {
        view,
        currentWeather,
        cities
    };
};