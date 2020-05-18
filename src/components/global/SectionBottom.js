import React from "react";

function SectionBottom(props) {
  return (
    <div className="SectionBottom" style={style}>
      {props.children}
    </div>
  );
}

const style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
};

export default SectionBottom;
