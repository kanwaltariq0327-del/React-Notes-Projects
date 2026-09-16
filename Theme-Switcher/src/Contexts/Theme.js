import React, { useContext } from 'react';

const ThemeContext = React.createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

const ThemeProvider  = ThemeContext.Provider;

const useTheme = () => {
    return useContext(ThemeContext)
}

export { ThemeContext, ThemeProvider, useTheme };