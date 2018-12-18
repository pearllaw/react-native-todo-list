import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, TextInput } from 'react-native'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      isCompleted: false,
      todoValue: ''
    }
    this.toggleCheck = this.toggleCheck.bind(this)
    this.editItem = this.editItem.bind(this)
    this.finishEdit = this.finishEdit.bind(this)
    this.controlInput = this.controlInput.bind(this)
  }

  toggleCheck() {
    this.setState(prevState => ({
      isCompleted: !prevState.isCompleted
    }))
  }

  editItem() {
    const { textValue } = this.props
    this.setState({ 
      isEditing: true,
      todoValue: textValue 
    })
  }

  finishEdit() {
    this.setState({ isEditing: false })
  }

  controlInput(textValue) {
    this.setState({ todoValue: textValue })
  }

  render() {
    const { isEditing, isCompleted, todoValue } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity onPress={this.toggleCheck}>
            <Text style={styles.button}>{ isCompleted ? '✅' : '⬜' }</Text>
          </TouchableOpacity>
          {isEditing
            ? <TextInput value={todoValue} 
                style={[styles.text, isCompleted ? styles.completed : styles.text]}
                multiline={true}
                returnKeyType={'done'}
                onBlur={this.finishEdit}
                onChangeText={this.controlInput} />
            : <Text style={[styles.text, isCompleted ? styles.completed : styles.text]}>
            {this.props.textValue}
          </Text>
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