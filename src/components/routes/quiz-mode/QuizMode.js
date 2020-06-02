import React, { Fragment } from "react";
// import {WEBSTER_KEY} from "../../../set_keys"

// Logical Component for the QuizUi
function QuizMode({
  //  Props live @QuizMode.js see comments at the very bottom there.
  //  Every prop below is required in order to make a compatible component.

  // Methods
  runQuiz,
  next,
  cancel,

  // nextAnswer,
  setTimer,
  handleInput,

  // Objects
  questions,
  answeredRight,
  answeredWrong,

  // Booleans
  shouldRunQuiz,
  shouldRunCheck,
  shouldShowStartMenu,
  shouldShowResults,

  // Strings
  input,
  onQuestion,
  onAnswer,
  myAnswer,
  quizName,
  percentage,

  // Integers
  time,
}) {
  return (
    <div className="QuizUi">
      {shouldShowStartMenu ? (
        <div style={{ margin: "0 auto" }}>
          <h3>
            {quizName} <br /> Questions: {questions.length}
          </h3>
          {/* 
        <fieldset>
          <legend>Time Quiz</legend>
          <input
            type="number"
            placeholder="How many minutes?"
            // value={time.minutes}
            onChange={setTimer}
          /> 
          */}
          <br />
          <button onClick={runQuiz}>Start</button> {/* </fieldset> */}
        </div>
      ) : null}

      {shouldShowResults ? (
        <div>
          <h3>Your percentage: {percentage} </h3>
          <h3>Answered wrong:</h3>
          {answeredWrong.length > 0 ? (
            answeredWrong.map((obj) => (
              <span style={{ color: "#dddddd" }}>
                {obj.question}, <br />{" "}
              </span>
            ))
          ) : (
            <span style={{color:"#ddddd"}}>None</span>
          )}
        </div>
      ) : null}
      {/* 
        <div className="StartQuizSection">
          <div className="Timer">
            <h3 className="Time">Time: </h3>
            <span className="TimeTicking">
              {time.minutes
                ? `${time.minutes} min, ${time.seconds} sec`
                : `0 min, 0 sec`}
            </span>
          </div> 
          */}

      {/* Where the quiz runs for the user */}
      {shouldRunQuiz ? (
        <div className="FlashQuizArea">
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={next}
          >
            <h1 style={{color: "#dddddd"}}>{onQuestion || ""}</h1>{" "}
            <textarea name="answer" value={input} onChange={handleInput} />
            <br /> <button style={{ width: "100%" }}> Next </button>
            <button style={{ width: "100%", color: "red" }} onClick={cancel}>
              {" "}
              Cancel
            </button>
          </form>
        </div>
      ) : null}

      {/* When the user is done with the quiz, this should run  */}
      {shouldRunCheck ? (
        <div className="FlashQuizArea">

          <form onSubmit={next} style={{width: "100%"}}>

          <div  style={{ margin: "0 auto" }} >
            <fieldset>
              <legend>Question:</legend>
              <h3>{onQuestion}</h3>
            </fieldset>
            <fieldset>
              <legend>Answer:</legend>
              <h3>{onAnswer}</h3>
            </fieldset>
            <fieldset>
              <legend>My Answer:</legend>
              <h3>{myAnswer || "No answer given..."}</h3>
            </fieldset>{" "}
          </div>

            <div style={{ display: "flex", margin: "0.5rem" }}>
              <div>
                <h3>Correct</h3>
                <input
                  type="radio"
                  onChange={handleInput}
                  name={"check"}
                  value={"correct"}
                />
              </div>

              <div>
                <h3>Incorrect</h3>
                <input
                  type="radio"
                  onChange={handleInput}
                  name={"check"}
                  value={"incorrect"}
                />
              </div>
            </div>

            <div style={{ display: "flex", margin: "0 auto" }}>
              <button>Next</button>
              <button style={{ margin: "1rem", color: "red" }} onClick={cancel}>
                Cancel{" "}
              </button>
            </div>

          </form>

        </div>
      ) : null}
    </div>
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
