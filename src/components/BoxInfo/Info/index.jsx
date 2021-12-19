import React from "react";
import { InfoText, LabelText } from "./styles";

const Info = ({ label, info }) => (
  <div>
    <InfoText>{info}</InfoText>
    <LabelText>{label}</LabelText>
  </div>
);

export default Info;
