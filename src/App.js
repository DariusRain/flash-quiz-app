// Node Modules
import React from "react";

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
import CreateQuiz from "./components/routes/create-quiz";
// Container components
import Header from "./components/containers/Header";
import NavBar from "./components/containers/Navbar";

// Misc Components
import Logo from "./components/misc/Logo";
import MyQuizCount from "./components/misc/MyQuizCount";
// This is the MAIN COMPONENT of your application though you could have
// multiple but normally 'App' is the only one.
// Also the only one that gets imported into the index.js file.
function App({ store }) {
  
  return (
    <BrowserRouter>
      <div style={style.main}>
        <Header style={style.header}>
        <NavLink  style={style.logoLink} to="/">
              <Logo className="logo" />
            </NavLink>
          <NavBar>
            <div style={style.navbar}>
              <NavLink className="hover" style={style.navLink} to="/my-quizes">
                <span className="hover" >My Quizes &nbsp;</span>
                <MyQuizCount myQuizArray={store.myQuizArray} />
              </NavLink>
              <NavLink style={style.navLink} to="/create-quiz">
                <span className="hover" >New Quiz</span>
              </NavLink>
            </div>
          </NavBar>
        </Header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/my-quizes" component={MyQuizes} />
          <Route path="/create-quiz" component={CreateQuiz} />
          <Route path="/quiz-mode/:quiz_id" component={QuizMode} />
          {/* <Route path="/public-quizes/:public_quiz_id" component={Quiz} /> */}
        </Switch>
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
  main: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  navLink: {
    textDecoration: "none",
    color: "#005080",
    margin: "0.3rem",
    width: "25%",
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    width: "100%"
  },
  header: {
    position: "absolute",
  },
  logoLink: {
    marginRight: "1rem",
  },
};

export default connect(mapStateToProps)(App);
