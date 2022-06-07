/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import {Colors} from '../../components/globalStyles.js/styles';
import DetailTopBar from '../../components/bars/DetailTopBar';
import OrderList from '../../components/ListItems/OrderList';
import ORDERLIST from '../../context/ORDERLIST';

const OrdersScreen = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.secondary,
        flex: 1,
      }}>
      <DetailTopBar others filter onPressIcon={() => console.log("filter Pressed")} />
      <View
        style={{
          backgroundColor: Colors.secondary,
          flex: 1,
        }}>
        <FlatList
          data={ORDERLIST}
          renderItem={({item}) => (
            <OrderList
              delivered={item.delivered}
              orderer={item.orderer}
              date={item.date}
              status={item.status}
            />
          )}
        />
      </View>
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});
