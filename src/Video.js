import React from 'react';

class Video extends React.Component {
  render() {
    return (
      <div id='videoContainer' >
        <video  src={this.props.urls[this.props.index]}/>
      </div>
    );
  }
}

module.exports = Video;
// height="397px"
