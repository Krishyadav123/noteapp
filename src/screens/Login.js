import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
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
      <CustomButton title="Login" onPress={() => {navigation.navigate('Main')}} />
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
