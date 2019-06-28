import React from 'react';
import './App.css';
import Playlist from '../../Components/PlayList/PlayList'
import SearchBar from '../../Components/SearchBar/SearchBar'
import SearchResults from '../../Components/SearchResults/SearchResults'
import Spotify from '../../util/Spotify'
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
      SearchResults :[]
    }
    this._bind('updatePlaylistName', 'addTrack', 'removeTrack', 'savePlaylist', 'search');
  }
  savePlayList(){
    const trackUris = this.state.playlistTracks.map(playlistTrack => playlistTrack.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris);
    this.setState({
      searchResults: []
    });
    this.updatePlaylistName('My playlist');
    console.info(trackUris);
  }

  removeTrack(track){
    let {playlistTracks} = this.state;
    this.setTrackState(playlistTracks.filter(savedTrack => savedTrack.id !== track.id))
  }

  addTrack(track){
    let {playlistTracks} = this.state;
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
   
    playlistTracks.push(track);
    this.setTrackState( playlistTracks);
  }

  setTrackState(changedtracks){

    this.setState({
      playlistTracks:changedtracks
    })

  }
  updatePlaylistName(name){
    this.setState({
    playlistName:name      
    })
  }
  search(searchTerm){
    this.setState({
      searchResults:Spotify.search(searchTerm)//check if then is needed
    })
  }
  render(){
  return (
    <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar  onSearch={this.search}/>
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
