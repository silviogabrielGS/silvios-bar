import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Router, createBrowserRouter , RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Cardapio from './pages/Cardapio.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
  }, 
  {
    path: '/Cardapio',
    element : <Cardapio></Cardapio>,
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
