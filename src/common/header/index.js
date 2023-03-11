import React, { Component } from "react";
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button} from './style';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className="left active">Home</NavItem>
          <NavItem className="left">Download App</NavItem>
          <NavSearch></NavSearch>
          <NavItem className="right">Aa</NavItem>
          <NavItem className="right">Login</NavItem>
        </Nav>
        <Addition>
          <Button>Register</Button>
          <Button>Post</Button>
        </Addition>
      </HeaderWrapper>
      )
  }
}

export default Header;