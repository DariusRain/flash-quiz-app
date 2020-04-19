import React from 'react'

function ButtonList({removeQuestion, id}) {
    return (
        <div className="SettingButtonsBox">
        <span className="SettingBarClickItem" onClick={removeQuestion}>
          {" "}
          <span role="img" aria-label="Delete" id={id}>
            ❌
          </span>
        </span>
        <span className="SettingBarClickItem">
          {" "}
          <span role="img" aria-label="Edit">
            📝
          </span>
        </span>
      </div>
    )
}

export default ButtonList
