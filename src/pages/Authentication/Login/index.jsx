import React from "react";
import { InputContainer } from "./styles";
import DualLayout from "../../../components/DualLayout";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import { H1 } from "../../../components/Typography";

const Login = () => {
  return (
    <DualLayout>
      <>
        <H1>LOGIN</H1>
        <InputContainer>
          <TextInput />
        </InputContainer>
        <Button text="Lanjut" />
      </>
    </DualLayout>
  );
};

export default Login;
