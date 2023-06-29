import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContext } from './Context/Theme';
import { LangContext } from './Context/Language';
import { Lang, LangSelect, Theme } from './Context/Enums';
import { QueryClientProvider, QueryClient } from "react-query"
const queryClient = new QueryClient();

const RootComponent = () => {
  const [language, setLanguage] = useState(Lang.Eng);
  const [theme, setTheme] = useState(Theme.Light);
  let data: any
  //implement switch case here instead of if condition as per language and inehrit the object value in data
  if (language === Lang.Eng) {
    data = LangSelect.English.data
  }else if(language === Lang.Hin){
    data = LangSelect.Hindi.data
  }
  return (
    <React.StrictMode>
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <LangContext.Provider value={{ lang: language, setLanguage, data }}>
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <App />
          </ThemeContext.Provider>
        </LangContext.Provider>
      </QueryClientProvider>

      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById('root'));

reportWebVitals();
