'use strict';

const cityList = () => [{ name: 'Dublin', appId: 'dublin', id: 5344157 }, { name: 'London', appId: 'london', id: 6058560 }, { name: 'Phoenix', appId: 'phoenix', id: 5308655 }, { name: 'New York', appId: 'new_york', id: 5128581 }];

/**
 * Get city object by appId
 *
 * @param {string} appId
 *
 * @return {Object|bool} Returns false if appId is invalid
 */
const cityByAppId = appId => {
    const city = cityList().filter(city => city.appId === appId);
    return city.length > 0 ? city[0] : false;
};

/**
 * Get a city's if from it's name
 * 
 * @param {string} city 
 * 
 * @return {int|bool}
 */
const cityIdByName = cityName => {
    if (typeof cityName != 'string') {
        return false;
    }

    const appId = cityName.toLocaleLowerCase().replace(' ', '_');
    const city = cityByAppId(appId);
    return city.id ? city.id : false;
};

module.exports = {
    cityList,
    cityByAppId,
    cityIdByName
};