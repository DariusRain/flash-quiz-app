// Node Modules
import React, { Component } from "react";
import {connect} from 'react-redux';

// CSS
import "./App.css";

// Route Components
import Home from "./components/routes/home";
import MyQuizes from "./components/routes/my-quizes";
import QuizMode from './components/routes/quiz-mode'

// Footer and Header components
import Footer from "./components/general/Footer";
import Header from "./components/general/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// React & ReactDom would be imported at the top of this document for this method to work.

 class App extends Component {

  render() {
    const {store} = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          <Header title="React Quiz App" store={store}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/my-quizes" component={MyQuizes} />
            <Route path="/quiz-mode/:quiz_id" component={QuizMode} />
            {/* <Route path="/public-quizes/:public_quiz_id" component={Quiz} /> */}
          </Switch>
          <Footer footerText="Copyright &copy; 2020 Quizme" />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: state
  }
}




export default connect(mapStateToProps)(App)