import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Exercice4Styled from './211125revision/Exercice4/styled';
import InfosPays from './211125revision/controle/ex3';
import OnSubmit from './marevisionControle/onsubmit';
import Form from './marevisionControle/form2';
import Pass from './marevisionControle/password';
import App from './controle2202/exercice2ParentChild/App';
import FormEx3 from './controle2202/exerciceformulaire/formex3';
import ExempleAxios from './marevisionControle/API/axios';
import UseEffectTest from './marevisionControle/API/useEffect';

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
