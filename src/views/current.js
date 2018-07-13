const React = require('react')
const {renderToString} = require('react-dom/server')

const template = require('./template')
const App = require('../client/App/App')

module.exports = props => {
    const body = renderToString(<App {...props}/>)
    return template({
        title: `Current Weather`,
        body,
        props
    })
}