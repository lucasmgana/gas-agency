/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderTop from '../../components/elements/HeaderTop';

const FeedbackScreen = props => {
  return (
    <View>
      <HeaderTop {...props} />

      <Text>FeedbackScreen</Text>
    </View>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({});
