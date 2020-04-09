import React, { Component } from 'react'
import './App.css';
import Header from './components/main/Header'
import MainContent from './components/main/MainContent'
import Footer from './components/main/Footer'
// import {Provider} from 'react-redux';

// React & ReactDom would be imported at the top of this document for this method to work.



export default class App extends Component {
  
  render() {
    return (
      // <Provider store={store}>
        <div className="App">
          <Header title="React Quiz App" />
          <MainContent />
          <Footer footerText="Copyright &copy; 2020 Quizme"/>
        </div>
      // </Provider>
    )
  }
}
