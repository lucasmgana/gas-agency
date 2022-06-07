/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import firestore from '@react-native-firebase/firestore';

const ref = firestore().collection('gaseagent');

// TODO
// AUTHENTICATION
// register
export const register = async values => {
  const {username, phone, password, confirm_password} = values;
  let exists = true;
  ref.onSnapshot(querySnapshot => {
    const list = [];
    querySnapshot.forEach(doc => {
      list.push(doc.data());
    });

    list.map(item => {
      console.log('first');
      if ((item.username === username) || (item.phone === phone)) {
        exists = false;
      } else {
        exists = true;
      }
    });
  });

  if (exists) {
    const add_success = (await (await ref.add(values)).get()).data();
    console.log('created');
    return add_success;
  } else {
    console.log('not exists');
  }
};

// login
// authorization

// ADD GAS
// ADD ORDER

const usersCollection = firestore().collection('Users');
