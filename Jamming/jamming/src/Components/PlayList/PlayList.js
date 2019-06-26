import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends React.Component{
    constructor(props){
        super(props);
  
      this.state = {};
      }
      
      render(){
        <div className="Playlist">
        <input defaultvalue={"New Playlist"}/>
        <TrackList/>
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
      }
}
export default PlayList;