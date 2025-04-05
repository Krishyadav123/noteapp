import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../bottom/Home';
import AddNote from '../bottom/AddNote';
import Profile from '../bottom/Profile';

const Bottom = createBottomTabNavigator();
const BottomScreen = () => {
  return (
    <Bottom.Navigator screenOptions={{headerShown: false}}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => {
            return (
              <Image
                source={require('../../images/home.png')}
                style={{width: size, height: size, tintColor: color}}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="AddNote"
        component={AddNote}
        options={{
          tabBarIcon: ({color, size}) => {
            return (
              <Image
                source={require('../../images/add.png')}
                style={{width: size, height: size, tintColor: color}}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => {
            return (
              <Image
                source={require('../../images/user.png')}
                style={{width: size, height: size, tintColor: color}}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomScreen;

const styles = StyleSheet.create({});
