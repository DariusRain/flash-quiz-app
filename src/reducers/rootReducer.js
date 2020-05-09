

// Fake Data / Default Data / Mock Data 
import mockData from '../mock/mock-test-global-redux-state'


// 💡 Root reducer for handling dispatched actions.
//  root reducers take two parameters the state and action
const rootReducer = (state = mockData, action) => {
  // This payload is a object that looks like {type:"NAME-OF-TYPE", {payload: {...}}}
  const {payload} = action;
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

// 💡 This reducer will be exported for use in the connect method from 'react-redux'
export default rootReducer;
