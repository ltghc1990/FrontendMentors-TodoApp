import {createContext} from "react"
import useToggleState from "../hooks/useToggleState"
import darkIcon from "../Images/icon-moon.svg"
import lightIcon from "../Images/icon-sun.svg"
 
export const ThemeContext = createContext()
const themes = {
    darkMode: {
        theme: "dark",
        bgCss: "dkMode",
        modeIcon: lightIcon,
        bgColor: "hsl(235, 21%, 11%)", 
        taskColor: "hsl(235, 24%, 19%)",
        textColor: "hsl(234, 39%, 85%)",
        textComplete: "hsl(233, 14%, 35%)",
         
    },

    lightMode: {
        theme: "light",
        bgCss: "ltMode",
        modeIcon: darkIcon,
        bgColor: "hsl(236, 33%, 92%)",
        taskColor: "hsl(0, 0%, 98%)",
        textColor: "hsl(235, 19%, 35%)",   
        textComplete: "hsl(236, 33%, 92%)"  
    }
}

 
 

export const ThemeProvider = (props)=>{
    const[themeValue, setThemeValue] = useToggleState(true)

    const styles = themeValue? themes.darkMode : themes.lightMode
   
    return(
        <ThemeContext.Provider value={{themeValue, setThemeValue, styles}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

