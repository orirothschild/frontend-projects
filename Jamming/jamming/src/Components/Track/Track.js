import React from 'react';
import './Track.css';

class Track extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack(){
        this.props.onAdd(this.props.track);
    }

    removeTrack(){
        this.props.onRemove(this.props.track);
    }
    
    renderAction() {
        if (this.props.isRemoval) {
            return <i className="Track-action fa fa-minus-circle" 
            onClick={this.removeTrack}></i>
        }
        return <i className="Track-action fa fa-plus-circle" 
        onClick={this.addTrack}></i>
    }
    
    render(){
        const {track} = this.props;
        return (  
        <div className="Track">
        <div className="Track-information">
          <h3>{track.name}</h3>
          <p>{track.artist} | {track.album}</p>
        </div>
        <button className="Track-action" onClick={this.addTrack}>+</button>
        <button className="Track-action" onClick={this.removeTrack}>-</button>
      </div>
        )
    }
}

export default Track;
