import React from 'react'
import Todo from './Todo.js'
const TodoList = (props) => {
    const { state } = props

    return(
        <div>
            {state.map((todo) => (
                <Todo key={todo.id} todo={todo} dispatch={props.dispatch}/>
            ))}
        </div>
    )
}

export default TodoList