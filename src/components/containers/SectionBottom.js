import React from 'react';

function SectionBottom(props) {
    return (
      <div className="SectionBottom" style={style}>
        {props.children}
      </div>
    )
  };

  const style = {
      width: "100vw",
      display: "flex",
      fexDirection: "column",
      flexWrap: "wrap",
      overflow: "auto"
  }

export default SectionBottom;