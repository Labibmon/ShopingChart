import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
  } from 'reactstrap';
  import { Input } from 'semantic-ui-react'

export const NavbarComp = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return(
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Brand Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Shope
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem>
                  Man
                </DropdownItem>
                <DropdownItem>
                  Woman
                </DropdownItem>
                <DropdownItem>
                  All
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <div className="d-flex">
            <Input className="mr-3" size='mini' icon='search' placeholder='Search...' />
            <Button size="sm" color="primary">Login</Button>
          </div>
        </Collapse>
      </Navbar>
    )
}