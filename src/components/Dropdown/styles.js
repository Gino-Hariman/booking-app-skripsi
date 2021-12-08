import styled from "styled-components";
import tw from "twin.macro";

export const DropdownContainer = styled.div.attrs({
  className: "relative inline-block text-left w-full",
})``;

export const DropdownButton = styled.button.attrs({
  className:
    "inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
})``;

export const DropdownItemContainer = styled.div.attrs({
  className:
    "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none",
})``;

export const DropdownItem = styled.div.attrs({
  className: "py-1",
})`
  & {
    a {
      ${tw`text-gray-700 block px-4 py-2 text-sm`}
    }
  }
`;
