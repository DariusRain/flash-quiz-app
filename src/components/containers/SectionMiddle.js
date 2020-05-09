import React from 'react'

function SectionMiddle (props) {
        return (
          <div className="SectionMiddle" style={style}>
           {props.children}
          </div>
        )
}

const style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly"
}

export default SectionMiddle