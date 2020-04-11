import React, { Component } from 'react'
import QuizMain from './QuizMain';
import {connect} from 'react-redux';

function Quiz (props) {
    
        return (
            <div className="Quiz">
                <QuizMain store={props.store}/>
            </div>
        )
    
}

const mapStateToProps = (state) => {
    
    return {
        store: state
    }
}

export default connect(mapStateToProps)(Quiz)