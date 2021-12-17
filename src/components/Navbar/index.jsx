import React from "react";
import { Container, NavContainer, NavLogo } from "./styles";
import Logo from "../../assets/image/logo_uph.png";
import LoginButton from "./components/LoginButton";
import LoggedButton from "./components/LoggedButton";

const Navbar = () => {
  return (
    <Container>
      <NavContainer>
        <NavLogo src={Logo} alt="logo_uph" />
        {/* <LoginButton /> */}
        <LoggedButton />
      </NavContainer>
    </Container>
  );
};

export default Navbar;
