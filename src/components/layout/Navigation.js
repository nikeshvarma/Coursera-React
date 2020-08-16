import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar dark color="dark">
                    <div className="container-fluid">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default Navigation