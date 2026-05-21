import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from "./context/AuthProvider";
import { AppProvider } from "./context/AppProvider";

import './styles/index.css'
import './styles/animations.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <AppProvider>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </AppProvider>
  </BrowserRouter>
  </React.StrictMode>
)