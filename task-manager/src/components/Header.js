import React from "react";
import { Nav, Navbar, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
const Header = props => {
  return (
    <div>
      <Navbar color="primary">
        <Nav>
          <NavItem>
            <Link className="nav-link" to="/">{props.title1}</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/add">{props.title2}</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
