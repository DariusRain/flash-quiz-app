import React from "react";

function Header(props) {
    return (
      <header style={style}>
      {props.children}
      </header>
    );
}


const style = {
  color: "wheat",
  backgroundColor: "#444444",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100vw",
}
export default Header;
