/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Colors} from '../../components/globalStyles.js/styles';
import {useNavigation} from '@react-navigation/native';
import DetailTopBar from '../../components/bars/DetailTopBar';
import NormalText from '../../components/texts/NormalText';
import LineSeparator from '../../components/elements/LineSeparator';
import Icon from 'react-native-vector-icons/Feather';

const BuyingScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.secondary,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <NormalText
          style={{
            color: Colors.primary,
            textTransform: 'uppercase',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'SFUIDisplay-Heavy',
            letterSpacing: 1,
          }}>
          make ORDER
        </NormalText>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: Colors.tertiary,
          marginTop: 10,
          borderTopRightRadius: 60,
          borderTopLeftRadius: 60,
          overflow: 'hidden',
        }}>
        <View style={styles.detailsContainer}>
          <View style={{flexDirection: 'row', marginHorizontal: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image
                style={{height: 200, width: 150}}
                resizeMode="contain"
                source={require('../../../assets/images/gas-demo.png')}
              />

              <View
                style={{
                  paddingTop: 20,
                  justifyContent: 'center',
                  width: '50%',
                }}>
                <NormalText
                  style={{
                    color: Colors.warning,
                    textTransform: 'uppercase',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'SFUIDisplay-Heavy',
                    paddingVertical: 10,
                  }}>
                  Oryx Gas
                </NormalText>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <NormalText
                          style={{
                            fontFamily: 'SFUIDisplay-Semibold',
                            fontSize: 14,
                            color: Colors.primary,
                          }}>
                          Weight
                        </NormalText>
                        <Icon nam="mail" size={12} color="black" />
                      </View>
                      <NormalText
                        style={{
                          fontFamily: 'SFUIDisplay-Semibold',
                          fontSize: 20,
                          color: Colors.primary,
                        }}>
                        15 KG
                      </NormalText>
                    </View>
                  </View>
                  <View>
                    <NormalText
                      style={{
                        fontFamily: 'SFUIDisplay-Semibold',
                        fontSize: 14,
                        color: Colors.primary,
                      }}>
                      Price
                    </NormalText>
                    <NormalText
                      style={{
                        fontFamily: 'SFUIDisplay-Semibold',
                        fontSize: 20,
                        color: Colors.primary,
                      }}>
                      15,000/-
                    </NormalText>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <NormalText
            style={{
              fontFamily: 'SFUIDisplay-Medium',
              fontSize: 14,
              color: Colors.primary,
              paddingTop: 12,
            }}>
            Seller
          </NormalText>
          <View
            style={{
              width: '100%',
              borderRadius: 20,
              margin: 20,
              padding: 20,
            }}>
            <NormalText
              style={{
                fontFamily: 'SFUIDisplay-Semibold',
                fontSize: 24,
                color: Colors.primary,
              }}>
              Delivery Notes
            </NormalText>
            <LineSeparator
              start={'flex-start'}
              length={'10%'}
              opacity={1}
              thick={2}
              color={Colors.primary}
            />
            <NormalText
              style={{
                fontFamily: 'SFUIDisplay-Medium',
                fontSize: 14,
                color: Colors.primary,
                paddingTop: 12,
              }}>
              Stapes for gathering software requirements Create a list of
              stakeholders Create an analytics business requirements
              questionnaire 1. Data collection and flexibility 2. Analytics
              stack 3. Data ownership and privacy 4. Reporting features
            </NormalText>
          </View>

          <View style={{padding: 20, flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => alert('ready to buy')}
              style={{
                height: 50,
                width: '50%',
                backgroundColor: Colors.primary,
                borderRadius: 100,
                marginLeft: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: Colors.secondary,
                  fontFamily: 'SFUIDisplay-Heavy',
                }}>
                Buy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                height: 50,
                width: '50%',
                borderColor: Colors.primary,
                borderWidth: 2,
                borderRadius: 100,
                marginLeft: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: Colors.primary,
                  fontFamily: 'SFUIDisplay-Heavy',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BuyingScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
});
