import React, { Component, Fragment } from "react";
import QuizUi from "../../misc/QuizUi";


// Logical Component for the QuizUi
class QuizMode extends Component {
  constructor(props) {
    super(props);
    // Hard copy the default state.
    this.state = {   
      questions: {...this.props.quiz.questions},
      onCurrentQuestionNumber: 0,
      onCurrentQuestion: "",
      input: "",
      time: 0,
      shouldRun: false,
      answered: [], };
  }

  render() {
    // Did this in order to pass the methods above to props
    const methods = {
      handleInput: this.handleInput,
      run: this.run,
      nextQuestion: this.nextQuestion,
      setTimer: this.setTimer,
    };
    return (
      <Fragment>
        {/* <Timer /> */}
        <QuizUi {...this.state} {...this.props.quiz} {...methods} />;
      </Fragment>
    )
    
  }

  // When component mounts hard copy the questions passed as props
  // from the redux store in this directories index.js file.
  // Sets time for quiz (Not functional yet)
  setTimer = (e) => {
    return this.setState({
      ...this.state,
      time: {
        minutes: Math.abs(e.target.value),
        seconds: 0,
      },
    })
  }


  //  Submits input to answer array and displays the next question,
  // by changing the value of onCurrentQuestionNumber from state.
  nextQuestion = (e) => {
    e.preventDefault();
    const { onCurrentQuestionNumber, questions, input } = this.state;
    if (questions[onCurrentQuestionNumber]["question"]) {
      this.setState({
        ...this.state,
        onCurrentQuestionNumber: onCurrentQuestionNumber + 1,
        onCurrentQuestion: questions[onCurrentQuestionNumber]["question"],
        answered: [
          ...this.state.answered,
          { ...questions[onCurrentQuestionNumber], myAnswer: input },
        ],
      });
    } else {
      alert("Finished!");
      this.setState({
        questions: {...this.props.quiz.questions},
        onCurrentQuestionNumber: 0,
        onCurrentQuestion: "",
        input: "",
        time: 0,
        shouldRun: false,
        answered: [],
      });
    }
  };

  upClickCount = () => {
    this.setState({
      ...this.state,
      clickCount: this.state.clickCount + 1
    })
  }

  // This function fires when start is pressed and begins the quiz.
  run = (e) => {
    const { shouldRun, clickCount } = this.state;
    
    if (shouldRun === false) {
      this.setState({
        ...this.state,
        shouldRun: true,
        onCurrentQuestion: this.state.questions[0]["question"]
      });
      e.target.innerText = "Cancel";
    } else {
      this.setState({
        questions: {...this.props.quiz.questions},
        onCurrentQuestionNumber: 0,
        onCurrentQuestion: "",
        input: "",
        time: 0,
        shouldRun: false,
        answered: [],
      });
      e.target.innerText = "Start";
    }
  } 

  // This is just the common handle input method
  handleInput = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };

}
export default QuizMode;
