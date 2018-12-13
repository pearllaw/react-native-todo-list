import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'

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
        <View style={styles.row}>
          <TouchableOpacity onPress={this.toggleCircle}>
            <Text style={styles.button}>{ isCompleted ? '✅' : '⬜' }</Text>
          </TouchableOpacity>
          <Text style={[styles.text, isCompleted ? styles.completed : styles.text]}>
            Hi
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text>✏️</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text>❌</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

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
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    padding: 10
  }
})