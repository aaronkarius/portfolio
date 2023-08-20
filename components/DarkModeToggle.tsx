"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      className="absolute z-50 w-10 h-10 right-7 bottom-7"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "dark" ? <FaSun size={40} /> : <FaMoon size={40} />}
    </button>
  );
};

export default DarkModeButton;
