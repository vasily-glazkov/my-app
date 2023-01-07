import React from 'react';

class Item extends React.Component {
    clickMe() {
        console.log("I clicked: ", this.props.name);
    }

    render() {
      return (
        <h1 onClick={() => this.clickMe()}>Hello World from {this.props.name}</h1>
        )
    }
  }

  export default Item;