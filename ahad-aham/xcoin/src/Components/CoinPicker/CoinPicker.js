import React from 'react';
import './CoinPicker.css';

export default (props)=> (
  <div className='CoinPicker'>
    <label>
      From
      <select value={props.fromCoin} onChange={props.setFrom}>
        <option value=''>Select From Coin</option>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='BTC'>BTC</option>
        <option value='ETH'>ETH</option>
        <option value='WINGS'>WINGS</option>
      </select>
    </label>

    <label>
      To
      <select value={props.toCoin} onChange={props.setTo}>
        <option value=''>Select To Coin</option>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='BTC'>BTC</option>
        <option value='ETH'>ETH</option>
        <option value='WINGS'>WINGS</option>
      </select>
    </label>
  </div>
);