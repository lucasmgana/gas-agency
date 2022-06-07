/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../globalStyles.js/styles';
import ProfilePicture from '../elements/ProfilePicture';
import LineSeparator from '../elements/LineSeparator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NormalText from '../texts/NormalText';

const UserAgentListCard = ({agent, onPress}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.agentCardStyle}>
        <ProfilePicture />
        <View style={styles.nameAndLocationDetailColumnStyles}>
          <NormalText
            style={{
              textTransform: 'capitalize',
              color: Colors.primary,
              fontSize: 14,
            }}>
            {agent.name}
          </NormalText>
          <NormalText
            style={{
              fontFamily: 'SFUIDisplay-Medium',
              textTransform: 'capitalize',
              color: Colors.success,
              opacity: 0.8,
              fontSize: 12,
              marginLeft: -2,
            }}>
            <Icon name="map-marker" size={15} color={Colors.primary} />
            {agent.location}
          </NormalText>
        </View>
        <View style={styles.mapButtonStyle}>
          <Icon name="star-outline" size={20} color={Colors.primary} />

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                height: 8,
                width: 8,
                marginRight: 3,
                backgroundColor: 'green',
                borderRadius: 100,
              }}
            />
            <NormalText style={{color: 'green', fontSize: 8}}>
              online
            </NormalText>
          </View>
        </View>
      </TouchableOpacity>
      <LineSeparator />
    </>
  );
};

export default UserAgentListCard;

const styles = StyleSheet.create({
  agentCardStyle: {
    padding: 10,
    marginVertical: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  nameAndLocationDetailColumnStyles: {
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    width: '75%',
  },
  mapButtonStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
