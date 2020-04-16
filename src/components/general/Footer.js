import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <p>{this.props.footerText}</p>
      </div>
    );
  }
}

export default Footer;
