import React, { createContext } from 'react';

import { Lang } from './Enums'

export const LangContext = createContext<{
    lang: Object;
    setLanguage: React.Dispatch<React.SetStateAction<Lang>>;
}>({
    lang: Lang.Eng,
    setLanguage: () => { },
})