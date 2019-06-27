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
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
    this.search = this.search.bind(this);
  }
  savePlayList(){
    let trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

  removeTrack(track){
    let {playlistTracks} = this.state;
    this.setState({
      playlistTracks : playlistTracks.filter(savedTrack => savedTrack.id !== track.id)
    })

  }

  addTrack(track){
    let {playlistTracks} = this.state;
      if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
       return;
      }
   
    playlistTracks.push(track);
    this.setState({
      playlistTracks:playlistTracks
    })
  }

  updatePlaylistName(name){
    this.setState({
    playlistName:name      
    })
  }
  search(searchTerm){
    console.log(searchTerm);
  }
  render(){
  return (
    <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar SearchResults={this.state.SearchResults} onSearch={this.search}/>
      <div className="App-playlist">
      <SearchResults searchResults ={this.state.searchResults} onAdd={this.addTrack}  onRemove={this.removeTrack}/>
        <Playlist title={this.state.playlistName} tracks={this.state.playlistTracks} onAdd={this.addTrack} onRemove={this.removeTrack}
        onNameChange={this.updatePlaylistName} onSave = {this.savePlayList}/>
      </div>
    </div>
  </div>
    );
  }
}

export default App;
