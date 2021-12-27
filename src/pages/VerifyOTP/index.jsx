import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifOTP } from "../../api/apis";
import Button from "../../components/Button";
import DualLayout from "../../components/DualLayout";
import OTPInput from "../../components/OTPInput";
import { Body, H1 } from "../../components/Typography";
import usePOST from "../../hooks/usePOST";
import ResendOTP from "../Authentication/Login/ResendOTP";

const VerifyOTP = ({ studentName = "" }) => {
  const navigation = useNavigate();
  const { state } = useLocation();
  const [inputData, setInputData] = useState("");

  const { handlePOST, isPOSTING } = usePOST({
    path: verifOTP,
    callback: (res) => {
      if (res?.type === "success") {
        localStorage.setItem("login_token", res?.loginToken);
        navigation("/");
      }
    },
    errorCallback: (err) => console.log("erro00", err),
  });

  const handleVerifyOTP = () => {
    if (inputData.length === 6) {
      handlePOST({
        otp: inputData,
        token: state?.token,
      });
    }
  };

  return (
    <DualLayout>
      <>
        <H1 className="mb-2 text-center">Verify Account</H1>
        <Body className="mb-8 text-black-40 break-words text-center">
          Enter the verification code that send to <br /> {studentName}{" "}
        </Body>
        <OTPInput
          isNumberInput
          autoFocus
          length={6}
          onChangeOTP={setInputData}
        />
        <div className="mt-8 mb-6">
          <Button
            disable={inputData?.length !== 6}
            onClick={handleVerifyOTP}
            text={"Continue"}
          />
        </div>
        <ResendOTP />
      </>
    </DualLayout>
  );
};

export default VerifyOTP;
