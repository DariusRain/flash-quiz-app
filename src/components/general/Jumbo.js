import React from "react";
class Jumbo extends React.Component {
  render() {
    return (
      <div className="Jumbo">
        {this.props.children}
      </div>
    );
  }
}

export default Jumbo;
