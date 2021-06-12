import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
      return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                <Container>
            <NavbarBrand tag={Link} to="/">Personal Resume</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/jobs"><i class="fas fa-user-tie icons"></i>Tech Related Experience</NavLink>
                </NavItem>
                              <NavItem>
                                  <NavLink tag={Link} className="text-dark" to="/otherjobs"><i class="fas fa-user-tie icons"></i>Other Experience</NavLink>
                              </NavItem>
                <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/education"><i class="fas fa-school icons"></i>Education</NavLink>
                </NavItem>
                <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/projects"><i class="fas fa-briefcase icons"></i>Projects</NavLink>
                </NavItem>
              </ul>
                        </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
