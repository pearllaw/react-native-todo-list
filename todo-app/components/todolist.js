import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, TextInput } from 'react-native'

export default class TodoList extends Component {
  static propTypes = {
    todo: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    incompleted: PropTypes.func.isRequired,
    completed: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      todoValue: props.todo
    }
    this.toggleCheck = this.toggleCheck.bind(this)
    this.editItem = this.editItem.bind(this)
    this.finishEdit = this.finishEdit.bind(this)
    this.controlInput = this.controlInput.bind(this)
  }

  toggleCheck() {
    const { isCompleted, completed, incompleted, id } = this.props
    if (isCompleted) {
      incompleted(id)
    }
    else {
      completed(id)
    }
  }

  editItem() {
    this.setState({ isEditing: true })
  }

  finishEdit() {
    this.setState({ isEditing: false })
  }

  controlInput(editingText) {
    this.setState({ todoValue: editingText })
  }

  render() {
    const { isEditing, todoValue } = this.state
    const { todo, id, deleteTodo, isCompleted } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity onPress={this.toggleCheck}>
            <Text style={styles.button}>{ isCompleted ? '✅' : '⬜' }</Text>
          </TouchableOpacity>
          {isEditing
            ? <TextInput value={todoValue} 
                style={[styles.text, isCompleted ? styles.completed : styles.text]}
                returnKeyType={'done'}
                onBlur={this.finishEdit}
                onChangeText={this.controlInput} />
            : <Text style={[styles.text, isCompleted ? styles.completed : styles.text]}>{todo}</Text>
          }
        </View>
        <View style={styles.buttonContainer}>
          {isEditing
            ? <TouchableOpacity onPressOut={this.finishEdit}>
                <View style={styles.button}>
                  <Text>🆗</Text>
                </View>
              </TouchableOpacity>
            : <TouchableOpacity onPressOut={this.editItem}>
                <View style={styles.button}>
                  <Text>✏️</Text>
                </View>
              </TouchableOpacity>
          }  
          <TouchableOpacity onPress={() => deleteTodo(id)}>
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