import ReactGA from 'react-ga';
import { config } from 'config';
import { anchorate } from 'anchorate';
ReactGA.initialize(config.googleAnalyticsId);

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.pathname);
};

exports.onRouteChange = () => {
  anchorate();
};
