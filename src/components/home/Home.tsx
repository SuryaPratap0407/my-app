import React from 'react'
import "./home.css"
import Crousel from '../crousel/Crousel';
import Products from '../products/Products';
import Footer from '../footer/Footer';
const Home = () => {
  return (
   <>
   <Crousel />
   <Products />
   <Footer />
   
   </>
  )
}

export default Home