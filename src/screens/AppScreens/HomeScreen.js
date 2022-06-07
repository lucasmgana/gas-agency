/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import UserAgentListCard from '../../components/ListItems/UserAgentListCard';
import {Colors} from '../../components/globalStyles.js/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomePageBar from '../../components/bars/HomePageBar';

import AGENTS from '../../context/AGENTS';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const ASDF = () => {
    return <View style={{height: 400}} />;
  };
  return (
    <View style={{backgroundColor: Colors.secondary}}>
      {/* <AppTopBar main map filter /> */}
      <HomePageBar onIconPress={() => navigation.navigate('Order')} />
      <Text
        style={{
          fontFamily: 'SFUIDisplay-Heavy',
          fontSize: 16,
          color: Colors.primary,
          paddingHorizontal: 18,
        }}>
        Find your GAS shop
      </Text>
      <Text
        style={{
          fontFamily: 'SFUIDisplay-Bold',
          fontSize: 12,
          color: Colors.danger,
          paddingHorizontal: 18,
          opacity: 0.6,
        }}>
        Have deliver your favourite GAS
      </Text>
      <ImageBackground
        // resizeMode='contain'
        source={require('./../../../assets/images/map.gif')}
        // source={require('./../../../assets/images/map.png')}
        style={{
          height: 150,
          width: '100%',
          // backgroundColor: Colors.success,
          marginVertical: 10,
          justifyContent: 'flex-end',
          overflow: 'hidden',
        }}>
        <View
          style={{
            alignSelf: 'flex-end',
            backgroundColor: Colors.primary,
            padding: 10,
            marginRight: 20,
            borderRadius: 10,
            marginBottom: 10,
            flexDirection: 'row',
          }}>
          <Icon name="map" size={20} color={Colors.secondary} />
          <Text
            style={{color: Colors.secondary, fontFamily:"SFUIDisplay-Heavy", marginLeft: 5}}>
            Nearby
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 18,
          paddingVertical: 10,
          alignItems: "center"
        }}>
        <Text
          style={{
            fontFamily: 'SFUIDisplay-Heavy',
            fontSize: 14,
            color: Colors.primary,
          }}>
          Nearest Gas Sellers
        </Text>
        <TouchableOpacity
          onPress={()=> navigation.navigate('AllAgents')}
          style={{
            borderColor: Colors.primary,
            borderWidth: 2,
            padding: 5,
            borderRadius: 5,
          }}>
          <Icon name="arrow-right-thin" size={24} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <FlatList
        ListFooterComponent={ASDF}
        data={AGENTS}
        renderItem={({item}) => (
          <UserAgentListCard
            onPress={() => navigation.navigate('Detail')}
            agent={item}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
