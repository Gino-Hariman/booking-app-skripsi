import styled from "styled-components";
import { Body } from "../../components/Typography";
import tw, { styled as tStyled } from "twin.macro";

export const SeatItemContainer = styled.div.attrs({
  className: "w-full border-b border-black-10",
})``;

export const SeatDetails = styled.div.attrs({
  className: "flex justify-between",
})``;

export const SeatItemStatus = tStyled.body(({ approved, processing }) => [
  processing && tw`text-primary`,

  approved ? tw`text-danger-main` : tw`text-success-hover`,
]);
