/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppStack from './src/Navigations/AppStack';

const App = () => {
  return (
    <View style={styles.container}>
      <AppStack />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
