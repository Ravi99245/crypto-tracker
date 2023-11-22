import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, currencyList: []}

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const upDatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))
    console.log(upDatedData)
    this.setState({currencyList: upDatedData, isLoading: false})
  }

  render() {
    const {isLoading, currencyList} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="currencyList">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
          className="image"
          alt="cryptocurrency"
        />
        <div className="coinsList">
          <nav className="type-section">
            <p className="type">Coin Type</p>
            <div className="currencyType">
              <p className="type1">USD</p>
              <p className="type2">EURO</p>
            </div>
          </nav>
          <ul className="coin-item">
            {currencyList.map(eachItem => (
              <CryptocurrencyItem key={eachItem.id} currencyItem={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
