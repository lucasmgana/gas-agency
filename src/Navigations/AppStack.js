/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React, {useState} from 'react';
import AuthStack from './stacks/AuthStack';
import MainStack from './MainStack';

const AppStack = () => {
  const [loggedIn, setLoggedIn] = useState(0);
  return (
    <View style={{flex: 1}}>{loggedIn ? <MainStack /> : <AuthStack />}</View>
  );
};

export default AppStack;
