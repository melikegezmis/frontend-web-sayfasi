import { useContext} from "react";
import { DataContext } from "../contexts/DataContext";
import { LanguageContext } from '../contexts/LanguageContext';
import { DarkThemeContext } from '../contexts/DarkThemeContext';


export function Hero() {
  const { data } = useContext(DataContext);
  const { languageChange} = useContext(LanguageContext);
  const { darkToggle, isDark } = useContext(DarkThemeContext);
  

  if (!data) return null;

  return (
    <header className="relative h-170 md:h-120 lg:h-140 xl:h-130 w-full">
      <section className="flex justify-center xl:justify-end h-full w-full">

        <div className="flex justify-center xl:w-7/9 lg:w-1/1 w-9/12 bg-indigo-700 dark:bg-indigo-950 text-white lg:p-4">
          <div className="flex flex-row justify-between lg:1/1 xl:w-9/12 lg:w-12/12 w-7/9">

            <div className="lg:w-9/9 xl:w-9/11 w-7/9">
              <div className="flex flex-col md:items-start xl:pl-30 lg:pl-20 lg:w-7/9 w-8/9">
                <p className="md:text-2xl font-bold lg:mb-22 mb-14 lg:mt-3 mt-7 text-lime-200 self-start">
                  Melike
                </p>

                <h1 className="flex justify-center lg:text-5xl md:text-3xl text-3xl font-bold w-60 md:w-75 lg:w-100 sm:mb-8 lg:mb-25 xl:mb-8 mb-73 text-lime-200 ">
                  {data?.heroSection?.heroTitle}
                </h1>

                <p className="flex lg:text-lg/6 xl:text-xl/6 w-55 lg:w-92 xl:w-120">
                  {data?.heroSection?.heroText}
                </p>

                <nav className="flex flex-row lg:gap-2 gap-3 xl:pt-6 pt-10 self-start">
                  {data.heroSection?.socials.map((item,index) => (
                    <a key={index} href={item.link} 
                      className="flex flex-row justify-start items-start lg:items-center bg-white dark:bg-neutral-800 text-indigo-700 dark:text-white rounded-md lg:p-2 p-1.5 text-sm xl:text-lg w-22 lg:w-30 dark:border-white dark:border-1">
                    <img src={item.logo} className="w-6 lg:w-9 pr-1 lg:pr-2"/>
                    { " " + item.alt_text}
                  </a>
                  ))}
                </nav>
              </div>
            </div>

            <button
              onClick={languageChange}
              className="relative md:left-10 lg:left-0 xl:left-25 sm:right-0 lg:right-10 xl:right-0 flex self-start text-lime-200 cursor-pointer sm:whitespace-nowrap text-[12px] md:text-sm mt-7 md:mt-7.5 lg:mt-3"
            >
              {data?.heroSection?.heroLanguage}
            </button>
          </div>
        </div>

        <div className="w-1/3 sm:w-1/3 lg:w-3/7 xl:w-1/3 bg-lime-200 dark:bg-[#212118]">
          <label className="inline-flex items-center relative cursor-pointer md:ml-5 mt-7 ml-1">
            <input
              type="checkbox"
              onChange={darkToggle}
              checked={!isDark}
              className="sr-only peer"
            />
            
            <div className="sm:w-11 w-9 h-6 bg-gray-400 dark:bg-gray-950 peer-checked:bg-blue-300 rounded-full transition-all duration-300"></div>
            
            <div className="absolute left-1 sm:top-1 top-2 bg-yellow-200 w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-3 sm:peer-checked:translate-x-5"></div>

            <div className="absolute left-2 sm:top-1 top-3/11 bg-gray-950 w-3.5 h-3.5 peer-checked:w-0 peer-checked:h-0 rounded-full transition-transform duration-300 peer-checked:translate-x-4"></div>
          
            <span className="sm:ml-3 ml-1 text-indigo-700 dark:text-white text-[11px] md:text-sm w-10 sm:w-30">
              {isDark ? data?.heroSection?.heroThemeLight  : data?.heroSection?.heroThemeDark}
            </span>
          </label>

        </div>
      </section>

      <img
        src={data?.heroSection?.heroImage}
        alt="HeroResim"
        className="absolute sm:top-24 lg:top-30 xl:top-24 top-53 sm:left-3/4 lg:left-4/5 xl:left-3/4 left-1/2 sm:-translate-x-3/4 -translate-x-2/4 w-11/13 sm:w-84 sm:h-84 lg:w-90 lg:h-90 xl:w-84 xl:h-84 sm:object-cover rounded-2xl"
      />
    </header>
  );
}
