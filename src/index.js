// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import { AppProvider } from './useAppContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>,
);
