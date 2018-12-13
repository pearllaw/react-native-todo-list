import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default class TodoList extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
            <Text style={styles.circle}></Text>
        </TouchableOpacity>
        <Text style={styles.text}>Hi</Text>
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
  circle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: '#C0C0C0',
    borderWidth: 2,
    margin: 20
  }
})