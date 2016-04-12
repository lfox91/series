import React from 'react';
import {render}from 'react-dom';
import Video from './Video';
import Back from './Back';
import Next from './Next';
import {yt} from '../keys';
import $ from 'jquery';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videoURLS: [],
      index: 0
    };
    this.incIndex = this.incIndex.bind(this);
    this.decIndex = this.decIndex.bind(this);
  }
  getDate() {
    let date = new Date();
    date = date.toISOString().split('');
    date.splice(19,4);
    date = date.join('');
    return date;
  }
  componentDidMount() {
    let now = this.getDate();
    $.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular
      &videoCategoryId=1&publishedAfter=${now}&maxResults=50&relevanceLanguage=en&
      videoSyndicated=true&q=webseries&type=video&key=${yt}`,
      function ( data ) {
        let len = data.items.length;
        for ( var i=0; i<len; i++ ) {
          this.state.videoURLS.push( "https://www.youtube.com/embed/" +
            data.items[i].id.videoId );
        }
        this.setState({
          videoURLS: this.state.videoURLS
        });
      }.bind( this )
    );
  }
  incIndex() {
    this.setState({
      index: this.state.index+1
    });
  }
  decIndex() {
    this.setState({
      index: this.state.index-1
    });
  }
  render() {
    return (
      <div id='App'>
        <Video urls={this.state.videoURLS} />
        <Back index={this.state.index} decIndex={this.decIndex}/>
        <Next index={this.state.index} incIndex={this.incIndex}/>

      </div>
    );
  }
}

export default App;

render( <App /> , document.getElementById( 'main-container' ) );
