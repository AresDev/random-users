/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeView from './views/Home';
import DetailView from './views/Detail';

type Props = {};


const AppNavigator = createStackNavigator({
  Home: HomeView,
  Detail: DetailView
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer/>
    );
  }
}