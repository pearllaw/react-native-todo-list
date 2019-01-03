import React from 'react'
import uuidv1 from 'uuid/v1'
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, ScrollView, AsyncStorage } from 'react-native'
import { LinearGradient, AppLoading } from 'expo'
import TodoList from './components/todolist'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    // this.addTodo = this.addTodo.bind(this)
    // this.deleteTodo = this.deleteTodo.bind(this)
    // this.editTodo = this.editTodo.bind(this)
  }

  // addTodo() {
  //   const { newTodo } = this.state
  //   if (newTodo !== '') {
  //     this.setState(prevState => {
  //       const ID = uuidv1()
  //       const newTodoObject = {
  //         [ID]: {
  //           id: ID,
  //           isCompleted: false,
  //           todo: newTodo,
  //         }
  //       }
  //       const updatedState = {
  //         ...prevState,
  //         newTodo: '',
  //         todos: {
  //           ...prevState.todos,
  //           ...newTodoObject
  //         }
  //       }
  //       this.saveTodos(updatedState.todos)
  //       return { ...updatedState }
  //     })
  //   }
  // }

  // editTodo(id, todo) {
  //   this.setState(prevState => {
  //     const updatedState = {
  //       ...prevState,
  //       todos: {
  //         ...prevState.todos,
  //         [id]: {
  //           ...prevState.todos[id],
  //           todo
  //         }
  //       }
  //     }
  //     this.saveTodos(updatedState.todos)
  //     return { ...updatedState }
  //   })
  // }

  // deleteTodo(id) {
  //   this.setState(prevState => {
  //     const todos = prevState.todos
  //     delete todos[id]
  //     const updatedTodos = {
  //       ...prevState,
  //       ...todos
  //     }
  //     this.saveTodos(updatedTodos.todos)
  //     return { ...updatedTodos }
  //   })
  // }

  render() {
    const { text } = this.state
    const { state } = this.props
    return (
      <LinearGradient style={styles.container}
        colors={['#4568dc', '#b06ab3']}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Todo List</Text>
        <View style={styles.list} width={Dimensions.get('window').width - 60}>
          <View style={styles.inputBox}>
            <TextInput style={styles.input} 
              placeholder="Add todo"
              value={text}
              onChangeText={(text) => this.setState({ text })}
              onSubmitEditing={this.addTodo}
              returnKeyType={'done'}
              autoCorrect={false} />
          </View>
          <ScrollView>
            {state.length > 0 && state.map(todo => 
              <TodoList key={todo.id}
                id={todo.id} 
                {...todo} />
            )}
          </ScrollView>
        </View>
      </LinearGradient>
    )
  }
}

const mapStateToProps = state => ({
  state: state
})

export default connect(mapStateToProps)(App)

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
  },
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