import React from 'react';

import { BaseComponent } from '../BaseComponent/BaseComponent';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

class Playlist extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('handleNameChange');
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={this.props.name} onChange={this.handleNameChange} />
        <TrackList tracks={this.props.tracks} onRemove={this.props.onRemove} />
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
