import React from 'react';

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