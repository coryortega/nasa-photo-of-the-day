import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styled from "styled-components";

export const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid black;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
`;

function work(props) {
    
    return (
        <nav>
            <a><Button primary as="a" value="2019-10-09" onClick={() => props.select("2019-10-09")}>2019-10-09</Button></a>
            <a><Button primary as="a" value="2019-10-09" onClick={() => props.select("2019-10-08")}>2019-10-08</Button></a>
            <a><Button primary as="a" value="2019-10-09" onClick={() => props.select("2019-10-07")}>2019-10-07</Button></a>
            <a><Button primary as="a" value="2019-10-09" onClick={() => props.select("2019-10-06")}>2019-10-06</Button></a>
            <a><Button primary as="a" value="2019-10-09" onClick={() => props.select("2019-10-05")}>2019-10-05</Button></a>
            <a><Button primary as="a" value="2019-10-09" onClick={() => props.select("2019-10-04")}>2019-10-04</Button></a>
            <a><Button primary as="a" value="2019-10-09" onClick={() => props.select("2019-10-03")}>2019-10-03</Button></a>
        </nav>
    )
}
export default work;

// export default class work extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggleNavbar = this.toggleNavbar.bind(this);
//     this.state = {
//       collapsed: true
//     };
//   }

//   toggleNavbar() {
//     this.setState({
//       collapsed: !this.state.collapsed
//     });
//   }

  
//   render(props) {

//     return (
//       <div>
          
//         <Navbar color="faded" light>
//           <NavbarBrand href="/" className="mr-auto">Astronomy Photo of the Day!</NavbarBrand>
//           <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//           <Collapse isOpen={!this.state.collapsed} navbar>
//             <Nav navbar>
//               <NavItem>
//               <Button primary as="a" value="2019-10-09" onClick={() => props.select("2019-10-09")}>2019-10-09</Button>
//               </NavItem>
//               <NavItem>
//               <Button primary as="a" href="/" value="2019-10-08" >2019-10-08</Button>
//               </NavItem>
//               <NavItem>
//               <Button primary as="a" href="/">2019-10-07</Button>
//               </NavItem>
//               <NavItem>
//               <Button primary as="a" href="/">2019-10-06</Button>
//               </NavItem>
//               <NavItem>
//               <Button primary as="a" href="/">2019-10-05</Button>
//               </NavItem>
//               <NavItem>
//               <Button primary as="a" href="/">2019-10-04</Button>
//               </NavItem>
//               <NavItem>
//               <Button primary as="a" href="/">2019-10-03</Button>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }
