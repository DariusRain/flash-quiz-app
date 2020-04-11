// Node Modules
import React, { Component } from "react";

// CSS
import "./App.css";

// Route Components
import Home from "./components/routes/home/Home";
import Quiz from "./components/routes/quiz/Quiz";

// Footer and Header components
import Footer from "./components/sub/Footer";
import Header from "./components/sub/Header";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// React & ReactDom would be imported at the top of this document for this method to work.

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header title="React Quiz App" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/my-quizes" component={Quiz} />
          </Switch>
          <Footer footerText="Copyright &copy; 2020 Quizme" />
        </div>
      </BrowserRouter>
    );
  }
}
