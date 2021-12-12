import styled from "styled-components";
import tw from "twin.macro";

const StyledForm = styled.main.attrs({
  className: "flex flex-col h-screen justify-center items-center bg-black-10",
})`
  & {
    form {
      ${tw`bg-white text-center rounded py-lg px-md shadow max-w-xs`}
    }
    input {
      ${tw`border-black-30 mb-16 w-full border-solid border rounded py-sm px-md`}
    }
    button {
      ${tw`bg-success-main hover:bg-success-hover text-white font-bold py-sm px-md border border-info-pressed rounded`}
    }
  }
`;
export default StyledForm;
