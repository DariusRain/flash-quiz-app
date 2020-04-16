import React, { Component } from "react";

export default class PreviewQuestion extends Component {


  render() {
    const {
      id,
      question,
      answer,
      removeQuestion,
      indexOfQuestion
    } = this.props;
    return (
      <div className="PreviewQuestion">
        <div className="SettingBar">
        <span className="QuestionNumber">Question #{indexOfQuestion + 1}</span>
          <div className="SettingButtonsBox">
          <span className="SettingBarClickItem"  onClick={removeQuestion}>
            {" "}
            <span role="img" aria-label="Delete" id={id}>❌</span>
          </span>
          <span className="SettingBarClickItem">
            {" "}
            <span role="img" aria-label="Edit">📝</span>
          </span>
          </div>
        </div>
        <div className="QABox">
        <p><span className="Q">Q:</span>{question}</p>
        </div>
        <div className="QABox">
        <p><span className="A">A:</span>{answer}</p>
        </div>
      </div>
    );
  }
}
