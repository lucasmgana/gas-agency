/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StatusBar} from 'react-native';

import ReportFaultScreen from '../../screens/AppScreens/ReportFaultScreen';
import HomeScreen from '../../screens/AppScreens/HomeScreen';
import DetailScreen from '../../screens/AppScreens/DetailScreen';
import BuyingScreen from '../../screens/AppScreens/BuyingScreen';
import {Colors} from '../../components/globalStyles.js/styles';
import OrdersScreen from '../../screens/AppScreens/OrdersScreen';
import AllAgentsListScreen from '../../screens/AppScreens/AllAgentsListScreen';
import AgentPostPageScreen from '../../screens/AppScreens/AgentPostPageScreen';
import AddGas from '../../screens/AppScreens/AddGas';

const Stack = createNativeStackNavigator();

export default function AgentStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationTypeForReplace: 'push',
      }}>
      <Stack.Screen name="Default" component={AgentPostPageScreen} />
      <Stack.Screen name="PostPage" component={AddGas} />
    </Stack.Navigator>
  );
}
