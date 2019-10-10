import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  height: 100px;
  background: ${props => (props.primary ? "black" : "white")};
  color: ${props => (props.primary ? "white" : "black")};
  border: 0;
  margin: 5px 10px;
  transition: 0.2s ease-in;
  border: ${props =>
    props.primary ? "6px solid black" : "2px solid white"};
  &:hover {
    background: ${props => (props.primary ? "#2a2223" : "#fff")};
    color: ${props => (props.primary ? "#fff" : "#2a2223")};
    border: ${props =>
      props.primary ? "2px solid #2a2223" : "2px solid #99f3eb"};
  }
`;

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  
  render(props) {

    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Astronomy Photo of the Day!</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
              <Button primary as="a" href="/" value="2019-10-09" onClick={() => props.select("2019-10-09")}>2019-10-09</Button>
              </NavItem>
              <NavItem>
              <Button primary as="a" href="/">2019-10-08</Button>
              </NavItem>
              <NavItem>
              <Button primary as="a" href="/">2019-10-07</Button>
              </NavItem>
              <NavItem>
              <Button primary as="a" href="/">2019-10-06</Button>
              </NavItem>
              <NavItem>
              <Button primary as="a" href="/">2019-10-05</Button>
              </NavItem>
              <NavItem>
              <Button primary as="a" href="/">2019-10-04</Button>
              </NavItem>
              <NavItem>
              <Button primary as="a" href="/">2019-10-03</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}