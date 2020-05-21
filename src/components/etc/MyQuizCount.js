import React from "react";

function MyQuizCount({ myQuizArray }) {
  return (
    <span className="QuizNumber" style={style.main}>

      <span className="hover" style={style.quizNumber}>
        {myQuizArray.length ? myQuizArray.length : 0}
      </span>
    </span>
  );
}

const style = {
  main: {
    textDecoration: "none",
    color: "white",
    fontSize: "0.9rem",
  },
  quizNumber: {
    color: "#dddddd",
    backgroundColor: "#005080",
    borderRadius: "0.2rem",
    padding: "0.1rem",
    paddingBottom: "0.2rem"
  },
};

export default MyQuizCount;
