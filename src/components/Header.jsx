/* eslint-disable prettier/prettier */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/self-closing-comp */

import { useEffect, useState } from "react";
import IconLuna from "./icons/IconLuna";
import IconSol from "./icons/IconSol";

const initialDarkMode = localStorage.getItem("theme") === "dark";
const Header = () => {
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    if (darkMode) {
      // True: es dark
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="container mx-auto px-4 pt-8 md:max-w-xl">
      <div className="flex justify-between ">
        <h1 className="uppercase text-white text-xl font-bold tracking-[0.2em]">
          Todo
        </h1>
        <button type="button" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IconSol /> : <IconLuna />}
        </button>
      </div>
    </header>
  );
};

export default Header;
