import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const TodoItem = ({ item }) => {
  const navigation = useNavigation();
  const handleTodoContent = () => {
    navigation.navigate('Todo', { id: item.id });
  };
  return (
    <View>
      <TouchableOpacity style={styles.content} onPress={handleTodoContent}>
        <Text style={styles.item}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 30,
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    textTransform: 'capitalize',
  },
});
