import React from "react";
import BookingRow from "./BookingRow";
import { ListContainer } from "./styles";

const BookingList = () => (
  <ListContainer>
    <BookingRow
      id="1234"
      place={{ building: "Aryaduta", spot: "Lounge", table: "A", seat: "A1" }}
      date="24 Agustus 2021"
      time="18.00 - 19.00"
      student={{
        name: "Gino Hariman",
        nim: "03082819933",
        studentClass: "18 TI 2",
      }}
    />
    <BookingRow
      id="1234"
      place={{ building: "Aryaduta", spot: "Lounge", table: "A", seat: "A1" }}
      date="24 Agustus 2021"
      time="18.00 - 19.00"
      student={{
        name: "Gino Hariman",
        nim: "03082819933",
        studentClass: "18 TI 2",
      }}
    />
    <BookingRow
      id="1234"
      place={{ building: "Aryaduta", spot: "Lounge", table: "A", seat: "A1" }}
      date="24 Agustus 2021"
      time="18.00 - 19.00"
      student={{
        name: "Gino Hariman",
        nim: "03082819933",
        studentClass: "18 TI 2",
      }}
    />
  </ListContainer>
);

export default BookingList;
