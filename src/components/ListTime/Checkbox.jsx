import React from "react";
import { StyledCheckBox } from "./styles";

const CheckBox = ({ startTime, endTime, handleSelect }) => {
  return (
    <StyledCheckBox
      onClick={handleSelect}
    >{`${startTime} - ${endTime}`}</StyledCheckBox>
  );
};

export default CheckBox;
