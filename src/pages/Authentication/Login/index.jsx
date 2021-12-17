import React from "react";
import { InputContainer } from "./styles";
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
