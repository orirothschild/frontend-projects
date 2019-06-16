import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  father:'danny',
  name: 'Oris burger',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  rateType: 'oriScale',
  reviewCount: 90
};

const businesses = [business,business,business,business,business,business,business,business];
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1> Ori Yelp website</h1>
        <SearchBar />
        <BusinessList businesses={businesses}/>
      </div>
    );
  }
}

export default App;
