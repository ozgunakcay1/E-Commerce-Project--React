import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-toastify/dist/ReactToastify.css';
import { ProductProvider } from './context/productContext.jsx';
import { BasketProvider } from './context/basketContext.jsx';
import { ToastContainer, toast } from 'react-toastify';




createRoot(document.getElementById('root')).render(
  <ProductProvider>
   <BasketProvider>
   <App />
   <ToastContainer autoClose={1000}/>
   </BasketProvider>
  </ProductProvider>
);
