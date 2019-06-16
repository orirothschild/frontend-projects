import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './Components/Video/Video';
import { Menu } from './Components/Menu/Menu';

const VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: VIDEOS.fast};
    this.chooseVideo = this.chooseVideo.bind(this);
  }

  chooseVideo(videoName){
    this.setState({
      src: VIDEOS[videoName]
    });
  }
  
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo}/>
        <Video src={this.state.src}/>
      
      </div>
    );
  }
}

export default App;
