import styled from "styled-components";

export const LayoutContainer = styled.div.attrs({
  className: "flex flex-col max-h-screen  w-auto bg-primary ",
})``;

export const LeftContainer = styled.div.attrs({
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
