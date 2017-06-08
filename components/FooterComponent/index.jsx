import React, { Component } from "react";
import FontIcon from 'material-ui/FontIcon';
import ReactIcon from './react.png';
import Logo from '../SiteNav/logo.png';
import { config } from 'config';
export default class FooterComponent extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row">
          <div className="footer-element col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <div className="brand">
              <img src={Logo} className="logo" alt="logo" />
              { config.siteTitle }
            </div>
            <span className="copyright">&copy; { config.siteTitle } 2017</span>
          </div>
          <div className="footer-element col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <span className="footer-header">Our Links</span>
            <ul>
              <li>
                <a href={ config.siteTwitterUrl } target="_blank">
                  <FontIcon
                  className="fa fa-twitter"
                /> Twitter
                </a>
              </li>
              <li>
                <a href={ config.siteGithubUrl } target="_blank">
                  <FontIcon
                    className="fa fa-github" /> GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-element col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <span className="footer-header">Built with</span>
            <ul>
              <li>
                <a href="https://facebook.github.io/react/" target="_blank">
                <img src={ReactIcon} style={{ width: "50%", maxWidth: "150px" }} />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-element col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <span className="footer-header">Also check out</span>
            <ul>
              <li>
                <h2>Some website</h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
