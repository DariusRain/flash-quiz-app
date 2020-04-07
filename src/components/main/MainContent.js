import React from "react";
import SectionTop from "../sub/SectionTop";
import SectionMiddle from "../sub/SectionMiddle";
import SectionBottom from "../sub/SectionBottom";

class MainContent extends React.Component {
  render() {
    return (
      <div className="MainContent">
        <SectionTop />
        <SectionMiddle />
        <SectionBottom />
      </div>
    );
  }
}

export default MainContent;
