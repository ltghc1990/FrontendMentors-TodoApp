import {useContext} from "react"
import {TodoContext} from "../hooks/TodoProvider"
import {ThemeContext} from "../hooks/ThemeProvider"

import TodoItem from "./TodoItem"


export default function TodoList(){
    const {todos} = useContext(TodoContext)
    const {styles} = useContext(ThemeContext)

    let list = todos.map((todo)=>{
        return(
            <TodoItem todo={todo} styles={styles}/>
        )
    })

    return(
        <ul className="listContainer" style={{backgroundColor: styles.bgColor}}>
            {list}
        </ul>
    )
   
}