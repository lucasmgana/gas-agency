/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import NormalText from '../../components/texts/NormalText';
import {useState} from 'react';
import {Colors} from '../../components/globalStyles.js/styles';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {addgas} from '../../store/action/gas';
import {useNavigation} from '@react-navigation/native';

const AddGas = () => {
  const navigation = useNavigation();
  const authState = useSelector(state => state.authState);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('found user', authState.user.usertype);
  }, [dispatch, authState]);

  const [weight, setWeight] = useState(0);
  const [price, setPrice] = useState(0.0);
  const [gasType, setGasType] = useState('');

  const handleSubmit = () => {
    const gas = {
      weight,
      price,
      gasType,
      gasOwner: authState.user.email,
    };
    dispatch(addgas(gas));
    navigation.goBack();
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{flex: 1, backgroundColor: '#FFF', justifyContent: 'center'}}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              justifyContent: 'space-between',
            }}>
            <NormalText
              style={{
                color: 'red',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              Add Gas
            </NormalText>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{backgroundColor: 'red', padding: 10, borderRadius: 18}}>
              <NormalText style={{fontSize: 14}}>Back</NormalText>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
            }}>
            <TextInput
              onChangeText={setGasType}
              placeholder="Gase Type"
              underlineColorAndroid={'#0AF4'}
              placeholderTextColor={Colors.tertiary}
              returnKeyType="next"
              style={{
                flex: 1,
                color: Colors.primary,
                fontFamily: 'SFUIDisplay-Regular',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
            }}>
            <TextInput
              onChangeText={setWeight}
              placeholder="Weight"
              underlineColorAndroid={'#0AF4'}
              placeholderTextColor={Colors.tertiary}
              returnKeyType="next"
              style={{
                flex: 1,
                color: Colors.primary,
                fontFamily: 'SFUIDisplay-Regular',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
            }}>
            <TextInput
              onChangeText={setPrice}
              placeholder="Price"
              underlineColorAndroid={'#0AF4'}
              placeholderTextColor={Colors.tertiary}
              returnKeyType="next"
              style={{
                flex: 1,
                color: Colors.primary,
                fontFamily: 'SFUIDisplay-Regular',
              }}
            />
          </View>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              backgroundColor: Colors.primary,
              height: 50,
              width: '80%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 18,
              alignSelf: 'center',
            }}>
            <NormalText>Add Gas</NormalText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddGas;

const styles = StyleSheet.create({});
