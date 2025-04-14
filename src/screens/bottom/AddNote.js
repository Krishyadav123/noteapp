import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomButton from '../../components/CustomButton'
import axios from 'axios'
import { BASE_URL } from '../../apis/Api'
import { UserContext } from '../Main'
import { useNavigation } from '@react-navigation/native'

const AddNote = () => {
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const navigation = useNavigation()
const userData = useContext(UserContext)


  const  postNote = async () => {
    const data = {
      title,
      content,
    }
    try {
      const response = await axios.post(`${BASE_URL}notes`, data,{
        headers:{
          Authorization: "Bearer " + userData.token,
        }
      });
      setContent('')
      setTitle('')
      navigation.goBack()
      // Alert.alert("data", JSON.stringify(response.data))
    } catch (error) {
      console.error('Error registering user:', error.response.data.message);
      Alert.alert("Error", error.message)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Note Form</Text>
      <TextInput value={title} onChangeText={text => setTitle(text)} style={styles.input} placeholder='Enter Note Title' />
      <TextInput value={content} onChangeText={text => setContent(text)} style={styles.input} placeholder='Enter Note Content' />
      <CustomButton title='Add Note' onPress={() => postNote()} />
    </View>
  )
}

export default AddNote

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 50,
    fontWeight: 'bold',
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
})