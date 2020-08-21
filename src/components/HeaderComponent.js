import React, { Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron, NavItem, NavLink, Nav, NavbarToggler, Collapse } from 'reactstrap';

class Header extends Component{
    render() {
        return(
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/" className="mr-auto">Ristornate Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristornate Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. 
                                    Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;