/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import { Colors } from '../globalStyles.js/styles';
import NormalText from '../texts/NormalText';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AppTopBar = ({back, main, filter, map}) => {
  return (
    <View style={styles.AppBarContainerStyle}>
      <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'} />
      <View style={styles.leftStyle}>
        {back && <Text>back</Text>}
        {main && (
          <NormalText style={{fontFamily: 'SFUIDisplay-Heavy'}}>
            GAO app
          </NormalText>
        )}
      </View>
      <View style={styles.rightStyle}>
        {filter && (
          <TouchableOpacity style={styles.rightButtonStyle}>
            <Icon name="search" color={Colors.primary} size={18} />
          </TouchableOpacity>
        )}

        {map && (
          <TouchableOpacity style={styles.rightButtonStyle}>
            <Icon name="map-marker" color={Colors.primary} size={18} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AppTopBar;

const styles = StyleSheet.create({
  AppBarContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    height: 60,
    paddingHorizontal: 20,
  },
  leftStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
    justifyContent: 'space-between',
  },
  rightButtonStyle: {
    backgroundColor: Colors.secondary,
    padding: 2,
    borderRadius: 100,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
