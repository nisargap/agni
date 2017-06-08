import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../static/css/reset.css';
import '../static/css/typography.css';
import '../static/css/base.css';

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <MuiThemeProvider>
      <div className="wrapper">
        {children}
      </div>
      </MuiThemeProvider>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
};

export default Template;
