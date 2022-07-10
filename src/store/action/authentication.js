/* eslint-disable prettier/prettier */
import firestore from '@react-native-firebase/firestore';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_LOADING = 'LOGIN_LOADING';

export const login = user => {
  const {email, password} = user;
  return dispatch => {
    firestore()
      .collection('users')
      .where('email', '==', email)
      .where('password', '==', password)
      .get()
      .then(querySnapshot => {
        if (querySnapshot.size >= 1) {
          querySnapshot.forEach(documentSnapshot => {
            dispatch({
              type: LOGIN_SUCCESS,
              data: {
                user: {
                  userId: documentSnapshot.id,
                  email: documentSnapshot.data().email,
                  phone: documentSnapshot.data().phone,
                  usertype: documentSnapshot.data().userType,
                },
                isAuthenticated: true,
                error: '',
                loading: false,
              },
            });
          });
        }
      });
  };
};

export const register = user => {
  return dispatch => {
    firestore()
      .collection('users')
      .add(user)
      .then(() => {
        console.log('user registered');
      });
  };
};
