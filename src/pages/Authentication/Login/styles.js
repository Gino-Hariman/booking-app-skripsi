import styled from "styled-components";

export const LoginContainer = styled.div.attrs({
  className: "flex flex-col flex-1 w-auto h-screen max-h-full",
})``;

export const ImageContainer = styled.div.attrs({
  className: "flex w-1/2 h-full items-center hidden xl:flex",
})``;

export const LeftImage = styled.img.attrs({
  className: "object-cover h-5/6 rounded-r-md flex self-center",
})``;

export const Container = styled.div.attrs({
  className: "flex flex-1 w-full items-center",
})``;

export const RightContainer = styled.div.attrs({
  className:
    "flex flex-1 w-full h-full h-5/6 items-center flex-col justify-center",
})``;

export const InputContainer = styled.div.attrs({
  className: "mt-16 mb-32 bg-blue w-3/4 max-w-xl",
})``;
