import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './css/input.css'
import Navbar from './components/navbar/Navbar';
import MenuInferior from './components/bottomMenu/BottomMenu';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className='w-full h-auto min-h-screen font-exo'>
    <Navbar currentLocal='Local N° 147' role='Administrador' otherAssignedLocals={[]}/>
      <App />
      <MenuInferior/>
    </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
