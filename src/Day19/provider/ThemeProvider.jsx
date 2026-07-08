import { useState } from "react"
import ThemeContext from "../context/ThemeContext"


const ThemeProvider = ({children}) => {

    const[theme,setTheme]=useState("dark");

    const toggle=()=>{
        setTheme((prev)=>(prev==="dark"?"light":"dark"))
    };


  return (
    <>
    <div>
        <ThemeContext.Provider value={{theme,toggle}} >
            {children}
        </ThemeContext.Provider>
    </div>
    </>
  )
}

export default ThemeProvider