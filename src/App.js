/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { Provider } from 'react-redux';
import ReduxNavigation from './navigators/ReduxNavigation';
import configureStore from './store/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ReduxNavigation />
  </Provider>
);

export default App;