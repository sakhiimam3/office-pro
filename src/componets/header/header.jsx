import React from 'react'
import {Navbar,Nav,Container}  from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">NFT'S</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="mx-auto gap-3">
          <NavLink  to="/home" className='fs-5 text-dark  text-decoration-none'>Home </NavLink>
            <NavLink  to="/project1" className='fs-5 text-dark text-decoration-none' >Project </NavLink>
            
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header