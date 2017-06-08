import React, { Component } from "react";
import { config } from 'config';
export default class SubscribeComponent extends Component {
  render() {
    return (
      <div className="subscribe">
        <div className="header">
          <i className="fa fa-envelope" aria-hidden="true"></i> Subscribe to our newsletter <br />
            <a href={ config.mailChimpSubscribeUrl } style={{ margin: "0 auto", textAlign: "center"}} className="subscribeBtn" target="_blank">Subscribe</a>
        </div>

      </div>
    )
  }
}
