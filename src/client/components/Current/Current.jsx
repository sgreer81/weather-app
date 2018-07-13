const React = require('react')

const Current = ({ data }) => {
    const { city, currentTemp, description, humidity, overview } = data
    return (
        <div>
            <h1>Current Weather: {city}</h1>
            <ul>
                <li>
                    <strong>Current Temp:</strong> {currentTemp}
                </li>
                <li>
                    <strong>Description:</strong> {description}
                </li>
                <li>
                    <strong>Humidity:</strong> {humidity}%
                </li>
                <li>
                    <strong>Overview:</strong> {overview}
                </li>
            </ul>
        </div>
    )
}

module.exports = Current
