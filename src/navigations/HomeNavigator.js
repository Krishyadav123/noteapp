import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/bottom/Home'
import EditNote from '../screens/EditNotes'

const HomeStack = createStackNavigator()
const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}}
    />
    <HomeStack.Screen
      name="EditNote"
      component={EditNote}
      options={{headerShown: false}}
    />
  </HomeStack.Navigator>
  )
}

export default HomeNavigator

const styles = StyleSheet.create({})