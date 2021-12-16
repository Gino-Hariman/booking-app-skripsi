import React from "react";
import Navbar from "../../../components/Navbar";
import { LeftImage, LoginContainer } from "./styles";
import imgOffice from "../../../assets/image/office.jpg";

const Login = () => {
  return (
    <LoginContainer>
      <Navbar />
      <LeftImage src={imgOffice} alt="login_image" />
    </LoginContainer>
  );
};

export default Login;
