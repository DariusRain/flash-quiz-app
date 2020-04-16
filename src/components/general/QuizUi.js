import React from 'react'
// import Q from './Q'

export default function QuizUi(props) {
   const {quizName, questions} = props.quiz; 
    return (
        <div className="quizUi">
            <h3>{quizName}</h3>
            <p>Questions: {questions.length}</p>
        </div>
    )
}
