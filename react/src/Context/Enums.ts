import english from '../Language/english.json'
export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export enum Lang {
  Eng = 'English',
  // Hin = 'Hindi'
}

type langSelect = {
  [key in Lang]: {
    Language: Object;
    data: Object;
  }
}

type themecolors = {
  [key in Theme]: {
    Theme: string;
    Nav: string;
    Bg: string;
    textColor: string;
    BgLogin: string;
    BgData: string;
  }
}

export const ThemesColors: themecolors = {
  [Theme.Light]: {
    Theme: 'light',
    Nav: '#9c27b0',
    Bg: '#fff',
    textColor: '#fff',
    BgLogin: '#fff',
    BgData: 'white'
  },
  [Theme.Dark]: {
    Theme: 'dark',
    Nav: '#1F1B24',
    Bg: '#121212',
    textColor: '#fff',
    BgLogin: 'lightgrey',
    BgData: 'lightgrey'
  }
}
export const LangSelect: langSelect = {
  [Lang.Eng]: {
    Language: 'english',
    data: english
  },
  // [Lang.Hin]: {
  //   Language: 'light'
  // }
}

