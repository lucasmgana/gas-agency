/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  TouchableOpacity,
  TextInput,
  View,
  ImageBackground,
  Modal,
} from 'react-native';
import React, {useState} from 'react';

import {Formik} from 'formik';
import * as Yup from 'yup';

import {Colors, styles} from '../../components/globalStyles.js/styles';
import NormalText from '../../components/texts/NormalText';
import Icon from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';
import {register} from '../../store/action/authentication';

// our functionalities

const {card, button, container, text} = styles;

const SignUpScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState({});

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  const users = [
    {
      name: 'Client',
      value: 'client',
    },
    {
      name: 'Supplier',
      value: 'supplier',
    },
  ];

  const ModalContents = ({selections, fildvalue}) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0005',
        }}>
        <View
          style={{
            minHeight: '10%',
            width: '80%',
            backgroundColor: '#F9E9F9',
            borderRadius: 18,
            overflow: 'hidden',
            padding: 10,
          }}>
          <TouchableOpacity
            onPress={toggleVisible}
            style={{alignItems: 'flex-end', padding: 10, marginTop: -10}}>
            <NormalText style={{color: Colors.primary, fontSize: 22}}>
              x
            </NormalText>
          </TouchableOpacity>
          <View>
            {selections?.map(selection => (
              <TouchableOpacity
                key={Math.random()}
                onPress={() => {
                  setSelectedValue(selection);
                  fildvalue('userType', selection.value);
                  toggleVisible();
                }}
                style={{
                  padding: 5,
                  backgroundColor: '#ccc5',
                  marginVertical: 2,
                  borderRadius: 8,
                  paddingHorizontal: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <NormalText style={{color: Colors.primary, fontSize: 12}}>
                  {selection.name}
                </NormalText>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  };

  const dispatch = useDispatch();
  const [docExists, setExists] = useState(false);
  const ourHandleSubmitt = values => {
    dispatch(register(values));
  };

  // const register = async values => {
  //   const ref = firestore().collection('gaseagent');

  //   const {email, phone} = values;

  //   ref.onSnapshot(querySnapshot => {
  //     const list = [];
  //     querySnapshot.forEach(doc => {
  //       list.push(doc.data());
  //     });

  //     list.map(item => {
  //       if (item.email === email && item.phone === phone) {
  //         setExists(true);
  //         console.log('exists thiss one');
  //       } else {
  //         console.log('not exists');
  //       }
  //     });
  //   });

  //   if (docExists) {
  //     (await (await ref.add(values)).get()).data();
  //     console.log('created');
  //     setExists(false);
  //   }
  // };

  const formValidation = Yup.object().shape({
    email: Yup.string()
      .email()
      .min(4, "email can't be fucked up like that!")
      .required('we fala hii ni muhimu'),
    phone: Yup.number('Phone must be a number')
      .test('len', 'Must be 10 digits', val => val?.toString().length === 10)
      .required('This field is required'),
    password: Yup.string().required(),
    confirm_password: Yup.string()
      .required('This field is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  return (
    <ImageBackground
      source={require('../../../assets/images/map.png')}
      style={{flex: 1}}>
      <View
        style={{flex: 1, backgroundColor: '#00F9', justifyContent: 'flex-end'}}>
        <NormalText
          style={{
            color: Colors.secondary,
            alignSelf: 'center',
            letterSpacing: 7,
            fontSize: 24,
            fontFamily: 'SFUIDisplay-Medium',
            marginBottom: -10,
          }}>
          Your Gas
        </NormalText>
        <NormalText
          style={{
            color: Colors.secondary,
            alignSelf: 'center',
            paddingBottom: 50,
            letterSpacing: 2,
            fontSize: 40,
            fontFamily: 'SFUIDisplay-Heavy',
          }}>
          AGENT
        </NormalText>
        <View
          style={{
            backgroundColor: Colors.secondary,
            padding: 20,
            paddingTop: 50,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 20,
            }}>
            <NormalText style={{color: Colors.primary, fontSize: 28}}>
              That's Great!{' '}
            </NormalText>
            <Icon name="smile" color={Colors.primary} size={35} />
          </View>

          <Formik
            initialValues={{
              email: '',
              phone: '',
              password: '',
              confirm_password: '',
              userType: 'client',
            }}
            validationSchema={formValidation}
            onSubmit={ourHandleSubmitt}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              values,
              errors,
              touched,
            }) => (
              <>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      paddingVertical: 8,
                      justifyContent: 'space-between',
                    }}>
                    <NormalText
                      style={{
                        color: '#0AF4',
                        fontSize: 16,
                        fontFamily: 'SFUIDisplay-Medium',
                      }}>
                      Register as
                    </NormalText>

                    <TouchableOpacity
                      onPress={() => {
                        toggleVisible();
                      }}
                      style={{
                        width: '30%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <NormalText
                        style={{
                          color: Colors.primary,
                          fontSize: 14,
                          fontFamily: 'SFUIDisplay-Medium',
                        }}>
                        {selectedValue?.name || 'Client'}
                      </NormalText>
                      <Icon
                        style={{paddingRight: 15}}
                        name="chevron-down"
                        color={'#0AF4'}
                        size={24}
                      />
                      <Modal visible={isVisible} transparent>
                        <ModalContents
                          fildvalue={setFieldValue}
                          selections={users}
                        />
                      </Modal>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      paddingVertical: 8,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '100%',
                      }}>
                      <TextInput
                        underlineColorAndroid={'#0AF4'}
                        placeholder="email"
                        placeholderTextColor={Colors.tertiary}
                        returnKeyType="next"
                        value={values.email}
                        onChangeText={handleChange('email')}
                        style={{
                          flex: 1,
                          color: Colors.primary,
                          fontFamily: 'SFUIDisplay-Regular',
                        }}
                      />
                      <Icon
                        style={{marginLeft: -35, paddingRight: 15}}
                        name="user"
                        color={'#0AF4'}
                        size={24}
                      />
                    </View>
                    {touched.email && errors.email && (
                      <NormalText
                        style={{
                          color: 'red',
                          fontSize: 12,
                          marginLeft: 3,
                          marginTop: -5,
                        }}>
                        {errors.email}
                      </NormalText>
                    )}
                  </View>
                  <View
                    style={{
                      paddingVertical: 8,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '100%',
                      }}>
                      <TextInput
                        underlineColorAndroid={'#0AF4'}
                        placeholder="Phone"
                        placeholderTextColor={Colors.tertiary}
                        value={values.phone}
                        onChangeText={handleChange('phone')}
                        style={{
                          flex: 1,
                          color: Colors.primary,
                          fontFamily: 'SFUIDisplay-Regular',
                        }}
                      />
                      <Icon
                        style={{marginLeft: -35, paddingRight: 15}}
                        name="phone"
                        color={'#0AF4'}
                        size={24}
                      />
                    </View>
                    {touched.phone && errors.phone && (
                      <NormalText
                        style={{
                          color: 'red',
                          fontSize: 12,
                          marginLeft: 3,
                          marginTop: -5,
                        }}>
                        {errors.phone}
                      </NormalText>
                    )}
                  </View>
                  <View
                    style={{
                      paddingVertical: 8,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '100%',
                      }}>
                      <TextInput
                        underlineColorAndroid={'#0AF4'}
                        placeholder="Password"
                        placeholderTextColor={Colors.tertiary}
                        value={values.password}
                        onChangeText={handleChange('password')}
                        style={{
                          flex: 1,
                          color: Colors.primary,
                          fontFamily: 'SFUIDisplay-Regular',
                        }}
                        secureTextEntry
                      />
                      <Icon
                        style={{marginLeft: -35, paddingRight: 15}}
                        name="lock"
                        color={'#0AF4'}
                        size={24}
                      />
                    </View>
                    {touched.password && errors.password && (
                      <NormalText
                        style={{
                          color: 'red',
                          fontSize: 12,
                          marginLeft: 3,
                          marginTop: -5,
                        }}>
                        {errors.password}
                      </NormalText>
                    )}
                  </View>
                  <View
                    style={{
                      paddingVertical: 8,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '100%',
                      }}>
                      <TextInput
                        underlineColorAndroid={'#0AF4'}
                        placeholder="Confirm Password"
                        placeholderTextColor={Colors.tertiary}
                        value={values.confirm_password}
                        onChangeText={handleChange('confirm_password')}
                        style={{
                          flex: 1,
                          color: Colors.primary,
                          fontFamily: 'SFUIDisplay-Regular',
                        }}
                        secureTextEntry
                      />
                      <Icon
                        style={{marginLeft: -35, paddingRight: 15}}
                        name="lock"
                        color={'#0AF4'}
                        size={24}
                      />
                    </View>
                    {touched.confirm_password && errors.confirm_password && (
                      <NormalText
                        style={{
                          color: 'red',
                          fontSize: 12,
                          marginLeft: 3,
                          marginTop: -5,
                        }}>
                        {errors.confirm_password}
                      </NormalText>
                    )}
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingVertical: 15,
                    }}>
                    <NormalText style={{color: Colors.primary}}>
                      Sign Up
                    </NormalText>
                    <TouchableOpacity
                      onPress={handleSubmit}
                      style={{
                        backgroundColor: Colors.primary,
                        height: 50,
                        width: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 100,
                      }}>
                      <Icon
                        name="arrow-right"
                        color={Colors.secondary}
                        size={24}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                    <NormalText
                      style={{
                        color: Colors.tertiary,
                        fontSize: 16,
                        paddingBottom: 3,
                        alignSelf: 'flex-start',
                      }}>
                      Have an account?{'  '}
                    </NormalText>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Login')}>
                      <NormalText
                        style={{
                          color: Colors.warning,
                          fontSize: 14,
                          borderBottomWidth: 1,
                          alignSelf: 'flex-start',
                          borderBottomColor: Colors.warning,
                        }}>
                        Sign In
                      </NormalText>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignUpScreen;
