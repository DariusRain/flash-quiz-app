
// Imported node modules
import React from 'react';

// Redux higher order component 
import {connect} from 'react-redux';

// Sub components
import HomeMain from './HomeMain';

function Home(props) {
    
        console.log(props)
        return (
            <div className="Home">
            <HomeMain store={props.store}/>
            </div>
        )
    
}

const mapStateToProps = (state) => {
    
    return {
        store: state
    }
}


export default connect(mapStateToProps)(Home)