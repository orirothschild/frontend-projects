import React from 'react';

export class Menu extends React.Component {
  constructor(props){
    super(props);
    this.videoSelector = this.videoSelector.bind(this);
  }

  handleClick(e) {
    var text = e.target.value;
    this.props.chooseVideo(text);
  }

  videoSelector(e){
    let name = e.target.value;
    let {chooseVideo} = this.props;
    chooseVideo(name);
  }

  render() {
    return (
      <form onClick={this.videoSelector}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}
