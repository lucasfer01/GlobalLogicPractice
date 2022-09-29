import React, { Component } from "react";

export class Mouse extends Component<{ style?: React.CSSProperties }> {
  render() {
    return (
      <img
        style={this.props.style}
        width="100px"
        src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77903/mouse-clipart-md.png"
        alt="Little cat"
      />
    );
  }
}
