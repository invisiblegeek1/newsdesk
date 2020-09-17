import React from 'react';
import "./navbar.css";
import {withRouter,Link} from 'react-router-dom';
import {Navbar,Nav,Form,FormControl,Button} from "react-bootstrap"



function NavBar (){
  return (

    <header>
    <div>
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/"><Link to="/">Home</Link></Nav.Link>
      <Nav.Link href="/business"><Link to="/">business</Link></Nav.Link>
      <Nav.Link href="/science"><Link to="/">science</Link></Nav.Link>
      <Nav.Link href="/health"><Link to="/">health</Link></Nav.Link>
      <Nav.Link href="/entertainment"><Link to="/">entertainment</Link></Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
    
   

    
    </div>
    </header>
    

  )

  
}
export default withRouter(NavBar);