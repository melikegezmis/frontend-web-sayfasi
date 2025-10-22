import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";


export function Profile(){
    const { data } = useContext(DataContext);


    if (!data) return null;

    return(
        <section className="flex flex-row xl:items-center items-start justify-center h-235 md:h-250 lg:h-140 xl:h-130 w-full bg-indigo-600 dark:bg-indigo-950">
            <div className="flex flex-col items-center lg:p-15 md:mb-10 lg:w-10/11 xl:w-8/11 w-9/11 lg:mt-0 mt-17">

                <h1 className="md:text-5xl text-3xl mb-5 lg:mb-10 xl:mb-5 self-start lg:self-start md:self-center font-bold text-lime-200">
                    {data?.profileSection?.title}
                </h1>

                <div className="flex flex-col justify-center lg:justify-center md:items-center self-end lg:flex-row lg:gap-5 xl:gap-5 md:gap-12 gap-12 mt-7 lg:mt-0">

                    <div className="flex flex-col justify-between lg:w-4/12 md:w-11/11 xl:w-5/11 w-10/11">
                        <h2 className="md:text-3xl xl:text-3xl text-2xl text-white mb-4 lg:mb-10 md:mb-8">
                            {data?.profileSection?.informationTitle}
                        </h2>
                        {data?.profileSection?.information.map((item, index) => (
                            <div key={index} className="flex flex-row justify-between gap-0 lg:gap-5">
                                <p className="text-md md:text-lg lg:w-35 md:w-35 w-29 text-lime-200 font-semibold">{item.name}</p>
                                <p className="text-md md:text-lg lg:w-40 md:w-70 w-6/11 text-white">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <img src={data?.profileSection?.profileImage} className="lg:w-5/18 xl:w-5/18 w-11/11 md:h-72 lg:h-75 xl:h-62 object-cover rounded-sm"/>

                    <div className="flex flex-col gap-5 lg:w-6/11 xl:w-6/12">
                        <h2 className="md:text-3xl text-2xl text-white">
                            {data?.profileSection?.aboutMeTitle}
                        </h2>
                        <article className="text-md md:text-lg text-white lg:w-68 xl:w-80">
                            {data?.profileSection?.aboutMeText}
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}