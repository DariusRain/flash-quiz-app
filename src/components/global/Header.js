import React from "react";

function Header(props) {
    return (
      <header style={style}>
      {props.children}
      </header>
    );
}


const style = {
 backgroundColor: "#005080",
  width:"100%",
}
export default Header;
