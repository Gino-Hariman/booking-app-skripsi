import styled from "styled-components";
import tw, { styled as tStyled, theme, css } from "twin.macro";

export const DropdownContainer = styled.div.attrs({
  className: "relative inline-block text-left w-full",
})``;

export const DropdownButton = tStyled.button(({ selected }) => [
  tw`inline-flex justify-between w-full rounded-full border border-black-30 shadow-sm px-xl py-md bg-white text-H4 font-medium hover:bg-black-50`,

  selected ? tw`text-black-100` : tw`text-black-20`,
]);

export const DropdownContent = styled.div.attrs({
  className:
    "origin-top-left absolute right-0 mt-5 w-56 w-full rounded-md shadow-md bg-white divide-y divide-black-10 font-sans text-h5 font-medium",
})``;

export const DropdownItem = styled.div.attrs({
  className: "py-lg text-gray-700 block px-4 py-2 text-H4 cursor-pointer",
})``;
