/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../globalStyles.js/styles';

const LineSeparator = ({opacity, start, length, thick, color}) => {
  return <View style={{
    width: length ? length : '90%',
    height: thick ? thick : 1,
    backgroundColor: color ? color : Colors.tertiary,
    opacity: opacity ? opacity : 0.3,
    alignSelf: start ? start : 'center',
  }} />
}

export default LineSeparator;

const styles = StyleSheet.create({});
