import styled from "styled-components";
import tw, { styled as tStyled, theme, css } from "twin.macro";

export const DropdownContainer = styled.div.attrs({
  className: "relative inline-block text-left w-full",
})``;

export const DropdownButton = tStyled.button(({ selected }) => [
  tw`inline-flex justify-between w-full rounded-full border border-black-30 shadow-sm px-9 py-5 bg-white text-Caption font-medium hover:bg-black-50`,

  selected ? tw`text-black-100` : tw`text-black-20`,
]);

export const DropdownContent = styled.div.attrs({
  className:
    "origin-top-left absolute right-0 mt-5 w-56 w-full rounded-md shadow-md bg-white divide-y divide-black-10 font-sans text-H4 font-medium",
})``;

export const DropdownItem = styled.div.attrs({
  className: "py-5 px-9 text-black-40 text-H4 cursor-pointer",
})``;
