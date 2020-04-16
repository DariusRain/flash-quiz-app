import React from "react";
import { NavLink } from "react-router-dom";

import NavBar from "./Navbar";

class Header extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <header className="Header">
        <NavBar className="NavBar">
          <NavLink to="/">
            {" "}
            <img
              width="80px"
              src="https://cdn3.iconfinder.com/data/icons/quiz/96/quiz_11-512.png"
              alt="logo"
              className="logo"
            />
          </NavLink>
          <NavLink to="/my-quizes" > <br /> My Quizes: <span className="QuizNumber">{store.myQuizArray.length ? store.myQuizArray.length : 0 }</span></NavLink>
        </NavBar>
      </header>
    );
  }
}

export default Header;
