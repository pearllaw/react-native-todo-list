import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      isCompleted: false,
      todoItem: '',
      list: []
    }
    this.addTodo = this.addTodo.bind(this)
    this.clearInput = this.clearInput.bind(this)
    this.toggleCheck = this.toggleCheck.bind(this)
    this.editItem = this.editItem.bind(this)
    this.finishEdit = this.finishEdit.bind(this)
    this.controlInput = this.controlInput.bind(this)
  }

  addTodo(todo) {
    this.setState({ todoItem: todo })
  }

  clearInput() {
    const { todoItem } = this.state
    this.submitTodo(todoItem)
    this.setState({ todoItem: '' })
  }

  submitTodo(newTodo) {
    const newListArr = this.state.list.slice()
    newListArr.push(newTodo) 
    this.setState({ list: newListArr })
  }

  toggleCheck() {
    this.setState(prevState => ({
      isCompleted: !prevState.isCompleted
    }))
  }

  editItem() {
    this.setState({ 
      isEditing: true,
      todoItem
    })
  }

  finishEdit() {
    this.setState({ isEditing: false })
  }

  controlInput(todo) {
    this.setState({ todoItem: todo })
  }

  render() {
    const { isEditing, isCompleted, todoItem, list } = this.state
    const {height, width} = Dimensions.get('window')
    return (
    <View>
      <View style={styles.inputBox} width={width - 60}>
        <TextInput style={styles.input}
          placeholder="Add todo"
          value={todoItem}
          onChangeText={this.addTodo}
          onSubmitEditing={this.clearInput}
          returnKeyType={'done'}
          autoCorrect={false} />
      </View> 
      <ScrollView>
      <View style={styles.container} width={width - 60}>
        {list.length > 0 
          ? <View style={styles.todos}>
            {list.map((todo, index) => (
            <View style={styles.row}>
              <View style={styles.todoItem}>
              <TouchableOpacity onPress={this.toggleCheck}>
                <Text style={styles.button} key={index}>{ isCompleted ? '✅' : '⬜' }</Text>
              </TouchableOpacity>
                {/* // <TextInput value={todoItem}
                // style={styles.text}
                // multiline={true}
                // returnKeyType={'done'}
                // onBlur={this.finishEdit}
                // onChangeText={this.controlInput} /> */}
              <Text style={[styles.text, isCompleted ? styles.completed : styles.text]}
                key={index}>
                {todo}
              </Text>
              </View>
              <View style={styles.buttonContainer} key={index}>
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
                <TouchableOpacity>
                  <View style={styles.button}>
                    <Text>❌</Text>
                  </View>
                </TouchableOpacity> 
              </View>
            </View>
            ))}
          </View>
          : null
        }
      </View>
      </ScrollView>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  inputBox: {
    padding: 20,
    marginTop: 25,
    marginBottom: 25,
    borderColor: '#a9a9a9',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  input: {
    fontSize: 24,
    fontWeight: '300'
  },
  container: {
    backgroundColor: '#fff',
    flex: 0.95,
    borderRadius: 10,
    width: Dimensions.get('window').width - 50
  },
  todos: {
    flexDirection: 'column',
    padding: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  todoItem: {
    flexDirection: 'row'
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