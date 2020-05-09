import SectionTop from "../../containers/SectionTop";
import SectionMiddle from "../../containers/SectionMiddle";
import SectionBottom from "../../containers/SectionBottom";
import { Link } from "react-router-dom";
import React from "react";

function MyQuizes(props) {
  const { myQuizArray } = props.store;
  return (
    <div className="MyQuizes">
      <SectionTop>
        <div className="quiz-links">
          <h2 style={{color: "orange"}}>My Quizes</h2>
          {myQuizArray ? (
            myQuizArray.map(({ id, quizName }, index) => (
              <div>
                <Link className={"quiz-link"} to={`/quiz-mode/${id}`} key={id}>
                  {index + 1}:
                  &nbsp;
                  &nbsp;
                  {`${quizName}`}
                </Link>
              </div>
            ))
          ) : (
            <p style={{ color: "red" }}>No quizes created</p>
          )}
        </div>
      </SectionTop>

      <SectionMiddle>
        <div className="MyStats">
          <h3>Your stats</h3>
        </div>
      </SectionMiddle>

      <SectionBottom>
        <h3>Settings</h3>
      </SectionBottom>
    </div>
  );
}

const style = {};

export default MyQuizes;
