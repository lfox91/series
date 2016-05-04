import React from 'react';

export default 
class Next extends React.Component {
  render() {
    return (
      <div id='Next' >
        <button onClick={this.props.incIndex}> Next </button>
      </div>
    );
  }
}


