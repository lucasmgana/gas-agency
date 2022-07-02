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
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../components/globalStyles.js/styles';
import {useNavigation} from '@react-navigation/native';
import DetailTopBar from '../../components/bars/DetailTopBar';
import NormalText from '../../components/texts/NormalText';
import LineSeparator from '../../components/elements/LineSeparator';
import Icon from 'react-native-vector-icons/Feather';

const BuyingScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState({});

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  const ModalContents = ({selections}) => {
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
                key={selection.weight}
                onPress={() => {
                  setSelectedValue(selection);
                  toggleVisible();
                }}
                style={{
                  padding: 5,
                  backgroundColor: '#ccc5',
                  marginVertical: 2,
                  borderRadius: 8,
                  paddingHorizontal: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <NormalText style={{color: Colors.primary, fontSize: 12}}>
                  {selection.weight + ' KG'}
                </NormalText>
                <NormalText style={{color: Colors.primary, fontSize: 12}}>
                  {selection.price}
                </NormalText>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  };

  const selections = [
    {
      weight: 20,
      price: 3000,
    },
    {
      weight: 15,
      price: 23000,
    },
    {
      weight: 30,
      price: 54500,
    },
  ];

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
                    <TouchableOpacity
                      onPress={toggleVisible}
                      style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View>
                        <NormalText
                          style={{
                            fontFamily: 'SFUIDisplay-Semibold',
                            fontSize: 14,
                            color: Colors.primary,
                          }}>
                          Weight
                        </NormalText>
                        <NormalText
                          style={{
                            fontFamily: 'SFUIDisplay-Semibold',
                            fontSize: 20,
                            color: Colors.primary,
                          }}>
                          {selectedValue?.weight ? (
                            selectedValue?.weight + ' KG'
                          ) : (
                            <NormalText style={{fontSize: 16, color:'#f008'}}>select weight</NormalText>
                          )}
                        </NormalText>
                      </View>
                    </TouchableOpacity>
                    <Modal visible={isVisible} transparent>
                      <ModalContents selections={selections} />
                    </Modal>
                  </View>
                  {selectedValue?.price && (
                    <TouchableOpacity>
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
                          {selectedValue?.price
                            ? selectedValue?.price + '/-'
                            : ''}
                        </NormalText>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          </View>
          <View>
            <NormalText style={{color: Colors.primary}}>Seller Info</NormalText>
            <NormalText
              style={{
                fontFamily: 'SFUIDisplay-Medium',
                fontSize: 14,
                color: Colors.primary,
              }}>
              Name: Juma Shomari
            </NormalText>
            <NormalText
              style={{
                fontFamily: 'SFUIDisplay-Medium',
                fontSize: 14,
                color: Colors.primary,
              }}>
              Phone: 076534231
            </NormalText>
            <NormalText
              style={{
                fontFamily: 'SFUIDisplay-Medium',
                fontSize: 14,
                color: Colors.primary,
              }}>
              Location: Msasani
            </NormalText>
          </View>
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
