

export const initialState = [
    {todo: 'Breakfast', 
    id: Date.now(),
    completed: false}
]

export function reducer(state, action) {
    switch(action.type){
        //add todo, toggle todo, clear completed
        case 'ADD_TODO':
            return [
                ...state,
                {
                    todo: action.payload, //name of todo
                    id: Date.now(),
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if(todo.id === action.payload){
                  return { 
                    ...todo,
                    completed: !todo.completed
                  }
                }

                else {
                    return todo
                }
            })

        case 'CLEAR_COMPLETED':
            return state.filter(value => {
                return value.completed === false
            })
        default: 
            return state
    }
} 