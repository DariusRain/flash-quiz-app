import React, { Component } from 'react';
import { withRouter} from "react-router-dom";

function NavBar(props) {

        return(
        <nav className="NavBar" style={style}>   
            {props.children}
        </nav>
        )

}

const style = {
    display: "flex",
    flexDirection: "row",
    margin: "10px",
    height: "10%",
    color: "white"
}
export default withRouter(NavBar);