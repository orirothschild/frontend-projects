import React from 'react';
import './TrackList.css';
import Track from '../Track/Track'

class TrackList extends React.Component{
    constructor(props){
        super(props);
  
      this.state = {};
      }

      renderAction(){

      }
      
      render(){
        <div className="TrackList">
            this.props.Track.map(track => <Track key={this.props.track.id} trackvariables={this.props.track}/>
            })
    </div>
      }
}

export default TrackList;