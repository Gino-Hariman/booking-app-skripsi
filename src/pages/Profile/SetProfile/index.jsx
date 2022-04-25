import React from "react";
import Button from "../../../components/Button";
import DualLayout from "../../../components/DualLayout";
import TextInput from "../../../components/TextInput";
import { InputContainer } from "../../../components/TextInput/styles";
import { H1 } from "../../../components/Typography";

const SetProfile = () => {
  return (
    <DualLayout>
      <>
        <H1>Input Your Data</H1>
        <InputContainer>
          <TextInput />
          <TextInput />
          <TextInput />
          <TextInput />
        </InputContainer>
        <Button text="Continue" />
      </>
    </DualLayout>
  );
};

export default SetProfile;
