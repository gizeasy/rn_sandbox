import React, { createContext, useContext, useState } from 'react';
import { withNaming } from 'bem-react-native';

export const GLOBAL_THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
};

export const GlobalThemeContext = createContext({});

export function GlobalThemeProvider(props) {
    const [globalTheme, setGlobalTheme] = useState(GLOBAL_THEMES.LIGHT);

    const s = withNaming({
        n: `App_${globalTheme}-`,
        e: '-',
        m: '_',
        v: '_',
        cv: '-',
    });

    return (
        <GlobalThemeContext.Provider value={{ globalTheme, setGlobalTheme, s }}>
            {props.children}
        </GlobalThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(GlobalThemeContext);
}

export function widthThemeHOC(Component) {
    return function globalThemeProvider(props) {
        return <Component {...useTheme()} {...props} />;
    };
}
