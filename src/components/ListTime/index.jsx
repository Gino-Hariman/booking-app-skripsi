import React from "react";
import CheckBox from "./Checkbox";
import { ItemContainer, ListTimeContainer, ListTitle } from "./styles";

const scheduleTime = [
  { id: 1, startTime: "08.00", endTime: "13.00" },
  { id: 2, startTime: "13.00", endTime: "14.00" },
  { id: 1, startTime: "08.00", endTime: "13.00" },
  { id: 2, startTime: "13.00", endTime: "14.00" },
  { id: 1, startTime: "08.00", endTime: "13.00" },
  { id: 2, startTime: "13.00", endTime: "14.00" },
];

const ListTime = () => {
  return (
    <ListTimeContainer>
      <ListTitle>Morning</ListTitle>
      <ItemContainer>
        {scheduleTime.map(({ startTime, endTime, id }) => (
          <CheckBox startTime={startTime} endTime={endTime} id={id} />
        ))}
      </ItemContainer>
    </ListTimeContainer>
  );
};

export default ListTime;
