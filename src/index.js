import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';

// Redux
// const reducer = (state = {}, action) => {
//   switch(action.type) {
//     case "":
//       break;
//     case "":
//       break;
//     default:
//       break;
//   }
// }

// let store = createStore(reducer)


ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);


// Branch: 1-about-react
  // Deleted uneccessary default code from the npx installation.