import React from "react";
function Footer(props) {
    return (
      <footer className="Footer" style={style}>
        {props.children}
      </footer>
    );
  }



const style = {
  width: "100%",
  backgroundColor: "#444444",
  top: "-1",
  color: "white",
  textAlign: "center",
  padding: "40px"
}

export default Footer;
