import React from "react";
import { StyledCheckBox } from "./styles";

const CheckBox = ({ selected, startTime, endTime, handleSelect }) => {
  console.log("selected", selected);
  return (
    <StyledCheckBox
      selected={selected}
      onClick={handleSelect}
    >{`${startTime} - ${endTime}`}</StyledCheckBox>
  );
};

export default CheckBox;
