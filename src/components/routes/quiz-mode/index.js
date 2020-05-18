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
        indexCount: 0,
        onQuestion: this.props.quiz.questions[0]["question"],
        onAnswer: "",
        myAnswer: "",
        input: "",
        time: 0,
        shouldRunQuiz: false,
        shouldRunCheck: false,
        answered: [],
        percentage: "0%",
      },
    };
  }

  render() {
    const quizModeMethods = {
      handleInput: this.handleInput,
      runQuiz: this.runQuiz,
      runCheck: this.runCheck,
      next: this.next,
      setTimer: this.setTimer,
      submitScore: this.submitScore,
    };

    return <QuizMode {...quizModeMethods} {...this.state.quizMode} />;
  }

  // Sets time for quiz (Not functional yet)

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

  next = (e) => {
    e.preventDefault();
    let clonedState = { ...this.state };
    const {
      indexCount,
      questions,
      input,
      answered,
      shouldRunQuiz,
      shouldRunCheck,
    } = this.state.quizMode;
    const nextIndexCount = indexCount + 1;

    if (shouldRunQuiz) {
      if (nextIndexCount < questions.length) {
        // console.log(questions[indexCount].question, "->", questions[nextIndexCount].question)
        clonedState.quizMode.answered = [
          ...this.state.quizMode.answered,
          { ...questions[indexCount], myAnswer: input, correct: false },
        ];
        clonedState.quizMode.indexCount = nextIndexCount;
        clonedState.quizMode.onQuestion = questions[nextIndexCount].question;
        this.setState({ ...clonedState });
      } else {
        clonedState.quizMode.answered = [
          ...this.state.quizMode.answered,
          {
            ...questions[questions.length - 1],
            myAnswer: input,
            correct: false,
          },
        ];
        clonedState.quizMode.onAnswer = clonedState.quizMode.answered[0].answer;
        clonedState.quizMode.myAnswer =
          clonedState.quizMode.answered[0].myAnswer;
        this.setState({ ...clonedState });
        this.changeState("Runquiz-off");
        this.changeState("Runcheck-on");
        this.changeState("Indexcount-reset");
      }
    } else if (shouldRunCheck) {
      if (nextIndexCount < answered.length) {
        clonedState.quizMode.answered[indexCount].correct =
          input === "correct" ? true : false;
        clonedState.quizMode.onAnswer =
          clonedState.quizMode.answered[nextIndexCount].answer;
        clonedState.quizMode.onQuestion =
          clonedState.quizMode.answered[nextIndexCount].question;
        clonedState.quizMode.indexCount = nextIndexCount;
        this.setState({ ...clonedState });
      } else {
        clonedState.quizMode.answered[indexCount].correct =
          input === "correct" ? true : false;
        this.changeState("Runcheck-off");
        let numOfCorrections = clonedState.quizMode.answered.filter(answer => answer.correct === true)
        const percentageCalc = Math.round((numOfCorrections.length / answered.length) * 100);
        clonedState.quizMode.percentage = `${percentageCalc}%`;
        console.log(percentageCalc);
        this.setState({ ...clonedState });
      }
    }
  };

  changeState = (option) => {
    let clonedState = { ...this.state };

    if (typeof option === "string") {
      option = option.toUpperCase();

      switch (option) {
        case "QUIZMODE-RESET":
          this.setState({
            ...this.state,
            quizMode: {
              questions: [...this.props.quiz.questions],
              indexCount: 0,
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

        case "INDEXCOUNT-RESET":
          clonedState.quizMode.indexCount = 0;
          this.setState({ ...clonedState });
          break;

        case "RUNQUIZ-OFF":
          clonedState.quizMode.shouldRunQuiz = false;
          this.setState({ ...clonedState });
          break;

        case "RUNCHECK-ON":
          clonedState.quizMode.shouldRunCheck = true;
          this.setState({ ...clonedState });
          break;
        case "RUNCHECK-OFF":
          clonedState.quizMode.shouldRunCheck = false;
          this.setState({ ...clonedState });
          break;
        default:
          this.setState({
            quizMode: {
              questions: [...this.props.quiz.questions],
              indexCount: 0,
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
    } else {
      console.log("Argument for changeState() must be a string!");
    }

    return;
  };

  runQuiz = () => {
    let clonedState = { ...this.state };
    clonedState.quizMode.shouldRunQuiz = !this.state.shouldRunQuiz;
    this.setState({ ...clonedState });
    return;
  };

  runCheck = () => {
    let clonedState = { ...this.state };
    clonedState.quizMode.shouldRunCheck = !this.state.shouldRunCheck;
    this.setState({ ...clonedState });
  };

  handleInput = (e) => {
    let clonedState = { ...this.state };
    clonedState.quizMode.input = e.target.value;
    this.setState({ ...clonedState });
  };
}

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

// Inherited props from redux
// @props.quiz: An individual quiz object from the redux global state.

// What lives here?
// Methods
// @run: sets the state of 'shouldQuizRun' (Boolean) to true

// @nextQuestion: sets 'state.answered' to have new answer,
//  'state.onQuestion' to the current question & 'state.indexCount'
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

// Possibly adding or removing the below
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
