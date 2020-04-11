const defaultState = {
  myQuizArray: [
    {
      quizName: "Quiz Name",
      questions: [
        {
          qustion: "What is react?",
          answer: "A open source library launched by Facebook used for developing UIs",
          stats: [],
        },
     
      ],
    },
  ],
  
  globalQuizArray: [],
};
const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_QUIZ":
      state = [...state.myQuizArray, action.payload]
      return state;
    case "DELETE_QUIZ":
      break;
    default:
      return state;
  }
};

export default rootReducer;
