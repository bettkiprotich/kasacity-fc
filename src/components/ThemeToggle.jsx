import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed top-4 right-4 z-50
        p-2 rounded-full
        bg-white/80 dark:bg-black/60
        border border-black/10 dark:border-white/20
        backdrop-blur
        hover:scale-110 transition
      "
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-slate-800" />
      )}
    </button>
  );
}
