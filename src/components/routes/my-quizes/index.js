import React from 'react'
import MyQuizes from '../../general/MyQuizes';
import {connect} from 'react-redux';
// import {BrowserRouter} from 'react-router-dom'


function Index(props) {
    
        return (
                <MyQuizes store={props.store}/>
        )
    
}

const mapStateToProps = (state) => {
    
    return {
        store: state
    }
}

export default connect(mapStateToProps)(Index)