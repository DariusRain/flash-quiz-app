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
      <TextBox text={question} key={"0-Q"} type={"Q"} />
      <TextBox text={answer} key={"1-A"} type={"A"} />

    </div>
  );
}

const style = {  
    main: {
        display: "flex",
        flexDirection: "column",
        width:"100%"
    },
    settingsBar: {
      width: "100%"
    }
    
 }


export default PreviewQuestion;
