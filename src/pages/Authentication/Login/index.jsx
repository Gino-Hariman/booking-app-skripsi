import React from "react";
import Navbar from "../../../components/Navbar";
import {
  Container,
  ImageContainer,
  InputContainer,
  LeftImage,
  LoginContainer,
  RightContainer,
} from "./styles";
import imgOffice from "../../../assets/image/office.jpg";
import { HeaderTitle } from "../styles";
import Button from "components/Button";
import TextInput from "components/TextInput";

const Login = () => {
  return (
    <LoginContainer>
      <Navbar />
      <Container>
        <ImageContainer>
          <LeftImage src={imgOffice} alt="login_image" />
        </ImageContainer>
        <RightContainer>
          <HeaderTitle>Login</HeaderTitle>
          <InputContainer>
            <TextInput />
          </InputContainer>
          <Button text="Lanjut" />
        </RightContainer>
      </Container>
    </LoginContainer>
  );
};

export default Login;
