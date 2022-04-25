import React, { useState } from "react";

import DualLayout from "../../../components/DualLayout";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import { H1 } from "../../../components/Typography";
import { InputContainer } from "../../../components/TextInput/styles";
import { userLogin } from "../../../api/apis";
import usePOST from "../../../hooks/usePOST";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Notification from "../../../components/Notification";
import Loading from "../../../components/Loading";

const Login = () => {
  const navigation = useNavigate();
  const [inputData, setInputData] = useState("");
  const { state } = useLocation();
  const { handlePOST, isPOSTING } = usePOST({
    path: userLogin,
    callback: (res) => {
      console.log("res", res);
      if (res.type === "error") {
        console.log("error message", res.message);
      }
      if (res.type === "success") {
        navigation("/verify-otp", {
          state: {
            token: res?.token,
            path: state?.path,
            nim: inputData,
          },
        });
      }
    },
    errorCallback: (err) => console.log("err", err),
  });

  const handleLogin = () => {
    handlePOST({ email: inputData });
  };

  if (isPOSTING) return <Loading />;

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
