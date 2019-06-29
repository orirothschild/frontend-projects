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
      searchResults: [],
      playlistName: 'My playlist',
      playlistTracks: []
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }
  updatePlaylistName(name){
    this.setState({
    playlistName:name      
  })
}

addTrack(track){
  let {playlistTracks} = this.state;
  if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
    return;
  }
 
  playlistTracks.push(track);
  this.setTrackState( playlistTracks);
}

removeTrack(track){
  let {playlistTracks} = this.state;
  this.setTrackState(playlistTracks.filter(savedTrack => savedTrack.id !== track.id))
}
savePlaylist(){
    const trackUris = this.state.playlistTracks.map(playlistTrack => playlistTrack.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris);
    this.setState({
      searchResults: []
    });
    this.updatePlaylistName('My playlist');
    console.info(trackUris);
  }



  setTrackState(changedtracks){

    this.setState({
      playlistTracks:changedtracks
    })

  }

  search(searchTerm){
    Spotify.search(searchTerm).then(searchResults => {
      this.setState({
        searchResults:searchResults
      })
    })
  /*  this.setState({
      searchResults:Spotify.search(searchTerm)//check if then is needed
    })*/
  }
  render(){
  return (
    <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar  onSearch={this.search}/>
      <div className="App-playlist">
      <SearchResults searchResults ={this.state.searchResults} 
        onAdd={this.addTrack}
       />
        <Playlist title={this.state.playlistName} 
        tracks={this.state.playlistTracks} 
        onAdd={this.addTrack}
        onRemove={this.removeTrack}
        onNameChange={this.updatePlaylistName}
         onSave = {this.savePlaylist}/>
      </div>
    </div>
  </div>
    );
  }
}

export default App;
