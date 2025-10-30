import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RechercherProduit from './281025/rechercher';
import Formulaire1 from './281025/formulaire';
import { BrowserRouter } from 'react-router-dom';
import ChechBoxTest from './281025/checkbox';
import Compteur from './301025/exempleinc';
import AppCompteur from './301025/APPcompteur';
import Salutation from './301025/form';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 
    <BrowserRouter>
      <Salutation/>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
