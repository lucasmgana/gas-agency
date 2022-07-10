/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../globalStyles.js/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconA from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const DetailTopBar = ({
  main,
  others,
  filter,
  bookmark,
  onPressIcon,
  map,
  mapIcon,
  add,
}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingTop: 20,
      }}>
      {main && (
        <>
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 100,
              overflow: 'hidden',
            }}>
            <Image
              style={{height: 60, width: 60}}
              resizeMode="contain"
              source={require('./../../assets/images/avatar.png')}
            />
          </View>
          {add && (
            <View
              style={{
                flex: 1,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('PostPage')}
                style={{
                  backgroundColor: Colors.primary,
                  padding: 10,
                  marginRight: 10,
                  borderRadius: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'flex-end',
                }}>
                <Icon name="store-plus" size={20} color={Colors.secondary} />
                <Text
                  style={{
                    fontSize: 16,
                    color: Colors.secondary,
                    textTransform: 'capitalize',
                    marginLeft: 3,
                  }}>
                  add
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <View
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
          </View>
        </>
      )}

      {others && (
        <>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
            style={{
              height: 40,
              width: 40,
              borderRadius: 10,
              overflow: 'hidden',
              borderWidth: 2,
              borderColor: Colors.success,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="arrow-left-thin" size={24} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressIcon}
            activeOpacity={0.7}
            style={{
              backgroundColor: (filter || map) && Colors.primary,
              padding: 10,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {filter && (
              <Icon name="filter" size={20} color={Colors.secondary} />
            )}
            {map &&
              (mapIcon ? (
                <Icon name="map" size={20} color={Colors.secondary} />
              ) : (
                // <Icon name="midi" size={20} color={Colors.secondary} />
                <IconA name="bars" size={20} color={Colors.secondary} />
              ))}
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default DetailTopBar;

const styles = StyleSheet.create({});
