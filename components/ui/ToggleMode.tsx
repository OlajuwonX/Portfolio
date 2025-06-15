'use client';

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center h-7 w-15  rounded-full border bg-[#c3dae8d3] dark:bg-[#1c182bd3] border-red-400/[0.7] transition-all duration-300 ease-in-out px-1 shadow-inner"
    >
      
      <Sun
        className={`z-10 h-5 w-5 text-yellow-500 transition-opacity duration-300 ${
          theme === "dark" ? "opacity-10" : "opacity-100"
        }`}
      />
      <Moon
        className={`z-10 h-5 w-5 text-gray-600 transition-opacity duration-300 ml-auto ${
          theme === "dark" ? "opacity-100" : "opacity-10"
        }`}
      />
    </button>
  );
}
