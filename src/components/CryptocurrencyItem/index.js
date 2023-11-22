import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItem} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = currencyItem

  return (
    <li className="currencyItem">
      <div className="coin">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="value">
        <p className="value1">{usdValue}</p>
        <p className="value2">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
