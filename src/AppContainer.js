/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default class AppContainer extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <WebView source={{uri: 'https://inalipa.co.tz/#/'}} />
      </SafeAreaView>
    );
  }
}