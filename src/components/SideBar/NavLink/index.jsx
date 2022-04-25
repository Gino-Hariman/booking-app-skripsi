import React from "react";
import { useMatch } from "react-router-dom";
import { NavContainer, Nav, Text } from "./styles";

const NavLink = ({ path, title, icon }) => {
  const match = useMatch({ path });
  return (
    <Nav to={path}>
      <NavContainer active={match}>
        {icon}
        <Text active={match}>{title}</Text>
      </NavContainer>
    </Nav>
  );
};

export default NavLink;
