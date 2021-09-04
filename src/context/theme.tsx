import { Theme, ThemeProvider } from "@material-ui/core";

import { useState, createContext } from "react";

import { baseTheme } from "theme/base";
import { themeCreator } from "theme/themeCreator";
import { ThemeSetup } from "types";

// function useMaterialTheme() {
//   const [currentTheme, setTheme] = useState(themeCreator(baseTheme));
//   const handleSetTheme = (theme: ThemeSetup) => setTheme(themeCreator(theme));
//   return { currentTheme, handleSetTheme };
// }

interface ThemeContextInterface {
  currentTheme: Theme;
  handleSetTheme: (theme: ThemeSetup) => void;
}

export const ThemeContext = createContext<ThemeContextInterface>(undefined!);

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setTheme] = useState(themeCreator(baseTheme));
  const handleSetTheme = (theme: ThemeSetup) => setTheme(themeCreator(theme));

  const contextValue: ThemeContextInterface = {
    currentTheme,
    handleSetTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
