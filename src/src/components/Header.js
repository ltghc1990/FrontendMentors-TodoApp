import {useContext} from "react"
import {ThemeContext} from "../hooks/ThemeProvider"
 
export default function Header(){
    const {setThemeValue, styles} = useContext(ThemeContext)
     
    return(
        <header className="header">
            <h3>TODO</h3>
            <div className="hover" onClick={()=>setThemeValue()} style={{backgroundColor: "none"}}>
                <img src={styles.modeIcon} />             
            </div>
        </header>
    )
}