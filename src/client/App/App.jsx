const React = require('react')
const Axios = require('axios')

const styles = require('./App.scss')
const Current = require('../components/Current/Current')
const Header = require('../components/Header/Header')
const SelectCity = require('../components/SelectCity/SelectCity')

class App extends React.Component {
    state = {
        ...this.props
    }

    // componentDidMount() {
    //     Axios.get('https://jsonplaceholder.typicode.com/posts').then(response => this.setState({ data: response.data }))
    // }

    render() {
        const { cities } = this.state
        return (
            <div className={styles.App}>
                <Header />
                <SelectCity cities={cities} />
                {/* <Current data={this.state.data} /> */}
            </div>
        )
    }
}

module.exports = App
