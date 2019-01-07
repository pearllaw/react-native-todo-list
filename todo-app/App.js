import React from 'react'
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, ScrollView } from 'react-native'
import { LinearGradient } from 'expo'
import TodoList from './components/todolist'
import { addTodo } from './actions/actions'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    const { text } = this.state
    const { state, addTodo } = this.props
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
              onBlur={() => this.setState({ text: '' })}
              onSubmitEditing={() => addTodo(text)}
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

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 40,
    marginTop: 85, 
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