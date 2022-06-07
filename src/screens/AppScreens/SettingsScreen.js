/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderTop from '../../components/elements/HeaderTop';

const SettingsScreen = (props) => {
  return (
    <View>
      <HeaderTop {...props} />

      <Text>SettingsScreen</Text>
    </View>
  );
}

export default SettingsScreen

