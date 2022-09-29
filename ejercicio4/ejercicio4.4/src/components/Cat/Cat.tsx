import React, { Component } from "react";

export class Cat extends Component<{ style?: React.CSSProperties }> {
  render() {
    return (
      <img
        style={this.props.style}
        width="100px"
        src="https://images-na.ssl-images-amazon.com/images/I/71+mDoHG4mL.png"
        alt="Mouse"
      />
    );
  }
}
