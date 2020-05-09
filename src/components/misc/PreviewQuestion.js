import React from "react";
import TextBox from './TextBox'
import SettingsBar from './SettingsBar'
function PreviewQuestion({
  id,
  question,
  answer,
  removeQuestion,
  indexOfQuestion,
}) {
  return (
    <div className="PreviewQuestion" style={style.main}>
      <SettingsBar removeQuestion={removeQuestion} indexOfQuestion={indexOfQuestion} id={id}/>
      <TextBox text={question} type={"Q"} />
      <TextBox text={answer} type={"A"} />

    </div>
  );
}

const style = {  
    main: {
        display: "flex",
        flexDirection: "column",
    },
    settingsBar: {
      width: "100%"
    }
    
 }


export default PreviewQuestion;
