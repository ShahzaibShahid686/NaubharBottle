import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="text-xl">
      {theme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
}
