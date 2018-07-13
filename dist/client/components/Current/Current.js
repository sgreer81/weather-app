'use strict';

const React = require('react');

const Current = ({ data }) => {
    const { city, currentTemp, description, humidity, overview } = data;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Current Weather: ',
            city
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                React.createElement(
                    'strong',
                    null,
                    'Current Temp:'
                ),
                ' ',
                currentTemp
            ),
            React.createElement(
                'li',
                null,
                React.createElement(
                    'strong',
                    null,
                    'Description:'
                ),
                ' ',
                description
            ),
            React.createElement(
                'li',
                null,
                React.createElement(
                    'strong',
                    null,
                    'Humidity:'
                ),
                ' ',
                humidity,
                '%'
            ),
            React.createElement(
                'li',
                null,
                React.createElement(
                    'strong',
                    null,
                    'Overview:'
                ),
                ' ',
                overview
            )
        )
    );
};

module.exports = Current;