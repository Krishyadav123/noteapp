import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import React, {useContext, useState} from 'react';

import axios from 'axios';
import {UserContext} from './Main';
import {BASE_URL} from '../apis/Api';
import CustomButton from '../components/CustomButton';
import {useNavigation, useRoute} from '@react-navigation/native';

const EditNote = () => {
  const userData = useContext(UserContext);
  const route = useRoute();
  const [title, setTitle] = useState(route.params.title);
  const [content, setContent] = useState(route.params.content);
  const navigation = useNavigation();
  const postNote = async () => {
    const data = {
      title,
      content,
    };
    try {
      const response = await axios.put(
        `${BASE_URL}notes/${route.params._id}`,
        data,
        {
          headers: {
            Authorization: 'Bearer ' + userData.token,
          },
        },
      );
      setContent('');
      setTitle('');
      navigation.goBack();
    } catch (error) {
      Alert.alert('error', error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>edit Note Form</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={styles.input}
        placeholder="Enter Note Title"
      />
      <TextInput
        value={content}
        onChangeText={setContent}
        style={styles.input}
        placeholder="Enter Note Content"
      />
      <CustomButton
        onPress={() => {
          postNote();
        }}
        title={'Update Note'}
      />
    </View>
  );
};

export default EditNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 50,
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