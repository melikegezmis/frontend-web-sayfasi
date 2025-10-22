import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Profile } from './components/Profile';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { DataContext } from "./contexts/DataContext";
import { LanguageContext } from './contexts/LanguageContext';
import { DarkThemeContext } from './contexts/DarkThemeContext';
import { useContext, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const { language } = useContext(LanguageContext);
  const { isDark } = useContext(DarkThemeContext);
  const { loading, data } = useContext(DataContext);

  const themeToast = () => toast(isDark ? data?.heroSection?.heroToastDark : data?.heroSection?.heroToastLight, {
        position: "top-left",
        theme: isDark ? "dark" : "light",
        autoClose: 5000,
    });

    const languageToast = () => toast.info(data?.heroSection?.heroToastLanguage, {
        position: "top-left",
        theme: "colored",
        autoClose: 5000,
    });


  if (loading) {
    return <div className='flex h-150 justify-center items-center text-5xl'>Yükleniyor...</div>; 
  }

   useEffect(() => {
        languageToast();
    }, [language]);

    useEffect(() => {
        themeToast();
    }, [isDark]);

  return (
    <>
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App;
