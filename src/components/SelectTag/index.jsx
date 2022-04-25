import React from "react";
import StyledSelect from "./styles";

const SelectTag = ({ selected, onSelect, content, disabled }) => {
  return (
    <StyledSelect disabled={disabled} selected={selected} onClick={onSelect}>
      {content}
    </StyledSelect>
  );
};

export default SelectTag;
