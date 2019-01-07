import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from './types'

let nextId = 0
export const addTodo = (todo) => ({ 
  type: ADD_TODO,
  todo,
  id: nextId++
})

export const editTodo = (todo, id) => ({ 
  type: EDIT_TODO, 
  todo,
  id
})

export const removeTodo = (id) => ({ 
  type: REMOVE_TODO, 
  id
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})
