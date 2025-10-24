import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";


export function Projects(){
    const { data } = useContext(DataContext);


    if (!data) return null;

    return(
        <section className="flex justify-center h-370 lg:h-260 xl:h-260 md:h-220 w-full bg-amber-200 dark:bg-[#1b2204]">
            <div className="flex flex-col items-center sm:gap-5 gap-10 sm:p-15 lg:w-10/11 xl:w-8/11 md:w-27/28 w-9/11">

                <h1 className="md:text-5xl text-3xl self-start font-bold text-violet-600 dark:text-amber-200 sm:mb-10 mt-15 sm:mt-0">
                    {data?.projectsSection?.title}
                </h1>

                {data?.projectsSection?.projects.map((item,index) => (
                    <div key={index} className="flex sm:flex-row flex-col bg-white dark:bg-[#2c2929] rounded-lg lg:h-130 sm:h-75 h-158">
                        <div> 
                            <img src={item.projectImage} className="lg:w-140 md:w-55 w-90 lg:h-100 md:h-75 h-50 object-cover sm:rounded-bl-lg sm:rounded-tr-none rounded-tl-lg rounded-tr-lg"/>
                        </div>

                        <div className="flex flex-row items-center md:w-7/9 lg:ml-15 md:ml-5 pl-5 sm:pl-0 pr-5 lg:pr-0">
                            <div className="flex flex-col sm:items-start sm:mt-0 mt-5">
                                <h2 className="sm:text-3xl text-2xl mb-5 font-bold text-violet-600 dark:text-[#d2bcf8]">{item.name}</h2>
                                <p className="mb-5 lg:text-lg/6 lg:mr-7 md:text-sm md:font-semibold text-sm lg:font-normal dark:text-white">{item.text}</p>

                                <div className="flex gap-3 mb-5">
                                    {item.skills.map((items,index) => (
                                        <button key={index} className="bg-violet-600 dark:bg-[#7f6adc] text-white rounded-4xl p-1 sm:pl-4 pl-2 sm:pr-4 pr-2">
                                            {items}
                                        </button>
                                    ))}
                                </div>

                                <nav className="flex flex-row gap-5 underline dark:text-amber-200 lg:text-xl">
                                    <a href={`${item.vercelLink}`}>{item.viewSite}</a>
                                    <a href={`${item.githubLink}`}>{item.github}</a>
                                </nav>
                                
                            </div>
                        </div>

                       
                    </div>
                ))}
                
            </div>
        </section>
    )
}