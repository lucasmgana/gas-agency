/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/AppScreens/HomeScreen';
import SettingsScreen from '../../screens/AppScreens/SettingsScreen';
import MainStack from '../MainStack';
import {useDispatch, useSelector} from 'react-redux';
import AgentStack from '../stacks/AgentStack';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  const authState = useSelector(state => state.authState);
  const dispatch = useDispatch();

  const stacks = authState.user.usertype === 'client' ? MainStack : AgentStack;

  useEffect(() => {
    console.log('found user', authState.user.usertype);
  }, [dispatch, authState]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'none',
        },
      }}>
      <Tab.Screen name="Main" component={stacks} />
    </Tab.Navigator>
  );
}
