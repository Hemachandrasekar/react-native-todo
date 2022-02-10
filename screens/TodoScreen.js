import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { FcApproval, FcCancel } from 'react-icons/fc';

const TodoScreen = ({ route }) => {
  const [todoDetail, setTodoDetail] = useState({});
  const { id } = route.params;
  //   console.log('params id', id);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((data) => data.json())
      .then((data) => setTodoDetail(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <View>
      {/* <Header title="Todo Detail" /> */}
      <View style={styles.content}>
        <Text style={styles.text}>UserId : {todoDetail.id}</Text>
        <Text style={styles.text}>Title : {todoDetail.title}</Text>

        <Text style={styles.text}>
          Completed :{' '}
          {todoDetail.completed ? (
            <FcApproval size={20} />
          ) : (
            <FcCancel size={20} />
          )}
        </Text>
      </View>
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  content: {
    margin: 40,
    padding: 20,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    textTransform: 'capitalize',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    padding: 10,
    margin: 5,
    fontWeight: 'bold',
    borderColor: '#bbb',
    borderWidth: 1,
  },
});
