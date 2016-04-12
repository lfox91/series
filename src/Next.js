import React from 'react';

class Next extends React.Component {

  render() {
    return (
      <div id='Next' >
        <button onClick={this.props.incIndex}> Next </button>
      </div>
    );
  }
}

module.exports = Next;
