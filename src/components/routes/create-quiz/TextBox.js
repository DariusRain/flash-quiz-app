import React from "react";

function TextBox({ text, type }) {
  return (
    <div style={style.main}>
      <p>
        <span style={type.toLowerCase() === "q" ? style.question : style.answer}>
          {type}:
        </span>
      </p>
      <p style={style.pTag}>{text}</p>
    </div>
  );
}

const style = {
  main: {
    margin: "0 auto",
    width: "100%",
    backgroundColor: "#dddddd",

    padding: "0.4rem",
    borderRadius: "0.2rem"
  },
  question: {
    color: "red",
    fontSize: "1rem",
    padding: "0.4rem",
    backgroundColor: "#dddddd"
  },
  answer: {
    color: "#005080",
    fontSize: "1rem",
    padding: "0.4rem",
    backgroundColor: "#dddddd"

  },
  pTag: {
    padding: "0.8rem",
    fontSize:"1rem",
    backgroundColor: "#dddddd"
  }
};

export default TextBox;

// This component renders a question box or answer box after the user
// has submited a single question during the Quiz Form.