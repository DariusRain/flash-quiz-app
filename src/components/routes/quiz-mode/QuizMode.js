import React, { Component, Fragment } from "react";
 // import {WEBSTER_KEY} from "../../../set_keys"

// Logical Component for the QuizUi
function QuizMode({
  //  Props live @QuizMode.js see comments at the very bottom there.
  //  Every prop below is required in order to make a compatible component.

  // Methods
  runQuiz,
  nextQuestion,
  nextAnswer,
  setTimer,
  handleInput,

  // Objects
  questions,

  // Booleans
  shouldRunQuiz,
  shouldRunCheck,

  // Strings
  input,
  onQuestion,
  onAnswer,
  yourAnswer,
  quizName,

  // Integers
  time,
}) {
  return (
    <Fragment>
      <div className="QuizUi">
        <h3>
          {quizName} <br /> Questions: {questions.length}
        </h3>
        <div>
          <fieldset>
            <legend>Time Quiz</legend>
            <input
              type="number"
              placeholder="How many minutes?"
              // value={time.minutes}
              onChange={setTimer}
            />
            <br />
            <button onClick={runQuiz}>Start</button>{" "}
          </fieldset>
          <div className="StartQuizSection">
            <div className="Timer">
              <h3 className="Time">Time: </h3>
              <span className="TimeTicking">
                {time.minutes
                  ? `${time.minutes} min, ${time.seconds} sec`
                  : `0 min, 0 sec`}
              </span>
            </div>
          </div>
        </div>

        {shouldRunQuiz ? (
          <div className="FlashQuizArea ">
            <h1>{onQuestion || ""}</h1>
            <form className="FlashQuizForm" onSubmit={nextQuestion}>
              <textarea name="answer" value={input} onChange={handleInput} />
              <br />
              <button className="btn-normal Center"> Next </button>
            </form>
          </div>
        ) : null}

        {shouldRunCheck ? (
          <div className="FlashQuizArea">
            <fieldset>
            <legend>Question:</legend>
            <h1>{onQuestion}</h1>
            </fieldset>

            <fieldset>
            <legend>Answer:</legend>
            <h2>{onAnswer}</h2>
            </fieldset>

            <fieldset>
            <legend>Your Answer:</legend>
            <h2>{yourAnswer}</h2>
            </fieldset>
            <form>
              {" "}
              <input type="radio" value={"correct"} />
              <input type="radio" value={"incorrect"} />
              <button onCLick={nextAnswer}>Next</button>
            </form>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
}

export default QuizMode;

//  What lives here?
//      Nothing lives here, component should be imported and have a home else where.

//  What is the use of this component?
//      This component is only for displaying and interacting with the user during
//    the time quizes are being taken.

//      The parent componet will have the required data structure as the state and the
//    methods to change the state too for this component to work properly. See QuizMode.js
//    this first component to be compatible with this component.

// Where can this component live?
//      QuizMode.js
