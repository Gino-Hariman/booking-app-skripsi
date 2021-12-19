import React from "react";
import Button from "../../components/Button";
import DualLayout from "../../components/DualLayout";
import OTPInput from "../../components/OTPInput";
import { Body, H1 } from "../../components/Typography";

const VerifyOTP = ({ studentName = "" }) => {
  return (
    <DualLayout>
      <>
        <H1 className="mb-2 text-center">Verify Account</H1>
        <Body className="mb-8 text-black-40 break-words text-center">
          Enter the verification code that send to <br /> {studentName}
        </Body>
        <OTPInput
          isNumberInput
          autoFocus
          length={6}
          onChangeOTP={(otp) => console.log("Number OTP: ", otp)}
        />
        <div className="mt-8">
          <Button text={"Continue"} />
        </div>
      </>
    </DualLayout>
  );
};

export default VerifyOTP;
