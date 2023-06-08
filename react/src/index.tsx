import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContext } from './Context/Theme';
import { Theme } from './Context/Enums';

const RootComponent = () => {
  const [theme, setTheme] = useState(Theme.Light);
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <App />
        </ThemeContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById('root'));

reportWebVitals();
