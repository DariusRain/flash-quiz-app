import SectionTop from "../../sub/SectionTop";
import SectionMiddle from "../../sub/SectionMiddle";
import SectionBottom from '../../sub/SectionBottom'

import React, { Component } from 'react'
import NavBar from '../../sub/Navbar'

export default class QuizMain extends Component {
    render() {
       const {store} = this.props
        return (
            <div className="QuizMain">
                
                <SectionTop>
            
                    <NavBar className="Navbar" store={store}/>
                </SectionTop>

                <SectionMiddle>
                    <div className="PreviewQuizes">
                    <h1>Your Quizes:</h1>
                    {store.myQuizArray ? store.myQuizArray.map(obj => {
                        return (
                            
                            <p>{obj.quizName}</p>
                        )
                    }) : (<p>No quizes created</p>)}
                    </div>
                </SectionMiddle>

                <SectionBottom>
            
                    <h1>Your stats</h1>
            
                </SectionBottom>
            
            </div>
        )
    }
}



