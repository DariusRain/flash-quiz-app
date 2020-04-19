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
    <div className="PreviewQuestion" style={style}>
      <SettingsBar removeQuestion={removeQuestion} indexOfQuestion={indexOfQuestion} id={id}/>
      <TextBox text={question} type={"Q"} />
      <TextBox text={answer} type={"A"} />
    </div>
  );
}

const style = {  
  backgroundColor:"#444444",
  width: "88%",
  margin: "0 auto",
  padding: "12px",
  border: "2px solid white", 
 }


export default PreviewQuestion;
