// Imported node modules
import React, { Component } from "react";

// Redux higher order component
import { connect } from "react-redux";

// Sub components
import QuizForm from "./QuizForm";

import { v4 } from "uuid";
const id = v4;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "",
      questionsArr: [],
    };
  }

  render() {
    // console.log(props)
    const methods = {
      handleInput: this.handleInput,
      nextQuestion: this.nextQuestion,
      removeQuestion: this.removeQuestion,
      submitQuiz: this.submitQuiz,
    };
    return <QuizForm {...methods}  {...this.state} />
  }

  handleInput = (e) => {
    // console.log(e.target.name)
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.value.length > 0) {
      e.target.style = "border-style: solid; border-color-bottom: #ffee00;";
    } else {
      e.target.style = "border-style: solid; border-color-bottom: #ff0000"; ;
    }
  };

  nextQuestion = (e) => {
    e.preventDefault();
    if (this.state.question && this.state.answer) {
      this.state.questionsArr.push({
        question: this.state.question,
        answer: this.state.answer,
        id: id(),
      });
      this.setState({
        question: "",
        answer: "",
      });
    }
  };

  removeQuestion = (e) => {
    console.log(this.state.questionsArr);
    this.setState({
      questionsArr: this.state.questionsArr.filter(
        (questionObject) => questionObject.id !== e.target.id
      ),
    });
  };

  submitQuiz = (e) => {
    e.preventDefault();
    let nameOfQuiz = prompt("Name of quiz?");
    if (nameOfQuiz) {
      this.props.addQuiz({
        quizName: nameOfQuiz,
        questions: this.state.questionsArr,
        stats: [],
        id: id(),
      });

      this.setState({
        questionsArr: [],
        question: "",
        answer: "",
      });
    
    } else if (nameOfQuiz != null) {
      alert("Quiz name is required!");
    }
  };
}

const addNewQuiz = (dispatch) => {
  return {
    addQuiz: (payload) => {
      dispatch({ type: "ADD_QUIZ", payload });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, addNewQuiz)(Index);
