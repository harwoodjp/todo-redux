import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

import Todo from "../components/Todo"
import { rmTodo } from "../actions"

const Wrapper = styled.div`
`

const TodoList = ({ todos, rmTodo }) => (
  <Wrapper>
    <ul>
      {todos.map(todo => 
        <Todo
          key={todo.id}
          {...todo}
          onClick ={() => rmTodo(todo.id)}
        />
      )}
    </ul>
  </Wrapper>
)

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  rmTodo: id => dispatch(rmTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
