import styled from "styled-components";

export const TextInputContainer = styled.div.attrs({
  className: "flex flex-col w-full",
})``;

export const Label = styled.label.attrs({
  className: "text-H5 mb-1 font-medium leading-7 text-black-40",
})``;

export const StyledTextInput = styled.input.attrs({
  className:
    "rounded-full px-8 py-3 outline-none shadow-lg placeholder-black-20 text-black-40",
})``;
