import React from "react";
import ActionContainer from "./styles";
import { RedButton, SuccessButton } from "../../../../components/buttons";

const BookingAction = () => (
  <ActionContainer>
    <SuccessButton>Accept</SuccessButton>
    <RedButton>Reject</RedButton>
  </ActionContainer>
);

export default BookingAction;
