import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContext } from './Context/Theme';
import { LangContext } from './Context/Language';
import { Lang, Theme } from './Context/Enums';

const RootComponent = () => {
  const [theme, setTheme] = useState(Theme.Light);
  const [language, setLanguage] = useState(Lang.Eng)
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <LangContext.Provider value={{ language, setLanguage }}>
            <App />
          </LangContext.Provider>
        </ThemeContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById('root'));

reportWebVitals();
