/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ImageBackground, TouchableOpacity
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../globalStyles.js/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomePageBar = ({onIconPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingVertical: 20,
      }}>
      <View
        style={{
          height: 60,
          width: 60,
          // backgroundColor: Colors.primary,
          borderRadius: 100,
          overflow: 'hidden',
        }}>
        <Image
          style={{height: 60, width: 60}}
          resizeMode="contain"
          source={require('./../../assets/images/avatar.png')}
        />
      </View>
      <TouchableOpacity
        onPress={onIconPress}
        activeOpacity={0.8}
        style={{
          backgroundColor: Colors.primary,
          padding: 10,
          borderRadius: 15,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name="shopping" size={20} color={Colors.secondary} />
        <Text
          style={{
            fontSize: 16,
            color: Colors.secondary,
            textTransform: 'capitalize',
            marginLeft: 3,
          }}>
          orders
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePageBar;

const styles = StyleSheet.create({});
