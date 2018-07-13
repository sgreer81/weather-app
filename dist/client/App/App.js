'use strict';

const React = require('react');
const Axios = require('axios');

const styles = {
    'App': 'App__App--2SebuctK'
};
const Current = require('../components/Current/Current');
const Header = require('../components/Header/Header');
const SelectCity = require('../components/SelectCity/SelectCity');

class App extends React.Component {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.state = Object.assign({}, this.props), _temp;
    }

    // componentDidMount() {
    //     Axios.get('https://jsonplaceholder.typicode.com/posts').then(response => this.setState({ data: response.data }))
    // }

    render() {
        const { cities } = this.state;
        return React.createElement(
            'div',
            { className: styles.App },
            React.createElement(Header, null),
            React.createElement(SelectCity, { cities: cities })
        );
    }
}

module.exports = App;