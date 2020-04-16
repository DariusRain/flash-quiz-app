import React from "react";
import SectionTop from "../containers/SectionTop";
import SectionMiddle from "../containers/SectionMiddle";
import SectionBottom from "../containers/SectionBottom";
import QAForm from "./QAForm";
import Jumbo from "./Jumbo";
class Home extends React.Component {
  render() {
    const {store} = this.props;
    return (
      <div className="HomeMain">
        <SectionTop >
          <Jumbo>
            <ul>
              <li>Get started by creating your <a href="#qaform">first quiz!</a></li>
            </ul>
          </Jumbo>

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

export default Home;
