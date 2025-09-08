import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useTheme(defaultTheme = "light") {
  const [theme, setTheme] = useLocalStorage("theme", defaultTheme);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
export default useTheme