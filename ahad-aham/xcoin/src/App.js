import React, { Component } from 'react';
import './App.css';

import CoinPicker from './Components/CoinPicker/CoinPicker';
import RatesChart from './Components/RatesCharts/RatesChart';
//import Navbar from './Navbar';

class App extends Component {
  state = {
    fromCoin: '',
    toCoin: '',
    xRates: [],
  }
  
  fetchRates = () =>{
      fetch(`https://min-api.cryptocompare.com/data/histoday?`+
      `fsym=${this.state.fromCoin}&tsym=${this.state.toCoin}&limit=60&aggregate=3&e=CCCAGG`)
  .then( response => response.json() )
  .then( responseJson => {
    this.setState({ xRates: responseJson.Data});
});

  }
  
  componentDidMount(){
    this.fetchRates();
  }

  
  componentDidUpdate(prevProps, prevState){
    if( this.state.toCoin && this.state.fromCoin &&
        ( (this.state.fromCoin !== prevState.fromCoin ) ||
          (this.state.toCoin !== prevState.toCoin ) ) ) {

    this.fetchRates();
    }
  }
  
  setFrom = event=> this.setState({ fromCoin: event.target.value })
  setTo = event=> this.setState({ toCoin: event.target.value })

  setCoinPair = (fromCoin, toCoin)=> this.setState({ fromCoin, toCoin })
  
  render() {
    return (
      <div className="App">
        <CoinPicker fromCoin={this.state.fromCoin}
                    toCoin={this.state.toCoin}
                    setFrom={this.setFrom}
                    setTo={this.setTo}/>
        <RatesChart rates={this.state.xRates}/>
      </div>
    );
  }
}

export default App;