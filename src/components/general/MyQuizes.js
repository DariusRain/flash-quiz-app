import SectionTop from "../containers/SectionTop";
import SectionMiddle from "../containers/SectionMiddle";
import SectionBottom from "../containers/SectionBottom";
import {Link} from 'react-router-dom';
import React from "react";
import {v4} from 'uuid';

function MyQuizes(props) {
    const { myQuizArray } = props.store;
    return (
      <div className="MyQuizes">
        <SectionTop>
          <div className="PreviewQuizes">
            <h1>Your Quizes:</h1>
            {myQuizArray ? (
              myQuizArray.map((obj) => {
                const {id, quizName} = obj;
                return <Link to={`/quiz-mode/${id}`} key={id}>{quizName}</Link>;
              })
            ) : (
              <p style={{color: 'red'}}>No quizes created</p>
            )}
          </div>
        </SectionTop>

        <SectionMiddle>
        
        <div className="MyStats">
          <h1>Your stats</h1>
          </div>
        </SectionMiddle>

        <SectionBottom>
          <h1>Settings</h1>
        </SectionBottom>
      </div>
    );
  }


  export default MyQuizes;