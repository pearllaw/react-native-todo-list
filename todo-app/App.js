import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { LinearGradient } from 'expo'
import AddTodo from './containers/addTodo'
import VisibleTodoList from './containers/visibileTodos'

export default class App extends Component {

  render() {
    return (
      <LinearGradient style={styles.container}
        colors={['#4568dc', '#b06ab3']}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Todo List</Text> 
        <View>
          <AddTodo />
          {this.props.todos && <VisibleTodoList />} 
        </View>
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