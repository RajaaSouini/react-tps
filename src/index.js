import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Resultats from './seance6/Ex5';
import App from './TpImage_recherchePrix/App';

const etudiants = [{nom : "souini", option: "dd" , note: 20 , status :"admis"},
  {nom : "souini", option: "dd" , note: 20 , status :"admis"},{nom : "souini", option: "dd" , note: 20 , status :"admis"}];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
