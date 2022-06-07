/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

const RnFB = () => {
  const ref = firestore().collection('gaseagent');
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const testInput = text => {
    setText(text);
  };

  const postingData = async text => {
    if (text.length > 0) {
      await ref
        .add({
          text,
          done: false,
        })
        .then(res => setText(''))
        .catch(err => console.log(err));
    }
  };

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        list.push(doc.data());
      });
      setList(list);
      console.log('list', list);
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TextInput
        style={{
          color: 'black',
          borderWidth: 2,
          width: '80%',
          padding: 10,
          fontSize: 16,
          borderRadius: 20,
        }}
        placeholderTextColor="black"
        placeholder="Type to post..."
        onChangeText={testInput}
      />
      <TouchableOpacity
        style={{
          width: '80%',
          backgroundColor: 'black',
          padding: 18,
          borderRadius: 20,
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => postingData(text)}>
        <Text
          style={{color: 'white', fontSize: 14, textTransform: 'uppercase'}}>
          Post
        </Text>
      </TouchableOpacity>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <View>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default RnFB;

const styles = StyleSheet.create({});
