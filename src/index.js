import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer"


let store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>

    <App />
    </Provider>,
  document.getElementById('root')
);


// Branch: 1-about-react
  // Deleted uneccessary default code from the npx installation.