import React from "react";
import { InfoContainer, Text } from "./styles";

const Info = ({ icon, text }) => (
  <InfoContainer>
    {icon}
    <Text>{text}</Text>
  </InfoContainer>
);

export default Info;
