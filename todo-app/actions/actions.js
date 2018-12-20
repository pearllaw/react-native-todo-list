import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from './types'

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

export function editTodo(id, text) {
  return {
    type: EDIT_TODO,
    id,
    text
  }
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}