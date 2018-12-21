import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Dimensions } from 'react-native'
import { addTodo } from '../actions/actions'
import { connect } from 'react-redux'

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  addTodo(text) {
    this.props.dispatch(addTodo(text))
    this.setState({ text: '' })
  }

  render() {
    const { height, width } = Dimensions.get('window')
    const { text } = this.state
    return (
      <View style={styles.list} width={width - 60}>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} 
            placeholder="Add todo"
            value={text}
            onChangeText={(text) => this.setState({ text })}
            onSubmitEditing={() => this.addTodo(text)}
            returnKeyType={'done'}
            autoCorrect={false} />
        </View>
      </View>
    )
  }
}

export default connect()(AddTodo)

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fff',
    flex: 0.9,
    borderRadius: 10,
    marginTop: 25
  },
  input: {
    padding: 20,
    fontSize: 24,
    fontWeight: '300'
  },
  inputBox: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#a9a9a9'
  }
})