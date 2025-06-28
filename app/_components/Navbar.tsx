"use client";

import { useEffect, useState } from "react";


const Navbar = () => {

     const [darkMode, setDarkMode] = useState(false);
   
    useEffect(() => {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        setDarkMode(true);
      }
    }, []);
  
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, [darkMode]);

  return (
    <div>
       <button className="btn btn-primary" onClick={()=> setDarkMode(!darkMode)}>Toggle</button>
    </div>
  );
};

export default Navbar;
