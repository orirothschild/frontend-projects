import React from 'react';
import './App.css';
import Playlist from '../../Components/PlayList/PlayList'
import SearchBar from '../../Components/SearchBar/SearchBar'
import SearchResults from '../../Components/SearchResults/SearchResults'

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      playlistName:'firstlist',
      playlistTracks:[
          {
              name: 'song1',
              artist:'artist1',
              album:'album1',
              id:1
          },
          {
              name: 'song2',
              artist:'artist2',
              album:'album2',
              id:2
          },
          {
              name: 'song2',
              artist:'artist2',
              album:'album2',
              id:3
          }
      ],
      SearchResults :{}
    }
    this.addTracks = this.addTracks.bind(this);
  }

  removeTrack(track){
    let {playlistTracks} = this.props;
    this.setState({
      playlistTracks : playlistTracks.filter(savedTrack => savedTrack.id !== track.id)
    })

  }

  addTracks(track){
    let {playlistTracks} = this.props;
      if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
       return;
      }
   
    playlistTracks.push(track);
    this.setState({
      playlistTracks:playlistTracks
    })



  }

  render(){
  return (
    <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar SearchResults={this.state.SearchResults}/>
      <div className="App-playlist">
      <SearchResults searchResults ={this.state.searchResults} onAdd={this.addTracks}/>
        <Playlist title={this.state.playlistName} tracks={this.state.playlistTracks}/>
      </div>
    </div>
  </div>
    );
  }
}

export default App;
