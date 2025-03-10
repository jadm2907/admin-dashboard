import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia la importación
import App from './App';
import './styles/globalStyles.css';

// Crea un root usando createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);