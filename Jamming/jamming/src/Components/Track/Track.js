import React from 'react';
import './Track.css';

class Track extends React.Component{
    constructor(props){
        super(props);
        this.state = {};

    }

    renderAction() {
        if (this.props.isRemoval) {
            return <i   className="Track-action fa fa-minus-circle" 
                        onClick={this.removeTrack}></i>
        }
        return <i   className="Track-action fa fa-plus-circle" 
                    onClick={this.addTrack}></i>
    }

    render(){
        <div className="Track">
        <div className="Track-information">
          <h3><!-- track name will go here --></h3>
          <p><!-- track artist will go here--> | <!-- track album will go here --></p>
        </div>
        <button className="Track-action"><!-- + or - will go here --></button>
      </div>
      }
}

export default Track;
