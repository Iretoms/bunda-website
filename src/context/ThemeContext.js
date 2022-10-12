import { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../style/Theme";

export const ThemeContext = createContext();

const themes = {
  light,
  dark,
};

const ThemeProvide = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={themes[theme]}>
      <ThemeContext.Provider
        value={{
          theme,
          setTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeProvide;
