/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../globalStyles.js/styles';

const ProfilePicture = ({name, height, width}) => {
  return (
    <View
      style={{
        borderRadius: 100,
        height: height ? height : 40,
        width: width ? width : 40,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.success,
      }}>
      {!name && <Text>L.M</Text>}
      {name && <Text>{name}</Text>}
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({});
