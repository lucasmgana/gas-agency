/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, ScrollView, View, FlatList} from 'react-native';
import React from 'react';
import NormalText from '../../components/texts/NormalText';
import {Colors} from '../../components/globalStyles.js/styles';
import DetailTopBar from '../../components/bars/DetailTopBar';
import LineSeparator from '../../components/elements/LineSeparator';
import ClientListItem from '../../components/ListItems/ClientListItem';
import Icon from 'react-native-vector-icons/AntDesign';
import GasListItem from '../../components/ListItems/GasListItem';

const AgentPostPageScreen = () => {
  return (
    <View>
      <DetailTopBar add main />
      <View
        style={{
          padding: 10,
        }}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <NormalText
              style={{
                color: Colors.primary,
                fontSize: 14,
                paddingBottom: 5,
                fontFamily: 'SFUIDisplay-Heavy',
                textTransform: 'uppercase',
              }}>
              My Customers
            </NormalText>
            <Icon name="team" size={24} color={Colors.primary} />
          </View>
          <LineSeparator
            start={'flex-start'}
            length={'10%'}
            opacity={1}
            thick={2}
            color={Colors.primary}
          />
        </View>

        <View style={{paddingVertical: 10}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginHorizontal: -10, paddingHorizontal: 10}}>
            <ClientListItem clientName={'Juma Issa'} />
            <ClientListItem clientName={'Joe Mikinda'} />
            <ClientListItem clientName={'Seye Gome'} />
            <ClientListItem clientName={'Teo fili'} />
            <ClientListItem clientName={'Ken pita'} />
            <ClientListItem clientName={'salu ija'} />
          </ScrollView>
        </View>
        <View style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <NormalText
              style={{
                color: Colors.primary,
                fontFamily: 'SFUIDisplay-Heavy',
                fontSize: 14,
                paddingBottom: 5,
                textTransform: 'uppercase',
              }}>
              My Products
            </NormalText>
            <Icon name="appstore-o" size={24} color={Colors.primary} />
          </View>
          <LineSeparator
            start={'flex-start'}
            length={'10%'}
            opacity={1}
            thick={2}
            color={Colors.primary}
          />
          <View style={{marginTop: 10}}>
            <FlatList
              data={[
                {name: 'oryx', price: 1234},
                {name: 'taifa', price: 4324},
                {name: 'manjis', price: 9074},
                {name: 'oryx', price: 1234},
                {name: 'taifa', price: 4324},
                {name: 'manjis', price: 9074},
                {name: 'oryx', price: 1234},
                {name: 'taifa', price: 4324},
                {name: 'manjis', price: 9074},
              ]}
              numColumns={2}
              renderItem={({item}) => (
                <View style={{width: '47.7%', marginRight: 15, marginTop: 15}}>
                  <GasListItem agent gas={item} />
                </View>
              )}
              //  <View
              //     style={{
              //       height: 150,
              //       width: '48.5%',
              //       padding: 10,
              //       justifyContent: 'center',
              //       alignItems: 'center',
              //       marginRight: 10,
              //       marginTop: 15
              //     }}>
              //   </View>
              ListEmptyComponent={
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 200,
                  }}>
                  <Icon
                    name={'shoppingcart'}
                    size={32}
                    color={Colors.warning}
                  />
                  <NormalText
                    style={{
                      color: Colors.warning,
                      fontFamily: 'SFUIDisplay-Light',
                      letterSpacing: 2,
                      fontSize: 16,
                    }}>
                    No Products
                  </NormalText>
                </View>
              }
              ListFooterComponent={() => <View style={{marginBottom: 710}} />}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AgentPostPageScreen;

const styles = StyleSheet.create({});
