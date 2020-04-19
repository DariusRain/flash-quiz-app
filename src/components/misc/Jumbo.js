import React from "react"
function Jumbo(props) {
    return (
      <div className="Jumbo" style={style}>
        {props.children}
      </div>
    )
  }

  const style = {
    backgroundColor: "#444444",
    textAlign: "center",
    height: "100vh",
    width: "100vw",
    paddingTop: "133px",
    fontSize: "xx-large",
    color: "wheat !important",
  }

export default Jumbo;
