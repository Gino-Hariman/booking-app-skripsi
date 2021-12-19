import React from "react";
import StyledSelect from "./styles";

const SelectTag = ({ selected, onSelect, content }) => (
  <StyledSelect selected={selected} onClick={onSelect}>
    {content}
  </StyledSelect>
);

export default SelectTag;
