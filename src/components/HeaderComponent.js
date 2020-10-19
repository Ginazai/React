import React, { Component } from 'react';
import { Navbar, Jumbotron, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem }
from 'reactstrap';
import { Router, NavLink } from 'react-router-dom';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      isNavOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
    this.setState({isNavOpen: !this.state.isNavOpen});
  }

  render(){
    return(
      <React.Fragment>
        <div>
          <Navbar dark expand="md">
            <div className="container-fluid">
              <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand href="/"><img src="assets/images/logo.png" height="30"
                width="41" alt="Ristorante Con Fusion"/></NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-md"> Home</span>
                  </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-md"> About Us</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-md"> Menu</span>
                </NavLink>
              </NavItem>
              </Nav>
            </Collapse>
            </div>
          </Navbar>
          <Jumbotron>
            <div className="container-fluid">
              <div className="row row-header">
                <div className="col-12 col-sm-6">
                <h1>Ristorante con Fusion</h1>
                    <p>We take inspiration from the World's best cuisines, and
                     create a unique fusion experience. Our lipsmacking creations
                     will tickle your culinary senses!</p>
                </div>
              </div>
            </div>
          </Jumbotron>
        </div>
      </React.Fragment>
    );
  }
}
export default Header;
