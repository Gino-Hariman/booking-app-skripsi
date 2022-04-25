import React from "react";
import { HeaderContainer, Heading } from "./styles";

const Header = ({ title }) => (
  <HeaderContainer>
    <Heading>{title}</Heading>
  </HeaderContainer>
);

export default Header;
