import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCompleted: false
    }
    this.toggleCircle = this.toggleCircle.bind(this)
  }

  toggleCircle() {
    this.setState(prevState => ({
      isCompleted: !prevState.isCompleted
    }))
  }

  render() {
    const { isCompleted } = this.state
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleCircle}>
          <View style={[styles.circle, isCompleted ? styles.completeCircle : styles.incompleteCircle]}></View>
        </TouchableOpacity>
        <Text style={[styles.text, isCompleted ? styles.text : styles.completed]}>Hi</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: '300'
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#C0C0C0'
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 2,
    margin: 20
  },
  completeCircle: {
    borderColor: '#C0C0C0'
  },
  incompleteCircle: {
    backgroundColor: '#C0C0C0' 
  }
})