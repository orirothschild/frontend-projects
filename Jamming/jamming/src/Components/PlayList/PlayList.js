import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends React.Component{
    constructor(props){
        super(props);

      this.handleNameChange = this.handleNameChange.bind(this);
      }

      handleNameChange(e){
       /* if(isNaN(e.target.value)){
          this.setState( ()=>{
            throw new Error('enter a diffrent name for the playlist')
        })
      }*/
        this.props.onNameChange(e.target.value);
      }
      
      render(){
        return (  
            <div className="Playlist">
            <input defaultValue={"New Playlist"} onChange={this.handleNameChange} />
            <TrackList tracks={this.props.tracks} onRemove={this.props.onRemove} isRemoval={true}/>
            <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
        </div>
        )
      }
}
export default PlayList;