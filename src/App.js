import React from 'react';
import {render} from 'react-dom';
import Video from './Video';
import Back from './Back';
import Next from './Next';
import keys from '../keys';
import $ from 'jquery';
import Intro from './Intro';
import Channels from './Channels';
import Outro from './Outro';


export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videoURLS: [],
      index: 0,
      giphyEarl : ''
    };
    this.incIndex = this.incIndex.bind(this);
    this.decIndex = this.decIndex.bind(this);
  }
  getDate() {
    let date = new Date();
    date.setDate(date.getDate() - 7);
    date = date.toISOString().split('');
    date.splice(19, 4);
    date = date.join('');
    return date;
  }
  componentDidMount() {
    let now = this.getDate();
    $.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&
      publishedAfter=${now}&maxResults=50&relevanceLanguage=en&
      eventType=completed&videoDefinition=high&q=webseries|web%20series&
      videoEmbeddable=true&type=video&key=${keys.yt}`,
       function (data) {
        let len = data.items.length;
        for (var i = 0; i < len; i++) {
          this.state.videoURLS.push("https://www.youtube.com/embed/" +
            data.items[i].id.videoId);
        }
        this.setState({
          videoURLS: this.state.videoURLS
        });
      }.bind(this));
      $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=but+why+%3F',
      function(res, err){
        if(err) console.log(err);
        this.setState({
          giphyEarl : this.state.giphyEarl + res.data.image_original_url
        });
      }.bind(this));
  }
  // shouldComponentUpdate() {
  //   return this.state.giphyEarl.length !== 0;
  // }
  incIndex() {
    this.setState({
      index: this.state.index + 1
    });
  }
  decIndex() {
    this.setState({
      index: this.state.index - 1
    });
  }
  render() {
    return (
      <div id='App'>

        <Intro />

        <Video
          videoURLS={this.state.videoURLS}
          index={this.state.index}/>

        <Back
          index={this.state.index}
          decIndex={this.decIndex}/>

        <Next
          index={this.state.index}
          incIndex={this.incIndex}/>

        <Channels/>

        <Outro earl={this.state.giphyEarl}/>

      </ div>
    );
  }
}

render( <App/>, document.getElementById('main-container'));
