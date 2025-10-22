import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";


export function Skills(){
    const { data } = useContext(DataContext);


    if (!data) return null;

    return(
        <section className="flex justify-center h-85 md:h-105 lg:h-136 w-full md:pb-0 dark:bg-neutral-800">
            <div className="flex flex-col md:flex-row sm:items-center sm:justify-between md:gap-10 gap-5 lg:p-15 lg:w-8/11 md:w-11/13 w-11/13">
                <h1 className="lg:text-5xl md:text-4xl text-3xl lg:w-30 md:self-start self-center font-bold lg:mb-8 sm:mb-10 mb-0 lg:mt-0 mt-10 text-indigo-600 dark:text-lime-200">
                    {data?.skillsSection?.title}
                </h1>
                <div className="flex flex-row sm:items-start justify-between flex-wrap lg:gap-10 md:gap-5 sm:w-9/13">
                    {data?.skillsSection?.skills.map((item, index) => (
                        <div key={index} className="flex flex-row sm:w-6/13 w-5/13 sm:mt-0 mt-5">
                            <img className="lg:w-30 w-12 md:w-24 lg:h-30 md:h-24 h-12 object-cover rounded-sm" src={item.icon} />
                            <p key={index} className="lg:p-4 pl-2 self-center whitespace-nowrap lg:text-2xl dark:text-white text-gray-500">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}