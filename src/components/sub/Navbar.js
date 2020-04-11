import React, { Component } from 'react';
import { NavLink, Link, withRouter} from "react-router-dom";

class HeaderNavBar extends Component {

    render() {
        const {myQuizArray} = this.props.store
        return(
        <nav className="NavBar">
   
          <Link to="/">Home</Link>
           <Link to="/my-quizes">My Quizes  <span className="QuizNumber">{myQuizArray.length}</span></Link> 
            
        </nav>
        )
    }
}
export default withRouter(HeaderNavBar);