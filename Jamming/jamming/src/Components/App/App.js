import React from 'react';
import './App.css';
import Playlist from '../../Components'
import SearchBar from '../../Components'
import SearchResults from '../../Components'

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {};
  }

  render(){
  return (
    <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <div className="App-playlist">
      </div>
    </div>
  </div>
    );
  }
}

export default App;
