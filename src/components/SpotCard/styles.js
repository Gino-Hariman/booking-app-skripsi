import styled from "styled-components";

export const SpotCardContainer = styled.button.attrs({
  className: "w-full relative rounded-lg overflow-hidden",
})``;

export const SpotCardImage = styled.img.attrs({
  className: "h-96 w-full min-w-[344px] object-cover",
})``;

export const SpotCardDetails = styled.div.attrs({
  className:
    "w-full absolute py-10 px-7 bottom-0 bg-gradient-to-r from-black-100 text-left",
})``;
