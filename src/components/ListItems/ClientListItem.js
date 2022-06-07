/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ProfilePicture from '../elements/ProfilePicture';
import NormalText from '../texts/NormalText';
import {Colors} from '../globalStyles.js/styles';

const ClientListItem = ({name, clientName}) => {
  return (
    <TouchableOpacity style={{paddingRight: 10}}>
      <ProfilePicture name={'JM'} height={70} width={70} />
      <NormalText style={{color: Colors.warning, fontSize: 14, width: '90%'}}>
        {clientName}
      </NormalText>
    </TouchableOpacity>
  );
};

export default ClientListItem;

const styles = StyleSheet.create({});
