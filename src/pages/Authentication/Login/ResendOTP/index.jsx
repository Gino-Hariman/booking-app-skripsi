import React, { useEffect, useState } from "react";
import { Body } from "../../../../components/Typography";

const ResendOTP = () => {
  const [counter, setCounter] = useState("90");

  const onClick = () => {
    setCounter(90);
  };

  useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setTimeout(() => setCounter((c) => c - 1), 1000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter]);
  return (
    <Body className="text-black-40">
      Don't receive code? ({counter}s){" "}
      <button onClick={onClick} className="underline text-black-100">
        Resend
      </button>
    </Body>
  );
};

export default ResendOTP;
