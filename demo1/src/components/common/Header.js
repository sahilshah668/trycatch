import React, { Component } from 'react'
import {Nav,Navbar,NavItem,NavLink} from 'reactstrap'
import {Link} from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <Navbar>
                <Nav>
                    <NavItem>
                        <Link className="nav-link" to="/" >{this.props.title1}</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/second" className="nav-link">{this.props.title2}</Link>
                    </NavItem>
                    <NavItem>
                        <NavLink>{this.props.title3}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>{this.props.title4}</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}
