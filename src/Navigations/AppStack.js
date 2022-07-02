/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React, {useEffect} from 'react';
import AuthStack from './stacks/AuthStack';
import MainStack from './MainStack';
import {useDispatch, useSelector} from 'react-redux';
import NavigatorDrawer from './Drawer/NavigatorDrawer';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './Drawer/BottomTab';

const AppStack = () => {
  const authState = useSelector(state => state.authState);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('authState', authState);
  }, [dispatch]);

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        {authState.isAuthenticated ? <BottomTab /> : <AuthStack />}
      </NavigationContainer>
    </View>
  );
};

export default AppStack;
