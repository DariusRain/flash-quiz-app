import React from 'react';
import ButtonList from './ButtonList'
function SettingsBar({indexOfQuestion, removeQuestion, id}) {
    return (
    <div className="SettingBar" >
    <span className="QuestionNumber">Question #{indexOfQuestion + 1}</span>
    <ButtonList removeQuestion={removeQuestion} id={id}/>
  </div>
    )

}

const style = {
    
}



export default SettingsBar;