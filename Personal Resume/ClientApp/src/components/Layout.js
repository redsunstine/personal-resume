import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { About } from './About';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
      return (

        <div>
              <Container>
                  <About />
              </Container>
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
