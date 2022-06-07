/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../globalStyles.js/styles';

const NormalText = ({children, ...otherProps}) => {
  return (
    <Text
      style={[
        {
          fontSize: 24,
          color: Colors.secondary,
          fontFamily: 'SFUIDisplay-Medium',
          letterSpacing: 0.3,
        },
        {...otherProps.style},
      ]}>
      {children}
    </Text>
  );
};

export default NormalText;

const styles = StyleSheet.create({});
