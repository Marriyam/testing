import React from "react";
import {Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {AiOutlineUserAdd} from 'react-icons/ai';
import {HiHome} from 'react-icons/hi';
import {RxUpdate} from 'react-icons/rx';
import {Link, useNavigate} from "react-router-dom";
import './header.css';


function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const Navigate = useNavigate();
  function logOut()
  {
    localStorage.clear();
    Navigate('/register');
  
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">  LUMS Team</Navbar.Brand>
        <Nav className="me-auto navbar-wrapper">
          {
            localStorage.getItem("user-info") ?
            <>
          <NavItem> <Link to="/"><HiHome style={{color: 'white', fontSize: '25px'}}/></Link> </NavItem>
          <NavItem> <Link to="/addmember"><AiOutlineUserAdd style={{color: 'white', fontSize: '25px'}}/></Link> </NavItem>
          <NavItem> <Link to="/update"><RxUpdate style={{color: 'white', fontSize: '20px'}}/></Link></NavItem>
            </>
            :
            <>
          <NavItem><Link to="/Login">Login</Link></NavItem>
          <NavItem><Link to="/register">Register</Link></NavItem>
            </>
          }

        </Nav>
        {localStorage.getItem("user-info") ?
        <Nav className="Logout">
          <NavDropdown title={user && user.name}>
            <NavDropdown.Item  onClick={logOut}> logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        :null}
      </Navbar>{" "}
    </div>
  );
}

export default Header;
