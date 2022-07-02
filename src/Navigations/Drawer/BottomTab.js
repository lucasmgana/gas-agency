/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/AppScreens/HomeScreen';
import SettingsScreen from '../../screens/AppScreens/SettingsScreen';
import MainStack from '../MainStack';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'none',
        },
      }}>
      <Tab.Screen name="Main" component={MainStack} />
    </Tab.Navigator>
  );
}
