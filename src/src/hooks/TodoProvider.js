import {createContext, useReducer} from "react"
import todoReducer from "../hooks/todoReducer"

export const TodoContext = createContext()

const initialTodos = [
    {id: 1, task: "Walk the dog", completed: false},
    {id: 2, task: "Do homework", completed: true} ,
    {id: 3, task: "Jog around the park 3x", completed: false}
]

export function TodoProvider(props){
    const[todos, dispatch] = useReducer(todoReducer, initialTodos)

    const completedTodos = todos.reduce((acc, todo)=>{
        if(todo.completed === true){
            return( acc +1 )
        } else{
           return  acc
        }
    }, 0)

    const todosLength = todos.length

    const num  = todosLength - completedTodos
    
    return(
        <TodoContext.Provider value={{todos, dispatch, num}}>
            {props.children}
        </TodoContext.Provider>
    )
}