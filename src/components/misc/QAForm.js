import React, { Component } from "react";
import PreviewQuestion from "./PreviewQuestion";
import {connect} from "react-redux";
import shortid from "shortid";
const Id = shortid;

 class QAForm extends Component {         
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "",
      questionsArr: []
    };
    // this.handleQuestionInput = this.handleQuestionInput.bind(this);
    // this.handleAnswerInput = this.handleAnswerInput.bind(this);
    // this.nextQuestion = this.nextQuestion.bind(this);
  }

  handleInput = e => {
    // console.log(e.target.name)
     this.setState({ [e.target.name]: e.target.value });
    if (e.target.value) {
      e.target.style = "border: 2px groove blue; background-color:white;";
    } else {
      e.target.style = "border: 2px groove red;";
    }
  };

  // handleAnswerInput = e => {
  //   this.setState({ answer: e.target.value });
  //   if (this.state.answer) {
  //     e.target.style = "border: 1px solid blue; background-color:white;";
  //   } else {
  //     e.target.style = "border: 1px solid red; ";
  //   }
  // };

  nextQuestion = e => {
    e.preventDefault();
    if (this.state.question && this.state.answer) {
      this.state.questionsArr.push({
        question: this.state.question,
        answer: this.state.answer,
        questionId: Id.generate()
      });
      this.setState({
        question: "",
        answer: ""
      });
    }
  };

  removeQuestion = e => {
    console.log(this.state.questionsArr);
    this.setState({
      questionsArr: this.state.questionsArr.filter(
        questionObject => questionObject.questionId != e.target.id
      )
    });
  };

  submitQuiz = e => {
    e.preventDefault();
    if(this.state.questionsArr) {
    console.log('Feature Not added yet')
    }
  }

  render() {
    return (
      <div className="QAForm">
       <h1>Create a quiz</h1>
        <h3>Question #{this.state.questionsArr.length + 1}</h3>
        <form>
          <label>Question:</label>
          <br />
          <textarea
            name="question"
            value={this.state.question}
            onChange={this.handleInput}
            required
          />
          <br />
          <label>Answer:</label>
          <br />
          <textarea
            name="answer"
            value={this.state.answer}
            onChange={this.handleInput}
            required
          />
          <br />
          <button className="ButtonStyleForm" onClick={this.nextQuestion}>
            Next
          </button>
          <button className="ButtonStyleForm" onClick={this.submitQuiz}>Done</button>
        </form>
        <div className="QuestionBoxMain">
          {this.state.questionsArr.map((qObj, indexNum) => {
            const { question, answer, questionId } = qObj;
            return (
              <PreviewQuestion
                question={question}
                answer={answer}
                questionId={questionId}
                key={questionId}
                indexOfQuestion={indexNum}
                removeQuestion={this.removeQuestion}
              />
            );
          })}
        </div>
      </div>
    );
  }
}



const addNewQuiz = (dispatch) => {
  return {
    addQuiz: (payload) => {dispatch({type:'ADD_QUIZ', payload})}
  }
}






export default connect(addNewQuiz)(QAForm);