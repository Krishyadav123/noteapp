import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomScreen from './drawer/DrawerScreen'

const Drawer = createDrawerNavigator()
const Main = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Drawer" component={BottomScreen} />
    </Drawer.Navigator>
  )
}

export default Main