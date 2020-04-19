import React from 'react'

function MyQuizCount({myQuizArray}) {
    return (
        <span className="QuizNumber" style={style}>
        My Quizes {myQuizArray.length ? myQuizArray.length : 0}
        </span>
    )
}

const style = {
    width: "10%",
    fontWeight: "800"
}

export default MyQuizCount
