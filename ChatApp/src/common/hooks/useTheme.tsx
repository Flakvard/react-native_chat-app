import React from 'react'

import apptheme, {ITheme} from '../constants/theme';

interface IThemeHook{
    children?: React.ReactNode;
    theme?: ITheme
};

export const ThemeContext = React.createContext({
    theme: apptheme
});

export const ThemeProvider = ({children, theme = apptheme }: IThemeHook ) => {
    return (
        <ThemeContext.Provider value={{theme}}>
            {children}
        </ThemeContext.Provider>

    )
}

export default function useTheme() : ITheme {
    const {theme} = React.useContext(ThemeContext);
    return theme;
}