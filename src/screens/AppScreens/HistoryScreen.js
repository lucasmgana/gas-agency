/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderTop from '../../components/elements/HeaderTop';

const HistoryScreen = (props) => {
  return (
    <View>
      <HeaderTop {...props} />
      <Text>HistoryScreen</Text>
    </View>
  );
}

export default HistoryScreen

const styles = StyleSheet.create({})