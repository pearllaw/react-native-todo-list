import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'

const TodoList = ({ todos, toggleTodo }) => {
  <View style={styles.container}>
    {todos.map(todo => 
    <View style={styles.row}>
      <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
        <Text style={styles.button}>{ todo.isCompleted ? '✅' : '⬜' }</Text>
      </TouchableOpacity>
      <Text key={todo.id} style={[styles.text, todo.isCompleted ? styles.completed : styles.text]}>{todo.text}</Text>
    </View>
    )}
  </View>
}

export default TodoList

const styles = StyleSheet.create({
    container: {
      width: Dimensions.get('window').width - 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomColor: '#a9a9a9',
      borderBottomWidth: 0.5,
      padding: 10
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: '300',
      paddingLeft: 5
    },
    completed: {
      textDecorationLine: 'line-through',
      color: '#C0C0C0'
    },
    button: {
      padding: 10
    }
})