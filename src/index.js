//  Impo
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

// Local storage redux state handler methods
import {loadState, saveState} from './user/localStorage'
const persistedState = loadState();
let store = createStore(rootReducer, persistedState);

// Save the state to local storage 
store.subscribe(() => {
  saveState({
    myQuizArray: store.getState().myQuizArray
  })
})

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);


// Branch: 1-about-react
  // Deleted uneccessary default code from the npx installation.