import React from 'react'

function ClickItem({text, ifClicked}) {
    return (
        <button style={style} className="ClickItem" onClick={ifClicked}>
        {text}
         </button>
    )
}

const style = {
    cursor: "pointer",
    marginLeft: "3px"
}


export default ClickItem

