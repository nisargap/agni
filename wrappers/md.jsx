import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import SitePost from '../components/SitePost';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SitePage from '../components/SitePage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();
class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;
    const layout = post.layout;
    let template;

    if (layout !== 'page') {
      template = (<MuiThemeProvider><SitePost {...this.props} /></MuiThemeProvider>);
    } else {
      template = (<MuiThemeProvider><SitePage {...this.props} /></MuiThemeProvider>);
    }
    return (
      <div>
        <Helmet title={`${post.title} - ${config.siteTitle}`} />
        {template}
      </div>
    );
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
};

export default MarkdownWrapper;
