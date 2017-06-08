import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import ReactDisqusComments from 'react-disqus-comments';
import SiteNav from '../SiteNav';
import BitcoinDonation from '../BitcoinDonation/';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import ReadNext from '../ReadNext';
import sortBy from 'lodash/sortBy';
import access from 'safe-access';
import SubscribeComponent from '../SubscribeComponent/';
import FooterComponent from '../FooterComponent/';
import RelatedPosts from '../RelatedPosts/';
import AuthorInfo from '../AuthorInfo/';
import './style.css';
import '../../static/css/highlight.css';
import { info } from "../profileInfo";

class SitePost extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;
    const home = (
      <div>
        <Link className="gohome" to={prefixLink('/')}><i className="fa fa-arrow-left" /></Link>
      </div>
    );

    const commentslink = post.type !== "epod" ?
        (<a href="#comments" style={{ color: "#003BAE", marginRight: "0.5em" }}><i className="fa fa-comments" /> Comments</a>) : "";

    let githublink = "";

    if(post.source !== "none" && post.source !== "" && post.source !== undefined) {
      githublink = (
        <a href={post.source} style={{ color: "#003BAE" }} target="_blank"><i className="fa fa-github-alt" /> Source Code</a>)
    }

    let lowerAuthor = post.author.toLowerCase();
    console.log(lowerAuthor);
    let profileUrl = info[lowerAuthor];
    console.log(profileUrl + "HERE")

    return (
      <div>
        <SiteNav {...this.props} />
        {/*
        {home}
        {commentslink}
        {githublink} */}
        <div className="blog-single row">
          <div className="related-col col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <div className="text">
              <BitcoinDonation />
              <h4>Related Posts</h4>
              <hr />
              <RelatedPosts sourcePath={post.path} {...this.props} />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
          <div className="text">
            <h1>{post.title}</h1>{commentslink} {githublink}
            <AuthorInfo author={post.author} profileUrl={profileUrl} datePublished={post.date} url={config.rootUrl + post.path} />
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
            <div className="date-published">
              <em>Published {moment(post.date).format('D MMM YYYY')} by {post.author}</em>
            </div>
          </div>
          <div className="footer">
            <ReadNext post={post} {...this.props} />
            <p>
              {config.siteDescr}
              <a href={config.siteTwitterUrl}>
                <br /> <strong>{config.siteAuthor}</strong> on Twitter
              </a>
              </p>
              { post.type === "epod" ? (<EpodSubmission id={post.path} />) :
              (<ReactDisqusComments
                       id="comments"
                       shortname={ config.disqusShortname }
                       identifier={`${post.path}`}
                       title={`${post.title}`}
                       url={config.rootUrl + `${post.path}`}
                       />)
                }
          </div>
          </div>
        </div>
        <SubscribeComponent />
        <FooterComponent />
      </div>
    );
  }
}

SitePost.propTypes = {
  route: React.PropTypes.object.isRequired,
};

export default SitePost;
