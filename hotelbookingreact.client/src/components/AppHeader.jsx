import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
class AppHeader extends Component {
    state = {
        isOpen: false
    };
    toggle = this.toggle.bind(this);
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">
                Hotel Booking Web App
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/hotels">Hotels</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/bookings">Bookings</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>;
    }
}
export default AppHeader;