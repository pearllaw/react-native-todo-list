import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import { editTodo, toggleTodo } from '../actions/actions'
import { connect } from 'react-redux'

class TodoList extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      todoValue: props.todo
    }
    this.startEdit = this.startEdit.bind(this)
    this.finishEdit = this.finishEdit.bind(this)
  }

  startEdit() {
    this.setState({ isEditing: true })
  }

  finishEdit() {
    const { todoValue } = this.state
    const { id, editTodo } = this.props
    this.props.dispatch(() => editTodo(todoValue, id))
    this.setState({ isEditing: false })
  }

  render() {
    const { isEditing, todoValue } = this.state
    const { todo, id, isCompleted, toggleTodo } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => toggleTodo(id)}>
            <Text style={styles.button}>{ isCompleted ? '✅' : '⬜' }</Text>
          </TouchableOpacity>
          {isEditing
            ? <TextInput value={todoValue} 
                style={[styles.text, isCompleted ? styles.completed : styles.text]}
                returnKeyType={'done'}
                onBlur={editTodo}
                onChangeText={(newText) => this.setState({ todoValue: newText })} />
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
            : <TouchableOpacity onPressOut={this.startEdit}>
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

const mapDispatchToProps = dispatch => ({
  editTodo: (todo, id) => dispatch(editTodo(todo, id)),
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(null, mapDispatchToProps)(TodoList)

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
