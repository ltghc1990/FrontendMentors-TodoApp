import {useContext} from "react"
import {ThemeContext} from "../hooks/ThemeProvider"


export default function Background(props){
    const {styles} = useContext(ThemeContext)

    return(
        <div className="bg" style={{backgroundColor: styles.bgColor}}>
            <div className={`bgImg ${styles.bgCss}`}>
                <div className="container"> 
                {props.children}
                </div>
            </div>
        </div>
    )
}