import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';

const HomeScreen = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((data) => data.json())
      .then((data) => {
        setTodo(data);
      });
  }, []);
  return (
    <View style={styles.container}>
      {/* <Header title="Todo List" /> */}

      <FlatList
        data={todo}
        renderItem={({ item }) => <TodoItem item={item} />}
        style={styles.flatList}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
});
