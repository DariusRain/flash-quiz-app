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
        shouldShowResults: false,
        shouldShowStartMenu: true,
        answered: [],
        answeredWrong: [],
        answeredRight: [],
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
      cancel: this.cancel,
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

  // This function executes everytime the 'Next' button clicks.
  // and based on the values contained in state this function will
  // update the state next coming state.
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
        // See transition
        // console.log(questions[indexCount].question, "->", questions[nextIndexCount].question)
        clonedState.quizMode.answered = [
          ...this.state.quizMode.answered,
          { ...questions[indexCount], myAnswer: input, correct: false },
        ];

        clonedState.quizMode.indexCount = nextIndexCount;

        clonedState.quizMode.onQuestion = questions[nextIndexCount].question;

        this.setState({ ...clonedState });
        this.changeState("input-reset");
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

        this.setState({ ...this.state, ...clonedState });

        this.changeState("Runquiz-off");

        this.changeState("Runcheck-on");

        this.changeState("Indexcount-reset");
      }
    } else if (shouldRunCheck) {
      if (nextIndexCount < answered.length) {
        // Checks if the input has a value of correct so true & if not then incorrect so false
        clonedState.quizMode.answered[indexCount].correct =
          input === "correct" ? true : false;

        // Navigate to the next question
        clonedState.quizMode.onQuestion =
          clonedState.quizMode.answered[nextIndexCount].question;

        // Navigate to the next answer
        clonedState.quizMode.onAnswer =
          clonedState.quizMode.answered[nextIndexCount].answer;

        // Navigate to the next answer the user made of the next question.
        clonedState.quizMode.myAnswer =
          clonedState.quizMode.answered[nextIndexCount].myAnswer;

        // Up the nextIndexCount wich is always the value of indexCount + 1
        clonedState.quizMode.indexCount = nextIndexCount;

        // Set state to the contents of the cloned state
        this.setState({ ...this.state, ...clonedState });
      } else {
        // This is my solution for the last question, there is probably a better solution but
        // ill haft to stick with this.
        clonedState.quizMode.answered[indexCount].correct =
          input === "correct" ? true : false;

        // Turn runcheck off and calculate
        this.changeState("Runcheck-off");

        // This filters the array for all correct answers.
        clonedState.quizMode.answered.filter(
          (answer) => {
            if (answer.correct) {
              clonedState.quizMode.answeredRight.push(answer);
            } else {
              clonedState.quizMode.answeredWrong.push(answer);
            }
          }
        );

        // This uses the length of the two arrays and calculates a percentage.
        const percentageCalc = Math.round(
          (clonedState.quizMode.answeredRight.length / answered.length) *
            100
        );

        // Set the cloned state percentage to the calculated value.
        clonedState.quizMode.percentage = `${percentageCalc}%`;

        // console.log(percentageCalc);

        this.setState({ ...this.state, ...clonedState });
        this.changeState("showStartMenu-off")
        this.changeState("showResults-on");
      }
    }
  };

  // This function contains a switch statement that has different options that change state in a number of ways.
  changeState = (option) => {
    // This is a copy of the current state
    let clonedState = { ...this.state };

    if (typeof option === "string") {
      option = option.toUpperCase();

      switch (option) {
        case "QUIZMODE-RESET":
          this.setState({
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
              shouldShowResults:false,
              shouldShowStartMenu:true,
              answered: [],
              answeredWrong: [],
              answeredRight: [],
              percentage: "0%",
            }
          });
          break;

        case "INDEXCOUNT-RESET":
          clonedState.quizMode.indexCount = 0;
          this.setState({ ...this.state, ...clonedState });
          break;

        case "RUNQUIZ-OFF":
          clonedState.quizMode.shouldRunQuiz = false;
          this.setState({ ...this.state, ...clonedState });
          break;

        case "RUNCHECK-ON":
          clonedState.quizMode.shouldRunCheck = true;
          this.setState({ ...this.state, ...clonedState });
          break;

        case "RUNCHECK-OFF":
          clonedState.quizMode.shouldRunCheck = false;
          this.setState({ ...this.state, ...clonedState });
          break;

        case "SHOWSTARTMENU-ON":
          clonedState.quizMode.shouldShowStartMenu = true;
          this.setState({ ...this.state, ...clonedState });
          break;

        case "SHOWSTARTMENU-OFF":
          clonedState.quizMode.shouldShowStartMenu = false;
          this.setState({ ...this.state, ...clonedState });
          break;

        case "SHOWRESULTS-ON":
          clonedState.quizMode.shouldShowResults = true;
          this.setState({ ...this.state, ...clonedState });
          break;

        case "INPUT-RESET":
          clonedState.quizMode.input = "";
          this.setState({ ...this.state, ...clonedState });
          break;

        default:
          this.setState({
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
              shouldShowResults: false,
              shouldShowStartMenu: true,
              answered: [],
              answeredWrong: [],
              answeredRight: [],
              percentage: "0%",
            }
          });
          break;
      }
    } else {
      console.log("Argument for changeState() must be a string!");
    }

    return;
  };

  cancel = (e) => {
    e.preventDefault();
    this.changeState("def");
  };
  runQuiz = () => {
    let clonedState = { ...this.state };
    clonedState.quizMode.shouldRunQuiz = !this.state.shouldRunQuiz;
    this.setState({ ...clonedState });
    return;
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
