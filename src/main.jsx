import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DataProvider from './contexts/DataContext.jsx'
import LanguageProvider from './contexts/LanguageContext.jsx'
import DarkThemeProvider from './contexts/DarkThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <DataProvider>
        <DarkThemeProvider>
          <App />
         </DarkThemeProvider>
      </DataProvider>
    </LanguageProvider>
  </StrictMode>,
)
