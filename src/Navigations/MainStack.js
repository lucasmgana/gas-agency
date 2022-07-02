/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './stacks/HomeStack';
import AboutScreen from '../screens/AppScreens/AboutScreen';
import SettingsScreen from '../screens/AppScreens/SettingsScreen';
import { Image, Dimensions } from 'react-native';
import AgentPostPageScreen from '../screens/AppScreens/AgentPostPageScreen';

const screenWidth = Dimensions.get('window').width;
const Tab = createBottomTabNavigator();

export default function MainStack() {
  return (
      <Tab.Navigator
        screenOptions={{
          animation: 'slide_from_left',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 50,
            display: 'none',
            
          },
        }}>
        <Tab.Screen
          
          options={{
                       
          }}
          name="Home"
          component={HomeStack}
        />
        <Tab.Screen
          options={{
           
          }}
          name="About"
          component={AboutScreen}
        />
        <Tab.Screen
          options={{
           
          }}
          name="Settings"
          component={SettingsScreen}
        />
      </Tab.Navigator>
  );
}
