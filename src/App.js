/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import LandingPage from './landing/LandingPage';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <LandingPage />
      </SafeAreaView>
    </>
  );
};

export default App;
