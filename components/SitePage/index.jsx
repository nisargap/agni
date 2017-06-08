import React from 'react';
import SiteNav from '../SiteNav';
import SubscribeComponent from '../SubscribeComponent';
import FooterComponent from '../FooterComponent';
import sortBy from 'lodash/sortBy';
import access from 'safe-access';
import moment from 'moment';
import './style.css';
class SitePage extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;
    return (
      <div>
        <SiteNav {...this.props} />
        <div className="content">
          <div className="main">
            <div className="main-inner">
              <div className="blog-page">
                <div className="text">
                  <h1>{post.title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
              </div>
            </div>
          </div>
          <SubscribeComponent />
          <FooterComponent />
        </div>
      </div>
    );
  }
}

SitePage.propTypes = {
  route: React.PropTypes.object.isRequired,
};

export default SitePage;
