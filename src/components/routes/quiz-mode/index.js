// routes/quiz-mode/index.js

import React, { Component } from "react";
import { connect } from "react-redux";
import QuizMode from "./QuizMode";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizMode: {
        quizName: this.props.quiz.quizName,
        questions: [...this.props.quiz.questions],
        onQuestionNumber: 0,
        onQuestion: this.props.quiz.questions[0]["question"],
        onAnswerNumber: 0,
        onAnswer: "",
        yourAnswer: "",
        input: "",
        time: 0,
        shouldRunQuiz: false,
        shouldRunCheck: false,
        answered: [],
        score: 0,
      },
    };
  }

  render() {
    const quizModeMethods = {
      handleInput: this.handleInput,
      runQuiz: this.runQuiz,
      runCheck: this.runCheck,
      nextQuestion: this.nextQuestion,
      nextAnswer: this.nextAnswer,
      setTimer: this.setTimer,
      submitScore: this.submitScore,
    };

    return <QuizMode {...quizModeMethods} {...this.state.quizMode} />;
  }

  // When component mounts hard copy the questions passed as props
  // from the redux store in this directories index.js file.
  // Sets time for quiz (Not functional yet)

  // --------------------------------------------------------------------------------------
  // Methods for <QuizMode />
  setTimer = (e) => {
    return this.setState({
      ...this.state,
      time: {
        minutes: Math.abs(e.target.value),
        seconds: 0,
      },
    });
  };

  nextQuestion = (e) => {
    e.preventDefault();
    const { onQuestionNumber, questions, input } = this.state.quizMode;
    const nextQuestionNumber = onQuestionNumber + 1;
    let dummyState = { ...this.state };

    if (nextQuestionNumber < questions.length) {
      // console.log(questions[onQuestionNumber].question, "->", questions[nextQuestionNumber].question)
      dummyState.quizMode.answered = [
        ...this.state.quizMode.answered,
        { ...questions[onQuestionNumber], myAnswer: input, correct: false },
      ];
      dummyState.quizMode.onQuestionNumber = nextQuestionNumber;
      dummyState.quizMode.onQuestion = questions[nextQuestionNumber].question;

      this.setState({ dummyState });
    } else {
      dummyState.quizMode.answered = [
        ...this.state.quizMode.answered,
        {
          ...questions[questions.length - 1],
          myAnswer: input,
          correct: false,
        },
      ];
      this.setState({ dummyState });
      // This will just set the shouldRunQuiz state property to the opposing value so false.
      this.runQuiz();

      setTimeout(() => {
        // Finished
        alert("Finished!");

        // this.checkQuizAuto();
      }, 300);

      // Since shouldRunQuiz is false now shouldRunCheck will bw set to true
      this.runCheck();
      this.resetState("QuizMode");
    }

    return;
  };

  nextAnswer = (e) => {
    return;
  };

  resetState = (option) => {
    if (typeof option === "string") {
      option = option.toUpperCase();
    }
    switch (option) {
      case "QUIZMODE":
        this.setState({
          ...this.state,
          quizMode: {
            questions: [...this.props.quiz.questions],
            onQuestionNumber: 0,
            onQuestion: this.props.quiz.questions[0]["question"],
            onAnswerNumber: 0,
            onAnswer: "",
            input: "",
            time: 0,
            shouldRunQuiz: false,
            shouldRunCheck: false,
            answered: [],
            score: 0,
          },
        });
        break;

      default:
        this.setState({
          quizMode: {
            questions: [...this.props.quiz.questions],
            onQuestionNumber: 0,
            onQuestion: this.props.quiz.questions[0]["question"],
            onAnswerNumber: 0,
            onAnswer: "",
            yourAnswer: "",
            input: "",
            time: 0,
            shouldRunQuiz: false,
            shouldRunCheck: false,
            answered: [],
            score: 0,
          },
        });
        break;
    }
    return;
  };

  runQuiz = () => {
    let dummyState = { ...this.state };
    dummyState.quizMode.shouldRunQuiz = !this.state.shouldRunQuiz;
    this.setState({ dummyState });
  };

  runCheck = () => {
    let dummyState = { ...this.state };
    dummyState.quizMode.shouldRunCheck = !this.state.shouldRunCheck;
    this.setState({ dummyState });
  };

  handleInput = (e) => {
    let dummyState = { ...this.state };
    dummyState.quizMode.input = e.target.value;
    this.setState({ dummyState });
  };
}

// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// Redux

// Gets quiz by id by using the action type 'GET_QUIZ_BY_ID'
const mapDispatchToProps = (dispatch) => {
  return {
    submitScore: (payload) => {
      dispatch({ type: "SEND_SCORE", payload });
    },
  };
};

// The ownProps parameter takes the props from the previous state in the store
// which contains the route parameters
const mapStateToProps = (state, ownProps) => {
  // Uses the given parameters from the url called quiz_id
  let id = ownProps.match.params.quiz_id;

  // This returns only the quiz you want depending on of course
  // the id
  return {
    quiz: state.myQuizArray.find((quiz) => quiz.id === id),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);

// --------------------------------------------------------------------------------------

// Inherited props from redux
// @props.quiz: An individual quiz object from the redux global state.

// What lives here?
// Methods
// @run: sets the state of 'shouldQuizRun' (Boolean) to true

// @nextQuestion: sets 'state.answered' to have new answer,
//  'state.onQuestion' to the current question & 'state.onQuestionNumber'
//   to the index of the current iteration of 'state.questions'

// @checkNextQuestion: Similar to 'nextQuestion()' but sets
//  'state.onAnswer', 'state.onAnswerNumber',  in the process of iterating 'state.answered'

// In development
// quizModeMethods ->
// checkQuizAuto = () => {
//   let rights = 0;
//   let numOfQuestions = this.state.questions.length - 1;
//   let counter = 0;
//   const passPercentage = 59;
//   while (counter <= numOfQuestions) {
//     let temp = {...this.state.answered[counter]};
//     // let myAnswer = temp.myAnswer.split(" ").filter(word => synonyms(word));
//     let answers =  setTimeout(() => this.thesarus(temp.answer.split(" ")), 100);
//     console.log(answers)
//     // console.log(myAnswer , '\n', answer);
//     ++counter;
//   }

//   return Math.round((rights / numOfQuestions) * 100);
// }

// thesarus = (words) => words.map(async word => {
//   const synonyms = await fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${WEBSTER_KEY}`)
//   try {
//     const done = synonyms.json();
//     console.log(33, done.meta.syn)
//     return synonyms;
//   } catch {
//     return false;
//   };
// })
