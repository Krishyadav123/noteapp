import {Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../apis/Api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const loginUser = async () => {
    const data = {
      email,
      password,
    }
    try {
      const response = await axios.post(`${BASE_URL}auth/login`, data);
      navigation.navigate("Main", {
        data: response.data,
      })
    } catch (error) {
      console.error('Error registering user:', error.response.data.message);
      Alert.alert("Error", error.message)
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <CustomButton title="Login" onPress={() => loginUser()} />
    <Text style={styles.signupTxt} onPress={() => navigation.navigate('Signup')}>Or Create New Account <Text style={styles.signup}>Sign Up</Text> </Text>
    </SafeAreaView>
  );
};

export default Login;

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
