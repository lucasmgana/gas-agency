/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  ImageBackground,
  FlatList,
} from 'react-native';
import React from 'react';
import DetailTopBar from '../../components/bars/DetailTopBar';
import {Colors} from '../../components/globalStyles.js/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import LineSeparator from '../../components/elements/LineSeparator';
import GASLIST from '../../context/GASLIST';
import GasListItem from '../../components/ListItems/GasListItem';
import NormalText from '../../components/texts/NormalText';

const DetailScreen = () => {
  const HeaderComponent = () => {
    return (
      <View>
        <View
          style={{
            backgroundColor: Colors.primary,
            height: 160,
            marginHorizontal: 0,
            borderRadius: 25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 20,
            overflow: 'hidden',
          }}>
          <View>
            <Text
              style={{
                color: Colors.secondary,
                fontFamily: 'SFUIDisplay-Semibold',
                fontSize: 20,
                textTransform: 'capitalize',
              }}>
              J.I Gas Station
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon size={18} color={Colors.secondary} name={'map-marker'} />
              <Text
                style={{
                  color: Colors.secondary,
                  fontFamily: 'SFUIDisplay-Regular',
                  textTransform: 'capitalize',
                  fontSize: 12,
                }}>
                Mabibo Jeshini
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 4,
              }}>
              <Icon
                style={{paddingRight: 5}}
                size={16}
                color={Colors.secondary}
                name={'message'}
              />
              <Icon
                style={{paddingRight: 5}}
                size={16}
                color={Colors.secondary}
                name={'whatsapp'}
              />
              <Icon
                style={{paddingRight: 5}}
                size={16}
                color={Colors.secondary}
                name={'phone'}
              />
              <Text
                style={{
                  color: Colors.secondary,
                  fontFamily: 'SFUIDisplay-Regular',
                  textTransform: 'capitalize',
                  fontSize: 12,
                }}>
                0712345678
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
              }}>
              <View
                style={{
                  backgroundColor: Colors.secondary,
                  padding: 2,
                  borderRadius: 5,
                }}>
                <Icon size={20} color={Colors.primary} name={'chart-pie'} />
              </View>
              <Text
                style={{
                  color: Colors.secondary,
                  fontFamily: 'SFUIDisplay-Medium',
                  paddingLeft: 5,
                }}>
                13% to reach
              </Text>
            </View>
          </View>
          <View>
            <Image
              resizeMode="contain"
              style={{height: 120, width: 120}}
              source={require('./../../../assets/images/oryxgastank.png')}
            />
          </View>
        </View>
        <View>
          <NormalText
            style={{
              fontFamily: 'SFUIDisplay-Heavy',
              marginTop: 20,
              color: Colors.primary,
              textTransform: 'capitalize',
              fontSize: 20,
              marginHorizontal: 0,
            }}>
            Available Gases
          </NormalText>
          <LineSeparator
            start={'flex-start'}
            length={'10%'}
            opacity={1}
            thick={2}
            color={Colors.primary}
          />
        </View>
      </View>
    );
  };

  const navigation = useNavigation();

  const FooterComponent = () => {
    return <View style={{height: 150}} />;
  };
  const EmptyComponent = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Icon
          style={{opacity: 0.4}}
          name="emoticon-sad-outline"
          size={150}
          color={Colors.warning}
        />
        <Text>No Gas tanks in stock</Text>
        <Text>try later...</Text>
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: Colors.secondary,
      }}>
      <DetailTopBar
        others
        bookmark
        onPressIcon={() => console.log('bookmark Pressed')}
      />
      <View
        style={{
          backgroundColor: Colors.secondary,
          marginHorizontal: 10,
        }}>
        <FlatList
          data={GASLIST}
          numColumns={2}
          ListHeaderComponent={HeaderComponent}
          renderItem={({item}) => (
            <View style={{width: '47.7%', marginRight: 15, marginTop: 15}}>
              <GasListItem gas={item} />
            </View>
          )}
          ListFooterComponent={FooterComponent}
          ListEmptyComponent={EmptyComponent}
        />
      </View>
    </View>
  );
};

export default DetailScreen;
