import React, { useEffect, useState } from "react";
import { Container, NavContainer, NavLogo } from "./styles";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/image/logo_uph.png";
import LoggedButton from "./components/LoggedButton";
import LoginButton from "./components/LoginButton";
import Session from "../../api/auth";

const Navbar = ({ onClick }) => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("login_token");
    if (localStorage.getItem("login_token")) {
      setLogin(true);
    }
  }, []);

  const handleLogin = () => {
    console.log("login in");
    navigate("/login");
  };
  return (
    <Container onClick={handleLogin}>
      <NavContainer>
        <NavLogo src={Logo} alt="logo_uph" />
        {login ? <LoggedButton /> : <LoginButton />}
      </NavContainer>
    </Container>
  );
};

export default Navbar;
