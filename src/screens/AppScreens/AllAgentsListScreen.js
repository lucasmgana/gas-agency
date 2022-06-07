/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  ImageBackground,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../components/globalStyles.js/styles';
import DetailTopBar from '../../components/bars/DetailTopBar';
import NormalText from '../../components/texts/NormalText';
import AGENTS from '../../context/AGENTS';
import UserAgentListCard from '../../components/ListItems/UserAgentListCard';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AllAgentsListScreen = () => {
  const [mapview, toggleMapview] = useState(false);

  const navigation = useNavigation();

  const FooteComponent = () => {
    return <View style={{height: 50}} />;
  };

  const NearAgents = () => {
    return (
      <NormalText
        style={{color: Colors.primary, paddingHorizontal: 15, paddingTop: 15}}>
        All agents
      </NormalText>
    );
  };

  const [mapIcon, toggleMapicon] = useState(true);

  return (
    <View style={{backgroundColor: Colors.secondary, flex: 1}}>
      <DetailTopBar
        others
        map
        mapIcon={mapIcon}
        onPressIcon={() => {
          toggleMapview(!mapview);
          toggleMapicon(!mapIcon);
        }}
      />
      {mapview ? (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <ImageBackground
            resizeMode="cover"
            style={{
              width: '100%',
              height: 700,
            }}
            source={require('../../../assets/images/map.png')}>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.success,
                width: 80,
                height: 80,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
                position: 'absolute',
                bottom: 10,
                alignSelf: 'center',
                padding: 10,
              }}>
              <View
                style={{
                  backgroundColor: Colors.primary,
                  width: 60,
                  height: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 100,
                  position: 'absolute',
                  bottom: 10,
                  alignSelf: 'center',
                  padding: 10,
                }}>
                <Icon size={24} color={Colors.secondary} name={'map-marker'} />

                <NormalText
                  style={{
                    color: Colors.secondary,
                    fontSize: 14,
                  }}>
                  Me
                </NormalText>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </ScrollView>
      ) : (
        <FlatList
          ListHeaderComponent={NearAgents}
          ListFooterComponent={FooteComponent}
          data={AGENTS}
          renderItem={({item}) => (
            <UserAgentListCard
              onPress={() => navigation.navigate('Detail')}
              agent={item}
            />
          )}
        />
      )}
    </View>
  );
};

export default AllAgentsListScreen;

const styles = StyleSheet.create({});
