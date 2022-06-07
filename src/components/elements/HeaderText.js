/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderText = ({children}) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}

export default HeaderText

const styles = StyleSheet.create({})