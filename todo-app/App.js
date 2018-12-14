import React from 'react'
import { StyleSheet, Text, StatusBar} from 'react-native'
import { LinearGradient } from 'expo'
import TodoList from './components/todolist'


export default class App extends React.Component {
  render() {
    return (
      <LinearGradient style={styles.container}
        colors={['#4568dc', '#b06ab3']}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Todo List</Text>
        <TodoList />
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 40,
    marginTop: 50, 
    fontWeight: '500'
  }
})
