import React, { Component } from "react";
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import moment from 'moment';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

export default class AuthorInfo extends Component {
  render() {
    const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
} = ShareButtons;
const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
} = ShareCounts;
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const RedditIcon = generateShareIcon('reddit');
    const AuthorComponent = (datePublished, profileUrl, author) => (
      <div className="row author-post">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 profile-img">
        <img className="circle-small" src={profileUrl} />
        </div>
        <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 author-name">
          <Link className="author-name" to={prefixLink("/contact/")}>{author}</Link>
          <div style={{ float: "right"}}>
            <time className="date" dateTime={moment(datePublished).format('MMMM D, YYYY')}>
                {moment(datePublished).format('MMMM D, YYYY')}
              </time><br />
          </div>
        </div>

      </div>
    )
    return (
      <div>
      {AuthorComponent(this.props.datePublished, this.props.profileUrl, this.props.author)}
      <div className="row" style={{ width: 500, marginLeft: "0.1em", marginTop: "0.2em" }}>
      <FacebookShareButton url={this.props.url}>
        <FacebookIcon size={32}  />

        <FacebookShareCount url={this.props.url}>
          {shareCount => (
            <span style={{ fontSize: "1.2em", display: "inline", fontFamily: "Quicksand, sans-serif", color: "#c0c0c0"}}>{shareCount}</span>
          )}
        </FacebookShareCount>
      </FacebookShareButton>
      <GooglePlusShareButton url={this.props.url}>
        <GooglePlusIcon size={32}  />

        <GooglePlusShareCount url={this.props.url}>
          {shareCount => (
            <span style={{ fontSize: "1.2em", display: "inline", fontFamily: "Quicksand, sans-serif", color: "#c0c0c0"}}>{shareCount}</span>
          )}
        </GooglePlusShareCount>
      </GooglePlusShareButton>
      <LinkedinShareButton url={this.props.url}>
        <LinkedinIcon size={32}  />

        <LinkedinShareCount url={this.props.url}>
          {shareCount => (
            <span style={{ fontSize: "1.2em", display: "inline", fontFamily: "Quicksand, sans-serif", color: "#c0c0c0"}}>{shareCount}</span>
          )}
        </LinkedinShareCount>
      </LinkedinShareButton>
      <TwitterShareButton url={this.props.url}>
        <TwitterIcon size={32}  />
      </TwitterShareButton>
      </div>
      </div>
    )
  }
}
