import React from 'react';
import $ from 'jquery';

export default class Outro extends React.Component{

  render(){
    console.log(this.props.earl)
    return(
      <div className='container' id='outro'
        style={{backgroundImage: 'url('+this.props.earl+')',
                backgroundSize: 'contain',
                WebkitTransition: 'all',
                msTransition: 'all'}}
        >
        <div id='whyBox'>
          <h1>
            ? But Why...
          </h1>
          <h2>
            For fun...duh
          </h2>
        </div>

      </div>
    )
  }
}
