// Node Modules
import React, { Component } from "react";

// npm i react-redux
// Destruct from the package 'connect' a higer oder component
// that connects the global state and passes methods to dispatch actions,
// to the global state as well.
// Map State To Props represents a function that returns either
// all the properties in the stored global state or some or one.
//  connect(MAP-STATE-TO-PROPS-FUNC, DISPATCH-TO-PROPS-FUNC)(COMPONENT-YOU-WANT-TO-CONNECT)
import { connect } from "react-redux";

// CSS
import "./App.css";


// React Router
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";


// Route Components
import Home from "./components/routes/home";
import MyQuizes from "./components/routes/my-quizes";
import QuizMode from "./components/routes/quiz-mode";

// Container components
import Footer from "./components/containers/Footer";
import Header from "./components/containers/Header";
import NavBar from './components/containers/Navbar';


// Misc Components 
import Logo from "./components/misc/Logo"
import MyQuizCount from "./components/misc/MyQuizCount"
// This is the MAIN COMPONENT of your application though you could have
// multiple but normally 'App' is the only one. 
// Also the only one that gets imported into the index.js file.
function App({ store }) {
  return (
    <BrowserRouter>
      <div style={style}>
        <Header>
          <NavBar>
            <NavLink to="/">
              <Logo />
            </NavLink>
            <NavLink to="/my-quizes">
              <MyQuizCount myQuizArray={store.myQuizArray}/>
            </NavLink>
          </NavBar>
        </Header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/my-quizes" component={MyQuizes} />
          <Route path="/quiz-mode/:quiz_id" component={QuizMode} />
          {/* <Route path="/public-quizes/:public_quiz_id" component={Quiz} /> */}
        </Switch>

        <Footer>
          <h2>Copyright &copy; 2020 Quizme</h2>
        </Footer>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    store: state,
  };
};

const style = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

export default connect(mapStateToProps)(App);
