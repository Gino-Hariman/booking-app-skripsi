import React from "react";
import { StyledCheckBox } from "./styles";

const CheckBox = ({ startTime, endTime }) => {
  return <StyledCheckBox>{`${startTime} - ${endTime}`}</StyledCheckBox>;
};

export default CheckBox;
