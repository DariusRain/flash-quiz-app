import React from "react";

function QuizUi({
  run,
  shouldRun,
  questions,
  time,
  setTimer,
  input,
  nextQuestion,
  onCurrentQuestion,
  handleInput,
  quizName,
}) {
  return (
    <div className="QuizUi">
      <div className="aboutQuiz">
        <h3>{quizName}</h3>
        <p>Questions: {questions.length}</p>
        <fieldset>
          <legend>Time Quiz</legend>
          <input
            type="number"
            placeholder="How many minutes?"
            // value={time.minutes}
            onChange={setTimer}
          />
          <br />
          <button className="btn-normal" onClick={run}>
            Start
          </button>{" "}
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

      {shouldRun ? (
        <div className="FlashQuizArea">
          <h3>{onCurrentQuestion || ""}</h3>
          <form className="FlashQuizForm" onSubmit={nextQuestion}>
            <textarea name="answer" value={input} onChange={handleInput} />
            <br />
            <button className="btn-normal Center"> Next </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

const style = {
  main: {
    display: "flex",
    flexDirection: "row",
  },
};

export default QuizUi;
