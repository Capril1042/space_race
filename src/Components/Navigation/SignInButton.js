import React, { Component } from 'react';
import { NavItem, Nav, NavLink} from 'reactstrap';
import './navigation.css';

class SignInButton extends Component {
    render() {
        return(
            <Nav>
            <NavItem>
                <NavLink href="/signin"> Sign In </NavLink> 
            </NavItem>
            </Nav>
        );
    }
}
export default SignInButton;''