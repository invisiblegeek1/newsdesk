import React from "react";
import {
  Navbar,
  Nav,
  NavLink,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./navbar.css";
import { withRouter, Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
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
              <Link to="/">Home</Link>
            </NavLink>
            <NavLink className="nav-link" to="/business">
              <Link to="/business">Business</Link>
            </NavLink>
            <NavLink className="nav-link" to="/entertainment">
              <Link to="/entertainment">Entertainment</Link>
            </NavLink>
            <NavLink className="nav-link" to="/health">
              <Link to="/health">Health</Link>
            </NavLink>
            <NavLink className="nav-link" to="/science">
              <Link to="/science">Science</Link>
            </NavLink>
            <NavLink className="nav-link" to="/sports">
              <Link to="/sports">Sports</Link>
            </NavLink>
            <NavLink className="nav-link" to="/technology">
              <Link to="/technology">Technology</Link>{" "}
            </NavLink>
          </Nav>
          <Form inline>
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
