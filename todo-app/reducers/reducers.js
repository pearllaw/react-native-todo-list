import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/types'
import { AsyncStorage } from 'react-native'

const initialState = AsyncStorage.getItem('todos').then(values => JSON.parse(values))

const saveData = async (state) => {
  try {
    await AsyncStorage.setItem('todos', JSON.stringify(state))
  }
  catch (err) {
    console.log(err)
  }
}

export default function todoController(state = initialState || [], action) {
  switch (action.type) {
    case ADD_TODO:
      const addTodo = [
        ...state, 
        {
          todo: action.todo,
          id: action.id,
          isCompleted: false
        }
      ]
      saveData(addTodo)
      return addTodo
    case EDIT_TODO:
      return state.map(todo => {
        return todo.id === action.id
          ? Object.assign({}, todo, { todo: action.todo })
          : todo
      })
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id)
    case TOGGLE_TODO:
      return state.map(todo => {
          return todo.id === action.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo 
      })
    default: 
      return state
  }
}