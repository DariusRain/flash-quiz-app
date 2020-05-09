import React from "react";
function SettingsBar({ indexOfQuestion, removeQuestion, id }) {
  return (
    <div style={style.main} className="SettingBar">
      <span style={style.questionNumber} className="QuestionNumber">
        Question #{indexOfQuestion + 1}
      </span>
      <div style={style.buttonList} className="SettingButtonsBox">
        <span className="SettingBarClickItem" onClick={removeQuestion}>
          {" "}
          <span style={style.click} role="img" aria-label="Delete" id={id}>
            ❌
          </span>
        </span>
        <span style={style.click} className="SettingBarClickItem">
          {" "}
          <span role="img" aria-label="Edit">
            📝
          </span>
        </span>
      </div>
    </div>
  );
}

const style = {
  main: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%"
  },
  buttonList: {
    width: "100%",
  },
  click: {
    cursor: "pointer",
  },

  questionNumber: {
    color: "orange",
    width: "100%",
    fontSize: "0.5rem !important"
  },
};

export default SettingsBar;
