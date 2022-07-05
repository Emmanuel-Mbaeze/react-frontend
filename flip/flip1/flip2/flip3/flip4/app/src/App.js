import React,{useState} from "react"
import { ThemeProvider } from "styled-components"
import Extra from "./Components/Homescreen/Extra"
import Consume from "./Components/Homescreen/consume"
// import Firstcomp from "./Components/Homescreen/FirstComp"
// const LightTheme = {
//     generalBackground:"white",
//     cardBackground:"Blue",
//     cardTitle:"white",
//     cardContent:"#eee"
// }
// const darkTheme = {
//     generalBackground:"black",
//     cardBackground:"white",
//     cardTitle:"black",
//     cardContent:"#bbb"
// }
// const Themes={
//     light:LightTheme,
//     dark:darkTheme
// }
const app=()=>{
    return(
        <div>
<Extra/>
    <Consume/>
    </div>
    )
}
export default app