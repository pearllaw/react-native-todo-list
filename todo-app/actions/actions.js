import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, REMOVE_TODO } from './types'

let nextTodoId = 0
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
    id: nextTodoId++
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
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