import React from 'react'

function SectionMiddle (props) {
        return (
          <div className="SectionMiddle" style={style}>
           {props.children}
          </div>
        )
}

const style = {
  display:" flex",
  flexDirection:" column",
  width:  " 100vw",
  height:" 100vh",
  flexWrap:" wrap",
  overFlow:" auto"
}

export default SectionMiddle