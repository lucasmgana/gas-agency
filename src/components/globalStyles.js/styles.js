/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle 
eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';

export const Colors = {
  primary: '#22A0F9',
  secondary: '#F4F9FA',
  tertiary: '#B0E3FC',
  warning: '#E1A445',
  danger: '#403D40',
  success: '#5EC0F7',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    minHeight: 500,
  },

  button: {
    backgroundColor: '#ddd',
    padding: 20,
    width: '70%',
    shadowColor: 'red',
    borderRadius: 8,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
});

export const text = StyleSheet.create({
  color: Colors.primary,
});
