import React from 'react';
import {Nav,Navbar} from 'react-bootstrap'
function Navi()
{
    return(
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
    </Nav>
    <Nav>
    <Nav.Link href="/Ieee_portfolio/">
       HOME
      </Nav.Link>
      <Nav.Link  href="/Ieee_portfolio/Contact">
       CONTACT
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
    )
}
export default Navi