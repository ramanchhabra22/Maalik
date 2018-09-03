import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import Home from '../component/Home';
import ViewMore from '../component/ViewMore';
import YouTubePlayer from '../component/YouTubePlayer';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createStackNavigator({
  Home: { screen: Home },
  ViewMore: { screen: ViewMore },
  YouTubePlayer: { screen: YouTubePlayer },
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };