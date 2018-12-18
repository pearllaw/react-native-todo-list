import React from 'react'
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, ScrollView } from 'react-native'
import { LinearGradient, AppLoading } from 'expo'
import TodoList from './components/todolist'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: '',
      textValue: '',
      dataReady: false
    }
    this.newTodoItemController = this.newTodoItemController.bind(this)
  }

  newTodoItemController(textValue) {
    this.setState({ newTodo: textValue })
  }

  loadApp() {
    this.setState({ dataReady: true })
  }

  componentDidMount() {
    this.loadApp()
  }

  render() {
    const { height, width } = Dimensions.get('window')
    const { newTodo, dataReady } = this.state
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
              onChange={this.newTodoItemController}
              onSubmitEditing={() => {
                this.setState({ newTodo: '' })
              }}
              returnKeyType={'done'}
              autoCorrect={true} />
          </View>
          <ScrollView>
            <TodoList textValue={'todoItem'} />
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