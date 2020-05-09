import React from "react";

function Header(props) {
    return (
      <header style={style}>
      {props.children}
      </header>
    );
}


const style = {
 backgroundColor: "#dddddd",
  width:"100%",
}
export default Header;
