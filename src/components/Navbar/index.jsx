import React from "react";
import { Container, NavContainer, NavLogo } from "./styles";
import Logo from "../../assets/image/logo_uph.png";

const Navbar = () => {
  return (
    <Container>
      <NavContainer>
        <NavLogo src={Logo} alt="logo_uph" />
      </NavContainer>
    </Container>
  );
};

export default Navbar;
