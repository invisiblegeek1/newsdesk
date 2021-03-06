import React, { useState } from "react";
import Switch from '@material-ui/core/Switch';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./navbar.css";

import { withRouter, NavLink } from "react-router-dom";

function NavBar(props) {
  const [input, stateHandler] = useState("")
  

 

  return (
    <div className="navbar-container">
      <Navbar

        fixed="top"
        expand="lg"
        variant={props.State.varient}
        className="mb-3"
        style={
          {
            backgroundColor: props.State.navBarColor,
            color: "white",

          }
        }
      >
        <NavLink className="navbar-brand" to="/" exact>
          NewsDesk
      </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

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
          
            <Switch
              checked={props.State.checked}
              onChange={props.onStateChange}
              name="checked"
              color='primary'
              
            />

          </Nav>

          <Form
            inline
            onSubmit={(e) => {
              e.preventDefault();
              props.history.push(`/search/${input}`);
            }}

          >
            <FormControl
              required
              type="text"
              placeholder="Search"
              className="mr-sm-2"

              onChange={(e) => stateHandler(e.target.value)}

            />
            <Button variant="outline-primary" type="submit" className="my-2 my-sm-0">
              Search
          </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default withRouter(NavBar);
