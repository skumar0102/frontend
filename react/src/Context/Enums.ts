export enum Theme {
  Light = 'light',
  Dark = 'dark'
}


type themecolors = {
  [key in Theme]:{
    Theme : string;
    Nav:string;
    Bg:string;
    textColor:string
  }
}

export const ThemesColors : themecolors = {
  [Theme.Light]:{
    Theme:'light',
    Nav:'#9c27b0',
    Bg:'#fff',
    textColor:'#fff'
  },
  [Theme.Dark]:{
    Theme:'dark',
    Nav:'#1F1B24',
    Bg:'#121212',
    textColor:'#fff'

  }
}