import React, { Component } from 'react'
import './App.css';
import Header from './components/main/Header'
import MainContent from './components/main/MainContent'
import Footer from './components/main/Footer'
// Redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const defaultState = {
  myQuizArray: [],
  globalQuizArray: []
}

// Redux
const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case "ADD_QUIZ":
      break;
    case "":
      break;
    default:
      break;
  }
}

let store = createStore(reducer)

// React & ReactDom would be imported at the top of this document for this method to work.



export default class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header title="React Quiz App" />
          <MainContent />
          <Footer footerText="Copyright &copy; 2020 Quizme"/>
        </div>
    </Provider>
    )
  }
}
