import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';


const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <ShopContextProvider>
            <App />
        </ShopContextProvider>
    </React.StrictMode>,
    root
);