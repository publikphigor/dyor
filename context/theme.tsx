import { createContext, useContext, useState } from "react";

type ThemeProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: string;
  themeToggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({ children }: ThemeProps) {
  const [theme, setTheme] = useState<string | undefined>("dark");

  function themeToggle() {
    if (theme === "dark") setTheme("light");
    if (theme === "light") setTheme("dark");

    document.documentElement.classList.toggle("dark");
  }

  return (
    <ThemeContext.Provider value={{ theme, themeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
