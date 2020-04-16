import React, { Component } from 'react'
import {connect} from 'react-redux';
import QuizUi from '../../general/QuizUi'
class Index extends Component {

    render() {
    // const {quizName, questions} = props;
    // console.log(12232, this.props)

    return (
             <QuizUi quiz={this.props.quiz} />           
            )

    }

}

const getQuiz = (dispatch) => {
    return {
        getQuiz: (payload) => {dispatch({type:'GET_QUIZ_BY_ID', payload})}
    }
}

// The ownProps parameter takes the props from the previous state in the store
// which contains the route parameters
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.quiz_id;
    console.log(1, state)
    return {
        quiz: state.myQuizArray.find(quiz => quiz.id === id)
    }
}

export default connect(mapStateToProps, getQuiz)(Index)