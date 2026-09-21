import React, { useState } from 'react'
import MainContent from './MainContent'
import SubContent from './SubContent'
import ThemeContext from './ThemeContext';

const ThemeTest = () => {
    const [theme, setTheme] = useState("white");

    const toggleTheme = () => {
        if (theme === "white")
            setTheme("black")
        else
            setTheme("white")
    }
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <MainContent />
            <SubContent />
        </ThemeContext.Provider>
    )
}

export default ThemeTest