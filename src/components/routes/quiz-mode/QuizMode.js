import React, { Component } from "react";
// import Q from './Q'

class QuizMode extends Component {
  render() {
    const { quizName, questions } = this.props.quiz;
    return (
      <div className="quizUi">
      <div className="aboutQuiz">
        <h3>{quizName}</h3>
        <p>Questions: {questions.length}</p>
      </div>
      </div>
    );
  }
}
export default QuizMode;