/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {TouchableOpacity, TextInput, View, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Colors, styles} from '../../components/globalStyles.js/styles';
import NormalText from '../../components/texts/NormalText';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/action/authentication';

const {card, button, container, text} = styles;

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authState = useSelector(state => state.authState);
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };

  useEffect(() => {}, [dispatch]);

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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <NormalText
              style={{
                color: Colors.primary,
                fontFamily: 'SFUIDisplay-Semibold',
                fontSize: 28,
              }}>
              Welcome Back!{' '}
            </NormalText>
            <Icon name="smile" color={Colors.primary} size={35} />
          </View>
          <View>
            <View
              style={{flexDirection: 'row', width: '100%', paddingVertical: 8}}>
              <TextInput
                onChangeText={setEmail}
                underlineColorAndroid={'#0AF4'}
                placeholder="example@domain.com"
                placeholderTextColor={Colors.tertiary}
                style={{
                  flex: 1,
                  fontFamily: 'SFUIDisplay-Regular',
                  color: Colors.primary,
                }}
              />
              <Icon
                style={{marginLeft: -35, paddingRight: 15}}
                name="mail"
                color={'#0AF4'}
                size={24}
              />
            </View>
            <View
              style={{flexDirection: 'row', width: '100%', paddingVertical: 8}}>
              <TextInput
                onChangeText={setPassword}
                underlineColorAndroid={'#0AF4'}
                placeholder="* * * * * * * *"
                placeholderTextColor={Colors.tertiary}
                style={{
                  flex: 1,
                  fontFamily: 'SFUIDisplay-Regular',
                  color: Colors.primary,
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
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 15,
              }}>
              <NormalText
                style={{
                  color: Colors.primary,
                  fontFamily: 'SFUIDisplay-Medium',
                  fontSize: 24,
                }}>
                Sign In
              </NormalText>
              <TouchableOpacity
                onPress={handleLogin}
                style={{
                  backgroundColor: Colors.primary,
                  height: 50,
                  width: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 100,
                }}>
                <Icon name="arrow-right" color={Colors.secondary} size={24} />
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
                Don't have an account?{'  '}
              </NormalText>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <NormalText
                  style={{
                    color: Colors.warning,
                    fontSize: 14,
                    borderBottomWidth: 1,
                    alignSelf: 'flex-start',
                    borderBottomColor: Colors.warning,
                    fontFamily: 'SFUIDisplay-Medium',
                  }}>
                  Sign up
                </NormalText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
