import styled from "styled-components";
import tw from "twin.macro";

const StyledSelect = styled.div.attrs({
  className:
    "w-max rounded-full ml-lg mt-4 px-5 py-2 border text-black-40 text-Tag font-semibold border-black-10 bg-white focus:bg-primary",
})`
  ${({ selected }) => (selected ? tw`bg-primary text-white` : tw`bg-white`)}
  cursor: pointer;
`;

export default StyledSelect;
