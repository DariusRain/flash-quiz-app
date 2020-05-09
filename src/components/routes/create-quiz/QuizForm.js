import React from "react";
import PreviewQuestion from "../../misc/PreviewQuestion";
import { connect } from "react-redux";

function QuizForm({
  question,
  answer,
  questionsArr,
  handleInput,
  nextQuestion,
  submitQuiz,
  removeQuestion,
}) {
  return (
    <React.Fragment>
      <span className={"QuestionNumber"}>Question #{questionsArr.length + 1}</span>
      <div className="QuizForm" id="qaform">
        <form>
          <fieldset>
            <legend>Question</legend>
            <br />
            <textarea
              name="question"
              value={question}
              onChange={handleInput}
              required
            />
          </fieldset>
          <br />
          <fieldset>
            <legend>Answer:</legend>

            <br />
            <textarea
              name="answer"
              value={answer}
              onChange={handleInput}
              required
            />
          </fieldset>
          <div>
            <button className="ButtonStyleForm" onClick={nextQuestion}>
              Next
            </button>
            <button className="ButtonStyleForm" onClick={submitQuiz}>
              Done
            </button>
          </div>
        </form>
      </div>
      <div className="QuestionBoxMain">
          {questionsArr.map((qObj, indexNum) => {
            const { question, answer, id } = qObj;
            return (
              <PreviewQuestion
                question={question}
                answer={answer}
                id={id}
                key={id}
                indexOfQuestion={indexNum}
                removeQuestion={removeQuestion}
              />
            );
          })}
        </div>
    </React.Fragment>
  );
}

// This is
// this.handleQuestionInput = this.handleQuestionInput.bind(this);
// this.handleAnswerInput = this.handleAnswerInput.bind(this);
// this.nextQuestion = this.nextQuestion.bind(this);

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(QuizForm);
