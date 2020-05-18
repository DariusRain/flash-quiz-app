import React from "react";

function SettingsBar({ indexOfQuestion, removeQuestion, id }) {
  return (
    <span style={style.main} className="SettingBar">
      <span style={style.questionNumber} className="QuestionNumber">
        Question #{indexOfQuestion + 1}
      </span>
      <span style={style.buttonList} className="SettingButtonsBox">
        <span  onClick={removeQuestion}>
          {" "}
          <span className="SettingBarClickItem" style={style.click} role="img" aria-label="Delete" id={id}>
            ❌
          </span>
        </span>
        <span >
          {" "}
          <span className={"SettingBarClickItem"} style={style.click} role="img" aria-label="Edit">
            📝
          </span>
        </span>
      </span>
    </span>
  );
}

const style = {
  main: {
    margin: "1rem",
    width: "100%",

  },
  buttonList: {
    float: "right"
  },
  click: {
    cursor: "pointer",

  },

  questionNumber: {
    color: "#dddddd",
    fontSize: "0.5rem !important"
  },
};

export default SettingsBar;

// This component will be the component that displays
// the X and edit icons for during the time a user creates a quiz.