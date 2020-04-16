import React, { Component } from 'react';
import { withRouter} from "react-router-dom";

class NavBar extends Component {
    render() {
        return(
        <nav className="NavBar">   
            {this.props.children}
        </nav>
        )
    }
}
export default withRouter(NavBar);