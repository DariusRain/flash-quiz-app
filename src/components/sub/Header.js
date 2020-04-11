import React from "react";



class Header extends React.Component {

  render() {
    return (
      <header className="Header">
        <img
          width="80px"
          src="https://cdn.iconscout.com/icon/free/png-256/exam-time-1741011-1482330.png"
          className="logo"
        />
        <h1>&nbsp; {this.props.title}</h1>
      </header>
    );
  }
}

export default Header;
