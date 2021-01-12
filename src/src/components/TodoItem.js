import {useContext} from "react"
import {TodoContext} from "../hooks/TodoProvider"

import deleteIcon from "../Images/icon-cross.svg"


export default function TodoItem({styles, todo}){
    const {dispatch} = useContext(TodoContext)
    return(
        <>
        <li className="inputContainer2" style={{backgroundColor: styles.taskColor}}>
            <input type="radio"></input>
            <div className="inputBox" style={{color: styles.textColor}}>{todo.task}</div>
            <div onClick={()=>dispatch({type: "DELETE_TODO", id: todo.id})}>
                <img src={deleteIcon}/>
            </div>
        </li>  
         </>
    )
}