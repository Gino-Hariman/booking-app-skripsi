import React, { useEffect, useState } from "react";
import { Container, NavContainer, NavLogo } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/image/logo_uph.png";
import LoggedButton from "./components/LoggedButton";
import LoginButton from "./components/LoginButton";
import useAuth from "../../hooks/useAuth";

const Navbar = ({ onClick }) => {
  const state = useAuth();

  // useEffect(() => {
  //   localStorage.getItem("login_token");
  //   if (localStorage.getItem("login_token")) {
  //     setLogin(true);
  //   }
  // }, []);

  console.log("authed", state?.authed);

  return (
    <Container>
      <NavContainer>
        <Link to="/">
          <NavLogo src={Logo} alt="logo_uph" />
        </Link>
        {state?.authed ? (
          <LoggedButton />
        ) : (
          <Link to="/login">
            <LoginButton />
          </Link>
        )}
      </NavContainer>
    </Container>
  );
};

export default Navbar;
