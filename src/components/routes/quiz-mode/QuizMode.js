import React, { Fragment } from "react";
 // import {WEBSTER_KEY} from "../../../set_keys"

// Logical Component for the QuizUi
function QuizMode({
  //  Props live @QuizMode.js see comments at the very bottom there.
  //  Every prop below is required in order to make a compatible component.

  // Methods
  runQuiz,
  next,
  // nextAnswer,
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
  myAnswer,
  quizName,

  // Integers
  time,
}) {
  return (
    <Fragment>
    {/* Where user sets time and starts the quiz */}
      <div className="QuizUi">
        <h3>
          {quizName} <br /> Questions: {questions.length}
        </h3>
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

        {/* Where the quiz runs for the user */}
        {shouldRunQuiz ? (
          <div className="FlashQuizArea">
            <h1>{onQuestion || ""}</h1>
            <form className="QuizForm" onSubmit={next}>
              <textarea name="answer" value={input} onChange={handleInput} />
              <br />
              <button className=" Center"> Next </button>
            </form>
          </div>
        ) : null}

        {/* When the user is done with the quiz, this should run  */}
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
            <legend>My Answer:</legend>
            <h2>{myAnswer}</h2>
            </fieldset>
              {" "}
              <h3>Correct</h3>
              <form onSubmit={next}>
              <input type="radio" onChange={handleInput} name={"check"} value={"correct"} />
              <br /> 
              <h3>Incorrect</h3>
              <input type="radio" onChange={handleInput} name={"check"} value={"incorrect"} />
              <button>Next</button>
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
