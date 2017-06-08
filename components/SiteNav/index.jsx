import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Sizes from 'react-sizes';
import './style.css';
import { config } from "config";
import MenuIcon from "material-ui/svg-icons/navigation/menu";
import Logo from "./logo.png";
class SiteNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navStyle: "blog-nav",
      visibility: null,
      icon: (<MenuIcon />)
    }
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  toggleVisible = (event) => {
    event.preventDefault();
    if(this.state.visibility === "hidden") {
      this.setState({
        visibility: "visible"
      });
    } else {
      this.setState({
        visibility: "hidden"
      });
    }
  }
  handleScroll = (event) => {
    event.preventDefault();
    var el = document.getElementById('elixir-navbar');
    var minPixel = el.offsetTop;
    var maxPixel = minPixel + el.scrollHeight;
    var value = document.body.scrollTop;

    // respect bounds of element
    var percent = (value - minPixel)/(maxPixel - minPixel);
    percent = Math.min(1,Math.max(percent, 0))*100;
    if (percent === 0) {
      this.setState({
        navStyle: "blog-nav"
      });
    } else {
      this.setState({
        navStyle: "blog-nav-small"
      });
    }
  }
  render() {
    const toggleComponent = (
      <button className="poppyBtn" onClick={this.toggleVisible}><div className="innerTextBtn">{this.state.icon}</div></button>
    )

    let use = this.props.visibility;
    if(this.state.visibility !== null) {
      use = this.state.visibility;
    }
    if(!this.props.isMobile) {
      use = this.props.visibility;
    }

    return (
      <nav id="elixir-navbar" className={this.state.navStyle} onScroll={this.handleScroll}>
        <Link to={prefixLink('/')}>
          <span className="brand"><img src={Logo} className="logo" alt="logo" />&nbsp;{config.siteTitle}</span></Link>
        {this.props.isMobile ? toggleComponent : ""}
        <ul className={use}>
          <li>
            <Link to={prefixLink('/')} className="poppyColorsPurple" activeClassName="current" onlyActiveOnIndex>Articles</Link>
          </li>
          <li>
            <Link to={prefixLink('/about/')} className="poppyColorsPurple" activeClassName="current">About</Link>
          </li>
          <li>
            <Link to={prefixLink('/resources/')} className="poppyColorsPurple" activeClassName="current">Resources</Link>
          </li>
          <li>
            <Link to={prefixLink('/contact/')} className="poppyColorsPurple" activeClassName="current">Contact</Link>
          </li>
          {config.siteRssUrl && (
            <li>
              <a href={config.siteRssUrl} target="_blank" className="poppyColorsOrange"><i className="fa fa-rss" /></a>
            </li>
          )}
          {/* <li>
            <a href="http://eepurl.com/cJwMIL">Sign up for mailing list</a>
          </li> */}
        </ul>
      </nav>
    );
  }
}
const mapSizesToProps = ({ width }) => {
  let visibility = "";
  if(width < 860) {
    visibility = "hidden";
  } else {
    visibility = "visible";
  }
return ({
  isMobile: width < 860,
  visibility: visibility
}) }

export default Sizes(mapSizesToProps)(SiteNav);
// export default SiteNav;
