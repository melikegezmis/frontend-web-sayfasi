import {createContext, useState, useEffect} from "react";
import {setItem, getItem} from "../localStorage/localStorage";

export const DarkThemeContext = createContext();


const DarkThemeProvider = ({children}) => { 
    const theme = getItem("theme");

    const [isDark, setIsDark] = useState(() => {
        if(theme !== null) {
            return theme === "dark" ? true : false;
        } else {
            return false;
        }
    });
    
    const darkToggle = () => {
        setIsDark((prev) => !prev);
    };
    
    useEffect(() => {
        if(isDark) { 
            document.documentElement.classList.add("dark");
            setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark");
            setItem("theme", "light")
        }
    }, [isDark]);
    

    return(
        <DarkThemeContext.Provider value ={{isDark, darkToggle}}>
            {children}
        </DarkThemeContext.Provider>
    )
}

export default DarkThemeProvider;