/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NormalText from '../texts/NormalText';
import {Colors} from '../globalStyles.js/styles';
import LineSeparator from '../elements/LineSeparator';

const OrderList = ({date, orderer, delivered, status}) => {
  return (
    <View
      style={{
        width: '100%',
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          alignItems: 'center',
          paddingVertical: 5,
        }}>
        <View>
          <NormalText
            style={{
              color: Colors.primary,
              fontSize: 18,
              textTransform: 'capitalize',
              opacity: 0.9,
            }}>
            {delivered}
          </NormalText>
          <View style={{flexDirection: 'row'}}>
            <NormalText
              style={{color: Colors.warning, fontSize: 12, opacity: 0.5}}>
              From {'  '}
            </NormalText>
            <NormalText
              style={{
                color: Colors.warning,
                fontSize: 12,
                textTransform: 'capitalize',
                opacity: 0.9,
              }}>
              {orderer}
            </NormalText>
          </View>
        </View>
        <View>
          <NormalText
            style={{
              color: 'green',
              textTransform: 'capitalize',
              fontSize: 12,
            }}>
            {status}
          </NormalText>
          <NormalText style={{color: 'green', fontSize: 10, opacity: 0.5}}>
            {date}
          </NormalText>
        </View>
      </View>
      <LineSeparator />
    </View>
  );
};

export default OrderList;

const styles = StyleSheet.create({});
