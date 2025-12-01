import {createContext, useState, useEffect, useContext} from "react";
import { LanguageContext } from '../contexts/LanguageContext';
import { datalar } from "/src/data";
import axios from "axios";


export const DataContext = createContext();


const DataProvider = ({children}) => { 
    const { language } = useContext(LanguageContext);

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        axios.post("https://reqres.in/api/users", datalar, {
            headers: {
                "x-api-key": "reqres_41be704f08354b7bb154fda3a2b2faa0",
            }
        })
        .then((res) => {
            language === "tr" ? setData(res.data.tr) : setData(res.data.en)
        })
        .catch((err) => console.log(err.message))
        .finally(() => {
            setLoading(false); 
        });
    }, [language])


    return(
        <DataContext.Provider value ={{data, loading}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;

