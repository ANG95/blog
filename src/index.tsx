import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.getElementById('root');
if (!container) throw new Error('No se encontró el elemento root en index.html');

// API de React 18
const root = createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Para PWA (opcional):
// serviceWorkerRegistration.register();
