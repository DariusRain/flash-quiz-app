import React from "react";

function SectionTop (props) {
    return (
      <div className="SectionTop" style={style}>
        {props.children}
     </div>
    );
}

const style = {
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  backgroundColor: "white",
}

export default SectionTop;
