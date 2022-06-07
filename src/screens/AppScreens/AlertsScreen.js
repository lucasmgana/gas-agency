/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderTop from '../../components/elements/HeaderTop';

const AlertsScreen = props => {
  return (
    <View>
      <HeaderTop {...props} />

      <Text>AlertsScreen</Text>
    </View>
  );
};

export default AlertsScreen;

const styles = StyleSheet.create({});
