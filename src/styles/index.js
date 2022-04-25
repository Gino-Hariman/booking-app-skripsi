import styled from "styled-components";
import tw, { styled as tStyled } from "twin.macro";

const StyledForm = styled.main.attrs({
  className: "flex flex-col h-screen justify-center items-center bg-black-10",
})`
  & {
    form {
      ${tw`bg-white text-center rounded py-7 px-4 shadow max-w-xs`}
    }
    input {
      ${tw`border-black-30 mb-11 w-full border-solid border rounded py-7 px-4`}
    }
    button {
      ${tw`bg-success-main hover:bg-success-hover text-white font-bold py-2 px-4 border border-info-pressed rounded`}
    }
  }
`;
export default StyledForm;

export const test = tStyled.button(({ selected }) => [
  tw`inline-flex justify-between w-full rounded-full border border-black-30 shadow-sm px-8 py-3 bg-white 
  border-0 shadow-lg text-Caption capitalize hover:bg-black-10`,

  selected ? tw`text-black-100` : tw`text-black-20`,
]);

export const Container = styled.div.attrs({
  className: "w-full h-screen",
})``;
