import {useContext, useState} from "react"
import {TodoContext} from "../hooks/TodoProvider"
import {ThemeContext} from "../hooks/ThemeProvider"


function FormInput(){
    const {dispatch} = useContext(TodoContext)
    const { styles} = useContext(ThemeContext)
    const [todo, setTodo] = useState()



    const addTodo = (e)=>{
        e.preventDefault()
        if(todo !== ""){
            dispatch({type: "ADD_TODO", task: todo})
            setTodo('')
        }
    }

     



    return(
        <form onSubmit={addTodo}>
            <div className="inputContainer" style={{backgroundColor: styles.taskColor}}>
            <input 
                type="text" 
                placeholder="Add a todo..." 
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                className="inputBox"
                style={{backgroundColor: styles.taskColor, color: styles.textColor}}
                >
            </input>
            </div>

        </form>
    )
}

export default FormInput