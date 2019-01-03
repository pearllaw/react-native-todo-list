import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/types'

export default function todoController(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, 
        {
          id: action.id,
          todo: action.todo,
          isCompleted: false
        }
      ]
    case EDIT_TODO:
      return state.map(todo => {
        return todo.id === action.id
          ? Object.assign({}, todo, {
              todo: action.todo
          })
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