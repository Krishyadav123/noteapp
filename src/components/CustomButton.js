import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={style.btn} onPress={onPress}>
      <Text style={style.btnTxt}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const style = StyleSheet.create({
  btn: {
    width: '90%',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: 20,
  },
  btnTxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
