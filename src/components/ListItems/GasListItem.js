/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, } from 'react-native';
import React from 'react';
import NormalText from '../texts/NormalText';
import { Colors } from '../globalStyles.js/styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const GasListItem = ({ gas, agent }) => {
    const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Buying')}>
        <ImageBackground
          resizeMode="contain"
          source={gas.image}
          style={{
            height: 160,
            // width: 160,
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: Colors.primary,
            borderRadius: 20,
            paddingBottom: -10,
          }}>
         

          <View
            style={{
              backgroundColor: '#0009',
              padding: 8,
              borderRadius: 20,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  fontFamily: 'SFUIDisplay-Heavy',
                  color: Colors.secondary,
                  opacity: 0.8,
                }}>
                {gas.name}
              </Text>
           
            </View>
            {!agent && (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#eee9',
                  borderRadius: 10,
                  padding: 10,
                }}>
                <Icon name="cart" size={20} color={'#eee9'} />
              </View>
            )}
            {agent && (
              <View style={{flexDirection: 'row'}}>
                <Icon
                  style={{marginRight: 10}}
                  name="store-minus"
                  size={20}
                  color={Colors.primary}
                />
                <Icon
                  style={{marginRight: 5}}
                  name="pencil"
                  size={20}
                  color={Colors.primary}
                />
              </View>
            )}
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default GasListItem;

const styles = StyleSheet.create({});
