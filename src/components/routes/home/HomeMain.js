import React from "react";
import SectionTop from "../../sub/SectionTop";
import SectionMiddle from "../../sub/SectionMiddle";
import SectionBottom from "../../sub/SectionBottom";
import HeaderNavBar from "../../sub/Navbar";

import QAForm from "../../misc/QAForm";
class HomeMain extends React.Component {
  render() {
    const {store} = this.props;
    return (
      <div className="HomeMain">
        <SectionTop >
          <HeaderNavBar className="HeaderNavBar" store={store} />
        </SectionTop>

        <SectionMiddle >
          <QAForm store={store} />
        </SectionMiddle>

        <SectionBottom>
        <h1> Al </h1>
        </SectionBottom>
      </div>
    );
  }
}

export default HomeMain;
