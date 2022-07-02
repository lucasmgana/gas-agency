/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStack from '../MainStack';

const Drawer = createDrawerNavigator();

export default function NavigatorDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen name="Feed" component={MainStack} />
    </Drawer.Navigator>
  );
}
