/* eslint-disable prettier/prettier */
import firestore from '@react-native-firebase/firestore';

export const SUCCESS = 'SUCCESS';
export const FAILED = 'FAILED';
export const LOADING = 'LOADING';

export const register = order => {
  return dispatch => {
    firestore()
      .collection('orders')
      .add(order)
      .then(() => {
        alert('order placed successfully');
      });
  };
};
