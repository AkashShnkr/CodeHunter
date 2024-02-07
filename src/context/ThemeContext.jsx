"use client";

import {createContext,useEffect,useState } from "react";

export const ThemeContext= createContext();
const getFromLocalStorage = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const value = localStorage.getItem('theme');
      return value || 'light';
    }
    return 'light'; // Fallback value if localStorage is not available
  };
  

export const ThemeContextProvider=({children }) =>{
    const [theme,setTheme] = useState(() =>{
        return getFromLocalStorage();
    });
const toggle=()=>{
    setTheme(theme==="light"?"dark":"light");

}
useEffect(()=>{
    localStorage.setItem("theme",theme);
    },[theme]);

return <ThemeContext.Provider value={{theme,toggle}}>{children}</ThemeContext.Provider>
};