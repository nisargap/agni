import React from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import moment from 'moment';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import access from 'safe-access';
import { config } from 'config';
import SiteNav from '../components/SiteNav';
import SubscribeComponent from '../components/SubscribeComponent/';
import FooterComponent from '../components/FooterComponent/';
import FrontSlider from '../components/FrontSlider/';
import Placeholder from './placeholder.png';
import { info } from '../components/profileInfo';
class SiteIndex extends React.Component {
  render() {
    const charLimit = 160;
    const pageLinks = [];
    let rowLinks = [];
    const epods = [];
    const AuthorComponent = (datePublished, author) => (
      <div className="row author-post">
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 profile-img">
          <img className="circle-small" src={ info[author.toLowerCase()] } />
        </div>
        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          <Link className="author-name" to={prefixLink("/contact/")}>{ author }</Link><br />
          <time className="date" dateTime={moment(datePublished).format('MMMM D, YYYY')}>
            {moment(datePublished).format('MMMM D, YYYY')}
          </time>
        </div>
      </div>
    )
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, page => access(page, 'data.date')).reverse();
    let count = 0;
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post' && access(page, 'data.type') === undefined) {
        const title = access(page, 'data.title') || page.path;
        let description = access(page, 'data.description');
        if(description.length > charLimit) {
          description = description.slice(0, charLimit) + "...";
        }
        const datePublished = access(page, 'data.date');
        const category = access(page, 'data.category');
        const thumbnail = access(page, 'data.thumbnail');
        const format = (
          <div className="blog-post col-md-4 col-sm-6 col-xs-12 post-card" key={title}>
            <Link style={{ borderBottom: 'none' }} to={prefixLink(page.path)}>
            {thumbnail  ? <img src={page.path + thumbnail} className="placeholder" /> : <img src={Placeholder} className="placeholder" />}
            </Link>
            <h2><Link style={{ borderBottom: 'none' }} to={prefixLink(page.path)}>{title}</Link></h2>
            <span className="categories">{category}</span>
            <p className="small-text" style={{ textOverflow: "ellipsis", WebkitLineClamp: 3 }} dangerouslySetInnerHTML={{ __html: description }} />
            <a className="comment" href={`${page.path  }#comments`}><i className="fa fa-comments"></i> Comments</a>
            {AuthorComponent(datePublished, access(page, 'data.author'))}
            {/*
              <span style={{ padding: '5px' }} />
              <span className="blog-category">{category}</span>
            <Link className="readmore" to={prefixLink(page.path)}><i className="fa fa-book" /> Read</Link>&nbsp;
            <a className="readmore" href={`${page.path  }#comments`}><i className="fa fa-comments"></i> Comment</a>
            */}
          </div>
        );

        pageLinks.push(format);

      }
    });
    return (
      <div>
        <Helmet title={config.siteTitle} />
        {/* <SiteSidebar {...this.props} /> */}
        <SiteNav {...this.props} />
        <div className="topBanner"><FrontSlider /></div>
        <div className="content">
          <div className="main">
            <div className="main-inner">
              <h2 className="titletop">Articles</h2>
              <div className="row">
              {pageLinks}
              </div>
            </div>
          </div>
        </div>
        <SubscribeComponent />
        <FooterComponent />
      </div>
    );
  }
}

SiteIndex.propTypes = {
  route: React.PropTypes.object,
};

export default SiteIndex;
