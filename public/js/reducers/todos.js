const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    case "RM_TODO":
      return [
        ...state.filter(todo => {
          return todo.id !== action.id
        })
      ]
    default:
      return state
  }
}

export default todos
