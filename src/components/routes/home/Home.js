import React from "react";
import {NavLink} from "react-router-dom";
import SectionTop from "../../containers/SectionTop";
import SectionMiddle from "../../containers/SectionMiddle";
import SectionBottom from "../../containers/SectionBottom";

// import QAForm from "../create-quiz/QuizForm";

import Jumbo from "../../misc/Jumbo";
function Home({ store }) {
  return (
    <div>
      <SectionTop>
        <Jumbo>
          <ul>
            <li>
              Get started by creating your <NavLink to="/create-quiz">first quiz!</NavLink>
            </li>
          </ul>
        </Jumbo>
      </SectionTop>

      <SectionMiddle>{/* <PublicQuizes/> */}</SectionMiddle>

      <SectionBottom>
        {/* About us and more link */}
        {/* < Footer />  */}
      </SectionBottom>
    </div>
  );
}

// const style = {
//   main: {},
// };

export default Home;
