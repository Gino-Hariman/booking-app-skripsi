import styled from "styled-components";
import tw from "twin.macro";

export const ListTimeContainer = styled.div.attrs({
  className: "w-4/5 py-5 border-y border-black-10 ",
})``;

export const ListTitle = styled.h5.attrs({
  className: "text-H5 font-medium ml-5 text-black-60",
})``;

export const ItemContainer = styled.div.attrs({
  className: "flex flex-wrap",
})``;

export const StyledCheckBox = styled.div.attrs({
  className:
    "w-max rounded-full ml-lg mt-4 px-5 py-2 border text-black-40 text-Tag font-semibold border-black-10 bg-white focus:bg-primary",
})`
  ${({ selected }) => (selected ? tw`bg-primary text-white` : tw`bg-white`)}
`;
