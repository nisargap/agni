import React, { Component } from "react";
import moment from 'moment';
import sortBy from 'lodash/sortBy';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import access from 'safe-access';
/*
Description:
  This component takes in a string of keywords as a property, splits it
  based on comma or space, and does a simple indexOf search on the lowercase
  version of a post, at the end a list of posts that contain the keywords
  are rendered
*/
class RelatedPosts extends Component {
  render() {

    const charLimit = 160;
    //
    const sortedPages = sortBy(this.props.route.pages, page => access(page, 'data.date')).reverse();
    let pageLinks = [];
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post' && access(page, 'data.type') === undefined && access(page, 'data.path') !== this.props.sourcePath) {
        const title = access(page, 'data.title') || page.path;
        let description = access(page, 'data.description');
        if(description.length > charLimit) {
          description = description.slice(0, charLimit) + "...";
        }
        const datePublished = access(page, 'data.date');
        const category = access(page, 'data.category');
        const thumbnail = access(page, 'data.thumbnail');
        const format = (
          <div className="blog-post col-md-12 col-sm-12 col-xs-12" key={title}>
            <Link style={{ borderBottom: 'none' }} to={prefixLink(page.path)}>
            {thumbnail  ? <img src={page.path + thumbnail} className="placeholder" /> : <img src={Placeholder} className="placeholder" />}
            </Link>
            <span><Link style={{ borderBottom: 'none', color: "#777" }} to={prefixLink(page.path)}>{title}</Link></span>

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
        <br />
        {pageLinks}
      </div>
    )
  }
}
RelatedPosts.propTypes = {
  route: React.PropTypes.object,
};

export default RelatedPosts;
