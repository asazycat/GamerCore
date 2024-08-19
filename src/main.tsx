import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import './index3.css'
import {LoginContextProvider} from "../context/LoginContext.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginContextProvider>
     <BrowserRouter>
    <App />
    </BrowserRouter>
    </LoginContextProvider>
  </React.StrictMode>,
)
