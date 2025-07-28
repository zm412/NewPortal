import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    //const [theme, setTheme] = useState('green-onion-theme');
    const [theme, setTheme] = useState('dusk-theme');

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const changeTheme = (newTheme) => {
        setTheme((prev) =>
            newTheme ? newTheme : 'acid-1-theme' 
        );
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
