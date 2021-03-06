import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import SiteNav from '../SiteNav';
import SiteLinks from '../SiteLinks';
import './style.css';
import profilePic from '../../pages/photo.jpg';
import logoPic from '../../pages/blog-logo.png';

class SiteSidebar extends React.Component {
  render() {
    const { location } = this.props;
    const isHome = location.pathname === prefixLink('/');

    /* eslint-disable jsx-a11y/img-redundant-alt*/
    const header = (
      <header>
        <Link style={{ textDecoration: 'none', borderBottom: 'none', outline: 'none' }} to={prefixLink('/')}>
          <img
            src={profilePic}
            width={200}
            alt="Profile picture of the author"
          />
        </Link>
        <img src={logoPic} width={300} />
        {/*
        { isHome ? (
          <h1><Link style={{ textDecoration: 'none', borderBottom: 'none', color: 'inherit' }} to={prefixLink('/')}> {config.siteAuthor}</Link></h1>
        ) :
          <h2><Link style={{ textDecoration: 'none', borderBottom: 'none', color: 'inherit' }} to={prefixLink('/')}> {config.siteAuthor}</Link></h2> }
        <p>
          {config.siteDescr}
        </p> */}
      </header>
    );
    /* eslint-enable jsx-a11y/img-redundant-alt*/

    return (
      <div className="sidebar">
        <div className="sidebar-inner">
          <div className="blog-details">
            <header>
              {header}
            </header>
          </div>
          <div className="blog-options">
            <SiteNav {...this.props} />
            <footer>
              <SiteLinks {...this.props} />
              <p className="copyright">
                &copy; 2017, All rights reserved. 
              </p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

SiteSidebar.propTypes = {
  location: React.PropTypes.object,
};

export default SiteSidebar;
