import React, { useState } from 'react'

const TodoForm = (props) => {
    const { dispatch } = props
    const [value, setValue] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_TODO', payload: value})
        setValue('')
    }

    const handleClear = (e) => {
        e.preventDefault()
        dispatch({ type: 'CLEAR_COMPLETED'})
    }
    return (
        <div>
           <form>
                <label htmlFor='todo'/>
                <input 
                    id='todo'
                    name='todo'
                    value={value}
                    onChange={ (e) => setValue(e.target.value) }
                />
                <button onClick={ handleClick }>Add Todo</button>
                <button onClick={ handleClear }>Clear Completed</button>
           </form>
        </div>
    )
}

export default TodoForm