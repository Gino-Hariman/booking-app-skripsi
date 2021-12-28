import styled, { keyframes } from "styled-components";
import tw, { styled as tStyled } from "twin.macro";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    margin-left: 300px;
  }
  100% {
    opacity: 1;
    margin-left: 0px;
  }
`;

export const NotifContainer = tStyled.div`
  animation: 0.3s ${fadeIn} ease-out;
grid-template-columns: 50px minmax(0px, 1fr) 30px;
  ${tw`
    grid box-border p-4 rounded-md 
  `}

  .icon {
    width: 35px;
    height: 35px;
    padding-right: 12px;
  }

`;

export const Title = tStyled.p`
  ${tw`text-Caption font-bold m-0 mb-2`}
`;

export const Message = tStyled.p`
${tw`text-Tag font-semibold m-0`}`;

export const Close = tStyled.div`
  ${tw`cursor-pointer`}
`;
