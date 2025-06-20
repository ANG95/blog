import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';

const container = document.getElementById('root');
if (!container) throw new Error('No se encontró el elemento root en index.html');

const root = createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);