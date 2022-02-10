import { StyleSheet, ActivityIndicator, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import TodoItem from '../components/TodoItem';

const HomeScreen = () => {
  const [todo, setTodo] = useState([]);
  const [isApiCalled, setIsApiCalled] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((data) => data.json())
      .then((data) => {
        setTodo(data);
        setIsApiCalled(true);
      })
      .catch((err) => {
        setIsApiCalled(true);
      });
  }, []);
  return (
    <View style={styles.container}>
      {!isApiCalled ? (
        <ActivityIndicator size={'large'} color={'#f4511e'} />
      ) : (
        <FlatList
          data={todo}
          renderItem={({ item }) => <TodoItem item={item} />}
          style={styles.flatList}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefefe',
  },
  flatList: {
    width: '100%',
  },
});
