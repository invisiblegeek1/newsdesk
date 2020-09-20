import React from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import "./navbar.css";
import {withRouter} from 'react-router-dom';




function NavBar (){
  return (
  
 <div>
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
    
   

    
    </div>
    
    
  )
  

  
}
export default withRouter(NavBar);