import React, { Component } from 'react';

class HeaderNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizArr: []
        }
    }
    getCurrentQuizes = (quizArr) => {
        if(quizArr) {
        quizArr.map(quizObj => {
          return (
            <option>{quizObj.quizName || `Untitled`}</option>
            )
        })
      }
    }
    render() {
        return(
        <nav>
            <select>
                {this.getCurrentQuizes(this.state.quizArr)}
            </select>
        </nav>
        )
    }
}
export default HeaderNavBar;