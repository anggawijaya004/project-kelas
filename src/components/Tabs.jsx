import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default function Tabs({ tab, handleClick }) {
  return (
    <Nav pills className='my-5'>
      <NavItem>
        <NavLink
          active={tab === 0 ? true : false}
          onClick={() => handleClick(0)}
        >
          Best Food
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          active={tab === 1 ? true : false}
          onClick={() => handleClick(1)}
        >
          Burger
        </NavLink>
      </NavItem>
      <NavItem >
        <NavLink disabled href="#">Breads</NavLink>
      </NavItem>
    </Nav>
  );
}
