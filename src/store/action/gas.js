/* eslint-disable prettier/prettier */
import firestore from '@react-native-firebase/firestore';

export const SUCCESS = 'SUCCESS';
export const FAILED = 'FAILED';
export const LOADING = 'LOADING';

export const addgas = gas => {
  return dispatch => {
    firestore()
      .collection('gases')
      .add(gas)
      .then(() => {
        alert('gas added successfully');
      });
  };
};
