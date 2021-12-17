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
import DualLayout from "../../../components/DualLayout";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";

const Login = () => {
  return (
    <DualLayout>
      <>
        <HeaderTitle>LOGIN</HeaderTitle>
        <InputContainer>
          <TextInput />
        </InputContainer>
        <Button text="Lanjut" />
      </>
    </DualLayout>
  );
};

export default Login;
