import React from "react";
import Jumbo from './Jumbo'

class SectionTop extends React.Component {


  render() {
    return (
      <div className="SectionTop">
        {this.props.children}
     </div>
    );
  }
}

export default SectionTop;
