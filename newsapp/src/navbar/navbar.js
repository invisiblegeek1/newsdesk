import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./navbar.css";
import { withRouter, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar-container">
      <Navbar
        bg="primary"
        variant="dark"
        fixed="top"
        expand="lg"
        className="mb-3"
      >
        <NavLink className="navbar-brand" to="/" exact>
        NewsDesk
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/business">
            Business
          </NavLink>
          <NavLink className="nav-link" to="/entertainment">
            Entertainment
          </NavLink>
          <NavLink className="nav-link" to="/health">
            Health
          </NavLink>
          <NavLink className="nav-link" to="/science">
            Science
          </NavLink>
          <NavLink className="nav-link" to="/sports">
            Sports
          </NavLink>
          <NavLink className="nav-link" to="/technology">
            Technology
          </NavLink>
        </Nav>
        <Form
          inline
         
        >
          <FormControl
            required
            type="text"
            placeholder="Search"
            className="mr-sm-2"
        
          />
          <Button type="submit" className="my-2 my-sm-0">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default withRouter(NavBar);
