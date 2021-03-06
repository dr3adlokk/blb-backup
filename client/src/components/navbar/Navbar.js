import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class FixedNavbarExample extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
          isWideEnough: false
      };
  this.onClick = this.onClick.bind(this);
}

onClick(){
  this.setState({
      collapse: !this.state.collapse,
    });
}


render() {

    return (
          <div>
          <Router>
            <Navbar color="black" dark expand="md" scrolling fixed="top">
                <NavbarBrand href="/">
                    <strong>BRIGHT LIGHTS BASEMENT</strong>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick={ this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left>
                      <NavItem active>
                          <NavLink to="#">HOME</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="#">EPISODES</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="#">STUDIO BLOG</NavLink>
                      </NavItem>
                    </NavbarNav>
                    <NavbarNav right>
                      <NavItem>
                        <NavLink to="#"><Fa icon="facebook"/></NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="#"><Fa icon="twitter"/></NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="#"><Fa icon="instagram"/></NavLink>
                      </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        </Router>
      </div>
    );
  }
}

export default FixedNavbarExample;