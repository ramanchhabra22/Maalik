/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, YellowBox, BackHandler, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppNavigator, middleware } from './component/AppNavigator'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(middleware))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }
  }

  onBackPress = () => {
    console.log("On Back Pressed")
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }

    dispatch(NavigationActions.back());
    return true;
  }
}
