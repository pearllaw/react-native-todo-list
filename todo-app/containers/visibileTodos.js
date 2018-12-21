import TodoList from '../components/todoListnew'
import { toggleTodo } from '../actions/actions'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  todos: state.todos
})
  
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})
  
const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default VisibleTodoList