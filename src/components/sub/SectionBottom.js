import React from 'react';

class SectionBottom extends React.Component {
  render () {
    return (
      <div className="SectionBottom">
          <h3>
              {this.props.footerText}.
          </h3>
      </div>
    )
  };
}

export default SectionBottom;