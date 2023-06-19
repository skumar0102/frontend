import React, { createContext } from 'react';
import { Lang } from './Enums'

export const LangContext = createContext<{
    lang: Lang;
    setLanguage: React.Dispatch<React.SetStateAction<Lang>>;
    data: object;
  }>({
    lang: Lang.Eng,
    setLanguage: () => {},
    data: {},
  });