import React from "react";
import SectionTop from "../../containers/SectionTop";
import SectionMiddle from "../../containers/SectionMiddle";
import SectionBottom from "../../containers/SectionBottom";
import QAForm from "../../misc/QuizForm";
import Jumbo from "../../misc/Jumbo";
function Home({store}) {
    return (
      <div>
        <SectionTop>
          <Jumbo>
            <ul>
              <li>Get started by creating your <a href="#qaform">first quiz!</a></li>
            </ul>
          </Jumbo>

        </SectionTop>

        <SectionMiddle>
          <QAForm store={store} />
        </SectionMiddle>

        <SectionBottom>
        <h1> Al </h1>
        </SectionBottom>
      </div>
    );
  }





export default Home;
