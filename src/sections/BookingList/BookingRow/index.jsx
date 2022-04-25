import React from "react";
import BookingInfo from "./BookingInfo";
import BookingAction from "./BookingAction";
import {
  RowContainer,
  Id,
  Headline,
  BookingPlace,
  StudentName,
} from "./styles";

const BookingRow = ({
  id,
  date,
  time,
  place: { building, spot, table, seat },
  student: { nim, studentClass, name },
}) => (
  <RowContainer>
    <div>
      <Id>{`ID: ${id}`}</Id>
      <Headline>
        <BookingPlace>{`${building} ${spot} ${table} ${seat} - `}</BookingPlace>
        &nbsp;
        <StudentName>{name}</StudentName>
      </Headline>
      <BookingInfo
        date={date}
        time={time}
        nim={nim}
        studentClass={studentClass}
      />
    </div>
    <BookingAction />
  </RowContainer>
);

export default BookingRow;
