import {createContext, useState} from "react";
import {setItem, getItem} from "../localStorage/localStorage";


export const LanguageContext = createContext();


const LanguageProvider = ({children}) => { 
    const lang = getItem("lang");

    const [language, setLanguage] = useState(() => {
        return lang !== null ? lang : "tr"
    });

    function languageChange() {
        if (language === "tr") { 
            setLanguage("en");
            setItem("lang", "en");
        } else {
            setLanguage("tr");
            setItem("lang", "tr");
        }
    }


    return(
        <LanguageContext.Provider value ={{language, languageChange}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;