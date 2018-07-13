'use strict';

const React = require('react');
const { hydrate } = require('react-dom');

const App = require('./App/App.jsx');
const data = window.data ? JSON.parse(unescape(window.data)) : '';
const props = {
    view: '',
    currentWeather: {},
    cities: []
};
hydrate(React.createElement(App, props), document.getElementById('app'));