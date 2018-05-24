import React from "react"
import styled from "styled-components"

import TodoList from "../containers/TodoList"
import AddTodo from "../containers/AddTodo"

const Wrapper = styled.div`
  margin: 1em
`

const App = () => (
  <Wrapper>
    <AddTodo />
    <TodoList />
  </Wrapper>
)

export default App