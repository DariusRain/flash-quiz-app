import React from 'react';
import QAForm from '../misc/QAForm';

class SectionMiddle extends React.Component {
    render() {
        return (
          <div className="SectionMiddle">
           {this.props.children}
          </div>
        );
      }
}

export default SectionMiddle;