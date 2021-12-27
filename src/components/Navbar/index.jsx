import React, { useEffect, useState } from "react";
import { Container, NavContainer, NavLogo } from "./styles";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/image/logo_uph.png";
import LoggedButton from "./components/LoggedButton";
import LoginButton from "./components/LoginButton";

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
    navigate("/login");
  };
  return (
    <Container>
      <NavContainer>
        <button onClick={() => navigate("/")}>
          <NavLogo src={Logo} alt="logo_uph" />
        </button>
        {login ? <LoggedButton /> : <LoginButton onClick={handleLogin} />}
      </NavContainer>
    </Container>
  );
};

export default Navbar;
