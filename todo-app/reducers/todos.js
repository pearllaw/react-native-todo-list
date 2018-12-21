import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, REMOVE_TODO } from '../actions/actions'

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          isCompleted: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo => {
        return todo.id === action.id 
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      })
    case EDIT_TODO: 
      const updateTodos = state.map(todo => {
        return todo.id === action.id
          ? { ...todo, text: action.text }
          : todo
      })
      return updateTodos
    case REMOVE_TODO:
      const updatedTodos = state.filter(todo => todo.id !== action.id)
      return updatedTodos
    default:
      return state
  }
}
