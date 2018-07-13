const React = require('react')
const styles = require('./Header.scss')

const Header = () => {
    return (
        <header className={styles.Header}>
            <span>Latest Weather</span>
        </header>
    )
}

module.exports = Header
