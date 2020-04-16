import mockData from '../mock/mock-test-global-redux-state'





const rootReducer = (state = mockData, action) => {
  const {payload } = action
  switch (action.type) {
    case "ADD_QUIZ":
      return {
        ...state,
        myQuizArray: [...state.myQuizArray, payload]
        
      }
    case "GET_QUIZ_BY_ID": 
      const findQuiz = state.filter(quiz => quiz.id === payload.id);
      return findQuiz;

    case "DELETE_QUIZ":
      break;
    default:
      return state;
  }
};

export default rootReducer;
