import React from 'react'
import '../App.css'
const Todo = (props) => {
    const { todo, dispatch } = props

    return (
        <>
            {/* dispatch aciton here */}
            <h1 
                className={todo.completed ? 'completed' : ''}
                onClick={ () => dispatch({type: 'TOGGLE_TODO', payload: todo.id}) }
            >
                {todo.todo}
            </h1>
        </>
    )
}

export default Todo