'use strict';

const React = require('react');
const styles = {
    'SelectCity': 'SelectCity__SelectCity--1i9d8usm'
};

const Header = ({ cities }) => {
    return React.createElement(
        'div',
        { className: styles.SelectCity },
        React.createElement(
            'select',
            null,
            React.createElement(
                'option',
                { value: 'phoenix' },
                'Phoenix'
            )
        )
    );
};

module.exports = Header;