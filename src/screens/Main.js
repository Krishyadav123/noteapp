import { View, Text } from 'react-native'
import React, { createContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomScreen from './drawer/DrawerScreen'
import { useRoute } from '@react-navigation/native'

const Drawer = createDrawerNavigator()
export const UserContext = createContext()
const Main = () => {
  const route = useRoute()
  return (
    <UserContext.Provider value={route.params.data}>
    <Drawer.Navigator>
      <Drawer.Screen name="Drawer" component={BottomScreen} />
    </Drawer.Navigator>
    </UserContext.Provider>
  )
}

export default Main