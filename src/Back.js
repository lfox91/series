import React from 'react';

class Back extends React.Component {
  render() {
    return (
      <div id='Back'>
        <button id='backBtn' onClick={this.props.decIndex}> Back </button>
      </div>
    );
  }
}

module.exports = Back;
