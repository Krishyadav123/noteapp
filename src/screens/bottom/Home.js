import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from '../Main';
import axios from 'axios';
import {BASE_URL} from '../../apis/Api';
import {useIsFocused, useNavigation} from '@react-navigation/native';

const Home = () => {
  const userData = useContext(UserContext);
  const [notes, setNotes] = useState([]);
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  useEffect(() => {
    getNotes();
  }, [isFocused]);
  const getNotes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}notes`, {
        headers: {
          Authorization: 'Bearer ' + userData.token,
        },
      });
      setNotes(response.data);
    } catch (error) {
      console.error('Error registering user:', error.response.data.message);
      Alert.alert('Error', error.message);
    }
  };

  const deleteNote = async id => {
    const response = await axios.delete(`${BASE_URL}notes/${id}`, {
      headers: {
        Authorization: 'Bearer ' + userData.token,
      },
    });
    if (response.status === 200) {
      getNotes();
    }
    Alert.alert('Note Deleted Successfully');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={({item, index}) => {
          return (
            <View style={styles.noteItem}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.content}>{item.content}</Text>
              <View style={styles.btns}>
                <Text
                  style={styles.edit}
                  onPress={() => navigation.navigate('EditNote', item)}>
                  Edit
                </Text>
                <Text
                  style={styles.delete}
                  onPress={() => deleteNote(item._id)}>
                  Delete
                </Text>
              </View>
              {/* <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>Created At: {item.createdAt}</Text> */}
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noteItem: {
    width: '90%',
    // height: 100,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: '500',
  },
  content: {
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  delete: {
    color: 'red',
    fontSize: 12,
    // padding: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 10,
    borderColor: 'red',
    borderWidth: 1,
    // marginLeft: 10,
    // marginBottom: 10,
    // marginTop: 10,
  },
  edit: {
    color: 'blue',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 10,
    borderColor: 'blue',
    borderWidth: 1,
    // marginLeft: 10,
    // marginBottom: 10,
    // marginTop: 10,
  },
});
