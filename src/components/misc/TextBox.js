import React from 'react'

function TextBox({text, type}) {
    return (
        <div className="QABox">
        <p>
          <span className={type}>{type}</span>
          {text}
        </p>
      </div>
    )
}

export default TextBox
