import styled from "styled-components";
import tw from "twin.macro";

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
