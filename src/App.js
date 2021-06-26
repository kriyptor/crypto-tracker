import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import './App.css';


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then(res => {
      setCoins(res.data)
      setLoading(false)
    })
    .catch(err => console.log(err.message))
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  
  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase()) 
  )

  return (
    <>
    <div className="header">
      <h1>The Crypto Tracker</h1>
    </div>
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search A Coin</h1>
        <form>
          <input 
          type="text" 
          className="coin-input" 
          placeholder="Enter Coin" 
          onChange={handleChange}
          />
        </form>
      </div>
      {loading ? (<div className='lds-hourglass'></div>) : filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
          />
        );
      })}
    </div>
    </>
  );
}

export default App;
