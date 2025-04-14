import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useContext, useState} from 'react';
import {UserContext} from '../Main';
import {TextInput} from 'react-native-gesture-handler';
import { BASE_URL } from '../../apis/Api';
import CustomButton from '../../components/CustomButton';
import axios from 'axios';


const Profile = () => {
  const userData = useContext(UserContext);
  const [name, setName] = useState(userData.user.name);

  const updateProfile = async () => {
    const response = await axios.patch(
      `${BASE_URL}auth/update-profile`,
      {
        name,
      },
      {
        headers: {
          Authorization: 'Bearer ' + userData.token,
        },
      },
    );
    Alert.alert('response', JSON.stringify(response));
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Enter Note Title"
      />
      <CustomButton
        onPress={() => {
          updateProfile();
        }}
        title={'Update Profile'}
      />
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: '90%',
    height: 48,
    borderWidth: 1,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 10,
    paddingLeft: 20,
  },
});