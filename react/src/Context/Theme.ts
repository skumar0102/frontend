import React, { createContext, useState } from 'react';
import { Theme } from './Enums';

export const ThemeContext = createContext<{
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}>({
    theme: Theme.Light,
    setTheme: () => { },
});





