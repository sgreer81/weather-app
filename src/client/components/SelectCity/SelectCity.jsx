const React = require('react')
const styles = require('./SelectCity.scss')

const Header = ({cities}) => {
    return (
        <div className={styles.SelectCity}>
            <select>
                <option value="phoenix">Phoenix</option>
            </select>
        </div>
    )
}

module.exports = Header
