import { useContext} from "react";
import { DataContext } from "../contexts/DataContext";
import { DarkThemeContext } from '../contexts/DarkThemeContext';


export function Footer(){
    const { data } = useContext(DataContext);
    const { isDark } = useContext(DarkThemeContext);


    if (!data) return null;

    return(
        <footer className="h-110 sm:h-120 w-full dark:bg-neutral-800">
            <div className="flex flex-row justify-center">
                <div className="flex flex-col items-center justify-center gap-10">
                    <h1 className="sm:text-5xl text-3xl font-bold text-indigo-600 dark:text-[#937aff] mt-15">
                        {data?.footerSection?.footerTitle}
                    </h1>

                    <p className="sm:text-2xl text-xl w-8/11 text-center dark:text-white">{data?.footerSection?.footerText}</p>

                    <p className="sm:text-2xl text-xl text-indigo-600 dark:text-[#937aff] underline">{data?.footerSection?.email}</p>

                    <div className="flex flex-row gap-5">
                       <div className="flex flex-row gap-5">
                            <div className="flex flex-row gap-5"> 
                                {isDark 
                                ? data?.footerSection?.iconsWhite.map((item, index) => ( <img className="sm:w-10 w-7" src={item} key={index}/> )) 
                                : data?.footerSection?.icons.map((item, index) => ( <img className="sm:w-10 w-7" src={item} key={index}/> ))} 
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}