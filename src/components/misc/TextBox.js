import React from "react";

function TextBox({ text, type }) {
  return (
    <div style={style.main} className="QABox">
      <p>
        <span style={type.toLowerCase() == "q" ? style.question : style.answer}>
          {type}:
        </span>
      </p>
      <pre>{text}</pre>
    </div>
  );
}

const style = {
  main: {
    margin: "0 auto",
    width: "100%",
    backgroundColor: "#dddddd",
    margin: "1rem",
  },
  question: {
    color: "red",
  },
  answer: {
    color: "#005080",
  },
};

export default TextBox;
