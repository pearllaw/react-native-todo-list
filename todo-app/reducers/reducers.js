import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/types'
import { AsyncStorage } from 'react-native'

const saveData = async (state) => { 
  try {
    await AsyncStorage.setItem('todos', JSON.stringify(state))
  }
  catch (err) {
    console.log(err)
  }
}

const loadState = async () => {
  return await JSON.parse(AsyncStorage.getItems('todos'))
}

export default function todoController(state = loadState.state || [], action) {
  switch (action.type) {
    case ADD_TODO:
      const addTodos = [
        ...state, 
        {
          todo: action.todo,
          id: action.id,
          isCompleted: false
        }
      ]
      saveData(addTodos)
      return addTodos
    case EDIT_TODO:
      const editTodos = state.map(todo => {
        return todo.id === action.id
          ? Object.assign({}, todo, { todo: action.todo })
          : todo
      })
      saveData(editTodos)
      return editTodos
    case REMOVE_TODO:
      const removeTodo = state.filter(todo => todo.id !== action.id)
      saveData(removeTodo)
      return removeTodo
    case TOGGLE_TODO:
      const toggleTodo = state.map(todo => {
          return todo.id === action.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo 
      })
      saveData(toggleTodo)
      return toggleTodo
    default: 
      return state
  }
}