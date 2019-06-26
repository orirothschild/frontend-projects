import React from 'react';
import './App.css';
import Playlist from '../../Components'
import SearchBar from '../../Components'
import SearchResults from '../../Components'

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      SearchResults : []
    };
  }

  render(){
  return (
    <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar SearchResults={this.state.SearchResults}/>
      <div className="App-playlist">
        <SearchResults/>
        <Playlist/>
      </div>
    </div>
  </div>
    );
  }
}

export default App;
