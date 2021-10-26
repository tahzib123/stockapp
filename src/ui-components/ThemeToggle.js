import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import { FaSun, FaMoon} from "react-icons/fa";

const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    
    if(theme === 'dark'){
        return <button onClick = {handleThemeChange}>
                <FaSun className = "text-gray-500 text-2xl"/>
            </button>
    }else{
        return <button onClick = {handleThemeChange}><FaMoon className = "text-gray-500 text-2xl"/></button>
    }
    
}

export default ThemeToggle
