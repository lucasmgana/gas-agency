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

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          animationTypeForReplace: 'push',
        }}>
        <Stack.Screen name="Default" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen
          options={{animation: 'fade_from_bottom'}}
          name="Order"
          component={OrdersScreen}
        />
        <Stack.Screen
          options={{animation: 'fade'}}
          name="AllAgents"
          component={AllAgentsListScreen}
        />
        <Stack.Screen
          options={{
            animation: 'slide_from_bottom',
          }}
          name="Buying"
          component={BuyingScreen}
        />
      </Stack.Navigator>
  );
}
