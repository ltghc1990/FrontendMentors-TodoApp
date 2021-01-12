import {createContext, useReducer} from "react"
import todoReducer from "../hooks/todoReducer"

export const TodoContext = createContext()

const initialTodos = [
    {id: 1, task: "Walk the dog"},
    {id: 2, task: "Do homework"},
]

export function TodoProvider(props){
    const[todos, dispatch] = useReducer(todoReducer, initialTodos)
    
    return(
        <TodoContext.Provider value={{todos, dispatch,}}>
            {props.children}
        </TodoContext.Provider>
    )
}