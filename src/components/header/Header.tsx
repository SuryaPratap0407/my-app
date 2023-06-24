import React from 'react'
import "./header.css"
import {Link} from 'react-router-dom'
import { Nav, Container,Navbar, } from 'react-bootstrap'
import {AiOutlineLogin, AiOutlineShoppingCart } from 'react-icons/ai'
import {BsPersonPlusFill } from 'react-icons/bs'

const Header=() => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="bg-primary m-0 p-0">
    <Container>
    <Link to="/"  className='fw-bold fs-4  text-light nav-link' >E-commerce </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto ms-5 ">
         <Link to="/" className='text-light nav-link'>Home</Link>
        <Link to="/aboutus" className='text-light nav-link'>About US</Link>
        <Link to="/contactus"  className='text-light nav-link'>Contact Us</Link>
        <Link to="/product"  className='text-light nav-link'>Products</Link>
          
        </Nav>
        <Nav>
          <Link to="/login" className='buttons nav-link btn btn-outline-dark text-light nav-link m-2 p-1'>
          <AiOutlineLogin/>Login
        </Link>
          <Link to="/register" className='buttons nav-link btn btn-outline-dark text-light m-2 p-1'>
         <BsPersonPlusFill /> Register
         </Link>
          <Link  to="/cart" className='buttons nav-link btn btn-outline-dark text-light m-2 p-1'>
       
         <AiOutlineShoppingCart className='me-1'/>Cart (0)
       
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default Header