import React from "react";

function SectionTop (props) {
    return (
      <div className="SectionTop" style={style}>
        {props.children}
     </div>
    );
}

const style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly"
}

export default SectionTop;
