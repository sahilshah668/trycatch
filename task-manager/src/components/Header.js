import React from 'react';
import {Nav, Navbar,
    NavItem,
    NavLink} from 'reactstrap' 

const Header = (props) => {
    return (
        <div>
            <Navbar color="primary">
                <Nav>
                    <NavItem>
                        <NavLink>{props.title1}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>{props.title2}</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;
