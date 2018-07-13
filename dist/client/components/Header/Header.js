'use strict';

const React = require('react');
const styles = {
    'Header': 'Header__Header--1tnOvADp'
};

const Header = () => {
    return React.createElement(
        'header',
        { className: styles.Header },
        React.createElement(
            'span',
            null,
            'Latest Weather'
        )
    );
};

module.exports = Header;