import React from "react";
function Footer(props) {
    return (
      <footer className="Footer" style={style}>
        {props.children}
      </footer>
    );
  }



const style = {
  width: "",
  backgroundColor: "#444444",
  top: "-1",
  color: "white",
  textAlign: "center",
  marginTop: "300px"
}

export default Footer;
