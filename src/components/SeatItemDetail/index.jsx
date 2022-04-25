import React from "react";
import { Body, Caption, H4 } from "../Typography";
import { SeatDetails, SeatItemContainer, SeatItemStatus } from "./styles";
import ClockIcon from "../icons/Clock";
import DateIcon from "../icons/Date";

const SeatItemDetail = () => {
  return (
    <SeatItemContainer>
      <Caption className="text-black-40 mt-2.5">ID : 0080122</Caption>
      <H4 className="text-black-100 my-2.5">Aryaduta Spot AA1</H4>
      <SeatDetails>
        <div className="flex mb-2.5 space-x-5">
          <div className="flex">
            <ClockIcon />
            <Body className="ml-2.5 text-black-70">10.00 - 11.00</Body>
          </div>
          <div className="flex">
            <DateIcon />
            <Body className="ml-2.5 text-black-70">10.00 - 11.00</Body>
          </div>
        </div>
        <SeatItemStatus>Processing</SeatItemStatus>
      </SeatDetails>
    </SeatItemContainer>
  );
};

export default SeatItemDetail;
