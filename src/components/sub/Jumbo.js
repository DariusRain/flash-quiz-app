import React from "react";
class Jumbo extends React.Component {
  render() {
    return (
      <div className="Jumbo">
        <p>{this.props.jumboText}</p>
      </div>
    );
  }
}

export default Jumbo;
