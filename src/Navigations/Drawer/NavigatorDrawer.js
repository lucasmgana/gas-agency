/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from '../../screens/AuthScreens/LoginScreen';
import MainStack from '../MainStack';

const Drawer = createDrawerNavigator();

export default function NavigatorDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={LoginScreen} />
    </Drawer.Navigator>
  );
}
