import React from "react";
import SeatItemDetail from "../../components/SeatItemDetail";
import { H1 } from "../../components/Typography";
import { Container } from "../../styles";
import { SeatItemGroup } from "./styles";

const MySeat = () => {
  return (
    <Container className="flex items-center justify-center">
      <div className="flex flex-col w-9/12 sm:w-7/12 items-center mb-2.5">
        <H1 className="font-semibold mb-20 text-black-100">My Seat</H1>
        <SeatItemGroup>
          <div className="mb-7 w-full">
            <SeatItemDetail />
          </div>
          <div className="mb-7 w-full">
            <SeatItemDetail />
          </div>
        </SeatItemGroup>
      </div>
    </Container>
  );
};

export default MySeat;
