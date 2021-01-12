import {useState} from "react"

const useToggleState = (initialVal) =>{
    const [ state, setState] =useState(initialVal)
    const toggleState = ()=>{
        setState(!state)
    }
    return[ state, toggleState]

}

export default useToggleState