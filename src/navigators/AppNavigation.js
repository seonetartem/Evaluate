import React from 'react';
import { Animated, Easing, Platform, StatusBar } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import LoginScreen from '../screens/Login';
import WelcomScreen from '../screens/Welcom';
// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0,
  },
});


const WelcomStack = StackNavigator({
  WelcomScreen: { screen: WelcomScreen },
}, {
  initialRouteName: 'WelcomScreen',
});

const LoginStack = StackNavigator({
  LoginScreen: { screen: LoginScreen },
}, {
  initialRouteName: 'LoginScreen',
});

const PrimaryStack = StackNavigator({
  WelcomScreen: { screen: WelcomScreen },
  LoginScreen: { screen: LoginScreen },
}, {
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  transitionConfig: noTransitionConfig,
});

export default PrimaryStack;
