import React from "react";
import { MenuText, SideBarContainer } from "./styles";
import NavLink from "./NavLink";
import UPHLogo from "./UPHLogo";

const SideBar = ({ routes }) => (
  <SideBarContainer>
    <UPHLogo />
    <MenuText>Menu</MenuText>
    {routes.map((route) => (
      <NavLink title={route.title} path={route.path} icon={route.icon} />
    ))}
  </SideBarContainer>
);

export default SideBar;
