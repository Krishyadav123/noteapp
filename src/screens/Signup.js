import {Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../apis/Api';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigation();



  const registerUser = async () => {
    const data = {
      email,
      password,
      name,
    }
    try {
      const response = await axios.post(`${BASE_URL}auth/register`, data);
     Alert.alert("User registered successfully", JSON.stringify(response.data))
     navigation.goBack()
    } catch (error) {
      console.error('Error registering user:', error.response.data.message);
      Alert.alert("Error", error.message)
    }
  };
  
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create Neww</Text>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        style={styles.input}
      />
      <CustomButton title="Signup" onPress={() => {
        registerUser();
        // navigation.navigate('Login')
      }} />
    <Text style={styles.signupTxt} onPress={() => navigation.navigate('Login')}>Or  <Text style={styles.signup}>Sign Up</Text> </Text>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    // marginTop: 100,
    marginBottom: 30,
  },
  input: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderColor: 'gray',
    // fontSize: 20,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  signupTxt: {
    textAlign: 'center',
    marginTop: 20,
  },
  signup: {
    textDecorationLine: 'underline',
    color: 'blue',
    fontWeight: '600',
    fontSize: 16
  },
});
