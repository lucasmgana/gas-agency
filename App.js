import 'react-native-gesture-handler';
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import DetailScreen from './src/screens/AppScreens/DetailScreen';
import HomeStack from './src/Navigations/stacks/HomeStack';
import AppStack from './src/Navigations/AppStack';
import RnFB from './src/screens/AppScreens/RnFB';
import {NavigationContainer} from '@react-navigation/native';

import StoreProvider from './src/store/Provider';

const App = () => {
  // return <RnFB />;

  return (
    <StoreProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
