import React, { Component } from 'react'
import {connect} from 'react-redux';
import QuizMode from './QuizMode'

class Index extends Component {


    render() {
    // const {quizName, questions} = props;
    // console.log(12232, this.props)

    return (
             <QuizMode quiz={this.props.quiz} />           
            )

    }

}


// Gets quiz by id by using the action type 'GET_QUIZ_BY_ID'
const getQuiz = (dispatch) => {
    return {
        getQuiz: (payload) => {dispatch({type:'GET_QUIZ_BY_ID', payload})}
    }
}

// The ownProps parameter takes the props from the previous state in the store
// which contains the route parameters
const mapStateToProps = (state, ownProps) => {

    // Uses the given parameters from the url called quiz_id
    let id = ownProps.match.params.quiz_id;
    
    // This returns only the quiz you want depending on of course 
    // the id
    return {
        quiz: state.myQuizArray.find(quiz => quiz.id === id)
    }
}

export default connect(mapStateToProps, getQuiz)(Index)