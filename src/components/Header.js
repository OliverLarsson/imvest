import React from 'react';
//import logo from '../logo.svg';
//<NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}>
  //<img src={logo} alt="logo" className="position-relative img-fluid" />
//</NavbarBrand>

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';


const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';
const logo = '../logo.png'

const Header = () => (
  <header>
    <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>
    
      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">
        
          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>
              
              <NavItem className="d-flex align-items-center">
                <Link to="/"><NavLink className="font-weight-bold" >Home</NavLink></Link>
              </NavItem>
              
              <NavItem className="d-flex align-items-center">
              <Link to="/invest"><NavLink className="font-weight-bold" >Invest</NavLink></Link>
              </NavItem>

              <NavItem className="d-flex align-items-center">
              <Link to="/funding"><NavLink className="font-weight-bold" >Funding</NavLink></Link>
              </NavItem>

              <Form style={{"padding-left": "0.5rem"}}>
                <Input type="search" className="mr-3" placeholder="Search Companies" />
              </Form>
              
            </Nav>
          </Col>
          
          <Col className="d-flex justify-content-xs-start justify-content-lg-center">
            <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}>
              <img src={logo} alt="logo" className="position-relative img-fluid" />
            </NavbarBrand>
          </Col>

          <Col className="d-none d-lg-flex justify-content-end">
              <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                <DropdownToggle className="font-weight-bold" nav caret><img src={AVATAR} alt="avatar" className="img-fluid rounded-circle" style={{ width: 36 }} /></DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="font-weight-bold text-secondary text-uppercase" header disabled>User Options</DropdownItem>
                  <DropdownItem divider />
                  <Link to="/signin"><DropdownItem>Sign In</DropdownItem></Link> 
                  <Link to="/signup"><DropdownItem>Sign Up</DropdownItem></Link>
                  <DropdownItem>Terms of Service</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          </Col>

        </Row>
      </Container>
      
    </Navbar>
  </header>
);

export default Header; 