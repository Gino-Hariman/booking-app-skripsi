import React from "react";
import Navbar from "../../../components/Navbar";
import { ImageContainer, LeftImage, LoginContainer } from "./styles";
import imgOffice from "../../../assets/image/office.jpg";

const Login = () => {
  return (
    <LoginContainer>
      <Navbar />
      <ImageContainer>
        <LeftImage src={imgOffice} alt="login_image" />
      </ImageContainer>
    </LoginContainer>
  );
};

export default Login;
