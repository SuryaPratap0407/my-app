import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Product from './components/product/Product';
import Products from './components/products/Products';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Aboutus from './components/aboutus/Aboutus';
import Contactus from './components/contactus/Contactus';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Header from './components/header/Header';

function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
       <Route path='/' element={<Home/>} />
      <Route path='aboutus' element={<Aboutus/>} />
      <Route path='contactus' element={<Contactus/>} />
      <Route path='product' element={<Products/>} />
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>} />
      <Route path='cart' element={<Cart/>} />
      <Route path='*' element={<h2> Page not Found error-code:"404"</h2>} />
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
  );
}

export default App;
