import { useEffect, useState } from "react"
import Moon from "./icons/Moon"
import Sun from "./icons/Sun"

const inicialStateDarkMode = localStorage.getItem('theme') === 'dark'

const Header = () =>{

  const [darkMode, setDarkMode] = useState(inicialStateDarkMode)

  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark')
    }else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const handleToggleTheme = () => {

  }

    return (
        <header className="container mx-auto px-5">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl uppercase tracking-widest text-very-light-gray my-10 dark:text-light-grayish-blue">
            T o d o</h1>
            <button onClick={() => setDarkMode(!darkMode)}>
              {
                darkMode ? <Sun /> : <Moon />
              }
            </button>
        </div>
      
      </header>
    )
}
export default Header


