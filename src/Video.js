import React from 'react';
import YouTube from 'react-youtube';
class Video extends React.Component {
  render() {
    return (
      <iframe height="42.19vh" src={this.props.videoURLS[this.props.index]}/>
    );
  }
}

module.exports = Video;
