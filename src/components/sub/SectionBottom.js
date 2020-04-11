import React from 'react';

class SectionBottom extends React.Component {
  render () {
    return (
      <div className="SectionBottom">
        {this.props.children}
      </div>
    )
  };
}

export default SectionBottom;