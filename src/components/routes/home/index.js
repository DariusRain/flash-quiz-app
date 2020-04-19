
// Imported node modules
import React from 'react';

// Redux higher order component 
import {connect} from 'react-redux';

// Sub components
import Home from './Home';

function Index(props) {
    
        // console.log(props)
        return (
            <Home store={props.storeState}/>
        )
    
}

const mapStateToProps = (state) => {
    
    return {
        store: state
    }
}


export default connect(mapStateToProps)(Index)