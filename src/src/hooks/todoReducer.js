import {v4 as uuidv4} from "uuid"

const todoReducer = (state, action)=> {
    switch(action.type){
        case "ADD_TODO": return(
            [...state, {id: uuidv4(), task: action.task, completed: false }]
        )
        
        case "DELETE_TODO": return (
            state.filter((item)=> item.id !== action.id)
        )

        default: return state

    }
}
export default todoReducer