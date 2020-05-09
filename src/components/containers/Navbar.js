import React, { Component } from 'react';
import { withRouter} from "react-router-dom";

function NavBar(props) {

        return(
        <nav style={style}>   
            {props.children}
        </nav>
        )

}

const style = {
        display: "flex",
        flexDirection: "row"
}   
export default withRouter(NavBar);