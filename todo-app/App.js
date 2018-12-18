import React from 'react'
import uuidv1 from 'uuid/v1'
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, ScrollView } from 'react-native'
import { LinearGradient, AppLoading } from 'expo'
import TodoList from './components/todolist'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: '',
      todo: '',
      todos: {},
      dataReady: false
    }
    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.completed = this.completed.bind(this)
    this.incompleted = this.incompleted.bind(this)
    this.newTodoItemController = this.newTodoItemController.bind(this)
  }

  addTodo() {
    const { newTodo } = this.state
    if (newTodo !== '') {
      this.setState(prevState => {
        const ID = uuidv1()
        const newTodoObject = {
          [ID]: {
            id: ID,
            isCompleted: false,
            todo: newTodo,
          }
        }
        const updatedState = {
          ...prevState,
          newTodo: '',
          todos: {
            ...prevState.todos,
            ...newTodoObject
          }
        }
        return { ...updatedState }
      })
    }
  }

  incompleted(id) {
    this.setState(prevState => {
      const incompletedState = {
        ...prevState,
        todos: {
          ...prevState.todos,
          [id]: {
            ...prevState.todos[id],
            isCompleted: false
          }
        }
      }
      return { ...incompletedState }
    })
  }

  completed(id) {
    this.setState(prevState => {
      const completedState = {
        ...prevState,
        todos: {
          ...prevState.todos,
          [id]: {
            ...prevState.todos[id],
            isCompleted: true
          }
        }
      }
      return { ...completedState }
    })
  }

  deleteTodo(id) {
    this.setState(prevState => {
      const todos = prevState.todos
      delete todos[id]
      const updatedTodos = {
        ...prevState,
        ...todos
      }
      return { ...updatedTodos }
    })
  }

  newTodoItemController(todo) {
    this.setState({ newTodo: todo })
  }

  loadApp() {
    this.setState({ dataReady: true })
  }

  componentDidMount() {
    this.loadApp()
  }

  render() {
    const { height, width } = Dimensions.get('window')
    const { newTodo, dataReady, todos } = this.state
    if (!dataReady) return <AppLoading />
    return (
      <LinearGradient style={styles.container}
        colors={['#4568dc', '#b06ab3']}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Todo List</Text>
        <View style={styles.list} width={width - 60}>
          <View style={styles.inputBox}>
            <TextInput style={styles.input} 
              placeholder="Add todo"
              value={newTodo}
              onChangeText={this.newTodoItemController}
              onSubmitEditing={this.addTodo}
              returnKeyType={'done'}
              autoCorrect={true} />
          </View>
          <ScrollView>
            {Object.values(todos).map(todo => 
              <TodoList key={todo.id} 
                {...todo} 
                deleteTodo={this.deleteTodo}
                completed={this.completed}
                incompleted={this.incompleted} />
              )
            }
          </ScrollView>
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