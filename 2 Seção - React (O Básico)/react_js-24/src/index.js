import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-style.css';
import { Home } from './templates/Home/index.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home tem-uma-prop-aqui='o valor dela' />
  </React.StrictMode>
);

/*Home props exemplo*/
