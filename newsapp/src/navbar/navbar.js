import React from 'react';
import "./navbar.css";
import {withRouter,Link} from 'react-router-dom';
import {Navbar,Nav,Form,FormControl,Button} from "react-bootstrap"



function NavBar (){
  return (

    
    <div>
    <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/business">business</Nav.Link>
      <Nav.Link href="/science"><Link to="/science">science</Link></Nav.Link>
      <Nav.Link href="/health"><Link to="/health">health</Link></Nav.Link>
      <Nav.Link href="/entertainment"><Link to="/entertainment">entertainment</Link></Nav.Link>
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