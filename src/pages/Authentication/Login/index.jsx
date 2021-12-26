import React, { useState } from "react";

import DualLayout from "../../../components/DualLayout";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import { H1 } from "../../../components/Typography";
import { InputContainer } from "../../../components/TextInput/styles";
import { userLogin } from "../../../api/apis";
import usePOST from "../../../hooks/usePOST";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const Login = () => {
  const navigation = useNavigate();
  const [inputData, setInputData] = useState("");
  const { handlePOST, isPOSTING } = usePOST({
    path: userLogin,
    callback: (res) => {
      if (res.type === "success") {
        navigation("/verify-otp", {
          state: {
            token: res?.token,
          },
        });
      }
    },
    errorCallback: (err) => console.log("err", err),
  });

  const handleLogin = () => {
    handlePOST({ nim: inputData });
  };

  console.log("inputData", inputData);
  return (
    <>
      <DualLayout>
        <>
          <H1>LOGIN</H1>
          <InputContainer>
            <TextInput inputData={inputData} setInputData={setInputData} />
          </InputContainer>
          <Button onClick={handleLogin} text="Lanjut" />
        </>
      </DualLayout>
    </>
  );
};

export default Login;
